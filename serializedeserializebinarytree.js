/**
 * Definition for a binary tree node. */
 function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
 

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 var serialize = function(root) {
    let output = [];
    helper(root, output);
    return output.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    data = data.split(",");
    let index = 0;
    function helper2(data){
        if(index > data.length || data[index] == "null"){
            return null;
        }
        let root = new TreeNode(parseInt(data[index]));
        index++;
        root.left = helper2(data);
        index++;
        root.right = helper2(data);
        return root;
    }
    return helper2(data, index);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

function helper(root, output){
    if(!root){
        output.push("null");
        return;
    }
    output.push(root.val);
    helper(root.left, output);
    helper(root.right, output);
}