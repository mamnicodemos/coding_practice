function lowestCommonAncestor(root, p, q){
    if(root.val > p.val && root.val < q.val){
        return root;
    } else if(root.val > p.val && root.val > q.val){
        return lowestCommonAncestor(root.left, p, q);
    } else if(root.val < p.val && root.val < q.val){
        return lowestCommonAncestor(root.right, p, q);
    }
    return root;
}