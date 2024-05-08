const numbers = [
	String.fromCodePoint(0x2160), /** #0 Ⅰ U+2160 Roman numeral 1 */
	String.fromCodePoint(0x2161), /** #1 Ⅱ U+2161 Roman numeral 2 */
	String.fromCodePoint(0x2162), /** #2 Ⅲ U+2162 Roman numeral 3 */
	String.fromCodePoint(0x2163), /** #3 Ⅳ U+2163 Roman numeral 4 */
	String.fromCodePoint(0x2164), /** #4 Ⅴ U+2164 Roman numeral 5 */
	String.fromCodePoint(0x2165), /** #5 Ⅵ U+2165 Roman numeral 6 */
	String.fromCodePoint(0x2166), /** #6 Ⅶ U+2166 Roman numeral 7 */
	String.fromCodePoint(0x2167), /** #7 Ⅷ U+2167 Roman numeral 8 */

	String.fromCodePoint(0x2168), /** #8 Ⅸ U+2168 Roman numeral 9 */
	String.fromCodePoint(0x2169), /** #9 Ⅹ U+2169 Roman numeral 10 */
	String.fromCodePoint(0x216A), /** #10 Ⅺ U+216A Roman numeral 11 */
	String.fromCodePoint(0x216B), /** #11 Ⅻ U+216B Roman numeral 12 */

	String.fromCodePoint(0x216C), /** #12 Ⅼ U+216C Roman numeral 50 */
	String.fromCodePoint(0x216D), /** #13 Ⅽ U+216D Roman numeral 100 */
	String.fromCodePoint(0x216E), /** #14 Ⅾ U+216E Roman numeral 500 */
	String.fromCodePoint(0x216F), /** #15 Ⅿ U+216F Roman numeral 1000 */

	String.fromCodePoint(0x2181), /** #16 ↁ U+2181 Roman numeral 5000 */
	String.fromCodePoint(0x2182), /** #17 ↂ U+2182 Roman numeral 10_000 */
	String.fromCodePoint(0x2187), /** #18 ↇ U+2187 Roman numeral 50_000 */
	String.fromCodePoint(0x2188), /** #19 ↈ U+2188 Roman numeral 100_000 */
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

	40: numbers[9] + numbers[12],
	50: numbers[12],
	90: numbers[9] + numbers[13],
	100: numbers[13],
	400: numbers[13] + numbers[14],
	500: numbers[14],
	900: numbers[13] + numbers[15],
	1000: numbers[15],

	4000: numbers[15] + numbers[16],
	5000: numbers[16],
	9000: numbers[15] + numbers[17],
	10_000: numbers[17],
	40_000: numbers[17] + numbers[18],
	50_000: numbers[18],
	90_000: numbers[17] + numbers[19],
	100_000: numbers[19],
}
