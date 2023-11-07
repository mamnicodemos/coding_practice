/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const output = [];
    helper(output, "", 0, 0, n);
    return output;
};

function helper(output, parentheses, open, close, n){
    if(open == n && close == n){
        output.push(parentheses);
        return;
    }

    if(open < n){
        helper(output, parentheses + "(", open + 1, close, n);
    }
    if(open > close){
        helper(output, parentheses + ")", open, close + 1, n);
    }
}
