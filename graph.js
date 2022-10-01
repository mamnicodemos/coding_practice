class Graph {
    constructor(noOfVertices){
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }
    addVertex(v){
        this.AdjList.set(v, []);
    }
    addEdge(v, w){
        this.AdjList.get(v).push(w);
        this.AdjList.get(w).push(v); // for undirected graphs
    }
    printGraph(){
        //console.log(this.AdjList);
        const graphKeys = this.AdjList.keys();
        for(let i of graphKeys){
            let keyValues = this.AdjList.get(i);
            let conc = "";
            for(let j of keyValues){
                conc += j + " ";
            }
            console.log(i + " -> " + conc);
        }
    }
    bfs(v){
        const visited = new Object();
        const q = [];
        visited[v] = true;
        q.push(v);
        while(q.length > 0){
            let getFirstInQ = q.shift();
            console.log(getFirstInQ);
            let getFirstList = this.AdjList.get(getFirstInQ);
            for(let i in getFirstList){
                let n = getFirstList[i];
                if(!(n in visited)){
                    visited[n] = true;
                    q.push(n);
                }
            }
        }
    }
    dfs(v){
        const visited = new Object();
        this.DFSUtil(v, visited);
    }
    DFSUtil(v, w){
        w[v] = true;
        console.log(v);
        const neighbors = this.AdjList.get(v);
        for(let i in neighbors){
            let elem = neighbors[i];
            if(!w[elem]){
                this.DFSUtil(elem, w);
            }
        }
    }
}

const graph = new Graph(6);
const vertices = ['A', 'B', 'C', 'D', 'E', 'F'];
for(let i = 0; i < vertices.length; i++){
    graph.addVertex(vertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'D');
graph.addEdge('A', 'E');
graph.addEdge('B', 'C');
graph.addEdge('D', 'E');
graph.addEdge('E', 'F');
graph.addEdge('E', 'C');
graph.addEdge('C', 'F');
graph.printGraph();
graph.bfs('A');
graph.dfs('A');