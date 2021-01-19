/*
Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
*/

// Input: Array of nums
// Output: Boolean
// Constraints: linear time & constant space
// Edge Cases: none

var containsDuplicate = function(nums) {
  // create a set
  let set = new Set();
  // iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // if set has number
    if (set.has(nums[i])) {
      // return true
      return true;
      // else
    } else {
      // add to set
      set.add(nums[i]);
    }
  }
  // return false
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false