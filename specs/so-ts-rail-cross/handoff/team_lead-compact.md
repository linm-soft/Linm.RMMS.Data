# handoff-compact — team_lead → dev
schemaVersion: 1
feature: so-ts-rail-cross
role: team_lead
status: confirmed
packKind: list
changeScope: new_page
taskId: task_e7db123f
generatedAt: 2026-09-02T07:36:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=RAIL_CROSS
mfeStdUrl: http://localhost:9301/so-ts?type=RAIL_CROSS
alias: /so-ts-rail-cross → /so-ts?type=RAIL_CROSS (optional)
API: api/v1/asset/road-assets
domain: Asset
typeCode: RAIL_CROSS
dump: tbl_railway_crossing
prefix: DS-
cluster: crossing · tile t15
gates: tz_na · xco_get_only · share_tenant
migration: none
e2eQa: ON (queued /agent-qa* only)
skillVersion: 2026.08.19.04
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-rail-cross/task/so-ts-rail-cross.md
filterBar: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-rail-cross-filter-bar.md
reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-rail-cross/ui/prototype/so-ts-rail-cross-list-prototype.html

## Prior (confirmed)
data_analy: contentHash sha256:da352cefd55373525e18a8b132228f5a6f7c46713d7b6a742fecf5416e410d5c
po: specs/so-ts-rail-cross/po/requirement.md
design: specs/so-ts-rail-cross/ui/design.md · design_confirm=approve
sa: specs/so-ts-rail-cross/be/solution-discovery.md · solution_confirm=approve

## Dev focus (T-*)
- T-UI-LIST-01: RAIL_CROSS grid · GAP-SOTS-COL-01 · LAYOUT-06 · hide type/kmTo/qty/unit
- T-UI-FILTER-01: so-ts-rail-cross-filter-bar.md (create) · V1–V5
- T-UI-FORM-01: S-* reuse · S-ATTR editable · kmTo ẩn · name←name_crossing · dumpSpecs · prefix DS-
- T-BE-INIT-01: railCrossProtectionTypes[] · railCrossTrafficControlMethods[] · GAP-RC-LOOKUP-01
- T-BE-CRUD-01: name_crossing IsWeak + DS- · GAP-RC-NAME/SPEC/PREFIX · no flatten
- T-UI-LEAVE-01 / T-UI-HIST-01: LeaveConfirmModal · useAlert · cấm native dialog
- T-QA-*: queued e2e only QA

## Attr §4
name_crossing · protection_type_id · traffic_control_method_id · shortest_waiting_time (phút)

## Cấm
ERP.* · invent api/v1/so-ts/* · fork AssetFormPage · tab legacy · Step4b/migration · e2e/build/start:std ở TL · GAP-PKT-ROLE-01

## Next
role: dev · /agent-dev
write: specs/so-ts-rail-cross/implement/so-ts-rail-cross.md
