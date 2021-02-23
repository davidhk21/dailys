/*
Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

Example:
Input: nums = [1,2,2]
Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
*/

// Time: O(N * log N * 2^N)
// Space: O(N)
var subsetsWithDup = function(nums) {
  let subsets = [];

  const checkSubsets = (arr, idx) => {
    subsets.push(arr);

    for (let i = idx; i < nums.length; i++) {
      checkSubsets(arr.concat(nums[i]), i + 1);
    }
  }

  checkSubsets([], 0);

  return Array.from(new Set(subsets.map(JSON.strinigify)), JSON.parse);
}
