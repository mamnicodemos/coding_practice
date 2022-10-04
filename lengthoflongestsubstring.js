function lengthOfLongestSubstring(s){
    let l = 0;
    let r = 0;
    let max = 0;
    const seenChars = new Set();
    while(r < s.length){
        if(seenChars.has(s[r]) == false){
            seenChars.add(s[r]);
            r++;
            max = Math.max(max, seenChars.size);
        } else {
            seenChars.delete(s[l]);
            l++;
        }
    }
    return max;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));