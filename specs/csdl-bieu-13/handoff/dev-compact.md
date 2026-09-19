# Handoff compact — dev

schemaVersion: 1
feature: csdl-bieu-13
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:800386bb8f86bfcc815b9c7d3a6dc246dc58b0a95b5132a317c5a094d0b4194f
headerFingerprint: sha256:31dbc83200b511c9d61333b1cdb94e2880778980a3b21970be414e926db29008
writtenAt: 2026-09-18T08:25:00.000Z
taskId: task_71b8eb1b
tlTaskId: task_6af52a22
priorTyped: task_94fc7cdd · keep
resource: noise-barriers
columns: 13
IdCode: TC-
formNo: 13
changeScope: edit_page
formPattern: Slideout
mfeStdUrl: http://localhost:9301/so-ts/csdl-so-sach
hubRoute: /so-ts/csdl-so-sach?resource=noise-barriers
alias: /csdl-bieu-13

## Decisions
- changeScope: edit_page T-XLS-S13 · typed 13 KEEP · Schema_CsdlBieu13 KEEP · **cấm** reopen
- export: GET …/export?resource=noise-barriers (+filter+side) · sheet Biểu 13 · 13 cols · `Bieu13_TuongChongOn_{yyyyMMdd}.xls`
- import: **DEFER P1 ẩn** · export_only_p0
- Q-XLS: filtered · filter-all · one_sheet · dài/cao/DT cùng hàng · **cấm** filter-bar export · **cấm** 12+8 · **cấm** dim sheet · **cấm** streaming
- migration: none · BFF proxy reuse
- build: yarn build PASS · dotnet Api+Bff PASS
- e2e: queued QA only

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 13) | typed prior | keep | unchanged |
| exportExcel | Xuất Excel | ToolbarButton | filtered · P0 |
| importExcel | Nhập Excel | ToolbarButton+file | DEFER P1 ẩn |

## Screens / zones (ids only)
- S-LIST · S-FORM-* KEEP · S-XLS-EXPORT · S-XLS-IMPORT (hidden)
- mfeStdUrl=http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-13

## API / tasks (ids only)
- API-XLS-01 GET export · API-XLS-02 import OUT P1 · CRUD KEEP
- T-XLS-S13-BE-01 · BFF-01 · FE-01/02 **done** · QA-01 queued · BE-02 OUT
- FE BASE /asset/csdl-records · BFF web-bff mirror

## Build
- MFE yarn build PASS
- BE dotnet build PASS (Api + Asset.Bff)
- debt: Import P1 · Auth stub · QA e2e

## UNCLEAR
- none

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-13/implement/csdl-bieu-13.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-13/STATUS.md

## Cấm (compact)
ERP.* · invent so-ts-noise · reopen typed · toast stub=done · filter-bar export · dim sheet · streaming · Import P0 · e2e @ Dev
