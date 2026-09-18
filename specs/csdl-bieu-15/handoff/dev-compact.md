# Handoff compact — dev

schemaVersion: 1
feature: csdl-bieu-15
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:8a85d68eaef24cf98c312f83a3a100de25b1212e8a751d6f1f42005d38dd0fc8
headerFingerprint: sha256:0064a4903777f7ea8d51c7423d8451a20daf77a5934929001905edaa380f4fe4
writtenAt: 2026-09-18T02:40:00.000Z
taskId: task_88a1f9c1
tlTaskId: task_ad295ce2
priorTyped: task_e6ad9bf7 · keep
resource: ops-facilities
columns: 20
IdCode: OF-
formNo: 15
changeScope: edit_page
formPattern: Slideout
mfeStdUrl: http://localhost:9301/so-ts/csdl-so-sach
hubRoute: /so-ts/csdl-so-sach?resource=ops-facilities
alias: /csdl-bieu-15
peerSoTs: so-ts-toll · so-ts-rest-area · so-ts-station-house · cấm merge
devSlash: /implement-export-import-excel

## Decisions
- changeScope: edit_page T-XLS-S15 · typed 20 KEEP · Schema_CsdlBieu15 KEEP · **cấm** reopen
- export: GET …/export?resource=ops-facilities (+filter+facilityKind) · sheet Biểu 15 · 20 cols · `Bieu15_TMC_Tram_Hat_{yyyyMMdd}.xls`
- import: **DEFER P1 ẩn** · export_only_p0
- Q-XLS: filtered · filter-all · one_sheet · facility+area+equipment cùng hàng · **cấm** filter-bar export · **cấm** 12+8 · **cấm** sheet CT/TB · **cấm** streaming
- migration: none · BFF proxy reuse
- build: yarn build PASS · dotnet Api+Bff PASS
- e2e: queued QA only

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 20) | typed prior | keep | unchanged |
| exportExcel | Xuất Excel | ToolbarButton | filtered · P0 |
| importExcel | Nhập Excel | ToolbarButton+file | DEFER P1 ẩn |

## Screens / zones (ids only)
- S-LIST · S-FORM-* KEEP · S-XLS-EXPORT · S-XLS-IMPORT (hidden)
- mfeStdUrl=http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-15

## API / tasks (ids only)
- API-XLS-01 GET export · API-XLS-02 import OUT P1 · CRUD KEEP
- T-XLS-S15-BE-01 · BFF-01 · FE-01/02 **done** · QA-01 queued · BE-02 OUT
- FE BASE /asset/csdl-records · BFF web-bff mirror

## Build
- MFE yarn build PASS
- BE dotnet build PASS (Api + Asset.Bff)
- debt: Import P1 · Auth stub · QA e2e

## UNCLEAR
- none

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-15/implement/csdl-bieu-15.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-15/STATUS.md

## Cấm (compact)
ERP.* · invent so-ts-toll/rest/station · reopen typed · toast stub=done · filter-bar export · sheet CT/TB · streaming · Import P0 · e2e @ Dev · merge peer
