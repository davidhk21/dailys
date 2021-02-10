/*
Given two strings text1 and text2, return the length of their longest common subsequence.

A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.

If there is no common subsequence, return 0.

Example:
Input: text1 = "abcde", text2 = "ace"
Output: 3
Explanation: The longest common subsequence is "ace" and its length is 3.
*/

var longestCommonSubsequence = function(text1, text2) {
  let dpGrid = [];
  for (let row = 0; row < text1.length + 1; row++) {
    let cols = new Array(text2.length + 1).fill(0);
    dpGrid.push(cols);
  }

  for (let row = 0; row < dpGrid.length; row++) {
    for (let col = 0; col < dpGrid[row].length; col++) {
      if (row === 0 || col === 0) {
        dpGrid[row][col] = 0;
        continue;
      }
      if (text1[row - 1] === text2[col - 1]) {
        dpGrid[row][col] = dpGrid[row - 1][col - 1] + 1;
      } else {
        dpGrid[row][col] = Math.max(dpGrid[row - 1][col], dpGrid[row][col - 1]);
      }
    }
  }

  return dpGrid[dpGrid.length][dpGrid[0].length];
};