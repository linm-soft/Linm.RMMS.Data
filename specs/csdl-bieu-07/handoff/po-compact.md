# Handoff compact — po

schemaVersion: 1
feature: csdl-bieu-07
packKind: list
role: po
status: confirmed
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:1250b5799e9174b21429e60e57abef17cb7d6c568ae417840c57b598f204a69a
headerFingerprint: sha256:ba33856d00d23440b05be8c78c8b8a5462662c96a1067e702b791eb5020d64cf
writtenAt: 2026-09-18T04:25:00.000Z
taskId: task_58ae864f
resource: shoulders-fences
columns: 20
IdCode: LE-
changeScope: edit_page
peerSoTs: SHOULDER

## Decisions
- packKind: list · Kind B + D Slideout · **cấm** report / map canvas
- changeScope: edit_page (T-XLS-S07 · Wave 1) · **giữ** typed CRUD
- Q-XLS-SCOPE: **filtered** (QS · empty=all visible)
- Q-XLS-IMPORT: **export_only_p0** · Import DEFER P1
- Q-XLS-FILENAME: `Bieu07_LeTaluyHangRao_{yyyyMMdd}.xlsx` (SA chốt ext)
- formPattern: Slideout keep · **cấm** new_page CRUD
- export: catalogToolbar Xuất Excel · BFF binary · `/implement-export-import-excel`
- golden: Cục 16-sheet xls Biểu 7 · **cấm** hồ sơ 12+8
- filter: **cấm** export trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- peer: **cấm** gộp Sổ TS SHOULDER vào sheet Biểu 7
- autoApprove: ON · e2eQa: ON (queued QA)
- open questions: none (autopilot chốt)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 20) | typed prior | keep | 3 khối lề/taluy/HR · **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | catalogToolbar · P0 |
| importExcel | Nhập Excel | ToolbarButton+file | DEFER P1 |

## Screens / zones (ids only)
- DES-GRID-A/B/C/D keep · toolbar **+export** · filter unchanged
- Form Kind D Slideout keep (3 khối)
- reviewUrl= prior prototype (Design cập nhật nút)
- peerStdUrl= http://localhost:9301/so-ts/csdl-so-sach?resource=shoulders-fences
- mfeStdUrl= http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-07
- Leave: LeaveConfirmModal · **cấm** native alert

## Grid AC (ids only)
- Keep: AC-GRID-01..05 (typed regression)
- Delta: AC-XLS-01..09 (toolbar · binary · 20 cols · filtered · empty OK · toast fail · filename · golden · peer no-merge)

## API / tasks (ids only)
- CRUD keep: …/csdl-records?resource=shoulders-fences
- Export P0: GET …/csdl-records/export?resource=shoulders-fences (+ filter QS)
- Import P1 DEFER: POST …/import
- T-XLS-S07 · GAP-BIEU07-XLS-01..05 · GAP-BIEU07-XLS-PEER
- Grid AC flags: PASS · Report AC: N/A

## UNCLEAR
- (none PO) · SA: filename ext · export page-all vs streaming

## Full paths
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-07/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-07-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-07-real-data.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-07/handoff/data_analy-compact.md
- epic: docs/context/features/csdl-export-print.md
- keep Design/SA: specs/csdl-bieu-07/ui|be (delta only)
