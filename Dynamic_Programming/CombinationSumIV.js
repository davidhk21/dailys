/*
Given an array of distinct integers nums and a target integer target, return the number of possible combinations that add up to target.

The answer is guaranteed to fit in a 32-bit integer.
*/

// Bottom Up Solution
// Time: O(T * N)
// Space: O(T)
var combinationSum4 = function(nums, target) {
  let dp = new Array(target + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i < dp.length; i++) {
      for (let j = 0; j < nums.length; j++) {
          if (i - nums[j] >= 0) {
              dp[i] += dp[i - nums[j]];
          }
      }
  }

  return dp[target]
}

// Memoization Approach (Top Down)
// Time: O(T x N)
// Space: O(T) for memo and recursive stack
var combinationSum4 = function(nums, target) {
  let memo = new Map();

  const dfs = (curr) => {
      if (memo.has(curr)) return memo.get(curr);
      if (curr === target) return 1;
      if (curr > target) return 0;

      let total = 0;
      for (let i = 0; i < nums.length; i++) {
          let sum = dfs(curr + nums[i]);
          total += sum;
      }

      memo.set(curr, total);
      return total;
  }

  return dfs(0);
};

// Brute Force Approach
// Time: O(N^N)
// Space: O(H)
var combinationSum4 = function(nums, target) {
  let result = 0;

  const dfs = (curr) => {
      if (curr === target) {
          result++;
          return;
      }
      if (curr > target) return;

      for (let i = 0; i < nums.length; i++) {
          dfs(curr + nums[i]);
      }
  }

  dfs(0);

  return result;
};