function canFinish(numCourses, prerequisites){
    const graph = Array.from(Array(numCourses), () => []);
    const ranks = Array(numCourses).fill(0);
    for(const [u, v] of prerequisites){
        graph[v].push(u);
        ++ranks[u];
    }
    const queue = [];
    ranks.forEach((r, i) => {
       if(!r){
           queue.push(i);
       }
    });
    while(queue.length){
        const f = queue.shift();
        --numCourses;
        graph[f].forEach(neigh => {
            if(!--ranks[neigh]){
                queue.push(neigh);
            }
        })
    }
    return !numCourses;
}

console.log(canFinish(2, [[1,0]]));
console.log(canFinish(2, [[1,0],[0,1]]));