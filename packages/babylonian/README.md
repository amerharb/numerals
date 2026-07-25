# @numerals/babylonian

[![Version](https://img.shields.io/badge/version-0.0.1-blue.svg)](https://github.com/amerharb/numerals/tree/babylonian/version/0.0.1)
[![License: GPLv3](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
![Coverage](https://raw.githubusercontent.com/amerharb/numerals/babylonian/version/0.0.1/packages/babylonian/badges/coverage.svg)
![Github workflow](https://github.com/amerharb/numerals/actions/workflows/lint-test.yaml/badge.svg?branch=babylonian/version/0.0.1)

**@numerals/babylonian** is a package for converting a number into Babylonian (sexagesimal, base-60) cuneiform numerals.

`72 -> 𒁹 𒌋𒁹𒁹`

Used in ancient Mesopotamia (~2000 BCE), this is the earliest known place-value number
system. Its base of 60 is why we still divide an hour into 60 minutes and a circle into
360 degrees.

## How to use
npm:
```shell
npm i @numerals/babylonian
```

Type Script:
```ts
import { convert } from '@numerals/babylonian';
console.log(convert(1));  // 𒁹
console.log(convert(10)); // 𒌋
console.log(convert(59)); // 𒌋𒌋𒌋𒌋𒌋𒁹𒁹𒁹𒁹𒁹𒁹𒁹𒁹𒁹
console.log(convert(60)); // 𒁹 ·
console.log(convert(72)); // 𒁹 𒌋𒁹𒁹
```

## Notes
- Base-60 positional: each place (1–59) is written additively as some `𒌋` (ten)
  wedges followed by some `𒁹` (one) wedges. Places are separated by a space.
- The Babylonians had no symbol for zero, so `convert(0)` throws, and an empty
  internal place is shown with a `·` placeholder (e.g. `3600 -> 𒁹 · ·`).
- Rendering the cuneiform glyphs requires a cuneiform-capable font
  (e.g. Noto Sans Cuneiform).

## Demo
Try it: [numerals.amerharb.com](https://numerals.amerharb.com)

## Other Numerals packages
- [@numerals/eastern-arabic](https://www.npmjs.com/package/@numerals/eastern-arabic)
- [@numerals/mayan](https://www.npmjs.com/package/@numerals/mayan)
- [@numerals/hieroglyphic](https://www.npmjs.com/package/@numerals/hieroglyphic)
- [@numerals/roman](https://www.npmjs.com/package/@numerals/roman)
- [@numerals/aegean](https://www.npmjs.com/package/@numerals/aegean)
- [@numerals/thai](https://www.npmjs.com/package/@numerals/thai)
- [@numerals/hanifi-rohingya](https://www.npmjs.com/package/@numerals/hanifi-rohingya)
- [@numerals/kaktovik](https://www.npmjs.com/package/@numerals/kaktovik)
