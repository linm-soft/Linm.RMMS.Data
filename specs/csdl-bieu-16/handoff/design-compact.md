# Handoff compact — design

schemaVersion: 1
feature: csdl-bieu-16
packKind: list
role: design
status: confirmed
changeScope: edit_page
skillVersion: 2026.08.29.03
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.17.3
contentHash: sha256:c71543b66c4f1d28f5dbae1743c1042e0bb9f12ab9c0efc55d9668af2a38e072
headerFingerprint: sha256:ec787bf2008ae89f1b6c085fe238f1b0d50b048f5c672b90b68d9ea102cf8fcc
writtenAt: 2026-09-18T03:10:00.000Z
taskId: task_4db008e6
priorTyped: task_e0f9dbb6 · keep
priorPo: task_de6499fc
priorAnaly: task_e344020d
resource: interchanges
columns: 39
IdCode: IX-
formNo: 16
peerSoTs: so-ts-interchange · cấm merge
autoApprove: ON
e2eQa: ON (queued QA)
design_confirm: approve
epic: csdl-export-print · T-XLS-S16
shared_grid_example: v1
real_view_parity: v1

## Decisions
- Kind B+D keep · Slideout 39 + branches[] · **chỉ** delta toolbar Xuất Excel
- Q-XLS-SCOPE=filtered · IMPORT=export_only_p0 (Import ẩn) · FILENAME=Bieu16_NutGiao_{yyyyMMdd} · BRANCH=header_blank · SHEET=name_cuc «Biểu 16»
- exportExcel=ToolbarButton trên catalogToolbar · **cấm** filter-bar (GAP-FILTER-BAR-08)
- binary download ≠ toast-stub · empty file OK · fail toast · golden Cục 16-sheet · cấm 12+8
- flatten 1 row/nhánh · 0 nhánh → 1 row branch* trống
- typed CRUD/form/hub/route/branches **keep** · cấm new_page reopen
- design_confirm approve (autoApprove ON) · open Q: none

## Artifacts
| Kind | Path |
|------|------|
| design | specs/csdl-bieu-16/ui/design.md |
| prototype | specs/csdl-bieu-16/ui/prototype/csdl-bieu-16-list-prototype.html |
| reviewUrl | file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-16/ui/prototype/csdl-bieu-16-list-prototype.html |
| prior po compact | specs/csdl-bieu-16/handoff/po-compact.md |

## Inventory / delta
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form/list 39 + branches) | typed keep | — | cấm reopen CRUD |
| exportExcel | Xuất Excel | ToolbarButton | catalogToolbar · binary |
| importExcel | — | — | DEFER P1 · ẩn |

## Screens / zones (ids)
- DES-GRID-A/B/C/D/F/H keep · B **+DES-EXPORT** · B-FILTER unchanged
- DES-GRID-Z Z1–Z3 · DES-FORM-BRANCH keep · S-SKIP-IMPORT · S-SKIP-MAP/PEER
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-16/ui/prototype/csdl-bieu-16-list-prototype.html
- mfeStdUrl= http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-16 · hub ?resource=interchanges

## Live bind
- CRUD keep: …/csdl-records?resource=interchanges · branches[] embed
- Export: GET …/csdl-records/export?resource=interchanges (+ filter QS)
- Import DEFER · cấm ERP.* · toast-stub=done · merge peer

## Grid AC (slim)
- G keep typed · G-04 Xuất toolbar · G-05 empty OK · G-06 fail toast · G-07 golden 39 flatten · G-08 filtered · G-09 header_blank
- Leave YES · export không dirty · Report N/A

## GAP (SA/Dev)
| ID | One-liner |
|----|-----------|
| GAP-BIEU16-XLS-01 | Toolbar Xuất binary sheet Biểu 16 |
| GAP-BIEU16-XLS-02 | Toast stub ≠ done |
| GAP-BIEU16-XLS-03 | Golden Cục 16-sheet · cấm 12+8 |
| GAP-BIEU16-XLS-04 | Cấm filter-bar export |
| GAP-BIEU16-XLS-05 | GET export path (+ QS) |
| GAP-BIEU16-XLS-06 | 1 sheet 39 · flatten 1 row/nhánh |
| GAP-BIEU16-XLS-07 | Cấm merge so-ts-interchange/road-assets |

## Next
| Role | Need |
|------|------|
| **SA** | BFF binary · checksum 39 · flatten branches · filename · cấm đổi entity |
| TL/Dev | /implement-export-import-excel · cấm filter export |
| QA | e2e queued /agent-qa* only |

## UNCLEAR
- none

## Cấm (compact)
ERP.* · invent infra · toast=done · filter-bar export · golden 12+8 · new_page typed re-CRUD · merge peer · yarn build/e2e/start:std · re-scan demo · paste HTML
