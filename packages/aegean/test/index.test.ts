import { convert } from '../src'
import { Ag } from '../src/numerals'
import { describe, expect, it } from '@jest/globals'

describe('convert()', () => {
	it('convert 1 into 𐄇', () => {
		const actual = convert(1)
		expect(actual).toEqual(Ag[1])
	})
	it('convert 2 into 𐄈', () => {
		const actual = convert(2)
		expect(actual).toEqual(Ag[2])
	})
	it('convert 10 into 𐄐', () => {
		const actual = convert(10)
		expect(actual).toEqual(Ag[10])
	})
	it('convert 11 into 𐄐𐄇', () => {
		const actual = convert(11)
		expect(actual).toEqual(Ag[10] + Ag[1])
	})
	it('convert 100 into 𐄙', () => {
		const actual = convert(100)
		expect(actual).toEqual(Ag[100])
	})
	it('convert 101 into 𐄙𐄇', () => {
		const actual = convert(101)
		expect(actual).toEqual(Ag[100] + Ag[1])
	})
	it('convert 1000 into 𐄢', () => {
		const actual = convert(1000)
		expect(actual).toEqual(Ag[1000])
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
	it('throw Error for number greater than 99,999', () => {
		const actual = () => convert(100_000)
		expect(actual).toThrow('Source is too big, only numbers up to 99,999 are supported')
	})
})
