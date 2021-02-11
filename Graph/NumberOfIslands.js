/*
Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example:
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
*/

// Time: O(m * n)
// Space: O(1)
var numIslands = function(grid) {
  // create a result counter variable
  let count = 0;
  let rows = grid.length; // 4
  let cols = grid[0].length; //  5
  // define recursive function
  const turnOffIsland = (row, col) => {
    grid[row][col] = '0';
    if (row < rows - 1) {
      if (grid[row + 1][col] === '1') turnOffIsland(row + 1, col);
    }
    if (col < cols - 1) {
      if (grid[row][col + 1] === '1') turnOffIsland(row, col + 1);
    }
    if (col > 0) {
      if (grid[row][col - 1] === '1') turnOffIsland(row, col - 1);
    }
    if (row > 0) {
      if (grid[row - 1][col] === '1') turnOffIsland(row - 1, col);
    }
  }
  // iterate through the grid
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      // if it is 1
      if (grid[i][j] === '1') {
        // run recursive function to get rid of island
        turnOffIsland(i, j);
        count++;
      }
    }
  }
  // return the result
  return count;
};
