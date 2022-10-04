function search(nums, target){
    let l = 0;
    let r = nums.length - 1;
    while(l < r){
        let mid = l + parseInt((r - l) / 2);
        if(nums[mid] > nums[r]){
            l = mid + 1;
        } else {
            r = mid;
        }
    }

    let start = l;
    l = 0;
    r = nums.length - 1;

    if(target >= nums[start] && target <= nums[r]){
        l = start;
    } else {
        r = start;
    }

    while(l <= r){
        let mid = l + parseInt((r - l) / 2);
        if(nums[mid] == target){
            return mid;
        } else if(nums[mid] < target){
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }

    return -1;
}

console.log(search([4,5,6,7,0,1,2], 0));
console.log(search([4,5,6,7,0,1,2], 3));
console.log(search([1], 0));