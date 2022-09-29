function fibonacciDynamic(n){
    const fib = Array(n + 2).fill(0);
    fib[1] = 1;
    for(let i = 2; i <= n; i++){
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n];
}

function fibonacci(n){
    const fib = [0, 1];
    for(let i = 2; i <= n; i++){
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n];
}

console.log(fibonacciDynamic(5));
console.log(fibonacci(5));
console.log(fibonacci(7));
console.log(fibonacciDynamic(7));
console.log(fibonacci(10));
console.log(fibonacciDynamic(10));
console.log(fibonacci(11));