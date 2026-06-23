/**
 * Xcamp-Nox Design System — JavaScript Token Access Module
 * Runtime access to design tokens with helper functions
 */

const TOKENS = {
  version: '1.0.0',
  name: 'Xcamp-Nox Design System',
  description: 'Color, spacing, typography, and motion tokens for Xcamp (light) and Nox (dark) themes',

  themes: {
    light: {
      name: 'Xcamp',
      colors: {
        surfaces: {
          background: 'hsl(0 0% 97%)',
          foreground: 'hsl(220 13% 10%)',
          surface: 'hsl(0 0% 100%)',
          surfaceRaised: 'hsl(0 0% 100%)',
          card: 'hsl(0 0% 100%)',
          cardForeground: 'hsl(220 13% 10%)',
          popover: 'hsl(0 0% 100%)',
          popoverForeground: 'hsl(220 13% 10%)',
          border: 'hsl(220 13% 91%)',
          input: 'hsl(220 13% 91%)',
          ring: 'hsl(168 72% 42%)',
        },
        text: {
          primary: 'hsl(220 13% 10%)',
          muted: 'hsl(220 9% 46%)',
          subtle: 'hsl(220 6% 64%)',
        },
        brand: {
          primary: 'hsl(168 72% 42%)',
          primaryForeground: 'hsl(0 0% 100%)',
          accent: 'hsl(168 72% 42%)',
          accentBright: 'hsl(172 65% 51%)',
          accentWarm: 'hsl(190 57% 47%)',
          accentCool: 'hsl(170 70% 59%)',
        },
        semantic: {
          success: 'hsl(142 76% 36%)',
          warning: 'hsl(38 92% 50%)',
          danger: 'hsl(0 84% 60%)',
          info: 'hsl(213 93% 68%)',
        },
        purple: {
          base: 'hsl(262 83% 58%)',
          deep: 'hsl(294 60% 31%)',
          light: 'hsl(269 65% 72%)',
          surface: 'hsl(269 65% 95%)',
        },
        progress: {
          open: 'hsl(220 13% 82%)',
          active: 'hsl(38 92% 50%)',
          done: 'hsl(160 84% 39%)',
        },
        gravity: {
          background: '#fff8f0',
          border: '#b25a1f',
          ink: '#5c2400',
          soft: '#8b4513',
        },
      },
    },
    dark: {
      name: 'Nox',
      colors: {
        surfaces: {
          background: 'hsl(222 47% 8%)',
          foreground: 'hsl(210 40% 98%)',
          surface: 'hsl(222 47% 11%)',
          surfaceRaised: 'hsl(222 47% 13%)',
          card: 'hsl(222 47% 11%)',
          cardForeground: 'hsl(210 40% 98%)',
          popover: 'hsl(222 47% 11%)',
          popoverForeground: 'hsl(210 40% 98%)',
          border: 'hsl(217 33% 18%)',
          input: 'hsl(217 33% 18%)',
          ring: 'hsl(168 72% 42%)',
        },
        text: {
          primary: 'hsl(210 40% 98%)',
          muted: 'hsl(215 20% 65%)',
          subtle: 'hsl(215 15% 50%)',
        },
        brand: {
          primary: 'hsl(264 85% 47%)',
          primaryForeground: 'hsl(210 40% 98%)',
          accent: 'hsl(264 85% 47%)',
          accentBright: 'hsl(271 100% 58%)',
          accentWarm: 'hsl(217 91% 52%)',
          accentCool: 'hsl(271 96% 57%)',
        },
        semantic: {
          success: 'hsl(142 71% 45%)',
          warning: 'hsl(38 92% 50%)',
          danger: 'hsl(0 72% 51%)',
          info: 'hsl(199 89% 48%)',
        },
        purple: {
          base: 'hsl(271 96% 57%)',
          deep: 'hsl(294 60% 31%)',
          light: 'hsl(269 65% 72%)',
          surface: 'hsl(269 65% 95%)',
        },
        progress: {
          open: 'hsl(217 33% 28%)',
          active: 'hsl(264 85% 47%)',
          done: 'hsl(217 91% 52%)',
        },
        gravity: {
          background: '#fff8f0',
          border: '#b25a1f',
          ink: '#5c2400',
          soft: '#8b4513',
        },
      },
    },
  },

  altitude: {
    altitude0: {
      name: 'Focus (AI-first)',
      accent: 'hsl(168 55% 56%)',
      accentForeground: 'hsl(0 0% 100%)',
    },
    altitude1: {
      name: 'Balanced (AI-assisted)',
      accent: 'hsl(188 57% 47%)',
      accentForeground: 'hsl(0 0% 100%)',
    },
    altitude2: {
      name: 'Deep Dive (full control)',
      accent: 'hsl(270 67% 72%)',
      accentForeground: 'hsl(220 13% 10%)',
    },
  },

  objectiveSkins: {
    scientific: {
      name: 'Scientific',
      accent: 'hsl(213 70% 48%)',
      accentForeground: 'hsl(0 0% 100%)',
      radius: '5px',
      fontHead: "'Rubik', system-ui, sans-serif",
      fontBody: "'Rubik', system-ui, sans-serif",
      motionEnabled: false,
    },
    playful: {
      name: 'Playful',
      accent: 'hsl(22 80% 58%)',
      accentForeground: 'hsl(0 0% 100%)',
      radius: '14px',
      fontHead: "'Manrope', system-ui, sans-serif",
      fontBody: "'Rubik', system-ui, sans-serif",
      motionEnabled: true,
    },
  },

  spacing: {
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
  },

  radius: {
    default: '0.75rem',
    lg: '0.75rem',
    md: '0.5rem',
    sm: '0.375rem',
    pill: '999px',
    progress: '0.25rem',
  },

  shadows: {
    card: '0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.04)',
    dropdown: '0 4px 16px 0 rgb(0 0 0 / 0.10)',
  },

  layout: {
    sidebarWidth: '240px',
    heroHeight: '180px',
  },

  motion: {
    scientific: {
      enabled: false,
      duration: '150ms',
      enter: '200ms',
      exit: '120ms',
      easing: 'ease',
    },
    playful: {
      enabled: true,
      duration: '200ms',
      enter: '280ms',
      exit: '160ms',
      easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    },
  },
};

/**
 * Get a token value by path
 * @param {string} path - Dot-separated path, e.g., 'spacing.4', 'colors.brand.primary'
 * @param {object} options - Optional overrides for theme, altitude, skin
 * @returns {string|object|undefined}
 */
function getToken(path, options = {}) {
  const { theme = 'light', altitude = 'altitude1', skin = 'scientific' } = options;

  const parts = path.split('.');
  let current = TOKENS;

  for (const part of parts) {
    if (current[part] !== undefined) {
      current = current[part];
    } else if (part === 'colors' && theme === 'dark') {
      // Special case: colors path uses theme
      current = TOKENS.themes.dark.colors;
      for (let i = parts.indexOf('colors') + 1; i < parts.length; i++) {
        current = current[parts[i]];
      }
      return current;
    } else if (part === 'colors' && theme === 'light') {
      current = TOKENS.themes.light.colors;
      for (let i = parts.indexOf('colors') + 1; i < parts.length; i++) {
        current = current[parts[i]];
      }
      return current;
    } else {
      return undefined;
    }
  }

  return current;
}

/**
 * Get all tokens in a category
 * @param {string} category - 'spacing', 'radius', 'shadows', 'layout', 'motion', 'altitude', 'objectiveSkins'
 * @returns {object}
 */
function getAllTokens(category) {
  return TOKENS[category] || {};
}

/**
 * Get color tokens for a specific theme
 * @param {string} theme - 'light' or 'dark'
 * @returns {object}
 */
function getThemeColors(theme = 'light') {
  return TOKENS.themes[theme]?.colors || {};
}

/**
 * Get motion config for a skin type
 * @param {string} skinType - 'scientific' or 'playful'
 * @returns {object}
 */
function getMotionConfig(skinType = 'scientific') {
  const skin = TOKENS.objectiveSkins[skinType];
  const motionProfile = TOKENS.motion[skinType];
  return { ...skin, ...motionProfile };
}

/**
 * Convert CSS HSL channels to standard hsl() syntax
 * Used to convert token HSL channels like "168 72% 42%" to "hsl(168 72% 42%)"
 * @param {string} hslChannels - HSL channels, e.g., "168 72% 42%"
 * @returns {string} - hsl() string
 */
function hslChannelsToHsl(hslChannels) {
  return `hsl(${hslChannels})`;
}

/**
 * Get all available themes
 * @returns {string[]}
 */
function getAvailableThemes() {
  return Object.keys(TOKENS.themes);
}

/**
 * Get all available altitudes
 * @returns {string[]}
 */
function getAvailableAltitudes() {
  return Object.keys(TOKENS.altitude);
}

/**
 * Get all available objective skins
 * @returns {string[]}
 */
function getAvailableSkins() {
  return Object.keys(TOKENS.objectiveSkins);
}

// Export for CommonJS
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    TOKENS,
    getToken,
    getAllTokens,
    getThemeColors,
    getMotionConfig,
    hslChannelsToHsl,
    getAvailableThemes,
    getAvailableAltitudes,
    getAvailableSkins,
  };
}

// Export for ES modules / browser global
if (typeof window !== 'undefined') {
  window.XcampTokens = {
    TOKENS,
    getToken,
    getAllTokens,
    getThemeColors,
    getMotionConfig,
    hslChannelsToHsl,
    getAvailableThemes,
    getAvailableAltitudes,
    getAvailableSkins,
  };
}
