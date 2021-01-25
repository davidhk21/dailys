/*
Given an m x n matrix, return all elements of the matrix in spiral order.

Example:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
*/

// Input: matrix
// Output: Array
// Constraints: none
// Edge Cases: empty matrix, return empty array

var spiralOrder = function(matrix) {
  // if matrix is empty, return empty array
  if (!matrix.length) return [];
  // create a variable for result array
  let result = [];
  // create variables for top, bottom, left, right
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;
  // create variable for size
  let size = matrix.length * matrix[0].length;

  // while result array length is less than size
  while (result.length < size) {
    // iterate from left to right at top level
    for (let i = left; i <= right && result.length < size; i++) {
      // push to result
      result.push(matrix[top][i]);
    }
    // increment top
    top++;
    // iterate from top to bottom at right side
    for (let i = top; i <= bottom && result.length < size; i++) {
      // push to result
      result.push(matrix[i][right]);
    }
    // decrement right
    right--;
    // iterate from right to left at bottom level
    for (let i = right; i >= left && result.length < size; i--) {
      // push to result
      result.push(matrix[bottom][i]);
    }
    // decrement bottom
    bottom--;
    // iterate from bottom to top at left side
    for (let i = bottom; i >= top && result.length < size; i--) {
      // push to result
      result.push(matrix[i][left]);
    }
    // increment left side
    left++;
  }
  // return result
  return result;
};