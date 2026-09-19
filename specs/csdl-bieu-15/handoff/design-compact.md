# Handoff compact — design

schemaVersion: 1
feature: csdl-bieu-15
packKind: list
role: design
status: confirmed
changeScope: edit_page
skillVersion: 2026.08.29.03
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.17.3
contentHash: sha256:8a85d68eaef24cf98c312f83a3a100de25b1212e8a751d6f1f42005d38dd0fc8
headerFingerprint: sha256:0064a4903777f7ea8d51c7423d8451a20daf77a5934929001905edaa380f4fe4
writtenAt: 2026-09-18T02:20:00.000Z
taskId: task_c0f936f4
priorTyped: task_dbeaf01a · keep
priorPo: task_18337e1c
priorAnaly: task_4b6f0c6e
resource: ops-facilities
columns: 20
IdCode: OF-
formNo: 15
peerSoTs: so-ts-toll · so-ts-rest-area · so-ts-station-house · cấm merge
autoApprove: ON
e2eQa: ON (queued QA)
design_confirm: approve
epic: csdl-export-print · T-XLS-S15
shared_grid_example: v1
real_view_parity: v1

## Decisions
- Kind B+D keep · Slideout 20 · **chỉ** delta toolbar Xuất Excel
- Q-XLS-SCOPE=filtered · IMPORT=export_only_p0 (Import ẩn) · FILENAME=Bieu15_TMC_Tram_Hat_{yyyyMMdd} · SHEET=one_sheet
- exportExcel=ToolbarButton trên catalogToolbar · **cấm** filter-bar (GAP-FILTER-BAR-08)
- binary download ≠ toast-stub · empty file OK · fail toast · golden Cục 16-sheet · cấm 12+8
- typed CRUD/form/hub/route **keep** · cấm new_page reopen
- design_confirm approve (autoApprove ON) · open Q: none

## Artifacts
| Kind | Path |
|------|------|
| design | specs/csdl-bieu-15/ui/design.md |
| prototype | specs/csdl-bieu-15/ui/prototype/csdl-bieu-15-list-prototype.html |
| reviewUrl | file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-15/ui/prototype/csdl-bieu-15-list-prototype.html |
| prior po compact | specs/csdl-bieu-15/handoff/po-compact.md |

## Inventory / delta
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form/list 20) | typed keep | — | cấm reopen CRUD |
| exportExcel | Xuất Excel | ToolbarButton | catalogToolbar · binary |
| importExcel | — | — | DEFER P1 · ẩn |

## Screens / zones (ids)
- DES-GRID-A/B/C/D/F/H keep · B **+DES-EXPORT** · B-FILTER unchanged
- DES-GRID-Z Z1–Z3 keep · S-SKIP-IMPORT · S-SKIP-MAP/PEER
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-15/ui/prototype/csdl-bieu-15-list-prototype.html
- mfeStdUrl= http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-15 · hub ?resource=ops-facilities

## Live bind
- CRUD keep: …/csdl-records?resource=ops-facilities
- Export: GET …/csdl-records/export?resource=ops-facilities (+ filter QS)
- Import DEFER · cấm ERP.* · toast-stub=done · merge peer

## Grid AC (slim)
- G keep typed · G-04 Xuất toolbar · G-05 empty OK · G-06 fail toast · G-07 golden 20 · G-08 filtered
- Leave YES · export không dirty · Report N/A

## GAP (SA/Dev)
| ID | One-liner |
|----|-----------|
| GAP-BIEU15-XLS-01 | Toolbar Xuất binary sheet Biểu 15 |
| GAP-BIEU15-XLS-02 | Toast stub ≠ done |
| GAP-BIEU15-XLS-03 | Golden Cục 16-sheet · cấm 12+8 |
| GAP-BIEU15-XLS-04 | Cấm filter-bar export |
| GAP-BIEU15-XLS-05 | GET export path (+ QS) |
| GAP-BIEU15-XLS-06 | 1 sheet 20 · facility+area+equipment |
| GAP-BIEU15-XLS-07 | Cấm merge so-ts-toll/rest/station/road-assets |

## Next
| Role | Need |
|------|------|
| **SA** | BFF binary · checksum 20 · filename · cấm đổi entity |
| TL/Dev | /implement-export-import-excel · cấm filter export |
| QA | e2e queued /agent-qa* only |

## UNCLEAR
- none

## Cấm (compact)
ERP.* · invent infra · toast=done · filter-bar export · golden 12+8 · new_page typed re-CRUD · merge peer · yarn build/e2e/start:std · re-scan demo · paste HTML
