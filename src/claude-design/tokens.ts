/**
 * Xcamp-Nox Design System — TypeScript Token Definitions
 * Generated from the design system. Use these types to enforce token usage
 * in your React/TypeScript components.
 */

// ============================================================================
// COLOR TOKENS
// ============================================================================

export interface SurfaceColors {
  background: string;
  foreground: string;
  surface: string;
  surfaceRaised: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  border: string;
  input: string;
  ring: string;
}

export interface TextColors {
  primary: string;
  muted: string;
  subtle: string;
}

export interface BrandColors {
  primary: string;
  primaryForeground: string;
  accent: string;
  accentBright: string;
  accentWarm: string;
  accentCool: string;
}

export interface SemanticColors {
  success: string;
  warning: string;
  danger: string;
  info: string;
}

export interface PurpleColors {
  base: string;
  deep: string;
  light: string;
  surface: string;
}

export interface ProgressColors {
  open: string;
  active: string;
  done: string;
}

export interface GravityColors {
  background: string;
  border: string;
  ink: string;
  soft: string;
}

export interface ThemeColors {
  surfaces: SurfaceColors;
  text: TextColors;
  brand: BrandColors;
  semantic: SemanticColors;
  purple: PurpleColors;
  progress: ProgressColors;
  gravity: GravityColors;
}

export type ThemeName = 'light' | 'dark';

export interface Theme {
  name: 'Xcamp' | 'Nox';
  colors: ThemeColors;
}

// ============================================================================
// ALTITUDE TOKENS
// ============================================================================

export type AltitudeLevel = 'altitude0' | 'altitude1' | 'altitude2';

export interface AltitudeToken {
  name: 'Focus (AI-first)' | 'Balanced (AI-assisted)' | 'Deep Dive (full control)';
  accent: string;
  accentForeground: string;
}

export type AltitudeTokens = Record<AltitudeLevel, AltitudeToken>;

// ============================================================================
// OBJECTIVE SKIN TOKENS
// ============================================================================

export type ObjectiveSkinType = 'scientific' | 'playful';

export interface ObjectiveSkin {
  name: string;
  accent: string;
  accentForeground: string;
  radius: string;
  fontHead: string;
  fontBody: string;
  motionEnabled: boolean;
}

export type ObjectiveSkins = Record<ObjectiveSkinType, ObjectiveSkin>;

// ============================================================================
// SPACING TOKENS
// ============================================================================

export interface SpacingScale {
  1: string; // 4px
  2: string; // 8px
  3: string; // 12px
  4: string; // 16px
  5: string; // 20px
  6: string; // 24px
  8: string; // 32px
  10: string; // 40px
}

// ============================================================================
// RADIUS TOKENS
// ============================================================================

export interface RadiusTokens {
  default: string;
  lg: string;
  md: string;
  sm: string;
  pill: string;
  progress: string;
}

// ============================================================================
// SHADOW TOKENS
// ============================================================================

export interface ShadowTokens {
  card: string;
  dropdown: string;
}

// ============================================================================
// LAYOUT TOKENS
// ============================================================================

export interface LayoutTokens {
  sidebarWidth: string;
  heroHeight: string;
}

// ============================================================================
// MOTION TOKENS
// ============================================================================

export interface MotionConfig {
  enabled: boolean;
  duration: string;
  enter: string;
  exit: string;
  easing: string;
}

export interface MotionTokens {
  scientific: MotionConfig;
  playful: MotionConfig;
}

// ============================================================================
// COMPLETE TOKEN SYSTEM
// ============================================================================

export interface DesignTokens {
  version: string;
  name: string;
  description: string;
  themes: Record<ThemeName, Theme>;
  altitude: AltitudeTokens;
  objectiveSkins: ObjectiveSkins;
  spacing: SpacingScale;
  radius: RadiusTokens;
  shadows: ShadowTokens;
  layout: LayoutTokens;
  motion: MotionTokens;
}

// ============================================================================
// UTILITY TYPES FOR COMPONENT PROPS
// ============================================================================

export type ColorToken = keyof ThemeColors['surfaces'] | keyof ThemeColors['text'] | keyof BrandColors;

export type SpacingToken = keyof SpacingScale;

export type RadiusToken = keyof RadiusTokens;

export type ThemeMode = 'light' | 'dark';

export interface ThemeContextValue {
  mode: ThemeMode;
  altitude: AltitudeLevel;
  objectiveSkin: ObjectiveSkinType;
  setMode: (mode: ThemeMode) => void;
  setAltitude: (altitude: AltitudeLevel) => void;
  setObjectiveSkin: (skin: ObjectiveSkinType) => void;
}

// ============================================================================
// REACT COMPONENT HELPER TYPES
// ============================================================================

export interface StyledComponentProps {
  /** Theme mode override (default: inherited from context) */
  theme?: ThemeMode;
  /** Altitude level override (default: inherited from context) */
  altitude?: AltitudeLevel;
  /** Objective skin override (default: inherited from context) */
  skin?: ObjectiveSkinType;
}

export interface BaseComponentProps extends StyledComponentProps {
  /** CSS class name */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
  /** Data attributes for testing */
  'data-testid'?: string;
}

// ============================================================================
// PREDEFINED CONSTANTS
// ============================================================================

export const THEME_MODES = ['light', 'dark'] as const;
export const ALTITUDE_LEVELS = ['altitude0', 'altitude1', 'altitude2'] as const;
export const OBJECTIVE_SKINS = ['scientific', 'playful'] as const;

export const ALTITUDE_LABELS: Record<AltitudeLevel, string> = {
  altitude0: 'Focus (AI-first)',
  altitude1: 'Balanced (AI-assisted)',
  altitude2: 'Deep Dive (full control)',
};

export const SKIN_LABELS: Record<ObjectiveSkinType, string> = {
  scientific: 'Scientific',
  playful: 'Playful',
};
