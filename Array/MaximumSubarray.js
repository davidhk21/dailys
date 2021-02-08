/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
*/

// Time: O(n)
// Space: O(1)
var maxSubArray = function(nums) {
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > 0) {
      nums[i] += nums[i - 1];
    }
    result = Math.max(nums[i], result);
  }
  return result;
}

// Time: O(n^2)
// Space: O(1)
var maxSubArray = function(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];

  let result = nums[0];
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j]
      if (sum > result) result = sum;
    }
  }
  return result;
};