/*
Given an m x n matrix. If an element is 0, set its entire row and column to 0. Do it in-place.

Example:
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
*/

// Input: matrix
// Output: updated matrix
// Constraints:
  // Time Complexity: O(m + n), Linear
  // Space Complexity: Constant space, Constant
// Edge Cases: no zeroes

var setZeroes = function(matrix) {
  let zeroRow = new Set();
  let zeroCol = new Set();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        zeroRow.add(i);
        zeroCol.add(j);
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (zeroRow.has(i) || zeroCol.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }
};

console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]));
console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]));