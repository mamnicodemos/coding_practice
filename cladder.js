function ladder(n){
    const climb = [0, 1, 2];
    for(let i = 3; i <= n; i++){
        climb[i] = climb[i - 1] + climb[i - 2];
    }
    return climb[n];
}

console.log(ladder(3));
console.log(ladder(5));