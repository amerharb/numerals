import { convert } from '../src'
import { Ma } from '../src/numerals'
import { describe, expect, it } from '@jest/globals'

describe('convert()', () => {
	it('convert 0 into 𝋠', () => {
		const actual = convert(0)
		expect(actual).toEqual(Ma['0'])
	})
	it('convert 1 into 𝋡', () => {
		const actual = convert(1)
		expect(actual).toEqual(Ma['1'])
	})
	it('convert 10 into 𝋪', () => {
		const actual = convert(10)
		expect(actual).toEqual(Ma['10'])
	})
	it('convert 19 into 𝋳', () => {
		const actual = convert(19)
		expect(actual).toEqual(Ma['19'])
	})
	it('convert 20 into 𝋰𝋠', () => {
		const actual = convert(20)
		expect(actual).toEqual(`${Ma['1']}${Ma['0']}`)
	})
	it('convert 21 into 𝋡𝋡', () => {
		const actual = convert(21)
		expect(actual).toEqual(`${Ma['1']}${Ma['1']}`)
	})
	it('convert 39 into 𝋡𝋳', () => {
		const actual = convert(39)
		expect(actual).toEqual(`${Ma['1']}${Ma['19']}`)
	})
	it('convert 40 into 𝋢𝋠', () => {
		const actual = convert(40)
		expect(actual).toEqual(`${Ma['2']}${Ma['0']}`)
	})
	it.each([NaN, Infinity, -Infinity])
	('throw Error for non number [%s]', (it) => {
		const actual = () => convert(it)
		expect(actual).toThrowError('Source is not a finite number')
	})
})
