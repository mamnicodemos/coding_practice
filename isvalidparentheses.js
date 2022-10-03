function isValidParentheses(s){
    if(s.length == 1){
        return false;
    }
    const stack = [];
    for(let i = 0; i < s.length; i++){
        switch(s[i]){
            case '(':
                stack.push(s[i]);
                break;
            case '[':
                stack.push(s[i]);
                break;
            case '{':
                stack.push(s[i]);
                break;
            case ')':
                if(stack[stack.length - 1] == '('){
                    stack.pop();
                } else {
                    return false;
                }
                break;
            case ']':
                if(stack[stack.length - 1] == '['){
                    stack.pop();
                } else {
                    return false;
                }
                break;
            case '}':
                if(stack[stack.length - 1] == '{'){
                    stack.pop();
                } else {
                    return false;
                }
                break;
            default:
                break;
        }
    }
    return stack.length == 0;
}

console.log(isValidParentheses("()"));
console.log(isValidParentheses("()[]{}"));
console.log(isValidParentheses("(]"));