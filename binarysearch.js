function binarySearch(A, x){
    let n = A.length;
    let start = 0;
    let end = n - 1;
    let result = -1;
    while(start <= end){
        let mid = Math.floor((start + end) / 2);
        if(A[mid] <= x){
            start = mid + 1;
            result = mid;
        } else {
            end = mid - 1;
        }
    }
    return result;
}

console.log(binarySearch([0, 1, 2, 3, 4, 5, 6, 7], 5));
console.log(binarySearch([0, 2], 1));