/*
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?
*/

// Bit manipulation Solution
// Time: O(n)
// Space: O(1)
var missingNumber = function(nums) {
  let result = nums.length;
  for (let i = 0; i < nums.length; i++) {
    result ^= i ^ nums[i];
  }
  return result;
}

// Gauss Formula Solution
// Time: O(n)
// Space: O(1)
var missingNumber = function(nums) {
  let n = nums.length;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;
  for (let i = 0; i < nums.length; i++) actualSum += nums[i];
  return expectedSum - actualSum;
}

// Original Solution
// Time: O(n log n)
// Space: O(1)
var missingNumber = function(nums) {
  let sorted = nums.sort((a, b) => a - b);
  let check = 0;
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] !== check) {
      return i;
    }
    check++;
  }
};