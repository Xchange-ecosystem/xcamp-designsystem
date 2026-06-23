/** Core skin type definitions for the Xcamp platform-wide skin system.
 *  A skin bundles a UX paradigm, a visual tone, and an AI persona.
 *  These three axes are independent of Altitude (info density / AI autonomy).
 *  SkinConfig is the minimal persisted shape stored in user_preferences.skin_config.
 *  SkinDefinition is the fully resolved shape resolved from the registry at runtime.
 */

export type Paradigm =
  | 'platform'    // Structured, navigational — sidebar, routes, panels (the current shell)
  | 'companion'   // Conversational-first — AI is the primary surface, routes are implicit
  | 'canvas';     // Spatial — objects as draggable nodes, relationships as edges, no route tree

export type Tone =
  | 'scientific'  // Precise, data-forward, low-motion, monospace figures, high contrast
  | 'playful';    // Warm, rounded, motion-on, serif headings, sentence-case labels

export type AIPersona =
  | 'analyst'       // Precise, structured, data-driven, low-affect. Default for Scientific tone.
  | 'guide'         // Warm, encouraging, growth-oriented. Default for Playful tone.
  | 'collaborator'; // Peer-level, lateral thinking, creative. Pairs with either tone.

/** The minimal shape persisted in user_preferences.skin_config (JSONB).
 *  This is what gets stored and loaded from Supabase. */
export interface SkinConfig {
  paradigm:  Paradigm;
  tone:      Tone;
  aiPersona: AIPersona;
}

export const SKIN_DEFAULTS: SkinConfig = {
  paradigm:  'platform',
  tone:      'scientific',
  aiPersona: 'analyst',
};

/** Full color token set for one tone. All values are hex strings. */
export interface SkinColorTokens {
  bg:           string;
  surface:      string;
  surfaceRaised:string;
  surface2:     string;
  ink:          string;
  inkSoft:      string;
  inkFaint:     string;
  inkSubtle:    string;
  line:         string;
  lineSoft:     string;
  accent:       string;
  accentSoft:   string;
  accentBright: string;
  accentWarm:   string;
  accentCool:   string;
  good:         string;
  goodSoft:     string;
  warn:         string;
  warnSoft:     string;
}

/** Full radius token set for one tone. Values are CSS strings e.g. "4px". */
export interface SkinRadiusTokens {
  base: string;
  lg:   string;
  xl:   string;
  full: string;
}

/** Full typography token set for one tone. */
export interface SkinTypographyTokens {
  headFamily:     string;
  bodyFamily:     string;
  monoFamily:     string;
  headStyle:      'normal' | 'italic';
  labelTransform: 'uppercase' | 'none';
  labelSpacing:   string; // e.g. "0.08em" or "normal"
  labelSize:      string; // e.g. "10px"
  /** Objective modal heading font — from Claude Design export */
  objHeadFamily:  string;
  /** Objective modal body font — from Claude Design export */
  objBodyFamily:  string;
}

/** Motion preferences for one tone. */
export interface SkinMotionTokens {
  enabled:         boolean;
  durationBase:    string; // e.g. "150ms"
  durationEnter:   string;
  durationExit:    string;
  easing:          string;
}

/** The complete token bundle for one tone. */
export interface SkinTokenSet {
  colors:     SkinColorTokens;
  radii:      SkinRadiusTokens;
  typography: SkinTypographyTokens;
  motion:     SkinMotionTokens;
}

/** Gravity tokens are invariant across all skins and tones.
 *  Binding moments (Lock value, Formalise, Complete & settle) always
 *  render with these tokens, overriding any active skin. */
export interface GravityTokens {
  bg:     string;
  border: string;
  ink:    string;
  soft:   string;
}

/** The fully-resolved skin definition. This is NOT stored in the DB —
 *  it is looked up from SKIN_REGISTRY using the SkinConfig key at runtime. */
export interface SkinDefinition {
  /** Stable identifier, format: "{paradigm}-{tone}" */
  id:                string;
  config:            SkinConfig;
  tokens:            SkinTokenSet;
  /** Which altitude values (0 | 1 | 2) are meaningful in this paradigm.
   *  The runtime clamps the active altitude to this set on paradigm switch. */
  supportedAltitudes: ReadonlyArray<0 | 1 | 2>;
  /** The altitude applied when the user first switches into this paradigm. */
  defaultAltitude:   0 | 1 | 2;
}
