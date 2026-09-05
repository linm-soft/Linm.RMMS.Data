# handoff-compact — team_lead → dev
schemaVersion: 1
feature: so-ts-parking
role: team_lead
status: confirmed
packKind: list
changeScope: new_page
taskId: task_6c86ab37
generatedAt: 2026-09-01T04:55:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=PARKING
mfeStdUrl: http://localhost:9301/so-ts?type=PARKING
alias: /so-ts-parking → /so-ts?type=PARKING (optional)
API: api/v1/asset/road-assets
domain: Asset
gates: tz_na · xco_get_only · share_tenant
migration: none
e2eQa: ON (queued /agent-qa* only)
skillVersion: 2026.08.19.04
workflowVersion: 2026.08.30.01
rulesVersion: 2026.08.31.2

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-parking/task/so-ts-parking.md
filterBar: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-parking-filter-bar.md
reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-parking/ui/prototype/so-ts-parking-list-prototype.html

## Prior (confirmed)
data_analy: contentHash sha256:da3d142d8478870e4474f88b0ba02aeac7d84ef2766ea90fc65e7102c079d1ba
po: specs/so-ts-parking/po/requirement.md
design: specs/so-ts-parking/ui/design.md
sa: specs/so-ts-parking/be/solution-discovery.md · solution_confirm=approve

## Dev focus (T-*)
- T-UI-LIST-01: PARKING grid profile · GAP-SOTS-COL-01 · LAYOUT-06 · hide-empty chiều dài/DT/bãi đỗ/cứu hộ/cấp cứu · GAP-PK-SPLIT-01 · GAP-PK-PARK-01
- T-UI-FILTER-01: so-ts-parking-filter-bar.md · V1–V5
- T-UI-FORM-01: S-* reuse · S-ATTR editable · kmTo ẩn · name←name_work · dumpSpecs merge · prefix BD- · parking_lot/total_parking_lot ON
- T-BE-INIT-01: parkingWorkTypes[] · parkingCategories[] · parkingOwners[] · officeBuildingGrades[] · auxiliaryWorksGrades[] · buildLocations[] · GAP-PK-LOOKUP-01
- T-BE-CRUD-01: name_work IsWeak guard · GAP-PK-NAME/SPEC/SPLIT · no flatten
- T-UI-LEAVE-01 / T-UI-HIST-01: LeaveConfirmModal · useAlert · cấm native dialog
- T-QA-*: queued e2e only QA

## Cấm
ERP.* · invent api/v1/so-ts/* · fork AssetFormPage · Step4b/migration · e2e/build/start:std ở TL · lẫn REST_AREA · GAP-PKT-ROLE-01

## Next
role: dev · /agent-dev
write: specs/so-ts-parking/implement/so-ts-parking.md
