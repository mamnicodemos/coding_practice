/**
 * @param {number} n
 * @return {number}
 */
const cache = {};
var fib = function(n) {
    if(n in cache){
        return cache[n];
    }
    let result;
    if(n < 2){
        result = n;
    } else {
        result = fib(n - 1) + fib(n - 2);
    }
    cache[n] = result;
    return result;
};
