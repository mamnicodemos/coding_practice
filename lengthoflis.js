function lengthOfLIS(nums){
    let dp = Array(nums.length);
    dp[0] = 1;
    for(let i = 0; i < nums.length; i++){
        let max = 0;
        for(let j = 0; j < i; j++){
            if(nums[i] > nums[j]){
                max = Math.max(dp[j], max);
            }
        }
        dp[i] = max + 1;
    }
    return Math.max(...dp);
}

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));
console.log(lengthOfLIS([0,1,0,3,2,3]));
console.log(lengthOfLIS([7,7,7,7,7,7,7]));