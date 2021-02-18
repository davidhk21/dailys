/*
Given two strings s and t , write a function to determine if t is an anagram of s.

Example:
Input: s = "anagram", t = "nagaram"
Output: true
*/

// Input: 2 strings
// Output: boolean
// Constraints: none
// Edge Cases: none

// New Solution
// Time: O(n)
// Space: O(n)
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false
  let map = {};

  for (let i = 0; i < s.length; i++) {
    map[s[i]] = ++map[s[i]] || 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (map[t[i]]) {
      map[t[i]]--;
    } else {
      return false;
    }
  }

  return true;
}

// Original Solution
// Time: O(n)
// Space: O(n)
var isAnagram = function(s, t) {
  let sCount = {};
  let tCount = {};

  for (let i = 0; i < s.length; i++) {
    sCount[s[i]] = ++sCount[s[i]] || 1;
  }

  for (let i = 0; i < t.length; i++) {
    tCount[t[i]] = ++tCount[t[i]] || 1;
  }

  if (Object.keys(sCount).length !== Object.keys(tCount).length) return false;

  for (let key in sCount) {
    if (sCount[key] !== tCount[key]) return false;
  }

  return true;
};