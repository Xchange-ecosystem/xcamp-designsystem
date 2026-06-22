## How to use this document (for Claude Code)

Before writing any component, page, or style:
1. Read this entire document
2. Use only tokens and aliases listed here — never hardcode hex, px, or font values
3. Use only component names and patterns listed in the naming conventions section
4. Apply gravity tokens unconditionally on binding-moment surfaces
5. Check the altitude level before deciding which controls to show
6. New UI that does not fit an existing pattern must be flagged for design review
   before implementation

---

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

---

## Altitude System (`xcamp-foundation/src/entities/altitude.ts`)

Altitude is an independent axis from Paradigm and Tone. It controls the level of AI autonomy and information density shown to the user. It is stored in `user_preferences.altitude` and persisted per user.

### The three altitude levels

| Value | Name | Sub-label | AI role | Accent colour |
|---|---|---|---|---|
| `0` | Focus | AI-first · Good to be efficient or get started. | `integrated` | `#57c9b6` (`168 55% 56%`) |
| `1` | Balanced | AI-assisted · Driven by your directions. | `parallel` | `#34acbf` (`188 57% 47%`) |
| `2` | Deep Dive | Full control to in-depth work. | `advisor` | `#b689e6` (`270 67% 72%`) |

### What changes at each level

- **Altitude 0 (Focus):** AI operates autonomously. Cards can be auto-confirmed. Copilot drives the canvas (canvas paradigm). Minimum manual controls are surfaced.
- **Altitude 1 (Balanced):** AI assists and prefills. User reviews and approves. Default for the platform paradigm.
- **Altitude 2 (Deep Dive):** Full user control. AI advises only. All manual controls are visible. Default for the canvas paradigm.

The `AltitudeDescriptor` interface annotates each feature with its behaviour across altitudes:

```ts
interface AltitudeDescriptor {
  minAltitude: Altitude;          // hide this feature below this altitude
  collapsedAt?: Altitude[];       // collapse (not hide) at these altitudes
  automationByAltitude: Record<Altitude, AutomationLevel>;
  gravity?: boolean;              // true → this feature is always a binding moment
  material?: MaterialSurface;     // 'committed' | 'ephemeral' | 'gravity'
}
```

`AutomationLevel` values: `'ai-prepared'` | `'ai-prefilled'` | `'ai-filled-editable'` | `'ai-assisted'` | `'user-controlled'`

### How altitude is read

- **`useAltitude()`** (`src/hooks/useAltitude.ts`) — fetches from Supabase `user_preferences.altitude`, defaults to `0`, debounces writes 600 ms. Returns `{ altitude, setAltitude, isLoading }`.
- **`useAltitudeStore`** (`src/app/store/altitudeStore.ts`) — Zustand store (`persistence key: 'nox-altitude'`) for synchronous in-memory reads.
- **`useAltitudeContext()`** (`src/app/providers/AltitudeProvider.tsx`) — thin wrapper over the Zustand store for use inside the provider tree.

### How altitude is applied to the DOM

`AltitudeProvider` (`src/app/providers/AltitudeProvider.tsx`) manages two sub-components:

1. **`AltitudeSeeder`** — seeds the Zustand store from `useAltitude()` once `isLoading` is false.
2. **`AltitudeBodyClass`** — runs on every altitude change:

```ts
body.classList.remove('altitude-0', 'altitude-1', 'altitude-2')
body.classList.add(`altitude-${altitude}`)
body.dataset.altitude = String(altitude)
```

The CSS classes override `--accent` and `--accent-foreground` on `<body>` (`tokens.css` lines 173–176):

```css
.altitude-0 { --accent: 168 55% 56%; --accent-foreground: 0 0% 100%; }  /* Focus     #57c9b6 */
.altitude-1 { --accent: 188 57% 47%; --accent-foreground: 0 0% 100%; }  /* Balanced  #34acbf */
.altitude-2 { --accent: 270 67% 72%; --accent-foreground: 0 0% 100%; }  /* Deep Dive #b689e6 */
```

**Gravity always overrides altitude.** Any surface using `GravitySurface` or `[data-gravity]` ignores the altitude accent entirely and uses the invariant gravity tokens (`--gravity-bg`, `--gravity-border`, `--gravity-ink`, `--gravity-soft`).

---

## Component Naming Conventions (`xcamp-foundation/src/`)

### Shell components (`src/app/shells/`)

| Component | File | Purpose |
|---|---|---|
| `ShellRouter` | `ShellRouter.tsx` | Routes between paradigm shells based on active skin |
| `CanvasShell` | `CanvasShell.tsx` | Spatial / node-edge paradigm shell |
| `CompanionShell` | `CompanionShell.tsx` | Conversational-first paradigm shell |
| `SuperadminShell` | `features/superadmin/SuperadminShell.tsx` | Internal superadmin shell |

### Layout components (`src/shared/ui/layouts/`)

| Component | Purpose |
|---|---|
| `DashboardLayout` | Multi-panel dashboard (sidebar + main + optional detail) |
| `BoardLayout` | Kanban / board-style layout |
| `ListGridLayout` | List / grid toggle layout |

### Page-level primitives (`src/shared/ui/`)

| Component | Purpose |
|---|---|
| `PageHeroShell` | Hero banner + overlapping white card — primary page container |
| `HeroBanner` | Hero image/gradient strip (used inside PageHeroShell) |
| `ContentDetailPanel` | Right-side slide-in detail panel |
| `SectionIntro` | Section heading + description block |

### Material surface components (`src/shared/ui/material/`)

These wrap content in a surface that signals its commitment level:

| Component | Material | Purpose |
|---|---|---|
| `GravitySurface` | `gravity` | Binding-moment container — always uses gravity tokens |
| `Committed` | `committed` | Persisted / locked card container |
| `Ephemeral` | `ephemeral` | Draft / temporary card container |

### Altitude components (`src/shared/ui/altitude/`)

| Component | Purpose |
|---|---|
| `FloatingAltitudeDial` | Draggable right-side altitude selector (desktop only) |
| `AIPresenceBar` | Shows active AI companion and persona |
| `GravityModal` | Modal wrapper for gravity-surface interactions |

### Focus / FAB components (`src/shared/ui/focus/`)

| Component | Purpose |
|---|---|
| `FocusFab` | Floating action button for primary contextual action |
| `FocusFabPill` | Compact pill variant of the FAB |
| `FocusFabTray` | Expandable tray of secondary actions from the FAB |

### Shared UI primitives (`src/shared/ui/`)

| Component | Purpose |
|---|---|
| `ActionPillButton` | Pill-shaped action button with icon |
| `AppMarketplaceCard` | App tile for the marketplace grid |
| `Badge` | Status / label badge |
| `ContextTabSwitcher` | In-page tab bar |
| `CreateProjectTile` | Empty-state tile for project creation |
| `EmptyState` | Empty-state illustration + CTA |
| `FeedCard` | Activity feed item card |
| `FilterChip` | Toggleable filter chip |
| `MemberPill` | Compact avatar + name pill |
| `NotificationItem` | Notification list row |
| `ObjectiveCard` | Objective summary card with status accent |
| `ProgressBar3Segment` | Three-segment (open / active / done) progress bar |
| `ProjectCard` | Project summary card |
| `ResizeHandle` | Drag handle for resizable panels |
| `RoleBadge` | Role label badge |
| `StatBar` | Horizontal stat / metric bar |
| `SummaryCard` | AI-generated summary card |
| `TemplateCard` | Template picker tile |
| `UserPromptBlock` | User message bubble in conversation views |
| `ViewModeToggle` | List / grid / board view toggle |
| `AILoader` | Animated AI thinking indicator |

### shadcn component in foundation (`src/components/ui/`)

| Component | File |
|---|---|
| `Skeleton` | `skeleton.tsx` |

Additional shadcn primitives are consumed from the `shadcn/ui` package directly (Button, Dialog, Input, etc.) — they are not re-exported.

### Naming conventions

- Shells use `*Shell` suffix.
- Layouts use `*Layout` suffix.
- Material wrappers use `*Surface` or the material name (`Committed`, `Ephemeral`).
- Altitude-specific UI lives in `shared/ui/altitude/`.
- Shared primitives are PascalCase noun phrases — no namespace prefix.
- No `x-btn-*` or similar CSS class prefixes exist; all button styling uses Tailwind utility classes directly.

### Button class pattern (inline, no CSS class)

Buttons are composed from Tailwind utilities inline. The common base pattern observed in the codebase:

```ts
const btnBase = 'inline-flex h-9 items-center justify-center rounded-md px-3 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none cursor-pointer'
const btnGhost = `${btnBase} text-muted-foreground hover:bg-accent hover:text-accent-foreground`
const btnLink  = 'text-sm font-medium text-primary hover:underline focus:outline-none cursor-pointer'
```

Use shadcn `<Button variant="…">` where possible; compose from `btnBase` only when shadcn variants do not cover the case.

---

## Dark Mode Token Values (`xcamp-foundation/src/styles/tokens.css`)

Dark mode is activated by adding the `.dark` class to `<html>`. All dark overrides are semantic — `--background`, `--foreground`, etc. — not per-skin. The skin system's `--skin-*` variables are **not** separately overridden in dark mode; the `SkinProvider` re-derives soft variants from the active hex colours, so dark mode interacts with skin only through the base semantic tokens.

### Global semantic tokens — dark (`.dark` selector)

| Token | Light value (HSL) | Dark value (HSL) |
|---|---|---|
| `--background` | `0 0% 97%` | `222 47% 8%` |
| `--foreground` | `220 13% 10%` | `210 40% 98%` |
| `--surface` | `0 0% 100%` | `222 47% 11%` |
| `--surface-raised` | `0 0% 100%` | `222 47% 13%` |
| `--border` | `220 13% 91%` | `217 33% 18%` |
| `--input` | `220 13% 91%` | `217 33% 18%` |
| `--ring` | `168 72% 42%` | `168 72% 42%` |
| `--muted` | `220 14% 96%` | `217 33% 16%` |
| `--muted-foreground` | `220 9% 46%` | `215 20% 65%` |
| `--subtle-foreground` | `220 6% 64%` | `215 15% 50%` |
| `--primary` | `168 72% 42%` | `168 65% 48%` |
| `--primary-foreground` | `0 0% 100%` | `222 47% 8%` |
| `--secondary` | `220 14% 96%` | `217 33% 16%` |
| `--secondary-foreground` | `220 13% 10%` | `210 40% 98%` |
| `--accent` | `168 72% 42%` | `168 65% 48%` |
| `--accent-foreground` | `0 0% 100%` | `222 47% 8%` |
| `--card` | `0 0% 100%` | `222 47% 11%` |
| `--card-foreground` | `220 13% 10%` | `210 40% 98%` |
| `--popover` | `0 0% 100%` | `222 47% 11%` |
| `--popover-foreground` | `220 13% 10%` | `210 40% 98%` |
| `--destructive` | `0 84% 60%` | `0 72% 51%` |
| `--destructive-foreground` | `0 0% 100%` | `210 40% 98%` |
| `--success` | `142 76% 36%` | `142 71% 45%` |
| `--warning` | `38 92% 50%` | `38 92% 50%` |
| `--danger` | `0 84% 60%` | `0 72% 51%` |
| `--info` | `213 93% 68%` | `199 89% 48%` |
| `--purple` | `262 83% 58%` | `262 83% 65%` |
| `--gradient-from` | `170 52% 67%` | `170 45% 40%` |
| `--gradient-to` | `152 78% 88%` | `152 60% 30%` |
| `--progress-open` | `220 13% 82%` | `217 33% 28%` |
| `--progress-active` | `38 92% 50%` | `38 92% 50%` |
| `--progress-done` | `160 84% 39%` | `160 84% 39%` |
| `--sidebar-background` | `0 0% 100%` | `222 47% 10%` |
| `--sidebar-foreground` | `220 13% 10%` | `210 40% 98%` |
| `--sidebar-primary` | `168 72% 42%` | `168 65% 48%` |
| `--sidebar-primary-foreground` | `0 0% 100%` | `222 47% 8%` |
| `--sidebar-accent` | `220 14% 96%` | `217 33% 16%` |
| `--sidebar-accent-foreground` | `220 13% 10%` | `210 40% 98%` |
| `--sidebar-active-bg` | `220 14% 96%` | `217 33% 18%` |
| `--sidebar-active-fg` | `220 13% 10%` | `210 40% 98%` |
| `--sidebar-border` | `220 13% 91%` | `217 33% 18%` |
| `--sidebar-ring` | `168 72% 42%` | `168 65% 48%` |
| `--sidebar-muted` | `220 9% 46%` | `215 20% 65%` |

### Skin tokens in dark mode

The `--skin-*` variables (set by `SkinProvider` on `document.documentElement`) are **not** overridden by the `.dark` selector. `SkinProvider` always writes the light-mode hex values from `TONE_TOKENS` (or the active design theme). Components that need dark-aware skin colours should fall back to semantic tokens (`--background`, `--foreground`, `--border`, etc.) rather than `--skin-*` in dark contexts.

---

## Skin CSS Variables at Runtime (`xcamp-foundation/src/app/providers/SkinProvider.tsx`)

`SkinProvider` writes all `--skin-*` and `--gravity-*` variables directly to `document.documentElement.style` (i.e. inline on `:root`) on every tone change or design-theme load. No CSS file contains these overrides — they are always set programmatically.

### Token → CSS variable mapping

#### Colours

| Token (`SkinColorTokens`) | CSS variable | Source priority |
|---|---|---|
| `bg` | `--skin-bg` | `designTheme.colors.background` › tone default |
| `surface` | `--skin-surface` | `designTheme.colors.background` › tone default |
| `surface2` | `--skin-surface-2` | `designTheme.colors.muted` › tone default |
| `ink` | `--skin-ink` | `designTheme.colors.foreground` › tone default |
| `inkSoft` | `--skin-ink-soft` | `soft(foreground, 0.70)` › tone default |
| `inkFaint` | `--skin-ink-faint` | `soft(foreground, 0.45)` › tone default |
| `line` | `--skin-line` | `designTheme.colors.border` › tone default |
| `lineSoft` | `--skin-line-soft` | `soft(border, 0.60)` › tone default |
| `accent` | `--skin-accent` | `designTheme.colors.primary` › tone default |
| `accentSoft` | `--skin-accent-soft` | `soft(primary, 0.15)` › tone default |
| `good` | `--skin-good` | `designTheme.colors.success` › tone default |
| `goodSoft` | `--skin-good-soft` | `soft(success, 0.15)` › tone default |
| `warn` | `--skin-warn` | `designTheme.colors.warning` › tone default |
| `warnSoft` | `--skin-warn-soft` | `soft(warning, 0.15)` › tone default |

`soft(hex, alpha)` converts a hex colour to `hsl(H S% L% / alpha)` using `hexToHslAlpha`.

#### Radii

| Token (`SkinRadiusTokens`) | CSS variable | Source priority |
|---|---|---|
| `base` | `--skin-radius` | `designTheme.radius.sm` › tone default |
| `lg` | `--skin-radius-lg` | `designTheme.radius.lg` › tone default |
| `xl` | `--skin-radius-xl` | `designTheme.radius.xl` › tone default |
| `full` | `--skin-radius-full` | tone default only (no design-theme override) |

#### Typography

| Token | CSS variable | Source priority |
|---|---|---|
| `headFamily` | `--skin-font-head` | `designTheme.typography.fontSans` › tone default |
| `bodyFamily` | `--skin-font-body` | `designTheme.typography.fontSans` › tone default |
| `monoFamily` | `--skin-font-mono` | `designTheme.typography.fontMono` › tone default |
| `headStyle` | `--skin-font-head-style` | tone only — never overridden by design theme |
| `labelTransform` | `--skin-label-transform` | tone only |
| `labelSpacing` | `--skin-label-spacing` | tone only |
| `labelSize` | `--skin-label-size` | tone only |

#### Motion

| Token | CSS variable | Source priority |
|---|---|---|
| `enabled` | `--skin-motion-enabled` | tone only (`0` or `1`) |
| `durationBase` | `--skin-motion-duration` | tone only |
| `durationEnter` | `--skin-motion-enter` | tone only |
| `durationExit` | `--skin-motion-exit` | tone only |
| `easing` | `--skin-motion-easing` | tone only |

#### Gravity (invariant — set once on mount)

| Token | CSS variable | Value |
|---|---|---|
| `bg` | `--gravity-bg` | `#fff8f0` |
| `border` | `--gravity-border` | `#b25a1f` |
| `ink` | `--gravity-ink` | `#5c2400` |
| `soft` | `--gravity-soft` | `#8b4513` |

### HTML attributes set on `<html>`

`SkinProvider` also sets two data attributes on `document.documentElement` after every paradigm or tone change:

```ts
document.documentElement.setAttribute('data-skin-paradigm', skin.paradigm)
document.documentElement.setAttribute('data-skin-tone',     skin.tone)
```

These enable paradigm- and tone-scoped CSS selectors:

```css
[data-skin-paradigm='platform']   { /* platform-specific styles */ }
[data-skin-paradigm='companion']  { /* companion-specific styles */ }
[data-skin-paradigm='canvas']     { /* canvas-specific styles    */ }
[data-skin-tone='scientific']     { /* scientific-specific styles */ }
[data-skin-tone='playful']        { /* playful-specific styles    */ }
```

### CSS variable default values (static fallback in `tokens.css`)

The `:root` block in `tokens.css` (lines 249–294) contains static fallback values matching the Scientific tone. These are overridden immediately at runtime by `SkinProvider`. Do not rely on these values in new code — always use the CSS variable references.

### Application flow summary

```
1. SkinProvider mounts
2. Gravity tokens written to :root (once, invariant)
3. useSkinStore → skin.tone changes → SkinProvider effect runs:
   a. Load active design theme from Supabase (cached 5 min, VITE_APP_ENV key)
   b. Resolve TONE_TOKENS[skin.tone]
   c. Write --skin-* variables to document.documentElement.style
   d. Fallback to TONE_TOKENS if Supabase query fails
4. skin.paradigm or skin.tone changes:
   a. Set data-skin-paradigm and data-skin-tone on <html>
5. AltitudeProvider independently:
   a. Sets .altitude-N class on <body>
   b. Sets body.dataset.altitude
   → overrides --accent / --accent-foreground for that altitude
6. Gravity surfaces ignore altitude accent; use --gravity-* unconditionally
```

### Objective modal skin (`[data-objective-skin]`)

A separate skin scope for the objective editor modal, applied via `data-objective-skin="scientific"` or `data-objective-skin="playful"` on the modal root. Uses different fonts from the main skin:

| Attribute value | Accent | Head font | Body font | Radius | Motion |
|---|---|---|---|---|---|
| `scientific` | `213 70% 48%` | `'Hanken Grotesk'` | `'Hanken Grotesk'` | `5px` | off |
| `playful` | `22 80% 58%` | `'Fraunces'` | `'Hanken Grotesk'` | `14px` | on |

Neutral tokens (`--obj-bg`, `--obj-ink`, `--obj-line`, etc.) inherit from the active semantic tokens so they remain light/dark-aware.
