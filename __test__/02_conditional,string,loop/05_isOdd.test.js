const isOdd = require('../../02_conditional,string,loop/05_isOdd');

describe('isOdd', () => {
  test('If 10 is given, it should return false', () => {
    expect(isOdd(10)).toEqual(false);
  });

  test('If 3 is given, it should return true', () => {
    expect(isOdd(3)).toEqual(true);
  });
});
