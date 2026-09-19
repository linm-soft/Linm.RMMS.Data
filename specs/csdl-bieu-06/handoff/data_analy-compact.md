# Handoff compact — data_analy

schemaVersion: 1
feature: csdl-bieu-06
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:e32c48126fa0edbd02e612b7bd917a9ae07e53ec8629dbe01e1bcdcf82759fa3
headerFingerprint: sha256:3b2f5c531f0538509147846466d92090a3c8f5adc05a4be6d1dbb80ad73ff2a7
writtenAt: 2026-09-18T04:14:00.000Z
taskId: task_4f26a959
priorTask: task_b6ef926c
resource: underpasses
columns: 19
IdCode: HC-
peerSoTs: so-ts-underpass

## Decisions
- changeScope: edit_page (T-XLS-S06 · Wave 1)
- formPattern: Slideout (keep typed · **cấm** new_page CRUD)
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · be: D:/AI-QLBD/Linm.RMMS.WebService
- export: catalogToolbar Xuất Excel · BFF binary · `/implement-export-import-excel`
- golden: Cục 16-sheet xls Biểu 6 · **cấm** hồ sơ 12+8
- filter: **cấm** export trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- peer: **cấm** gộp Sổ TS so-ts-underpass vào sheet Biểu 6
- open questions: Q-XLS-SCOPE · Q-XLS-IMPORT · Q-XLS-FILENAME

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 19) | typed prior | keep | **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | catalogToolbar |
| importExcel | Nhập Excel | ToolbarButton+file | P1 · Q-XLS-IMPORT |

## Screens / zones (ids only)
- DES-GRID-A/B/C/D keep · toolbar **+export** · filter unchanged
- Form Kind D Slideout keep (underpassKind · hộp KT)
- reviewUrl= prior prototype (Design cập nhật nút)
- peerStdUrl= http://localhost:9301/so-ts/csdl-so-sach?resource=underpasses
- mfeStdUrl= http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-06

## API / tasks (ids only)
- CRUD keep: GET/POST/PUT/DELETE …/csdl-records?resource=underpasses
- Export: GET …/csdl-records/export?resource=underpasses
- Import: POST …/csdl-records/import?resource=underpasses
- T-XLS-S06 · real-data §A+§B PASS

## UNCLEAR
- Q-XLS-SCOPE filtered vs all · Q-XLS-IMPORT now vs defer · Q-XLS-FILENAME

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-06-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-06-real-data.md
- CTX: docs/context/features/csdl-bieu-06.md
- epic: docs/context/features/csdl-export-print.md
- keep PO/Design/SA: specs/csdl-bieu-06/po|ui|be (delta only)
