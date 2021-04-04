/*
You are given a list of non-negative integers, a1, a2, ..., an, and a target, S. Now you have 2 symbols + and -. For each integer, you should choose one from + and - as its new symbol.

Find out how many ways to assign symbols to make sum of integers equal to target S.
*/

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