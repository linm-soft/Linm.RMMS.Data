# handoff-compact — team_lead → dev

schemaVersion: 1
feature: so-ts-lighting
role: team_lead
status: confirmed
packKind: list
changeScope: new_page
taskId: task_6f81bafb
generatedAt: 2026-09-02T08:30:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=LIGHTING
mfeStdUrl: http://localhost:9301/so-ts?type=LIGHTING
alias: /so-ts-lighting → /so-ts?type=LIGHTING (optional board)
API: api/v1/asset/road-assets
domain: Asset
typeCode: LIGHTING
dump: tbl_street_lighting
prefix: CS-
cluster: ops · tile t18
gates: tz_na · xco_get_only · share_tenant
migration: none
e2eQa: ON (queued /agent-qa* only)
skillVersion: 2026.08.25.01
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-lighting/task/so-ts-lighting.md
filterBar: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-lighting-filter-bar.md
reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-lighting/ui/prototype/so-ts-lighting-list-prototype.html

## Prior (confirmed)
data_analy: contentHash sha256:d5601a5c6b83c29e68bbac0fe8ef8a880616a4fc5b053a6480fb82501e90a2aa
po: specs/so-ts-lighting/po/requirement.md · design_confirm=approve
design: specs/so-ts-lighting/ui/design.md · design_confirm=approve
sa: specs/so-ts-lighting/be/solution-discovery.md · solution_confirm=approve

## Dev focus (T-*)
- T-UI-LIST-01: LIGHTING grid · GAP-SOTS-COL-01 · LAYOUT-06 · ĐV QL · 3 tầng · kmFrom · số cột/đèn · MBA · tủ · vitri · hide-empty · cấm Solar*/LampWatt
- T-UI-FILTER-01: so-ts-lighting-filter-bar.md (create) · V1–V5 · cấm nút Tìm riêng
- T-UI-FORM-01: S-* reuse · S-ATTR editable · S-LOC-POINT kmFrom only · ẩn kmTo · name optional · dumpSpecs · prefix CS- · cấm Solar*/LampWatt
- T-BE-INIT-01: lightingManagementUnits[] · bulbTypes[] · transformingStationTypes[] · controlMethods[] · vitriOptions · GAP-LT-LOOKUP-01
- T-BE-CRUD-01: name optional cấm IsWeak · CS- prefix · GAP-LT-NAME/PREFIX · no flatten
- T-UI-LEAVE-01 / T-UI-HIST-01: LeaveConfirmModal · useAlert · cấm native dialog
- T-CTX-01: context + filter-bar.md · optional alias /so-ts-lighting
- T-QA-*: queued e2e only QA

## Attr dump
management_id · number_pole_light_bulb · number_light · bulb_type_id · type_transforming_station_id · capacity_transformer · number_control_box · control_method_id · vitri

## Cấm
ERP.* · invent api/v1/so-ts/* · fork AssetFormPage · tab legacy · Solar*/LampWatt · Step4b/migration · e2e/build/start:std ở TL · GAP-PKT-ROLE-01

## Next
role: dev · /agent-dev
write: specs/so-ts-lighting/implement/so-ts-lighting.md
