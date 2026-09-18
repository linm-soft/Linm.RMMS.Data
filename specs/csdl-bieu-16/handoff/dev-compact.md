# Handoff compact — dev

schemaVersion: 1
feature: csdl-bieu-16
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:c71543b66c4f1d28f5dbae1743c1042e0bb9f12ab9c0efc55d9668af2a38e072
headerFingerprint: sha256:ec787bf2008ae89f1b6c085fe238f1b0d50b048f5c672b90b68d9ea102cf8fcc
writtenAt: 2026-09-18T03:15:00.000Z
taskId: task_ba6998df
tlTaskId: task_1793bfbe
priorTyped: task_71eac21e · keep · review task_628c95a5 PASS
resource: interchanges
columns: 39
IdCode: IX-
formNo: 16
changeScope: edit_page
formPattern: Slideout
mfeStdUrl: http://localhost:9301/so-ts/csdl-so-sach
hubRoute: /so-ts/csdl-so-sach?resource=interchanges
alias: /csdl-bieu-16
peerSoTs: so-ts-interchange · cấm merge
devSlash: /implement-export-import-excel

## Decisions
- changeScope: edit_page T-XLS-S16 · typed 39 KEEP · Schema_CsdlBieu16+Branch KEEP · **cấm** reopen
- export: GET …/export?resource=interchanges (+filter+interchangeType+kmMain) · sheet Biểu 16 · 39 cols · flatten 1 row/nhánh · header_blank · `Bieu16_NutGiao_{yyyyMMdd}.xls`
- import: **DEFER P1 ẩn** · export_only_p0
- Q-XLS: filtered · filter-all · name_cuc · **cấm** filter-bar export · **cấm** 12+8 · **cấm** sheet Branch · **cấm** streaming
- migration: none · BFF proxy reuse
- build: yarn build PASS · dotnet Api+Bff PASS
- e2e: queued QA only

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 39 + branches) | typed prior | keep | unchanged |
| exportExcel | Xuất Excel | ToolbarButton | filtered · flatten · P0 |
| importExcel | Nhập Excel | ToolbarButton+file | DEFER P1 ẩn |

## Screens / zones (ids only)
- S-LIST · S-FORM-* · DES-FORM-BRANCH KEEP · S-XLS-EXPORT · S-XLS-IMPORT (hidden)
- mfeStdUrl=http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-16

## API / tasks (ids only)
- API-XLS-01 GET export · API-XLS-02 import OUT P1 · CRUD KEEP
- T-XLS-S16-BE-01 · BFF-01 · FE-01/02 **done** · QA-01 queued · BE-02 OUT
- FE BASE /asset/csdl-records · BFF web-bff mirror

## Build
- MFE yarn build PASS
- BE dotnet build PASS (Api + Asset.Bff)
- debt: Import P1 · Auth stub · QA e2e

## UNCLEAR
- none

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-16/implement/csdl-bieu-16.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-16/STATUS.md

## Cấm (compact)
ERP.* · invent so-ts-interchange · reopen typed · toast stub=done · filter-bar export · sheet Branch · streaming · Import P0 · e2e @ Dev · merge peer · golden 12+8
