# handoff-compact — team_lead → dev
schemaVersion: 1
feature: so-ts-weigh-station
role: team_lead
status: confirmed
packKind: list
changeScope: new_page
taskId: task_75b037a8
generatedAt: 2026-09-01T06:35:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=WEIGH_STATION
mfeStdUrl: http://localhost:9301/so-ts?type=WEIGH_STATION
alias: /so-ts-weigh-station → /so-ts?type=WEIGH_STATION (optional)
API: api/v1/asset/road-assets
domain: Asset
typeCode: WEIGH_STATION
dump: weight_station
prefix: TFP- (keep · shared TOLL)
cluster: station · tile t27
gates: tz_na · xco_get_only · share_tenant
migration: none
e2eQa: ON (queued /agent-qa* only)
skillVersion: 2026.08.19.04
workflowVersion: 2026.08.30.01
rulesVersion: 2026.08.31.2

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-weigh-station/task/so-ts-weigh-station.md
filterBar: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-weigh-station-filter-bar.md
reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-weigh-station/ui/prototype/so-ts-weigh-station-list-prototype.html

## Prior (confirmed)
data_analy: contentHash sha256:ce3b6142d8e9debae05124121bcf3856a8c4a06d186a2728a6d59eb55d58233a
po: specs/so-ts-weigh-station/po/requirement.md
design: specs/so-ts-weigh-station/ui/design.md · design_confirm=approve
sa: specs/so-ts-weigh-station/be/solution-discovery.md · solution_confirm=approve

## Dev focus (T-*)
- T-UI-LIST-01: WEIGH grid profile · GAP-SOTS-COL-01 · LAYOUT-06 · hide-empty TB cân/tải/ĐVQL/DT nhà · length_approaching OFF
- T-UI-FILTER-01: so-ts-weigh-station-filter-bar.md · V1–V5
- T-UI-FORM-01: S-* reuse · S-ATTR editable · approaching_road gộp · kmTo ẩn · name←station_name · dumpSpecs merge · prefix TFP-
- T-BE-INIT-01: weighManagementUnits[] · weighEquipmentTypes[] · weighPavementTypes[] · weighBoolOptions[] · GAP-WEIGH-LOOKUP-01
- T-BE-CRUD-01: station_name IsWeak guard · GAP-WEIGH-NAME/SPEC · no flatten
- T-UI-LEAVE-01 / T-UI-HIST-01: LeaveConfirmModal · useAlert · cấm native dialog
- T-QA-*: queued e2e only QA

## Cấm
ERP.* · invent api/v1/so-ts/* · fork AssetFormPage · tab legacy · Step4b/migration · e2e/build/start:std ở TL · GAP-PKT-ROLE-01

## Next
role: dev · /agent-dev
write: specs/so-ts-weigh-station/implement/so-ts-weigh-station.md
