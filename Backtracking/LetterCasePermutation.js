/*
Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.

Return a list of all possible strings we could create. You can return the output in any order.
*/

var isLetter = (c) => {
  return c.length === 1 && c.match(/[a-z]/i);
}

// Time: O(2^N)
// Space: O(N)
var letterCasePermutation = function(S) {
  let result = [];

  const dfs = (str, idx) => {
      if (str.length === S.length) {
          result.push(str);
          return;
      }

      let char = S[idx];
      if (isLetter(char)) {
          dfs(str + char.toLowerCase(), idx + 1);
          dfs(str + char.toUpperCase(), idx + 1);
      } else {
          dfs (str + char, idx + 1);
      }
  }

  dfs('', 0);
  return result;
};