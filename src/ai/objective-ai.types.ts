/**
 * Shared AI contract types for the Xcamp platform.
 * Consumed by: Vox routes (emit), integration executor (runs), Lovable (renders).
 * Pure types — no runtime side effects.
 */

import type { AIPersona } from '../skin/types';
export type { AIPersona };

/* ---------- CollabRole ----------
   Canonical objective collaboration role union.
   NOTE: xcamp-foundation should re-export this from @xchange/ui rather than
   maintaining a second definition. */
export type CollabRole = 'creator' | 'manager' | 'editor' | 'viewer';

/* ---------- Card kinds ---------- */
export const AI_CARD_KINDS = [
  'update', 'metric', 'opportunity', 'web_result',
  'urgency', 'celebration', 'content', 'action_item',
] as const;
export type AICardKind = (typeof AI_CARD_KINDS)[number];

/* ---------- Write tools ---------- */
export const AI_WRITE_TOOLS = [
  'create_task', 'complete_task', 'assign_user', 'add_note',
  'add_attachment', 'set_objective_fields', 'link_notes',
  // lifecycle tools
  'promote_to_agreement',
  'accept_agreement',
  'initiate_completion',
  'record_completion_decision',
] as const;
export type AIWriteTool = (typeof AI_WRITE_TOOLS)[number];

/* ---------- Per-tool payloads ----------
   Field names are DB/RPC-aligned (snake_case) so the executor maps 1:1
   to Supabase RPC params with no translation layer. */
export interface CreateTaskPayload {
  title: string;
  body_markdown?: string;
  start_date?: string;            // ISO date
  end_date?: string;
  assignee_central_ids?: string[];
}
export interface CompleteTaskPayload {
  task_note_id: string;
  done: boolean;
}
export interface AssignUserPayload {
  scope: 'objective' | 'task';
  target_id: string;              // objective_id or task_note_id
  central_id?: string;            // existing member
  email?: string;                 // present (no central_id) => send invitation
  role: CollabRole;
}
export interface AddNotePayload {
  note_type: 'note' | 'proof' | 'reference';
  title: string;
  body_markdown?: string;
  link_to_task_note_id?: string;  // => note_links edge to a task note
}
export interface AddAttachmentPayload {
  entity_table: 'notes' | 'objectives';
  entity_id: string;
  attachment_id?: string;         // already uploaded
  upload_ref?: string;            // client-side handle pending upload
  label?: string;
}
export interface SetObjectiveFieldsPayload {
  title?: string;
  goal?: string;
  definition_of_done?: string;
  start_date?: string;
  end_date?: string;
  dimension?: string;
  category?: string;
  tags?: string[];
}
export interface LinkNotesPayload {
  from_note_id: string;
  to_note_id: string;
  link_type: string;
}

/* ---------- Lifecycle payload interfaces ---------- */
export interface PromoteToAgreementPayload {
  contract_title: string;
  contract_text: string;
  idempotency_key: string; // client generates: `${objective_id}-promote-${Date.now()}`
}
export interface AcceptAgreementPayload {
  assignment_id: string;   // uuid of the specific assignment being accepted
}
export interface InitiateCompletionPayload {
  deadline_hours?: number; // default 72 if omitted
}
export interface RecordCompletionDecisionPayload {
  decision: 'confirmed' | 'dissented';
  note?: string;
}

/* ---------- Proposal (discriminated on `tool`) ---------- */
interface AIProposalBase {
  objective_id: string;
  rationale?: string;
  requires_reconfirmation?: boolean;             // binding-field change in agreement mode
  preview?: { before?: unknown; after?: unknown };
}
export type AIProposal =
  | (AIProposalBase & { tool: 'create_task';          payload: CreateTaskPayload })
  | (AIProposalBase & { tool: 'complete_task';        payload: CompleteTaskPayload })
  | (AIProposalBase & { tool: 'assign_user';          payload: AssignUserPayload })
  | (AIProposalBase & { tool: 'add_note';             payload: AddNotePayload })
  | (AIProposalBase & { tool: 'add_attachment';       payload: AddAttachmentPayload })
  | (AIProposalBase & { tool: 'set_objective_fields'; payload: SetObjectiveFieldsPayload })
  | (AIProposalBase & { tool: 'link_notes';           payload: LinkNotesPayload })
  | (AIProposalBase & { tool: 'promote_to_agreement';        payload: PromoteToAgreementPayload })
  | (AIProposalBase & { tool: 'accept_agreement';           payload: AcceptAgreementPayload })
  | (AIProposalBase & { tool: 'initiate_completion';        payload: InitiateCompletionPayload })
  | (AIProposalBase & { tool: 'record_completion_decision'; payload: RecordCompletionDecisionPayload });

/* ---------- Card ---------- */
export interface AICardRef { label: string; url: string; }
export interface AICard {
  id: string;
  kind: AICardKind;
  title: string;
  body?: string;            // markdown
  proposal?: AIProposal;    // present on action_item cards
  refs?: AICardRef[];
  dismissible: boolean;
  confirmable: boolean;
  is_gravity?: boolean;     // true for promote_to_agreement and initiate_completion cards
}

/* ---------- Conversational route envelopes ----------
   Shared by the integration client callers and the Vox routes. */
export type ContextScope = 'project' | 'organization' | 'tenant';
export type Altitude = 0 | 1 | 2;

export interface AttachmentInput {
  name: string; mime: string; url?: string; base64?: string;
}

export interface AnswerWithContextRequest {
  message: string;
  attachments?: AttachmentInput[];
  objective_id: string;
  project_id: string;
  tenant_id: string;
  altitude: Altitude;
  aiPersona?: AIPersona;          // matches the field name read by Vox (Session 4b)
  context_scope?: ContextScope;   // default 'project'
}
export interface AnswerWithContextResponse {
  reply_markdown: string;
  cards: AICard[];
  used_context?: { task_ids?: string[]; note_ids?: string[]; related_sources?: string[] };
}

export interface ExtractToObjectiveRequest {
  objective_id: string;
  project_id: string;
  tenant_id: string;
  altitude: Altitude;
  source: {
    type: 'chat' | 'attachment';
    text?: string;
    attachment?: AttachmentInput;
  };
}
export interface ExtractToObjectiveResponse {
  cards: AICard[];          // action_item cards carrying AIProposal
  summary_markdown?: string;
}

// ─── Focus FAB contracts ──────────────────────────────────────────────────────

export type FocusSignalSource =
  | 'notification'
  | 'dynamix'
  | 'objective_state'
  | 'onboarding';

export interface FocusRouteContext {
  objectiveId?: string;
  projectId?: string;
  tenantId: string;
  currentRoute: string;
}

export interface FocusSignalRequest {
  altitude: Altitude;
  aiPersona?: AIPersona;
  routeContext: FocusRouteContext;
  // canvas_context is reserved for Phase 3 — intentionally omitted here
}

export interface FocusSignalResponse {
  ok: boolean;
  topCard: AICard | null;
  remainingCount: number;
  error?: string;
}
