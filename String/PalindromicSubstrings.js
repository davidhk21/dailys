/*
Given a string, your task is to count how many palindromic substrings in this string.

The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.
*/

// Time: O(N^2)
// Space: O(1)
var countSubstrings = function(s) {
  let count = 0;
  let n = s.length;

  const countPalindromes = (str, start, end) => {
    let subCount = 0;
    while (start >= 0 && end < n && str[start] === str[end]) {
      subCount++;
      start--;
      end++;
    }

    return subCount;
  }

  for (let i = 0; i < n; i++) {
    count += countPalindromes(s, i, i);
    count += countPalindromes(s, i, i + 1);
  }

  return count;
}


// Time: O(N^3)
// Space: O(1)
var countSubstrings = function(s) {
  let count = 0;
  let n = s.length;
  for (let start = 0; start < s.length; start++) {
    let end = start + 1;
    while (end <= n) {
      let subStr = s.slice(start, end);
      if (isPalindrome(subStr)) count++;
      end++;
    }
  }

  return count;
};

const isPalindrome = (s) => {
  let result = true;

  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    if (s[start] !== s[end]) return false;
    start++;
    end--;
  }

  return result;
}