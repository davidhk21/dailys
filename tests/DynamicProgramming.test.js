const rob = require('../Dynamic_Programming/HouseRobber');

describe('House Robber', () => {
  test('should find max amount of money', () => {
    expect(rob([2, 7, 9, 3, 1])).toEqual(12);
  })

  test('should work with length of 2', ()=> {
    expect(rob([3, 7])).toEqual(7);
  })
})