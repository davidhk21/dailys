/*
Given a string s that consists of only uppercase English letters, you can perform at most k operations on that string.

In one operation, you can choose any character of the string and change it to any other uppercase English character.

Find the length of the longest sub-string containing all repeating letters you can get after performing the above operations.

Example:
Input:
s = "AABABBA", k = 1

Output:
4

Explanation:
Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
*/

// Input: string & num of operations
// Output: number
// Constraints: none
// Edge Cases: none

var characterReplacement = function(s, k) {
  const window = {};
  let start = 0;
  let numRepeatingChar = 0;
  let longestSubstr = 0;

  for (let end = 0; end < s.length; end++) {
    // increment counter of letter (expanding the window)
    window[s[end]] = ++window[s[end]] || 1;

    // number of the most frequent letter in the window
    numRepeatingChar = Math.max(numRepeatingChar, window[s[end]]);

    // Window length - number of most frequent letter gives us
    // number of letters that need to be replaced. If that's
    // greater than k, we need to shrink the window
    if ((end - start + 1) - numRepeatingChar > k) {
      window[s[start]]--;
      start++;
    }

    // see if the current window is longer than the current max
    longestSubstr = Math.max(longestSubstr, (end - start + 1));
  }

  return longestSubstr;
};