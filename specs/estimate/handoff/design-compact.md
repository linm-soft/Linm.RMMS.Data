# Handoff compact — design

schemaVersion: 1
feature: estimate
packKind: sheet
role: design
status: confirmed
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T14:35:44.000Z
taskId: task_18e9655b
slash: /agent-design-mobile
mode: feature_context
changeScope: edit_page

## Decisions
- packKind: **sheet** · surface `#sc-estimate` · DES-MOB-EST · full screen
- delta HARD: **GAP-MOB-EDIT-01** — labelHeader 13pt above 6 form fields · dual · **cấm** placeholder-only
- native: `LinmTextField` + external label / kit `labelAbove` · Dev lock same turn
- proto dual: already `.field > label` ×6 · copy/zones/API **unchanged**
- BFF/action-tree: **unchanged** (hash-skip) · UX-only
- design_confirm: **approve** (autoApprove ON)
- demo-parity Must open **0** · ux-analy §1–§9 PASS
- mfeStdUrl: none · ERP.*: none · e2e/build: **skipped**
- next: **sa** (`/agent-sa-mobile`) · paths likely skip

## Artifacts
- `ui/design.md` · labelHeader lock · task_18e9655b
- `ui/ux-analy.md` · GAP-MOB-EDIT-01 · AC-F-13
- `ui/html-to-native-map.md` · `.field > label` → native header
- `ui/prototype/{ios,android}/index.html` · `#sc-estimate`
- `ui/review/demo-parity.md` · PASS

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sc-estimate | Giao việc xử lý | TopBar+fields+CTA | DES-MOB-EST |
| input-assignee | Giao cho * | TextField+labelHeader | required · EDIT-01 |
| input-qty | Khối lượng | NumberField+labelHeader | EDIT-01 |
| input-unit-price | Đơn giá | MoneyField+labelHeader | EDIT-01 |
| input-total | Thành tiền | readonly+labelHeader | EDIT-01 |
| input-sla | Thời hạn xử lý (giờ) | readonly+labelHeader | 24 · EDIT-01 |
| input-due | Hạn xử lý | readonly+labelHeader | datetime · EDIT-01 |
| btn-assign | Giao việc | Primary | WO |
| btn-draft | Lưu nháp | Secondary | draft |

## Screens / zones (ids only)
- DES-MOB-EST / #sc-estimate
- reviewUrl iOS: `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/estimate/ui/prototype/ios/index.html`
- reviewUrl Android: `file:///Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Data/specs/estimate/ui/prototype/android/index.html`

## API (ids only · unchanged)
- POST ai-vision/estimates/from-incident/{id}
- PUT/POST ai-vision/estimates/{id} · /draft · /confirm
- POST maintenance/work-orders
- POST incident/incidents/{id}/assign

## Hashes
- ctxContentHash: sha256:b67ee5a9cc9b69577496bf04aef9446d483410141ca6c27b98f792841ddb5ece
- demoContentHash: sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328
- contentHash: sha256:estimate-mobile-control-hint-20260901-edit01
- realDataHash: sha256:estimate-mobile-real-data-20260901-edit01

## Must-read next (SA)
- this compact
- `ui/design.md` § Delta GAP-MOB-EDIT-01
- BFF paths hash-skip · solution likely path-unchanged

## Open
- none P0 · GAP-MOB-EDIT-01 → Dev dual after SA/TL

---
<!-- compact schemaVersion=1 · ≤5KB · task_18e9655b -->
