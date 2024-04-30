const numbers = [
	String.fromCodePoint(0x13000), /** #0 𓀀 U+13000 hieroglyphic numeral 1 */
	String.fromCodePoint(0x1300A), /** #1 𓀊 U+1300A hieroglyphic numeral 10 */
	String.fromCodePoint(0x1301A), /** #2 𓀚 U+1301A hieroglyphic numeral 100 */
	String.fromCodePoint(0x1302A), /** #3 𓀪 U+1302A hieroglyphic numeral 1000 */
	String.fromCodePoint(0x1303A), /** #4 𓀰 U+1303A hieroglyphic numeral 10_000 */
	String.fromCodePoint(0x1304A), /** #5 𓁀 U+1304A hieroglyphic numeral 100_000 */
	String.fromCodePoint(0x1305A), /** #6 𓁐 U+1305A hieroglyphic numeral 1000_000 */
] as const

export const Hi = {
	1: numbers[0],
	10: numbers[1],
	100: numbers[2],
	1000: numbers[3],
	10_000: numbers[4],
	100_000: numbers[5],
	1000_000: numbers[6],
}
