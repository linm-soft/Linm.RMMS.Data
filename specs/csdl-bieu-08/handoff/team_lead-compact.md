# Handoff compact — team_lead

schemaVersion: 1
feature: csdl-bieu-08
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:639566df4ddccc3927311d5618bf4e7c1dbad0dac80962c414f861dacc9d5e9c
headerFingerprint: sha256:ba8b8db4f7637ee32cfd4a882b6abdc774c538f6c9812c3ecd1d13f6151cdd6f
writtenAt: 2026-09-18T05:25:00.000Z
taskId: task_21f9b30c
saTaskId: task_72b0354c
resource: traffic-safety
columns: 45
groups: 11
IdCode: AT-
formNo: 08
team_lead_confirm: approve
route_confirm: route_a
changeScope: edit_page
formPattern: Slideout
devSlash: /agent-dev

## Decisions
- changeScope: edit_page (T-XLS-S08) · typed CRUD 45/11 **KEEP** · **cấm** reopen
- route_confirm: route_a keep · hub `/so-ts/csdl-so-sach` + alias `/csdl-bieu-08`
- Q-XLS: filtered · import_now · `Bieu08_HeThongATGT_{yyyyMMdd}.xls` · one_sheet_45
- export/import: catalogToolbar · BFF binary/multipart · `/implement-export-import-excel`
- golden: Cục 16-sheet sheet Biểu 8 · **cấm** 12+8 · **cấm** wide-row
- filter: **cấm** Xuất trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- migration: **none mới** @ XLS · Schema_CsdlBieu8+11 KEEP
- Gaps: GAP-BIEU08-XLS-01…06
- mfe: Linm.Web.RMMS.Asset · be: Linm.RMMS.WebService · **cấm ERP.***
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 45/11) | typed prior | keep | **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | filtered · binary · one_sheet_45 |
| importExcel | Nhập Excel | ToolbarButton+file | import_now · typed+child |

## Screens / zones (ids only)
- S-LIST · S-FORM-* KEEP · S-XLS-EXPORT · S-XLS-IMPORT
- mfeStdUrl=http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-08
- hub=?resource=traffic-safety

## API / tasks (ids only)
- FormMode↔API: list/C/E/V/Copy KEEP · export↔API-XLS-01 · import↔API-XLS-02/03
- T-* KEEP: T-UI-LIST/FILTER/CFG/FORM/LEAVE/ACT/LKP/FIELD/PROD/UX/RESP · T-BE-CRUD/UISCHEMA · T-PERM · T-QA-*
- T-XLS pending: T-XLS-BE-01..03 · T-XLS-BFF-01 · T-XLS-FE-01..02 · T-XLS-QA-01
- deps: BE-01→BE-03→BFF→FE-01→FE-02→QA-01 · BE-02 ∥ BE-01
- export QS: list filters + type · ignore page
- devSlash: /agent-dev (+ /dev-web-responsive · /dev-ui-review · /implement-export-import-excel)

## UNCLEAR
- none

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-08/task/csdl-bieu-08.md
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-08/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-08/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-08/STATUS.md
- prior: handoff/sa-compact.md · design-compact.md · po-compact.md · data_analy-compact.md

## Cấm (compact)
ERP.* · invent API · filter-bar export · 12+8 · wide-row · reopen typed · implement code · e2e · yarn build/start:std · Step4b @ TL
