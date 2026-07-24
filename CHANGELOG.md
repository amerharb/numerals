# Changelog
<!-- https://keepachangelog.com/en/1.0.0/ -->

## [0.9.0]  2026-07-24
### Changed
- Change package manager from yarn to npm
- Migrate ESLint to v9 flat config (`eslint.config.mjs`)
- Update dev tooling: ESLint 9, typescript-eslint 8, Jest 30
- Upgrade numerals-web to Next.js v16
- Consolidate publish workflows into one; CI runs on npm with Node 20/22/24

### Security
- Override transitive `postcss` (>=8.5.22) and `sharp` (>=0.35.3) to clear high-severity advisories (`npm audit` clean)

## [0.8.0]  2024-10-09
### Added
- Add Kaktovik numeral package

## [0.7.0]  2024-05-16
### Added
- Add Hanifi Rohingya numeral package

## [0.6.0]  2024-05-08
### Added
- Add Thai numeral package

## [0.5.0]  2024-05-02
### Added
- Add Aegean numeral package

## [0.4.0]  2024-05-01
### Added
- Add Roman numeral package

## [0.3.0]  2024-04-28
### Added
- Add Hieroglyphic numeral package

## [0.2.0]  2024-04-28
### Added
- Add Mayan numeral package

## [0.0.1]  2024-03-05
### Added
- Root project structure
