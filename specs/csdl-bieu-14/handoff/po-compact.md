# Handoff compact — po

schemaVersion: 1
feature: csdl-bieu-14
packKind: list
role: po
status: confirmed
changeScope: edit_page
skillVersion: 2026.08.25.01
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.17.3
contentHash: sha256:e9a062f1f9eecd6bf98748db0c3f839e2247a74ecb9bcd56273d4e48d729fa0a
headerFingerprint: sha256:14cd156a898dcc971a072dd1cd1b92460a8b597558a90dc9854fead9d4c4de5c
writtenAt: 2026-09-18T01:40:00.000Z
taskId: task_23c0d73d
priorTyped: task_475a3c19 · keep
priorAnaly: task_b92db6a6
resource: its-systems
columns: 21
IdCode: IT-
formNo: 14
peerSoTs: so-ts-its-camera · cấm merge
autoApprove: ON
e2eQa: ON (queued QA)
epic: csdl-export-print · T-XLS-S14

## Decisions (Q-XLS · autoApprove)
| Q | Decision |
|---|----------|
| Q-XLS-SCOPE | filtered (QS filter · empty=all tenant resource) |
| Q-XLS-IMPORT | export_only_p0 (Import P1 DEFER) |
| Q-XLS-FILENAME | Bieu14_HeThongITS_{yyyyMMdd}.xls(x) · SA ext |
| Q-XLS-SHEET | one_sheet · 21 cột · device+infra+GPS cùng hàng |
| typed prior Q-* | keep · cấm reopen new_page |

## Artifacts
| Kind | Path |
|------|------|
| requirement | specs/csdl-bieu-14/po/requirement.md |
| prior analy compact | specs/csdl-bieu-14/handoff/data_analy-compact.md |
| control-hint | specs/_data-analy/features/csdl-bieu-14-control-hint.md |
| real-data | specs/_data-analy/features/csdl-bieu-14-real-data.md |

## Inventory / delta
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form/list 21) | typed keep | — | cấm reopen CRUD |
| exportExcel | Xuất Excel | ToolbarButton | catalogToolbar · binary |
| importExcel | Nhập Excel | — | DEFER P1 |

## Screens / zones (ids)
- DES-GRID-A/B/C/D keep · toolbar **+export** · filter unchanged (GAP-FILTER-BAR-08)
- Form Kind D Slideout keep · section thiết bị + hạ tầng
- reviewUrl= prior prototype (Design +nút)
- mfeStdUrl= http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-14 · hub ?resource=its-systems

## Live bind
- CRUD keep: api/v1/asset/csdl-records?resource=its-systems
- Export: GET …/csdl-records/export?resource=its-systems (+ filter QS)
- Import DEFER: POST …/import
- cấm ERP.* · toast-stub=done · merge so-ts-its-camera / road-assets / AiVision

## Grid AC (slim)
- G keep typed · G-04 toolbar Xuất · G-05 empty file OK · G-06 fail toast · G-07 golden 21 · G-08 filtered
- Leave/Form AC typed keep · export không dirty Leave
- packKind=list confirm

## GAP (Design/SA)
| ID | One-liner |
|----|-----------|
| GAP-BIEU14-XLS-01 | Toolbar Xuất Excel binary sheet Biểu 14 |
| GAP-BIEU14-XLS-02 | Toast stub ≠ done |
| GAP-BIEU14-XLS-03 | Golden Cục 16-sheet · cấm 12+8 |
| GAP-BIEU14-XLS-04 | Cấm filter-bar export |
| GAP-BIEU14-XLS-05 | GET export path (+ QS) |
| GAP-BIEU14-XLS-06 | 1 sheet 21 · device+infra+GPS cùng hàng |
| GAP-BIEU14-XLS-07 | Cấm merge so-ts-its-camera/road-assets/AiVision |

## Next
| Role | Need |
|------|------|
| **Design** | +nút Xuất catalogToolbar · reviewUrl · Import ẩn |
| SA | BFF binary · checksum 21 · filename · cấm đổi entity |
| TL/Dev | /implement-export-import-excel · cấm filter export |

## Cấm (compact)
ERP.* · invent infra · toast=done · filter-bar export · golden 12+8 · new_page typed re-CRUD · merge peer · yarn build/e2e @ po
