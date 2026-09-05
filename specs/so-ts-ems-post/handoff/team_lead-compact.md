# handoff-compact — team_lead → dev
schemaVersion: 1
feature: so-ts-ems-post
role: team_lead
status: confirmed
packKind: list
changeScope: new_page
taskId: task_7f7674e5
generatedAt: 2026-09-01T05:28:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=EMS_POST
mfeStdUrl: http://localhost:9301/so-ts?type=EMS_POST
alias: /so-ts-ems-post → /so-ts?type=EMS_POST (optional)
API: api/v1/asset/road-assets
domain: Asset
gates: tz_na · xco_get_only · share_tenant
migration: none
e2eQa: ON (queued /agent-qa* only)
skillVersion: 2026.08.19.04
workflowVersion: 2026.08.30.01
rulesVersion: 2026.08.31.2
typeCode: EMS_POST
dump: tbl_first_aid_station
prefix: CCU-
clusterUi: station · tile t29

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-ems-post/task/so-ts-ems-post.md
filterBar: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-ems-post-filter-bar.md (T-CTX-01 create)
reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-ems-post/ui/prototype/so-ts-ems-post-list-prototype.html

## Prior (confirmed)
data_analy: contentHash sha256:07fe22b464638b45f6be1286d9b99d3a7551dd5ef62be076013bbedd692885c8
po: specs/so-ts-ems-post/po/requirement.md
design: specs/so-ts-ems-post/ui/design.md · design_confirm=approve
sa: specs/so-ts-ems-post/be/solution-discovery.md · solution_confirm=approve

## Dev focus (T-*)
- T-UI-LIST-01: EMS_POST grid · ON tên trạm/tuyến/lý trình/chủ SH/loại trạm/khoảng cách · hide type/kmTo/qty · GAP-SOTS-COL-01 · LAYOUT-06
- T-UI-FILTER-01: so-ts-ems-post-filter-bar.md · V1–V5
- T-UI-FORM-01: S-* reuse · S-ATTR editable · kmTo ẩn · name←name_station «Tên trạm» · dumpSpecs · GAP-EMS-SPEC-01
- T-BE-INIT-01: ownerOptions[] · stationTypeOptions[] · GAP-EMS-LOOKUP-01
- T-BE-CRUD-01: name_station IsWeak guard · GAP-EMS-NAME/SPEC · no flatten
- T-UI-LEAVE-01 / T-UI-HIST-01: LeaveConfirmModal · useAlert · cấm native dialog
- T-QA-*: queued e2e only QA
- GAP-EMS-TILE-01: tile t29 drill OK · count **240**

## Cấm
ERP.* · invent api/v1/so-ts/* · fork AssetFormPage · Step4b/migration · e2e/build/start:std ở TL · GAP-PKT-ROLE-01

## Next
role: dev · /agent-dev
write: specs/so-ts-ems-post/implement/so-ts-ems-post.md
