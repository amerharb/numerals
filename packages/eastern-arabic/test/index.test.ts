import { convert } from '../src'
import { describe, expect, it } from '@jest/globals'

describe('convert()', () => {
	it('convert 1234567890 into ١٢٣٤٥٦٧٨٩٠', () => {
		const actual = convert(1234567890)
		expect(actual).toEqual('١٢٣٤٥٦٧٨٩٠')
	})
	it('convert 123.456 into ١٢٣٫٤٥٦', () => {
		const actual = convert(123.456)
		expect(actual).toEqual('١٢٣٫٤٥٦')
	})
	it('convert -1 into ١-', () => {
		const actual = convert(-1)
		expect(actual).toEqual('١-')
	})
	it('convert 0 into ٠', () => {
		const actual = convert(0)
		expect(actual).toEqual('٠')
	})
	it.each([NaN, Infinity, -Infinity])
	('throw Error for non number [%s]', (it) => {
		const actual = () => convert(it)
		expect(actual).toThrowError('Source is not a finite number')
	})
})
