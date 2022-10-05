function canJump(nums){
    let lastGoodIndex = nums.length - 1;
    for(let i = nums.length - 1; i >= 0; i--){
        if(i + nums[i] >= lastGoodIndex){
            lastGoodIndex = i;
        }
    }
    return lastGoodIndex == 0;
}

console.log(canJump([2,3,1,1,4]));
console.log(canJump([3,2,1,0,4]));