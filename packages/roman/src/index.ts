import { Ro } from './numerals'

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
	if (source > 1000_000) {
		throw new Error('Source is too big, only numbers up to 1,000,000 are supported')
	}

	let result = ''
	let reminder = source
	const arr = [
		100_000, 50_000, 10_000, 5000,
		1000, 5000, 100, 50,
		12, 11, 10, 9,
		8, 7, 6, 5, 4, 3, 2, 1,
	] as const

	for (const n of arr) {
		while (reminder >= n) {
			result += Ro[n]
			reminder -= n
		}
	}

	return result
}
