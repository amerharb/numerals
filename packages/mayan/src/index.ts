import { Ma } from './numerals'

const map = new Map<string, string>(
	[
		['0', Ma['0']],
		['1', Ma['1']],
		['2', Ma['2']],
		['3', Ma['3']],
		['4', Ma['4']],
		['5', Ma['5']],
		['6', Ma['6']],
		['7', Ma['7']],
		['8', Ma['8']],
		['9', Ma['9']],
		['a', Ma['10']],
		['b', Ma['11']],
		['c', Ma['12']],
		['d', Ma['13']],
		['e', Ma['14']],
		['f', Ma['15']],
		['g', Ma['16']],
		['h', Ma['17']],
		['i', Ma['18']],
		['j', Ma['19']],
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
