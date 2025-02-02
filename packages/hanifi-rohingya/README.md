# @numerals/hanifi-rohingya

[![Version](https://img.shields.io/badge/version-0.0.1-blue.svg)](https://github.com/amerharb/numerals/tree/hanifi-rohingya/version/0.0.1)
[![License: GPLv3](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
![Coverage](https://raw.githubusercontent.com/amerharb/numerals/hanifi-rohingya/version/0.0.1/packages/hanifi-rohingya/badges/coverage.svg)
![Github workflow](https://github.com/amerharb/numerals/actions/workflows/lint-test.yaml/badge.svg?branch=hanifi-rohingya/version/0.0.1)

**@numerals/hanifi-rohingya** is a package for converting number into Hanifi Rohingya numeral.

`123 -> 𐴱𐴲𐴳`

## How to use
npm:
```shell
npm i @numerals/hanifi-rohingya
```

yarn:
```shell
yarn add @numerals/hanifi-rohingya
```

Type Script:
```js
import { convert } from '@numerals/hanifi-rohingya';
console.log(convert(123)); // 𐴱𐴲𐴳
console.log(convert(123.45)); // 𐴱𐴲𐴳.𐴴𐴵
```

## Demo
Try it: [numerals.amerharb.com](https://numerals.amerharb.com)

## Other Numerals packages
- [@numerals/eastern-arabic](https://www.npmjs.com/package/@numerals/eastern-arabic)
- [@numerals/mayan](https://www.npmjs.com/package/@numerals/mayan)
- [@numerals/hieroglyphic](https://www.npmjs.com/package/@numerals/hieroglyphic)
- [@numerals/roman](https://www.npmjs.com/package/@numerals/roman)
- [@numerals/aegean](https://www.npmjs.com/package/@numerals/aegean)
- [@numerals/thai](https://www.npmjs.com/package/@numerals/thai)
- [@numerals/kaktovik](https://www.npmjs.com/package/@numerals/kaktovik)
