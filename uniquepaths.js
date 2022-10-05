function uniquePaths(m, n){
    const dp = Array(n + 1).fill(1);
    for(let i = m - 1; i > 0; i--){
        for(let j = n - 1; j > 0; j--){
            dp[j] = dp[j] + dp[j + 1];
        }
    }
    return dp[1];
}

console.log(uniquePaths(3, 7));
console.log(uniquePaths(3, 2));