# Handoff compact — data_analy

schemaVersion: 1
feature: csdl-bieu-05
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:9e3e8cf8e90fb3a3e8252d1725b78ea2494b171d3b7507d0a57b13c7052da728
headerFingerprint: sha256:008898723c0a5b94fae7de8810903b1dcc39ccfd0dfa5d4a36dd398eb088ac2f
writtenAt: 2026-09-17T20:36:21.087Z
taskId: task_a1caeb3f
resource: ditches
columns: 18
IdCode: RN-
peerSoTs: so-ts-ditch

## Decisions
- changeScope: edit_page (T-XLS-S05 · Wave 1)
- formPattern: Slideout (keep typed · **cấm** new_page CRUD)
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · be: D:/AI-QLBD/Linm.RMMS.WebService
- export: catalogToolbar Xuất Excel · BFF binary · `/implement-export-import-excel`
- golden: Cục 16-sheet xls Biểu 5 · **cấm** hồ sơ 12+8
- filter: **cấm** export trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- peer: **cấm** gộp Sổ TS so-ts-ditch vào sheet Biểu 5
- open questions: Q-XLS-SCOPE · Q-XLS-IMPORT · Q-XLS-FILENAME

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 18) | typed prior | keep | **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | catalogToolbar |
| importExcel | Nhập Excel | ToolbarButton+file | P1 · Q-XLS-IMPORT |

## Screens / zones (ids only)
- DES-GRID-A/B/C/D keep · toolbar **+export** · filter unchanged
- Form Kind D Slideout keep (ditchKind · shape · range)
- reviewUrl= prior prototype (Design cập nhật nút)
- peerStdUrl= http://localhost:9301/so-ts/csdl-so-sach?resource=ditches
- mfeStdUrl= http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-05

## API / tasks (ids only)
- CRUD keep: GET/POST/PUT/DELETE …/csdl-records?resource=ditches
- Export: GET …/csdl-records/export?resource=ditches
- Import: POST …/csdl-records/import?resource=ditches
- T-XLS-S05 · real-data §A+§B PASS

## UNCLEAR
- Q-XLS-SCOPE filtered vs all · Q-XLS-IMPORT now vs defer · Q-XLS-FILENAME

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-05-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-05-real-data.md
- CTX: docs/context/features/csdl-bieu-05.md
- epic: docs/context/features/csdl-export-print.md
- keep PO/Design/SA: specs/csdl-bieu-05/po|ui|be (delta only)
