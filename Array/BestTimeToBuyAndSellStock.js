/*
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example:
Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.

Example:
Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

// Input: array of numbers
// Output: number => maximum profit
// Constraints: none
// Edge Cases:
  // no profit => 0
  // no prices => 0

// ORIGINAL SOLUTION: O(n^2) Time Complexity
var maxProfit = function(prices) {
  // create a result variable set to 0
  let result = 0;
  // iterate through prices
  for (let i = 0; i < prices.length; i++) {
    // iterate from i + 1
    for (let j = i + 1; j < prices.length; j++) {
      let diff = prices[j] - prices[i]
      // if j - i is greater than result
      if (diff > result) {
        // set result to new max profit
        result = diff;
      }
    }
  }
  // return result
  return result;
};

// NEW SOLUTION: O(n) Time Complexity
var maxProfit = function(prices) {
  // create a min and max variable
  let min = Infinity;
  let max = 0;
  // iterate through prices
  for (let i = 0; i < prices.length; i++) {
    // replace min if current index is lower
    min = Math.min(min, prices[i]);
    // replace max if current index is higher
    max = Math.max(max, prices[i] - min);
  }
  // return max - min
  return max;
};
