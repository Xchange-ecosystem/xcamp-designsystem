/** Gravity tokens — invariant across all skins, tones, and altitudes.
 *  Import and apply these whenever rendering a binding moment:
 *  value lock, formalise, complete & settle, owner override.
 *  These tokens are never overridden by the active skin. */

import type { GravityTokens } from './types';

export const GRAVITY: GravityTokens = {
  bg:     '#f5eefc',
  border: '#8b3dd9',
  ink:    '#260d40',
  soft:   '#612c96',
};
