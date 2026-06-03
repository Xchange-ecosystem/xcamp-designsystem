# Xcamp Design System

> Source of truth for UI/UX decisions across `xcamp-superadmin` and `xcamp-foundation`.
> When building new features with Lovable or any AI assistant, reference this document.

---

## How to use this in Lovable

Paste the following into your Lovable system prompt (project settings → custom instructions):

```
This project uses the xcamp design system. Rules:
1. Never use raw hex colours (#...) or hardcoded rgb/hsl values. Use Tailwind token utilities only.
2. All colours come from CSS variables defined in src/styles/tokens.css and mapped in tailwind.config.ts.
3. Use the shared components in src/shared/ui/ — do not rebuild Badge, ProjectCard, ObjectiveCard etc.
4. Use layout archetypes from src/shared/ui/layouts/ for page structure.
5. The brand primary colour is hsl(var(--primary)) — teal (#16B89A). Never use blue as the primary.
6. Border radius on cards is rounded-lg (12px via --radius). Use rounded-pill for badges/buttons.
7. See DESIGN_SYSTEM.md for the full token reference.
```

---

## Brand colour

| Token | Light | Dark | Use |
|-------|-------|------|-----|
| `--primary` | `168 72% 42%` (#16B89A teal) | `168 65% 48%` | buttons, links, active states |
| `--gradient-from` | `170 52% 67%` | `170 45% 40%` | hero banner start |
| `--gradient-to` | `152 78% 88%` | `152 60% 30%` | hero banner end |

---

## Token quick-reference

### Backgrounds
```
--background       page bg (near-white light / deep navy dark)
--surface          card / panel bg
--surface-raised   elevated card (same colour + shadow)
--card             shadcn card primitive
--popover          dropdown / tooltip bg
```

### Text
```
--foreground         primary text
--muted-foreground   secondary text / labels
--subtle-foreground  tertiary / meta text
```

### Status / semantic
```
--success   green   --warning   amber   --danger   red   --info   blue   --purple   violet
```

### Progress segments
```
--progress-open     gray    (not started)
--progress-active   amber   (in progress)
--progress-done     green   (completed)
```

### Objective status accent borders
```
--accent-yellow   open / in_progress
--accent-green    completed
--accent-purple   suggested / AI
```

### Radius
```
--radius          0.75rem (12px)  cards
--radius-sm       0.375rem (6px)  badges
--radius-pill     999px           fully rounded buttons / pills
--radius-progress 0.25rem (4px)   progress bars
```

### Shadows
```
--shadow-card       subtle card lift
--shadow-dropdown   dropdown / popover shadow
```

---

## Tailwind utilities

All tokens are available as Tailwind classes:

```
bg-background    bg-surface    bg-card    bg-popover
text-foreground  text-muted-foreground  text-subtle-foreground
bg-primary       text-primary
bg-progress-open bg-progress-active bg-progress-done
border-accent-yellow border-accent-green border-accent-purple
bg-purple  text-purple
rounded-lg  rounded-pill  rounded-progress
shadow-card  shadow-dropdown
```

---

## Shared components (`src/shared/ui/`)

| Component | Purpose |
|-----------|---------|
| `HeroBanner` | Full-width gradient hero with diamond pattern overlay |
| `SummaryCard` | 2×2 stat grid card — overlays on HeroBanner |
| `StatBar` | Horizontal row of KPIs with dividers |
| `ProgressBar3Segment` | 3-colour progress (open/active/done) |
| `ProjectCard` | Project tile with cover gradient, role badge |
| `ObjectiveCard` | Objective tile with left accent border by status |
| `FeedCard` | image variant (thumbnail + text) or text variant (accent border + tags) |
| `ActionPillButton` | Gradient pill button for AI / primary actions |
| `ContextTabSwitcher` | Pill toggle (e.g. Ecosystem / Project) |
| `FilterChip` | Outlined pill filter with chevron |
| `ViewModeToggle` | 3-icon list/grid/people toggle |
| `Badge` | Status badge — default / success / warning / info / outline |

### Layout archetypes (`src/shared/ui/layouts/`)

| Component | When to use |
|-----------|-------------|
| `DashboardLayout` | Home, Project dashboard, Rewards — hero + 2-col content |
| `ListGridLayout` | Projects list, Community, Marketplace — header + 3-col grid |
| `BoardLayout` | Objectives, Navigator, Kanban — toolbar + horizontal scroll columns |

---

## Component gallery

Visit `/superadmin/components` in the running app to see all components rendered with all variants.
