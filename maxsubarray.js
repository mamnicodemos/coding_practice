function maxSubArray(nums){
    let maxEnd = nums[0];
    let maxSlice = maxEnd;
    for(let i = 1; i < nums.length; i++){
        maxEnd = Math.max(nums[i], maxEnd + nums[i]);
        maxSlice = Math.max(maxSlice, maxEnd);
    }
    return maxSlice;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5,4,-1,7,8]));