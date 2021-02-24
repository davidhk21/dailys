/*
Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

Example:
Input: nums = [1,1,2]
Output:
[[1,1,2],
 [1,2,1],
 [2,1,1]]
*/

// Time: O(N * N!) Roughly
// Space: O(N)
var permuteUnique = function(nums) {
  let result = [];
  let map = {}

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = map[nums[i]] === undefined ? 1 : ++map[nums[i]];
  }

  const checkPermutations = (arr)=> {
    if (arr.length === nums.length) result.push(arr);

    for (var key in map) {
      if (map[key] > 0) {
        let newArr = arr.slice();
        newArr.push(key);
        map[key]--;
        checkPermutations(newArr);
        map[key]++;
      }
    }
  }

  checkPermutations([])

  return result;
};