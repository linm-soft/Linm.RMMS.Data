# Handoff compact — review

schemaVersion: 1
feature: estimate
packKind: sheet
role: review
status: confirmed
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T15:10:00.000Z
taskId: task_eb9d2de5
slash: /agent-review-mobile
mode: feature_context
changeScope: edit_page

## Decisions
- packKind: **sheet** · `#sc-estimate` · DES-MOB-EST
- delta: **GAP-MOB-EDIT-01** labelHeader ×6 dual · **closed**
- review_confirm: **approve** (autoApprove ON)
- align_confirm: **approve** · Must **0** · QA Aligned · AC-F-13
- prior qa: e2e ok:true · 6/6 · visual Aligned · `task_0a79076c`
- prior review `task_0d408356` **giữ** · this = re-review after edit
- BFF/API: **unchanged** · Step 4b **N/A** · mfeStdUrl **none** · ERP.* **none**
- invent: **none** · e2e/build this role: **skipped**
- debt: A4-IPAD / offline / staff lookup **DEFER**
- next: pipeline **closed** · no further mobile role this edit

## Artifacts
- `review/findings.md` · `review/REVIEW-META.json`
- cite QA: `qa/scenarios.md` · `qa/store/estimate/{CAPTURE.md,manifest.json}` · CORE PNG
- prior web `findings-web.md` **giữ**

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
| btn-assign | Giao việc | Primary | WO |
| btn-draft | Lưu nháp | Secondary | draft |

## Screens / zones (ids only)
- DES-MOB-EST / #sc-estimate
- evidence: A3-CORE · P6-CORE · P6-CORE-2

## API (ids only · unchanged)
- POST ai-vision/estimates/from-incident/{id}
- PUT/POST ai-vision/estimates/{id} · /draft · /confirm
- POST maintenance/work-orders · WorkType=`repair`
- POST incident/incidents/{id}/assign

## Debt
- none P0 · A4-IPAD / offline draft / staff lookup **DEFER**

## Hashes
- ctxContentHash: sha256:b67ee5a9cc9b69577496bf04aef9446d483410141ca6c27b98f792841ddb5ece
- demoContentHash: sha256:394ab44597648f04b25e6d58476378c16141feb53d3b58d39923b3defcff8328
- contentHash: sha256:estimate-mobile-control-hint-20260901-edit01
- realDataHash: sha256:estimate-mobile-real-data-20260901-edit01
- bffContentHash: sha256:estimate-mobile-bff-20260829
- actionTreeHash: sha256:estimate-mobile-action-tree-20260829
- reviewHash: sha256:est-mob-rev-20260901-taskeb9d2de5

## Must-read next
- pipeline closed this edit · cite this compact + findings if reopen

## Open
- none P0 · review_confirm=approve · mobile edit **done**

---
<!-- compact schemaVersion=1 · ≤5KB · task_eb9d2de5 -->
