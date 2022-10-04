function numIslands(grid){
    let count = 0;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] == 1){
                count++;
                callBFS(grid, i, j);
            }
        }
    }
    return count;
}

function callBFS(grid, i, j){
    if(i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] == 0){
        return;
    }
    grid[i][j] = 0;
    callBFS(grid, i + 1, j);
    callBFS(grid, i - 1, j);
    callBFS(grid, i, j + 1);
    callBFS(grid, i, j - 1);
}

let grid = [
    [1, 1, 1, 1, 0],
    [1, 1, 0, 1, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0]
];
console.log(numIslands(grid));
grid = [
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1]
];
console.log(numIslands(grid));