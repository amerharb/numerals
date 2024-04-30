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
	const arr = [
		1000_000, 100_000,
		90_000, 80_000, 70_000, 60_000, 50_000, 40_000, 30_000, 20_000, 10_000,
		9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000,
		900, 800, 700, 600, 500, 400, 300, 200, 100,
		90, 80, 70, 60, 50, 40, 30, 20, 10,
		9, 8, 7, 6, 5, 4, 3, 2, 1
	] as const

	for (const n of arr) {
		while (reminder >= n) {
			result += Hi[n]
			reminder -= n
		}
	}

	return result
}
