const numbers = [
	String.fromCodePoint(0x2160), /** #0 Ⅰ U+2160 roman numeral 1 */
	String.fromCodePoint(0x2161), /** #1 Ⅱ U+2161 roman numeral 2 */
	String.fromCodePoint(0x2162), /** #2 Ⅲ U+2162 roman numeral 3 */
	String.fromCodePoint(0x2163), /** #3 Ⅳ U+2163 roman numeral 4 */
	String.fromCodePoint(0x2164), /** #4 Ⅴ U+2164 roman numeral 5 */
	String.fromCodePoint(0x2165), /** #5 Ⅵ U+2165 roman numeral 6 */
	String.fromCodePoint(0x2166), /** #6 Ⅶ U+2166 roman numeral 7 */
	String.fromCodePoint(0x2167), /** #7 Ⅷ U+2167 roman numeral 8 */

	String.fromCodePoint(0x2168), /** #8 Ⅸ U+2168 roman numeral 9 */
	String.fromCodePoint(0x2169), /** #9 Ⅹ U+2169 roman numeral 10 */
	String.fromCodePoint(0x216A), /** #10 Ⅺ U+216A roman numeral 11 */
	String.fromCodePoint(0x216B), /** #11 Ⅻ U+216B roman numeral 12 */

	String.fromCodePoint(0x216C), /** #12 Ⅼ U+216C roman numeral 50 */
	String.fromCodePoint(0x216D), /** #13 Ⅽ U+216D roman numeral 100 */
	String.fromCodePoint(0x216E), /** #14 Ⅾ U+216E roman numeral 500 */
	String.fromCodePoint(0x216F), /** #15 Ⅿ U+216F roman numeral 1000 */

	String.fromCodePoint(0x2181), /** #16 ↁ U+2181 roman numeral 5000 */
	String.fromCodePoint(0x2182), /** #17 ↂ U+2182 roman numeral 10_000 */
	String.fromCodePoint(0x2187), /** #18 ↇ U+2187 roman numeral 50_000 */
	String.fromCodePoint(0x2188), /** #19 ↈ U+2188 roman numeral 100_000 */
] as const

export const Ro = {
	1: numbers[0],
	2: numbers[1],
	3: numbers[2],
	4: numbers[3],
	5: numbers[4],
	6: numbers[5],
	7: numbers[6],
	8: numbers[7],

	9: numbers[8],
	10: numbers[9],
	11: numbers[10],
	12: numbers[11],

	50: numbers[12],
	100: numbers[13],
	500: numbers[14],
	1000: numbers[15],

	5000: numbers[16],
	10_000: numbers[17],
	50_000: numbers[18],
	100_000: numbers[19],
}
