/*
Given two strings s and t, return the minimum window in s which will contain all the characters in t. If there is no such window in s that covers all characters in t, return the empty string "".

Note that If there is such a window, it is guaranteed that there will always be only one unique minimum window in s.

Example:
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
*/

// Input: 2 strings
// Output: a string
// Constraints: O(n) Time Complexity
// Edge Cases: if no window, return empty string

// someone else's solution. couldn't find an answer for myself yet
var minWindow = function(s, t) {
  if (s.length < t.length) return '';
  let left = 0; right = 0;
  let count = t.length;
  let result;
  let backup = {};

  t.split('').forEach(c => backup[c] = ++backup[c] || 1);

  let map = Object.assign({}, backup);

  while (right < s.length) {
    let curr = s[right];

    if (result && right - left > result.length) {
      left++;
      continue;
    }

    if (left === right && !map[curr]) {
      left++;
      right++;
      continue;
    }

    if (map[curr]) {
      map[curr] = map[curr] - 1;
      count--;
    }

    right++;

    if (!count) {
      if (!Object.values(map).filter(v => v).length && (!result || right - left < result.length)) {
        result = s.substring(left, right);
      }
      map = Object.assign({}, backup);
      count = t.length;
      left++;
      right = left;
    }
  }

  return result || '';
}

var minWindow = function(s, t) {
  if (s.length < t.length) return "";
  let result = "";
  let map = {};
  let count = t.length;
  t.split('').forEach(char => map[char] = ++map[char] || 1);

  let end = 0;

  for (let start = 0; start < s.length; start++) {
    if (t.includes(s[start])) {
      let subString = s.slice(start, end + 1);
      let copiedMap = Object.assign({}, map);
      while (!stringHasAllCharacters(subString, copiedMap)) {
        end++;
        subString = s.slice(start, end + 1);
      }
      if (end - start + 1 < result.length || result === "") {
        result = subString;
      }
      if (end === s.length - 1) break;
    } else {
      continue;
    }
  }

  return result;
};

let stringHasAllCharacters = (string, map) => {
  for (let i = 0; i < string.length; i++) {
    if (map[string[i]]) map[string[i]]--;
  }
  for (let key in map) {
    if (map[key] !== 0) return false;
  }
  return true;
};
