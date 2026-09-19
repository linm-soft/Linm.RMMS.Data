# Handoff compact — po

schemaVersion: 1
feature: csdl-bieu-04
packKind: list
role: po
status: confirmed
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:eef182add5b68de5b3e27ec36ed9c099689831aeb77742814aa296bf286243f9
headerFingerprint: sha256:8b98f7a22739bdad37b67a7ef869d6c465edc38061f0d5853fe2e69758d4ccea
writtenAt: 2026-09-18T03:00:00.000Z
taskId: task_5062adbc
resource: culverts
columns: 17
IdCode: CG-
changeScope: edit_page
peerSoTs: so-ts-culvert-x

## Decisions
- packKind: list · Kind B + D Slideout · **cấm** report / map canvas
- changeScope: edit_page (T-XLS-S04 · Wave 1) · **giữ** typed CRUD
- Q-XLS-SCOPE: **filtered** (QS · empty=all visible)
- Q-XLS-IMPORT: **export_only_p0** · Import DEFER P1
- Q-XLS-FILENAME: `Bieu04_CongCacLoai_{yyyyMMdd}.xlsx` (SA chốt ext)
- formPattern: Slideout keep · **cấm** new_page CRUD
- export: catalogToolbar Xuất Excel · BFF binary · `/implement-export-import-excel`
- golden: Cục 16-sheet xls Biểu 4 · **cấm** hồ sơ 12+8
- filter: **cấm** export trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- peer: **cấm** gộp Sổ TS so-ts-culvert-x vào sheet Biểu 4
- autoApprove: ON · e2eQa: ON (queued QA)
- open questions: none (autopilot chốt)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 17) | typed prior | keep | GPS four_xy · shape · **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | catalogToolbar · P0 |
| importExcel | Nhập Excel | ToolbarButton+file | DEFER P1 |

## Screens / zones (ids only)
- DES-GRID-A/B/C/D keep · toolbar **+export** · filter unchanged
- Form Kind D Slideout keep (GPS four_xy · shape · load)
- reviewUrl= prior prototype (Design cập nhật nút)
- peerStdUrl= http://localhost:9301/so-ts/csdl-so-sach?resource=culverts
- mfeStdUrl= http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-04
- Leave: LeaveConfirmModal · **cấm** native alert

## Grid AC (ids only)
- Keep: AC-GRID-01..05 (typed regression)
- Delta: AC-XLS-01..09 (toolbar · binary · 17 cols · filtered · empty OK · toast fail · filename · golden · peer no-merge)

## API / tasks (ids only)
- CRUD keep: …/csdl-records?resource=culverts
- Export P0: GET …/csdl-records/export?resource=culverts (+ filter QS)
- Import P1 DEFER: POST …/import
- T-XLS-S04 · GAP-BIEU04-XLS-01..05 · GAP-BIEU04-XLS-PEER
- Grid AC flags: PASS · Report AC: N/A

## UNCLEAR
- (none PO) · SA: filename ext · export page-all vs streaming

## Full paths
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-04/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-04-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-04-real-data.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-04/handoff/data_analy-compact.md
- epic: docs/context/features/csdl-export-print.md
- keep Design/SA: specs/csdl-bieu-04/ui|be (delta only)
