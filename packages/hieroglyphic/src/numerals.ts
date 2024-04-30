const numbers = [
	String.fromCodePoint(0x133FA), /** #0 𓏺 U+133FA hieroglyphic numeral 1 */
	String.fromCodePoint(0x133FB), /** #1 𓏻 U+133FB hieroglyphic numeral 2 */
	String.fromCodePoint(0x133FC), /** #2 𓏼 U+133FC hieroglyphic numeral 3 */
	String.fromCodePoint(0x133FD), /** #3 𓏽 U+133FD hieroglyphic numeral 4 */
	String.fromCodePoint(0x133FE), /** #4 𓏾 U+133FE hieroglyphic numeral 5 */
	String.fromCodePoint(0x133FF), /** #5 𓏿 U+133FF hieroglyphic numeral 6 */
	String.fromCodePoint(0x13400), /** #6 𓐀 U+13400 hieroglyphic numeral 7 */
	String.fromCodePoint(0x13401), /** #7 𓐁 U+13401 hieroglyphic numeral 8 */
	String.fromCodePoint(0x13402), /** #8 𓐂 U+13402 hieroglyphic numeral 9 */

	String.fromCodePoint(0x13386), /** #9 𓎆 U+13386 hieroglyphic numeral 10 */
	String.fromCodePoint(0x13387), /** #10 𓎇 U+13387 hieroglyphic numeral 20 */
	String.fromCodePoint(0x13388), /** #11 𓎈 U+13388 hieroglyphic numeral 30 */
	String.fromCodePoint(0x13389), /** #12 𓎉 U+13389 hieroglyphic numeral 40 */
	String.fromCodePoint(0x1338A), /** #13 𓎊 U+1338A hieroglyphic numeral 50 */
	String.fromCodePoint(0x1338B), /** #14 𓎋 U+1338B hieroglyphic numeral 60 */
	String.fromCodePoint(0x1338C), /** #15 𓎌 U+1338C hieroglyphic numeral 70 */
	String.fromCodePoint(0x1338D), /** #16 𓎍 U+1338D hieroglyphic numeral 80 */
	String.fromCodePoint(0x1338E), /** #17 𓎎 U+1338E hieroglyphic numeral 90 */

	String.fromCodePoint(0x13362), /** #18 𓍢 U+13362 hieroglyphic numeral 100 */
	String.fromCodePoint(0x13363), /** #19 𓍣 U+13363 hieroglyphic numeral 200 */
	String.fromCodePoint(0x13364), /** #20 𓍤 U+13364 hieroglyphic numeral 300 */
	String.fromCodePoint(0x13365), /** #21 𓍥 U+13365 hieroglyphic numeral 400 */
	String.fromCodePoint(0x13366), /** #22 𓍦 U+13366 hieroglyphic numeral 500 */
	String.fromCodePoint(0x13367), /** #23 𓍧 U+13367 hieroglyphic numeral 600 */
	String.fromCodePoint(0x13368), /** #24 𓍨 U+13368 hieroglyphic numeral 700 */
	String.fromCodePoint(0x13369), /** #25 𓍩 U+13369 hieroglyphic numeral 800 */
	String.fromCodePoint(0x1336A), /** #26 𓍪 U+1336A hieroglyphic numeral 900 */

	String.fromCodePoint(0x131BC), /** #27 𓆼 U+131BC hieroglyphic numeral 1000 */
	String.fromCodePoint(0x131BD), /** #28 𓆽 U+131BD hieroglyphic numeral 2000 */
	String.fromCodePoint(0x131BE), /** #29 𓆾 U+131BE hieroglyphic numeral 3000 */
	String.fromCodePoint(0x131BF), /** #30 𓆿 U+131BF hieroglyphic numeral 4000 */
	String.fromCodePoint(0x131C0), /** #31 𓇀 U+131C0 hieroglyphic numeral 5000 */
	String.fromCodePoint(0x131C1), /** #32 𓇁 U+131C1 hieroglyphic numeral 6000 */
	String.fromCodePoint(0x131C2), /** #33 𓇂 U+131C2 hieroglyphic numeral 7000 */
	String.fromCodePoint(0x131C3), /** #34 𓇃 U+131C3 hieroglyphic numeral 8000 */
	String.fromCodePoint(0x131C4), /** #35 𓇄 U+131C4 hieroglyphic numeral 9000 */

	String.fromCodePoint(0x130AD), /** #36 𓂭 U+130AD hieroglyphic numeral 10,000 */
	String.fromCodePoint(0x130AE), /** #37 𓂮 U+130AE hieroglyphic numeral 20,000 */
	String.fromCodePoint(0x130AF), /** #38 𓂯 U+130AF hieroglyphic numeral 30,000 */
	String.fromCodePoint(0x130B0), /** #39 𓂰 U+130B0 hieroglyphic numeral 40,000 */
	String.fromCodePoint(0x130B1), /** #40 𓂱 U+130B1 hieroglyphic numeral 50,000 */
	String.fromCodePoint(0x130B2), /** #41 𓂲 U+130B2 hieroglyphic numeral 60,000 */
	String.fromCodePoint(0x130B3), /** #42 𓂳 U+130B3 hieroglyphic numeral 70,000 */
	String.fromCodePoint(0x130B4), /** #43 𓂴 U+130B4 hieroglyphic numeral 80,000 */
	String.fromCodePoint(0x130B5), /** #44 𓂵 U+130B5 hieroglyphic numeral 90,000 */

	String.fromCodePoint(0x13190), /** #45 𓆐 U+13190 hieroglyphic numeral 100,000 */
	String.fromCodePoint(0x13068), /** #46 𓁨 U+13068 hieroglyphic numeral 1,000,000 */

] as const

export const Hi = {
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

	100_000: numbers[45],
	1000_000: numbers[46],
}
