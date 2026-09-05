# handoff-compact — team_lead → dev
schemaVersion: 1
feature: so-ts-bus-stop
role: team_lead
status: confirmed
packKind: list
changeScope: new_page
taskId: task_cd7ef250
generatedAt: 2026-09-01T08:15:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=BUS_STOP
mfeStdUrl: http://localhost:9301/so-ts?type=BUS_STOP
alias: /so-ts-bus-stop → /so-ts?type=BUS_STOP (optional)
API: api/v1/asset/road-assets
domain: Asset
typeCode: BUS_STOP
dump: tbl_bus_stops
prefix: DX-
cluster: stop · tile t13
gates: tz_na · xco_get_only · share_tenant
migration: none
e2eQa: ON (queued /agent-qa* only)
skillVersion: 2026.08.19.04
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-bus-stop/task/so-ts-bus-stop.md
filterBar: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-bus-stop-filter-bar.md
reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-bus-stop/ui/prototype/so-ts-bus-stop-list-prototype.html

## Prior (confirmed)
data_analy: contentHash sha256:c1af893aa22666c6c7941b086d81a47824dda068262aa58824b3657b7f2a4f0f
po: specs/so-ts-bus-stop/po/requirement.md
design: specs/so-ts-bus-stop/ui/design.md · design_confirm=approve
sa: specs/so-ts-bus-stop/be/solution-discovery.md · solution_confirm=approve

## Dev focus (T-*)
- T-UI-LIST-01: BUS_STOP grid · GAP-SOTS-COL-01 · LAYOUT-06 · bool bay/ghế/nhà chờ luôn ON · hide-empty length/width/vitri
- T-UI-FILTER-01: so-ts-bus-stop-filter-bar.md (create) · V1–V5
- T-UI-FORM-01: S-* reuse · S-ATTR editable · kmTo ẩn · name←station_name · dumpSpecs · prefix DX-
- T-BE-INIT-01: busStopWorkTypes[] · ManagementUnits[] · PavementTypes[] · ShelterStructures[] · CrossSections[] · GAP-DD-LOOKUP-01
- T-BE-CRUD-01: station_name IsWeak + DX- · GAP-DD-NAME/SPEC/PREFIX · no flatten
- T-UI-LEAVE-01 / T-UI-HIST-01: LeaveConfirmModal · useAlert · cấm native dialog
- T-QA-*: queued e2e only QA

## Attr §4
station_name · type_work_id · management_id · stop_bay · pavement_type_bus_stop_bay_id · length/width_bus_stop_bay · seated_waiting_bus · bus_shelter · structure_bus_shelter_id · material_road_refuge · length/width_road_refuge · max_slope · vitri · escape_route_structure/length/width

## Cấm
ERP.* · invent api/v1/so-ts/* · fork AssetFormPage · tab legacy · Step4b/migration · e2e/build/start:std ở TL · GAP-PKT-ROLE-01

## Next
role: dev · /agent-dev
write: specs/so-ts-bus-stop/implement/so-ts-bus-stop.md
