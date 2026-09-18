# Handoff compact — team_lead

schemaVersion: 1
feature: csdl-bieu-16
packKind: list
role: team_lead
status: done
changeScope: edit_page
skillVersion: 2026.08.25.01
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.17.3
contentHash: sha256:c71543b66c4f1d28f5dbae1743c1042e0bb9f12ab9c0efc55d9668af2a38e072
headerFingerprint: sha256:ec787bf2008ae89f1b6c085fe238f1b0d50b048f5c672b90b68d9ea102cf8fcc
writtenAt: 2026-09-18T03:30:00.000Z
taskId: task_1793bfbe
priorTyped: task_4dfa0ca5 · keep · review task_628c95a5 PASS
priorSa: task_17aa79d5
priorDesign: task_4db008e6
priorPo: task_de6499fc
priorAnaly: task_e344020d
resource: interchanges
columns: 39
IdCode: IX-
formNo: 16
peerSoTs: so-ts-interchange · cấm merge
autoApprove: ON
e2eQa: ON (queued QA)
route_confirm: route_a (keep)
team_lead_confirm: approve
design_confirm: approve
solution_confirm: approve
epic: csdl-export-print · T-XLS-S16
devSlash: /implement-export-import-excel
gates: tz_na · xco_get_only · share_tenant

## Decisions
- changeScope: edit_page (T-XLS-S16) · typed CRUD **keep** · **cấm** reopen new_page
- export: GET …/csdl-records/export?resource=interchanges · BFF binary · filename `Bieu16_NutGiao_{yyyyMMdd}.xls`
- Q-XLS-SCOPE=filtered · IMPORT=export_only_p0 · SHEET=name_cuc «Biểu 16» · BRANCH=header_blank · flatten 1 row/nhánh
- toolbar Xuất · Import ẩn · **cấm** filter-bar export · toast stub ≠ done · golden Cục 16-sheet · cấm 12+8
- Schema_CsdlBieu16+Branch keep · **cấm** migration/entity change @ XLS · **cấm** ERP.* · **cấm** merge peer/road-assets
- route_a keep · mfeStdUrl hub/alias keep · **cấm** invent URL
- open questions: **none**

## Tasks (ids)
| ID | Owner | Notes |
|----|-------|-------|
| T-XLS-S16-BE-01 | BE | GET export binary · filtered · 39 · flatten · header_blank |
| T-XLS-S16-BFF-01 | BFF | proxy binary · QS forward |
| T-XLS-S16-FE-01 | FE | catalogToolbar Xuất · cấm filter-bar · Import ẩn |
| T-XLS-S16-FE-02 | FE | download `.xls` · empty/fail · cấm stub done |
| T-XLS-S16-QA-01 | QA | golden 39 flatten · filtered · 0-row · queued e2e |
| T-XLS-S16-BE-02 | BE | POST import — OUT / DEFER P1 |

## Artifacts
| Kind | Path |
|------|------|
| task | specs/csdl-bieu-16/task/csdl-bieu-16.md |
| prior sa compact | specs/csdl-bieu-16/handoff/sa-compact.md |
| solution | specs/csdl-bieu-16/be/solution-discovery.md |

## Screens / zones (ids)
- DES-GRID-A/B/C/D/F/Z keep · B **+DES-EXPORT** · B-FILTER unchanged · DES-FORM-BRANCH keep
- S-XLS-EXPORT · S-XLS-IMPORT hidden · S-SKIP-PEER/MAP
- mfeStdUrl= http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-16 · hub ?resource=interchanges

## Live bind
- CRUD keep: api/v1/asset/csdl-records?resource=interchanges · branches[] embed
- Export: GET …/csdl-records/export?resource=interchanges (+ filter QS · no page)
- Import DEFER · cấm ERP.* · toast-stub=done · merge peer

## GAP
| ID | One-liner |
|----|-----------|
| GAP-BIEU16-XLS-01 | Toolbar Xuất binary |
| GAP-BIEU16-XLS-02 | Toast stub ≠ done |
| GAP-BIEU16-XLS-03 | Golden Cục 16-sheet · cấm 12+8 |
| GAP-BIEU16-XLS-04 | Cấm filter-bar export |
| GAP-BIEU16-XLS-05 | GET export (+ QS) |
| GAP-BIEU16-XLS-06 | 1 sheet 39 · flatten · header_blank |
| GAP-BIEU16-XLS-07 | Cấm merge peer/road-assets |

## Next
| Role | Need |
|------|------|
| **Dev** | /implement-export-import-excel · T-XLS-S16-BE/BFF/FE · flatten branches |
| QA | queued /agent-qa* · T-XLS-S16-QA-01 |

## Cấm (compact)
ERP.* · invent infra · toast=done · filter-bar export · golden 12+8 · merge peer · new_page reopen · Import P0 · yarn build/e2e/start:std @ TL · implement code @ TL
