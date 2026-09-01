# handoff-compact — dev → qa
schemaVersion: 1
feature: so-ts-spillway
role: dev
status: done
packKind: list
changeScope: new_page
taskId: task_330799f3
generatedAt: 2026-09-01T04:47:46.822Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=SPILLWAY
mfeStdUrl: http://localhost:9301/so-ts?type=SPILLWAY
alias: /so-ts-spillway → /so-ts?type=SPILLWAY
API: api/v1/asset/road-assets
domain: Asset
gates: tz_na · xco_get_only · share_tenant
migration: none
e2eQa: ON (queued /agent-qa* only)
build: MFE yarn build PASS · BE dotnet build PASS

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-spillway/implement/so-ts-spillway.md
filterBar: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-spillway-filter-bar.md

## APIs
- GET/POST/PUT/DELETE api/v1/asset/road-assets
- GET init-data → spillwayTypes[] · structureTypeSpillways[] (+ statuses/sources/units/materials)
- FE BASE /asset/road-assets · BFF proxy only

## Done surfaces
- List SPILLWAY profile · filter-bar type-lock · titles
- Form S-ATTR editable · kmTo ẩn · name_work/name_river · LeaveConfirmModal
- RebuildGovVn name_work · IsWeak allowlist Đường/Cầu tràn
- Create codePrefix TR- when type=SPILLWAY

## Debt
GAP-SPW-FLAT-01 · GAP-SPW-AUTH-01 · rebuild+reimport DB for dump attrs

## Cấm
ERP.* · invent api/v1/so-ts/* · e2e/start:std ở Dev · GAP-PKT-ROLE-01

## Next
role: qa · /agent-qa*
write: specs/so-ts-spillway/qa/scenarios.md
