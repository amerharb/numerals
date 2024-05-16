# @numerals/aegean

[![Version](https://img.shields.io/badge/version-0.0.1-blue.svg)](https://github.com/amerharb/numerals/tree/aegean/version/0.0.1)
[![License: GPLv3](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
![Coverage](https://raw.githubusercontent.com/amerharb/numerals/aegean/version/0.0.1/packages/aegean/badges/coverage.svg)
![Github workflow](https://github.com/amerharb/numerals/actions/workflows/lint-test.yaml/badge.svg?branch=aegean/version/0.0.1)

**@numerals/aegean** is a package for converting number into Aegean numeral.

`1000 -> 𐄢`

## How to use
npm:
```shell
npm i @numerals/aegean
```

yarn:
```shell
yarn add @numerals/aegean
```

Type Script:
```ts
import { convert } from '@numerals/aegean';
console.log(convert(1)); // 𐄇
console.log(convert(2)); // 𐄈
console.log(convert(10)); // 𐄐
console.log(convert(1000)); // 𐄢
```

## Demo
Try it: [numerals.amerharb.com](https://numerals.amerharb.com)
