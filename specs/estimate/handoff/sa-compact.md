# Handoff compact — sa

schemaVersion: 1
feature: estimate
packKind: sheet
role: sa
status: confirmed
skillVersion: 2026.08.20.03
writtenAt: 2026-09-01T14:41:00.000Z
taskId: task_e5be941e
slash: /agent-sa-mobile
mode: feature_context
changeScope: edit_page

## Decisions
- packKind: **sheet** · `#sc-estimate` · DES-MOB-EST · full screen
- delta HARD: **GAP-MOB-EDIT-01** — labelHeader ×6 fields · dual · **cấm** placeholder-only
- BFF/API/DTO/persist: **paths unchanged** · hash-skip · Step 4b **N/A**
- solution_confirm: **approve** (autoApprove ON)
- TZ: **tz_required** · DueAt UTC wire · display VN
- XCO: **xco_na** · SHARE: **share_tenant** · Offline: no queue P1 · GPS: n/a
- kit: LinmTextField + external label / labelAbove · kit_missing **N/A**
- invent path / ERP.* / mfeStdUrl: **none**
- prior GAP-MOB-EST-* / R-QA-*: **giữ closed**
- tasks TL: `T-IOS-EST-LABEL` · `T-AND-EST-LABEL`
- next: **tl** (`/agent-tl-mobile`) · labelHeader dual only

## Artifacts
- `be/solution-discovery.md` · Delta GAP-MOB-EDIT-01 · task_e5be941e
- prior web `be/solution-discovery-web.md` **giữ**

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| sc-estimate | Giao việc xử lý | TopBar+fields+CTA | DES-MOB-EST |
| input-assignee | Giao cho * | SearchField+labelHeader | required · EDIT-01 |
| input-qty | Khối lượng | NumberField+labelHeader | EDIT-01 |
| input-unit-price | Đơn giá | MoneyField+labelHeader | EDIT-01 |
| input-total | Thành tiền | readonly+labelHeader | EDIT-01 |
| input-sla | Thời hạn xử lý (giờ) | readonly+labelHeader | 24 · EDIT-01 |
| input-due | Hạn xử lý | readonly+labelHeader | datetime · EDIT-01 |
| btn-assign | Giao việc | Primary | WO |
| btn-draft | Lưu nháp | Secondary | draft |

## Screens / zones (ids only)
- DES-MOB-EST / #sc-estimate
- entry: mnt-list hub/card + incident CTA

## API (ids only · unchanged)
- POST ai-vision/estimates/from-incident/{id}
- PUT/POST ai-vision/estimates/{id} · /draft · /confirm
- POST maintenance/work-orders · WorkType=`repair` · Status=`new`
- POST incident/incidents/{id}/assign

## Hashes
- ctxContentHash: sha256:b67ee5a9cc9b69577496bf04aef9446d483410141ca6c27b98f792841ddb5ece
- demoContentHash: sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328
- contentHash: sha256:estimate-mobile-control-hint-20260901-edit01
- realDataHash: sha256:estimate-mobile-real-data-20260901-edit01
- bffContentHash: sha256:estimate-mobile-bff-20260829
- actionTreeHash: sha256:estimate-mobile-action-tree-20260829

## Must-read next (TL)
- this compact
- `be/solution-discovery.md` § Delta GAP-MOB-EDIT-01
- `handoff/design-compact.md` · html-to-native-map labelHeader

## Open
- none P0 · GAP-MOB-EDIT-01 → TL → Dev dual

---
<!-- compact schemaVersion=1 · ≤5KB · task_e5be941e -->
