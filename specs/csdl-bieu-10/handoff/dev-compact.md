# Handoff compact — dev

schemaVersion: 1
feature: csdl-bieu-10
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:49ea64d3b8f51e899c4bb36ae444444b4c0a805e64349f8e1f52677909ab0302
headerFingerprint: sha256:9d4863dcab46439966e526cc7696f137695022911a3edc5066c852dc779fa598
writtenAt: 2026-09-18T06:35:00.000Z
taskId: task_4dfcfa0a
tlTaskId: task_71a5d419
resource: retaining-walls
columns: 21
blocks: 2
IdCode: KE-
formNo: 10
changeScope: edit_page
formPattern: Slideout
mfeStdUrl: http://localhost:9301/so-ts/csdl-so-sach
hubRoute: /so-ts/csdl-so-sach?resource=retaining-walls
alias: /csdl-bieu-10

## Decisions
- changeScope: edit_page T-XLS-S10 · typed 21/2 KEEP · Schema_CsdlBieu10 KEEP · **cấm** reopen
- export: GET …/export?resource=retaining-walls (+filter+wallKind) · sheet Biểu 10 · 21 cols · `Bieu10_KeTuongChan_{yyyyMMdd}.xls`
- import: POST …/import multipart · sheetMap Biểu 10 · upsert by code · import_now
- Q-XLS: filtered · height_alias · **cấm** filter-bar export · **cấm** 12+8 · **cấm** 2-sheet
- map: heightM↔WidthM @ Excel/Create · BFF proxy only
- migration: none
- build: yarn build PASS · dotnet Api+Bff PASS
- e2e: queued QA only

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 21/2) | typed prior | keep | unchanged |
| exportExcel | Xuất Excel | ToolbarButton | filtered+wallKind |
| importExcel | Nhập Excel | ToolbarButton+file | import_now |

## Screens / zones (ids only)
- S-LIST · S-FORM-* KEEP · S-XLS-EXPORT · S-XLS-IMPORT · S-PEER
- mfeStdUrl=http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-10

## API / tasks (ids only)
- API-XLS-01 GET export · API-XLS-02 POST import · CRUD KEEP
- T-XLS-BE-01/02/03 · T-XLS-BFF-01 · T-XLS-FE-01/02 **done** · T-XLS-QA-01 queued
- FE BASE /asset/csdl-records · BFF web-bff mirror

## Build
- MFE yarn build PASS
- BE dotnet build PASS (Api + Asset.Bff)
- debt: Auth stub · QA e2e · migrate apply prior

## UNCLEAR
- none

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-10/implement/csdl-bieu-10.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-10/STATUS.md

## Cấm (compact)
ERP.* · e2e @ Dev · start:std @ Dev · filter-bar export · 12+8 · 2-sheet · reopen typed
