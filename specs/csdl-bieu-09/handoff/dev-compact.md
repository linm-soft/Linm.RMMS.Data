# Handoff compact — dev

schemaVersion: 1
feature: csdl-bieu-09
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:58c012cef8ad07ae7a6d5e8ab513668c51dc0755d1f209783beb41ba1c4ccc01
headerFingerprint: sha256:765521dee151f2ded36c582ca1a0b7ec048237b88cfc5b27481f09e6787e9a77
writtenAt: 2026-09-18T06:00:00.000Z
taskId: task_6056af24
tlTaskId: task_a915ae19
resource: boundary-markers
columns: 17
blocks: 2
IdCode: MK-
formNo: 09
changeScope: edit_page
formPattern: Slideout
mfeStdUrl: http://localhost:9301/so-ts/csdl-so-sach
hubRoute: /so-ts/csdl-so-sach?resource=boundary-markers
alias: /csdl-bieu-09

## Decisions
- changeScope: edit_page T-XLS-S09 · typed 17/2 KEEP · Schema_CsdlBieu9 KEEP · **cấm** reopen
- export: GET …/export?resource=boundary-markers (+filter+markerKind) · sheet Biểu 9 · 17 cols · `Bieu09_MocLoGioiGPMB_{yyyyMMdd}.xls`
- import: POST …/import multipart · sheetMap Biểu 9 · upsert by code · import_now
- Q-XLS: filtered · respect_filter · **cấm** filter-bar export · **cấm** 12+8 · **cấm** 2-sheet
- BFF: proxy keep · binary
- migration: none
- build: yarn build+typecheck PASS · dotnet build PASS
- e2e: queued QA only

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 17/2) | typed prior | keep | unchanged |
| exportExcel | Xuất Excel | ToolbarButton | filtered+markerKind |
| importExcel | Nhập Excel | ToolbarButton+file | import_now |

## Screens / zones (ids only)
- S-LIST · S-FORM-* KEEP · S-XLS-EXPORT · S-XLS-IMPORT
- mfeStdUrl=http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-09

## API / tasks (ids only)
- API-XLS-01 GET export · API-XLS-02 POST import · CRUD KEEP
- T-XLS-BE-01/02/03 · T-XLS-BFF-01 · T-XLS-FE-01/02 **done** · T-XLS-QA-01 queued
- FE BASE /asset/csdl-records · BFF web-bff mirror

## Build
- MFE yarn build PASS · typecheck PASS
- BE dotnet build PASS
- debt: Auth stub · QA e2e

## UNCLEAR
- none

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-09/implement/csdl-bieu-09.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-09/STATUS.md

## Cấm (compact)
ERP.* · e2e @ Dev · start:std @ Dev · filter-bar export · 12+8 · 2-sheet · reopen typed
