import { Th } from './numerals'

const map = new Map<string, string>(
	[
		['0', Th['0']],
		['1', Th['1']],
		['2', Th['2']],
		['3', Th['3']],
		['4', Th['4']],
		['5', Th['5']],
		['6', Th['6']],
		['7', Th['7']],
		['8', Th['8']],
		['9', Th['9']],
		['-', '-'],
		['.', '.'],
	]
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
