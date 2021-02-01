/*
Given an m x n matrix of non-negative integers representing the height of each unit cell in a continent, the "Pacific ocean" touches the left and top edges of the matrix and the "Atlantic ocean" touches the right and bottom edges.

Water can only flow in four directions (up, down, left, or right) from a cell to another one with height equal or lower.

Find the list of grid coordinates where water can flow to both the Pacific and Atlantic ocean.

Note:

The order of returned grid coordinates does not matter.
Both m and n are less than 150.
*/

// Input: m x n matrix
// Output: Array of arrays
// Constraints: none
// Edge Cases: none

var pacificAtlantic = function(matrix) {
  let result = [];

  const checkPacific = (row, col) => {
    if (row === 0 || col === 0) return true;

    let newRow = row - 1;
    let newCol = col - 1;

    if (matrix[newRow][col] <= matrix[row][col] || matrix[row][newCol] <= matrix[row][col]) {
      return checkPacific(newRow, col) || checkPacific(row, newCol);
    }

    // if (matrix[newRow][col] <= matrix[row][col]) {
    //   return checkPacific(newRow, col);
    // }
    // if (matrix[row][newCol] <= matrix[row][col]) {
    //   return checkPacific(row, newCol);
    // }
  }

  const checkAtlantic = (row, col) => {
    if (row === matrix.length - 1 || col === matrix[0].length - 1) return true;

    let newRow = row + 1;
    let newCol = col + 1;
    if (matrix[newRow][col] <= matrix[row][col] || matrix[row][newCol] <= matrix[row][col]) {
      return checkAtlantic(newRow, col) || checkAtlantic(row, newCol);
    }

    // if (matrix[newRow][col] <= matrix[row][col]) {
    //   return checkAtlantic(newRow, col);
    // }
    // if (matrix[row][newCol] <= matrix[row][col]) {
    //   return checkAtlantic(row, newCol);
    // }
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (checkPacific(row, col) && checkAtlantic(row, col)) result.push([row, col]);
    }
  }

  return result;
};