/*
Given two strings text1 and text2, return the length of their longest common subsequence.

A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.

If there is no common subsequence, return 0.

Example:
Input: text1 = "abcde", text2 = "ace"
Output: 3
Explanation: The longest common subsequence is "ace" and its length is 3.
*/

// Bottom Up (Tabulation) Approach
// Time: O(M * N)
// Space: O(M * N)
var longestCommonSubsequence = function(text1, text2) {
  let dpGrid = [];
  for (let row = 0; row < text1.length + 1; row++) {
    let cols = new Array(text2.length + 1).fill(0);
    dpGrid.push(cols);
  }

  for (let row = 0; row < dpGrid.length; row++) {
    for (let col = 0; col < dpGrid[row].length; col++) {
      if (row === 0 || col === 0) {
        continue;
      }
      if (text1[row - 1] === text2[col - 1]) {
        dpGrid[row][col] = dpGrid[row - 1][col - 1] + 1;
      } else {
        dpGrid[row][col] = Math.max(dpGrid[row - 1][col], dpGrid[row][col - 1]);
      }
    }
  }

  return dpGrid[dpGrid.length - 1][dpGrid[0].length - 1];
};

// Top Down (Memoization) Approach
// Time: O(M * N)
// Space: O(M * N)
var longestCommonSubsequence = function(text1, text2) {
  if (text1.length === 0 || text2.length === 0) return 0;

  const text1WithoutFinalCharacter = text1.slice(0, text1.length - 1);
  const text2WithoutFinalCharacter = text2.slice(0, text2.length - 1);

  const text1FinalCharacter = text1[text1.length - 1];
  const text2FinalCharacter = text2[text2.length - 1];

  if (text1FinalCharacter === text2FinalCharacter) {
    return 1 + longestCommonSubsequence(text1WithoutFinalCharacter, text2WithoutFinalCharacter);
  } else {
    return Math.max(longestCommonSubsequence(text1, text2WithoutFinalCharacter), longestCommonSubsequence(text1WithoutFinalCharacter, text2));
  }
}
