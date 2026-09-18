# Handoff compact — data_analy

schemaVersion: 1
feature: csdl-bieu-09
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:58c012cef8ad07ae7a6d5e8ab513668c51dc0755d1f209783beb41ba1c4ccc01
headerFingerprint: sha256:765521dee151f2ded36c582ca1a0b7ec048237b88cfc5b27481f09e6787e9a77
writtenAt: 2026-09-18T05:30:00.000Z
taskId: task_f4041b8e
priorTask: task_b7a89508
resource: boundary-markers
columns: 17
blocks: 2
IdCode: MK-
formNo: 09

## Decisions
- changeScope: edit_page (T-XLS-S09 · Wave 1)
- formPattern: Slideout (keep typed · **cấm** new_page CRUD)
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · be: D:/AI-QLBD/Linm.RMMS.WebService
- export: catalogToolbar Xuất Excel · BFF binary · `/implement-export-import-excel`
- golden: Cục 16-sheet xls Biểu 9 · **cấm** hồ sơ 12+8
- filter: **cấm** export trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- layout: 1 sheet 17 cột · cả RoadLimit+GPMB · **cấm** 2 sheet invent
- keep: PO/Design/SA typed artifacts · only § Delta export
- open questions: Q-XLS-SCOPE · Q-XLS-IMPORT · Q-XLS-FILENAME · Q-XLS-KIND

## Artifacts
| Kind | Path |
|------|------|
| control-hint | specs/_data-analy/features/csdl-bieu-09-control-hint.md |
| real-data | specs/_data-analy/features/csdl-bieu-09-real-data.md |
| CTX | docs/context/features/csdl-bieu-09.md |
| epic | docs/context/features/csdl-export-print.md |

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 17/2) | typed prior | keep | **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | catalogToolbar |
| importExcel | Nhập Excel | ToolbarButton+file | P1 · Q-XLS-IMPORT |

## Screens / zones (ids only)
- DES-GRID-A/B/C/D keep · toolbar **+export** · filter unchanged
- Form Kind D Slideout keep · 2 section markerKind
- reviewUrl= prior prototype (Design cập nhật nút)
- peerStdUrl= http://localhost:9301/so-ts/csdl-so-sach?resource=boundary-markers
- mfeStdUrl= http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-09

## Live bind (1-liner)
- CRUD keep: api/v1/asset/csdl-records?resource=boundary-markers
- Export: GET …/csdl-records/export?resource=boundary-markers · Import POST …/import
- **cấm** ERP.* · invent infra · toast-stub=done

## GAP (PO must see)
| ID | One-liner |
|----|-----------|
| GAP-BIEU09-XLS-01 | Toolbar Xuất Excel binary sheet Biểu 9 |
| GAP-BIEU09-XLS-02 | Toast stub ≠ done |
| GAP-BIEU09-XLS-03 | Golden Cục 16-sheet · cấm 12+8 |
| GAP-BIEU09-XLS-04 | GAP-FILTER-BAR-08 · cấm filter export |
| GAP-BIEU09-XLS-05 | GET export / POST import path |
| GAP-BIEU09-XLS-06 | 1 sheet cả 2 kind · cấm 2 sheet invent |

## Next
| Role | Need |
|------|------|
| **PO** | requirement từ § Delta T-XLS-S09 · chốt Q-XLS-* · giữ AC typed |
| Design | giữ prototype · +nút Xuất trên catalogToolbar · reviewUrl |
| SA | BFF binary path · golden checksum 17 · cấm đổi typed entity |

## Cấm (compact)
ERP.* · invent infra · toast=done · filter-bar export · golden 12+8 · new_page typed re-CRUD · yarn build/e2e @ data_analy
