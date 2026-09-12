# Handoff compact — dev

schemaVersion: 1
feature: estimate
packKind: sheet
role: dev
status: confirmed
skillVersion: 2026.08.29.1
writtenAt: 2026-09-01T14:51:45.000Z
taskId: task_2b81d5ff
slash: /agent-dev-ios + /agent-dev-android
mode: feature_context
changeScope: edit_page

## Decisions
- packKind: **sheet** · `#sc-estimate` · DES-MOB-EST · full screen
- delta HARD: **GAP-MOB-EDIT-01** — labelHeader 13pt/sp ×6 fields dual · **cấm** placeholder-only
- tasks: `T-IOS-EST-LABEL` · `T-AND-EST-LABEL` **done**
- iOS: `EstimateView` · `fieldLabel`+`labeledField` · `LinmTextField("")`
- Android: `EstimateScreen` · `FieldLabel`+`LabeledField` · `LinmTextField(title="")`
- BFF/API/DTO: **unchanged** · Step 4b **N/A** · mfeStdUrl **none**
- VERIFY: iOS xcodegen+xcodebuild iPhone 17 Pro **PASS** · Android assembleDebug **PASS** · BFF dotnet build **PASS**
- e2e/start:std: **skipped** (cấm Dev) · e2eQa queued QA
- invent / ERP.*: **none**
- next: **qa** (`/agent-qa-mobile`) · AC-F-13 labelHeader ×6

## Artifacts
- `implement/ios.md` · `implement/android.md` · task_2b81d5ff
- prior implement ship **giữ**

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

## Debt
- none P0 · A4-IPAD / offline draft / staff lookup **DEFER** prior

## Hashes
- ctxContentHash: sha256:b67ee5a9cc9b69577496bf04aef9446d483410141ca6c27b98f792841ddb5ece
- demoContentHash: sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328
- contentHash: sha256:estimate-mobile-control-hint-20260901-edit01
- realDataHash: sha256:estimate-mobile-real-data-20260901-edit01
- bffContentHash: sha256:estimate-mobile-bff-20260829
- actionTreeHash: sha256:estimate-mobile-action-tree-20260829

## Must-read next (QA)
- this compact
- `implement/ios.md` · `implement/android.md`
- AC-F-13 labelHeader visible ×6 · Maestro slug `estimate`

## Open
- none P0 · GAP-MOB-EDIT-01 shipped dual → QA

---
<!-- compact schemaVersion=1 · ≤5KB · task_2b81d5ff -->
