/*
This problem was given during a practice test for Asana coding assignment

You are given a matrix of integers matrix of size n x m and a list of queries, queries. The given matrix is colored in black and white in a checkerboard style - the top left corner is colored white and any two side-neighboring cells have opposite colors.

Each query is represented as a pair of indices (i, j). For each query, perform the following operations:

- Select the ith - smallest value among the black cells. In case of a tie, select the one with the lowest row number. If there is still a tie, select the one with the lowest column number.
- Select the jth - smallest white cell using the same process.
- Find the average value of these two cells:
  - If the average value is a whole integer, replace both of the select cells with teh found average value
  - Otherwise, replace the cell of the greater value with the average rounded up to the nearest integer, and replace the cell of the smaller value with the average rounded down to the nearest integer.

Your task is to return the resulting matrix after processing all the queries.

Example:
matrix = [[2, 0, 4],
          [2, 8, 5],
          [6, 0, 9],
          [2, 7, 10],
          [4, 3, 4]]
queries = [[0, 0], [1, 3]]
Output:
meanAndChessboard(matrix, queries) = [[1, 2, 4],
                                      [2, 8, 5],
                                      [6, 0, 9],
                                      [2, 7, 10],
                                      [4, 3, 3]]
*/

// had an hour left ish to figure out this problem, was able to solve in 30 minutes

var meanAndChessboard = (matrix, queries) => {
  let whites = [];
  let blacks = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if ((i % 2 === 0 && j % 2 === 0) || (i % 2 === 1 && j % 2 === 1)) {
        whites.push([matrix[i][j], [i, j]]);
      } else {
        blacks.push([matrix[i][j], [i, j]]);
      }
    }
  }

  whites.sort((a, b) => a[0] - b[0]);
  blacks.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < queries.length; i++) {
      let smallestBlack = blacks[queries[i][0]];
      let smallestWhite = whites[queries[i][1]];

      let avg = (smallestBlack[0] + smallestWhite[0]) / 2;

      let black = matrix[smallestBlack[1][0]][smallestBlack[1][1]];
      let white = matrix[smallestWhite[1][0]][smallestWhite[1][1]];

      if (avg % 1 === 0) {
          matrix[smallestBlack[1][0]][smallestBlack[1][1]] = avg;
          matrix[smallestWhite[1][0]][smallestWhite[1][1]] = avg;
          blacks[queries[i][0]][0] = avg;
          whites[queries[i][1]][0] = avg;
      } else {
          if (black > white) {
              matrix[smallestBlack[1][0]][smallestBlack[1][1]] = Math.ceil(avg);
              matrix[smallestWhite[1][0]][smallestWhite[1][1]] = Math.floor(avg);
              blacks[queries[i][0]][0] = Math.ceil(avg);
              whites[queries[i][1]][0] = Math.floor(avg);
          } else {
              matrix[smallestBlack[1][0]][smallestBlack[1][1]] = Math.floor(avg);
              matrix[smallestWhite[1][0]][smallestWhite[1][1]] = Math.ceil(avg);
              blacks[queries[i][0]][0] = Math.floor(avg);
              whites[queries[i][1]][0] = Math.ceil(avg);
          }
      }
      whites.sort((a, b) => a[0] - b[0]);
      blacks.sort((a, b) => a[0] - b[0]);
  }
  return matrix;
}

let exampleMatrix = [[2, 0, 4],
                     [2, 8, 5],
                     [6, 0, 9],
                     [2, 7, 10],
                     [4, 3, 4]];
let queries = [[0, 0], [1, 3]];
console.table(meanAndChessboard(exampleMatrix, queries));