const numbers = [
	String.fromCodePoint(0x0E50), /** #0 ๐ U+0E50 number 0*/
	String.fromCodePoint(0x0E51), /** #1 ๑ U+0E51 number 1*/
	String.fromCodePoint(0x0E52), /** #2 ๒ U+0E52 number 2*/
	String.fromCodePoint(0x0E53), /** #3 ๓ U+0E53 number 3*/
	String.fromCodePoint(0x0E54), /** #4 ๔ U+0E54 number 4*/
	String.fromCodePoint(0x0E55), /** #5 ๕ U+0E55 number 5*/
	String.fromCodePoint(0x0E56), /** #6 ๖ U+0E56 number 6*/
	String.fromCodePoint(0x0E57), /** #7 ๗ U+0E57 number 7*/
	String.fromCodePoint(0x0E58), /** #8 ๘ U+0E58 number 8*/
	String.fromCodePoint(0x0E59), /** #9 ๙ U+0E59 number 9*/
] as const

export const Th = {
	'0': numbers[0],
	'1': numbers[1],
	'2': numbers[2],
	'3': numbers[3],
	'4': numbers[4],
	'5': numbers[5],
	'6': numbers[6],
	'7': numbers[7],
	'8': numbers[8],
	'9': numbers[9],
}
