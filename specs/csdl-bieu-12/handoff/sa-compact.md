# Handoff compact — sa

schemaVersion: 1
feature: csdl-bieu-12
packKind: list
role: sa
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:f42502cee520105fb0a7f618c17b8b0f582884d7f779f638ec7310c26346e77a
headerFingerprint: sha256:b6a541f8adc60a5badc72fc92c606631e5a1457fc119b9a6a546eb1f0acc437a
writtenAt: 2026-09-18T00:40:00.000Z
taskId: task_b183ffe0
priorDesign: task_5391dd50
resource: green-assets
columns: 15
blocks: 2
IdCode: CX-
formNo: 12
peerSoTs: —
solution_confirm: approve
changeScope: edit_page
formPattern: Slideout
sa_tz_gate: tz_na
sa_xco_gate: xco_get_only
sa_shared_table: share_tenant

## Decisions
- changeScope: edit_page (T-XLS-S12) · **cấm** reopen typed new_page CRUD
- keep: Schema_CsdlBieu12 · shell+typed 1:1 · 15/2 · Kind B+D Slideout · khóm+cỏ flat
- export: GET …/csdl-records/export?resource=green-assets (+ filter QS · no page) · BFF binary proxy
- import: **DEFER P1** · export_only_p0 · nút ẩn
- Q-XLS-SCOPE: filtered · Q-XLS-FILENAME: Bieu12_CayXanh_{yyyyMMdd}.xls · **ext .xls** (override PO .xlsx · Cục+Wave1) · Q-XLS-SHEET: one_sheet
- mode: **filter-all** · ignore page · **cấm** HTTP streaming P0
- golden: Cục 16-sheet Biểu 12 · checksum 15 · 1 sheet · khóm+cỏ cùng hàng · **cấm** 12+8 · **cấm** 2 sheet
- filter: **cấm** Xuất trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- entity/migration: **none** · keep Schema_CsdlBieu12
- BFF: proxy only · stream binary · FE BASE /asset/csdl-records
- domain: Asset · **cấm ERP.*** · **cấm** invent infra
- peer: none · **cấm** invent so-ts-green
- gates: tz_na · xco_get_only · share_tenant (keep)
- solution_confirm: approve (autoApprove ON) · open Q: none
- mfe: Linm.Web.RMMS.Asset · be: Linm.RMMS.WebService
- devSlash: /implement-export-import-excel

## Inventory (slim)
| id | label | controlHint | write |
|----|-------|-------------|-------|
| (form 15/2) | typed prior | keep | **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | GET export binary |
| importExcel | Nhập Excel | ToolbarButton+file | DEFER P1 · ẩn |

## Screens / zones (ids only)
- S-LIST DES-GRID keep · toolbar +export · no peer
- S-XLS-EXPORT · S-XLS-IMPORT (hidden P1)
- S-FORM-* keep · LeaveConfirmModal
- mfeStdUrl=http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-12
- hub=?resource=green-assets

## API / tasks (ids only)
- CRUD keep: …/csdl-records?resource=green-assets
- API-XLS-01 GET …/export · API-XLS-02 POST import DEFER P1
- BFF mirror web-bff · FormMode list/CRUD keep · export = toolbar action
- T-XLS-S12-BE-01 · BFF-01 · FE-01/02 · QA-01 → TL · BE-02 OUT P1
- GAP-BIEU12-XLS-01…08

## UNCLEAR
- none

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-12/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-12/ui/design.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-12-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-12/STATUS.md

## Cấm (compact)
ERP.* · invent infra · toast=done · filter-bar export · golden 12+8 · 2-sheet invent · invent so-ts-green · new_page typed re-CRUD · migration @ SA · Write MFE @ SA · yarn build/e2e/start:std @ SA · streaming P0 · Import wire P0
