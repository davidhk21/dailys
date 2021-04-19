/*
Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.
*/

// Time: O(N)
// Space: O(1)
var findDuplicates = function(nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
      let num = Math.abs(nums[i]);
      if (nums[num - 1] > 0) {
          nums[num - 1] = -nums[num - 1];
      } else {
          result.push(num);
      }
  }

  return result;
};

// Time: O(N)
// Space: O(N)
var findDuplicates = function(nums) {
  let n = nums.length;
  let result = [];
  let numExists = Array.from({ length: n + 1}, () =>  false);

  for (let i = 0; i < n; i++) {
      if (numExists[nums[i]]) {
          result.push(nums[i]);
      } else {
          numExists[nums[i]] = true;
      }
  }

  return result;
};