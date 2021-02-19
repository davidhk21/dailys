/*
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums, return the minimum element of this array.

Example:
Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
*/

// Time: O(log n) binary search
// Space: O(1)
var findMin = function(nums) {
  let n = nums.length
  let left = 0;
  let right = n - 1;

  if (nums[left] < nums[right] || nums.length === 1) return nums[left];

  let mid = Math.floor(n - 1);

  while (left !== right) {
    if (nums[mid] < nums[mid - 1]) return nums[mid];
    if (nums[mid] > nums[left]) {
      left = mid;
      mid = Math.floor((left + right) / 2);
      continue;
    }
    if (nums[mid] < nums[left]) {
      right = mid;
      mid = Math.floor((left + right) / 2);
      continue;
    }
  }
};