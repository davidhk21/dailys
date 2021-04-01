/*
Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.
*/

// Input: Array of strings
// Output: string
// Constraints:
  // strs.length >= 1
  // strs[i] contains any possible characters out of 256 ASCII characters
// Edge cases: none

// Time: O(N)
// Space: O(1)
var encode = function(strs) {
  return strs.reduce((res, cur) => { return `${res}${cur.length}|${cur}`}, '');
};

// Input: string
// Output: Array of strings

// Time: O(N^2)
// Space: O(1)
var decode = function(s) {
  let result = [];
  try {
    while (s.length > 0) {
      let sep = s.indexOf('|');
      if (sep === -1) throw new Error('separator not found');
      let len = parseInt(s.slice(0, sep));
      s = s.slice(sep + 1);
      if (isNaN(len)) throw new Error('length is not a number');
      let payload = s.slice(0, len);
      if (payload.length < len) throw new Error('payload does not match length');
      result.push(payload);
      s = s.slice(len);
    }
  } catch (err) {
    throw new Error(`decode method failed with exception ${err}`)
  }
  return result;
};