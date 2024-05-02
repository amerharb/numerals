'use client'

import { useState } from 'react'
import Select from 'react-select'
import { convert as convertAr } from '@numerals/eastern-arabic'
import { convert as convertMa } from '@numerals/mayan'
import { convert as convertHi } from '@numerals/hieroglyphic'
import { convert as convertRo } from '@numerals/roman'
import Image from 'next/image'

enum Numerals {
	EasternArabic = 'easternArabic',
	Mayan = 'mayan',
	Hieroglyphic = 'hieroglyphic',
	Roman = 'roman',
}

export default function Home() {
	const [textBoxValue, setTextBoxValue] = useState('')
	const [resultText, setResultText] = useState('')
	const [toValue, setToValue] = useState<Numerals | undefined>(Numerals.EasternArabic)

	const options = [
		{ value: Numerals.EasternArabic, label: 'Eastern Arabic ٤ ٣ ٢ ١' },
		{ value: Numerals.Mayan, label: 'Mayan 𝋠 𝋡 𝋢 𝋣' },
		{ value: Numerals.Hieroglyphic, label: 'Hieroglyphic 𓁨 𓆐 𓂭 𓆼' },
		{ value: Numerals.Roman, label: 'Roman Ⅰ Ⅱ Ⅲ Ⅳ' },
	]
	const ToSelect = () => <div style={{ marginBottom: '10px' }}>
		<label htmlFor="toDropdown" style={{ marginRight: '10px' }}>
            To:
		</label>
		<Select
			id="toDropdown"
			isSearchable={false}
			options={options}
			defaultValue={options[0]}
			onChange={(selectedOption) => {
				setToValue(selectedOption?.value)
				if (!selectedOption?.value) {
					return
				}
				try {
					const result = convert(parseFloat(textBoxValue), selectedOption.value)
					setResultText(result)
				} catch (e: any) {
					setResultText(e.message)
				}
			}}
		/>
	</div>

	return (
		<main style={{ textAlign: 'center', padding: '20px' }}>
			<h1>Numerals Converter</h1>
			{ToSelect()}
			<label htmlFor="numberInput" style={{ marginRight: '10px' }}>
				Enter Number:
			</label>
			<textarea
				id="editTextBox"
				dir="auto"
				placeholder="Type number here"
				value={textBoxValue}
				onChange={(e) => {
					setTextBoxValue(e.target.value)
					if (!toValue) {
						return
					}
					const lines = e.target.value.split(/\n+|\s+/).map((line) => line.trim())
					let result = ''
					lines.forEach((line) => {
						if (line.length === 0) return
						try {
							const converted = convert(parseFloat(line), toValue)
							result += `${converted}\n`
						} catch (e: any) {
							result += `${e.message}\n`
						}
					})
					setResultText(result)
				}}
				style={{ padding: '10px', width: '100%', minHeight: '100px', fontSize: '25px' }}
			/>
			<div>
				<label htmlFor="resultLabel" style={{ marginRight: '10px' }}>
                    Result:
				</label>
				<br/>
				<span
					id="resultLabel"
					dir="auto"
					style={{ padding: '10px', width: '100%', minHeight: '100px', fontSize: '25px' }}
				>
					{resultText}
				</span>
			</div>
			<hr/>
			<div style={{ marginTop: '20px', fontSize: '22px' }}>
				This is an open source project. based on <Image src="/images/Npm-logo.svg" alt="NPM" width={54}
					height={21}
					style={{ width: '54px', height: '21px' }}/> packages:{' '}
				<br/>
				<a href="https://www.npmjs.com/package/@numerals/eastern-arabic" style={{ textDecoration: 'none' }}>
					{' '}@numerals/eastern-arabic
				</a>
				<br/>
				<a href="https://www.npmjs.com/package/@numerals/mayan" style={{ textDecoration: 'none' }}>
					{' '}@numerals/mayan
				</a>
				<br/>
				<a href="https://www.npmjs.com/package/@numerals/hieroglyphic" style={{ textDecoration: 'none' }}>
					{' '}@numerals/hieroglyphic
				</a>
				<br/>
				<a href="https://www.npmjs.com/package/@numerals/roman" style={{ textDecoration: 'none' }}>
					{' '}@numerals/roman
				</a>
				<br/>
				You can find the source code on{' '}
				<a href="https://www.github.com/amerharb/numerals" style={{ textDecoration: 'none' }}>
					<Image src="/images/Github-logo.svg" alt="GitHub" width={32}
								 height={32}
								 style={{ width: '32px', height: '32px' }}/>
					{' '}GitHub
				</a>
				<br/>
				You welcome to contribute to the project.
			</div>
			<div style={{ marginTop: '25px', fontSize: '22px' }}>
				<a href="mailto:numerals@amerharb.com" style={{ textDecoration: 'none' }}>✉️ Email</a>
			</div>
		</main>
	)
}

function convert(source: number, to: Numerals): string {
	switch (to) {
	case Numerals.EasternArabic:
		return convertAr(source)
	case Numerals.Mayan:
		return convertMa(source)
	case Numerals.Hieroglyphic:
		return convertHi(source)
	case Numerals.Roman:
		return convertRo(source)
	}
}
