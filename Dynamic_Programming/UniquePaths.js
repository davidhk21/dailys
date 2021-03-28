/*
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?
*/

// Input: m x n grid
// Output: number
// Constraints: m, n >= 1
// Edge Cases: none

// Dynamic Programming Approach
// Time: O(M x N)
// Space: O(M x N)
var uniquePaths = function(m, n) {
  let dp = Array.from({ length: m}, () => []);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) {
        dp[i][j] = 1;
        continue;
      }
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
}

// Memoization Approach
// O(M x N)
// O(H) height of tree
var uniquePaths = function(m, n) {
  let cache = new Map();

  const checkPaths = (row, col) => {
    if (cache.has([row, col])) return cache.get([row, col]);
    if (row > m || col > n) return 0;
    if (row === m && col === n) return 1;


    let path1 = checkPaths(row, col + 1);
    let path2 = checkPaths(row + 1, col);
    cache.set([row, col + 1], path1);
    cache.set([row + 1, col], path2);
    return path1 + path2;
  }

  return checkPaths(1, 1);
};