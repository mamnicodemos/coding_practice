function findPermutations(s){
    if(s.length < 2){
        return s;
    }
    const permutations = [];
    for(let i = 0; i < s.length; i++){
        let char = s[i];
        // necessary?
        if(s.indexOf(char) != i){
            continue;
        }
        let remainingString = s.slice(0, i) + s.slice(i + 1);
        for(let permutation of findPermutations(remainingString)){
            permutations.push(char + permutation);
        }
    }
    
    return permutations;
}
