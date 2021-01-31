/*
Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

Example:
Input: 5
Output: [0,1,1,2,1,2]
*/

// Input: integer
// Output: array of integers
// Constraints: Time Complexity: O(n)
//              Space Complexity: O(n)
// Edge Cases: none

// DYNAMMIC PROGRAMMING SOLUTION
// Time Complexity: O(n)
// Space Complexity: O(n)
var countBits = function(num) {
  let result = [0];

  for (let i = 1; i <= num; i++) {
    result[i] = (i % 2 === 0) ? result[Math.floor(i / 2)] : 1 + result[Math.floor(i / 2)];
  }

  return result;
}

// ORIGINAL SOLUTION
// Time Complexity: O(kn) where k is number of bits for a num
// Space Complexity: O(n)
var countBits = function(num) {
  let result = [0];

  let idx = 1;
  while (idx <= num) {
    // count the bits for idx
    let count = 0;
    let idxCalc = idx;
    while (idxCalc !== 0) {
      let temp = idxCalc;
      temp = temp >>> 1;
      temp = temp << 1;
      let increment = idxCalc ^ temp;
      if (increment) count++;

      idxCalc = idxCalc >>> 1;
    }
    // push to result
    result.push(count);
    idx++;
  }

  return result;
};