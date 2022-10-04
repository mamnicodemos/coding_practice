function countSubstrings(s){
    let count = 0;
    for(let i = 0; i < s.length; i++){
        let l = i;
        let r = i;
        while(l >= 0 && r < s.length && s[l] == s[r]){
            count++;
            l--;
            r++;
        }
        l = i;
        r = i + 1;
        while(l >= 0 && r < s.length && s[l] == s[r]){
            count++;
            l--;
            r++;
        }
    }
    return count;
}

console.log(countSubstrings("abc"));
console.log(countSubstrings("aaa"));