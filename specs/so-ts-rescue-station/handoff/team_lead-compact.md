# handoff-compact — team_lead → dev
schemaVersion: 1
feature: so-ts-rescue-station
role: team_lead
status: confirmed
packKind: list
changeScope: new_page
taskId: task_1b274dc7
generatedAt: 2026-09-01T09:25:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=RESCUE_STATION
mfeStdUrl: http://localhost:9301/so-ts?type=RESCUE_STATION
alias: /so-ts-rescue-station → /so-ts?type=RESCUE_STATION (optional)
API: api/v1/asset/road-assets
domain: Asset
gates: tz_na · xco_get_only · share_tenant
migration: none
e2eQa: ON (queued /agent-qa* only)
skillVersion: 2026.08.19.04
workflowVersion: 2026.08.30.01
rulesVersion: 2026.08.31.2
typeCode: RESCUE_STATION
dump: tbl_disaster_res_facility
prefix: CN-
clusterUi: station · ô —

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-rescue-station/task/so-ts-rescue-station.md
filterBar: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-rescue-station-filter-bar.md (T-CTX-01 create)
reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-rescue-station/ui/prototype/so-ts-rescue-station-list-prototype.html

## Prior (confirmed)
data_analy: contentHash sha256:5e5eb3da5e2e10fae059fd2082ba0ed1c1f0c1337d89e41940099e39d1320e47
po: specs/so-ts-rescue-station/po/requirement.md
design: specs/so-ts-rescue-station/ui/design.md
sa: specs/so-ts-rescue-station/be/solution-discovery.md · solution_confirm=approve

## Dev focus (T-*)
- T-UI-LIST-01: RESCUE_STATION grid · ON vật tư/DT/cấp · hide type/kmTo/qty · GAP-SOTS-COL-01 · LAYOUT-06
- T-UI-FILTER-01: so-ts-rescue-station-filter-bar.md · V1–V5
- T-UI-FORM-01: S-* reuse · S-ATTR editable · kmTo ẩn · name←name_building «Tên kho bãi» · dumpSpecs · GAP-RS-SPEC-01
- T-BE-INIT-01: officeBuildingGrades[] · auxiliaryWorksGrades[] · storedBuildingGrades[] · vitriOptions[] · GAP-RS-LOOKUP-01
- T-BE-CRUD-01: name_building IsWeak guard · GAP-RS-NAME/SPEC · no flatten
- T-UI-LEAVE-01 / T-UI-HIST-01: LeaveConfirmModal · useAlert · cấm native dialog
- T-QA-*: queued e2e only QA
- GAP-RS-TILE-01: ô KCHT `—` · cấm invent tile · cấm nhầm RESCUE_VEHICLE

## Cấm
ERP.* · invent api/v1/so-ts/* · fork AssetFormPage · Step4b/migration · e2e/build/start:std ở TL · invent tile · GAP-PKT-ROLE-01

## Next
role: dev · /agent-dev
write: specs/so-ts-rescue-station/implement/so-ts-rescue-station.md
