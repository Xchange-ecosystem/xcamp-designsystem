/** Pre-built SkinDefinition objects for all paradigm × tone combinations.
 *  Additional custom skins can be created by composing these building blocks.
 *  SKIN_REGISTRY is the lookup table used by useSkinStore in xcamp-foundation-0.2. */

import type { SkinDefinition, Paradigm, Tone }  from './types';
import { SCIENTIFIC_TOKENS, PLAYFUL_TOKENS }     from './tokens';

function makeSkin(
  paradigm: Paradigm,
  tone: Tone,
  supportedAltitudes: ReadonlyArray<0 | 1 | 2>,
  defaultAltitude: 0 | 1 | 2,
): SkinDefinition {
  return {
    id: `${paradigm}-${tone}`,
    config: {
      paradigm,
      tone,
      aiPersona: tone === 'playful' ? 'guide' : 'analyst',
    },
    tokens:            tone === 'scientific' ? SCIENTIFIC_TOKENS : PLAYFUL_TOKENS,
    supportedAltitudes,
    defaultAltitude,
  };
}

/** Platform paradigm — the current Xcamp shell.
 *  Sidebar, routes, panels, cards. Supports all three altitudes. */
export const PLATFORM_SCIENTIFIC = makeSkin('platform', 'scientific', [0, 1, 2], 1);
export const PLATFORM_PLAYFUL    = makeSkin('platform', 'playful',    [0, 1, 2], 1);

/** Companion paradigm — conversational-first.
 *  AI is the primary surface. Routes exist but are not exposed as menus.
 *  Altitude 2 (Deep) is attenuated: companion adapts to structured inline output. */
export const COMPANION_SCIENTIFIC = makeSkin('companion', 'scientific', [0, 1, 2], 0);
export const COMPANION_PLAYFUL    = makeSkin('companion', 'playful',    [0, 1, 2], 0);

/** Canvas paradigm — spatial, node-and-edge graph.
 *  No route tree. Altitude 0 lets Copilot arrange the canvas;
 *  altitude 2 is full manual arrangement. */
export const CANVAS_SCIENTIFIC = makeSkin('canvas', 'scientific', [0, 1, 2], 2);
export const CANVAS_PLAYFUL    = makeSkin('canvas', 'playful',    [0, 1, 2], 2);

/** The authoritative registry. Key is SkinDefinition.id. */
export const SKIN_REGISTRY: Readonly<Record<string, SkinDefinition>> = {
  [PLATFORM_SCIENTIFIC.id]:  PLATFORM_SCIENTIFIC,
  [PLATFORM_PLAYFUL.id]:     PLATFORM_PLAYFUL,
  [COMPANION_SCIENTIFIC.id]: COMPANION_SCIENTIFIC,
  [COMPANION_PLAYFUL.id]:    COMPANION_PLAYFUL,
  [CANVAS_SCIENTIFIC.id]:    CANVAS_SCIENTIFIC,
  [CANVAS_PLAYFUL.id]:       CANVAS_PLAYFUL,
};

/** Resolve a SkinDefinition from a stored SkinConfig.
 *  Falls back to PLATFORM_SCIENTIFIC if the id is not found. */
export function resolveSkin(config: import('./types').SkinConfig): SkinDefinition {
  const id = `${config.paradigm}-${config.tone}`;
  return SKIN_REGISTRY[id] ?? SKIN_REGISTRY['platform-scientific'];
}
