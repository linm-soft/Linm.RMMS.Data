# handoff-compact — team_lead → dev
schemaVersion: 1
feature: so-ts-bus-station
role: team_lead
status: confirmed
packKind: list
changeScope: new_page
taskId: task_2182f77f
generatedAt: 2026-09-01T03:50:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=BUS_STATION
mfeStdUrl: http://localhost:9301/so-ts?type=BUS_STATION
alias: /so-ts-bus-station → /so-ts?type=BUS_STATION (optional)
API: api/v1/asset/road-assets
domain: Asset
gates: tz_na · xco_get_only · share_tenant
migration: none
e2eQa: ON (queued /agent-qa* only)
skillVersion: 2026.08.19.04
workflowVersion: 2026.08.30.01
rulesVersion: 2026.08.31.2

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-bus-station/task/so-ts-bus-station.md
filterBar: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-bus-station-filter-bar.md
reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-bus-station/ui/prototype/so-ts-bus-station-list-prototype.html

## Prior (confirmed)
data_analy: contentHash sha256:e163077d4f1e16605d699be6e6c518273e794d50ffa7c0ce79379e92c70d98dd
po: specs/so-ts-bus-station/po/requirement.md
design: specs/so-ts-bus-station/ui/design.md
sa: specs/so-ts-bus-station/be/solution-discovery.md · solution_confirm=approve

## Dev focus (T-*)
- T-UI-LIST-01: BUS_STATION grid profile · GAP-SOTS-COL-01 · LAYOUT-06 · hide-empty DT/tuyến VT/DT sàn/cấp
- T-UI-FILTER-01: so-ts-bus-station-filter-bar.md · V1–V5
- T-UI-FORM-01: S-* reuse · S-ATTR editable · kmTo ẩn · name←name_terminal · dumpSpecs merge · prefix BX-
- T-BE-INIT-01: busStationWorkTypes[] · busStationOwners[] · busStationBuildingGrades[] · busStationBuildLocations[] · busStationClassifications[] · GAP-BX-LOOKUP-01
- T-BE-CRUD-01: name_terminal IsWeak guard · GAP-BX-NAME/SPEC · no flatten
- T-UI-LEAVE-01 / T-UI-HIST-01: LeaveConfirmModal · useAlert · cấm native dialog
- T-QA-*: queued e2e only QA

## Cấm
ERP.* · invent api/v1/so-ts/* · fork AssetFormPage · Step4b/migration · e2e/build/start:std ở TL · GAP-PKT-ROLE-01

## Next
role: dev · /agent-dev
write: specs/so-ts-bus-station/implement/so-ts-bus-station.md
