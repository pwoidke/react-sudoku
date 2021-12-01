import { copyByValue, deepDiff } from '../functions';

const obj1 = {
  a: {
    b: {
      c: '1',
    },
  },
  d: {
    e: '2',
    f: 3,
  },
};

const obj2 = {
  a: {
    b: {
      c: 3,
    },
  },
  d: {
    e: '2',
    f: '1',
  },
};

describe('copyByValue', () => {
  it('should return false if objects are the same (deep comparison)', () => {
    expect(deepDiff(obj1, obj1)).toBe(false);
  });

  it('should return true if objects are different (deep comparison)', () => {
    expect(deepDiff(obj1, obj2)).toBe(true);
  });
});
