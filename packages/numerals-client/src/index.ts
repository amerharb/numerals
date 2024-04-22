// import { convert } from '@numerals/eastern-arabic'

log('@numerals/eastern-arabic')

log(calmConvert(123))
log(calmConvert(123.456))
log(calmConvert(-1))
log(calmConvert(NaN))


log('Done')

function calmConvert(source: number): string {
	try {
		// return convert(source)
		return 'disable temporarily'
	} catch (e: any) {
		return e.message
	}
}

function log(message: string): void {
	// eslint-disable-next-line no-console
	console.log(message)
}
