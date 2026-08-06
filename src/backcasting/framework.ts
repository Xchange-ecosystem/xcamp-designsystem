// xcamp-designsystem/src/backcasting/framework.ts
// Canonical types for the pluggable backcasting framework system.
// Source of truth — do not edit generated copies.

// ─── Primitive enums ──────────────────────────────────────────────────────────

export type ProofType =
  | 'strategy'
  | 'validation'
  | 'capability'
  | 'relationship'
  | 'artifact'
  | 'traction';

export type Stage = 'idea' | 'pre_seed' | 'seed' | 'growth';

export type ProofSource = 'framework' | 'ai';

export type NoteOutputType = 'note' | 'insight' | 'context';

export type ArchetypeSlug =
  | 'saas'
  | 'marketplace'
  | 'fund_impact'
  | 'services'
  | 'hardware'
  | 'nonprofit'
  | 'research';

// ─── Taxonomy types ───────────────────────────────────────────────────────────

export interface ProofPoint {
  label: string;
  type: ProofType;
  stage: Stage;
  early_signal?: boolean;
}

export interface ProofTypeDefinition {
  type: ProofType;
  kpi: boolean;
  demonstrates: string;
}

export interface FrameworkLevel {
  slug: string;
  label: string;
  description?: string;
}

export interface FrameworkDimension {
  slug: string;
  label: string;
  question: string;
}

export interface FrameworkCategory {
  slug: string;
  dimension: string;
  label: string;
  scope: string;
  anchors: string[];
  proof_points: ProofPoint[];
}

export interface FrameworkArchetype {
  slug: ArchetypeSlug;
  label: string;
  example?: string;
  emphasis?: Record<string, number>;
  remove_categories?: string[];
  add_categories?: FrameworkCategory[];
  override_categories?: Record<string, Partial<Pick<FrameworkCategory, 'label' | 'scope'>>>;
  signature_metrics?: string[];
}

// ─── Proof quality model types ────────────────────────────────────────────────

export interface ProofQualitySignal {
  sources: string[];
  formula: string;
  rationale: string;
  weight: number;
  [key: string]: unknown;
}

export interface ProofQualityModel {
  _description: string;
  delivery_gate: {
    field: string;
    type: string;
    rule: string;
    rule_done: string;
  };
  signals: {
    content: ProofQualitySignal;
    artifact: ProofQualitySignal;
    links: ProofQualitySignal;
  };
  base_formula: string;
  early_signal_multiplier: {
    value: number;
    condition: string;
    rationale: string;
  };
  final_formula: string;
  cache: {
    location: string;
    invalidation: string;
    read_policy: string;
  };
  additional_index: string;
}

// ─── Generation types ─────────────────────────────────────────────────────────

export interface DeterminismGuardrail {
  description: string;
  enforcement: string;
  fields_overwritten: string[];
  match_key: string[];
}

export interface RepairPolicy {
  on_schema_violation: string;
  max_retries: number;
  on_exhausted: string;
}

export interface ContentModel {
  description: string;
  pure_text_creation_stays_direct: string[];
  routes_through_vox: string[];
  reference_content_source: {
    supabase_table: string;
    entity_types: string[];
    access_open: string;
    access_licensed: string;
    domain_scoping: string;
    first_seed: string;
    vox_source_type: string;
  };
}

export interface GenerationConfig {
  interpretation_prompt: string;
  generation_prompt: string;
  output_schema: Record<string, unknown>;
  default_proof_density: number;
  target_stage_param: string;
  template_variables: {
    interpretation: Record<string, string>;
    generation: Record<string, string>;
  };
  determinism_guardrail: DeterminismGuardrail;
  repair_policy: RepairPolicy;
  content_model: ContentModel;
}

// ─── Materialization types ────────────────────────────────────────────────────

export interface ProofNoteDetail {
  kind: 'proof';
  proof_type: ProofType;
  stage: Stage;
  early_signal: boolean;
  dimension: string;
  category: string;
  expected: true;
  source: ProofSource;
  framework_slug: string;
  framework_version: string;
  pq_cache: number | null;
  pq_at: string | null;
}

export interface MaterializationConfig {
  project_from: 'root';
  objective_from: string;
  proof_task_from: string;
  tag_fields: Record<string, string>;
  proof_metadata_target: string;
  proof_metadata_shape: Partial<ProofNoteDetail> & Record<string, unknown>;
  rpc_map: Record<string, string>;
  idempotency_key: string;
}

// ─── Qualify integration types ────────────────────────────────────────────────

export interface CategoryScoreResult {
  coverage_score: number;
  quality_score: number;
  category_score: number;
  certainty: number;
}

export interface DimensionScoreResult {
  dimension: string;
  score: number;
  certainty: number;
  categories: Record<string, CategoryScoreResult>;
}

export interface GapEntry {
  category: string;
  dimension: string;
  coverage_score: number;
  missing_proof_types: ProofType[];
  template_expected: ProofPoint[];
}

export interface QualificationRunResult {
  overall_similarity: number;
  overall_certainty: number;
  dimensions: DimensionScoreResult[];
  gaps?: GapEntry[];
  shared_strengths?: string[];
}

// ─── Top-level BackcastingFramework ──────────────────────────────────────────

export interface BackcastingFramework {
  framework_slug: string;
  framework_version: string;
  name: string;
  description: string;

  structure: {
    levels: FrameworkLevel[];
    objective_level: string;
    proof_level: string;
    depth_note?: string;
  };

  proof_model: {
    types: ProofTypeDefinition[];
    stages: Stage[];
    stage_ordering: Record<string, number>;
    ladder_note?: string;
  };

  taxonomy: {
    dimensions: FrameworkDimension[];
    base_categories: FrameworkCategory[];
    archetypes: FrameworkArchetype[];
  };

  generation: GenerationConfig;

  archetype_detection: {
    method: string;
    description: string;
    confidence_threshold_for_auto_confirm: number;
    confirm_card_type: string;
  };

  stage_detection: {
    method: string;
    description: string;
    selected_parameters_key: string;
    confirmation_ui: string;
  };

  materialization: MaterializationConfig;

  qualify_integration: {
    description: string;
    proof_quality_model: ProofQualityModel;
    category_scoring: Record<string, unknown>;
    proof_read_query: {
      table: string;
      filter: string;
      join_for_quality?: string[];
      indexes_required: string[];
    };
  };

  versioning: {
    policy: string;
    description: string;
  };
}

// ─── Engine-internal resolved category (used by backend + Vox) ───────────────
// Exported from designsystem so both repos import from the same source.

export interface ResolvedCategory {
  slug: string;
  dimension: string;
  label: string;
  scope: string;
  proof_points: ProofPoint[];
}

// ─── Backcaster version output (stored in backcaster_versions.output_json) ────

export interface ProofTaskOutput {
  title: string;
  proof_type: ProofType;
  stage: Stage;
  early_signal?: boolean;
  source: ProofSource;
}

export interface NoteOutput {
  note_type: NoteOutputType;
  title: string;
  body_markdown?: string;
}

export interface FrameworkOutputNode {
  id: string;
  node_type: string;
  title: string;
  description: string;
  children?: FrameworkOutputNode[];
  success_criteria?: string;
  risks?: string;
  // Framework fields — present when session has framework_slug
  dimension?: string;
  category?: string;
  proof_tasks?: ProofTaskOutput[];
  notes?: NoteOutput[];
}

export interface FrameworkOutputTree {
  title: string;
  summary: string;
  mode: string;
  parameters: Record<string, unknown>;
  root_nodes: FrameworkOutputNode[];
  // Framework provenance — present when session has framework_slug
  framework?: {
    slug: string;
    version: string;
    archetype?: ArchetypeSlug;
  };
}

// ─── Interpretation output (stored in backcaster_sessions.interpreted_input) ──

export interface BackcasterInterpretation {
  project_name: string;
  archetype_slug: ArchetypeSlug;
  archetype_confidence: number;
  archetype_rationale: string;
  stage: Stage;
  stage_confidence: number;
  stage_rationale: string;
  value_proposition: string;
  target_customer: string;
  key_risks: string[];
  dimension_emphasis: {
    note: string;
    overweight: string[];
    underweight: string[];
  };
  constraints: string;
}
