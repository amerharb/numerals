import { convert as ar } from '@numerals/eastern-arabic'
import { convert as ma } from '@numerals/mayan'

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
