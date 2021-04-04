/*
You are given a list of non-negative integers, a1, a2, ..., an, and a target, S. Now you have 2 symbols + and -. For each integer, you should choose one from + and - as its new symbol.

Find out how many ways to assign symbols to make sum of integers equal to target S.
*/

// Memoization Approach
// Time: O(N * L) where L is range of sum and N is length of nums
// Space: O(N * L) memo
var findTargetSumWays = function(nums, S) {
  let n = nums.length;
  let memo = new Map();

  const dfs = (curr, idx) => {
      if (memo.has(curr + ',' + idx)) return memo.get(curr + ',' + idx);
      if (idx === n && curr === S) return 1;
      if (idx === n) return 0;

      let left = dfs(curr + nums[idx], idx + 1);
      let right = dfs(curr - nums[idx], idx + 1);
      memo.set(curr + ',' + idx, left + right);
      return left + right;
  }

  return dfs(0, 0)
};

// Brute Force Backtracking Approach
// Time: O(2^N)
// Space: O(N)
var findTargetSumWays = function(nums, S) {
  let count = 0;
  let n = nums.length;

  const dfs = (curr, idx) => {
      if (idx === n && curr === S) {
          count++;
          return;
      }
      if (idx === n) return;

      dfs(curr + nums[idx], idx + 1);
      dfs(curr - nums[idx], idx + 1);
  }

  dfs(0, 0);
  return count;
};