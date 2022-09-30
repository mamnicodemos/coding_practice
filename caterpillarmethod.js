function caterpillarMethod(A, s){
    let n = A.length;
    let front = 0;
    let total = 0;
    for(let i = 0; i < n; i++){
        while(front < n && total + A[front] <= s){
            total += A[front];
            front++;
        }
        if(total == s){
            return true;
        }
        total -= A[i];
    }
    return false;
}