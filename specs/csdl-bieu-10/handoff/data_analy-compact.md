# Handoff compact — data_analy

schemaVersion: 1
feature: csdl-bieu-10
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:49ea64d3b8f51e899c4bb36ae444444b4c0a805e64349f8e1f52677909ab0302
headerFingerprint: sha256:9d4863dcab46439966e526cc7696f137695022911a3edc5066c852dc779fa598
writtenAt: 2026-09-18T06:05:57.248Z
taskId: task_0fb02546
priorTask: task_6b4b8a1b
resource: retaining-walls
columns: 21
blocks: 2
IdCode: KE-
formNo: 10
peerSoTs: so-ts-retaining

## Decisions
- changeScope: edit_page (T-XLS-S10 · Wave 1)
- formPattern: Slideout (keep typed · **cấm** new_page CRUD)
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · be: D:/AI-QLBD/Linm.RMMS.WebService
- export: catalogToolbar Xuất Excel · BFF binary · `/implement-export-import-excel`
- golden: Cục 16-sheet xls Biểu 10 · **cấm** hồ sơ 12+8
- filter: **cấm** export trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- layout: 1 sheet 21 cột · crest* cùng hàng · **cấm** 2 sheet invent
- map: heightM↔WidthM giữ SA typed
- keep: PO/Design/SA typed artifacts · only § Delta export
- open questions: Q-XLS-SCOPE · Q-XLS-IMPORT · Q-XLS-FILENAME · Q-XLS-HEIGHT

## Artifacts
| Kind | Path |
|------|------|
| control-hint | specs/_data-analy/features/csdl-bieu-10-control-hint.md |
| real-data | specs/_data-analy/features/csdl-bieu-10-real-data.md |
| CTX | docs/context/features/csdl-bieu-10.md |
| epic | docs/context/features/csdl-export-print.md |

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 21/2) | typed prior | keep | **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | catalogToolbar |
| importExcel | Nhập Excel | ToolbarButton+file | P1 · Q-XLS-IMPORT |

## Screens / zones (ids only)
- DES-GRID-A/B/C/D keep · toolbar **+export** · filter unchanged
- Form Kind D Slideout keep · 2 section tường + rãnh đỉnh
- reviewUrl= prior prototype (Design cập nhật nút)
- peerStdUrl= http://localhost:9301/so-ts/csdl-so-sach?resource=retaining-walls
- mfeStdUrl= http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-10

## Live bind (1-liner)
- CRUD keep: api/v1/asset/csdl-records?resource=retaining-walls
- Export: GET …/csdl-records/export?resource=retaining-walls · Import POST …/import
- **cấm** ERP.* · invent infra · toast-stub=done · merge so-ts-retaining

## GAP (PO must see)
| ID | One-liner |
|----|-----------|
| GAP-BIEU10-XLS-01 | Toolbar Xuất Excel binary sheet Biểu 10 |
| GAP-BIEU10-XLS-02 | Toast stub ≠ done |
| GAP-BIEU10-XLS-03 | Golden Cục 16-sheet · cấm 12+8 |
| GAP-BIEU10-XLS-04 | GAP-FILTER-BAR-08 · cấm filter export |
| GAP-BIEU10-XLS-05 | GET export / POST import path |
| GAP-BIEU10-XLS-06 | 1 sheet 21 · crest cùng hàng · cấm 2 sheet |
| GAP-BIEU10-XLS-07 | Export map heightM↔WidthM giữ SA |

## Next
| Role | Need |
|------|------|
| **PO** | requirement từ § Delta T-XLS-S10 · chốt Q-XLS-* · giữ AC typed |
| Design | giữ prototype · +nút Xuất trên catalogToolbar · reviewUrl |
| SA | BFF binary path · golden checksum 21 · heightM↔WidthM · cấm đổi typed entity |

## Cấm (compact)
ERP.* · invent infra · toast=done · filter-bar export · golden 12+8 · new_page typed re-CRUD · yarn build/e2e @ data_analy
