/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example:
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
*/

// Input: string of numbers
// Output: Array of strings
// Constraints: none
// Edge Cases: empty string => empty array

// Time: O(3^N x 4^M) where N is the number of digits in the input that map to 3 letters and M is the number of digits that map to 4 letters, and N + M is the total number digits in the input
// Space: O(3^N X 4^M) since one has to keep 3^N x 4^M solutions
var letterCombinations = function(digits) {
  if (digits.length === 0) return [];

  let map = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  }

  let result = [];

  const findCombos = (nums, curr) => {
    if (nums.length === 0) {
      result.push(curr);
      return;
    }

    let nextNum = nums[0];
    let newNums = nums.slice(1);

    for (let i = 0; i < map[nextNum].length; i++) {
      let newCurr = curr + map[nextNum][i];
      findCombos(newNums, newCurr);
    }
  }

  findCombos(digits, '');

  return result;
};

module.exports = letterCombinations;