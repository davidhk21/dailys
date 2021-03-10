/*
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

Example:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
*/

// Input: array of integers
// Output: number
// Constraints: O(log n) Time
// Edge Cases: if target doesn't exist, return -1

// Iterative Solution
// Time: O(log n)
// Space: O(1)
var search = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] >= nums[start]) {
      if (target >= nums[start] && target < nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (target <= nums[end] && target > nums[mid]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
}


// Recursive Solution
// Time: O(log n)
// Space: O(log n)
// var search = function(nums, target) {
//   let start = 0;
//   let end = nums.length - 1;

//   const binarySearch = (start, end) => {
//     let mid = Math.floor((start + end) / 2);
//     // if mid is target, return mid
//     if (nums[mid] === target) return mid;
//     // if start < end, return -1
//     if (start > end) return -1;
//     // if start >= mid
//     if (nums[start] > nums[mid]) {
//       if (target > nums[mid] && target <= nums[end]) {
//         start = mid + 1;
//       } else {
//         end = mid - 1;
//       }
//     } else {
//       if (target < nums[mid] && target >= nums[start]) {
//         end = mid - 1;
//       } else {
//         start = mid + 1;
//       }
//     }
//     return binarySearch(start, end);
//   }

//   return binarySearch(start, end);
// };

module.exports = search;
