export enum Numerals {
	EasternArabic = 'easternArabic',
	Mayan = 'mayan',
	Hieroglyphic = 'hieroglyphic',
	Roman = 'roman',
	Aegean = 'aegean',
	Thai = 'thai',
	HanifiRohingya = 'hanifi-rohingya',
	Kaktovik = 'kaktovik',
}

export function getNumerals(value: string|null, def: Numerals): Numerals {
	if (!value) {
		return def
	}
	const v = value.toLowerCase()
	return Object.values(Numerals).includes(v as Numerals) ? v as Numerals : def
}
