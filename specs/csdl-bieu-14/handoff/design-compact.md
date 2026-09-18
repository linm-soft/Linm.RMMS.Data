# Handoff compact — design

schemaVersion: 1
feature: csdl-bieu-14
packKind: list
role: design
status: confirmed
changeScope: edit_page
skillVersion: 2026.08.29.03
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.17.3
contentHash: sha256:e9a062f1f9eecd6bf98748db0c3f839e2247a74ecb9bcd56273d4e48d729fa0a
headerFingerprint: sha256:14cd156a898dcc971a072dd1cd1b92460a8b597558a90dc9854fead9d4c4de5c
writtenAt: 2026-09-18T08:45:00.000Z
taskId: task_7d1a980f
priorTyped: task_d302ab8a · keep
priorPo: task_23c0d73d
priorAnaly: task_b92db6a6
resource: its-systems
columns: 21
IdCode: IT-
formNo: 14
peerSoTs: so-ts-its-camera · cấm merge
autoApprove: ON
e2eQa: ON (queued QA)
design_confirm: approve
epic: csdl-export-print · T-XLS-S14
shared_grid_example: v1
real_view_parity: v1

## Decisions
- Kind B+D keep · Slideout 21 · **chỉ** delta toolbar Xuất Excel
- Q-XLS-SCOPE=filtered · IMPORT=export_only_p0 (Import ẩn) · FILENAME=Bieu14_HeThongITS_{yyyyMMdd} · SHEET=one_sheet
- exportExcel=ToolbarButton trên catalogToolbar · **cấm** filter-bar (GAP-FILTER-BAR-08)
- binary download ≠ toast-stub · empty file OK · fail toast · golden Cục 16-sheet · cấm 12+8
- typed CRUD/form/hub/route **keep** · cấm new_page reopen
- design_confirm approve (autoApprove ON) · open Q: none

## Artifacts
| Kind | Path |
|------|------|
| design | specs/csdl-bieu-14/ui/design.md |
| prototype | specs/csdl-bieu-14/ui/prototype/csdl-bieu-14-list-prototype.html |
| reviewUrl | file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-14/ui/prototype/csdl-bieu-14-list-prototype.html |
| prior po compact | specs/csdl-bieu-14/handoff/po-compact.md |

## Inventory / delta
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| (form/list 21) | typed keep | — | cấm reopen CRUD |
| exportExcel | Xuất Excel | ToolbarButton | catalogToolbar · binary |
| importExcel | — | — | DEFER P1 · ẩn |

## Screens / zones (ids)
- DES-GRID-A/B/C/D/F/H keep · B **+DES-EXPORT** · B-FILTER unchanged
- DES-GRID-Z Z1–Z3 keep · S-SKIP-IMPORT · S-SKIP-MAP/PEER
- reviewUrl= file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-14/ui/prototype/csdl-bieu-14-list-prototype.html
- mfeStdUrl= http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-14 · hub ?resource=its-systems

## Live bind
- CRUD keep: …/csdl-records?resource=its-systems
- Export: GET …/csdl-records/export?resource=its-systems (+ filter QS)
- Import DEFER · cấm ERP.* · toast-stub=done · merge peer

## Grid AC (slim)
- G keep typed · G-04 Xuất toolbar · G-05 empty OK · G-06 fail toast · G-07 golden 21 · G-08 filtered
- Leave YES · export không dirty · Report N/A

## GAP (SA/Dev)
| ID | One-liner |
|----|-----------|
| GAP-BIEU14-XLS-01 | Toolbar Xuất binary sheet Biểu 14 |
| GAP-BIEU14-XLS-02 | Toast stub ≠ done |
| GAP-BIEU14-XLS-03 | Golden Cục 16-sheet · cấm 12+8 |
| GAP-BIEU14-XLS-04 | Cấm filter-bar export |
| GAP-BIEU14-XLS-05 | GET export path (+ QS) |
| GAP-BIEU14-XLS-06 | 1 sheet 21 · device+infra+GPS |
| GAP-BIEU14-XLS-07 | Cấm merge so-ts-its-camera/road-assets/AiVision |

## Next
| Role | Need |
|------|------|
| **SA** | BFF binary · checksum 21 · filename · cấm đổi entity |
| TL/Dev | /implement-export-import-excel · cấm filter export |
| QA | e2e queued /agent-qa* only |

## UNCLEAR
- none

## Cấm (compact)
ERP.* · invent infra · toast=done · filter-bar export · golden 12+8 · new_page typed re-CRUD · merge peer · yarn build/e2e/start:std · re-scan demo · paste HTML
