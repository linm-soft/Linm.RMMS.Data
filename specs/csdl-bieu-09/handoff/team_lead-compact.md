# Handoff compact — team_lead

schemaVersion: 1
feature: csdl-bieu-09
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:58c012cef8ad07ae7a6d5e8ab513668c51dc0755d1f209783beb41ba1c4ccc01
headerFingerprint: sha256:765521dee151f2ded36c582ca1a0b7ec048237b88cfc5b27481f09e6787e9a77
writtenAt: 2026-09-18T05:55:00.000Z
taskId: task_a915ae19
saTaskId: task_8ad5cfc2
resource: boundary-markers
columns: 17
blocks: 2
IdCode: MK-
formNo: 09
team_lead_confirm: approve
route_confirm: route_a
changeScope: edit_page
formPattern: Slideout
devSlash: /agent-dev

## Decisions
- changeScope: edit_page (T-XLS-S09) · typed CRUD 17/2 **KEEP** · **cấm** reopen
- route_confirm: route_a keep · hub `/so-ts/csdl-so-sach` + alias `/csdl-bieu-09`
- Q-XLS: filtered · import_now · `Bieu09_MocLoGioiGPMB_{yyyyMMdd}.xls` · respect_filter
- export/import: catalogToolbar · BFF binary/multipart · `/implement-export-import-excel`
- golden: Cục 16-sheet sheet Biểu 9 · **cấm** 12+8 · **cấm** 2 sheet invent
- filter: **cấm** Xuất trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- migration: **none mới** @ XLS · Schema_CsdlBieu9 KEEP
- Gaps: GAP-BIEU09-XLS-01…06
- mfe: Linm.Web.RMMS.Asset · be: Linm.RMMS.WebService · **cấm ERP.***
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 17/2) | typed prior | keep | **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | filtered · binary · 1 sheet 17 |
| importExcel | Nhập Excel | ToolbarButton+file | import_now · typed |

## Screens / zones (ids only)
- S-LIST · S-FORM-* KEEP · S-XLS-EXPORT · S-XLS-IMPORT
- mfeStdUrl=http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-09
- hub=?resource=boundary-markers

## API / tasks (ids only)
- FormMode↔API: list/C/E/V/Copy KEEP · export↔API-XLS-01 · import↔API-XLS-02
- T-* KEEP: T-UI-LIST/FILTER/CFG/FORM/LEAVE/ACT/LKP/FIELD/PROD/UX/RESP · T-BE-CRUD/UISCHEMA · T-PERM · T-QA-*
- T-XLS pending: T-XLS-BE-01..03 · T-XLS-BFF-01 · T-XLS-FE-01..02 · T-XLS-QA-01
- deps: BE-01→BE-03→BFF→FE-01→FE-02→QA-01 · BE-02 ∥ BE-01
- export QS: list filters + markerKind · ignore page
- devSlash: /agent-dev (+ /dev-web-responsive · /dev-ui-review · /implement-export-import-excel)

## UNCLEAR
- none

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-09/task/csdl-bieu-09.md
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-09/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-09/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-09/STATUS.md
- prior: handoff/sa-compact.md · design-compact.md · po-compact.md · data_analy-compact.md

## Cấm (compact)
ERP.* · invent API · filter-bar export · 12+8 · 2-sheet invent · reopen typed · implement code · e2e · yarn build/start:std · Step4b @ TL
