# Handoff compact — dev

schemaVersion: 1
feature: csdl-bieu-04
packKind: list
role: dev
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:eef182add5b68de5b3e27ec36ed9c099689831aeb77742814aa296bf286243f9
headerFingerprint: sha256:8b98f7a22739bdad37b67a7ef869d6c465edc38061f0d5853fe2e69758d4ccea
writtenAt: 2026-09-18T03:45:00.000Z
taskId: task_421286ef
tlTaskId: task_7925d902
resource: culverts
columns: 17
IdCode: CG-
changeScope: edit_page
formPattern: Slideout
route_confirm: keep
yarnBuild: PASS
dotnetBuild: PASS
migration: none
peerSoTs: so-ts-culvert-x
mfeStdUrl: http://localhost:9301/so-ts/csdl-so-sach
hubDeepLink: /so-ts/csdl-so-sach?resource=culverts

## Decisions
- changeScope: edit_page (T-XLS-S04) · typed CRUD **KEEP** · **cấm** reopen 17-col
- export: catalogToolbar Xuất Excel · BFF binary · filter-all · ignore page
- Q-XLS-SCOPE: filtered · FILENAME: `Bieu04_CongCacLoai_{yyyyMMdd}.xls` · Import **DEFER P1** ẩn
- golden: sheet «Biểu 4» · control-hint headers · GPS four_xy · **cấm** 12+8
- filter: **cấm** Xuất trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- peer: **cấm** gộp so-ts-culvert-x (GAP-BIEU04-XLS-PEER)
- API: GET `…/csdl-records/export?resource=culverts` (+ kmPoint) · **cấm ERP.***
- BFF proxy KEEP · no new migration

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 17) | typed prior | keep | GPS four_xy · **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | P0 · filtered · binary · DONE |
| importExcel | Nhập Excel | ToolbarButton+file | DEFER P1 · ẩn |

## Screens / zones (ids only)
- S-LIST DES-GRID KEEP · toolbar +export · S-XLS-EXPORT DONE · S-XLS-IMPORT hidden
- S-FORM-* KEEP · mfeStdUrl · hub=?resource=culverts

## APIs / debt
- API-XLS-01 DONE · API-XLS-02 DEFER
- yarnBuild PASS · dotnetBuild PASS
- debt: T-PERM-01 · Import P1 · GAP-QA-E2E-PW-01 · GAP-CSDL-ORG-01
- Next: QA T-XLS-QA-01 · AC-XLS-01..09 · AC-GRID regression

## UNCLEAR
- none

## Full paths
- implement: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-04/implement/csdl-bieu-04.md
- task: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-04/task/csdl-bieu-04.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-04/STATUS.md
