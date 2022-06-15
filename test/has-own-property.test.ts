import { hasOwnProperty } from '../src';

describe('hasOwnProperty function', () => {
  it('should return true if the object has the property', () => {
    const object = {
      a: 1,
      b: 2,
    };

    expect(hasOwnProperty(object, 'a')).toBe(true);
    expect(hasOwnProperty(object, 'b')).toBe(true);
  });

  it('should return false if the object does not have the property', () => {
    const object = {
      a: 1,
      b: 2,
    };

    expect(hasOwnProperty(object, 'c')).toBe(false);
  });
});
