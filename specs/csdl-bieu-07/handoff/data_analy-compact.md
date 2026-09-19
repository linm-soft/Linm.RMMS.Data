# Handoff compact — data_analy

schemaVersion: 1
feature: csdl-bieu-07
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:1250b5799e9174b21429e60e57abef17cb7d6c568ae417840c57b598f204a69a
headerFingerprint: sha256:ba33856d00d23440b05be8c78c8b8a5462662c96a1067e702b791eb5020d64cf
writtenAt: 2026-09-18T04:22:00.000Z
taskId: task_9ab3979a
priorTask: task_480d8882
resource: shoulders-fences
columns: 20
IdCode: LE-
peerSoTs: SHOULDER

## Decisions
- changeScope: edit_page (T-XLS-S07 · Wave 1)
- formPattern: Slideout (keep typed · **cấm** new_page CRUD)
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · be: D:/AI-QLBD/Linm.RMMS.WebService
- export: catalogToolbar Xuất Excel · BFF binary · `/implement-export-import-excel`
- golden: Cục 16-sheet xls Biểu 7 · **cấm** hồ sơ 12+8
- filter: **cấm** export trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- peer: **cấm** gộp Sổ TS SHOULDER vào sheet Biểu 7
- open questions: Q-XLS-SCOPE · Q-XLS-IMPORT · Q-XLS-FILENAME

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 20) | typed prior | keep | **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | catalogToolbar |
| importExcel | Nhập Excel | ToolbarButton+file | P1 · Q-XLS-IMPORT |

## Screens / zones (ids only)
- DES-GRID-A/B/C/D keep · toolbar **+export** · filter unchanged
- Form Kind D Slideout keep (3 khối lề/taluy/HR)
- reviewUrl= prior prototype (Design cập nhật nút)
- peerStdUrl= http://localhost:9301/so-ts/csdl-so-sach?resource=shoulders-fences
- mfeStdUrl= http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-07

## API / tasks (ids only)
- CRUD keep: GET/POST/PUT/DELETE …/csdl-records?resource=shoulders-fences
- Export: GET …/csdl-records/export?resource=shoulders-fences
- Import: POST …/csdl-records/import?resource=shoulders-fences
- T-XLS-S07 · real-data §A+§B PASS

## UNCLEAR
- Q-XLS-SCOPE filtered vs all · Q-XLS-IMPORT now vs defer · Q-XLS-FILENAME

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-07-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-07-real-data.md
- CTX: docs/context/features/csdl-bieu-07.md
- epic: docs/context/features/csdl-export-print.md
- keep PO/Design/SA: specs/csdl-bieu-07/po|ui|be (delta only)
