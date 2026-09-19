# Handoff compact — dev

schemaVersion: 1
feature: csdl-bieu-05
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:9e3e8cf8e90fb3a3e8252d1725b78ea2494b171d3b7507d0a57b13c7052da728
headerFingerprint: sha256:008898723c0a5b94fae7de8810903b1dcc39ccfd0dfa5d4a36dd398eb088ac2f
writtenAt: 2026-09-18T04:00:00.000Z
taskId: task_e8abedcb
tlTaskId: task_1a82385e
resource: ditches
columns: 18
IdCode: RN-
changeScope: edit_page
formPattern: Slideout
route_confirm: keep
yarnBuild: PASS
dotnetBuild: PASS
migration: none
peerSoTs: so-ts-ditch
mfeStdUrl: http://localhost:9301/so-ts/csdl-so-sach
hubDeepLink: /so-ts/csdl-so-sach?resource=ditches

## Decisions
- changeScope: edit_page (T-XLS-S05) · typed CRUD **KEEP** · **cấm** reopen 18-col
- export: catalogToolbar Xuất Excel · BFF binary · filter-all · ignore page
- Q-XLS-SCOPE: filtered · FILENAME: `Bieu05_RanhCacLoai_{yyyyMMdd}.xls` · Import **DEFER P1** ẩn
- golden: sheet «Biểu 5» · 18 cols control-hint · ditchKind/shape/range · **cấm** 12+8
- filter: **cấm** Xuất trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- peer: **cấm** gộp so-ts-ditch (GAP-BIEU05-XLS-PEER)
- API: GET `…/csdl-records/export?resource=ditches` (+ ditchKind · kmFrom/kmTo) · **cấm ERP.***
- BFF proxy KEEP · no new migration

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 18) | typed prior | keep | ditchKind · shape · range · **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | P0 · filtered · binary · DONE |
| importExcel | Nhập Excel | ToolbarButton+file | DEFER P1 · ẩn |

## Screens / zones (ids only)
- S-LIST DES-GRID KEEP · toolbar +export · S-XLS-EXPORT DONE · S-XLS-IMPORT hidden
- S-FORM-* KEEP · mfeStdUrl · hub=?resource=ditches

## APIs / debt
- API-XLS-01 DONE · API-XLS-02 DEFER
- yarnBuild PASS · dotnetBuild PASS (API+Bff)
- debt: T-PERM-01 · Import P1 · GAP-QA-E2E-PW-01 · GAP-CSDL-ORG-01
- Next: QA T-XLS-QA-01 · AC-XLS-01..09 · AC-GRID regression

## UNCLEAR
- none

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-05/implement/csdl-bieu-05.md
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-05/task/csdl-bieu-05.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-05/STATUS.md
