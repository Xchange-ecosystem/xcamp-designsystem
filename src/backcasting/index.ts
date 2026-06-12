// xcamp-designsystem/src/backcasting/index.ts
export * from './framework';

import type { BackcastingFramework } from './framework';
import frameworkJson from './frameworks/bpmo-proof@1.1.0.json';

export const BPMO_PROOF_FRAMEWORK = frameworkJson as BackcastingFramework;
