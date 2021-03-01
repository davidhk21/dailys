/*
This problem was given during a practice test for Asana coding assignment

Given a square matrix of positive integers a, your task is to sort the numbers ine ach of its diagonals parallel to the secondary diagonal. Each diagonal should contain the same set of numbers as before, but sorted in ascending order from the bottom-left to top-right.

Example:
a = [[1, 3, 9, 4],
     [9, 5, 7, 7],
     [3, 6, 9, 7],
     [1, 2, 2, 2]]
Output: diagonalSort(a) = [[1, 9, 9, 7],
                           [3, 5, 6, 9],
                           [3, 4, 7, 7],
                           [1, 2, 2, 2]]
*/

function diagonalsSort(a) {
  let row = 1;
  let col = 0;
  let size = a.length;

  while (row < size) {
      let currRow = row;
      let currCol = col;
      let iterationCount = currRow;
      while (iterationCount >= 1) {
          while (currRow >= 1) {
              if (a[currRow][currCol] > a[currRow - 1][currCol + 1]) {
                  [a[currRow][currCol], a[currRow - 1][currCol + 1]] = [a[currRow - 1][currCol + 1], a[currRow][currCol]];
              }
              currRow--;
              currCol++;
          }
          currRow = row;
          currCol = col;
          iterationCount--;
      }
      row++;
  }

  row--;
  col = 1;
  while (col < size - 1) {
      let currRow = row;
      let currCol = col;
      let iterationCount = size - currCol - 1;
      while (iterationCount >= 1) {
          while (currRow >= 1) {
              if (a[currRow][currCol] > a[currRow - 1][currCol + 1]) {
                  [a[currRow][currCol], a[currRow - 1][currCol + 1]] = [a[currRow - 1][currCol + 1], a[currRow][currCol]];
              }
              currRow--;
              currCol++;
          }
          currRow = row;
          currCol = col;
          iterationCount--;
      }
      col++;
  }

  return a;
}