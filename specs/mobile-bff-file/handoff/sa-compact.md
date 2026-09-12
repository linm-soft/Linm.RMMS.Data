# Handoff compact — sa

| | |
|---|---|
| schemaVersion | 1 |
| feature | `mobile-bff-file` |
| packKind | `sheet` |
| role | `sa` |
| slash | `/agent-sa-mobile` |
| mode | `feature_context` |
| changeScope | `edit_page` |
| status | **PASS** |
| taskId | `task_9da4e2a3` |
| autoApprove | ON |
| e2eQa | ON — queued QA |
| solution_confirm | approve |
| skillVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | `2026-09-12T16:00:00.000Z` |
| contentHashPrior | sha256:mobile-bff-file-control-hint-20260912-delta |
| bffContentHash | sha256:mobile-bff-file-bff-20260912-delta |
| contentHash | sha256:mobile-bff-file-sa-20260912 |

## Decisions
- edit_page · sheet/kit · **none** `#sc-*` mới · tabs none
- Host BFF **verify-only** `/init-bff-file` · GAP-MOB-BFF-FILE-01 **CLOSED**
- New: dual `LinmImageUpload` (Ask `mobile_img_kit`) · GET `/object` JWT preview · purpose param · **1** P1 form `attachmentId` (default `incident-create`)
- Keep: check-in PhotoRow · `ai-vision/uploads*` · Step 4b **SKIP**
- **cấm** invent `api/v1/mobile-files` · ERP.* · local FilesController · clone File controllers
- Offline/GPS: n/a owner host
- solution_confirm **approve** (autoApprove ON)
- phase_to: team_lead

## Architecture (slim)
- App → `{BffBase}/mobile-bff/api/v1/files/*` → Mobile.Bff (File NuGet 1.1.0 + rewrite) → FileService `:5018`
- Proxy skip `files/**` · app **không** gọi `:5018`

## API (ids only)
- POST `files/init` · PUT `files/{id}/object` · POST `files/commit` · GET `files/{id}/object`
- Gaps Dev: GAP-MOB-FILE-CLIENT-01 · PREVIEW-01 · KIT-01
- skillBff: `/init-bff-file` · skillUi: `/integrate-file-upload-mobile`

## Screens / zones (ids only)
- DES-MOB-FILE-KIT `#kit-linm-image-upload`
- `#sheet-checkin` `#ci-photos` · `#sc-inc-form` `#inc-photos` · `#sc-field-reflect` (alt TL)
- `#photo-slot` `#photo-thumb` `#photo-progress` `#btn-add` `#btn-remove` `#toast-file-fail` `#attachment-bind`

## WP → TL
| WP | Scope |
|----|-------|
| WP-BFF-VERIFY | curl init 401/422 · FileService up |
| WP-KIT | dual kit · Ask `mobile_img_kit` |
| WP-PREVIEW | GET object JWT · FILE-ATT-09 |
| WP-FORM | 1 P1 incident-create `attachmentId` |
| WP-KEEP | check-in · ai-vision |

## VERIFY
- solution-discovery + compact + STATUS PASS · roleOnly=sa
- cấm yarn build/e2e/start:std · cấm Step 4b · cấm Write MFE/native
- next: `/agent-team-lead-mobile`

## UNCLEAR
- none

## Full paths
- solution: `specs/mobile-bff-file/be/solution-discovery.md`
- design: `specs/mobile-bff-file/ui/design.md`
- bff: `specs/_data-analy/mobile-bff-file-bff-endpoints.md`
- control-hint: `specs/_data-analy/mobile-bff-file-control-hint.md`
- prior: `specs/mobile-bff-file/handoff/design-compact.md`
- STATUS: `specs/mobile-bff-file/STATUS.md`
