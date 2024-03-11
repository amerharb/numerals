# @numerals/eastern-arabic

[![Version](https://img.shields.io/badge/version-0.0.1-blue.svg)](https://github.com/amerharb/numerals/tree/eastren-arabic/version/0.0.1)
[![License: GPLv3](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
![Coverage](https://raw.githubusercontent.com/amerharb/abjad/eastren-arabic/version/0.0.1/packages/eastren-arabic/badges/coverage.svg)
![Github workflow](https://github.com/amerharb/abjad/actions/workflows/lint-test.yaml/badge.svg?branch=eastren-arabic/version/0.0.1)

**@numerals/eastern-arabic** is a package for converting number into eastern arabic numeral.

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
