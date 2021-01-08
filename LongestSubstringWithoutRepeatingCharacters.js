/*
Given a string s, find the length of the longest substring without repeating characters.

Example:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/

// Input: string
// Output: number
// Constraints: none
// Edge Cases: empty string

var lengthOfLongestSubstring = function(s) {
  let result = '', temp = '';
  for (let i = 0; i < s.length; i++) {
    if (!temp.includes(s[i])) {
      temp += s[i];
    } else {
      let idx = temp.indexOf(s[i]);
      temp = temp.slice(idx + 1) + s[i];
    }
    if (temp.length > result.length) {
      result = temp;
    }
  }

  return result.length;
};

// console.log(lengthOfLongestSubstring('abcabcbb'));
// console.log(lengthOfLongestSubstring('bbbbb'));
// console.log(lengthOfLongestSubstring('pwwkew'));
// console.log(lengthOfLongestSubstring(''));
// console.log(lengthOfLongestSubstring('dvdf'));
