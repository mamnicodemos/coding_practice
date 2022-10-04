function characterReplacement(s, k){
    const chars = new Object();
    let start = 0;
    let maxLength = 0;
    let maxCount = 0;
    for(let end = 0; end < s.length; end++){
        const c = s[end];
        chars[c] = 1 + (chars[c] || 0);
        maxCount = Math.max(maxCount, chars[c]);
        while(end - start - maxCount + 1 > k){
            chars[s[start]]--;
            start++;
        }
        maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
}

console.log(characterReplacement("ABAB", 2));
console.log(characterReplacement("AABABBA", 1));