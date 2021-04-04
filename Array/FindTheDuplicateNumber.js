/*
Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.
*/

// Linked List Approach (Slow & Fast Pointers)
// Time: O(N)
// Space: O(1)
var findDuplicate = function(nums) {
  let slow = nums[0];
  let fast = nums[0];
  while (true) {
      slow = nums[slow];
      fast = nums[nums[fast]];
      if (slow === fast) break;
  }

  fast = nums[0];
  while (slow !== fast) {
      slow = nums[slow];
      fast = nums[fast];
  }

  return fast;
}

// Time: O(N Log N)
// Space: O(1)
var findDuplicate = function(nums) {
  nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length; i++) {
      if (nums[i] === nums[i - 1]) return nums[i];
  }
};

// Time: O(N)
// Space: O(N)
var findDuplicate = function(nums) {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return nums[i];
    set.add(nums[i]);
  }
}