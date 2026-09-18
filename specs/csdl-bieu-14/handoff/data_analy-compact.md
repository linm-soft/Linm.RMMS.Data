# Handoff compact — data_analy

schemaVersion: 1
feature: csdl-bieu-14
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:e9a062f1f9eecd6bf98748db0c3f839e2247a74ecb9bcd56273d4e48d729fa0a
headerFingerprint: sha256:14cd156a898dcc971a072dd1cd1b92460a8b597558a90dc9854fead9d4c4de5c
writtenAt: 2026-09-18T01:32:46.463Z
taskId: task_b92db6a6
priorTask: task_db0e2ea1
resource: its-systems
columns: 21
IdCode: IT-
formNo: 14
peerSoTs: so-ts-its-camera · cấm merge

## Decisions
- changeScope: edit_page (T-XLS-S14 · Wave 1)
- formPattern: Slideout (keep typed · **cấm** new_page CRUD)
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · be: D:/AI-QLBD/Linm.RMMS.WebService
- export: catalogToolbar Xuất Excel · BFF binary · `/implement-export-import-excel`
- golden: Cục 16-sheet xls Biểu 14 · **cấm** hồ sơ 12+8
- filter: **cấm** export trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- layout: 1 sheet 21 cột · device+infra+GPS cùng hàng
- peer: so-ts-its-camera cite · **cấm** merge road-assets / ITS AiVision vào export
- keep: PO/Design/SA typed artifacts · only § Delta export
- open questions: Q-XLS-SCOPE · Q-XLS-IMPORT · Q-XLS-FILENAME · Q-XLS-SHEET

## Artifacts
| Kind | Path |
|------|------|
| control-hint | specs/_data-analy/features/csdl-bieu-14-control-hint.md |
| real-data | specs/_data-analy/features/csdl-bieu-14-real-data.md |
| CTX | docs/context/features/csdl-bieu-14.md |
| epic | docs/context/features/csdl-export-print.md |

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 21) | typed prior | keep | **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | catalogToolbar |
| importExcel | Nhập Excel | ToolbarButton+file | P1 · Q-XLS-IMPORT |

## Screens / zones (ids only)
- DES-GRID-A/B/C/D keep · toolbar **+export** · filter unchanged
- Form Kind D Slideout keep · section thiết bị + hạ tầng
- reviewUrl= prior prototype (Design cập nhật nút)
- peerStdUrl= so-ts-its-camera (cite only)
- mfeStdUrl= http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-14 · hub ?resource=its-systems

## Live bind (1-liner)
- CRUD keep: api/v1/asset/csdl-records?resource=its-systems
- Export: GET …/csdl-records/export?resource=its-systems · Import POST …/import
- **cấm** ERP.* · invent infra · toast-stub=done · merge so-ts-its-camera

## GAP (PO must see)
| ID | One-liner |
|----|-----------|
| GAP-BIEU14-XLS-01 | Toolbar Xuất Excel binary sheet Biểu 14 |
| GAP-BIEU14-XLS-02 | Toast stub ≠ done |
| GAP-BIEU14-XLS-03 | Golden Cục 16-sheet · cấm 12+8 |
| GAP-BIEU14-XLS-04 | GAP-FILTER-BAR-08 · cấm filter export |
| GAP-BIEU14-XLS-05 | GET export / POST import path |
| GAP-BIEU14-XLS-06 | 1 sheet 21 · device+infra+GPS cùng hàng |
| GAP-BIEU14-XLS-07 | Cấm merge so-ts-its-camera/road-assets/ITS AiVision vào export |

## Next
| Role | Need |
|------|------|
| **PO** | requirement từ § Delta T-XLS-S14 · chốt Q-XLS-* · giữ AC typed |
| Design | giữ prototype · +nút Xuất trên catalogToolbar · reviewUrl |
| SA | BFF binary path · golden checksum 21 · cấm đổi typed entity |

## Cấm (compact)
ERP.* · invent infra · toast=done · filter-bar export · golden 12+8 · new_page typed re-CRUD · yarn build/e2e @ data_analy
