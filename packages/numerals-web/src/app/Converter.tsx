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
import { version } from '../../package.json'

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
type Result = { ok: boolean, text: string }

function convertOne(text: string, convert: (n: number) => string): Result {
	const trimmed = text.trim()
	if (trimmed === '') {
		return { ok: true, text: '' }
	}
	try {
		return { ok: true, text: convert(parseFloat(trimmed)) }
	} catch (e: any) {
		return { ok: false, text: e.message }
	}
}

// How long the copy button shows the "copied" checkmark before reverting.
const COPIED_RESET_MS = 1500

function CopyIcon() {
	return (
		<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
			strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
			<rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
			<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
		</svg>
	)
}

function CheckIcon() {
	return (
		<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
			strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
			<polyline points="20 6 9 17 4 12"/>
		</svg>
	)
}

// Reads the ?input= query param (resolved by the server component in page.tsx) to
// prefill the input, e.g. ?input=42
export default function Converter({ input }: { input?: string }) {
	const [textBoxValue, setTextBoxValue] = useState(input ?? DEFAULT_INPUT)
	const [copiedSlug, setCopiedSlug] = useState<string | null>(null)

	function copyResult(slug: string, text: string) {
		navigator.clipboard.writeText(text).then(() => {
			setCopiedSlug(slug)
			setTimeout(() => setCopiedSlug((current) => (current === slug ? null : current)), COPIED_RESET_MS)
		}).catch(() => {
			// Clipboard may be unavailable (e.g. insecure context); silently ignore.
		})
	}

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
					gridTemplateColumns: 'auto auto 1fr',
					gap: '10px 16px',
					alignItems: 'center',
					textAlign: 'left',
					maxWidth: '600px',
					margin: '20px 0',
				}}
			>
				{systems.map((system) => {
					const result = convertOne(textBoxValue, system.convert)
					return (
						<Fragment key={system.slug}>
							<div style={{ fontSize: '14px', color: 'var(--muted)' }}>{system.name}</div>
							{/* Copy rail: fixed slim column so the buttons line up and never move. */}
							{result.ok && result.text !== '' ? (
								<button
									type="button"
									className="copy-btn"
									title="Copy to clipboard"
									aria-label={`Copy ${system.name} result to clipboard`}
									style={copiedSlug === system.slug ? { color: '#3fb950' } : undefined}
									onClick={() => copyResult(system.slug, result.text)}
								>
									{copiedSlug === system.slug ? <CheckIcon/> : <CopyIcon/>}
								</button>
							) : <span/>}
							{/* Fixed row height and no wrapping so the grid keeps its size while
							    typing; error messages are small and muted so they stay on one line. */}
							<div
								dir="auto"
								style={{
									fontSize: result.ok ? '25px' : '13px',
									color: result.ok ? undefined : 'var(--muted)',
									fontStyle: result.ok ? undefined : 'italic',
									height: '44px',
									display: 'flex',
									alignItems: 'center',
									whiteSpace: 'nowrap',
									overflowX: 'auto',
									overflowY: 'hidden',
								}}
							>
								{result.text}
							</div>
						</Fragment>
					)
				})}
			</div>

			<hr/>
			<div style={{ marginTop: '15px', fontSize: '14px', textAlign: 'left' }}>
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
				<a href="mailto:numerals@amerharb.com" style={{ textDecoration: 'none' }}> ✉️ Email</a>
				<span style={{ color: 'var(--muted)' }}> · v{version}</span>
			</div>
		</main>
	)
}
