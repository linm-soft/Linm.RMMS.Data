# Handoff compact — po

schemaVersion: 1
feature: csdl-bieu-02
packKind: list
role: po
status: confirmed
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:43c517bec9635b8c3ac292e54e566cf38f3ba97c86a8ce56e5b4c587427dcf40
headerFingerprint: sha256:34e1fcb051f6010fbe70ebdffab71df3d6f441a373d3be0249dd601e596d5591
writtenAt: 2026-09-18T01:47:00.000Z
taskId: task_f1ae575f
resource: bridges
columns: 48
IdCode: BR-
changeScope: edit_page

## Decisions
- packKind: list · Kind B + D Slideout · **cấm** report / map canvas
- changeScope: edit_page (T-XLS-S02 · Wave 1) · **giữ** typed CRUD
- Q-XLS-SCOPE: **filtered** (QS · empty=all visible)
- Q-XLS-IMPORT: **export_only_p0** · Import DEFER P1
- Q-XLS-FILENAME: `Bieu02_ThongKeCau_{yyyyMMdd}.xlsx` (SA chốt ext)
- formPattern: Slideout keep · **cấm** new_page CRUD
- export: catalogToolbar Xuất Excel · BFF binary · `/implement-export-import-excel`
- golden: Cục 16-sheet xls Biểu 2 · **cấm** hồ sơ 12+8
- filter: **cấm** export trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- autoApprove: ON · e2eQa: ON (queued QA)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 48) | typed prior | keep | GPS×3 · **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | catalogToolbar · P0 |
| importExcel | Nhập Excel | ToolbarButton+file | DEFER P1 |

## Screens / zones (ids only)
- DES-GRID-A/B/C/D keep · toolbar **+export** · filter unchanged
- Form Kind D Slideout keep
- reviewUrl= prior prototype (Design cập nhật nút)
- peerStdUrl= http://localhost:9301/so-ts/csdl-so-sach?resource=bridges
- mfeStdUrl= http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-02

## Grid AC (ids only)
- Keep: AC-GRID-01..05 (typed regression)
- Delta: AC-XLS-01..08 (toolbar · binary · 48 cols · filtered · empty OK · toast fail · filename · golden)

## API / tasks (ids only)
- CRUD keep: …/csdl-records?resource=bridges
- Export P0: GET …/csdl-records/export?resource=bridges (+ filter QS)
- Import P1 DEFER: POST …/import
- T-XLS-S02 · GAP-BIEU02-XLS-01..06

## UNCLEAR
- (none PO) · SA: filename ext · export page-all vs streaming

## Full paths
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-02/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-02-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-02-real-data.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-02/handoff/data_analy-compact.md
- epic: docs/context/features/csdl-export-print.md
