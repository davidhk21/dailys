/*
Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Example:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
*/

var isLetter = (str) => {
  return str.length === 1 && str.match(/^[A-Za-z0-9]+$/);
}

var isPalindrome = function(s) {
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    while (!isLetter(s[l]) && l < r) l++;
    while (!isLetter(s[r]) && l < r) r--;
    if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
    l++;
    r--;
  }
  return true;
};