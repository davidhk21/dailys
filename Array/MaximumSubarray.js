/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
*/

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