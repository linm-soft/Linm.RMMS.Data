# Handoff compact — qa

schemaVersion: 1
feature: csdl-bieu-04
packKind: list
role: qa
status: done
verdict: PASS
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:eef182add5b68de5b3e27ec36ed9c099689831aeb77742814aa296bf286243f9
headerFingerprint: sha256:8b98f7a22739bdad37b67a7ef869d6c465edc38061f0d5853fe2e69758d4ccea
writtenAt: 2026-09-18T03:30:00.000Z
taskId: task_dfa20851
priorDevTaskId: task_421286ef
resource: culverts
columns: 17
IdCode: CG-
changeScope: edit_page
formPattern: Slideout
e2eQa: ON
mfeStdUrl: http://localhost:9301/so-ts/csdl-so-sach
alias: /csdl-bieu-04

## Decisions
- changeScope: edit_page (T-XLS-S04) · CRUD KEEP · **cấm** reopen 17-col
- T-XLS-QA-01 **PASS**: export filename `Bieu04_CongCacLoai_{yyyyMMdd}.xls` · Import DEFER ẩn
- filter: **0** Xuất on LinErpListFilterBar (GAP-FILTER-BAR-08)
- peer: **cấm** merge so-ts-culvert-x (GAP-BIEU04-XLS-PEER)
- E2E S0/S1/QA-20 **PASS** · PNG + manifest ok=true
- yarn e2e-qa playwright resolve fail → chrome createRequire · **cấm** kill (GAP-QA-E2E-KILL-01)
- docker rebuild API+BFF required for Dev XLS ship
- **cấm** phase=done · handoff Review
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| exportExcel | Xuất Excel | ToolbarButton | filtered · PASS |
| importExcel | Nhập Excel | ToolbarButton+file | DEFER P1 · ẩn · PASS |
| (form 17) | typed prior | keep | KEEP QA-20 |

## Screens / zones (ids only)
- S-LIST · S-XLS-EXPORT · S-XLS-IMPORT (hidden) · S-FORM-C KEEP · S-HUB-ENTRY
- testid=`rmms-csdl-bieu-04-list-page` · `…-export-excel-btn`

## API / tasks (ids only)
- T-XLS-QA-01 **PASS** · AC-XLS-01..09 · T-QA-* KEEP smoke
- API-XLS-01 runtime via FE blob + BFF

## Evidence (ids)
| Case | Result | sha16 |
|------|--------|-------|
| S0 | PASS | 7711d52bfb8f8a33 |
| S1 | PASS | 7711d52bfb8f8a33 |
| QA-20 | PASS | f05a1b2dcc83eeb0 |

## Debt
- GAP-QA-E2E-PW-01 P2 · Auth DEFER · Import P1 · GAP-CSDL-ORG-01

## UNCLEAR
- none

## Full paths (Read only if needed)
- scenarios: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-04/qa/scenarios.md
- screens: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-04/qa/screens/
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-04/STATUS.md
- prior: handoff/dev-compact.md
