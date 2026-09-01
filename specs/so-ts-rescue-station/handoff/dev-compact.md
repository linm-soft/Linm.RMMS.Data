# handoff-compact — dev → qa
schemaVersion: 1
feature: so-ts-rescue-station
role: dev
status: done
packKind: list
changeScope: new_page
taskId: task_2f84d6b5
generatedAt: 2026-09-01T09:45:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=RESCUE_STATION
mfeStdUrl: http://localhost:9301/so-ts?type=RESCUE_STATION
alias: /so-ts-rescue-station → /so-ts?type=RESCUE_STATION
API: api/v1/asset/road-assets
domain: Asset
gates: tz_na · xco_get_only · share_tenant
migration: none
typeCode: RESCUE_STATION
prefix: CN-
build: typecheck PASS · webpack prod PASS (--parallelism=1) · dotnet PASS
e2eQa: ON (queued /agent-qa* only — not run)
skillVersion: 2026.08.19.04
workflowVersion: 2026.08.30.01
rulesVersion: 2026.08.31.2

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-rescue-station/implement/so-ts-rescue-station.md
filterBar: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-rescue-station-filter-bar.md
reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-rescue-station/ui/prototype/so-ts-rescue-station-list-prototype.html

## Shipped (T-*)
- T-UI-LIST-01: RESCUE_STATION grid ON mẫu · hide type/kmTo/qty
- T-UI-FILTER-01 + T-CTX-01: filter-bar.md
- T-UI-FORM-01: S-ATTR dump §4 · name←name_building «Tên kho bãi» · ẩn kmTo
- T-BE-INIT-01: storedBuildingGrades · vitriOptions (+ office/aux)
- T-BE-CRUD-01: CN- · name/kmFrom optional · no IsWeak
- T-UI-LEAVE-01 / T-UI-HIST-01: LeaveConfirmModal · useAlert reuse
- GAP-RS-TILE-01: no invent tile

## APIs
GET/POST/PUT/DELETE api/v1/asset/road-assets · init-data · summary-by-type · BFF proxy only

## Debt
- yarn build default parallel OOM Node24 → --parallelism=1
- Auth DEFER · flatten P2 · E2E QA only

## Next
role: qa · /agent-qa*
write: specs/so-ts-rescue-station/qa/scenarios.md
