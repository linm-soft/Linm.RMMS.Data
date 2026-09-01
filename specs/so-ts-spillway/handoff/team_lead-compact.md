# handoff-compact — team_lead → dev
schemaVersion: 1
feature: so-ts-spillway
role: team_lead
status: confirmed
packKind: list
changeScope: new_page
taskId: task_d7836041
generatedAt: 2026-09-01T04:35:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=SPILLWAY
mfeStdUrl: http://localhost:9301/so-ts?type=SPILLWAY
alias: /so-ts-spillway → /so-ts?type=SPILLWAY (optional)
API: api/v1/asset/road-assets
domain: Asset
gates: tz_na · xco_get_only · share_tenant
migration: none
e2eQa: ON (queued /agent-qa* only)

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-spillway/task/so-ts-spillway.md
filterBar: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-spillway-filter-bar.md
reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-spillway/ui/prototype/so-ts-spillway-list-prototype.html

## Prior (confirmed)
data_analy: contentHash sha256:508eb2426b263e800949a533e300220f75a65b128771f77baf52d3e0d567517f
po: specs/so-ts-spillway/po/requirement.md
design: specs/so-ts-spillway/ui/design.md
sa: specs/so-ts-spillway/be/solution-discovery.md · solution_confirm=approve

## Dev focus (T-*)
- T-UI-LIST-01: SPILLWAY grid profile · GAP-SOTS-COL-01 · LAYOUT-06
- T-UI-FILTER-01: so-ts-spillway-filter-bar.md · V1–V5
- T-UI-FORM-01: S-* reuse · S-ATTR editable · kmTo ẩn · name_work + name_river · dumpSpecs merge
- T-BE-INIT-01: spillwayTypes[] + structureTypeSpillways[] · GAP-SPW-LOOKUP-01
- T-BE-CRUD-01: name_work IsWeak guard · GAP-SPW-NAME/SPEC · no flatten
- T-UI-LEAVE-01 / T-UI-HIST-01: LeaveConfirmModal · useAlert · cấm native dialog
- T-QA-*: queued e2e only QA

## Cấm
ERP.* · invent api/v1/so-ts/* · fork AssetFormPage · Step4b/migration · e2e/build/start:std ở TL · GAP-PKT-ROLE-01

## Next
role: dev · /agent-dev
write: specs/so-ts-spillway/implement/so-ts-spillway.md
