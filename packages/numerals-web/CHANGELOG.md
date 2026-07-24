# numerals-web Changelog

<!-- https://keepachangelog.com/en/1.0.0/ -->

## [0.9.0] 2026-07-24
### Added
- Dark mode: follows the OS by default with a System/Light/Dark toggle (persisted to `localStorage`, no flash on load)
- `vercel.json` declaring the Next.js framework for deployment

### Changed
- Upgrade Next.js from v14 to v16
- Show all eight numeral systems at once — each result labeled with its system — instead of choosing one via a "To:" dropdown
- Resolve the `?input=` query param in a server component (drop `useSearchParams`)
- Compact footer; list packages inline instead of one per line

### Removed
- "To:" numeral-system dropdown and the `?to=` query param
- Unused dependencies: `react-select`, `@emotion/react`, `@emotion/styled`, `@mui/joy`

## [0.8.0] 2024-10-16
### Added
- Add Kaktovik numeral conversion

### Fixed
- Change enum case

## [0.7.0] 2024-05-16
### Added
- Add Hanifi Rohingya numeral conversion

## [0.6.0] 2024-05-09
### Added
- Add Thai numeral conversion
### Changed
- Order of page, input first then select numerals

## [0.5.0] 2024-05-02
### Added
- Add Aegean numeral conversion

## [0.4.1] 2024-05-01
### Changed
- Use roman v0.0.2
- support multi values, enter more than one number

## [0.0.4] 2024-05-01
### Added
- Add Roman numeral conversion

## [0.0.3] 2024-04-30
### Added
- Add Hieroglyphic numeral conversion

## [0.0.2] 2024-04-28
### Added
- Add Mayan numeral conversion

## [0.0.1] 2024-04-23
### Added
- Setup NextJS
- Simple web page
