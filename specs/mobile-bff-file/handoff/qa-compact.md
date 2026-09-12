# Handoff compact — qa

schemaVersion: 1
feature: mobile-bff-file
packKind: sheet
role: qa
status: done
skillVersion: 2026.08.25.01
rulesVersion: 2026.08.25.2
writtenAt: 2026-09-12T16:15:30.000Z
contentHash: sha256:mobile-bff-file-qa-20260912
contentHashPrior: sha256:mobile-bff-file-dev-20260912
taskId: task_14e574ba
slash: /agent-qa-mobile
autoApprove: ON
e2eQa: ON

## Decisions
- changeScope: edit_page
- formPattern: P1 incident-create · `#sc-inc-form` · `{ attachmentId }`
- e2eQa: ON · yarn e2e-qa-mobile · ios_test_phase=phase1_iphone · A4 DEFER
- store_qa: run_store
- verdict: **pass** · visual **Aligned** · Must 0
- mfeStdUrl: n/a · **cấm** start:std
- API :5101 · BFF :5202 · --skip-start
- FileService :5018 **DOWN** · files curl 404 · debt
- open questions: none (debt only)
- phase_to: review

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| kitUpload | LinmImageUpload | ImageUpload | `#kit-linm-image-upload` |
| photoSlot | Photo slot | Button | `#photo-slot` · `#btn-add` |
| incPhotos | Incident photos | Row | `#inc-photos` · `#photo-row` |
| attachBind | attachmentId | Hidden | `#attachment-bind` |

## Screens / zones (ids only)
- `#sc-inc-form` · `#inc-photos` · `#kit-linm-image-upload` · `#photo-slot` · `#btn-add` · `#attachment-bind`
- keep `#sheet-checkin` `#ci-photos` · **out** `#sc-field-reflect`
- PNG: qa/screens/{A11-LAUNCH,A9-LOGIN,A3-CORE,P6-CORE,P6-CORE-2}.png
- store: qa/store/mobile-bff-file/

## API / tasks (ids only)
- T-QA-01 · A11,A10,A9,A3,P6,P6-2 **PASS**
- A10-BFF :5202 · API :5101
- files/* live curl **DEBT** (:5018 + BFF route image)
- Next: /agent-review-mobile (roleOnly gate — not this task)

## UNCLEAR
- none

## Full paths (Read only if needed)
- scenarios: specs/mobile-bff-file/qa/scenarios.md
- CAPTURE: specs/mobile-bff-file/qa/store/mobile-bff-file/CAPTURE.md
- STATUS: specs/mobile-bff-file/STATUS.md
