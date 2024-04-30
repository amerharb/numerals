# @numerals/hieroglyphic

[![Version](https://img.shields.io/badge/version-0.0.1-blue.svg)](https://github.com/amerharb/numerals/tree/hieroglyphic/version/0.0.1)
[![License: GPLv3](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
![Coverage](https://raw.githubusercontent.com/amerharb/numerals/hieroglyphic/version/0.0.1/packages/hieroglyphic/badges/coverage.svg)
![Github workflow](https://github.com/amerharb/numerals/actions/workflows/lint-test.yaml/badge.svg?branch=hieroglyphic/version/0.0.1)

**@numerals/hieroglyphic** is a package for converting number into hieroglyphic numeral.

`2 -> 𓏻`

## How to use
npm:
```shell
npm i @numerals/hieroglyphic
```

yarn:
```shell
yarn add @numerals/hieroglyphic
```

Type Script:
```ts
import { convert } from '@numerals/hieroglyphic';
console.log(convert(1)); // 𓏺
console.log(convert(2)); // 𓏻
console.log(convert(10)); // 𓎆
console.log(convert(1000)); // 𓂭
```
