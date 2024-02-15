import { unroll } from './unroll';

describe('unroll function', () => {
  test('correctly unrolls a square array', () => {
    const squareArray = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ];
    const expected = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];
    expect(unroll(squareArray)).toEqual(expected);
  });

  test('correctly unrolls a smaller square array', () => {
    const smallerSquareArray = [
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"]
    ];
    const expected = ["a", "b", "c", "f", "i", "h", "g", "d", "e"];
    expect(unroll(smallerSquareArray)).toEqual(expected);
  });

  test('returns an empty array when given an empty square array', () => {
    const emptySquareArray = [];
    const expected = [];
    expect(unroll(emptySquareArray)).toEqual(expected);
  });
});
