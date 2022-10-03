function isAnagram(s, t){
    if(s.length != t.length){
        return false;
    }
    const letterCount1 = new Object();
    const letterCount2 = new Object();
    for(let i = 0; i < s.length; i++){
        if(s[i] in letterCount1){
            letterCount1[s[i]] += 1;
        } else {
            letterCount1[s[i]] = 1;
        }
    }
    for(let i = 0; i < t.length; i++){
        if(t[i] in letterCount2){
            letterCount2[t[i]] += 1;
        } else {
            letterCount2[t[i]] = 1;
        }
    }
    
    for(let letter in letterCount1){
        if(letter in letterCount2){
            if(letterCount1[letter] != letterCount2[letter]){
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));