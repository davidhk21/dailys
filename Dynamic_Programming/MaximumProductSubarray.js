/*
Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

It is guaranteed that the answer will fit in a 32-bit integer.

A subarray is a contiguous subsequence of the array.
*/

// Dynamic Programming Solution
// Time: O(N)
// Space: O(1)
var maxProduct = function(nums) {
  let result = nums[0];

  let tempMax = nums[0];
  let tempMin = nums[0];

  for (let i = 1; i < nums.length; i++) {
      let temp = tempMax;
      tempMax = Math.max(nums[i], nums[i] * tempMax, nums[i] * tempMin);
      tempMin = Math.min(nums[i], nums[i] * temp, nums[i] * tempMin);
      result = Math.max(result, tempMax);
  }

  return result;
};

// Brute Force Approach
// Time: O(N^2)
// Space: O(1)
var maxProduct = function(nums) {
  let result = nums[0];

  let start = 0;
  let length = nums.length;

  while (start < length) {
      let curr = 1;
      for (let i = start; i < length; i++) {
          curr *= nums[i];
          if (curr > result) result = curr;
      }
      start++;
  }

  return result;
};