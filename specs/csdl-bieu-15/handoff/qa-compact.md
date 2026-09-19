# Handoff compact — qa

schemaVersion: 1
feature: csdl-bieu-15
packKind: list
role: qa
status: done
verdict: PASS
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:8a85d68eaef24cf98c312f83a3a100de25b1212e8a751d6f1f42005d38dd0fc8
headerFingerprint: sha256:0064a4903777f7ea8d51c7423d8451a20daf77a5934929001905edaa380f4fe4
writtenAt: 2026-09-18T02:41:00.000Z
taskId: task_2d0725d3
priorDevTaskId: task_88a1f9c1
priorTypedQa: task_cb969365 · keep
resource: ops-facilities
columns: 20
IdCode: OF-
formNo: 15
changeScope: edit_page
formPattern: Slideout
e2eQa: ON
mfeStdUrl: http://localhost:9301/so-ts/csdl-so-sach
alias: /csdl-bieu-15
hubDeepLink: /so-ts/csdl-so-sach?resource=ops-facilities
peerSoTs: so-ts-toll · so-ts-rest-area · so-ts-station-house · cấm merge · none_p1

## Decisions
- changeScope: edit_page (T-XLS-S15) · typed 20 KEEP · **cấm** reopen
- T-XLS-S15-QA-01 **PASS**: export `Bieu15_TMC_Tram_Hat_{yyyyMMdd}.xls` · export_only_p0 · Import ẩn
- filter: **0** Xuất on LinErpListFilterBar (GAP-FILTER-BAR-08)
- E2E S0/S1/QA-20 **PASS** · PNG + manifest ok=true
- yarn e2e-qa playwright resolve fail → chrome createRequire · **cấm** kill (GAP-QA-E2E-KILL-01)
- docker API+BFF rebuild (pre: CSV stub → post: `.xls`) · start:std reuse :9301
- **cấm** phase=done · handoff Review
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 20) | typed keep | — | CRUD KEEP |
| exportExcel | Xuất Excel | ToolbarButton | P0 · filtered |
| importExcel | — | — | DEFER P1 ẩn |

## Screens / zones (ids only)
- S0 list · S1 hub redirect · QA-20 Slideout · S-XLS-EXPORT
- mfeStdUrl=http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-15

## Evidence
- manifest ok=true · capturedAt 2026-09-18T02:40:28.576Z
- SHA256_16 S0=889e611b9d7ddb8d · S1=47b664218df534e0 · QA-20=4d5914adbda87210
- live-assert exportCheck fileName=Bieu15_TMC_Tram_Hat_20260918.xls · hasImport=false · filterBarHasExport=false
- form-assert Z2/Z3 · OF- · data-form-cols=2

## Full paths
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-15/qa/scenarios.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-15/qa/screens/
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-15/STATUS.md

## Next
| Role | Need |
|------|------|
| **Review** | `/agent-review` · findings · review_confirm |

## Cấm (compact)
ERP.* · invent infra · phase=done · kill worker · toast stub=done · filter-bar export · merge peer · Import P0 · reopen typed
