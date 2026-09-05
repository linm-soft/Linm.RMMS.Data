# handoff-compact — team_lead → dev
schemaVersion: 1
feature: so-ts-count-station
role: team_lead
status: confirmed
packKind: list
changeScope: new_page
taskId: task_11f55e31
generatedAt: 2026-09-01T07:20:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=COUNT_STATION
mfeStdUrl: http://localhost:9301/so-ts?type=COUNT_STATION
alias: /so-ts-count-station → /so-ts?type=COUNT_STATION (optional)
API: api/v1/asset/road-assets
domain: Asset
typeCode: COUNT_STATION
dump: mst_counting_station
prefix: THC- (keep · rebuild TX debt)
cluster: station · tile t30 · icon CAM
countCite: 377
gates: tz_na · xco_get_only · share_tenant
migration: none
e2eQa: ON (queued /agent-qa* only)
skillVersion: 2026.08.19.04
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-count-station/task/so-ts-count-station.md
filterBar: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-count-station-filter-bar.md
reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-count-station/ui/prototype/so-ts-count-station-list-prototype.html

## Prior (confirmed)
data_analy: contentHash sha256:dbbe8d52c360d78919c4a7bb313973ee20cd193b6b5c1cee4a0da0e7559be87a
po: specs/so-ts-count-station/po/requirement.md
design: specs/so-ts-count-station/ui/design.md · design_confirm=approve
sa: specs/so-ts-count-station/be/solution-discovery.md · solution_confirm=approve

## Dev focus (T-*)
- T-UI-LIST-01: COUNT grid profile · GAP-SOTS-COL-01 · LAYOUT-06 · hide-empty ĐVQL/tên EN/số làn/tốc độ · 3 tầng tuyến
- T-UI-FILTER-01: so-ts-count-station-filter-bar.md · V1–V5
- T-UI-FORM-01: S-* reuse · S-ATTR editable · name←name_vi · kmTo ẩn · coord→lat/lng · dumpSpecs merge · prefix THC-
- T-BE-INIT-01: countAgencies[] · GAP-COUNT-LOOKUP-01
- T-BE-CRUD-01: name_vi IsWeak + THC vs TX · GAP-COUNT-NAME/SPEC/GIS · no flatten
- T-UI-LEAVE-01 / T-UI-HIST-01: LeaveConfirmModal · useAlert · cấm native dialog
- T-UI-LKP-01: lookups COUNT_STATION «Trạm đếm» · GAP-COUNT-LABEL-01
- T-QA-*: queued e2e only QA

## Attr §4
agency_id · name_vi · name_en · from_coordinate · to_coordinate · no_of_lane · speed

## Cấm
ERP.* · invent api/v1/so-ts/* · fork AssetFormPage · tab legacy · invent GIS slug · Step4b/migration · e2e/build/start:std ở TL · GAP-PKT-ROLE-01

## Next
role: dev · /agent-dev
write: specs/so-ts-count-station/implement/so-ts-count-station.md
