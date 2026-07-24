import { Ba, PLACE_SEPARATOR, ZERO_PLACE } from './numerals'

// Render one sexagesimal place (0–59) as cuneiform wedges: tens then ones.
function placeToWedges(digit: number): string {
	if (digit === 0) {
		return ZERO_PLACE
	}
	const tens = Math.floor(digit / 10)
	const ones = digit % 10
	return Ba.ten.repeat(tens) + Ba.one.repeat(ones)
}

export function convert(source: number): string {
	if (!Number.isFinite(source)) {
		throw new Error('Source is not a finite number')
	}
	if (source < 0) {
		throw new Error('Source is negative, only positive numbers are supported')
	}
	if (source === 0) {
		throw new Error('Source is zero, only positive numbers are supported')
	}
	if (source % 1 !== 0) {
		throw new Error('Source is not an integer, only integers are supported')
	}

	// Split into base-60 places, most significant first.
	const places: number[] = []
	let remainder = source
	while (remainder > 0) {
		places.unshift(remainder % 60)
		remainder = Math.floor(remainder / 60)
	}

	return places.map(placeToWedges).join(PLACE_SEPARATOR)
}
