import Converter from './Converter'

// Reads ?to= & ?input= query params to preselect the dropdown and prefill the input,
// e.g. ?to=roman&input=42
export default async function Page({
	searchParams,
}: {
	searchParams: Promise<{ to?: string | string[]; input?: string | string[] }>
}) {
	const sp = await searchParams
	const first = (v?: string | string[]) => (Array.isArray(v) ? v[0] : v)
	return <Converter to={first(sp.to)} input={first(sp.input)}/>
}
