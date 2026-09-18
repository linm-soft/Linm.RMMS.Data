# Handoff compact — team_lead

schemaVersion: 1
feature: csdl-bieu-13
packKind: list
role: team_lead
status: done
skillVersion: 2026.09.05.03
workflowVersion: 2026.09.05.03
rulesVersion: 2026.09.17.3
contentHash: sha256:800386bb8f86bfcc815b9c7d3a6dc246dc58b0a95b5132a317c5a094d0b4194f
headerFingerprint: sha256:31dbc83200b511c9d61333b1cdb94e2880778980a3b21970be414e926db29008
writtenAt: 2026-09-18T01:35:00.000Z
taskId: task_6af52a22
saTaskId: task_51c2f1f4
priorTyped: task_a0486d94 · keep
resource: noise-barriers
columns: 13
IdCode: TC-
formNo: 13
peerSoTs: so-ts-noise-barrier · cấm merge
changeScope: edit_page
formPattern: Slideout
route_confirm: route_a
team_lead_confirm: approve
design_confirm: approve
solution_confirm: approve
autoApprove: ON
e2eQa: ON
epic: csdl-export-print · T-XLS-S13

## Decisions
- changeScope: edit_page (T-XLS-S13) · **cấm** reopen typed new_page CRUD
- keep: Schema_CsdlBieu13 · 13 · Kind B+D Slideout · route_a hub+alias · peer cite only
- export P0: GET …/csdl-records/export?resource=noise-barriers · BFF binary · filter-all · **cấm** streaming
- filename: Bieu13_TuongChongOn_{yyyyMMdd}.xls · one_sheet 13 · dài/cao/DT cùng hàng · **cấm** dim sheet · **cấm** 12+8
- Q-XLS-SCOPE filtered · Q-XLS-IMPORT export_only_p0 · Import DEFER P1 ẩn
- toolbar +Xuất · **cấm** filter-bar export · toast stub ≠ done
- entity/migration: **none** · gates tz_na/xco_get_only/share_tenant keep
- domain Asset · **cấm ERP.*** · **cấm** merge so-ts-noise-barrier/road-assets
- team_lead_confirm: approve (autoApprove ON) · open Q: none
- mfe: Linm.Web.RMMS.Asset · be: Linm.RMMS.WebService
- devSlash: /implement-export-import-excel

## Artifacts
| Kind | Path |
|------|------|
| task | specs/csdl-bieu-13/task/csdl-bieu-13.md |
| solution | specs/csdl-bieu-13/be/solution-discovery.md |
| design | specs/csdl-bieu-13/ui/design.md |
| STATUS | specs/csdl-bieu-13/STATUS.md |

## Task matrix (ids)
T-XLS-S13-BE-01 · BFF-01 · FE-01 · FE-02 · QA-01 · BE-02 OUT/P1
GAP-BIEU13-XLS-01…08 · typed T-* prior **done** · **cấm** reopen

## Screens / zones (ids only)
- S-LIST keep · S-XLS-EXPORT · S-XLS-IMPORT (hidden) · S-FORM-* keep
- mfeStdUrl=http://localhost:9301/so-ts/csdl-so-sach · alias /csdl-bieu-13
- hub=?resource=noise-barriers
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-13/ui/prototype/csdl-bieu-13-list-prototype.html

## Live bind (1-liner)
- CRUD keep: api/v1/asset/csdl-records?resource=noise-barriers
- Export: GET …/export?resource=noise-barriers (+ filter QS · no page)
- Import: POST …/import — DEFER P1

## Next
| Role | Need |
|------|------|
| **Dev** | implement § XLS · T-XLS-S13-* · /implement-export-import-excel |
| QA | T-XLS-S13-QA-01 e2e queued /agent-qa* |
| Review | after QA XLS |

## UNCLEAR
- none

## Cấm (compact)
ERP.* · invent infra · toast=done · filter-bar export · golden 12+8 · dim sheet · streaming P0 · Import P0 · merge peer/road-assets · reopen typed CRUD · migration @ TL · implement code @ TL · e2e/build/start:std @ TL · start role khác
