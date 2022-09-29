function maximumSlice(A){
    let max1 = 0;
    let max2 = 0;
    for(let a of A){
        max1 = Math.max(0, max1 + a);
        max2 = Math.max(max1, max2);
    }
    return max2;
}

console.log(maximumSlice([1, 2, 3, 4, 5]));
console.log(maximumSlice([-1, 2, -3, 4, -5]));