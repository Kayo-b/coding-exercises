/*You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 */

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



//Better approach with time complexity of O(n)
/* 
compare current minimalVal with prices[i], if prices[i] is smaller, save that as the new minPrice.
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

var maxProfit2 = (prices) => {
    let lowest = Number.MAX_VALUE
    let highestProfit = 0;
    for(let i = 0; i < prices.length; i++) {
        if(prices[i] < lowest) {
            lowest = prices[i];
        } else if(prices[i] - lowest > highestProfit) {
            highestProfit = prices[i] - lowest;
        }
        
    }

    return highestProfit
}
console.log(maxProfit2([7,5,3,6,4,1]))