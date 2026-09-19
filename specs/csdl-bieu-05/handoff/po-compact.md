# Handoff compact — po

schemaVersion: 1
feature: csdl-bieu-05
packKind: list
role: po
status: confirmed
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:9e3e8cf8e90fb3a3e8252d1725b78ea2494b171d3b7507d0a57b13c7052da728
headerFingerprint: sha256:008898723c0a5b94fae7de8810903b1dcc39ccfd0dfa5d4a36dd398eb088ac2f
writtenAt: 2026-09-18T03:40:10.155Z
taskId: task_95f9a16f
resource: ditches
columns: 18
IdCode: RN-
changeScope: edit_page
peerSoTs: so-ts-ditch

## Decisions
- packKind: list · Kind B + D Slideout · **cấm** report / map canvas
- changeScope: edit_page (T-XLS-S05 · Wave 1) · **giữ** typed CRUD
- Q-XLS-SCOPE: **filtered** (QS · empty=all visible)
- Q-XLS-IMPORT: **export_only_p0** · Import DEFER P1
- Q-XLS-FILENAME: `Bieu05_RanhCacLoai_{yyyyMMdd}.xlsx` (SA chốt ext)
- formPattern: Slideout keep · **cấm** new_page CRUD
- export: catalogToolbar Xuất Excel · BFF binary · `/implement-export-import-excel`
- golden: Cục 16-sheet xls Biểu 5 · **cấm** hồ sơ 12+8
- filter: **cấm** export trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- peer: **cấm** gộp Sổ TS so-ts-ditch vào sheet Biểu 5
- autoApprove: ON · e2eQa: ON (queued QA)
- open questions: none (autopilot chốt)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 18) | typed prior | keep | ditchKind · shape · range · **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | catalogToolbar · P0 |
| importExcel | Nhập Excel | ToolbarButton+file | DEFER P1 |

## Screens / zones (ids only)
- DES-GRID-A/B/C/D keep · toolbar **+export** · filter unchanged
- Form Kind D Slideout keep (ditchKind · shape · range)
- reviewUrl= prior prototype (Design cập nhật nút)
- peerStdUrl= http://localhost:9301/so-ts/csdl-so-sach?resource=ditches
- mfeStdUrl= http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-05
- Leave: LeaveConfirmModal · **cấm** native alert

## Grid AC (ids only)
- Keep: AC-GRID-01..05 (typed regression)
- Delta: AC-XLS-01..09 (toolbar · binary · 18 cols · filtered · empty OK · toast fail · filename · golden · peer no-merge)

## API / tasks (ids only)
- CRUD keep: …/csdl-records?resource=ditches
- Export P0: GET …/csdl-records/export?resource=ditches (+ filter QS)
- Import P1 DEFER: POST …/import
- T-XLS-S05 · GAP-BIEU05-XLS-01..05 · GAP-BIEU05-XLS-PEER
- Grid AC flags: PASS · Report AC: N/A

## UNCLEAR
- (none PO) · SA: filename ext · export page-all vs streaming

## Full paths
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-05/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-05-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-05-real-data.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-05/handoff/data_analy-compact.md
- epic: docs/context/features/csdl-export-print.md
- keep Design/SA: specs/csdl-bieu-05/ui|be (delta only)
