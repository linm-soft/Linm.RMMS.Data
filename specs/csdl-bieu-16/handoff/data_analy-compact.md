# Handoff compact — data_analy

schemaVersion: 1
feature: csdl-bieu-16
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:c71543b66c4f1d28f5dbae1743c1042e0bb9f12ab9c0efc55d9668af2a38e072
headerFingerprint: sha256:ec787bf2008ae89f1b6c085fe238f1b0d50b048f5c672b90b68d9ea102cf8fcc
writtenAt: 2026-09-18T02:50:00.000Z
taskId: task_e344020d
priorTask: task_70fe1d76
resource: interchanges
columns: 39
IdCode: IX-
formNo: 16
peerSoTs: so-ts-interchange · cấm merge

## Decisions
- changeScope: edit_page (T-XLS-S16 · Wave 1)
- formPattern: Slideout (keep typed + branches[] · **cấm** new_page CRUD)
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · be: D:/AI-QLBD/Linm.RMMS.WebService
- export: catalogToolbar Xuất Excel · BFF binary · `/implement-export-import-excel`
- golden: Cục 16-sheet xls Biểu 16 · **cấm** hồ sơ 12+8
- filter: **cấm** export trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- layout: 1 sheet 39 · flatten 1 row/nhánh (repeat header)
- peer: so-ts-interchange cite · **cấm** merge road-assets vào export
- keep: PO/Design/SA typed artifacts · only § Delta export
- open questions: Q-XLS-SCOPE · Q-XLS-IMPORT · Q-XLS-FILENAME · Q-XLS-BRANCH · Q-XLS-SHEET

## Artifacts
| Kind | Path |
|------|------|
| control-hint | specs/_data-analy/features/csdl-bieu-16-control-hint.md |
| real-data | specs/_data-analy/features/csdl-bieu-16-real-data.md |
| CTX | docs/context/features/csdl-bieu-16.md |
| epic | docs/context/features/csdl-export-print.md |

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 39 + branches) | typed prior | keep | **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | catalogToolbar |
| importExcel | Nhập Excel | ToolbarButton+file | P1 · Q-XLS-IMPORT |

## Screens / zones (ids only)
- DES-GRID-A/B/C/D keep · toolbar **+export** · filter unchanged
- Form Kind D Slideout keep · header + branches[] + ATGT
- reviewUrl= prior prototype (Design cập nhật nút)
- peerStdUrl= so-ts-interchange (cite only)
- mfeStdUrl= http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-16 · hub ?resource=interchanges

## Live bind (1-liner)
- CRUD keep: api/v1/asset/csdl-records?resource=interchanges
- Export: GET …/csdl-records/export?resource=interchanges · Import POST …/import
- **cấm** ERP.* · invent infra · toast-stub=done · merge so-ts-interchange

## GAP (PO must see)
| ID | One-liner |
|----|-----------|
| GAP-BIEU16-XLS-01 | Toolbar Xuất Excel binary sheet Biểu 16 |
| GAP-BIEU16-XLS-02 | Toast stub ≠ done |
| GAP-BIEU16-XLS-03 | Golden Cục 16-sheet · cấm 12+8 |
| GAP-BIEU16-XLS-04 | GAP-FILTER-BAR-08 · cấm filter export |
| GAP-BIEU16-XLS-05 | GET export / POST import path |
| GAP-BIEU16-XLS-06 | 1 sheet 39 · flatten 1 row/nhánh |
| GAP-BIEU16-XLS-07 | Cấm merge so-ts-interchange/road-assets vào export |

## Next
| Role | Need |
|------|------|
| **PO** | requirement từ § Delta T-XLS-S16 · chốt Q-XLS-* · giữ AC typed |
| Design | giữ prototype · +nút Xuất trên catalogToolbar · reviewUrl |
| SA | BFF binary path · golden checksum 39 · flatten branches · cấm đổi typed entity |

## Cấm (compact)
ERP.* · invent infra · toast=done · filter-bar export · golden 12+8 · new_page typed re-CRUD · yarn build/e2e @ data_analy
