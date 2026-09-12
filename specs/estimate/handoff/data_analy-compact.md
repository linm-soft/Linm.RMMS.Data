# Handoff compact — data_analy

schemaVersion: 1
feature: estimate
packKind: sheet
role: data_analy
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T14:28:40.000Z
taskId: task_210a31d6
slash: /agent-data-analy-mobile
mode: feature_context
changeScope: edit_page

## Decisions
- packKind: **sheet** · surface `#sc-estimate` · DES-MOB-EST
- delta HARD: **GAP-MOB-EDIT-01** — label header above every form input (not placeholder-only)
- fields: Giao cho * · Khối lượng · Đơn giá · Thành tiền · Thời hạn xử lý (giờ)=24 · Hạn xử lý datetime
- dual: iOS + Android · lock design/ux/task/implement same turn
- demo SSOT: already has `.field > label` · native `LinmTextField` title=placeholder → fix
- BFF/action-tree: **paths unchanged** (hash-skip) · UX-only
- keep prior PO/Design/SA/Dev/QA/Review artifacts · analy § Delta only
- mfeStdUrl: none · ERP.*: none · Step 4b: **skipped**
- next: **po** (`/agent-po-mobile`) · § Current vs New cite GAP-MOB-EDIT-01

## Artifacts
- `_data-analy/estimate-control-hint.md` · hash `estimate-mobile-control-hint-20260901-edit01`
- `_data-analy/estimate-real-data.md` · hash `estimate-mobile-real-data-20260901-edit01`
- `_data-analy/estimate-bff-endpoints.md` · path hash `estimate-mobile-bff-20260829` (skip)
- `_data-analy/estimate-action-tree.md` · tree hash `estimate-mobile-action-tree-20260829` (skip)

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

## Must-read next (PO)
- this compact
- `_data-analy/estimate-control-hint.md` § Delta GAP-MOB-EDIT-01
- `_data-analy/estimate-real-data.md` § Delta
- prior `po/requirement.md` **giữ** · append § Current vs New

## Open
- none P0 · GAP-MOB-EDIT-01 → PO/Design/Dev

---
<!-- compact schemaVersion=1 · ≤5KB · task_210a31d6 -->
