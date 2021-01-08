/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

/*
EXAMPLE:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

// Input: an array of numbers and a target number
// Output: an array of indices
// Constraints: None
// Edge Cases: Negative Numbers, no target match

// original solution: O(n^2) Time Complexity
var twoSum = function(nums, target) {
  // iterate through nums
  for (let i = 0; i < nums.length; i++) {
    // iterate through nums from second index
    for (let j = i + 1; j < nums.length; j++) {
      // if i + j is equal to target
      if (nums[i] + nums[j] === target) {
        // return [i, j]
        return [i, j];
      }
    }
  }
};

// O(n) SOLUTION Time Complexity
var twoSum = function(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const another = target - nums[i];

    if (another in map) {
      return [map[another], i];
    }

    map[nums[i]] = i;
  }

  return null;
};