/*
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Please solve it wtihout division and in O(n)

Try to solve with constant space complexity

Example:
Input:  [1,2,3,4]
Output: [24,12,8,6]
*/

// Input: Array of integers
// Output: Array of intergers
// Constraints: Time Complexity: O(n)
//              Space Complexity: O(1)
// Edge Cases: none

// O(n) Time Complexity, O(1) Space Complexity solution
var productExceptSelf = function(nums) {
  let result = [1];

  for (let i = 1; i < nums.length; i++) {
    result[i] = nums[i - 1] * result[i - 1];
  }

  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = result[i] * right;
    right *= nums[i];
  }

  return result;
}

// O(n) Time Complexity, O(n) Space Complexity solution
var productExceptSelf = function(nums) {
  nums.unshift(1);
  nums.push(1);

  let left = new Array(nums.length).fill(1);
  let right = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length - 1; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  for (let i = nums.length - 2; i > 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  return left.map((num, idx) => num * right[idx]).slice(1, left.length - 1);
};