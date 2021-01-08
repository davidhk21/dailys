/*
Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

Example:
Input: a = 1, b = 2
Output: 3
*/

// Input: 2 numbers
// Output: sum
// Constraints: not allowed to use operators + and -
// Edge cases: negative numbers

var getSum = function(a, b) {
  let carry;

  while(b) {
      carry = a & b;
      a ^= b;
      b = carry << 1;
  }

  return a;
};