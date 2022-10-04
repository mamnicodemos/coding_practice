function maxProduct(nums){
    let maxnum = new Array(nums.length);
    let minnum = new Array(nums.length);
    let result = nums[0];
    maxnum[0] = result;
    minnum[0] = result;
    for(let i = 1; i < nums.length; i++){
        if(nums[i] > 0){
            maxnum[i] = Math.max(nums[i], maxnum[i - 1] * nums[i]);
            minnum[i] = Math.min(nums[i], minnum[i - 1] * nums[i]);
        } else {
            maxnum[i] = Math.max(nums[i], minnum[i - 1] * nums[i]);
            minnum[i] = Math.min(nums[i], maxnum[i - 1] * nums[i]);
        }
        result = Math.max(result, maxnum[i]);
    }
    return result;
}

console.log(maxProduct([2,3,-2,4]));
console.log(maxProduct([-2,0,-1]));