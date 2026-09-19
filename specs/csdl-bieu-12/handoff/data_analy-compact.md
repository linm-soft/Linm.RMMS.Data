# Handoff compact — data_analy

schemaVersion: 1
feature: csdl-bieu-12
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:f42502cee520105fb0a7f618c17b8b0f582884d7f779f638ec7310c26346e77a
headerFingerprint: sha256:b6a541f8adc60a5badc72fc92c606631e5a1457fc119b9a6a546eb1f0acc437a
writtenAt: 2026-09-18T00:25:00.000Z
taskId: task_619ea74c
priorTask: task_94fca237
resource: green-assets
columns: 15
blocks: 2
IdCode: CX-
formNo: 12
peerSoTs: —

## Decisions
- changeScope: edit_page (T-XLS-S12 · Wave 1)
- formPattern: Slideout (keep typed · **cấm** new_page CRUD)
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · be: D:/AI-QLBD/Linm.RMMS.WebService
- export: catalogToolbar Xuất Excel · BFF binary · `/implement-export-import-excel`
- golden: Cục 16-sheet xls Biểu 12 · **cấm** hồ sơ 12+8
- filter: **cấm** export trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- layout: 1 sheet 15 cột · khóm+cỏ cùng hàng · **cấm** 2 sheet invent
- peer: none · **cấm** invent so-ts-green
- keep: PO/Design/SA typed artifacts · only § Delta export
- open questions: Q-XLS-SCOPE · Q-XLS-IMPORT · Q-XLS-FILENAME · Q-XLS-SHEET

## Artifacts
| Kind | Path |
|------|------|
| control-hint | specs/_data-analy/features/csdl-bieu-12-control-hint.md |
| real-data | specs/_data-analy/features/csdl-bieu-12-real-data.md |
| CTX | docs/context/features/csdl-bieu-12.md |
| epic | docs/context/features/csdl-export-print.md |

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 15/2) | typed prior | keep | **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | catalogToolbar |
| importExcel | Nhập Excel | ToolbarButton+file | P1 · Q-XLS-IMPORT |

## Screens / zones (ids only)
- DES-GRID-A/B/C/D keep · toolbar **+export** · filter unchanged
- Form Kind D Slideout keep · 2 section khóm + thảm cỏ
- reviewUrl= prior prototype (Design cập nhật nút)
- peerStdUrl= —
- mfeStdUrl= http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-12 · hub ?resource=green-assets

## Live bind (1-liner)
- CRUD keep: api/v1/asset/csdl-records?resource=green-assets
- Export: GET …/csdl-records/export?resource=green-assets · Import POST …/import
- **cấm** ERP.* · invent infra · toast-stub=done · invent so-ts-green

## GAP (PO must see)
| ID | One-liner |
|----|-----------|
| GAP-BIEU12-XLS-01 | Toolbar Xuất Excel binary sheet Biểu 12 |
| GAP-BIEU12-XLS-02 | Toast stub ≠ done |
| GAP-BIEU12-XLS-03 | Golden Cục 16-sheet · cấm 12+8 |
| GAP-BIEU12-XLS-04 | GAP-FILTER-BAR-08 · cấm filter export |
| GAP-BIEU12-XLS-05 | GET export / POST import path |
| GAP-BIEU12-XLS-06 | 1 sheet 15 · khóm+cỏ cùng hàng · cấm 2 sheet |
| GAP-BIEU12-XLS-07 | Cấm invent/merge so-ts-green vào export |

## Next
| Role | Need |
|------|------|
| **PO** | requirement từ § Delta T-XLS-S12 · chốt Q-XLS-* · giữ AC typed |
| Design | giữ prototype · +nút Xuất trên catalogToolbar · reviewUrl |
| SA | BFF binary path · golden checksum 15 · cấm đổi typed entity |

## Cấm (compact)
ERP.* · invent infra · toast=done · filter-bar export · golden 12+8 · new_page typed re-CRUD · yarn build/e2e @ data_analy
