# Handoff compact — qa

schemaVersion: 1
feature: csdl-bieu-14
packKind: list
role: qa
status: done
verdict: PASS
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:e9a062f1f9eecd6bf98748db0c3f839e2247a74ecb9bcd56273d4e48d729fa0a
headerFingerprint: sha256:14cd156a898dcc971a072dd1cd1b92460a8b597558a90dc9854fead9d4c4de5c
writtenAt: 2026-09-18T02:02:00.000Z
taskId: task_fae5cc8a
priorDevTaskId: task_5163dcca
priorTypedQa: task_e13a402d · keep
resource: its-systems
columns: 21
IdCode: IT-
formNo: 14
changeScope: edit_page
formPattern: Slideout
e2eQa: ON
mfeStdUrl: http://localhost:9301/so-ts/csdl-so-sach
alias: /csdl-bieu-14
hubDeepLink: /so-ts/csdl-so-sach?resource=its-systems
peerSoTs: so-ts-its-camera · cấm merge · none_p1

## Decisions
- changeScope: edit_page (T-XLS-S14) · typed 21 KEEP · **cấm** reopen
- T-XLS-S14-QA-01 **PASS**: export `Bieu14_HeThongITS_{yyyyMMdd}.xls` · export_only_p0 · Import ẩn
- filter: **0** Xuất on LinErpListFilterBar (GAP-FILTER-BAR-08)
- E2E S0/S1/QA-20 **PASS** · PNG + manifest ok=true
- yarn e2e-qa playwright resolve fail → chrome createRequire · **cấm** kill (GAP-QA-E2E-KILL-01)
- docker API rebuild (pre: CSV stub → post: `.xls`) · start:std reuse :9301 · typecheck PASS
- **cấm** phase=done · handoff Review
- open questions: none

## Inventory (slim)
| id | label | notes |
|----|-------|-------|
| exportExcel | Xuất Excel | P0 PASS · filename lock |
| importExcel | Nhập Excel | DEFER P1 ẩn |
| (form 21) | typed KEEP | Z2 TB · Z3 HT · IT- |

## Screens / zones (ids only)
- S-LIST · S-XLS-EXPORT · S-XLS-IMPORT (hidden) · S-FORM-* KEEP
- testid=`rmms-csdl-bieu-14-list-page` · export=`…-export-excel-btn` · form=`rmms-csdl-bieu-14-form-slideout`

## Evidence (ids)
| Case | Result | sha16 |
|------|--------|-------|
| S0 | PASS | `bcaa3017b39ff004` |
| S1 | PASS | `35bde9088169398d` |
| QA-20 | PASS | `7cc961825133fc43` |
| S-XLS-EXPORT | PASS | `Bieu14_HeThongITS_20260918.xls` |

## Artifacts
| Kind | Path |
|------|------|
| scenarios | specs/csdl-bieu-14/qa/scenarios.md |
| screens | specs/csdl-bieu-14/qa/screens/{S0,S1,QA-20}.png |
| STATUS | specs/csdl-bieu-14/STATUS.md |

## Debt
- GAP-QA-E2E-PW-01 P2 · GAP-QA-ROAD-TESTID P3 · Auth DEFER · Import P1 · org DEFER

## Next
| Role | Need |
|------|------|
| **Review** | `/agent-review` · findings · **cấm** phase=done từ QA |

## Cấm (compact)
ERP.* · invent so-ts-its-camera · reopen typed · phase=done · kill worker · filter-bar export · toast stub=done · Import P0 · streaming · sheet TB/HT · 12+8
