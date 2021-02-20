/*
Reverse bits of a given 32 bits unsigned integer.

Follow up:
If this function is called many times, how would you optimize it?

Example:
Input: n = 00000010100101000001111010011100
Output:    964176192 (00111001011110000010100101000000)
Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.
*/

var reverseBits = function(n) {
  let result = 0;
  let count = 32;
  while (count > 0) {
    let edgeNum = n & 1;
    n = n >> 1;
    result = result << 1 | edgeNum;
    count--;
  }
  return result;
}

// Time Limit Exceeds though because of power shifts
// Time: O(1)
// Space: O(1)
var reverseBits = function(n) {
  let result = 0;
  let power = 31;
  while (n) {
    result += (n & 1) << power;
    n = n >> 0;
    power--;
  }
  return result;
};