# Lovable Instructions — Xcamp Design System

You are building a product inside the xchange ecosystem. Follow these rules exactly.

## Non-negotiable rules

1. **No raw colours.** Never write `#hex`, `rgb(...)`, or `hsl(...)` with literal values in component code. Use Tailwind token utilities: `bg-primary`, `text-muted-foreground`, `border-border`, etc.

2. **Use shared components.** Import from `@xchange/ui`, never recreate primitives.
   Available: `HeroBanner`, `SummaryCard`, `StatBar`, `ProgressBar3Segment`, `ProjectCard`, `ObjectiveCard`, `FeedCard`, `ActionPillButton`, `ContextTabSwitcher`, `FilterChip`, `ViewModeToggle`, `Badge`, `CreateProjectTile`, `EmptyState`, `MemberPill`.

3. **Use layout archetypes.** Import from `@xchange/ui`:
   - `DashboardLayout` — home / project / rewards (hero + 2-col)
   - `ListGridLayout` — projects / community / marketplace (header + 3-col grid)
   - `BoardLayout` — objectives / kanban (toolbar + horizontal scroll)

4. **Brand colour is teal.** `hsl(var(--primary))` = `#16B89A`. Never use blue as the primary.

5. **Card radius is `rounded-lg` (12px).** Badges and pill buttons use `rounded-pill`.

6. **Shadows.** Use `shadow-card` on cards, `shadow-dropdown` on dropdowns.

## Example: a new page

```tsx
import { DashboardLayout, HeroBanner, SummaryCard } from '@xchange/ui'

export function MyPage() {
  return (
    <DashboardLayout
      hero={
        <HeroBanner>
          <div className="absolute bottom-4 left-4">
            <SummaryCard stats={[
              { label: 'Projects', value: 12 },
              { label: 'Members', value: 47 },
            ]} />
          </div>
        </HeroBanner>
      }
      main={<div>{/* main content */}</div>}
    />
  )
}
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
