function rob(nums){
    if(nums.length == 1){
        return nums[0];
    }
    if(nums.length == 2){
        return Math.max(nums[0], nums[1]);
    }
    const dp = Array(nums.length).fill(0);
    dp[0] = nums[0];
    dp[1] = nums[1];
    dp[2] = nums[2] + nums[0];
    for(let i = 3; i < nums.length; i++){
        dp[i] = Math.max(dp[i - 2], dp[i - 3]) + nums[i];
    }
    return Math.max(dp[nums.length - 1], dp[nums.length - 2]);
}

console.log(rob([1,2,3,1]));
console.log(rob([2,7,9,3,1]));