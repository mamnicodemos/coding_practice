function containsDuplicate(nums){
    const seenNums = {};
    for(let i = 0; i < nums.length; i++){
        if(!(nums[i] in seenNums)){
            seenNums[nums[i]] = 0;
        }
    }
    return !(Object.keys(seenNums).length == nums.length);
}

console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3,4]));
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));