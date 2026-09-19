# Handoff compact — dev

schemaVersion: 1
feature: csdl-bieu-12
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:f42502cee520105fb0a7f618c17b8b0f582884d7f779f638ec7310c26346e77a
headerFingerprint: sha256:b6a541f8adc60a5badc72fc92c606631e5a1457fc119b9a6a546eb1f0acc437a
writtenAt: 2026-09-18T01:00:00.000Z
taskId: task_051369c1
tlTaskId: task_f750c146
resource: green-assets
columns: 15
blocks: 2
IdCode: CX-
formNo: 12
changeScope: edit_page
formPattern: Slideout
mfeStdUrl: http://localhost:9301/so-ts/csdl-so-sach
hubRoute: /so-ts/csdl-so-sach?resource=green-assets
alias: /csdl-bieu-12

## Decisions
- changeScope: edit_page T-XLS-S12 · typed 15/2 KEEP · Schema_CsdlBieu12 KEEP · **cấm** reopen
- export: GET …/export?resource=green-assets (+filter+side) · sheet Biểu 12 · 15 cols · `Bieu12_CayXanh_{yyyyMMdd}.xls`
- import: **DEFER P1 ẩn** · export_only_p0
- Q-XLS: filtered · filter-all · one_sheet · khóm+cỏ cùng hàng · **cấm** filter-bar export · **cấm** 12+8 · **cấm** 2-sheet · **cấm** streaming
- migration: none
- build: yarn build PASS · dotnet Api+Bff PASS
- e2e: queued QA only

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 15/2) | typed prior | keep | unchanged |
| exportExcel | Xuất Excel | ToolbarButton | filtered · P0 |
| importExcel | Nhập Excel | ToolbarButton+file | DEFER P1 ẩn |

## Screens / zones (ids only)
- S-LIST · S-FORM-* KEEP · S-XLS-EXPORT · S-XLS-IMPORT (hidden)
- mfeStdUrl=http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-12

## API / tasks (ids only)
- API-XLS-01 GET export · API-XLS-02 import OUT P1 · CRUD KEEP
- T-XLS-S12-BE-01 · BFF-01 · FE-01/02 **done** · QA-01 queued · BE-02 OUT
- FE BASE /asset/csdl-records · BFF web-bff mirror

## Build
- MFE yarn build PASS
- BE dotnet build PASS (Api + Asset.Bff)
- debt: Import P1 · Auth stub · QA e2e

## UNCLEAR
- none

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-12/implement/csdl-bieu-12.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-12/STATUS.md

## Cấm (compact)
ERP.* · invent so-ts-green · reopen typed · toast stub=done · filter-bar export · 2-sheet · streaming · Import P0 · e2e @ Dev
