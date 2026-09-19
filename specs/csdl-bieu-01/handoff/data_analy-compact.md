# Handoff compact — data_analy

schemaVersion: 1
feature: csdl-bieu-01
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:b48e58e637a1dd4fc9e14298a0063d34c89eadb1ea02ba756b561b4648d4b085
headerFingerprint: sha256:6376475bbf48ca5b3e8cfd26688cd877fd1bc77d5b8d8c4c3d314cd0572f5cf2
writtenAt: 2026-09-17T17:40:33.868Z
taskId: task_7168eb6e
resource: pavement-sections
columns: 38
IdCode: MD-

## Decisions
- changeScope: edit_page (T-XLS-S01 · Wave 1)
- formPattern: Slideout (keep typed · **cấm** new_page CRUD)
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · be: D:/AI-QLBD/Linm.RMMS.WebService
- export: catalogToolbar Xuất Excel · BFF binary · `/implement-export-import-excel`
- golden: Cục 16-sheet xls Biểu 1 · **cấm** hồ sơ 12+8
- filter: **cấm** export trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- open questions: Q-XLS-SCOPE · Q-XLS-IMPORT · Q-XLS-FILENAME

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 38) | typed prior | keep | **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | catalogToolbar |
| importExcel | Nhập Excel | ToolbarButton+file | P1 · Q-XLS-IMPORT |

## Screens / zones (ids only)
- DES-GRID-A/B/C/D keep · toolbar **+export** · filter unchanged
- Form Kind D Slideout keep
- reviewUrl= prior prototype (Design cập nhật nút)
- peerStdUrl= http://localhost:9301/so-ts/csdl-so-sach?resource=pavement-sections
- mfeStdUrl= http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-01

## API / tasks (ids only)
- CRUD keep: GET/POST/PUT/DELETE …/csdl-records?resource=pavement-sections
- Export: GET …/csdl-records/export?resource=pavement-sections
- Import: POST …/csdl-records/import?resource=pavement-sections
- T-XLS-S01 · skip-bridge · real-data §A+§B PASS

## UNCLEAR
- Q-XLS-SCOPE filtered vs all · Q-XLS-IMPORT now vs defer · Q-XLS-FILENAME

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-01-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-01-real-data.md
- CTX: docs/context/features/csdl-bieu-01.md
- epic: docs/context/features/csdl-export-print.md
- keep PO/Design/SA: specs/csdl-bieu-01/po|ui|be (delta only)
