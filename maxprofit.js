function maxProfit(prices){
    let buy = prices[0];
    let maxProfit = 0;

    for(let i = 1; i < prices.length; i++){
        if(buy > prices[i]){
            buy = prices[i];
        } else if(prices[i] - buy > maxProfit){
            maxProfit = prices[i] - buy;
        }
    }

    return maxProfit;
}

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));