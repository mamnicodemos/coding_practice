function coinChange(coins, amount){
    let dp = Array(amount + 1).fill(amount + 1);
    dp[0] = 0;
    for(let i = 1; i < amount + 1; i++){
        for(let coin of coins){
            if(i - coin >= 0){
                dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
            }
        }
    }
    return (dp[amount] != amount + 1 ? dp[amount] : -1);
}

console.log(coinChange([1,2,5], 11));
console.log(coinChange([2], 3));
console.log(coinChange([1], 0));