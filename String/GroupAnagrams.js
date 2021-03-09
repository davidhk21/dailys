/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
*/

// Input: Array of strings
// Output: Array of arrays of anagrams
// Constraints: none
// Edge cases: empty string results in one array with empty string

// Time: O(N^2 log N)
// Space: O(N)
var groupAnagrams = function(strs) {
  let map = new Map();
  for (let i = 0; i < strs.length; i++) {
    let str = strs[i];
    let sortedStr = str.split('').sort().join('');
    let mapResult = map.get(sortedStr) || [];
    mapResult.push(str);
    map.set(sortedStr, mapResult);
  }
  return Array.from(map.values());
}

module.exports = groupAnagrams;
