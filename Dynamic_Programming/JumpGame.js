/*
Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

Example:
Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
*/

// Input: array of numbers
// Output: boolean
// Constraints:
  // nums[i] >= 0
  // nums.length >= 1
// Edge Cases: none

// Greedy Solution
var canJump = function(nums) {
  let lastPos = nums.length - 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] + i >= lastPos) lastPos = i;
  }
  return lastPos === 0;
}

// Dynamic Programming Approach Bottom Up
// Time: O(N^2)
// Space: O(N)
var canJump = function(nums) {
  let n = nums.length;
  let dp = Array.from({ length: n }, () => false);
  dp[0] = true;

  for (let i = 1; i < n; i++) {
    let curr = i - 1;
    while (curr >= 0) {
      let diff = i - curr;
      if (nums[curr] >= diff) {
        dp[i] = true;
        break;
      }
      curr--;
    }
    if (dp[i] === false) return false;
  }

  return dp[n - 1];
}

// Memoization Top Down
var canJump = function(nums) {
  let cache = new Set();

  const dfs = (idx) => {
    if (cache.has(idx)) return cache[idx];
    if (idx === nums.length - 1) return true;

    let furthestJump = Math.min(idx + nums[idx], nums.length - 1);
    for (let i = idx + 1; i <= furthestJump; i++) {
      if (dfs(i)) return true;
      cache.add(i, false);
    }

    return false;
  }

  return dfs(0);
}

// Time Limit Exceeded
// Backtracking Approach
// Time: NOT SURE
// Space: O(N) height of tree
var canJump = function(nums) {
  let result = false;

  const dfs = (idx) => {
    if (idx === nums.length - 1) {
      result = true;
      return;
    };
    if (idx > nums.length - 1) return;

    let jumps = nums[idx];
    while (jumps > 0) {
      if (dfs(idx + jumps)) return;
      jumps--;
    }
  }

  dfs(0);
  return result;
};