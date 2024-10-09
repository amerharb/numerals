import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Noto_Sans_Symbols_2 } from 'next/font/google'
import type { Metadata } from 'next'
import React from 'react'

const notoSansSymbols2 = Noto_Sans_Symbols_2({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
	title: 'Numerals web',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<Head>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
				<link rel="manifest" href="/site.webmanifest"/>
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
				<meta name="msapplication-TileColor" content="#da532c"/>
				<meta name="theme-color" content="#ffffff"/>
			</Head>
			<body className={notoSansSymbols2.className}>
				{children}
				<Analytics/>
				<SpeedInsights/>
			</body>
		</html>
	)
}
