# Handoff compact — qa

schemaVersion: 1
feature: estimate
packKind: sheet
role: qa
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T09:22:00.000Z
taskId: task_992add79
slash: /agent-qa-mobile
e2eQa: ON

## Decisions
- changeScope: edit_page · sheet→screen `#sc-estimate`
- e2e: yarn e2e-qa-mobile · **ok:true** · A11,A10,A9,A3,P6,P6-2 · MAESTRO-AND PASS
- yaml: `qa/e2e/android.yaml` scrollUntilVisible `btn-assign` trước assert (Pixel_2 fold)
- visual: Read A3↔P6↔demo **Aligned** · Must **0** · demo `row no-icon`
- closed: GAP-QA-E2E-AND-01 · STORE-03 · P6-DUP-01 · UX-COMP-03 · R-QA-01
- mfeStdUrl: none · **cấm** start:std
- A4-IPAD: DEFER
- apiPort: compose `:5111` (macOS) · gate check `:5101`

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sc-estimate | Giao việc xử lý | TopBar+fields+CTA | DES-MOB-EST |
| row-from-incident | Từ sự cố | LinmListRow | seed SC-2401 |
| input-assignee | Giao cho * | LinmTextField | required |
| btn-assign | Giao việc | Primary | P6 visible after scroll |
| btn-draft | Lưu nháp | Secondary | P6-2 |

## Screens / zones (ids only)
- DES-MOB-EST / #sc-estimate
- shots: qa/screens + qa/store/estimate/
- reviewUrlIos=file://…/prototype/ios/index.html#sc-estimate
- reviewUrlAndroid=file://…/prototype/android/index.html#sc-estimate

## API / tasks (ids only)
- A10-BFF :5202 PASS
- PUT/POST ai-vision/estimates · POST work-orders · assign
- next: /agent-review-mobile (roleOnly stop this task)

## VERIFY
- yarn e2e-qa-mobile ok:true · manifest ok:true
- visual Aligned · Must 0
- P6-CORE MD5 ≠ P6-CORE-2

## UNCLEAR
- none

## Full paths
- scenarios: specs/estimate/qa/scenarios.md
- CAPTURE: specs/estimate/qa/store/estimate/CAPTURE.md
- manifest: specs/estimate/qa/store/estimate/manifest.json
- STATUS: specs/estimate/STATUS.md
