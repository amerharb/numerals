import { HR } from './numerals'

const map = new Map<string, string>(
	[
		['0', HR['0']],
		['1', HR['1']],
		['2', HR['2']],
		['3', HR['3']],
		['4', HR['4']],
		['5', HR['5']],
		['6', HR['6']],
		['7', HR['7']],
		['8', HR['8']],
		['9', HR['9']],
		['.', '.'],
		['-', '-'],
	],
)

export function convert(source: number): string {
	if (!Number.isFinite(source)) {
		throw new Error('Source is not a finite number')
	}
	const sourceString = source.toString()
	let result = ''
	for (const letter of sourceString) {
		const u = map.get(letter) ?? throwNoNumeralFor(letter)
		result += u
	}
	return result
}

function throwNoNumeralFor(letter: string): never {
	throw new Error(`No numeral for "${letter}"`)
}
