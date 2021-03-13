const NumberFormatter = require('../String/ToHumanString.js');
const groupAnagrams = require('../String/GroupAnagrams.js');
const isValid = require('../String/ValidParentheses.js');

describe('Number Formatter', () => {
  test('should turn number to human string format', () => {
    const formatter = new NumberFormatter(1000);
    expect(formatter.toHumanString()).toEqual('1,000');
  })

  test('should work with larger numbers', () => {
    const formatter = new NumberFormatter(54732091);
    expect(formatter.toHumanString()).toEqual('54,732,091');
  })

  test('should have no commas if less than 1,000', () => {
    const formatter = new NumberFormatter(987);
    expect(formatter.toHumanString()).toEqual('987');
  })
})

describe('Group Anagram', () => {
  test('should group anagrams correctly', () => {
    expect(groupAnagrams(["eat","tea","tan","ate","nat","bat"])).toEqual(
      [["eat","tea","ate"],["tan","nat"],["bat"]])
  })

  test('should work with one empty string', () => {
    expect(groupAnagrams([''])).toEqual([['']]);
  })
})

describe('Valid Parentheses', () => {
  test('should validate parentheses', () => {
    expect(isValid('(){}[]')).toBe(true);
  })

  test('should return false', () => {
    expect(isValid('([]){}(()}')).toBe(false);
  })
})