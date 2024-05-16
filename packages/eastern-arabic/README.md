# @numerals/eastern-arabic

[![Version](https://img.shields.io/badge/version-0.0.2-blue.svg)](https://github.com/amerharb/numerals/tree/eastern-arabic/version/0.0.2)
[![License: GPLv3](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
![Coverage](https://raw.githubusercontent.com/amerharb/numerals/eastern-arabic/version/0.0.2/packages/eastern-arabic/badges/coverage.svg)
![Github workflow](https://github.com/amerharb/numerals/actions/workflows/lint-test.yaml/badge.svg?branch=eastern-arabic/version/0.0.2)

**@numerals/eastern-arabic** is a package for converting number into Eastern Arabic numeral.

`123 -> ١٢٣`

## How to use
npm:
```shell
npm i @numerals/eastern-arabic
```

yarn:
```shell
yarn add @numerals/eastern-arabic
```

Type Script:
```js
import { convert } from '@numerals/eastern-arabic';
console.log(convert(123)); // ١٢٣
console.log(convert(123.45)); // ١٢٣٫٤٥
```

## Demo
Try it: [numerals.amerharb.com](https://numerals.amerharb.com)

## Other Numerals packages
- [@numerals/mayan](https://www.npmjs.com/package/@numerals/mayan)
- [@numerals/hieroglyphic](https://www.npmjs.com/package/@numerals/hieroglyphic)
- [@numerals/roman](https://www.npmjs.com/package/@numerals/roman)
- [@numerals/aegean](https://www.npmjs.com/package/@numerals/aegean)
- [@numerals/thai](https://www.npmjs.com/package/@numerals/thai)
- [@numerals/hanifi-rohingya](https://www.npmjs.com/package/@numerals/hanifi-rohingya)
