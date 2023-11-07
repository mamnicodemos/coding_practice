/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const folders = path.split("/");
    const stack = [];
    for(let i = 0; i < folders.length; i++){
        if(folders[i] == '.' || folders[i] == ''){
            continue;
        } else if(folders[i] == ".."){
            stack.pop();
        } else {
            stack.push(folders[i]);
        }
    }

    return "/" + stack.join('/');
};
