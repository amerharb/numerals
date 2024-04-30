import { convert } from '../src'
import { Hi } from '../src/numerals'
import { describe, expect, it } from '@jest/globals'

describe('convert()', () => {
	it('convert 1 into 𓀀', () => {
		const actual = convert(1)
		expect(actual).toEqual(Hi[1])
	})
	it('convert 2 into 𓀀𓀀', () => {
		const actual = convert(2)
		expect(actual).toEqual(Hi[1] + Hi[1])
	})
	it('convert 10 into 𓀊', () => {
		const actual = convert(10)
		expect(actual).toEqual(Hi[10])
	})
	it('convert 11 into 𓀊𓀀', () => {
		const actual = convert(11)
		expect(actual).toEqual(Hi[10] + Hi[1])
	})
	it('convert 100 into 𓀚', () => {
		const actual = convert(100)
		expect(actual).toEqual(Hi[100])
	})
	it('convert 101 into 𓀚𓀀', () => {
		const actual = convert(101)
		expect(actual).toEqual(Hi[100] + Hi[1])
	})
	it('convert 1000 into 𓀪', () => {
		const actual = convert(1000)
		expect(actual).toEqual(Hi[1000])
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
})
