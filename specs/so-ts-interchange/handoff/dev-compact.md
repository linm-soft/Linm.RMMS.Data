# handoff-compact — dev → qa
schemaVersion: 1
feature: so-ts-interchange
role: dev
status: done
packKind: list
changeScope: new_page
taskId: task_ac84f4d2
generatedAt: 2026-09-01T06:55:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=INTERCHANGE
mfeStdUrl: http://localhost:9301/so-ts?type=INTERCHANGE
alias: /so-ts-interchange → /so-ts?type=INTERCHANGE
API: api/v1/asset/road-assets
domain: Asset
gates: tz_na · xco_get_only · share_tenant
migration: none
e2eQa: ON (queued /agent-qa* only)
build: MFE yarn build PASS · BE dotnet build PASS
skillVersion: 2026.08.19.04
workflowVersion: 2026.08.30.01
rulesVersion: 2026.08.31.2

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-interchange/implement/so-ts-interchange.md
filterBar: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-interchange-filter-bar.md

## APIs
- GET/POST/PUT/DELETE api/v1/asset/road-assets
- GET init-data → intersectionTypes[] · intersectWiths[] · intersectionShapes[] (+ statuses/sources/units/materials/spillway*)
- FE BASE /asset/road-assets · BFF proxy only
- Create prefix NG- when type=INTERCHANGE · name/kmFrom optional · intersection_type_id required

## Done surfaces
- List INTERCHANGE profile · filter-bar type-lock · titles · alias redirect
- Form S-ATTR editable · kmTo ẩn · name←name_intersection · LeaveConfirmModal
- RebuildGovVn name_intersection · IsWeak Nút giao allowlist
- dumpSpecLabels §4 keys

## Debt
GAP-IX-FLAT-01 · GAP-IX-AUTH-01 · rebuild+reimport DB

## Cấm
ERP.* · invent api/v1/so-ts/* · e2e/start:std ở Dev · GAP-PKT-ROLE-01

## Next
role: qa · /agent-qa*
write: specs/so-ts-interchange/qa/scenarios.md
