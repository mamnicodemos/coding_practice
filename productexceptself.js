function productExceptSelf(nums){
    const products1 = [1];
    for(let i = 0; i < nums.length; i++){
        products1.push(products1[i] * nums[i]);
    }
    const products2 = new Array(nums.length);
    products2[nums.length - 1] = 1;
    for(let i = nums.length - 1; i > 0; i--){
        products2[i - 1] = products2[i] * nums[i];
    }
    const output = [];
    for(let i = 0; i < nums.length; i++){
        output.push(products1[i] * products2[i]);
    }
    return output;
}

console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([-1,1,0,-3,3]));