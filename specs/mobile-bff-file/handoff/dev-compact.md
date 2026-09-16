# Handoff compact — dev

| | |
|---|---|
| schemaVersion | 1 |
| feature | `mobile-bff-file` |
| packKind | `sheet` |
| role | `dev` |
| slash | `/agent-dev-ios` + `/agent-dev-android` |
| mode | `feature_context` |
| changeScope | `edit_page` |
| status | **PASS** |
| taskId | `task_9a7a4656` |
| autoApprove | ON |
| e2eQa | ON — queued `/agent-qa*` |
| skillVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | `2026-09-12T15:56:47.000Z` |
| contentHashPrior | sha256:mobile-bff-file-tl-20260912 |
| contentHash | sha256:mobile-bff-file-dev-20260912 |

## Decisions
- edit_page · sheet/kit · **none** `#sc-*` mới
- `mobile_img_kit` = **create** dual (autoApprove) · **cấm** skip_kit
- BFF verify-only `/init-bff-file` · T-BE-01 **PASS** · GAP-MOB-BFF-FILE-01 CLOSED
- New: `LinmImageUpload` dual · purpose host · GET `/object` JWT · P1 `incident-create` `{ attachmentId }`
- Keep: check-in PhotoRow · `ai-vision/uploads*` · Step 4b **SKIP**
- mfeStdUrl: **n/a** native · **cấm** yarn start:std
- phase_to: qa

## Screens / zones (ids only)
- `#kit-linm-image-upload` · `#photo-slot` · `#photo-thumb` · `#photo-progress` · `#btn-add` · `#btn-remove` · `#toast-file-fail` · `#attachment-bind`
- `#sc-inc-form` `#inc-photos` · `#sheet-checkin` `#ci-photos`
- **out:** `#sc-field-reflect`

## API (ids only)
- POST `files/init` · PUT/GET `files/{id}/object` · POST `files/commit`
- purpose: `patrol-checkin` (keep) · `incident` (P1 form)
- Gaps **CLOSED**: CLIENT-01 · PREVIEW-01 · KIT-01

## Tasks
| id | result |
|----|--------|
| T-BE-01 | **PASS** · NuGet 1.1.0 · rewrite · skip proxy · `dotnet build` |
| T-IOS-01..04 | **PASS** · kit+client+form+keep |
| T-AND-01..04 | **PASS** · parity |
| T-QA-01 | pending · queued QA |

## Build
- BFF: **PASS**
- iOS: **PASS** (xcodegen + iPhone 17 Pro)
- Android: **PASS** (assembleDebug)

## Debt
- Live curl 401/422 needs FileService `:5018` + BFF up (QA)
- Multi-photo form still binds first `attachmentId` (singular P1)

## UNCLEAR
- none

## Full paths
- implement ios: `specs/mobile-bff-file/implement/ios.md`
- implement android: `specs/mobile-bff-file/implement/android.md`
- task: `specs/mobile-bff-file/task/mobile-bff-file.md`
- STATUS: `specs/mobile-bff-file/STATUS.md`
