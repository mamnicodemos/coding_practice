function findMajority(nums){
    let elem;
    let count = 0;
    for(let num of nums){
        if(count == 0){
            elem = num;
        }
        if(num == elem){
            count++;
        } else {
            count--;
        }
    }
    return elem;
}

console.log(findMajority([0, 0, 1, 2]));
console.log(findMajority([1, 2, 3]));