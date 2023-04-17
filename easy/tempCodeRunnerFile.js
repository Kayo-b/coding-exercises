var maxProfit2 = (prices) => {
    let lowest = Number.MAX_VALUE
    let highest = 0;
    for(let i = 0; i < prices.length; i++) {
        if(prices[i] < lowest) {
            lowest = prices[i];
        } else if(prices[i] > highest) {
            highest = prices[i];
        }
        
    }
    if(highest - lowest > 0) {
        return highest - lowest
    }
    return 0
}
console.log(maxProfit2([7,1,5,3,6,4]))