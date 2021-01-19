/*
Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

Example:
Input: n = 00000000000000000000000000001011
Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
*/

// Input: number
// Output: number
// Constraints: none
// Edge Cases: none

// SOLUTION
var hammingWeight = function(n) {
  let count = 0;

  while (n) {
    count += n & 1;
    n = n >>> 1;
  }

  return count;
};

// ORIGINAL SOLUTION
var hammingWeight = function(n) {
  // create count variable
  let count = 0;
  // while num has a 1
  while (n) {
    // shift right and left
    let shiftedRight = n >>> 1;
    let shiftedLeft = shiftedRight << 1;
    // get XOR to see if there was a one
    let xor = n ^ shiftedLeft;
    // if there is a 1
    if (xor) {
      // increment counter
      count++;
    }
    // shift num right 1
    n = n >>> 1;
  }
  // return count
  return count;
};