function isUnique(s){
    const seenLetters = new Object();
    for(let i = 0; i < s.length; i++){
        let c = s.charAt(i);
        if(c in seenLetters){
            return false;
        }
        seenLetters[c] = 1;
    }
    return true;
}

console.log(isUnique("abc"));
console.log(isUnique("aaa"));