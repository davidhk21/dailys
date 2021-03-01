/*
This problem was given during a practice test for Asana coding assignment

You are given a square matrix m of characters and an array of queries q. Each element in matrix m is either '+' or '-'. Suppose that negate('+') = '-' and negate('-') = '+'. There are 3 types of queries:

- If query[0] = 1, then you must negate all the values inside cells sharing same diagonal with cell having coordinates [query[1], query[2]]
- If query[0] = 2, then you must negate all the values inside cells sharing same row or column with cell having coordinates [query[1], query[2]]
- IF query[0] = 3, then you must negate all the values inside cells hsaring same row, column or diagonal with cell having coordinates [query[1], query[2]]

Your task is to return the given matrix after processing all the queries on it
*/

function binaryMatrixQueries(m, q) {
  for (let i = 0; i < q.length; i++) {
      let query = q[i];
      let row = query[1];
      let col = query[2];

      if (query[0] === 1) {
          negateMajorDiagonal(m, row, col);
          negateMinorDiagonal(m, row, col);
          m[row][col] = m[row][col] === '-' ? '+' : '-';
          continue;
      }

      if (query[0] === 2) {
          negateRow(m, row, 0);
          negateCol(m, 0, col);
          m[row][col] = m[row][col] === '-' ? '+' : '-';
          continue;
      }

      if (query[0] === 3) {
          negateMajorDiagonal(m, row, col);
          negateMinorDiagonal(m, row, col);
          negateRow(m, row, 0);
          negateCol(m, 0, col);
          m[row][col] = m[row][col] === '-' ? '+' : '-';
      }
  }
  return m;
}

function negateMajorDiagonal(matrix, row, col) {
  let size = matrix.length;
  while (row > 0 && col > 0) {
      row--;
      col--;
  }
  const negateMajor = (r, c) => {
      if (r >= size || c >= size) return;

      matrix[r][c] = matrix[r][c] === '-' ? '+' : '-';
      negateMajor(r + 1, c + 1);
  }

  negateMajor(row, col);
}

function negateMinorDiagonal(matrix, row, col) {
  let size = matrix.length;
  while (row > 0 && col < size - 1) {
      row--;
      col++;
  }
  const negateMinor = (r, c) => {
      if (r >= size || c < 0) return;

      matrix[r][c] = matrix[r][c] === '-' ? '+' : '-';
      negateMinor(r + 1, c - 1);
  }
  negateMinor(row, col);
}

function negateRow(matrix, row, col) {
  if (col > matrix.length - 1) return;

  matrix[row][col] = matrix[row][col] === '-' ? '+' : '-';
  negateRow(matrix, row, col + 1);
}

function negateCol(matrix, row, col) {
  if (row > matrix.length - 1) return;
  matrix[row][col] = matrix[row][col] === '-' ? '+' : '-';
  negateCol(matrix, row + 1, col);
}

console.log(binaryMatrixQueries([['-', '-'], ['-', '+']], [[1, 0, 0], [3, 0, 1]]));

console.log(binaryMatrixQueries([['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']], [[3, 1, 1]]));