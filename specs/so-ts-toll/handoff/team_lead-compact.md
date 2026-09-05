# handoff-compact — team_lead → dev
schemaVersion: 1
feature: so-ts-toll
role: team_lead
status: confirmed
packKind: list
changeScope: new_page
taskId: task_b2815697
generatedAt: 2026-09-01T05:15:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=TOLL
mfeStdUrl: http://localhost:9301/so-ts?type=TOLL
alias: /so-ts-toll → /so-ts?type=TOLL (optional)
API: api/v1/asset/road-assets
domain: Asset
gates: tz_na · xco_get_only · share_tenant
migration: none
e2eQa: ON (queued /agent-qa* only)
skillVersion: 2026.08.19.04
workflowVersion: 2026.08.30.01
rulesVersion: 2026.08.31.2

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-toll/task/so-ts-toll.md
filterBar: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-toll-filter-bar.md
reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-toll/ui/prototype/so-ts-toll-list-prototype.html

## Prior (confirmed)
data_analy: contentHash sha256:6e5c4611241727abb70516f3ba7828dd429ef7d5513ae99e83ba43c6da43347c
po: specs/so-ts-toll/po/requirement.md
design: specs/so-ts-toll/ui/design.md
sa: specs/so-ts-toll/be/solution-discovery.md · solution_confirm=approve

## Dev focus (T-*)
- T-UI-LIST-01: TOLL grid profile · GAP-SOTS-COL-01 · LAYOUT-06 · hide-empty weighting/lane/cấp/DT cổng · auxiliary_works_grade_id OFF
- T-UI-FILTER-01: so-ts-toll-filter-bar.md · V1–V5
- T-UI-FORM-01: S-* reuse · S-ATTR editable · S-ATTR-WIDTH width_* · kmTo ẩn · name←station_name · dumpSpecs merge · prefix TFP-
- T-BE-INIT-01: tollWeightingMethods[] · tollRoofStructures[] · tollPavementTypes[] · tollHouseGrades[] · tollRoadStructures[] · tollOperationLocations[] · auxiliaryWorksGrades[] · GAP-TOLL-LOOKUP-01
- T-BE-CRUD-01: station_name IsWeak guard · GAP-TOLL-NAME/SPEC · no flatten
- T-UI-LEAVE-01 / T-UI-HIST-01: LeaveConfirmModal · useAlert · cấm native dialog
- T-QA-*: queued e2e only QA

## Cấm
ERP.* · invent api/v1/so-ts/* · fork AssetFormPage · tab legacy · Step4b/migration · e2e/build/start:std ở TL · GAP-PKT-ROLE-01

## Next
role: dev · /agent-dev
write: specs/so-ts-toll/implement/so-ts-toll.md
