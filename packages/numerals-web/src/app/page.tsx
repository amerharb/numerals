'use client'

import { useState } from 'react'
import Select from 'react-select'
import { convert } from '@numerals/eastern-arabic'
import Image from 'next/image'

enum Numerals {
	EasternArabic = 'easternArabic',
}

export default function Home() {
	const [textBoxValue, setTextBoxValue] = useState('')
	const [resultText, setResultText] = useState('')
	const [toValue, setToValue] = useState<Numerals | undefined>(Numerals.EasternArabic)

	const options = [
		{ value: Numerals.EasternArabic, label: 'Eastern Arabic ٤ ٣ ٢ ١' },
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
				const result = convert(parseFloat(textBoxValue))
				setResultText(result)
			}}
		/>
	</div>

	return (
		<main style={{ textAlign: 'center', padding: '20px' }}>
			<h1>Numerals Converter</h1>
			{ToSelect()}
			<label htmlFor="editTextBox" style={{ marginRight: '10px' }}>
				Enter Text:
			</label>
			<textarea
				id="editTextBox"
				dir="auto"
				placeholder="Type here"
				value={textBoxValue}
				onChange={(e) => {
					setTextBoxValue(e.target.value)
					if (!toValue) {
						return
					}
					const result = convert(parseFloat(e.target.value))
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
				This is an open source project. based on npm package{' '}
				<a href="https://www.npmjs.com/package/@numerals/eastern-arabic" style={{ textDecoration: 'none' }}>
					<Image src="/images/Npm-logo.svg" alt="NPM" width={54} height={21}
								 style={{ width: '54px', height: '21px' }}/>
					{' '}@numerals/eastern-arabic
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
