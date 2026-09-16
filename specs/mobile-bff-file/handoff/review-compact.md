# Handoff compact — review

schemaVersion: 1
feature: mobile-bff-file
packKind: sheet
role: review
status: done
skillVersion: 2026.08.25.01
rulesVersion: 2026.08.25.2
writtenAt: 2026-09-12T16:20:30.000Z
contentHash: sha256:mobile-bff-file-review-20260912
contentHashPrior: sha256:mobile-bff-file-qa-20260912
taskId: task_8da2ff6f
slash: /agent-review-mobile
autoApprove: ON
e2eQa: ON
review_confirm: approve
align_confirm: approve
post_review: skip

## Decisions
- changeScope: edit_page · sheet/kit · none #sc-* mới
- formPattern: P1 incident-create · `#sc-inc-form` · `{ attachmentId }`
- review_confirm: **approve** (autoApprove) · align Must **0** · post_review skip
- Gaps CLOSED: BFF-FILE-01 · CLIENT-01 · PREVIEW-01 · KIT-01
- mfeStdUrl: n/a · **cấm** start:std / build / e2e ở role này
- findings: P0/Must **0** · OK=10 · Accept debt=3
- open questions: none (FileService :5018 + multi-photo singular = debt)
- phase_to: **done**

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
- PNG: qa/store/mobile-bff-file/{A11-LAUNCH,A9-LOGIN,A3-CORE,P6-CORE,P6-CORE-2}.png
- findings: review/findings.md · REVIEW-META.json

## API / tasks (ids only)
- findings: OK=10 · P0=0 · Must open=0 · Accept debt=3
- T-REVIEW-SEC/DTO/ALIGN/REAL **PASS**
- T-BE/T-IOS/T-AND/T-QA **PASS** (prior)
- debt: FileService `:5018` DOWN · singular attachmentId multi-photo
- Next: phase **done** · no role after review

## UNCLEAR
- none

## Full paths (Read only if needed)
- findings: specs/mobile-bff-file/review/findings.md
- qa: specs/mobile-bff-file/qa/scenarios.md
- CAPTURE: specs/mobile-bff-file/qa/store/mobile-bff-file/CAPTURE.md
- STATUS: specs/mobile-bff-file/STATUS.md
