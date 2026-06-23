/** Concrete token sets for the two built-in tones: Scientific and Playful.
 *  These are the ground truth for all token values across the platform.
 *  SkinProvider in xcamp-foundation-0.2 maps these to CSS custom properties.
 *
 *  Aligned with Claude Design export v1.0.0 (2026-06-23).
 *  Objective skin fonts updated: scientific=Rubik, playful=Manrope+Rubik.
 *  See CONFLICTS.md for unresolved decisions. */

import type { SkinTokenSet } from './types';

export const SCIENTIFIC_TOKENS: SkinTokenSet = {
  colors: {
    bg:           '#e8ecf1',
    surface:      '#ffffff',
    surfaceRaised:'#ffffff',
    surface2:     '#f3f6f9',
    ink:          '#152230',
    inkSoft:      '#5d6e7e',
    inkFaint:     '#93a2b1',
    inkSubtle:    '#93a2b1',
    line:         '#d6dee6',
    lineSoft:     '#e6ecf1',
    accent:       '#1f5fae',
    accentSoft:   '#e8eef8',
    accentBright: '#34d6bf',
    accentWarm:   '#34acbf',
    accentCool:   '#57c9b6',
    good:         '#1f7a4d',
    goodSoft:     '#e6f4ec',
    warn:         '#b25a1f',
    warnSoft:     '#fdf0e6',
  },
  radii: {
    base: '4px',
    lg:   '7px',
    xl:   '11px',
    full: '999px',
  },
  typography: {
    headFamily:     "'IBM Plex Sans', system-ui, sans-serif",
    bodyFamily:     "'IBM Plex Sans', system-ui, sans-serif",
    monoFamily:     "'IBM Plex Mono', 'Courier New', monospace",
    headStyle:      'normal',
    labelTransform: 'uppercase',
    labelSpacing:   '0.08em',
    labelSize:      '10px',
    /** Objective modal head font — aligned to Claude Design export v1.0.0 */
    objHeadFamily:  "'Rubik', system-ui, sans-serif",
    /** Objective modal body font — aligned to Claude Design export v1.0.0 */
    objBodyFamily:  "'Rubik', system-ui, sans-serif",
  },
  motion: {
    enabled:       false,
    durationBase:  '150ms',
    durationEnter: '200ms',
    durationExit:  '120ms',
    easing:        'ease',
  },
};

export const PLAYFUL_TOKENS: SkinTokenSet = {
  colors: {
    bg:           '#f5efe5',
    surface:      '#fffdf8',
    surfaceRaised:'#fffdf8',
    surface2:     '#f7f0e4',
    ink:          '#2c2118',
    inkSoft:      '#806f5d',
    inkFaint:     '#b09a85',
    inkSubtle:    '#b09a85',
    line:         '#e7dccb',
    lineSoft:     '#ede3d4',
    accent:       '#d9743b',
    accentSoft:   '#fdf0e6',
    accentBright: '#e8924d',
    accentWarm:   '#d9743b',
    accentCool:   '#c4956a',
    good:         '#4f8a5b',
    goodSoft:     '#e8f4ea',
    warn:         '#c2691f',
    warnSoft:     '#fdf0e6',
  },
  radii: {
    base: '12px',
    lg:   '18px',
    xl:   '26px',
    full: '999px',
  },
  typography: {
    headFamily:     "'Cormorant Garamond', Georgia, serif",
    bodyFamily:     "'IBM Plex Sans', system-ui, sans-serif",
    monoFamily:     "'IBM Plex Mono', 'Courier New', monospace",
    headStyle:      'italic',
    labelTransform: 'none',
    labelSpacing:   'normal',
    labelSize:      '11px',
    /** Objective modal head font — aligned to Claude Design export v1.0.0 */
    objHeadFamily:  "'Manrope', system-ui, sans-serif",
    /** Objective modal body font — aligned to Claude Design export v1.0.0 */
    objBodyFamily:  "'Rubik', system-ui, sans-serif",
  },
  motion: {
    enabled:       true,
    durationBase:  '200ms',
    durationEnter: '280ms',
    durationExit:  '160ms',
    easing:        'cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
};

/** Lookup by tone key for convenience. */
export const TONE_TOKENS: Record<import('./types').Tone, SkinTokenSet> = {
  scientific: SCIENTIFIC_TOKENS,
  playful:    PLAYFUL_TOKENS,
};

/** Dark theme brand tokens from Claude Design export v1.0.0.
 *  Dark mode flips brand from teal to electric purple.
 *  See CONFLICTS.md #2 — not yet wired into SkinProvider. */
export const DARK_BRAND_TOKENS = {
  primary:            'hsl(264 85% 47%)',
  primaryForeground:  'hsl(210 40% 98%)',
  accent:             'hsl(264 85% 47%)',
  accentBright:       'hsl(271 100% 58%)',
  accentWarm:         'hsl(217 91% 52%)',
  accentCool:         'hsl(271 96% 57%)',
} as const;
