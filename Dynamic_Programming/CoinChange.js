/*
You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

Example:
Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
*/

// Input: Array and a number
// Output: number
// Constraints: none
// Edge Cases: if no combo, return -1

// DP - Bottom Up Approach
var coinChange = function(coins, amount) {
  let dp = Array(amount + 1).fill(amount + 1);
  dp[0] = 0;

  for (let i = 1; i < dp.length; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i - coin] + 1, dp[i]);
      }
    }
  }

  return dp[amount] === amount + 1 ? -1 : dp[amount];
};