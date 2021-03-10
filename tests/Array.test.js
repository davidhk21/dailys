const search = require('../Array/SearchInRotatedSortedArray');

describe('Search in Rotated Sorted Array', () => {
  test('should find target', () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toEqual(4);
  })

  test('should return -1 when target does not exist in array', () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toEqual(-1);
  })

  test('should work with edge case', () => {
    expect(search([1, 3], 3)).toEqual(1);
  })
})