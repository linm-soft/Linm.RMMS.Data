# Handoff compact — dev

schemaVersion: 1
feature: csdl-bieu-11
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:7f64b8dcea4265af23b9f2e5e1dae3ab1c933b0a4404b0f872d39029716b4d62
headerFingerprint: sha256:b37759a9224c09c7c63bc81583b4a9bcbca02e74cba8b63579819e90d57f1d1a
writtenAt: 2026-09-18T07:10:00.000Z
taskId: task_e7125d74
tlTaskId: task_c9c5462f
resource: lighting-systems
columns: 24
blocks: 2
IdCode: LT-
formNo: 11
changeScope: edit_page
formPattern: Slideout
mfeStdUrl: http://localhost:9301/so-ts/csdl-so-sach
hubRoute: /so-ts/csdl-so-sach?resource=lighting-systems
alias: /csdl-bieu-11

## Decisions
- changeScope: edit_page T-XLS-S11 · typed 24/2 KEEP · Schema_CsdlBieu11 KEEP · **cấm** reopen
- export: GET …/export?resource=lighting-systems (+filter+side+gridStatus) · sheet Biểu 11 · 24 cols · `Bieu11_ChieuSang_{yyyyMMdd}.xls`
- import: POST …/import multipart · sheetMap Biểu 11 · upsert by code · import_now · gridStatus required
- Q-XLS: filtered · LED+NLMT cùng hàng · **cấm** filter-bar export · **cấm** 12+8 · **cấm** 2-sheet
- migration: none
- build: yarn build PASS · dotnet Api+Bff PASS
- e2e: queued QA only

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 24/2) | typed prior | keep | unchanged |
| exportExcel | Xuất Excel | ToolbarButton | filtered+gridStatus/side |
| importExcel | Nhập Excel | ToolbarButton+file | import_now |

## Screens / zones (ids only)
- S-LIST · S-FORM-* KEEP · S-XLS-EXPORT · S-XLS-IMPORT · S-PEER
- mfeStdUrl=http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-11

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
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-11/implement/csdl-bieu-11.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-11/STATUS.md

## Cấm (compact)
ERP.* · e2e @ Dev · start:std @ Dev · filter-bar export · 12+8 · 2-sheet · reopen typed
