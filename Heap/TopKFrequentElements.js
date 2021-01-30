/*
Given a non-empty array of integers, return the k most frequent elements.

Example:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
*/

// Better Solution: Time Complexity - O(n log n)
var topKFrequent = function(nums, k) {
  let counter = new Map();

  nums.forEach(num => counter.set(num, counter.get(num) + 1 || 1));

  let sorted = [...counter.keys()].sort((a, b) => counter.get(b) - counter.get(a));

  return sorted.slice(0, k);
}

// ORIGINAL SOLUTION: Time Complexity - O(k) + O(n)
var topKFrequent = function(nums, k) {
  // create result array
  let result = [];
  // create an obj for key pairs
  let freqElements = {};
  // iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // add key pairs to object
    freqElements[nums[i]] = ++freqElements[nums[i]] || 1;
  }
  // create a max and key max variables
  let max = 0;
  let keyMax = null;
  // while k > 0
  while (k > 0) {
    // iterate through the object
    for (var key in freqElements) {
      // reassign max and key max if greater
      if (freqElements[key] > max) {
        max = freqElements[key];
        keyMax = key;
      }
    }
    // push key max to the result array
    result.push(keyMax);
    // delete the key max and max from obj
    delete freqElements[keyMax];
    // reset max and key max
    max = 0;
    keyMax = null;
    // decrement k
    k--;
  }
  // return result array
  return result;
};