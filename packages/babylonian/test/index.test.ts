import { convert } from '../src'
import { Ba, PLACE_SEPARATOR as SEP, ZERO_PLACE as ZERO } from '../src/numerals'
import { describe, expect, it } from '@jest/globals'

// Helper: build one sexagesimal place (1-59) as tens then ones wedges.
function place(digit: number): string {
	return Ba.ten.repeat(Math.floor(digit / 10)) + Ba.one.repeat(digit % 10)
}

describe('convert()', () => {
	it('convert 1 into 𒁹', () => {
		expect(convert(1)).toEqual(Ba.one)
	})
	it('convert 9 into 𒁹×9', () => {
		expect(convert(9)).toEqual(Ba.one.repeat(9))
	})
	it('convert 10 into 𒌋', () => {
		expect(convert(10)).toEqual(Ba.ten)
	})
	it('convert 11 into 𒌋𒁹', () => {
		expect(convert(11)).toEqual(Ba.ten + Ba.one)
	})
	it('convert 59 into 𒌋×5 𒁹×9', () => {
		expect(convert(59)).toEqual(Ba.ten.repeat(5) + Ba.one.repeat(9))
	})
	it('convert 60 into 1,0 (𒁹 ·)', () => {
		expect(convert(60)).toEqual(`${Ba.one}${SEP}${ZERO}`)
	})
	it('convert 61 into 1,1 (𒁹 𒁹)', () => {
		expect(convert(61)).toEqual(`${Ba.one}${SEP}${Ba.one}`)
	})
	it('convert 72 into 1,12 (𒁹 𒌋𒁹𒁹)', () => {
		expect(convert(72)).toEqual(`${place(1)}${SEP}${place(12)}`)
	})
	it('convert 120 into 2,0 (𒁹𒁹 ·)', () => {
		expect(convert(120)).toEqual(`${place(2)}${SEP}${ZERO}`)
	})
	it('convert 3600 into 1,0,0 (𒁹 · ·)', () => {
		expect(convert(3600)).toEqual(`${Ba.one}${SEP}${ZERO}${SEP}${ZERO}`)
	})
	it('convert 3661 into 1,1,1 (𒁹 𒁹 𒁹)', () => {
		expect(convert(3661)).toEqual(`${Ba.one}${SEP}${Ba.one}${SEP}${Ba.one}`)
	})
	it('convert 3723 into 1,2,3', () => {
		// 3723 = 1*3600 + 2*60 + 3
		expect(convert(3723)).toEqual(`${place(1)}${SEP}${place(2)}${SEP}${place(3)}`)
	})
	it.each([NaN, Infinity, -Infinity])
	('throw Error for non number [%s]', (it) => {
		const actual = () => convert(it)
		expect(actual).toThrow('Source is not a finite number')
	})
	it('throw Error for zero', () => {
		const actual = () => convert(0)
		expect(actual).toThrow('Source is zero, only positive numbers are supported')
	})
	it('throw Error for negative number', () => {
		const actual = () => convert(-1)
		expect(actual).toThrow('Source is negative, only positive numbers are supported')
	})
	it('throw Error for float number', () => {
		const actual = () => convert(1.1)
		expect(actual).toThrow('Source is not an integer, only integers are supported')
	})
})
