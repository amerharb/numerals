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
		['10', Ma['10']],
		['11', Ma['11']],
		['12', Ma['12']],
		['13', Ma['13']],
		['14', Ma['14']],
		['15', Ma['15']],
		['16', Ma['16']],
		['17', Ma['17']],
		['18', Ma['18']],
		['19', Ma['19']],
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
