# Handoff compact — team_lead

schemaVersion: 1
feature: csdl-bieu-10
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:49ea64d3b8f51e899c4bb36ae444444b4c0a805e64349f8e1f52677909ab0302
headerFingerprint: sha256:9d4863dcab46439966e526cc7696f137695022911a3edc5066c852dc779fa598
writtenAt: 2026-09-18T06:30:00.000Z
taskId: task_71a5d419
saTaskId: task_c2ecf0a6
resource: retaining-walls
columns: 21
blocks: 2
IdCode: KE-
formNo: 10
peerSoTs: so-ts-retaining
team_lead_confirm: approve
route_confirm: route_a
changeScope: edit_page
formPattern: Slideout
devSlash: /agent-dev

## Decisions
- changeScope: edit_page (T-XLS-S10) · typed CRUD 21/2 **KEEP** · **cấm** reopen
- route_confirm: route_a keep · hub `/so-ts/csdl-so-sach` + alias `/csdl-bieu-10`
- Q-XLS: filtered · import_now · `Bieu10_KeTuongChan_{yyyyMMdd}.xls` · height_alias
- export/import: catalogToolbar · BFF binary/multipart · `/implement-export-import-excel`
- golden: Cục 16-sheet sheet Biểu 10 · **1 sheet 21** · crest* cùng hàng · **cấm** 12+8 · **cấm** 2 sheet
- filter: **cấm** Xuất trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- map: heightM↔WidthM trên export/import (GAP-BIEU10-XLS-07)
- migration: **none mới** @ XLS · Schema_CsdlBieu10 KEEP
- peer: so-ts-retaining toolbar KEEP · **≠** merge
- Gaps: GAP-BIEU10-XLS-01…07
- mfe: Linm.Web.RMMS.Asset · be: Linm.RMMS.WebService · **cấm ERP.***
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 21/2) | typed prior | keep | **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | filtered · binary · 1 sheet 21 · height_alias |
| importExcel | Nhập Excel | ToolbarButton+file | import_now · typed · height_alias |

## Screens / zones (ids only)
- S-LIST · S-FORM-* KEEP · S-XLS-EXPORT · S-XLS-IMPORT · S-PEER
- mfeStdUrl=http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-10
- hub=?resource=retaining-walls · peer=/so-ts-retaining

## API / tasks (ids only)
- FormMode↔API: list/C/E/V/Copy KEEP · export↔API-XLS-01 · import↔API-XLS-02
- T-* KEEP: T-UI-LIST/FILTER/CFG/FORM/LEAVE/ACT/LKP/FIELD/PROD/UX/RESP · T-BE-CRUD/UISCHEMA · T-PERM · T-QA-*
- T-XLS pending: T-XLS-BE-01..03 · T-XLS-BFF-01 · T-XLS-FE-01..02 · T-XLS-QA-01
- deps: BE-01→BE-03→BFF→FE-01→FE-02→QA-01 · BE-02 ∥ BE-01
- export QS: list filters + side/wallKind · ignore page · height_alias
- SA map: T-XLS-S10-BE-01/02 · BFF-01 · FE-01/02 · QA-01
- devSlash: /agent-dev (+ /dev-web-responsive · /dev-ui-review · /implement-export-import-excel)

## UNCLEAR
- none

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-10/task/csdl-bieu-10.md
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-10/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-10/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-10/STATUS.md
- prior: handoff/sa-compact.md · design-compact.md · po-compact.md · data_analy-compact.md

## Cấm (compact)
ERP.* · invent API · filter-bar export · 12+8 · 2-sheet invent · reopen typed · BFF height remap · implement code · e2e · yarn build/start:std · Step4b @ TL
