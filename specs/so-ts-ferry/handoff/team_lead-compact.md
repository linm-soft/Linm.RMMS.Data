# handoff-compact — team_lead → dev
schemaVersion: 1
feature: so-ts-ferry
role: team_lead
status: confirmed
packKind: list
changeScope: new_page
taskId: task_2c8240a7
generatedAt: 2026-09-01T07:16:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=FERRY
mfeStdUrl: http://localhost:9301/so-ts?type=FERRY
alias: /so-ts-ferry → /so-ts?type=FERRY (optional)
API: api/v1/asset/road-assets
domain: Asset
gates: tz_na · xco_get_only · share_tenant
migration: none
e2eQa: ON (queued /agent-qa* only)
skillVersion: 2026.08.19.04
workflowVersion: 2026.08.30.01
rulesVersion: 2026.08.31.2

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-ferry/task/so-ts-ferry.md
filterBar: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-ferry-filter-bar.md
reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-ferry/ui/prototype/so-ts-ferry-list-prototype.html

## Prior (confirmed)
data_analy: contentHash sha256:0737298d3ce0a14ae36a4c9dfb37563e315723a476c59d953737019260a5a2f4
po: specs/so-ts-ferry/po/requirement.md
design: specs/so-ts-ferry/ui/design.md
sa: specs/so-ts-ferry/be/solution-discovery.md · solution_confirm=approve

## Dev focus (T-*)
- T-UI-LIST-01: FERRY grid profile · GAP-SOTS-COL-01 · LAYOUT-06
- T-UI-FILTER-01: so-ts-ferry-filter-bar.md · V1–V5
- T-UI-FORM-01: S-* reuse · S-ATTR editable · kmTo ẩn · name←name_ferry_terminal · dumpSpecs merge
- T-BE-INIT-01: ferryTypes[] · ferryWorkLevels[] · riverChannelNames[] · GAP-FY-LOOKUP-01
- T-BE-CRUD-01: name_ferry_terminal IsWeak guard · GAP-FY-NAME/SPEC · no flatten
- T-UI-LEAVE-01 / T-UI-HIST-01: LeaveConfirmModal · useAlert · cấm native dialog
- T-QA-*: queued e2e only QA

## Cấm
ERP.* · invent api/v1/so-ts/* · fork AssetFormPage · Step4b/migration · e2e/build/start:std ở TL · GAP-PKT-ROLE-01

## Next
role: dev · /agent-dev
write: specs/so-ts-ferry/implement/so-ts-ferry.md
