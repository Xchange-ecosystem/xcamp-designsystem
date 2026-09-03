# Design system conflicts requiring human decision

## 1. Objective modal fonts — RESOLVED (P1.0, 2026-09-03)
Claude Design export: scientific=Rubik, playful=Manrope+Rubik
Previous implementation: scientific=Hanken Grotesk, playful=Fraunces+Hanken Grotesk
Action taken: Updated to Claude Design values (Rubik/Manrope)
Verify: Are Rubik and Manrope loaded in all consumer apps?
Resolution: xcamp-companion did not load Rubik/Manrope at all (index.html
only loaded Hanken Grotesk + Inter) — confirmed still open. Since the
Scientific/Playful axis is retired in favor of one unified skin (see
xcamp-companion/src/styles.css), there is now only one heading-font choice
to make, not a per-tone pair: xcamp-companion now loads and uses Rubik
(objectiveSkins.scientific.fontHead) for `--skin-font-head`. Manrope was
only ever paired with the playful tone, which no longer exists in the
unified skin, so it was not adopted. Other consumer apps (xcamp-foundation
etc.) are out of scope for this change — re-check them separately if/when
they still run the two-tone system.

## 2. Dark theme brand colour — RESOLVED (P1.0, 2026-09-03)
Claude Design export: dark primary = purple hsl(264 85% 47%)
Previous implementation: dark primary = teal hsl(168 65% 48%)
Action taken: Added as DARK_BRAND_TOKENS — not yet wired into SkinProvider
Decision needed: Should dark mode flip brand from teal to purple?
This is a significant visual change affecting xcamp-foundation dark mode.
Resolution: KEEP purple for dark, matching the Claude Design export exactly
(this is what "Action taken" already anticipated — DARK_BRAND_TOKENS *is*
the purple value). xcamp-companion's dark theme had already independently
converged on purple (with its own documented rationale for preserving the
Xcamp/Nox brand distinction) before this session; that block has now been
resynced to the exact canonical hsl() values from tokens.json instead of
its previous hand-tuned oklch() approximations. No SkinProvider component
exists yet in @xchange/ui (only `applySkin()` + `SKIN_REGISTRY`, both tied
to the retired Scientific/Playful axis) or in xcamp-companion, so "wiring
into SkinProvider" was done at the only real wiring point that exists
today: xcamp-companion's `.dark` CSS block, toggled by its own
`ThemeProvider` (src/lib/theme.tsx). Revisit once a real cross-app
SkinProvider ships.
