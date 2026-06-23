# Design system conflicts requiring human decision

## 1. Objective modal fonts
Claude Design export: scientific=Rubik, playful=Manrope+Rubik
Previous implementation: scientific=Hanken Grotesk, playful=Fraunces+Hanken Grotesk
Action taken: Updated to Claude Design values (Rubik/Manrope)
Verify: Are Rubik and Manrope loaded in all consumer apps?

## 2. Dark theme brand colour
Claude Design export: dark primary = purple hsl(264 85% 47%)
Previous implementation: dark primary = teal hsl(168 65% 48%)
Action taken: Added as DARK_BRAND_TOKENS — not yet wired into SkinProvider
Decision needed: Should dark mode flip brand from teal to purple?
This is a significant visual change affecting xcamp-foundation dark mode.
