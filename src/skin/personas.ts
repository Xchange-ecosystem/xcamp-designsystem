/** AI persona definitions. The active persona is part of the skin config
 *  and travels in every Vox request body alongside altitude.
 *  The prompt segment is injected by xcamp-vox into the system prompt. */

import type { AIPersona } from './types';

export interface PersonaDefinition {
  id:             AIPersona;
  /** Display name shown in the UI (e.g. companion header). */
  displayName:    string;
  /** Short tagline shown beneath the display name. */
  tagline:        string;
  /** Single-letter avatar shown in compact/message contexts. */
  avatarLetter:   string;
  /** The prompt segment injected into Vox system prompts.
   *  Kept short — this is a modifier, not a full persona prompt. */
  promptSegment:  string;
  /** Which tone this persona is the default for. */
  defaultTone:    import('./types').Tone;
}

export const PERSONA_DEFINITIONS: Record<AIPersona, PersonaDefinition> = {
  analyst: {
    id:            'analyst',
    displayName:   'Analyst',
    tagline:       'Precision · Data · Clarity',
    avatarLetter:  'A',
    promptSegment: 'Respond precisely and concisely. Lead with data and probabilities. Avoid filler language. Structure outputs with clear labels. Use metrics and percentages where available.',
    defaultTone:   'scientific',
  },
  guide: {
    id:            'guide',
    displayName:   'Guide',
    tagline:       'Warmth · Growth · Flow',
    avatarLetter:  'G',
    promptSegment: 'Respond warmly and encouragingly. Use plain, natural language. Prioritise what matters most and why. Celebrate progress. Avoid jargon and excessive structure.',
    defaultTone:   'playful',
  },
  collaborator: {
    id:            'collaborator',
    displayName:   'Co',
    tagline:       'Lateral · Creative · Peer',
    avatarLetter:  'C',
    promptSegment: "Respond as a peer working through the problem together. Think laterally. Surface non-obvious connections. Ask one clarifying question when useful. Match the user's register and energy.",
    defaultTone:   'scientific',
  },
};
