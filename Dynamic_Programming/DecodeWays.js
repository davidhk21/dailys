/*
A message containing letters from A-Z can be encoded into numbers using the following mapping:

'A' -> "1"
'B' -> "2"
...
'Z' -> "26"
To decode an encoded message, all the digits must be grouped then mapped back into letters using the reverse of the mapping above (there may be multiple ways). For example, "11106" can be mapped into:

"AAJF" with the grouping (1 1 10 6)
"KJF" with the grouping (11 10 6)
Note that the grouping (1 11 06) is invalid because "06" cannot be mapped into 'F' since "6" is different from "06".

Given a string s containing only digits, return the number of ways to decode it.

The answer is guaranteed to fit in a 32-bit integer.
*/

// Input: string of numbers
// Output: number (of different ways to decode)
// Constraints:
  // s.length >= 1
  // s contains only didgits and may contain leading zeros
// Edge Cases: none

// Iterative Solution
// Time: O(N)
// Space: O(1)
var numDecodings = function(s) {
  if (s[0] === '0') return 0;

  let n = s.length;
  let dp = new Array(n + 1).fill(0);

  let twoBack = 1;
  let oneBack = 1;

  for (let i = 1; i < n; i++) {
    let current = 0;
    if (s[i] !== '0') {
      current += oneBack;
    }
    let twoDigit = Number(s.substring(i - 1, i + 1));
    if (twoDigit >= 10 && twoDigit <= 26) {
      current += twoBack;
    }
    twoBack = oneBack;
    oneBack = current;
  }

  return oneBack;
}

// DP Array Solution
// Time: O(N)
// Space: O(N)
var numDecodings = function(s) {
  if (s[0] === '0') return 0;

  let n = s.length;
  let dp = new Array(n + 1).fill(0);

  dp[0] = 1;
  dp[1] = 1;

  for (let i = 1; i < n; i++) {
    if (s[i] !== '0') {
      dp[i + 1] += dp[i];
    }
    let twoDigit = Number(s.substring(i - 1, i + 1));
    if (twoDigit >= 10 && twoDigit <= 26) {
      dp[i + 1] += dp[i - 1];
    }
  }

  return dp[n];
}

// MEMOIZATION SOLUTION
// Time: O(N)
// Space: O(N)
var numDecodings = function(s) {
  let memo = new Map();

  const recurse = (idx) => {
    if (memo.has(idx)) return memo.get(idx);
    if (idx === s.length) return 1;
    if (s[idx] === '0') return 0;
    if (idx === s.length - 1) return 1;

    let ans = recurse(idx + 1);
    if (Number(s.substring(idx, idx + 2)) <= 26) {
      ans += recurse(idx + 2);
    }
    memo.set(idx, ans);
    return ans;
  }

  return recurse(0);
}

// ORIGINAL SOLUTION (RECURSIVE ALL PATHS)
var numDecodings = function(s) {
  let count = 0;

  const decode = (str) => {
    if (str.length === 0) {
      count++;
      return;
    }
    if (str[0] === '0') return;

    let subStr1 = str.slice(0, 1);
    let remainder1 = str.slice(1);
    decode(remainder1);

    if (str.length > 1) {
      let subStr2 = str.slice(0, 2);
      if (Number(subStr2) < 27) {
        let remainder2 = str.slice(2);
        decode(remainder2);
      }
    }
  }

  decode(s);

  return count;
};