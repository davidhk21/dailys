const longestConsecutive = require('../Graph/LongestConsecutiveSequence.js');

describe('Longest Consecutive Sequence', () => {
  test('should retrieve longest consecutive sequence', () => {
    expect(longestConsecutive([100,4,200,1,3,2])).toEqual(4);
  })

  test('should work with duplicates', () => {
    expect(longestConsecutive([2, 1, 1, 0, 5])).toEqual(3);
  })

  test('should return 0 with empty array input', () => {
    expect(longestConsecutive([])).toEqual(0);
  })
})