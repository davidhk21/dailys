/*
Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.

Example:
Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
             Note that you are allowed to reuse a dictionary word.
*/

// Inputs: string, array of strings
// Output: boolean
// Constraints: none
// Edge Cases: none

// Time: O(n^3) Size of recursion tree can go up to n^2
// Space: O(n) The depth of recursion tree can go up to n
var wordBreak = function(s, wordDict) {

  const verify = (word, dict, start, memo) => {
    if (start === word.length) return true;
    if (memo[start] !== undefined) return memo[start];

    for (let end = start + 1; end <= word.length; end++) {
      let subStr = word.substring(start, end);

      if (dict.includes(subStr) && verify(word, dict, end, memo)) {
        return true;
      }

    }

    return memo[start] = false;
  }

  return verify(s, wordDict, 0, []);
}
