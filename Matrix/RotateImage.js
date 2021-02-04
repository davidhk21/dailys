/*
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
*/

// Input: n x n 2D matrix
// Output: 90 degrees rotated matrix
// Constraints: none
// Edge Cases: none


// BETTER SOLUTION
// Time: O(M)
// Space: O(1)
var rotate = function(matrix) {
  let n = matrix.length;
  for (let row = 0; row < (Math.floor(n / 2) + n % 2); row++) {
    for (let col = 0; col < Math.floor(n / 2); col++) {
      let temp = matrix[n - col - 1][row];
      matrix[n - col - 1][row] = matrix[n - row - 1][n - col - 1];
      matrix[n - row - 1][n - col - 1] = matrix[col][n - row - 1];
      matrix[col][n - row - 1] = matrix[row][col];
      matrix[row][col] = temp;
    }
  }
  return matrix;
}

// Original Solution
// Time Complexity: O(M) M is number of cells in matrix
// Space Complexity: O(M)
var rotate = function(matrix) {
  let n = matrix.length;
  let map = new Map();
  // iterate through the matrix
  for (let row = 0; row < matrix.length; row++) {
    // iterate through the rows
    for (let col = 0; col < matrix[row].length; col++) {
      // add position to Map
      map.set(row + ' ' + col, matrix[row][col]);
      // set position to new positon [n - col - 1, row]
        let newRow = n - col - 1;
        if (map.has(newRow + ' ' + row)) {
          matrix[row][col] = map.get(newRow + ' ' + row);
        } else {
          matrix[row][col] = matrix[newRow][row];
        }
    }
  }
  // return matrix
  return matrix;
}