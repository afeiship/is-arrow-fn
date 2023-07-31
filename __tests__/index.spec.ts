import isArrowFn from '../src';

describe('api.basic', () => {
  test('01. normal function', () => {
    const fn1 = function () {};
    const fn2 = function () {
      return 1;
    };
    const fn3 = function (a, b) {
      return a + b;
    };
    expect(isArrowFn(fn1)).toBe(false);
    expect(isArrowFn(fn2)).toBe(false);
    expect(isArrowFn(fn3)).toBe(false);
  });

  test('02. system function', () => {
    const fn1 = Array.prototype.map;
    const fn2 = Array.prototype.forEach;
    const fn3 = console.log;

    expect(isArrowFn(fn1)).toBe(false);
    expect(isArrowFn(fn2)).toBe(false);
    expect(isArrowFn(fn3)).toBe(false);
  });

  test('03. arrow function', () => {
    const fn1 = () => {};
    const fn2 = () => 1;
    const fn4 = (a, b) => a + b;

    expect(isArrowFn(fn1)).toBe(true);
    expect(isArrowFn(fn2)).toBe(true);
    expect(isArrowFn(fn4)).toBe(true);
  });

  test('04. mixed style', () => {
    const fn1 = function () {};
    const fn2 = () => 1;
    const fn3 = (a, b) => a + b;
    const fn4 = function () {
      return () => {
        console.log('destroy');
      };
    };
    expect(isArrowFn(fn1)).toBe(false);
    expect(isArrowFn(fn2)).toBe(true);
    expect(isArrowFn(fn3)).toBe(true);
    expect(isArrowFn(fn4)).toBe(false);
  });
});
