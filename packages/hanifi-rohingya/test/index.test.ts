import { convert } from '../src'
import { describe, expect, it } from '@jest/globals'

describe('convert()', () => {
	it('convert 1234567890 into 𐴱𐴲𐴳𐴴𐴵𐴶𐴷𐴸𐴹𐴰', () => {
		const actual = convert(1234567890)
		expect(actual).toEqual('𐴱𐴲𐴳𐴴𐴵𐴶𐴷𐴸𐴹𐴰')
	})
	it('convert 123.456 into 𐴱𐴲𐴳.𐴴𐴵𐴶', () => {
		const actual = convert(123.456)
		expect(actual).toEqual('𐴱𐴲𐴳.𐴴𐴵𐴶')
	})
	it('convert -1 into -𐴱', () => {
		const actual = convert(-1)
		expect(actual).toEqual('-𐴱')
	})
	it('convert 0 into 𐴰', () => {
		const actual = convert(0)
		expect(actual).toEqual('𐴰')
	})
	it.each([NaN, Infinity, -Infinity])
	('throw Error for non number [%s]', (it) => {
		const actual = () => convert(it)
		expect(actual).toThrow('Source is not a finite number')
	})
})
