import { SkinDefinition } from './types'
import { GRAVITY } from './gravity'

/**
 * CSS variable names written to the target element.
 * All --skin-* vars are overridden per skin.
 * --gravity-* vars are invariant and always written from GRAVITY.
 */
const SKIN_VAR_MAP = {
  // Colors
  'bg':          '--skin-bg',
  'surface':        '--skin-surface',
  'surfaceRaised':  '--skin-surface-raised',
  'surface2':       '--skin-surface2',
  'ink':            '--skin-ink',
  'inkSoft':        '--skin-ink-soft',
  'inkFaint':       '--skin-ink-faint',
  'inkSubtle':      '--skin-ink-subtle',
  'line':           '--skin-line',
  'lineSoft':       '--skin-line-soft',
  'accent':         '--skin-accent',
  'accentSoft':     '--skin-accent-soft',
  'accentBright':   '--skin-accent-bright',
  'accentWarm':     '--skin-accent-warm',
  'accentCool':     '--skin-accent-cool',
  'good':           '--skin-good',
  'goodSoft':       '--skin-good-soft',
  'warn':           '--skin-warn',
  'warnSoft':       '--skin-warn-soft',
  // Radii
  'base':        '--skin-radius',
  'lg':          '--skin-radius-lg',
  'xl':          '--skin-radius-xl',
  'full':        '--skin-radius-full',
  // Typography
  'headFamily':     '--skin-font-head',
  'bodyFamily':     '--skin-font-body',
  'monoFamily':     '--skin-font-mono',
  'headStyle':      '--skin-head-style',
  'labelTransform': '--skin-label-transform',
  'labelSpacing':   '--skin-label-spacing',
  'labelSize':      '--skin-label-size',
  'objHeadFamily':  '--skin-font-obj-head',
  'objBodyFamily':  '--skin-font-obj-body',
  // Motion
  'durationBase':  '--skin-duration',
  'durationEnter': '--skin-duration-enter',
  'durationExit':  '--skin-duration-exit',
  'easing':        '--skin-easing',
} as const

/**
 * Apply a resolved SkinDefinition as CSS custom properties on an element.
 * Defaults to document.documentElement when no element is provided.
 *
 * Also writes --gravity-* tokens unconditionally from the canonical GRAVITY
 * object (invariant across all skins).
 *
 * Safe to call server-side: no-ops if document is not defined.
 */
export function applySkin(
  skin: SkinDefinition,
  element?: HTMLElement
): void {
  if (typeof document === 'undefined') return
  const el = element ?? document.documentElement
  const { colors, radii, typography, motion } = skin.tokens

  // Skin tokens
  const flat: Record<string, string | number | boolean> = {
    ...colors, ...radii, ...typography, ...motion
  }
  for (const [key, cssVar] of Object.entries(SKIN_VAR_MAP)) {
    const value = flat[key]
    if (value !== undefined) el.style.setProperty(cssVar, String(value))
  }

  // Motion enabled flag
  el.style.setProperty(
    '--skin-motion',
    motion.enabled ? '1' : '0'
  )

  // Gravity tokens — invariant, always written
  el.style.setProperty('--gravity-bg',     GRAVITY.bg)
  el.style.setProperty('--gravity-border', GRAVITY.border)
  el.style.setProperty('--gravity-ink',    GRAVITY.ink)
  el.style.setProperty('--gravity-soft',   GRAVITY.soft)

  // Paradigm + tone attributes for CSS attribute selectors
  el.setAttribute('data-skin-paradigm', skin.config.paradigm)
  el.setAttribute('data-skin-tone',     skin.config.tone)
}
