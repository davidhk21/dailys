const letterCombinations = require('../Backtracking/LetterCombinationsOfAPhoneNumber.js');

describe('Letter Combination of a Phone Number', () => {
  test('should get all of the correct combinations for given digits', () => {
    expect(letterCombinations('23')).toEqual(["ad","ae","af","bd","be","bf","cd","ce","cf"]);
  })

  test('should return empty array for empty string input', () => {
    expect(letterCombinations('')).toEqual([]);
  })
})