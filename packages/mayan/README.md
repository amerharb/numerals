# @numerals/mayan

[![Version](https://img.shields.io/badge/version-0.0.1-blue.svg)](https://github.com/amerharb/numerals/tree/mayan/version/0.0.1)
[![License: GPLv3](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
![Coverage](https://raw.githubusercontent.com/amerharb/numerals/mayan/version/0.0.1/packages/mayan/badges/coverage.svg)
![Github workflow](https://github.com/amerharb/numerals/actions/workflows/lint-test.yaml/badge.svg?branch=mayan/version/0.0.1)

**@numerals/mayan** is a package for converting number into mayan numeral.

`123 -> ١٢٣`

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
console.log(convert(123)); // ١٢٣
console.log(convert(123.45)); // ١٢٣٫٤٥
```
