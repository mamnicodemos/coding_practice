function longestConsecutive(nums){
    const seenNums = new Set();
    for(let num of nums){
        seenNums.add(num);
    }
    let maxlen = 0;
    seenNums.forEach(number => {
        if(!seenNums.has(number - 1)){
            let currnum = number;
            let currlen = 1;
            while(seenNums.has(currnum + 1)){
                currnum++;
                currlen++;
            }
            maxlen = Math.max(maxlen, currlen);
        }
    });
    return maxlen;
}

console.log(longestConsecutive([100,4,200,1,3,2]));
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));