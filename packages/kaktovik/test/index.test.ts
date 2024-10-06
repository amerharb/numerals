import { convert } from '../src'
import { Ka } from '../src/numerals'
import { describe, expect, it } from '@jest/globals'

describe('convert()', () => {
	it(`convert 0 into  ${Ka[0]}`, () => {
		const actual = convert(0)
		expect(actual).toEqual(Ka['0'])
	})
	it(`convert 1 into  ${Ka[1]}`, () => {
		const actual = convert(1)
		expect(actual).toEqual(Ka['1'])
	})
	it(`convert 10 into  ${Ka[10]}`, () => {
		const actual = convert(10)
		expect(actual).toEqual(Ka['10'])
	})
	it(`convert 19 into  ${Ka[19]}`, () => {
		const actual = convert(19)
		expect(actual).toEqual(Ka['19'])
	})
	it(`convert 20 into  ${Ka[1]}${Ka[0]}`, () => {
		const actual = convert(20)
		expect(actual).toEqual(`${Ka['1']}${Ka['0']}`)
	})
	it(`convert 21 into  ${Ka['1']}${Ka['1']}`, () => {
		const actual = convert(21)
		expect(actual).toEqual(`${Ka['1']}${Ka['1']}`)
	})
	it(`convert 39 into  ${Ka['1']}${Ka['19']}`, () => {
		const actual = convert(39)
		expect(actual).toEqual(`${Ka['1']}${Ka['19']}`)
	})
	it(`convert 40 into  ${Ka['2']}${Ka['0']}`, () => {
		const actual = convert(40)
		expect(actual).toEqual(`${Ka['2']}${Ka['0']}`)
	})
	it(`convert 1.1 into  ${Ka['1']}.${Ka['2']}`, () => {
		const actual = convert(1.1)
		expect(actual).toEqual(`${Ka['1']}.${Ka['2']}`)
	})
	it(`convert -1 into  -${Ka['1']}`, () => {
		const actual = convert(-1)
		expect(actual).toEqual(`-${Ka['1']}`)
	})
	it.each([NaN, Infinity, -Infinity])
	('throw Error for non number [%s]', (it) => {
		const actual = () => convert(it)
		expect(actual).toThrowError('Source is not a finite number')
	})
})
