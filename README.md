# next-abstract-request
> Standard abstract request.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @feizheng/next-abstract-request
```

## apis
| api     | params                               | description    |
| ------- | ------------------------------------ | -------------- |
| request | (inUrl, inMethod, inData, inOptions) | The entry api  |
| get     | (inUrl, inData, inOptions)           | The get api    |
| post    | (inUrl, inData, inOptions)           | The post api   |
| delete  | (inUrl, inData, inOptions)           | The delete api |
| put     | (inUrl, inData, inOptions)           | The put api    |
| patch   | (inUrl, inData, inOptions)           | The patch api  |
| head    | (inUrl, inData, inOptions)           | The head api   |



## usage
```js
import NxAbstractRequest from '@feizheng/next-abstract-request';
```


## license
Code released under [the MIT license](https://github.com/afeiship/next-abstract-request/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/next-abstract-request
[version-url]: https://npmjs.org/package/@feizheng/next-abstract-request

[license-image]: https://img.shields.io/npm/l/@feizheng/next-abstract-request
[license-url]: https://github.com/afeiship/next-abstract-request/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/next-abstract-request
[size-url]: https://github.com/afeiship/next-abstract-request/blob/master/dist/next-abstract-request.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/next-abstract-request
[download-url]: https://www.npmjs.com/package/@feizheng/next-abstract-request
