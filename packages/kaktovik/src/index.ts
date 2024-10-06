import { Ka } from './numerals'

const map = new Map<string, string>(
	[
		['0', Ka['0']],
		['1', Ka['1']],
		['2', Ka['2']],
		['3', Ka['3']],
		['4', Ka['4']],
		['5', Ka['5']],
		['6', Ka['6']],
		['7', Ka['7']],
		['8', Ka['8']],
		['9', Ka['9']],
		['a', Ka['10']],
		['b', Ka['11']],
		['c', Ka['12']],
		['d', Ka['13']],
		['e', Ka['14']],
		['f', Ka['15']],
		['g', Ka['16']],
		['h', Ka['17']],
		['i', Ka['18']],
		['j', Ka['19']],
	]
)

export function convert(source: number): string {
	if (!Number.isFinite(source)) {
		throw new Error('Source is not a finite number')
	}
	if (source < 0) {
		throw new Error('Source is negative, only positive numbers are supported')
	}
	if (source % 1 !== 0) {
		throw new Error('Source is not an integer, only integers are supported')
	}

	const base20 = source.toString(20)
	const sourceString = base20.toString()
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
