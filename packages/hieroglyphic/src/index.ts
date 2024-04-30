import { Hi } from './numerals'

export function convert(source: number): string {
	if (!Number.isFinite(source)) {
		throw new Error('Source is not a finite number')
	}
	if (source < 0) {
		throw new Error('Source is negative, only positive numbers are supported')
	}
	if (source == 0) {
		throw new Error('Source is zero, only positive numbers are supported')
	}
	if (source % 1 !== 0) {
		throw new Error('Source is not an integer, only integers are supported')
	}
	if (source > 10_000_000) {
		throw new Error('Source is too big, only numbers up to 10 000 000 are supported')
	}

	let result = ''
	let reminder = source
	const arr = [1000_000, 100_000, 10_000, 1000, 100, 10, 1] as const
	while (reminder > 0) {
		for (const n of arr) {
			if (reminder - n >= 0) {
				result += Hi[n]
				reminder -= n
				break
			}
		}
	}

	return result
}
