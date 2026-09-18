# Handoff compact — data_analy

schemaVersion: 1
feature: csdl-bieu-13
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:800386bb8f86bfcc815b9c7d3a6dc246dc58b0a95b5132a317c5a094d0b4194f
headerFingerprint: sha256:31dbc83200b511c9d61333b1cdb94e2880778980a3b21970be414e926db29008
writtenAt: 2026-09-18T00:53:47.050Z
taskId: task_4fec1f3f
priorTask: task_3cec1103
resource: noise-barriers
columns: 13
IdCode: TC-
formNo: 13
peerSoTs: so-ts-noise-barrier · cấm merge

## Decisions
- changeScope: edit_page (T-XLS-S13 · Wave 1)
- formPattern: Slideout (keep typed · **cấm** new_page CRUD)
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · be: D:/AI-QLBD/Linm.RMMS.WebService
- export: catalogToolbar Xuất Excel · BFF binary · `/implement-export-import-excel`
- golden: Cục 16-sheet xls Biểu 13 · **cấm** hồ sơ 12+8
- filter: **cấm** export trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- layout: 1 sheet 13 cột · dài/cao/DT cùng hàng
- peer: so-ts-noise-barrier cite · **cấm** merge road-assets vào export
- keep: PO/Design/SA typed artifacts · only § Delta export
- open questions: Q-XLS-SCOPE · Q-XLS-IMPORT · Q-XLS-FILENAME · Q-XLS-SHEET

## Artifacts
| Kind | Path |
|------|------|
| control-hint | specs/_data-analy/features/csdl-bieu-13-control-hint.md |
| real-data | specs/_data-analy/features/csdl-bieu-13-real-data.md |
| CTX | docs/context/features/csdl-bieu-13.md |
| epic | docs/context/features/csdl-export-print.md |

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 13) | typed prior | keep | **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | catalogToolbar |
| importExcel | Nhập Excel | ToolbarButton+file | P1 · Q-XLS-IMPORT |

## Screens / zones (ids only)
- DES-GRID-A/B/C/D keep · toolbar **+export** · filter unchanged
- Form Kind D Slideout keep · section kích thước
- reviewUrl= prior prototype (Design cập nhật nút)
- peerStdUrl= so-ts-noise-barrier (cite only)
- mfeStdUrl= http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-13 · hub ?resource=noise-barriers

## Live bind (1-liner)
- CRUD keep: api/v1/asset/csdl-records?resource=noise-barriers
- Export: GET …/csdl-records/export?resource=noise-barriers · Import POST …/import
- **cấm** ERP.* · invent infra · toast-stub=done · merge so-ts-noise-barrier

## GAP (PO must see)
| ID | One-liner |
|----|-----------|
| GAP-BIEU13-XLS-01 | Toolbar Xuất Excel binary sheet Biểu 13 |
| GAP-BIEU13-XLS-02 | Toast stub ≠ done |
| GAP-BIEU13-XLS-03 | Golden Cục 16-sheet · cấm 12+8 |
| GAP-BIEU13-XLS-04 | GAP-FILTER-BAR-08 · cấm filter export |
| GAP-BIEU13-XLS-05 | GET export / POST import path |
| GAP-BIEU13-XLS-06 | 1 sheet 13 · dài/cao/DT cùng hàng |
| GAP-BIEU13-XLS-07 | Cấm merge so-ts-noise-barrier/road-assets vào export |

## Next
| Role | Need |
|------|------|
| **PO** | requirement từ § Delta T-XLS-S13 · chốt Q-XLS-* · giữ AC typed |
| Design | giữ prototype · +nút Xuất trên catalogToolbar · reviewUrl |
| SA | BFF binary path · golden checksum 13 · cấm đổi typed entity |

## Cấm (compact)
ERP.* · invent infra · toast=done · filter-bar export · golden 12+8 · new_page typed re-CRUD · yarn build/e2e @ data_analy
