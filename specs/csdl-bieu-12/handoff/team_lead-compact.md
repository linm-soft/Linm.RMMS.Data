# Handoff compact — team_lead

schemaVersion: 1
feature: csdl-bieu-12
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:f42502cee520105fb0a7f618c17b8b0f582884d7f779f638ec7310c26346e77a
headerFingerprint: sha256:b6a541f8adc60a5badc72fc92c606631e5a1457fc119b9a6a546eb1f0acc437a
writtenAt: 2026-09-18T00:45:00.000Z
taskId: task_f750c146
saTaskId: task_b183ffe0
resource: green-assets
columns: 15
blocks: 2
IdCode: CX-
formNo: 12
peerSoTs: —
changeScope: edit_page
formPattern: Slideout
route_confirm: route_a
team_lead_confirm: approve
design_confirm: approve
solution_confirm: approve
autoApprove: ON
e2eQa: ON
epic: csdl-export-print · T-XLS-S12

## Decisions
- changeScope: edit_page (T-XLS-S12) · **cấm** reopen typed new_page CRUD
- keep: Schema_CsdlBieu12 · 15/2 · Kind B+D Slideout · route_a hub+alias · no peer
- export P0: GET …/csdl-records/export?resource=green-assets · BFF binary · filter-all · **cấm** streaming
- filename: Bieu12_CayXanh_{yyyyMMdd}.xls · one_sheet 15 · khóm+cỏ cùng hàng · **cấm** 2 sheet · **cấm** 12+8
- Q-XLS-SCOPE filtered · Q-XLS-IMPORT export_only_p0 · Import DEFER P1 ẩn
- toolbar +Xuất · **cấm** filter-bar export · toast stub ≠ done
- entity/migration: **none** · gates tz_na/xco_get_only/share_tenant keep
- domain Asset · **cấm ERP.*** · **cấm** invent so-ts-green
- team_lead_confirm: approve (autoApprove ON) · open Q: none
- mfe: Linm.Web.RMMS.Asset · be: Linm.RMMS.WebService
- devSlash: /implement-export-import-excel

## Artifacts
| Kind | Path |
|------|------|
| task | specs/csdl-bieu-12/task/csdl-bieu-12.md |
| solution | specs/csdl-bieu-12/be/solution-discovery.md |
| design | specs/csdl-bieu-12/ui/design.md |
| STATUS | specs/csdl-bieu-12/STATUS.md |

## Task matrix (ids)
T-XLS-S12-BE-01 · BFF-01 · FE-01 · FE-02 · QA-01 · BE-02 OUT/P1
GAP-BIEU12-XLS-01…08 · typed T-* prior **done** · **cấm** reopen

## Screens / zones (ids only)
- S-LIST keep · S-XLS-EXPORT · S-XLS-IMPORT (hidden) · S-FORM-* keep
- mfeStdUrl=http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-12
- hub=?resource=green-assets
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-12/ui/prototype/csdl-bieu-12-list-prototype.html

## Live bind (1-liner)
- CRUD keep: api/v1/asset/csdl-records?resource=green-assets
- Export: GET …/export?resource=green-assets (+ filter QS · no page)
- Import: POST …/import — DEFER P1

## Next
| Role | Need |
|------|------|
| **Dev** | implement § XLS · T-XLS-S12-* · /implement-export-import-excel |
| QA | T-XLS-S12-QA-01 e2e queued /agent-qa* |
| Review | after QA XLS |

## UNCLEAR
- none

## Cấm (compact)
ERP.* · invent infra/so-ts-green · toast=done · filter-bar export · golden 12+8 · 2-sheet · streaming P0 · Import P0 · reopen typed CRUD · migration @ TL · implement code @ TL · e2e/build/start:std @ TL · start role khác
