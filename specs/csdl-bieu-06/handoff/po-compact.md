# Handoff compact — po

schemaVersion: 1
feature: csdl-bieu-06
packKind: list
role: po
status: confirmed
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:e32c48126fa0edbd02e612b7bd917a9ae07e53ec8629dbe01e1bcdcf82759fa3
headerFingerprint: sha256:3b2f5c531f0538509147846466d92090a3c8f5adc05a4be6d1dbb80ad73ff2a7
writtenAt: 2026-09-18T04:20:00.000Z
taskId: task_fec070f9
resource: underpasses
columns: 19
IdCode: HC-
changeScope: edit_page
peerSoTs: so-ts-underpass

## Decisions
- packKind: list · Kind B + D Slideout · **cấm** report / map canvas
- changeScope: edit_page (T-XLS-S06 · Wave 1) · **giữ** typed CRUD
- Q-XLS-SCOPE: **filtered** (QS · empty=all visible)
- Q-XLS-IMPORT: **export_only_p0** · Import DEFER P1
- Q-XLS-FILENAME: `Bieu06_HamChuiHopKT_{yyyyMMdd}.xlsx` (SA chốt ext)
- formPattern: Slideout keep · **cấm** new_page CRUD
- export: catalogToolbar Xuất Excel · BFF binary · `/implement-export-import-excel`
- golden: Cục 16-sheet xls Biểu 6 · **cấm** hồ sơ 12+8
- filter: **cấm** export trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- peer: **cấm** gộp Sổ TS so-ts-underpass vào sheet Biểu 6
- autoApprove: ON · e2eQa: ON (queued QA)
- open questions: none (autopilot chốt)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 19) | typed prior | keep | underpassKind · hộp KT · **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | catalogToolbar · P0 |
| importExcel | Nhập Excel | ToolbarButton+file | DEFER P1 |

## Screens / zones (ids only)
- DES-GRID-A/B/C/D keep · toolbar **+export** · filter unchanged
- Form Kind D Slideout keep (underpassKind · hộp KT)
- reviewUrl= prior prototype (Design cập nhật nút)
- peerStdUrl= http://localhost:9301/so-ts/csdl-so-sach?resource=underpasses
- mfeStdUrl= http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-06
- Leave: LeaveConfirmModal · **cấm** native alert

## Grid AC (ids only)
- Keep: AC-GRID-01..05 (typed regression)
- Delta: AC-XLS-01..09 (toolbar · binary · 19 cols · filtered · empty OK · toast fail · filename · golden · peer no-merge)

## API / tasks (ids only)
- CRUD keep: …/csdl-records?resource=underpasses
- Export P0: GET …/csdl-records/export?resource=underpasses (+ filter QS)
- Import P1 DEFER: POST …/import
- T-XLS-S06 · GAP-BIEU06-XLS-01..05 · GAP-BIEU06-XLS-PEER
- Grid AC flags: PASS · Report AC: N/A

## UNCLEAR
- (none PO) · SA: filename ext · export page-all vs streaming

## Full paths
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-06/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-06-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-06-real-data.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-06/handoff/data_analy-compact.md
- epic: docs/context/features/csdl-export-print.md
- keep Design/SA: specs/csdl-bieu-06/ui|be (delta only)
