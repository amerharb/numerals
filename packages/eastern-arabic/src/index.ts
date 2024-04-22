import { EA } from './numerals'

const map = new Map<string, string>(
	[
		['0', EA['0']],
		['1', EA['1']],
		['2', EA['2']],
		['3', EA['3']],
		['4', EA['4']],
		['5', EA['5']],
		['6', EA['6']],
		['7', EA['7']],
		['8', EA['8']],
		['9', EA['9']],
		['.', EA.separator],
		['-', ''],
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
	if (source < 0) {
		result = result + '-'
	}
	return result
}

function throwNoNumeralFor(letter: string): never {
	throw new Error(`No numeral for "${letter}"`)
}
