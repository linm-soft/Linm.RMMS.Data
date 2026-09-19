# Handoff compact — po

schemaVersion: 1
feature: csdl-bieu-15
packKind: list
role: po
status: confirmed
changeScope: edit_page
skillVersion: 2026.08.25.01
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.17.3
contentHash: sha256:8a85d68eaef24cf98c312f83a3a100de25b1212e8a751d6f1f42005d38dd0fc8
headerFingerprint: sha256:0064a4903777f7ea8d51c7423d8451a20daf77a5934929001905edaa380f4fe4
writtenAt: 2026-09-18T02:13:10.000Z
taskId: task_18337e1c
priorTyped: task_a73f1c50 · keep
priorAnaly: task_4b6f0c6e
resource: ops-facilities
columns: 20
IdCode: OF-
formNo: 15
peerSoTs: so-ts-toll · so-ts-rest-area · so-ts-station-house · cấm merge
autoApprove: ON
e2eQa: ON (queued QA)
epic: csdl-export-print · T-XLS-S15

## Decisions (Q-XLS · autoApprove)
| Q | Decision |
|---|----------|
| Q-XLS-SCOPE | filtered (QS filter · empty=all tenant resource) |
| Q-XLS-IMPORT | export_only_p0 (Import P1 DEFER) |
| Q-XLS-FILENAME | Bieu15_TMC_Tram_Hat_{yyyyMMdd}.xls(x) · SA ext |
| Q-XLS-SHEET | one_sheet · 20 cột · facility+area+equipment cùng hàng |
| typed prior Q-* | keep · cấm reopen new_page |

## Artifacts
| Kind | Path |
|------|------|
| requirement | specs/csdl-bieu-15/po/requirement.md |
| prior analy compact | specs/csdl-bieu-15/handoff/data_analy-compact.md |
| control-hint | specs/_data-analy/features/csdl-bieu-15-control-hint.md |
| real-data | specs/_data-analy/features/csdl-bieu-15-real-data.md |

## Inventory / delta
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form/list 20) | typed keep | — | cấm reopen CRUD |
| exportExcel | Xuất Excel | ToolbarButton | catalogToolbar · binary |
| importExcel | Nhập Excel | — | DEFER P1 |

## Screens / zones (ids)
- DES-GRID-A/B/C/D keep · toolbar **+export** · filter unchanged (GAP-FILTER-BAR-08)
- Form Kind D Slideout keep · section vị trí + công trình + thiết bị
- reviewUrl= prior prototype (Design +nút)
- mfeStdUrl= http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-15 · hub ?resource=ops-facilities

## Live bind
- CRUD keep: api/v1/asset/csdl-records?resource=ops-facilities
- Export: GET …/csdl-records/export?resource=ops-facilities (+ filter QS)
- Import DEFER: POST …/import
- cấm ERP.* · toast-stub=done · merge so-ts-toll/rest/station / road-assets

## Grid AC (slim)
- G keep typed · G-04 toolbar Xuất · G-05 empty file OK · G-06 fail toast · G-07 golden 20 · G-08 filtered
- Leave/Form AC typed keep · export không dirty Leave
- packKind=list confirm

## GAP (Design/SA)
| ID | One-liner |
|----|-----------|
| GAP-BIEU15-XLS-01 | Toolbar Xuất Excel binary sheet Biểu 15 |
| GAP-BIEU15-XLS-02 | Toast stub ≠ done |
| GAP-BIEU15-XLS-03 | Golden Cục 16-sheet · cấm 12+8 |
| GAP-BIEU15-XLS-04 | Cấm filter-bar export |
| GAP-BIEU15-XLS-05 | GET export path (+ QS) |
| GAP-BIEU15-XLS-06 | 1 sheet 20 · facility+area+equipment cùng hàng |
| GAP-BIEU15-XLS-07 | Cấm merge so-ts-toll/rest/station/road-assets |

## Next
| Role | Need |
|------|------|
| **Design** | +nút Xuất catalogToolbar · reviewUrl · Import ẩn |
| SA | BFF binary · checksum 20 · filename · cấm đổi entity |
| TL/Dev | /implement-export-import-excel · cấm filter export |

## Cấm (compact)
ERP.* · invent infra · toast=done · filter-bar export · golden 12+8 · new_page typed re-CRUD · merge peer · yarn build/e2e @ po
