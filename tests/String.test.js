const NumberFormatter = require('../String/ToHumanString.js');

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