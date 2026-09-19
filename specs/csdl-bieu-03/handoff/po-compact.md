# Handoff compact — po

schemaVersion: 1
feature: csdl-bieu-03
packKind: list
role: po
status: confirmed
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:57fc9dab0df1bc69fa444e65b543c8bc14b7ef9b2f12d92f72b12fa40e5cc1d9
headerFingerprint: sha256:3574a45ea4cc36f0f01b6cff9e5a7577f52fdb7a7b79508685c1038b473564d8
writtenAt: 2026-09-18T02:25:43.765Z
taskId: task_6861dd5b
resource: road-tunnels
columns: 42
IdCode: TN-
changeScope: edit_page

## Decisions
- packKind: list · Kind B + D Slideout · **cấm** report / map canvas
- changeScope: edit_page (T-XLS-S03 · Wave 1) · **giữ** typed CRUD
- Q-XLS-SCOPE: **filtered** (QS · empty=all visible)
- Q-XLS-IMPORT: **export_only_p0** · Import DEFER P1
- Q-XLS-FILENAME: `Bieu03_HamDuongBo_{yyyyMMdd}.xlsx` (SA chốt ext)
- formPattern: Slideout keep · **cấm** new_page CRUD
- tube: **1 Excel row = 1 ống** (+ GPS) · keep two_rows
- export: catalogToolbar Xuất Excel · BFF binary · `/implement-export-import-excel`
- golden: Cục 16-sheet xls Biểu 3 · **cấm** hồ sơ 12+8
- filter: **cấm** export trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- autoApprove: ON · e2eQa: ON (queued QA)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 42) | typed prior | keep | GPS×3 · tube · **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | catalogToolbar · P0 |
| importExcel | Nhập Excel | ToolbarButton+file | DEFER P1 |

## Screens / zones (ids only)
- DES-GRID-A/B/C/D keep · toolbar **+export** · filter unchanged
- Form Kind D Slideout keep (GPS/kết cấu/thoát+PCCC/thiết bị)
- reviewUrl= prior prototype (Design cập nhật nút)
- peerStdUrl= http://localhost:9301/so-ts/csdl-so-sach?resource=road-tunnels
- mfeStdUrl= http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-03

## Grid AC (ids only)
- Keep: AC-GRID-01..05 (typed regression)
- Delta: AC-XLS-01..09 (toolbar · binary · 42 cols · filtered · empty OK · toast fail · filename · golden · 1row/ống)

## API / tasks (ids only)
- CRUD keep: …/csdl-records?resource=road-tunnels
- Export P0: GET …/csdl-records/export?resource=road-tunnels (+ filter QS)
- Import P1 DEFER: POST …/import
- T-XLS-S03 · GAP-BIEU03-XLS-01..05 · XLS-TUBE

## UNCLEAR
- (none PO) · SA: filename ext · export page-all vs streaming

## Full paths
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-03/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-03-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-03-real-data.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-03/handoff/data_analy-compact.md
- epic: docs/context/features/csdl-export-print.md
