const numbers = [
	String.fromCodePoint(0x10D30), /** #0 𐴰 U+10D28 HANIFI ROHINGYA DIGIT ZERO */
	String.fromCodePoint(0x10D31), /** #1 𐴱 U+10D29 HANIFI ROHINGYA DIGIT ONE */
	String.fromCodePoint(0x10D32), /** #2 𐴲 U+10D2A HANIFI ROHINGYA DIGIT TWO */
	String.fromCodePoint(0x10D33), /** #3 𐴳 U+10D2B HANIFI ROHINGYA DIGIT THREE */
	String.fromCodePoint(0x10D34), /** #4 𐴴 U+10D2C HANIFI ROHINGYA DIGIT FOUR */
	String.fromCodePoint(0x10D35), /** #5 𐴵 U+10D2D HANIFI ROHINGYA DIGIT FIVE */
	String.fromCodePoint(0x10D36), /** #6 𐴶 U+10D2E HANIFI ROHINGYA DIGIT SIX */
	String.fromCodePoint(0x10D37), /** #7 𐴷 U+10D2F HANIFI ROHINGYA DIGIT SEVEN */
	String.fromCodePoint(0x10D38), /** #8 𐴸 U+10D30 HANIFI ROHINGYA DIGIT EIGHT */
	String.fromCodePoint(0x10D39), /** #9 𐴹 U+10D31 HANIFI ROHINGYA DIGIT NINE */
] as const

export const HR = {
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
