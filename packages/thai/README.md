# @numerals/thai

[![Version](https://img.shields.io/badge/version-0.0.2-blue.svg)](https://github.com/amerharb/numerals/tree/thai/version/0.0.2)
[![License: GPLv3](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
![Coverage](https://raw.githubusercontent.com/amerharb/numerals/thai/version/0.0.2/packages/thai/badges/coverage.svg)
![Github workflow](https://github.com/amerharb/numerals/actions/workflows/lint-test.yaml/badge.svg?branch=thai/version/0.0.2)

**@numerals/thai** is a package for converting number into Thai numeral.

`123 -> ๑๒๓`

## How to use
npm:
```shell
npm i @numerals/thai
```

yarn:
```shell
yarn add @numerals/thai
```

Type Script:
```js
import { convert } from '@numerals/thai';
console.log(convert(123)); // ๑๒๓
console.log(convert(123.45)); // ๑๒๓.๔๕
```

## Demo
Try it: [numerals.amerharb.com](https://numerals.amerharb.com)

## Other Numerals packages
- [@numerals/eastern-arabic](https://www.npmjs.com/package/@numerals/eastern-arabic)
- [@numerals/mayan](https://www.npmjs.com/package/@numerals/mayan)
- [@numerals/hieroglyphic](https://www.npmjs.com/package/@numerals/hieroglyphic)
- [@numerals/roman](https://www.npmjs.com/package/@numerals/roman)
- [@numerals/aegean](https://www.npmjs.com/package/@numerals/aegean)
- [@numerals/hanifi-rohingya](https://www.npmjs.com/package/@numerals/hanifi-rohingya)
- [@numerals/kaktovik](https://www.npmjs.com/package/@numerals/kaktovik)
