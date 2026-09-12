# Handoff compact — po

schemaVersion: 1
feature: estimate
packKind: sheet
role: po
status: confirmed
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T14:32:22.000Z
taskId: task_eadacecf
slash: /agent-po-mobile
mode: feature_context
changeScope: edit_page

## Decisions
- packKind: **sheet** · surface `#sc-estimate` · DES-MOB-EST · full screen
- delta HARD: **GAP-MOB-EDIT-01** — labelHeader 13pt above 6 form fields (not placeholder-only)
- fields: Giao cho * · Khối lượng · Đơn giá · Thành tiền · Thời hạn (giờ)=24 · Hạn xử lý
- dual: iOS + Android · Design/Dev lock labelHeader same turn
- prior GAP-MOB-EST-* / R-QA-* / Review: **giữ closed**
- BFF/action-tree: **unchanged** (hash-skip) · UX-only
- DoD §16 + AC-F-13 · controlHint +labelHeader
- mfeStdUrl: none · ERP.*: none · Step 4b: **n/a**
- next: **design** (`/agent-design-mobile`) · lock labelHeader dual + ux-analy

## Artifacts
- `po/requirement.md` · § Current vs New GAP-MOB-EDIT-01 · task_eadacecf
- prior data_analy compact · control-hint / real-data § Delta

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
- demo: `specs/mobile-p1/ui/prototype/{ios,android}/index.html#sc-estimate`
- feature proto: `specs/estimate/ui/prototype/{ios,android}/index.html#sc-estimate`

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

## Must-read next (Design)
- this compact
- `po/requirement.md` § Current vs New + §5 controlHint + DoD 16
- `_data-analy/estimate-control-hint.md` § Delta GAP-MOB-EDIT-01
- dual prototype `#sc-estimate` · `.field > label` SSOT

## Open
- none P0 · GAP-MOB-EDIT-01 → Design → Dev dual

---
<!-- compact schemaVersion=1 · ≤5KB · task_eadacecf -->
