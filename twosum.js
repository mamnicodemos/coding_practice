function twoSum(nums, target){
    const numsIndices = new Object();
    for(let i = 0; i < nums.length; i++){
        if((target - nums[i]) in numsIndices){
            return [numsIndices[target - nums[i]], i];
        } else {
            numsIndices[nums[i]] = i;
        }
    }
}

console.log(twoSum([2,7,11,15],9));
console.log(twoSum([3,2,4],6));
console.log(twoSum([3,3],6));