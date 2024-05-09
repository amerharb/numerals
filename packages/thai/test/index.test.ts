import { convert } from '../src'
import { describe, expect, it } from '@jest/globals'

describe('convert()', () => {
	it('convert 1234567890 into ๑๒๓๔๕๖๗๘๙๐', () => {
		const actual = convert(1234567890)
		expect(actual).toEqual('๑๒๓๔๕๖๗๘๙๐')
	})
	it('convert 123.456 into ๑๒๓.๔๕๖', () => {
		const actual = convert(123.456)
		expect(actual).toEqual('๑๒๓.๔๕๖')
	})
	it('convert -1 into -๑', () => {
		const actual = convert(-1)
		expect(actual).toEqual('-๑')
	})
	it('convert 0 into ๐', () => {
		const actual = convert(0)
		expect(actual).toEqual('๐')
	})
	it.each([NaN, Infinity, -Infinity])
	('throw Error for non number [%s]', (it) => {
		const actual = () => convert(it)
		expect(actual).toThrowError('Source is not a finite number')
	})
})
