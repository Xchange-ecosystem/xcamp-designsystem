# Xcamp Design System — Reference

> Source of truth for tokens, skin axes, and available UI surface.  
> CSS entry: `src/styles/globals.css` · Token source: `src/skin/tokens.ts`

---

## CSS Custom Properties (`src/styles/globals.css`)

These five variables are defined in `:root` and consumed by Tailwind utilities and base styles. They are the **static baseline** — the skin system (see below) overrides them at runtime.

### Colour

| Property | Default value (HSL) | Role |
|---|---|---|
| `--background` | `0 0% 100%` | Page canvas |
| `--foreground` | `222 47% 11%` | Body text |
| `--primary` | `222 89% 55%` | Brand / interactive |
| `--muted-foreground` | `215 16% 47%` | Secondary text |
| `--border` | `214 32% 91%` | Dividers & outlines |

---

## Tailwind Colour Aliases (`tailwind.config.ts`)

All map to CSS custom properties via `hsl(var(--…))`. They are available as Tailwind utilities (`bg-*`, `text-*`, `border-*`, etc.).

### Surface & text

| Alias | CSS variable |
|---|---|
| `background` | `--background` |
| `foreground` | `--foreground` |
| `surface` | `--surface` |
| `muted` / `muted-foreground` | `--muted` / `--muted-foreground` |
| `card` / `card-foreground` | `--card` / `--card-foreground` |
| `popover` / `popover-foreground` | `--popover` / `--popover-foreground` |

### Interactive

| Alias | CSS variable |
|---|---|
| `primary` / `primary-foreground` | `--primary` / `--primary-foreground` |
| `secondary` / `secondary-foreground` | `--secondary` / `--secondary-foreground` |
| `accent` / `accent-foreground` | `--accent` / `--accent-foreground` |
| `ring` | `--ring` |
| `input` | `--input` |
| `border` | `--border` |
| `destructive` / `destructive-foreground` | `--destructive` / `--destructive-foreground` |

### Semantic status

| Alias | CSS variable |
|---|---|
| `success` | `--success` |
| `warning` | `--warning` |
| `danger` | `--danger` |
| `info` | `--info` |

### Accent palette

| Alias | CSS variable |
|---|---|
| `purple` | `--purple` |
| `accent-yellow` | `--accent-yellow` |
| `accent-green` | `--accent-green` |
| `accent-purple` | `--accent-purple` |

### Gradient

| Alias | CSS variable |
|---|---|
| `gradient-from` | `--gradient-from` |
| `gradient-to` | `--gradient-to` |

### Progress states

| Alias | CSS variable |
|---|---|
| `progress-open` | `--progress-open` |
| `progress-active` | `--progress-active` |
| `progress-done` | `--progress-done` |

### Chart

| Alias | CSS variable |
|---|---|
| `chart-blue-dark` | `--chart-blue-dark` |
| `chart-blue-mid` | `--chart-blue-mid` |
| `chart-blue-light` | `--chart-blue-light` |

### Sidebar

| Alias | CSS variable |
|---|---|
| `sidebar` | `--sidebar-background` |
| `sidebar-foreground` | `--sidebar-foreground` |
| `sidebar-primary` / `sidebar-primary-foreground` | `--sidebar-primary` / `--sidebar-primary-foreground` |
| `sidebar-accent` / `sidebar-accent-foreground` | `--sidebar-accent` / `--sidebar-accent-foreground` |
| `sidebar-border` | `--sidebar-border` |
| `sidebar-ring` | `--sidebar-ring` |

---

## Spacing / Radius (`tailwind.config.ts`)

| Tailwind key | CSS variable | Notes |
|---|---|---|
| `rounded-sm` | `calc(var(--radius) - 4px)` | Tight components |
| `rounded-md` | `calc(var(--radius) - 2px)` | Default components |
| `rounded-lg` | `var(--radius)` | Cards, panels |
| `rounded-pill` | `var(--radius-pill)` | Tags, badges |
| `rounded-progress` | `var(--radius-progress)` | Progress bars |

---

## Shadow

| Tailwind key | CSS variable |
|---|---|
| `shadow-card` | `var(--shadow-card)` |
| `shadow-dropdown` | `var(--shadow-dropdown)` |

---

## Skin System (`src/skin/`)

The skin system provides the runtime values for all the CSS variables above. A skin is the product of three independent axes: **Paradigm × Tone × AI Persona**.

### Axes

#### Paradigm

| Value | Shell type | Supported altitudes | Default altitude |
|---|---|---|---|
| `platform` | Sidebar, routes, panels, cards | 0, 1, 2 | 1 |
| `companion` | Conversational-first, AI primary surface | 0, 1, 2 | 0 |
| `canvas` | Spatial node-and-edge graph, no route tree | 0, 1, 2 | 2 |

#### Tone

| Value | Character |
|---|---|
| `scientific` | Precise, data-forward, low-motion, monospace figures, high contrast |
| `playful` | Warm, rounded, motion-on, serif headings, sentence-case labels |

#### AI Persona

| Value | Display name | Tagline | Default tone |
|---|---|---|---|
| `analyst` | Analyst | Precision · Data · Clarity | `scientific` |
| `guide` | Guide | Warmth · Growth · Flow | `playful` |
| `collaborator` | Co | Lateral · Creative · Peer | `scientific` |

Default: `{ paradigm: 'platform', tone: 'scientific', aiPersona: 'analyst' }`

---

### Colour tokens (`src/skin/tokens.ts`)

All values are hex strings. The skin provider maps these to the CSS custom properties at runtime.

| Token | Scientific | Playful | Semantic role |
|---|---|---|---|
| `bg` | `#e8ecf1` | `#f5efe5` | Page canvas |
| `surface` | `#ffffff` | `#fffdf8` | Card / panel background |
| `surface2` | `#f3f6f9` | `#f7f0e4` | Recessed / nested surface |
| `ink` | `#152230` | `#2c2118` | Primary text |
| `inkSoft` | `#5d6e7e` | `#806f5d` | Secondary text |
| `inkFaint` | `#93a2b1` | `#b09a85` | Placeholder / disabled text |
| `line` | `#d6dee6` | `#e7dccb` | Borders, dividers |
| `lineSoft` | `#e6ecf1` | `#ede3d4` | Subtle separators |
| `accent` | `#1f5fae` | `#d9743b` | Interactive / brand highlight |
| `accentSoft` | `#e8eef8` | `#fdf0e6` | Accent tint background |
| `good` | `#1f7a4d` | `#4f8a5b` | Success / positive |
| `goodSoft` | `#e6f4ec` | `#e8f4ea` | Success tint background |
| `warn` | `#b25a1f` | `#c2691f` | Warning / caution |
| `warnSoft` | `#fdf0e6` | `#fdf0e6` | Warning tint background |

### Radius tokens

| Token | Scientific | Playful |
|---|---|---|
| `base` | `4px` | `12px` |
| `lg` | `7px` | `18px` |
| `xl` | `11px` | `26px` |
| `full` | `999px` | `999px` |

### Typography tokens

| Token | Scientific | Playful |
|---|---|---|
| `headFamily` | `'IBM Plex Sans', system-ui, sans-serif` | `'Cormorant Garamond', Georgia, serif` |
| `bodyFamily` | `'IBM Plex Sans', system-ui, sans-serif` | `'IBM Plex Sans', system-ui, sans-serif` |
| `monoFamily` | `'IBM Plex Mono', 'Courier New', monospace` | `'IBM Plex Mono', 'Courier New', monospace` |
| `headStyle` | `normal` | `italic` |
| `labelTransform` | `uppercase` | `none` |
| `labelSpacing` | `0.08em` | `normal` |
| `labelSize` | `10px` | `11px` |

### Motion tokens

| Token | Scientific | Playful |
|---|---|---|
| `enabled` | `false` | `true` |
| `durationBase` | `150ms` | `200ms` |
| `durationEnter` | `200ms` | `280ms` |
| `durationExit` | `120ms` | `160ms` |
| `easing` | `ease` | `cubic-bezier(0.34, 1.56, 0.64, 1)` |

---

### Gravity tokens (`src/skin/gravity.ts`)

Invariant across all skins and tones. Applied unconditionally for binding moments (value lock, formalise, complete & settle, owner override).

| Token | Value | Role |
|---|---|---|
| `bg` | `#fff8f0` | Warm parchment canvas |
| `border` | `#b25a1f` | Burnt-orange border |
| `ink` | `#5c2400` | Deep brown text |
| `soft` | `#8b4513` | Saddle-brown secondary text |

---

### Skin registry (`src/skin/skins.ts`)

Six pre-built skins. Key format: `"{paradigm}-{tone}"`.

| ID | Default AI persona |
|---|---|
| `platform-scientific` | analyst |
| `platform-playful` | guide |
| `companion-scientific` | analyst |
| `companion-playful` | guide |
| `canvas-scientific` | analyst |
| `canvas-playful` | guide |

Resolved at runtime via `resolveSkin(config: SkinConfig): SkinDefinition`. Falls back to `platform-scientific` if the id is not found.

---

## Animations (`tailwind.config.ts`)

| Tailwind class | Keyframe | Duration |
|---|---|---|
| `animate-accordion-down` | Height `0 → var(--radix-accordion-content-height)` | `0.2s ease-out` |
| `animate-accordion-up` | Height `var(--radix-accordion-content-height) → 0` | `0.2s ease-out` |

---

## shadcn/ui Components

There is no `src/components/ui/` directory in this package. **Xcamp Design System is a token and skin library**, not a component library. It exports:

- `src/skin/` — `SCIENTIFIC_TOKENS`, `PLAYFUL_TOKENS`, `TONE_TOKENS`, `SKIN_REGISTRY`, `resolveSkin`, `GRAVITY`, `PERSONA_DEFINITIONS`, all types
- `src/ai/` — AI objective types (`objective-ai.types.ts`)
- `src/styles/globals.css` — Base CSS variables and Tailwind import

Consumer applications (e.g. `xcamp-foundation`) install shadcn components independently and wire them to these tokens via the CSS variables.

---

## Usage rules

- Never use hardcoded colour, spacing, or radius values — always reference a token or Tailwind alias.
- Never create ad-hoc components — use the skin + shadcn primitives from the consuming app.
- Gravity tokens override the active skin; apply them unconditionally on binding-moment surfaces.
- New screens must be designed in Claude Design before implementation (see CLAUDE.md).
