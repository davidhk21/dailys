/*
Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.
*/

// same solution but uses concat instead
var subsets = function(nums) {
  let subsets = [];

  const checkSubsets = (arr, idx) => {
    subsets.push(arr);

    for (let i = idx; i < nums.length; i++) {
      checkSubsets(arr.concat(nums[i]), i + 1);
    }
  }

  checkSubsets([], 0);

  return subsets;
};

// Time: O(N * 2^N)
// Space: O(N)
var subsets = function(nums) {
  let subsets = [];

  const checkSubsets = (arr, idx) => {
    subsets.push(arr);

    for (let i = idx; i < nums.length; i++) {
      let newArr = [...arr, nums[i]];
      checkSubsets(newArr, i + 1);
    }
  }

  checkSubsets([], 0);

  return subsets;
};