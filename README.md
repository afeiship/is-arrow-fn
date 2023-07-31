# is-arrow-fn
> Determine if a function is an ES6 arrow function or not.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/is-arrow-fn
```

## usage
```js
import isArrowFn from '@jswork/is-arrow-fn';

const obj = {
  fn1() {
    console.log("normal fn1", this);
  },
  fn2: () => {
    console.log("arrow fn2", this);
  },
  fn3: function () {
    console.log("normal fn3", this);
  },
  fn4: function () {
    return () => {
      console.log("123");
    };
  },
};

isArrowFn(obj.fn1); // false
isArrowFn(obj.fn2); // true
isArrowFn(obj.fn3); // false
isArrowFn(obj.fn4); // false
```

## license
Code released under [the MIT license](https://github.com/afeiship/is-arrow-fn/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/is-arrow-fn
[version-url]: https://npmjs.org/package/@jswork/is-arrow-fn

[license-image]: https://img.shields.io/npm/l/@jswork/is-arrow-fn
[license-url]: https://github.com/afeiship/is-arrow-fn/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/is-arrow-fn
[size-url]: https://github.com/afeiship/is-arrow-fn/blob/master/dist/is-arrow-fn.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/is-arrow-fn
[download-url]: https://www.npmjs.com/package/@jswork/is-arrow-fn
