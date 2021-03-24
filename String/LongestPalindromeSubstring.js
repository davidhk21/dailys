/*
Given a string s, return the longest palindromic substring in s.
*/

// Input: string
// Output: longest palindromic substring
// Constraints:
  // s.length >= 1
  // s consists of only digits and english letters (upper and lower)
// Edge Cases:
  // if length is 1, return string
  // Upper case letters
  // Numbers

// Time: O(N^2)
// Space: O(1)
var longestPalindrome = function(s) {
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    let len1 = expandAroundCenter(s, i, i);
    let len2 = expandAroundCenter(s, i, i + 1);
    let len = Math.max(len1, len2);
    if (len > end - start) {
      start = Math.ceil(i - (len - 1) / 2);
      end = i + len / 2;
    }
  }

  return s.slice(start, end + 1);
}

var expandAroundCenter = (str, left, right) => {
  while (left >= 0 && right < str.length && str[left] === str[right]) {
    left--;
    right++;
  }

  return right - left - 1;
}

// Time: O(N^2)
// Space: O(1)
var longestPalindrome = function(s) {
  let n = s.length;

  while (n > 0) {
    for (let i = 0; i < s.length - n + 1; i++) {
      let subStr = s.slice(i, i + n);
      if (isPalindrome(subStr)) return subStr.length;
    }
    n--;
  }
};

const isPalindrome = (str) => {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    let leftChar = str[left];
    let rightChar = str[right];
    if (leftChar.toLowerCase() !== rightChar.toLowerCase()) return false;
    left++;
    right--;
  }

  return true;
};