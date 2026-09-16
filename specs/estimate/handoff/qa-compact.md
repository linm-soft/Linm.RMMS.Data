# Handoff compact — qa

schemaVersion: 1
feature: estimate
packKind: sheet
role: qa
status: confirmed
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T15:03:00.000Z
taskId: task_0a79076c
slash: /agent-qa-mobile
mode: feature_context
changeScope: edit_page

## Decisions
- packKind: **sheet** · `#sc-estimate` · DES-MOB-EST
- e2eQa: **ON** · `yarn e2e-qa-mobile` · ok:**true** · capturedAt=`2026-09-01T15:00:18.091Z`
- cases: A11-LAUNCH · A10-BFF · A9-LOGIN · A3-CORE · P6-CORE · P6-CORE-2 — all **PASS**
- visual `/review-align-ux-ios-android`: A3 + P6 **Aligned** · Must **0**
- AC-F-13 / **GAP-MOB-EDIT-01**: labelHeader ×6 dual **PASS** (CORE Read)
- API `:5111` + gate `:5101` forward · BFF `:5202` · iPhone 17 Pro Max · emulator-5554
- mfeStdUrl / start:std: **none** · kill-worker: **none** (GAP-QA-E2E-KILL-01)
- invent / ERP.*: **none**
- next: **review** (`/agent-review-mobile`) · cite this compact + CORE PNG

## Artifacts
- `qa/scenarios.md` · `qa/store/estimate/CAPTURE.md` · `qa/store/estimate/manifest.json`
- PNG: `qa/screens/{A11-LAUNCH,A9-LOGIN,A3-CORE,P6-CORE,P6-CORE-2}.png` + store copy
- prior QA PASS **giữ** · this edit re-QA after labelHeader

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sc-estimate | Giao việc xử lý | TopBar+fields+CTA | DES-MOB-EST · Aligned |
| input-assignee | Giao cho * | SearchField+labelHeader | AC-F-13 |
| input-qty | Khối lượng | NumberField+labelHeader | AC-F-13 |
| input-unit-price | Đơn giá | MoneyField+labelHeader | AC-F-13 |
| input-total | Thành tiền | readonly+labelHeader | AC-F-13 |
| input-sla | Thời hạn xử lý (giờ) | readonly+labelHeader | AC-F-13 |
| input-due | Hạn xử lý | readonly+labelHeader | AC-F-13 |
| btn-assign | Giao việc | Primary | P6 assert |
| btn-draft | Lưu nháp | Secondary | P6 |

## Screens / zones (ids only)
- DES-MOB-EST / #sc-estimate
- evidence: A3-CORE · P6-CORE · P6-CORE-2

## API (ids only · unchanged)
- A10-BFF **PASS** · paths prior SA skip

## Debt
- none P0 · A4-IPAD / offline / staff lookup **DEFER**
- Android IME floating bar **N/A Must**

## Hashes
- ctxContentHash: sha256:b67ee5a9cc9b69577496bf04aef9446d483410141ca6c27b98f792841ddb5ece
- demoContentHash: sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328
- contentHash: sha256:estimate-mobile-control-hint-20260901-edit01
- realDataHash: sha256:estimate-mobile-real-data-20260901-edit01
- bffContentHash: sha256:estimate-mobile-bff-20260829
- actionTreeHash: sha256:estimate-mobile-action-tree-20260829

## Must-read next (Review)
- this compact
- `qa/scenarios.md` · CORE PNG A3/P6
- `handoff/dev-compact.md` · AC-F-13

## Open
- none P0 · QA PASS → Review

---
<!-- compact schemaVersion=1 · ≤5KB · task_0a79076c -->
