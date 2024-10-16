# @numerals/mayan

[![Version](https://img.shields.io/badge/version-0.0.1-blue.svg)](https://github.com/amerharb/numerals/tree/mayan/version/0.0.1)
[![License: GPLv3](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
![Coverage](https://raw.githubusercontent.com/amerharb/numerals/mayan/version/0.0.1/packages/mayan/badges/coverage.svg)
![Github workflow](https://github.com/amerharb/numerals/actions/workflows/lint-test.yaml/badge.svg?branch=mayan/version/0.0.1)

**@numerals/mayan** is a package for converting number into Mayan numeral.

`19 -> 𝋳`

## How to use
npm:
```shell
npm i @numerals/mayan
```

yarn:
```shell
yarn add @numerals/mayan
```

Type Script:
```js
import { convert } from '@numerals/mayan';
console.log(convert(0)); // 𝋠
console.log(convert(1)); // 𝋡
console.log(convert(10)); // 𝋪
console.log(convert(19)); // 𝋳
console.log(convert(20)); // 𝋰𝋠
```

## Demo
Try it: [numerals.amerharb.com](https://numerals.amerharb.com)

## Other Numerals packages
- [@numerals/eastern-arabic](https://www.npmjs.com/package/@numerals/eastern-arabic)
- [@numerals/hieroglyphic](https://www.npmjs.com/package/@numerals/hieroglyphic)
- [@numerals/roman](https://www.npmjs.com/package/@numerals/roman)
- [@numerals/aegean](https://www.npmjs.com/package/@numerals/aegean)
- [@numerals/thai](https://www.npmjs.com/package/@numerals/thai)
- [@numerals/hanifi-rohingya](https://www.npmjs.com/package/@numerals/hanifi-rohingya)
- [@numerals/kaktovik](https://www.npmjs.com/package/@numerals/kaktovik)
