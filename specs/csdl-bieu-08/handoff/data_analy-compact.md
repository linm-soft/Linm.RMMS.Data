# Handoff compact — data_analy

schemaVersion: 1
feature: csdl-bieu-08
packKind: list
role: data_analy
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:639566df4ddccc3927311d5618bf4e7c1dbad0dac80962c414f861dacc9d5e9c
headerFingerprint: sha256:ba8b8db4f7637ee32cfd4a882b6abdc774c538f6c9812c3ecd1d13f6151cdd6f
writtenAt: 2026-09-18T04:55:00.000Z
taskId: task_774ebbde
priorTask: task_a21c4937
resource: traffic-safety
columns: 45
groups: 11
IdCode: AT-
formNo: 08

## Decisions
- changeScope: edit_page (T-XLS-S08 · Wave 1 · pilot with S01)
- formPattern: Slideout (keep typed · **cấm** new_page CRUD)
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · be: D:/AI-QLBD/Linm.RMMS.WebService
- export: catalogToolbar Xuất Excel · BFF binary · `/implement-export-import-excel`
- golden: Cục 16-sheet xls Biểu 8 · **cấm** hồ sơ 12+8
- filter: **cấm** export trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- layout: **cấm** 1 hàng kéo ngang lệch mẫu
- keep: PO/Design/SA typed artifacts · only § Delta export
- open questions: Q-XLS-SCOPE · Q-XLS-IMPORT · Q-XLS-FILENAME · Q-XLS-TYPE

## Artifacts
| Kind | Path |
|------|------|
| control-hint | specs/_data-analy/features/csdl-bieu-08-control-hint.md |
| real-data | specs/_data-analy/features/csdl-bieu-08-real-data.md |
| CTX | docs/context/features/csdl-bieu-08.md |
| epic | docs/context/features/csdl-export-print.md |

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form 45/11) | typed prior | keep | **cấm** reopen |
| exportExcel | Xuất Excel | ToolbarButton | catalogToolbar |
| importExcel | Nhập Excel | ToolbarButton+file | P1 · Q-XLS-IMPORT |

## Screens / zones (ids only)
- DES-GRID-A/B/C/D keep · toolbar **+export** · filter unchanged
- Form Kind D Slideout keep · shared+1 child
- reviewUrl= prior prototype (Design cập nhật nút)
- peerStdUrl= http://localhost:9301/so-ts/csdl-so-sach?resource=traffic-safety
- mfeStdUrl= http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-08

## Live bind (1-liner)
- CRUD keep: api/v1/asset/csdl-records?resource=traffic-safety
- Export: GET …/csdl-records/export?resource=traffic-safety · Import POST …/import
- **cấm** ERP.* · invent infra · toast-stub=done

## GAP (PO must see)
| ID | One-liner |
|----|-----------|
| GAP-BIEU08-XLS-01 | Toolbar Xuất Excel binary sheet Biểu 8 |
| GAP-BIEU08-XLS-02 | Toast stub ≠ done |
| GAP-BIEU08-XLS-03 | Golden Cục 16-sheet · cấm 12+8 |
| GAP-BIEU08-XLS-04 | GAP-FILTER-BAR-08 · cấm filter export |
| GAP-BIEU08-XLS-05 | GET export / POST import path |
| GAP-BIEU08-XLS-06 | Cấm 1 hàng kéo ngang lệch mẫu |

## Next
| Role | Need |
|------|------|
| **PO** | requirement từ § Delta T-XLS-S08 · chốt Q-XLS-* · giữ AC typed |
| Design | giữ prototype · +nút Xuất trên catalogToolbar · reviewUrl |
| SA | BFF binary path · golden checksum 45 · cấm wide |

## Cấm (compact)
ERP.* · invent infra · toast=done · filter-bar export · golden 12+8 · new_page typed re-CRUD · yarn build/e2e @ data_analy
