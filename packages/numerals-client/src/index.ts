import { convert as ar } from '@numerals/eastern-arabic'
import { convert as ma } from '@numerals/mayan'
import { convert as hi } from '@numerals/hieroglyphic'
import { convert as ro } from '@numerals/roman'
import { convert as ag } from '@numerals/aegean'
import { convert as th } from '@numerals/thai'
import { convert as hr } from '@numerals/hanifi-rohingya'

log('@numerals/eastern-arabic')
log(calmConvert(ar, 123))
log(calmConvert(ar, 123.456))
log(calmConvert(ar, -1))
log(calmConvert(ar, NaN))

log('@numerals/mayan')
log(calmConvert(ma, 123))
log(calmConvert(ma, 123.456))
log(calmConvert(ma, -1))
log(calmConvert(ma, NaN))

log('@numerals/hieroglyphic')
log(calmConvert(hi, 123))
log(calmConvert(hi, 123.456))
log(calmConvert(hi, -1))
log(calmConvert(hi, NaN))

log('@numerals/roman')
log(calmConvert(ro, 123))
log(calmConvert(ro, 123.456))
log(calmConvert(ro, -1))
log(calmConvert(ro, NaN))

log('@numerals/aegean')
log(calmConvert(ag, 123))
log(calmConvert(ag, 123.456))
log(calmConvert(ag, -1))
log(calmConvert(ag, NaN))

log('@numerals/thai')
log(calmConvert(th, 123))
log(calmConvert(th, 123.456))
log(calmConvert(th, -1))
log(calmConvert(th, NaN))

log('@numerals/hanifi-rohingya')
log(calmConvert(hr, 123))
log(calmConvert(hr, 123.456))
log(calmConvert(hr, -1))
log(calmConvert(hr, NaN))

log('Done')

function calmConvert(convert:(n:number) => string, source: number): string {
	try {
		return convert(source)
	} catch (e: any) {
		return e.message
	}
}

function log(message: string): void {
	// eslint-disable-next-line no-console
	console.log(message)
}
