# @numerals/roman

[![Version](https://img.shields.io/badge/version-0.0.2-blue.svg)](https://github.com/amerharb/numerals/tree/roman/version/0.0.2)
[![License: GPLv3](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
![Coverage](https://raw.githubusercontent.com/amerharb/numerals/roman/version/0.0.2/packages/roman/badges/coverage.svg)
![Github workflow](https://github.com/amerharb/numerals/actions/workflows/lint-test.yaml/badge.svg?branch=roman/version/0.0.2)

**@numerals/roman** is a package for converting number into Roman numeral.

`8 -> Ⅷ`

## How to use
npm:
```shell
npm i @numerals/roman
```

yarn:
```shell
yarn add @numerals/roman
```

Type Script:
```ts
import { convert } from '@numerals/roman';
console.log(convert(1)); // Ⅰ
console.log(convert(8)); // Ⅷ
console.log(convert(12)); // Ⅻ
console.log(convert(5000)); // ↁ
console.log(convert(10_000)); // ↂ
```

## Demo
Try it: [numerals.amerharb.com](https://numerals.amerharb.com)

## Other Numerals packages
- [@numerals/eastern-arabic](https://www.npmjs.com/package/@numerals/eastern-arabic)
- [@numerals/mayan](https://www.npmjs.com/package/@numerals/mayan)
- [@numerals/hieroglyphic](https://www.npmjs.com/package/@numerals/hieroglyphic)
- [@numerals/aegean](https://www.npmjs.com/package/@numerals/aegean)
- [@numerals/thai](https://www.npmjs.com/package/@numerals/thai)
- [@numerals/hanifi-rohingya](https://www.npmjs.com/package/@numerals/hanifi-rohingya)
