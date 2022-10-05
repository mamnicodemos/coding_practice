var MedianFinder = function() {
    this.nums = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    const index = this.nums.findIndex(v => v > num);
    if(index == -1){
        this.nums.push(num);
    } else {
        this.nums.splice(index, 0, num);
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    let mid = Math.floor(this.nums.length / 2);
    if(this.nums.length % 2 == 0){
        let num1 = this.nums[mid];
        let num2 = this.nums[mid - 1];
        return ((num1 + num2) / 2).toFixed(1);
    }
    return this.nums[mid];
};