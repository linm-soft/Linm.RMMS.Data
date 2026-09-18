# Handoff compact — team_lead

schemaVersion: 1
feature: csdl-bieu-14
packKind: list
role: team_lead
status: done
changeScope: edit_page
skillVersion: 2026.08.25.01
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.17.3
contentHash: sha256:e9a062f1f9eecd6bf98748db0c3f839e2247a74ecb9bcd56273d4e48d729fa0a
headerFingerprint: sha256:14cd156a898dcc971a072dd1cd1b92460a8b597558a90dc9854fead9d4c4de5c
writtenAt: 2026-09-18T02:00:00.000Z
taskId: task_bb5bd3be
priorTyped: task_b21db737 · keep
saTaskId: task_5dc0c863
priorSa: task_5dc0c863
priorDesign: task_7d1a980f
priorPo: task_23c0d73d
priorAnaly: task_b92db6a6
resource: its-systems
columns: 21
IdCode: IT-
formNo: 14
peerSoTs: so-ts-its-camera · cấm merge
autoApprove: ON
e2eQa: ON (queued QA)
team_lead_confirm: approve
route_confirm: route_a (keep · no new URL)
design_confirm: approve
solution_confirm: approve
epic: csdl-export-print · T-XLS-S14
devSlash: /implement-export-import-excel
domain: Asset

## Decisions
- changeScope: edit_page (T-XLS-S14) · typed CRUD/Schema_CsdlBieu14 **keep** · **cấm** reopen new_page
- route_confirm route_a **keep** · không URL mới
- Export P0: GET …/csdl-records/export?resource=its-systems (+ filter QS · no page) · BFF binary · `.xls`
- Filename: Bieu14_HeThongITS_{yyyyMMdd}.xls · 1 sheet 21 · device+infra+GPS cùng hàng
- Q-XLS-SCOPE=filtered · IMPORT=export_only_p0 (Import ẩn) · SHEET=one_sheet
- Toolbar Xuất catalogToolbar · **cấm** filter-bar export · toast stub ≠ done · golden Cục · cấm 12+8
- Peer cite only · **cấm** merge so-ts-its-camera/road-assets/AiVision · **cấm** ERP.*
- team_lead_confirm approve (autoApprove ON) · open Q: **none**
- migration: **none** @ XLS · Schema keep

## Task matrix (ids)
- KEEP typed T-* **done** (T-DM/BE/UI/QA prior)
- NEW: T-XLS-S14-BE-01 · BFF-01 · FE-01 · FE-02 · QA-01
- OUT: T-XLS-S14-BE-02 (import P1)

## Artifacts
| Kind | Path |
|------|------|
| task | specs/csdl-bieu-14/task/csdl-bieu-14.md |
| solution | specs/csdl-bieu-14/be/solution-discovery.md |
| design | specs/csdl-bieu-14/ui/design.md |
| STATUS | specs/csdl-bieu-14/STATUS.md |

## Screens / zones (ids)
- S-LIST DES-GRID keep · toolbar +DES-EXPORT · B-FILTER unchanged
- S-XLS-EXPORT · S-XLS-IMPORT hidden · S-SKIP-PEER/MAP
- mfeStdUrl= http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-14 · hub ?resource=its-systems

## Live bind
- CRUD keep: …/csdl-records?resource=its-systems
- Export: GET …/csdl-records/export?resource=its-systems (+ filter QS)
- Import DEFER · cấm ERP.* · toast-stub=done · merge peer

## GAP → task
| ID | Task |
|----|------|
| GAP-BIEU14-XLS-01 | FE-01+BE-01 |
| GAP-BIEU14-XLS-02 | FE-02 |
| GAP-BIEU14-XLS-03 | BE-01+QA-01 |
| GAP-BIEU14-XLS-04 | FE-02 |
| GAP-BIEU14-XLS-05 | BE-01+BFF-01 |
| GAP-BIEU14-XLS-06 | BE-01 |
| GAP-BIEU14-XLS-07 | BE-01+FE-01 |

## Next
| Role | Need |
|------|------|
| **Dev** | /implement-export-import-excel · T-XLS-S14-* · implement MD |
| QA | T-XLS-S14-QA-01 · e2e /agent-qa* only |
| Review | after QA |

## UNCLEAR
- none

## Cấm (compact)
ERP.* · invent infra · toast=done · filter-bar export · golden 12+8 · merge peer · new_page typed re-CRUD · migration @ TL · implement code @ TL · yarn build/e2e/start:std @ TL · Import wire P0
