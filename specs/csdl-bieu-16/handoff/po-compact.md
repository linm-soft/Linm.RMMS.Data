# Handoff compact — po

schemaVersion: 1
feature: csdl-bieu-16
packKind: list
role: po
status: confirmed
changeScope: edit_page
skillVersion: 2026.08.25.01
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.17.3
contentHash: sha256:c71543b66c4f1d28f5dbae1743c1042e0bb9f12ab9c0efc55d9668af2a38e072
headerFingerprint: sha256:ec787bf2008ae89f1b6c085fe238f1b0d50b048f5c672b90b68d9ea102cf8fcc
writtenAt: 2026-09-18T03:00:00.000Z
taskId: task_de6499fc
priorTyped: task_593d435f · keep · review task_628c95a5 PASS
priorAnaly: task_e344020d
resource: interchanges
columns: 39
IdCode: IX-
formNo: 16
peerSoTs: so-ts-interchange · cấm merge
autoApprove: ON
e2eQa: ON (queued QA)
epic: csdl-export-print · T-XLS-S16

## Decisions (Q-XLS · autoApprove)
| Q | Decision |
|---|----------|
| Q-XLS-SCOPE | filtered (QS filter · empty=all tenant resource) |
| Q-XLS-IMPORT | export_only_p0 (Import P1 DEFER) |
| Q-XLS-FILENAME | Bieu16_NutGiao_{yyyyMMdd}.xls(x) · SA ext · Content-Disposition |
| Q-XLS-BRANCH | header_blank (0 nhánh → 1 row · branch* trống) |
| Q-XLS-SHEET | name_cuc · sheet «Biểu 16» |
| typed prior Q-* | keep · cấm reopen new_page |

## Artifacts
| Kind | Path |
|------|------|
| requirement | specs/csdl-bieu-16/po/requirement.md |
| prior analy compact | specs/csdl-bieu-16/handoff/data_analy-compact.md |
| control-hint | specs/_data-analy/features/csdl-bieu-16-control-hint.md |
| real-data | specs/_data-analy/features/csdl-bieu-16-real-data.md |

## Inventory / delta
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form/list 39 + branches) | typed keep | — | cấm reopen CRUD |
| exportExcel | Xuất Excel | ToolbarButton | catalogToolbar · binary |
| importExcel | Nhập Excel | — | DEFER P1 |

## Screens / zones (ids)
- DES-GRID-A/B/C/D keep · toolbar **+export** · filter unchanged (GAP-FILTER-BAR-08)
- Form Kind D Slideout keep · header + branches[] + ATGT
- reviewUrl= prior prototype (Design +nút)
- mfeStdUrl= http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-16 · hub ?resource=interchanges

## Live bind
- CRUD keep: api/v1/asset/csdl-records?resource=interchanges
- Export: GET …/csdl-records/export?resource=interchanges (+ filter QS)
- Import DEFER: POST …/import
- cấm ERP.* · toast-stub=done · merge so-ts-interchange / road-assets

## Grid AC (slim)
- G keep typed · G-04 toolbar Xuất · G-05 empty file OK · G-06 fail toast · G-07 golden 39 flatten · G-08 filtered · G-09 header_blank
- Leave/Form AC typed keep · export không dirty Leave
- packKind=list confirm

## GAP (Design/SA)
| ID | One-liner |
|----|-----------|
| GAP-BIEU16-XLS-01 | Toolbar Xuất Excel binary sheet Biểu 16 |
| GAP-BIEU16-XLS-02 | Toast stub ≠ done |
| GAP-BIEU16-XLS-03 | Golden Cục 16-sheet · cấm 12+8 |
| GAP-BIEU16-XLS-04 | Cấm filter-bar export |
| GAP-BIEU16-XLS-05 | GET export path (+ QS) |
| GAP-BIEU16-XLS-06 | 1 sheet 39 · flatten 1 row/nhánh |
| GAP-BIEU16-XLS-07 | Cấm merge so-ts-interchange/road-assets |

## Next
| Role | Need |
|------|------|
| **Design** | +nút Xuất catalogToolbar · reviewUrl · Import ẩn |
| SA | BFF binary · checksum 39 · flatten branches · filename · cấm đổi entity |
| TL/Dev | /implement-export-import-excel · cấm filter export |

## Cấm (compact)
ERP.* · invent infra · toast=done · filter-bar export · golden 12+8 · new_page typed re-CRUD · merge peer · yarn build/e2e @ po
