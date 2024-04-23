const numbers = [
	'\u0660', /** #0 ٠ U+0660 number 0*/
	'\u0661', /** #1 ١ U+0661 number 1*/
	'\u0662', /** #2 ٢ U+0662 number 2*/
	'\u0663', /** #3 ٣ U+0663 number 3*/
	'\u0664', /** #4 ٤ U+0664 number 4*/
	'\u0665', /** #5 ٥ U+0665 number 5*/
	'\u0666', /** #6 ٦ U+0666 number 6*/
	'\u0667', /** #7 ٧ U+0667 number 7*/
	'\u0668', /** #8 ٨ U+0668 number 8*/
	'\u0669', /** #9 ٩ U+0669 number 9*/

	'\u066B', /** #10 ٫ U+066B arabic decimal separator */
] as const

export const EA = {
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
	separator: numbers[10],
}
