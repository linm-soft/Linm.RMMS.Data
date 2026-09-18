# Handoff compact — dev

schemaVersion: 1
feature: csdl-bieu-14
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:e9a062f1f9eecd6bf98748db0c3f839e2247a74ecb9bcd56273d4e48d729fa0a
headerFingerprint: sha256:14cd156a898dcc971a072dd1cd1b92460a8b597558a90dc9854fead9d4c4de5c
writtenAt: 2026-09-18T09:00:00.000Z
taskId: task_5163dcca
tlTaskId: task_bb5bd3be
priorTyped: task_936065ca · keep
resource: its-systems
columns: 21
IdCode: IT-
formNo: 14
changeScope: edit_page
formPattern: Slideout
mfeStdUrl: http://localhost:9301/so-ts/csdl-so-sach
hubRoute: /so-ts/csdl-so-sach?resource=its-systems
alias: /csdl-bieu-14
peerSoTs: so-ts-its-camera · cấm merge
devSlash: /implement-export-import-excel

## Decisions
- changeScope: edit_page T-XLS-S14 · typed 21 KEEP · Schema_CsdlBieu14 KEEP · **cấm** reopen
- export: GET …/export?resource=its-systems (+filter+deviceType) · sheet Biểu 14 · 21 cols · `Bieu14_HeThongITS_{yyyyMMdd}.xls`
- import: **DEFER P1 ẩn** · export_only_p0
- Q-XLS: filtered · filter-all · one_sheet · device+infra+GPS cùng hàng · **cấm** filter-bar export · **cấm** 12+8 · **cấm** sheet TB/HT · **cấm** streaming
- migration: none · BFF proxy reuse
- build: yarn build PASS · dotnet Api+Bff PASS
- e2e: queued QA only

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 21) | typed prior | keep | unchanged |
| exportExcel | Xuất Excel | ToolbarButton | filtered · P0 |
| importExcel | Nhập Excel | ToolbarButton+file | DEFER P1 ẩn |

## Screens / zones (ids only)
- S-LIST · S-FORM-* KEEP · S-XLS-EXPORT · S-XLS-IMPORT (hidden)
- mfeStdUrl=http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-14

## API / tasks (ids only)
- API-XLS-01 GET export · API-XLS-02 import OUT P1 · CRUD KEEP
- T-XLS-S14-BE-01 · BFF-01 · FE-01/02 **done** · QA-01 queued · BE-02 OUT
- FE BASE /asset/csdl-records · BFF web-bff mirror

## Build
- MFE yarn build PASS
- BE dotnet build PASS (Api + Asset.Bff)
- debt: Import P1 · Auth stub · QA e2e

## UNCLEAR
- none

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-14/implement/csdl-bieu-14.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-14/STATUS.md

## Cấm (compact)
ERP.* · invent so-ts-its-camera · reopen typed · toast stub=done · filter-bar export · sheet TB/HT · streaming · Import P0 · e2e @ Dev · merge peer
