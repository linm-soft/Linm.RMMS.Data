# Handoff compact — po

schemaVersion: 1
feature: csdl-bieu-13
packKind: list
role: po
status: confirmed
changeScope: edit_page
skillVersion: 2026.08.25.01
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.17.3
contentHash: sha256:800386bb8f86bfcc815b9c7d3a6dc246dc58b0a95b5132a317c5a094d0b4194f
headerFingerprint: sha256:31dbc83200b511c9d61333b1cdb94e2880778980a3b21970be414e926db29008
writtenAt: 2026-09-18T01:00:00.000Z
taskId: task_0a8bfa5d
priorTyped: task_397af5bc · keep
priorAnaly: task_4fec1f3f
resource: noise-barriers
columns: 13
IdCode: TC-
formNo: 13
peerSoTs: so-ts-noise-barrier · cấm merge
autoApprove: ON
e2eQa: ON (queued QA)
epic: csdl-export-print · T-XLS-S13

## Decisions (Q-XLS · autoApprove)
| Q | Decision |
|---|----------|
| Q-XLS-SCOPE | filtered (QS filter · empty=all tenant resource) |
| Q-XLS-IMPORT | export_only_p0 (Import P1 DEFER) |
| Q-XLS-FILENAME | Bieu13_TuongChongOn_{yyyyMMdd}.xls(x) · SA ext |
| Q-XLS-SHEET | one_sheet · 13 cột · dài/cao/DT cùng hàng |
| typed prior Q-* | keep · cấm reopen new_page |

## Artifacts
| Kind | Path |
|------|------|
| requirement | specs/csdl-bieu-13/po/requirement.md |
| prior analy compact | specs/csdl-bieu-13/handoff/data_analy-compact.md |
| control-hint | specs/_data-analy/features/csdl-bieu-13-control-hint.md |
| real-data | specs/_data-analy/features/csdl-bieu-13-real-data.md |

## Inventory / delta
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form/list 13) | typed keep | — | cấm reopen CRUD |
| exportExcel | Xuất Excel | ToolbarButton | catalogToolbar · binary |
| importExcel | Nhập Excel | — | DEFER P1 |

## Screens / zones (ids)
- DES-GRID-A/B/C/D keep · toolbar **+export** · filter unchanged (GAP-FILTER-BAR-08)
- Form Kind D Slideout keep · section kích thước
- reviewUrl= prior prototype (Design +nút)
- mfeStdUrl= http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-13 · hub ?resource=noise-barriers

## Live bind
- CRUD keep: api/v1/asset/csdl-records?resource=noise-barriers
- Export: GET …/csdl-records/export?resource=noise-barriers (+ filter QS)
- Import DEFER: POST …/import
- cấm ERP.* · toast-stub=done · merge so-ts-noise-barrier

## Grid AC (slim)
- G keep typed · G-04 toolbar Xuất · G-05 empty file OK · G-06 fail toast · G-07 golden 13 · G-08 filtered
- Leave/Form AC typed keep · export không dirty Leave
- packKind=list confirm

## GAP (Design/SA)
| ID | One-liner |
|----|-----------|
| GAP-BIEU13-XLS-01 | Toolbar Xuất Excel binary sheet Biểu 13 |
| GAP-BIEU13-XLS-02 | Toast stub ≠ done |
| GAP-BIEU13-XLS-03 | Golden Cục 16-sheet · cấm 12+8 |
| GAP-BIEU13-XLS-04 | Cấm filter-bar export |
| GAP-BIEU13-XLS-05 | GET export path (+ QS) |
| GAP-BIEU13-XLS-06 | 1 sheet 13 · dài/cao/DT cùng hàng |
| GAP-BIEU13-XLS-07 | Cấm merge so-ts-noise-barrier/road-assets |

## Next
| Role | Need |
|------|------|
| **Design** | +nút Xuất catalogToolbar · reviewUrl · Import ẩn |
| SA | BFF binary · checksum 13 · filename · cấm đổi entity |
| TL/Dev | /implement-export-import-excel · cấm filter export |

## Cấm (compact)
ERP.* · invent infra · toast=done · filter-bar export · golden 12+8 · new_page typed re-CRUD · merge peer · yarn build/e2e @ po
