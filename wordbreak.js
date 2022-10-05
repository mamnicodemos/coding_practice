function wordBreak(s, wordDict){
    const dp = Array(wordDict.length);
    const map = new Object();
    for(let i = 0; i < wordDict.length; i++){
        map[wordDict[i]] = true;
    }
    return find(s, map, dp, 0);
}

function find(s, map, dp, index){
    if(dp[index] != undefined){
        return dp[index];
    }
    let str = "";
    let result = false;
    if(index == s.length){
        return true;
    }
    for(let i = index; i < s.length; i++){
        str = s.substring(index, i + 1);
        if(map[str] && find(s, map, dp, i + 1)){
            result = true;
            break;
        }
    }
    dp[index] = result;
    return result;
}

console.log(wordBreak("leetcode", ["leet","code"]));
console.log(wordBreak("applepenapple", ["apple","pen"]));
console.log(wordBreak("catsandog", ["cats","dog","sand","and","cat"]));