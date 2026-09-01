# handoff-compact — dev → qa
schemaVersion: 1
feature: so-ts-ferry
role: dev
status: done
packKind: list
changeScope: new_page
taskId: task_0fc14e44
generatedAt: 2026-09-01T00:45:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=FERRY
mfeStdUrl: http://localhost:9301/so-ts?type=FERRY
alias: /so-ts-ferry → /so-ts?type=FERRY
API: api/v1/asset/road-assets
domain: Asset
gates: tz_na · xco_get_only · share_tenant
migration: none
e2eQa: ON (queued /agent-qa* only)
build: yarn build PASS · dotnet build PASS
skillVersion: 2026.08.19.04
workflowVersion: 2026.08.30.01
rulesVersion: 2026.08.31.2

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-ferry/implement/so-ts-ferry.md
filterBar: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-ferry-filter-bar.md
reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-ferry/ui/prototype/so-ts-ferry-list-prototype.html

## Prior (confirmed)
data_analy · po · design · sa · team_lead — all confirmed · contentHash sha256:0737298d3ce0a14ae36a4c9dfb37563e315723a476c59d953737019260a5a2f4

## Done (T-*)
- T-UI-LIST-01: FERRY grid profile · GAP-SOTS-COL-01
- T-UI-FILTER-01: type lock · title Bến phà · V1–V5 ready
- T-UI-FORM-01: S-ATTR editable · name←name_ferry_terminal · kmTo ẩn · loaibenpha*
- T-BE-INIT-01: ferryTypes[] · ferryWorkLevels[] · riverChannelNames[]
- T-BE-CRUD-01: Validate FERRY · PH- · RebuildGovVn GAP-FY-NAME-01
- T-UI-LEAVE-01 / T-UI-HIST-01: LeaveConfirmModal · useAlert

## APIs
list/detail/create/update/delete · init-data (+ferry*) · summary-by-type · Integration LKP · ui-schema road-assets

## Debt
Auth DEFER · flatten P2 · e2e = QA only

## Next
role: qa · /agent-qa*
write: specs/so-ts-ferry/qa/scenarios.md
