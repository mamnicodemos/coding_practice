function cloneGraph(node){
    const seen = new Object();
    const dfs = (node) => {
        if(!node){
            return node;
        }
        if(seen[node.val] != null){
            return seen[node.val];
        }
        const root = new Node(node.val);
        seen[node.val] = root;
        node.neighbors.forEach(n => root.neighbors.push(dfs(n)));
        return root;
    }
    return dfs(node);
}

function Node(val, neighbors){
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
};