# Handoff compact — data_analy

schemaVersion: 1
feature: csdl-bieu-02
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:43c517bec9635b8c3ac292e54e566cf38f3ba97c86a8ce56e5b4c587427dcf40
headerFingerprint: sha256:34e1fcb051f6010fbe70ebdffab71df3d6f441a373d3be0249dd601e596d5591
writtenAt: 2026-09-17T18:43:48.000Z
taskId: task_55ac6074
resource: bridges
columns: 48
IdCode: BR-

## Decisions
- changeScope: edit_page (T-XLS-S02 · Wave 1)
- formPattern: Slideout (keep typed · **cấm** new_page CRUD)
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · be: D:/AI-QLBD/Linm.RMMS.WebService
- export: catalogToolbar Xuất Excel · BFF binary · `/implement-export-import-excel`
- golden: Cục 16-sheet xls Biểu 2 · **cấm** hồ sơ 12+8
- filter: **cấm** export trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- open questions: Q-XLS-SCOPE · Q-XLS-IMPORT · Q-XLS-FILENAME

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 48) | typed prior | keep | GPS×3 · **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | catalogToolbar |
| importExcel | Nhập Excel | ToolbarButton+file | P1 · Q-XLS-IMPORT |

## Screens / zones (ids only)
- DES-GRID-A/B/C/D keep · toolbar **+export** · filter unchanged
- Form Kind D Slideout keep
- reviewUrl= prior prototype (Design cập nhật nút)
- peerStdUrl= http://localhost:9301/so-ts/csdl-so-sach?resource=bridges
- mfeStdUrl= http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-02

## API / tasks (ids only)
- CRUD keep: GET/POST/PUT/DELETE …/csdl-records?resource=bridges
- Export: GET …/csdl-records/export?resource=bridges
- Import: POST …/csdl-records/import?resource=bridges
- T-XLS-S02 · GPS 3 điểm · real-data §A+§B PASS

## UNCLEAR
- Q-XLS-SCOPE filtered vs all · Q-XLS-IMPORT now vs defer · Q-XLS-FILENAME

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-02-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-02-real-data.md
- CTX: docs/context/features/csdl-bieu-02.md
- epic: docs/context/features/csdl-export-print.md
- keep PO/Design/SA: specs/csdl-bieu-02/po|ui|be (delta only)
