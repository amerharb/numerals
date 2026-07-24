import Converter from './Converter'

// Reads the ?input= query param to prefill the input, e.g. ?input=42
export default async function Page({
	searchParams,
}: {
	searchParams: Promise<{ input?: string | string[] }>
}) {
	const sp = await searchParams
	const first = (v?: string | string[]) => (Array.isArray(v) ? v[0] : v)
	return <Converter input={first(sp.input)}/>
}
