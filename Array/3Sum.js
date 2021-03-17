/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.
*/

// Input: array of integers
// Output: array of arrays
// Constraints: none
// Edge cases: empty array returns empty array

// Time: O(N^2)
// Space: O(N) from sorting algorithm
var threeSum = function(nums) {
  let result = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum < 0) left++;
      else if (sum > 0) right--;
      else {
        result.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      }
    }
  }

  return result;
}

// Hashset Solution
// Time: O(N^2)
// Space: O(N) for the hashset
var threeSum = function(nums) {
  let result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (nums[i] === nums[i - 1]) continue;
    let set = new Set();
    let j = i + 1;
    while (j < nums.length) {
      let compliment = -nums[i] - nums[j];
      if (set.has(compliment)) {
        result.push([nums[i], nums[j], compliment]);
        while (j < nums.length && nums[j] === nums[j + 1]) j++;
      }
      set.add(nums[j]);
      j++;
    }
  }

  return result;
}

