# Handoff compact — data_analy

schemaVersion: 1
feature: csdl-bieu-11
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:7f64b8dcea4265af23b9f2e5e1dae3ab1c933b0a4404b0f872d39029716b4d62
headerFingerprint: sha256:b37759a9224c09c7c63bc81583b4a9bcbca02e74cba8b63579819e90d57f1d1a
writtenAt: 2026-09-18T06:44:00.000Z
taskId: task_55dac8de
priorTask: task_ed491c32
resource: lighting-systems
columns: 24
blocks: 2
IdCode: LT-
formNo: 11
peerSoTs: so-ts-lighting

## Decisions
- changeScope: edit_page (T-XLS-S11 · Wave 1)
- formPattern: Slideout (keep typed · **cấm** new_page CRUD)
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · be: D:/AI-QLBD/Linm.RMMS.WebService
- export: catalogToolbar Xuất Excel · BFF binary · `/implement-export-import-excel`
- golden: Cục 16-sheet xls Biểu 11 · **cấm** hồ sơ 12+8
- filter: **cấm** export trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- layout: 1 sheet 24 cột · LED+NLMT cùng hàng · **cấm** 2 sheet invent
- peer: qty bucket ≠ dump điểm so-ts-lighting
- keep: PO/Design/SA typed artifacts · only § Delta export
- open questions: Q-XLS-SCOPE · Q-XLS-IMPORT · Q-XLS-FILENAME · Q-XLS-SHEET

## Artifacts
| Kind | Path |
|------|------|
| control-hint | specs/_data-analy/features/csdl-bieu-11-control-hint.md |
| real-data | specs/_data-analy/features/csdl-bieu-11-real-data.md |
| CTX | docs/context/features/csdl-bieu-11.md |
| epic | docs/context/features/csdl-export-print.md |

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 24/2) | typed prior | keep | **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | catalogToolbar |
| importExcel | Nhập Excel | ToolbarButton+file | P1 · Q-XLS-IMPORT |

## Screens / zones (ids only)
- DES-GRID-A/B/C/D keep · toolbar **+export** · filter unchanged
- Form Kind D Slideout keep · 2 section lưới + NLMT
- reviewUrl= prior prototype (Design cập nhật nút)
- peerStdUrl= http://localhost:9301/so-ts/csdl-so-sach?resource=lighting-systems
- mfeStdUrl= http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-11

## Live bind (1-liner)
- CRUD keep: api/v1/asset/csdl-records?resource=lighting-systems
- Export: GET …/csdl-records/export?resource=lighting-systems · Import POST …/import
- **cấm** ERP.* · invent infra · toast-stub=done · merge so-ts-lighting

## GAP (PO must see)
| ID | One-liner |
|----|-----------|
| GAP-BIEU11-XLS-01 | Toolbar Xuất Excel binary sheet Biểu 11 |
| GAP-BIEU11-XLS-02 | Toast stub ≠ done |
| GAP-BIEU11-XLS-03 | Golden Cục 16-sheet · cấm 12+8 |
| GAP-BIEU11-XLS-04 | GAP-FILTER-BAR-08 · cấm filter export |
| GAP-BIEU11-XLS-05 | GET export / POST import path |
| GAP-BIEU11-XLS-06 | 1 sheet 24 · LED+NLMT cùng hàng · cấm 2 sheet |
| GAP-BIEU11-XLS-07 | Export qty bucket · cấm dump điểm Sổ TS |

## Next
| Role | Need |
|------|------|
| **PO** | requirement từ § Delta T-XLS-S11 · chốt Q-XLS-* · giữ AC typed |
| Design | giữ prototype · +nút Xuất trên catalogToolbar · reviewUrl |
| SA | BFF binary path · golden checksum 24 · cấm đổi typed entity |

## Cấm (compact)
ERP.* · invent infra · toast=done · filter-bar export · golden 12+8 · new_page typed re-CRUD · yarn build/e2e @ data_analy
