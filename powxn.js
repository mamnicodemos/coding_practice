/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n < 0){
        return 1 / helper(x, Math.abs(n));
    }
    return helper(x, Math.abs(n));
};

function helper(x, n){
    if(x == 0){
        return x;
    }
    if(n == 0){
        return 1;
    }
    let answer = helper(x, Math.floor(n / 2));
    answer *= answer;
    if(n % 2 == 1){
        answer *= x;
    }
    return answer;
}
