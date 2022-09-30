function isPrime(n){
    let i = 2;
    while(i * i <= n){
        if(n % i == 0){
            return false;
        }
        i++;
    }
    return true;
}

for(let i = 0; i < 10; i++){
    console.log(isPrime(i));
}