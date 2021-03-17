/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

Example:
Input: nums = [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
*/

// Input: array of integers
// Output: max profit
// Constraints: nums.length >= 1
  // nums[i] >= 0
// Edge Cases: none

var rob = function(nums) {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);
  if (nums.length === 3) return Math.max(nums[0], nums[1], nums[2]);

  let first = nums.slice(1);
  let second = nums.slice(0, nums.length - 1);

  return Math.max(robber(first), robber(second));
};

var robber = (arr) => {
  let max = Math.max(arr[0], arr[1]);
  let dp = [arr[0], arr[1]];
  for (let i = 2; i < arr.length; i++) {
    let first = dp[i - 2];
    let second = dp[i - 3] || 0;
    dp[i] = arr[i] + Math.max(first, second);
    max = Math.max(max, dp[i]);
  }
  return max;
}