function checkPermutation(a, b){
    const permutations = findPermutations(a);
    if(permutations.includes(b)){
        return true;
    }
    return false;
}

function findPermutations(s){
    const permutations = [];
    if(s.length == 0){
        return permutations;
    }
    if(s.length == 1){
        permutations.push(s);
        return permutations;
    }
    for(let i = 0; i < s.length; i++){
        let c = s.charAt(i);
        let otherCs = s.substring(0, i) + s.substring(i + 1);
        for(let permutation of findPermutations(otherCs)){
            permutations.push(c + permutation);
        }
    }
    return permutations;
}

console.log(findPermutations("abc"));
console.log(checkPermutation("abc", "cab"));
console.log(checkPermutation("abc", "car"));