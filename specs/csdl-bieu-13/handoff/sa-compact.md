# Handoff compact — sa

schemaVersion: 1
feature: csdl-bieu-13
packKind: list
role: sa
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:800386bb8f86bfcc815b9c7d3a6dc246dc58b0a95b5132a317c5a094d0b4194f
headerFingerprint: sha256:31dbc83200b511c9d61333b1cdb94e2880778980a3b21970be414e926db29008
writtenAt: 2026-09-18T01:30:00.000Z
taskId: task_51c2f1f4
priorDesign: task_82008258
priorTyped: task_66b443d8 · keep
resource: noise-barriers
columns: 13
IdCode: TC-
formNo: 13
peerSoTs: so-ts-noise-barrier · cấm merge
solution_confirm: approve
changeScope: edit_page
formPattern: Slideout
sa_tz_gate: tz_na
sa_xco_gate: xco_get_only
sa_shared_table: share_tenant

## Decisions
- changeScope: edit_page (T-XLS-S13) · **cấm** reopen typed new_page CRUD
- keep: Schema_CsdlBieu13 · shell+typed 1:1 · 13 · Kind B+D Slideout · lengthM/heightM/areaM2 flat
- export: GET …/csdl-records/export?resource=noise-barriers (+ filter QS · no page) · BFF binary proxy
- import: **DEFER P1** · export_only_p0 · nút ẩn
- Q-XLS-SCOPE: filtered · Q-XLS-FILENAME: Bieu13_TuongChongOn_{yyyyMMdd}.xls · **ext .xls** (override PO .xlsx · Cục+Wave1) · Q-XLS-SHEET: one_sheet
- mode: **filter-all** · ignore page · **cấm** HTTP streaming P0
- golden: Cục 16-sheet Biểu 13 · checksum 13 · 1 sheet · dài/cao/DT cùng hàng · **cấm** 12+8 · **cấm** dim sheet
- filter: **cấm** Xuất trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- entity/migration: **none** · keep Schema_CsdlBieu13
- BFF: proxy only · stream binary · FE BASE /asset/csdl-records
- domain: Asset · **cấm ERP.*** · **cấm** invent infra
- peer: so-ts-noise-barrier cite · **cấm** merge road-assets
- gates: tz_na · xco_get_only · share_tenant (keep)
- solution_confirm: approve (autoApprove ON) · open Q: none
- mfe: Linm.Web.RMMS.Asset · be: Linm.RMMS.WebService
- devSlash: /implement-export-import-excel

## Inventory (slim)
| id | label | controlHint | write |
|----|-------|-------------|-------|
| (form 13) | typed prior | keep | **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | GET export binary |
| importExcel | Nhập Excel | ToolbarButton+file | DEFER P1 · ẩn |

## Screens / zones (ids only)
- S-LIST DES-GRID keep · toolbar +export · peer cite only
- S-XLS-EXPORT · S-XLS-IMPORT (hidden P1)
- S-FORM-* keep · LeaveConfirmModal
- mfeStdUrl=http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-13
- hub=?resource=noise-barriers

## API / tasks (ids only)
- CRUD keep: …/csdl-records?resource=noise-barriers
- API-XLS-01 GET …/export · API-XLS-02 POST import DEFER P1
- BFF mirror web-bff · FormMode list/CRUD keep · export = toolbar action
- T-XLS-S13-BE-01 · BFF-01 · FE-01/02 · QA-01 → TL · BE-02 OUT P1
- GAP-BIEU13-XLS-01…08

## UNCLEAR
- none

## Full paths (Read only if needed)
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-13/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-13/ui/design.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-13-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-13/STATUS.md

## Cấm (compact)
ERP.* · invent infra · toast=done · filter-bar export · golden 12+8 · invent dim sheet · merge peer/road-assets · new_page typed re-CRUD · migration @ SA · Write MFE @ SA · yarn build/e2e/start:std @ SA · streaming P0 · Import wire P0
