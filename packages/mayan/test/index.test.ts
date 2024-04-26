import { convert } from '../src'
import { describe, expect, it } from '@jest/globals'

describe('convert()', () => {
	it('convert 0 into 𝋠', () => {
		const actual = convert(0)
		expect(actual).toEqual('𝋠')
	})
	it('convert 1 into 𝋡', () => {
		const actual = convert(1)
		expect(actual).toEqual('𝋡')
	})
	it('convert 10 into 𝋪', () => {
		const actual = convert(10)
		expect(actual).toEqual('𝋪')
	})
	it('convert 19 into 𝋳', () => {
		const actual = convert(19)
		expect(actual).toEqual('𝋳')
	})
	it.each([NaN, Infinity, -Infinity])
	('throw Error for non number [%s]', (it) => {
		const actual = () => convert(it)
		expect(actual).toThrowError('Source is not a finite number')
	})
})
