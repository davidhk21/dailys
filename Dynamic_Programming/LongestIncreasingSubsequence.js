/*
Given an integer array nums, return the length of the longest strictly increasing subsequence.

A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].

Example:
Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
*/

// Input: array of integers
// Output: number
// Constraints: Time Complexity O(n^2)
// Edge Cases: none

// Time complexity: O(n^2)
// Space Complexity: O(n)
var lengthOfLIS = function(nums) {
  if (nums.length === 0) return 0;

  let dp = new Array(nums.length).fill(1);

  let result = 0;

  for (let i = 1; i < nums.length; i++) {
    let start = 0;
    while (start < i) {
      if (nums[start] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[start] + 1);
      }
      start++;
    }
    if (dp[i] > result) result = dp[i];
  }

  return result;
};