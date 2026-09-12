# Handoff compact — team_lead

| | |
|---|---|
| schemaVersion | 1 |
| feature | `mobile-bff-file` |
| packKind | `sheet` |
| role | `team_lead` |
| slash | `/agent-tl-mobile` |
| mode | `feature_context` |
| changeScope | `edit_page` |
| status | **PASS** |
| taskId | `task_9bde04c1` |
| autoApprove | ON |
| e2eQa | ON — queued QA |
| skillVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | `2026-09-12T15:48:10.000Z` |
| contentHashPrior | sha256:mobile-bff-file-sa-20260912 |
| contentHash | sha256:mobile-bff-file-tl-20260912 |

## Decisions
- edit_page · sheet/kit · **none** `#sc-*` mới · tabs none
- P1 form **lock** `incident-create` · **không** field-reflect
- BFF **verify-only** `/init-bff-file` · GAP-MOB-BFF-FILE-01 **CLOSED**
- UI `/integrate-file-upload-mobile` · Ask `mobile_img_kit` sau T-BE-01
- New: dual kit · GET `/object` JWT · purpose · `attachmentId` bind
- Keep: check-in PhotoRow · `ai-vision/uploads*` · Step 4b **SKIP**
- route_confirm: **keep** files/* · no new URL
- phase_to: dev (4a BFF → 4b UI dual)

## Tasks (ids)
| id | layer | deps |
|----|-------|------|
| T-BE-01 | bff verify | — |
| T-IOS-01..04 | kit→client→form→keep | T-BE-01 · Ask kit |
| T-AND-01..04 | parity iOS | T-BE-01 · Ask kit |
| T-QA-01 | e2e queued | T-IOS-04 · T-AND-04 |

## Screens / zones (ids only)
- `#kit-linm-image-upload` · `#photo-slot` · `#photo-thumb` · `#photo-progress` · `#btn-add` · `#btn-remove` · `#toast-file-fail` · `#attachment-bind`
- `#sheet-checkin` `#ci-photos` · `#sc-inc-form` `#inc-photos`
- **out:** `#sc-field-reflect`

## API (ids only)
- POST `files/init` · PUT/GET `files/{id}/object` · POST `files/commit`
- Gaps Dev: CLIENT-01 · PREVIEW-01 · KIT-01
- skillBff: `/init-bff-file` · skillUi: `/integrate-file-upload-mobile`

## Order
1. T-BE-01 → 2. Ask `mobile_img_kit` → 3. T-IOS∥T-AND → 4. T-QA (`/agent-qa*` only)

## VERIFY
- task/ + compact + STATUS PASS · roleOnly=team_lead
- cấm yarn build/e2e/start:std · cấm implement · cấm Step 4b
- next: `/agent-dev-ios` + `/agent-dev-android`

## UNCLEAR
- none

## Full paths
- task: `specs/mobile-bff-file/task/mobile-bff-file.md`
- solution: `specs/mobile-bff-file/be/solution-discovery.md`
- design: `specs/mobile-bff-file/ui/design.md`
- prior: `specs/mobile-bff-file/handoff/sa-compact.md`
- STATUS: `specs/mobile-bff-file/STATUS.md`
