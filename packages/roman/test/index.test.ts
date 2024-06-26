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
	it('convert 3 into Ⅲ', () => {
		const actual = convert(3)
		expect(actual).toEqual(Ro[3])
	})
	it('convert 4 into Ⅳ', () => {
		const actual = convert(4)
		expect(actual).toEqual(Ro[4])
	})
	it('convert 8 into Ⅷ', () => {
		const actual = convert(8)
		expect(actual).toEqual(Ro[8])
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
	it('convert 13 into ⅩⅢ', () => {
		const actual = convert(13)
		expect(actual).toEqual(Ro[10] + Ro[3])
	})
	it('convert 14 into ⅩⅣ', () => {
		const actual = convert(14)
		expect(actual).toEqual(Ro[10] + Ro[4])
	})
	it('convert 24 into ⅩⅩⅣ', () => {
		const actual = convert(24)
		expect(actual).toEqual(Ro[10] + Ro[10] + Ro[4])
	})
	it('convert 28 into ⅩⅩⅧ', () => {
		const actual = convert(28)
		expect(actual).toEqual(Ro[10] + Ro[10] + Ro[8])
	})
	it('convert 40 into ⅩⅬ', () => {
		const actual = convert(40)
		expect(actual).toEqual(Ro[40])
	})
	it('convert 50 into Ⅼ', () => {
		const actual = convert(50)
		expect(actual).toEqual(Ro[50])
	})
	it('convert 90 into ⅩⅭ', () => {
		const actual = convert(90)
		expect(actual).toEqual(Ro[90])
	})
	it('convert 100 into Ⅽ', () => {
		const actual = convert(100)
		expect(actual).toEqual(Ro[100])
	})
	it('convert 114 into ⅭⅩⅣ', () => {
		const actual = convert(114)
		expect(actual).toEqual(Ro[100] + Ro[10] + Ro[4])
	})
	it('convert 100 into Ⅽ', () => {
		const actual = convert(100)
		expect(actual).toEqual(Ro[100])
	})
	it('convert 101 into ⅭⅠ', () => {
		const actual = convert(101)
		expect(actual).toEqual(Ro[100] + Ro[1])
	})
	it('convert 400 into ⅭⅮ', () => {
		const actual = convert(400)
		expect(actual).toEqual(Ro[400])
	})
	it('convert 500 into Ⅾ', () => {
		const actual = convert(500)
		expect(actual).toEqual(Ro[500])
	})
	it('convert 900 into ⅭⅯ', () => {
		const actual = convert(900)
		expect(actual).toEqual(Ro[900])
	})
	it('convert 1000 into Ⅿ', () => {
		const actual = convert(1000)
		expect(actual).toEqual(Ro[1000])
	})
	it('convert 4000 into Ⅿↁ', () => {
		const actual = convert(4000)
		expect(actual).toEqual(Ro[4000])
	})
	it('convert 5000 into ↁ', () => {
		const actual = convert(5000)
		expect(actual).toEqual(Ro[5000])
	})
	it('convert 9000 into Ⅿↂ', () => {
		const actual = convert(9000)
		expect(actual).toEqual(Ro[9000])
	})
	it('convert 10_000 into ↂ', () => {
		const actual = convert(10_000)
		expect(actual).toEqual(Ro[10_000])
	})
	it('convert 40_000 into ↂↇ', () => {
		const actual = convert(40_000)
		expect(actual).toEqual(Ro[40_000])
	})
	it('convert 50_000 into ↇ', () => {
		const actual = convert(50_000)
		expect(actual).toEqual(Ro[50_000])
	})
	it('convert 90_000 into ↂↈ', () => {
		const actual = convert(90_000)
		expect(actual).toEqual(Ro[90_000])
	})
	it('convert 100_000 into ↈ', () => {
		const actual = convert(100_000)
		expect(actual).toEqual(Ro[100_000])
	})
	it.each([
		100_000, 90_000, 50_000, 40_000, 10_000, 9000, 5000, 4000,
		1000, 900, 500, 400, 100, 90, 50, 40,
		12, 11, 10, 9,
		8, 7, 6, 5, 4, 3, 2, 1,
	] as const)
	('convert %s to correct roman', (it) => {
		const actual = convert(it)
		expect(actual).toEqual(Ro[it])
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
