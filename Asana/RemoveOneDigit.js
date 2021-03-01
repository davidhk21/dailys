/*
This problem was given during a practice test for Asana coding assignment

Given two strings s and t, both consisting of lowercase English letters and digits, your task is to calculate how many ways exactly one digit could be removed from one of the strings so that s is lexicographically smaller than t after the removal. Note that we are removing only a single instance of a single digit, rather than all instances (e.g. removing 1 from the string 'a11b1c' could result in 'a1b1c' or 'a11bc', but not 'abc')

Also note that digits are considered lexicographically smaller than letters.

Example:
s = 'ab12c'
t = '1zz456'
Output: removeOneDigit(s, t) // 1
*/

// Time: O(s + t)
// Space: O(1)
var removeOneDigit = (s, t) => {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] < 'a') {
      let newS = s.slice(0, i) + s.slice(i + 1);
      if (newS < t) count++;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (t[i] < 'a') {
      let newT = t.slice(0, i) + s.slice(i + 1);
      if (s < newT) count++;
    }
  }

  return count;
}

console.time('first')
console.log(removeOneDigit('ab12c', '1zz456')); // 1
console.timeEnd('first') // 0.159 ms
console.time('second')
console.log(removeOneDigit('12asb', '3jf1')); // 4
console.timeEnd('second') // 0.051 ms