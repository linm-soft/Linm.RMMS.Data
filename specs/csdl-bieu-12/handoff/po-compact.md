# Handoff compact — po

schemaVersion: 1
feature: csdl-bieu-12
packKind: list
role: po
status: confirmed
skillVersion: 2026.08.25.01
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:f42502cee520105fb0a7f618c17b8b0f582884d7f779f638ec7310c26346e77a
headerFingerprint: sha256:b6a541f8adc60a5badc72fc92c606631e5a1457fc119b9a6a546eb1f0acc437a
writtenAt: 2026-09-18T00:30:00.000Z
taskId: task_3c0db9bf
priorTask: task_619ea74c
resource: green-assets
columns: 15
formNo: 12
IdCode: CX-
changeScope: edit_page
epic: csdl-export-print · T-XLS-S12

## Decisions
- Q-XLS-SCOPE: filtered (QS hiện tại; empty = all tenant resource)
- Q-XLS-IMPORT: export_only_p0 · Import DEFER P1
- Q-XLS-FILENAME: Bieu12_CayXanh_{yyyyMMdd}.xlsx (SA chốt .xls/.xlsx)
- Q-XLS-SHEET: one_sheet · 15 cột · khóm+cỏ cùng hàng · cấm split
- formPattern: Slideout keep · cấm new_page CRUD
- export: catalogToolbar Xuất Excel · BFF binary · /implement-export-import-excel
- golden: Cục 16-sheet Biểu 12 · cấm hồ sơ 12+8
- filter: cấm export trên LinErpListFilterBar (GAP-FILTER-BAR-08)
- peer: none · cấm invent so-ts-green
- typed Q prior: keep (alias_now · allow_either · side_only · subset · …)

## Artifacts
| Kind | Path |
|------|------|
| requirement | specs/csdl-bieu-12/po/requirement.md |
| control-hint | specs/_data-analy/features/csdl-bieu-12-control-hint.md |
| real-data | specs/_data-analy/features/csdl-bieu-12-real-data.md |
| prior compact | specs/csdl-bieu-12/handoff/data_analy-compact.md |

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| exportExcel | Xuất Excel | ToolbarButton | catalogToolbar · P0 DoD |
| importExcel | Nhập Excel | ToolbarButton+file | DEFER P1 |
| (form 15/2) | typed prior | keep | cấm reopen |

## Screens / zones (ids only)
- DES-GRID-A/B/C/D keep · toolbar +export · filter unchanged
- Form Kind D Slideout keep · 2 section
- reviewUrl= prior prototype (Design +nút Xuất)
- mfeStdUrl= http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-12 · hub ?resource=green-assets

## Live bind (1-liner)
- CRUD keep: api/v1/asset/csdl-records?resource=green-assets
- Export P0: GET …/csdl-records/export?resource=green-assets (+ filter QS)
- Import P1 DEFER: POST …/import
- cấm ERP.* · invent infra · toast-stub=done · invent so-ts-green

## GAP (Design/SA must see)
| ID | One-liner |
|----|-----------|
| GAP-BIEU12-XLS-01 | Toolbar Xuất Excel binary sheet Biểu 12 |
| GAP-BIEU12-XLS-02 | Toast stub ≠ done |
| GAP-BIEU12-XLS-03 | Golden Cục 16-sheet · cấm 12+8 |
| GAP-BIEU12-XLS-04 | GAP-FILTER-BAR-08 · cấm filter export |
| GAP-BIEU12-XLS-05 | GET export · Import DEFER P1 |
| GAP-BIEU12-XLS-06 | 1 sheet 15 · cấm 2 sheet |
| GAP-BIEU12-XLS-07 | Cấm invent/merge so-ts-green |

## Next
| Role | Need |
|------|------|
| Design | giữ prototype · +nút Xuất catalogToolbar · reviewUrl |
| SA | BFF binary · golden checksum 15 · filename · cấm đổi typed entity |

## Cấm (compact)
ERP.* · invent infra · toast=done · filter-bar export · golden 12+8 · new_page typed re-CRUD · yarn build/e2e @ po
