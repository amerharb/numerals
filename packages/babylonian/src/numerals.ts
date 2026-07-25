/*
 * Babylonian (sexagesimal, base-60) cuneiform numerals.
 *
 * Each base-60 place (1–59) is written additively: some number of "ten" wedges
 * followed by some number of "one" wedges. The Babylonians had no zero, so an
 * empty internal place is shown with a placeholder, and places are separated by
 * a space to keep the value unambiguous.
 */
export const Ba = {
	one: String.fromCodePoint(0x12079), /** 𒁹 U+12079 CUNEIFORM SIGN DISH — 1 */
	ten: String.fromCodePoint(0x1230B), /** 𒌋 U+1230B CUNEIFORM SIGN U — 10 */
} as const

// Placeholder for an empty sexagesimal place (Babylonian had no symbol for zero).
export const ZERO_PLACE = '·' // ·

// Separates sexagesimal places so multi-wedge places stay unambiguous.
export const PLACE_SEPARATOR = ' '
