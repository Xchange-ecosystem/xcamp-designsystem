/** Gravity tokens — invariant across all skins, tones, and altitudes.
 *  Import and apply these whenever rendering a binding moment:
 *  value lock, formalise, complete & settle, owner override.
 *  These tokens are never overridden by the active skin. */

import type { GravityTokens } from './types';

export const GRAVITY: GravityTokens = {
  bg:     '#fff8f0',
  border: '#b25a1f',
  ink:    '#5c2400',
  soft:   '#8b4513',
};
