function climbStairs(n){
    const steps = [0, 1, 2];
    for(let i = 3; i <= n; i++){
        steps[i] = steps[i - 1] + steps[i - 2];
    }
    return steps[n];
}

console.log(climbStairs(2));
console.log(climbStairs(3));