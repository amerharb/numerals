'use client'

import { Fragment, useState } from 'react'
import { convert as convertAr } from '@numerals/eastern-arabic'
import { convert as convertMa } from '@numerals/mayan'
import { convert as convertHi } from '@numerals/hieroglyphic'
import { convert as convertRo } from '@numerals/roman'
import { convert as convertAg } from '@numerals/aegean'
import { convert as convertTh } from '@numerals/thai'
import { convert as convertHr } from '@numerals/hanifi-rohingya'
import { convert as convertKa } from '@numerals/kaktovik'
import { convert as convertBa } from '@numerals/babylonian'
import Image from 'next/image'
import ThemeToggle from '@/components/ThemeToggle'

const DEFAULT_INPUT = ''

// Every numeral system, shown at once: display name, npm package slug, and converter.
const systems = [
	{ name: 'Eastern Arabic', slug: 'eastern-arabic', convert: convertAr },
	{ name: 'Mayan', slug: 'mayan', convert: convertMa },
	{ name: 'Hieroglyphic', slug: 'hieroglyphic', convert: convertHi },
	{ name: 'Roman', slug: 'roman', convert: convertRo },
	{ name: 'Aegean', slug: 'aegean', convert: convertAg },
	{ name: 'Thai', slug: 'thai', convert: convertTh },
	{ name: 'Hanifi Rohingya', slug: 'hanifi-rohingya', convert: convertHr },
	{ name: 'Kaktovik', slug: 'kaktovik', convert: convertKa },
	{ name: 'Babylonian', slug: 'babylonian', convert: convertBa },
] as const

// Convert the entered number with one system, surfacing validation errors as text.
function convertOne(text: string, convert: (n: number) => string): string {
	const trimmed = text.trim()
	if (trimmed === '') {
		return ''
	}
	try {
		return convert(parseFloat(trimmed))
	} catch (e: any) {
		return e.message
	}
}

// Reads the ?input= query param (resolved by the server component in page.tsx) to
// prefill the input, e.g. ?input=42
export default function Converter({ input }: { input?: string }) {
	const [textBoxValue, setTextBoxValue] = useState(input ?? DEFAULT_INPUT)

	return (
		<main style={{ textAlign: 'center', padding: '20px' }}>
			<ThemeToggle/>
			<h1>Numerals Converter</h1>
			<label htmlFor="editTextBox" style={{ marginRight: '10px' }}>
					Enter Number:
			</label>
			<input
				id="editTextBox"
				dir="auto"
				placeholder="Type number here"
				type="number"
				pattern="-?[0-9]*(\.[0-9]+)?"
				inputMode="decimal"
				value={textBoxValue}
				onChange={(e) => setTextBoxValue(e.target.value)}
				style={{ padding: '10px', width: '100%', fontSize: '25px' }}
			/>

			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'auto 1fr',
					gap: '10px 16px',
					alignItems: 'center',
					textAlign: 'left',
					maxWidth: '600px',
					margin: '20px auto',
				}}
			>
				{systems.map((system) => (
					<Fragment key={system.slug}>
						<div style={{ fontSize: '14px', color: 'var(--muted)' }}>{system.name}</div>
						<div dir="auto" style={{ fontSize: '25px' }}>{convertOne(textBoxValue, system.convert)}</div>
					</Fragment>
				))}
			</div>

			<hr/>
			<div style={{ marginTop: '15px', fontSize: '14px' }}>
					This is an open source project, based on <Image src="/images/Npm-logo.svg" alt="NPM" width={36}
					height={14} style={{ width: '36px', height: '14px', verticalAlign: 'middle' }}/> packages:{' '}
				{systems.map((system, i) => (
					<span key={system.slug}>
						<a href={`https://www.npmjs.com/package/@numerals/${system.slug}`} style={{ textDecoration: 'none' }}>
							@numerals/{system.slug}
						</a>{i < systems.length - 1 ? ', ' : ''}
					</span>
				))}
				<br/>
					You can find the source code on{' '}
				<a href="https://www.github.com/amerharb/numerals" style={{ textDecoration: 'none' }}>
					<Image className="github-logo" src="/images/Github-logo.svg" alt="GitHub" width={20} height={20}
									 style={{ width: '20px', height: '20px', verticalAlign: 'middle' }}/>
					{' '}GitHub
				</a>. You welcome to contribute to the project.
			</div>
			<div style={{ marginTop: '15px', fontSize: '14px' }}>
				<a href="mailto:numerals@amerharb.com" style={{ textDecoration: 'none' }}>✉️ Email</a>
			</div>
		</main>
	)
}
