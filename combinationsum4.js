function combinationSum4(nums, target){
    let dp = new Uint32Array(target + 1);
    dp[0] = 1;
    for(let i = 1; i <= target; i++){
        for(let num of nums){
            if(num <= i){
                dp[i] += dp[i - num];
            }
        }
    }
    return dp[target];
}

console.log(combinationSum4([1,2,3], 4));
console.log(combinationSum4([9], 3));