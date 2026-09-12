# Handoff compact — team_lead

schemaVersion: 1
feature: estimate
packKind: sheet
role: team_lead
status: confirmed
skillVersion: 2026.08.29.1
writtenAt: 2026-09-01T14:44:00.000Z
taskId: task_93fd2561
slash: /agent-tl-mobile
mode: feature_context
changeScope: edit_page

## Decisions
- packKind: **sheet** · `#sc-estimate` · DES-MOB-EST · full screen
- delta HARD: **GAP-MOB-EDIT-01** — labelHeader 13pt ×6 fields · dual · **cấm** placeholder-only
- tasks: `T-IOS-EST-LABEL` · `T-AND-EST-LABEL` · prior T-IOS/AND-EST **giữ**
- T-BE / T-BFF / T-KIT: **n/a** · paths hash-skip · kit reuse labelAbove
- route_confirm: **route_a giữ** · không URL mới
- ios/android_repo: **reuse** · autoApprove ON
- BFF/API/DTO: **unchanged** · Step 4b **N/A**
- invent / ERP.* / mfeStdUrl: **none**
- e2e/build: **skipped** (cấm TL) · e2eQa queued QA
- next: **dev-ios** (`/agent-dev-ios` · T-IOS-EST-LABEL) → android

## Artifacts
- `task/estimate.md` · Delta GAP-MOB-EDIT-01 · task_93fd2561
- prior `task_cc28db20` pack **giữ**

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
- entry: mnt-list hub/card + incident CTA · route_a

## API (ids only · unchanged)
- POST ai-vision/estimates/from-incident/{id}
- PUT/POST ai-vision/estimates/{id} · /draft · /confirm
- POST maintenance/work-orders · WorkType=`repair`
- POST incident/incidents/{id}/assign

## Hashes
- ctxContentHash: sha256:b67ee5a9cc9b69577496bf04aef9446d483410141ca6c27b98f792841ddb5ece
- demoContentHash: sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328
- contentHash: sha256:estimate-mobile-control-hint-20260901-edit01
- realDataHash: sha256:estimate-mobile-real-data-20260901-edit01
- bffContentHash: sha256:estimate-mobile-bff-20260829
- actionTreeHash: sha256:estimate-mobile-action-tree-20260829

## Must-read next (Dev iOS)
- this compact
- `task/estimate.md` § Delta · T-IOS-EST-LABEL source map
- `handoff/design-compact.md` · html-to-native-map labelHeader
- `handoff/sa-compact.md` · paths skip

## Open
- none P0 · GAP-MOB-EDIT-01 → Dev dual

---
<!-- compact schemaVersion=1 · ≤5KB · task_93fd2561 -->
