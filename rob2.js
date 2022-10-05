function rob(nums){
    return Math.max(nums[0], helper(nums.slice(1)), helper(nums.slice(0, nums.length - 1)));
}

function helper(nums){
    let rob1 = 0;
    let rob2 = 0;
    for(let num of nums){
        let newrob = Math.max(rob1 + num, rob2);
        rob1 = rob2;
        rob2 = newrob;
    }
    return rob2;
}

console.log(rob([2,3,2]));
console.log(rob([1,2,3,1]));
console.log(rob([1,2,3]));