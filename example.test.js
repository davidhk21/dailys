function sum(a, b) {
  return a + b;
}

describe('sum function', () => {
  test('should add 2 numbers correctly', () => {
    expect(sum(1, 2)).toEqual(3);
  })
})