var maxProfit = function(prices) {
    //take every number from left to right, subtract it for all remaining numbers on the right 
    //and store highest resulting value
    //brute force approach with time complexity of O(n2)
    let high = 0;
    for(let i = 0; i < prices.length; i++) {
       let current = prices[i]
       
       for(let j = 1; j < prices.length; j++) {

            if(high < prices[j] - current ) {
                if(i < j) {

                high = prices[j] - current;
                }  
            }
            
       }

    }
    return high
    
};

console.log(maxProfit([7,6,4,3,1]))

//Better approach with time complexity of O(n)
/* compare current minimalVal with prices[i], if prices[i] is smaller, save that as the new minPrice.
   if not smaller, subtrac prices[i] - minPrice and see if it is greater than maxProfit = 0
   if true, maxProfit = prices[i] - minPrice */
var maxProfit = function(prices) {
    let minPrice = Number.MAX_VALUE;
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit;
};

