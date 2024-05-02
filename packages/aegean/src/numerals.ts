const numbers = [
	String.fromCodePoint(0x10107), /** #0 𐄇 U+10107 aegean numeral 1 */
	String.fromCodePoint(0x10108), /** #1 𐄈 U+10108 aegean numeral 2 */
	String.fromCodePoint(0x10109), /** #2 𐄉 U+10109 aegean numeral 3 */
	String.fromCodePoint(0x1010A), /** #3 𐄊 U+1010A aegean numeral 4 */
	String.fromCodePoint(0x1010B), /** #4 𐄋 U+1010B aegean numeral 5 */
	String.fromCodePoint(0x1010C), /** #5 𐄌 U+1010C aegean numeral 6 */
	String.fromCodePoint(0x1010D), /** #6 𐄍 U+1010D aegean numeral 7 */
	String.fromCodePoint(0x1010E), /** #7 𐄎 U+1010E aegean numeral 8 */
	String.fromCodePoint(0x1010F), /** #8 𐄏 U+1010F aegean numeral 9 */

	String.fromCodePoint(0x10110), /** #9 𐄐 U+10110 aegean numeral 10 */
	String.fromCodePoint(0x10111), /** #10 𐄑 U+10111 aegean numeral 20 */
	String.fromCodePoint(0x10112), /** #11 𐄒 U+10112 aegean numeral 30 */
	String.fromCodePoint(0x10113), /** #12 𐄓 U+10113 aegean numeral 40 */
	String.fromCodePoint(0x10114), /** #13 𐄔 U+10114 aegean numeral 50 */
	String.fromCodePoint(0x10115), /** #14 𐄕 U+10115 aegean numeral 60 */
	String.fromCodePoint(0x10116), /** #15 𐄖 U+10116 aegean numeral 70 */
	String.fromCodePoint(0x10117), /** #16 𐄗 U+10117 aegean numeral 80 */
	String.fromCodePoint(0x10118), /** #17 𐄘 U+10118 aegean numeral 90 */

	String.fromCodePoint(0x10119), /** #18 𐄙 U+10119 aegean numeral 100 */
	String.fromCodePoint(0x1011A), /** #19 𐄚 U+1011A aegean numeral 200 */
	String.fromCodePoint(0x1011B), /** #20 𐄛 U+1011B aegean numeral 300 */
	String.fromCodePoint(0x1011C), /** #21 𐄜 U+1011C aegean numeral 400 */
	String.fromCodePoint(0x1011D), /** #22 𐄝 U+1011D aegean numeral 500 */
	String.fromCodePoint(0x1011E), /** #23 𐄞 U+1011E aegean numeral 600 */
	String.fromCodePoint(0x1011F), /** #24 𐄟 U+1011F aegean numeral 700 */
	String.fromCodePoint(0x10120), /** #25 𐄠 U+10120 aegean numeral 800 */
	String.fromCodePoint(0x10121), /** #26 𐄡 U+10121 aegean numeral 900 */

	String.fromCodePoint(0x10122), /** #27 𐄢 U+10122 aegean numeral 1000 */
	String.fromCodePoint(0x10123), /** #28 𐄣 U+10123 aegean numeral 2000 */
	String.fromCodePoint(0x10124), /** #29 𐄤 U+10124 aegean numeral 3000 */
	String.fromCodePoint(0x10125), /** #30 𐄥 U+10125 aegean numeral 4000 */
	String.fromCodePoint(0x10126), /** #31 𐄦 U+10126 aegean numeral 5000 */
	String.fromCodePoint(0x10127), /** #32 𐄧 U+10127 aegean numeral 6000 */
	String.fromCodePoint(0x10128), /** #33 𐄨 U+10128 aegean numeral 7000 */
	String.fromCodePoint(0x10129), /** #34 𐄩 U+10129 aegean numeral 8000 */
	String.fromCodePoint(0x1012A), /** #35 𐄪 U+1012A aegean numeral 9000 */

	String.fromCodePoint(0x1012B), /** #36 𐄫 U+1012B aegean numeral 10,000 */
	String.fromCodePoint(0x1012C), /** #37 𐄬 U+1012C aegean numeral 20,000 */
	String.fromCodePoint(0x1012D), /** #38 𐄭 U+1012D aegean numeral 30,000 */
	String.fromCodePoint(0x1012E), /** #39 𐄮 U+1012E aegean numeral 40,000 */
	String.fromCodePoint(0x1012F), /** #40 𐄯 U+1012F aegean numeral 50,000 */
	String.fromCodePoint(0x10130), /** #41 𐄰 U+10130 aegean numeral 60,000 */
	String.fromCodePoint(0x10131), /** #42 𐄱 U+10131 aegean numeral 70,000 */
	String.fromCodePoint(0x10132), /** #43 𐄲 U+10132 aegean numeral 80,000 */
	String.fromCodePoint(0x10133), /** #44 𐄳 U+10133 aegean numeral 90,000 */
] as const

export const Ag = {
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
	20: numbers[10],
	30: numbers[11],
	40: numbers[12],
	50: numbers[13],
	60: numbers[14],
	70: numbers[15],
	80: numbers[16],
	90: numbers[17],

	100: numbers[18],
	200: numbers[19],
	300: numbers[20],
	400: numbers[21],
	500: numbers[22],
	600: numbers[23],
	700: numbers[24],
	800: numbers[25],
	900: numbers[26],

	1000: numbers[27],
	2000: numbers[28],
	3000: numbers[29],
	4000: numbers[30],
	5000: numbers[31],
	6000: numbers[32],
	7000: numbers[33],
	8000: numbers[34],
	9000: numbers[35],

	10_000: numbers[36],
	20_000: numbers[37],
	30_000: numbers[38],
	40_000: numbers[39],
	50_000: numbers[40],
	60_000: numbers[41],
	70_000: numbers[42],
	80_000: numbers[43],
	90_000: numbers[44],
}
