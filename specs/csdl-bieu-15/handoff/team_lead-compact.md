# Handoff compact — team_lead

schemaVersion: 1
feature: csdl-bieu-15
packKind: list
role: team_lead
status: done
changeScope: edit_page
skillVersion: 2026.08.25.01
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.17.3
contentHash: sha256:8a85d68eaef24cf98c312f83a3a100de25b1212e8a751d6f1f42005d38dd0fc8
headerFingerprint: sha256:0064a4903777f7ea8d51c7423d8451a20daf77a5934929001905edaa380f4fe4
writtenAt: 2026-09-18T02:30:00.000Z
taskId: task_ad295ce2
priorTyped: task_94727a59 · keep
priorSa: task_a5aa9767
priorDesign: task_c0f936f4
priorPo: task_18337e1c
priorAnaly: task_4b6f0c6e
resource: ops-facilities
columns: 20
IdCode: OF-
formNo: 15
peerSoTs: so-ts-toll · so-ts-rest-area · so-ts-station-house · cấm merge
autoApprove: ON
e2eQa: ON (queued QA)
route_confirm: route_a (keep)
team_lead_confirm: approve
design_confirm: approve
solution_confirm: approve
epic: csdl-export-print · T-XLS-S15
devSlash: /implement-export-import-excel
gates: tz_na · xco_get_only · share_tenant

## Decisions
- changeScope: edit_page (T-XLS-S15) · typed CRUD **keep** · **cấm** reopen new_page
- export: GET …/csdl-records/export?resource=ops-facilities · BFF binary · filename `Bieu15_TMC_Tram_Hat_{yyyyMMdd}.xls`
- Q-XLS-SCOPE=filtered · IMPORT=export_only_p0 · SHEET=one_sheet · 20 · facility+area+equipment cùng hàng
- toolbar Xuất · Import ẩn · **cấm** filter-bar export · toast stub ≠ done · golden Cục 16-sheet · cấm 12+8
- Schema_CsdlBieu15 keep · **cấm** migration/entity change @ XLS · **cấm** ERP.* · **cấm** merge peer/road-assets
- route_a keep · mfeStdUrl hub/alias keep · **cấm** invent URL
- open questions: **none**

## Tasks (ids)
| ID | Owner | Notes |
|----|-------|-------|
| T-XLS-S15-BE-01 | BE | GET export binary · filtered · 20 · 1 sheet |
| T-XLS-S15-BFF-01 | BFF | proxy binary · QS forward |
| T-XLS-S15-FE-01 | FE | catalogToolbar Xuất · cấm filter-bar · Import ẩn |
| T-XLS-S15-FE-02 | FE | download `.xls` · empty/fail · cấm stub done |
| T-XLS-S15-QA-01 | QA | golden 20 · filtered · 0-row · queued e2e |
| T-XLS-S15-BE-02 | BE | POST import — OUT / DEFER P1 |

## Artifacts
| Kind | Path |
|------|------|
| task | specs/csdl-bieu-15/task/csdl-bieu-15.md |
| prior sa compact | specs/csdl-bieu-15/handoff/sa-compact.md |
| solution | specs/csdl-bieu-15/be/solution-discovery.md |

## Screens / zones (ids)
- DES-GRID-A/B/C/D/F/Z keep · B **+DES-EXPORT** · B-FILTER unchanged
- S-XLS-EXPORT · S-XLS-IMPORT hidden · S-SKIP-PEER/MAP
- mfeStdUrl= http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-15 · hub ?resource=ops-facilities

## Live bind
- CRUD keep: api/v1/asset/csdl-records?resource=ops-facilities
- Export: GET …/csdl-records/export?resource=ops-facilities (+ filter QS · no page)
- Import DEFER · cấm ERP.* · toast-stub=done · merge peer

## GAP
| ID | One-liner |
|----|-----------|
| GAP-BIEU15-XLS-01 | Toolbar Xuất binary |
| GAP-BIEU15-XLS-02 | Toast stub ≠ done |
| GAP-BIEU15-XLS-03 | Golden Cục 16-sheet · cấm 12+8 |
| GAP-BIEU15-XLS-04 | Cấm filter-bar export |
| GAP-BIEU15-XLS-05 | GET export (+ QS) |
| GAP-BIEU15-XLS-06 | 1 sheet 20 · facility+area+equipment |
| GAP-BIEU15-XLS-07 | Cấm merge peer/road-assets |

## Next
| Role | Need |
|------|------|
| **Dev** | /implement-export-import-excel · T-XLS-S15-BE/BFF/FE |
| QA | queued /agent-qa* · T-XLS-S15-QA-01 |

## Cấm (compact)
ERP.* · invent infra · toast=done · filter-bar export · golden 12+8 · merge peer · new_page reopen · Import P0 · yarn build/e2e/start:std @ TL · implement code @ TL
