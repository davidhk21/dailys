/*
Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.
*/

// Sliding Window Algorithm Solution
// Time: O(N)
// Space: O(1)
var minSubArrayLen = function(target, nums) {
  let result = Infinity;
  let sum = 0;
  let start = 0;

  for (let end = 0; end < nums.length; end++) {
      sum += nums[end];
      while (sum >= target) {
          result = Math.min(result, end - start + 1);
          sum -= nums[start++];
      }
  }

  return result === Infinity ? 0 : result;
};

// Brute Force Approach
// Time: O(N^2)
// Space: O(1)
var minSubArrayLen = function(target, nums) {
  let result = nums.length;
  let start = 0;

  while (start < nums.length) {
      let end = start + 1;
      let curr = nums[start];
      if (curr === target) return 1;
      while (end < nums.length && curr < target) {
          curr += nums[end];
          end++;
      }
      if (start === 0 && curr < target) return 0;
      if (curr >= target) {
          let diff = end - start;
          if (diff < result) result = diff;
      }
      start++;
  }

  return result;
};