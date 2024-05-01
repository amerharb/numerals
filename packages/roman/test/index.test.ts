import { convert } from '../src'
import { Ro } from '../src/numerals'
import { describe, expect, it } from '@jest/globals'

describe('convert()', () => {
	it('convert 1 into I', () => {
		const actual = convert(1)
		expect(actual).toEqual(Ro[1])
	})
	it('convert 2 into Ⅱ', () => {
		const actual = convert(2)
		expect(actual).toEqual(Ro[2])
	})
	it('convert 4 into Ⅳ', () => {
		const actual = convert(4)
		expect(actual).toEqual(Ro[4])
	})
	it('convert 9 into Ⅸ', () => {
		const actual = convert(9)
		expect(actual).toEqual(Ro[9])
	})
	it('convert 10 into Ⅹ', () => {
		const actual = convert(10)
		expect(actual).toEqual(Ro[10])
	})
	it('convert 11 into Ⅺ', () => {
		const actual = convert(11)
		expect(actual).toEqual(Ro[11])
	})
	it('convert 12 into Ⅻ', () => {
		const actual = convert(12)
		expect(actual).toEqual(Ro[12])
	})
	it('convert 100 into Ⅽ', () => {
		const actual = convert(100)
		expect(actual).toEqual(Ro[100])
	})
	it('convert 101 into ⅭⅠ', () => {
		const actual = convert(101)
		expect(actual).toEqual(Ro[100] + Ro[1])
	})
	it('convert 1000 into Ⅿ', () => {
		const actual = convert(1000)
		expect(actual).toEqual(Ro[1000])
	})
	it('convert 100_000 into ↈ', () => {
		const actual = convert(100_000)
		expect(actual).toEqual(Ro[100_000])
	})
	it.each([NaN, Infinity, -Infinity])
	('throw Error for non number [%s]', (it) => {
		const actual = () => convert(it)
		expect(actual).toThrowError('Source is not a finite number')
	})
	it('throw Error for zero', () => {
		const actual = () => convert(0)
		expect(actual).toThrowError('Source is zero, only positive numbers are supported')
	})
	it('throw Error for negative number', () => {
		const actual = () => convert(-1)
		expect(actual).toThrowError('Source is negative, only positive numbers are supported')
	})
	it('throw Error for float number', () => {
		const actual = () => convert(1.1)
		expect(actual).toThrowError('Source is not an integer, only integers are supported')
	})
	it('throw Error for number larger than a million', () => {
		const actual = () => convert(1000_001)
		expect(actual).toThrowError('Source is too big, only numbers up to 1,000,000 are supported')
	})
})
