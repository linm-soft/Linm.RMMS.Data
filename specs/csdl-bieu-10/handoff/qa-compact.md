# Handoff compact — qa

schemaVersion: 1
feature: csdl-bieu-10
packKind: list
role: qa
status: done
verdict: PASS
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:49ea64d3b8f51e899c4bb36ae444444b4c0a805e64349f8e1f52677909ab0302
headerFingerprint: sha256:9d4863dcab46439966e526cc7696f137695022911a3edc5066c852dc779fa598
writtenAt: 2026-09-18T06:45:00.000Z
taskId: task_1269f635
priorDevTaskId: task_4dfcfa0a
resource: retaining-walls
columns: 21
blocks: 2
IdCode: KE-
formNo: 10
changeScope: edit_page
formPattern: Slideout
e2eQa: ON
mfeStdUrl: http://localhost:9301/so-ts/csdl-so-sach
alias: /csdl-bieu-10
hubDeepLink: /so-ts/csdl-so-sach?resource=retaining-walls
peerSoTs: so-ts-retaining

## Decisions
- changeScope: edit_page (T-XLS-S10) · typed 21/2 KEEP · **cấm** reopen
- T-XLS-QA-01 **PASS**: export `Bieu10_KeTuongChan_{yyyyMMdd}.xls` · import_now · toolbar Xuất/Nhập
- filter: **0** Xuất on LinErpListFilterBar (GAP-FILTER-BAR-08)
- height_alias: export filename + FE map KEEP
- E2E S0/S1/QA-20 **PASS** · PNG + manifest ok=true
- yarn e2e-qa playwright resolve fail → chrome createRequire · **cấm** kill (GAP-QA-E2E-KILL-01)
- yarn typecheck **PASS** · docker api/bff healthy
- **cấm** phase=done · handoff Review
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| exportExcel | Xuất Excel | ToolbarButton | filtered+wallKind · PASS |
| importExcel | Nhập Excel | ToolbarButton+file | import_now · PASS |
| (form 21/2) | typed prior | keep | KEEP QA-20 |

## Screens / zones (ids only)
- S-LIST · S-XLS-EXPORT · S-XLS-IMPORT · S-FORM-C KEEP · S-HUB-ENTRY · S-PEER
- testid=`rmms-csdl-bieu-10-list-page` · `…-export-excel-btn` · `…-import-excel-btn`

## API / tasks (ids only)
- T-XLS-QA-01 **PASS** · T-QA-* KEEP smoke
- API-XLS-01/02 runtime via FE blob/file

## Evidence (ids)
| Case | Result | sha16 |
|------|--------|-------|
| S0 | PASS | 71d4adf9c5e61eb1 |
| S1 | PASS | 71d4adf9c5e61eb1 |
| QA-20 | PASS | f5c5632c921add62 |
| export | PASS | Bieu10_KeTuongChan_20260918.xls |

## Debt
- GAP-QA-E2E-PW-01 P2 · Auth DEFER · getBlob CD strip verified · BIFF N/A

## UNCLEAR
- none

## Full paths (Read only if needed)
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-10/qa/scenarios.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-10/qa/screens/
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-10/STATUS.md
- prior: handoff/dev-compact.md

## Cấm (compact)
ERP.* · invent API · phase=done · kill worker rộng · start role khác · filter-bar export · reopen typed
