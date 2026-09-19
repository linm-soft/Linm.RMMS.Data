# Handoff compact — team_lead

schemaVersion: 1
feature: csdl-bieu-11
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:7f64b8dcea4265af23b9f2e5e1dae3ab1c933b0a4404b0f872d39029716b4d62
headerFingerprint: sha256:b37759a9224c09c7c63bc81583b4a9bcbca02e74cba8b63579819e90d57f1d1a
writtenAt: 2026-09-18T07:05:00.000Z
taskId: task_c9c5462f
saTaskId: task_bb1ffcd0
resource: lighting-systems
columns: 24
blocks: 2
IdCode: LT-
formNo: 11
peerSoTs: so-ts-lighting
team_lead_confirm: approve
route_confirm: route_a
changeScope: edit_page
formPattern: Slideout
devSlash: /agent-dev

## Decisions
- changeScope: edit_page (T-XLS-S11) · typed CRUD 24/2 **KEEP** · **cấm** reopen
- route_confirm: route_a keep · hub `/so-ts/csdl-so-sach` + alias `/csdl-bieu-11`
- Q-XLS: filtered · import_now · `Bieu11_ChieuSang_{yyyyMMdd}.xls` · one_sheet
- export/import: catalogToolbar · BFF binary/multipart · `/implement-export-import-excel`
- golden: Cục 16-sheet sheet Biểu 11 · **1 sheet 24** · LED+NLMT cùng hàng · **cấm** 12+8 · **cấm** 2 sheet
- filter: **cấm** Xuất trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- peer: so-ts-lighting toolbar KEEP · qty bucket · **≠** merge · **cấm** dump điểm
- cabinet split · solar flat KEEP · migration **none** @ XLS · Schema_CsdlBieu11 KEEP
- Gaps: GAP-BIEU11-XLS-01…07
- mfe: Linm.Web.RMMS.Asset · be: Linm.RMMS.WebService · **cấm ERP.***
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 24/2) | typed prior | keep | **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | filtered · binary · 1 sheet 24 · LED+NLMT |
| importExcel | Nhập Excel | ToolbarButton+file | import_now · typed · LED/solar validate |

## Screens / zones (ids only)
- S-LIST · S-FORM-* KEEP · S-XLS-EXPORT · S-XLS-IMPORT · S-PEER
- mfeStdUrl=http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-11
- hub=?resource=lighting-systems · peer=/so-ts-lighting

## API / tasks (ids only)
- FormMode↔API: list/C/E/V/Copy KEEP · export↔API-XLS-01 · import↔API-XLS-02
- T-* KEEP: T-UI-LIST/FILTER/CFG/FORM/LEAVE/ACT/LKP/FIELD/PROD/UX/RESP · T-BE-CRUD/UISCHEMA · T-PERM · T-QA-*
- T-XLS pending: T-XLS-BE-01..03 · T-XLS-BFF-01 · T-XLS-FE-01..02 · T-XLS-QA-01
- deps: BE-01→BE-03→BFF→FE-01→FE-02→QA-01 · BE-02 ∥ BE-01
- export QS: list filters + side · ignore page
- header24: code|roadCode|roadName|province|kmFrom|kmTo|side|gridLed600|gridLed240|gridLed150|gridLed125|gridStatus|gridPoleCount|cabinetCount|substationCount|solarPoleCount|solarControllerCount|solarPanel240Wp|solarLamp100W|solarBattery145Ah|solarCabinetCount|status|manageUnit|notes
- SA map: T-XLS-S11-BE-01/02 · BFF-01 · FE-01/02 · QA-01
- devSlash: /agent-dev (+ /dev-web-responsive · /dev-ui-review · /implement-export-import-excel)

## UNCLEAR
- none

## Full paths (Read only if needed)
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-11/task/csdl-bieu-11.md
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-11/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-11/ui/design.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-11/STATUS.md
- prior: handoff/sa-compact.md · design-compact.md · po-compact.md · data_analy-compact.md

## Cấm (compact)
ERP.* · invent API · filter-bar export · 12+8 · 2-sheet invent · dump điểm Sổ TS · reopen typed · implement code · e2e · yarn build/start:std · Step4b @ TL
