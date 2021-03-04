/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

Example:
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
*/

// Time: O(n)
// Space: O(n)
var longestConsecutive = function(nums) {
  if (nums.length === 0) return 0;

  let set = new Set(nums);
  let length = 0;
  for (let n of set) {
    if (!set.has(n - 1)) {
      let temp = 0;
      while (set.has(n)) {
        set.delete(n);
        n = n + 1;
        temp++;
      }
      length = Math.max(length, temp);
    }
  }

  return length;
}

// ORIGINAL SOLUTION
// Time: O(n log n)
// Space: O(1)
// var longestConsecutive = function(nums) {
//   if (nums.length === 0) return 0;

//   let max = 1;
//   let longest = 1;

//   nums = nums.sort((a, b) => a - b);

//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] === nums[i - 1]) continue;
//     if (nums[i] - nums[i - 1] === 1) {
//       longest++;
//       max = Math.max(max, longest);
//     } else {
//       longest = 1;
//     }
//   }

//   return max;
// };

module.exports = longestConsecutive;