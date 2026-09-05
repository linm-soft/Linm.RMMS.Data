# handoff-compact — dev → qa
schemaVersion: 1
feature: so-ts-land-row
role: dev
status: done
packKind: list
changeScope: new_page
taskId: task_b507cea8
generatedAt: 2026-09-01T09:30:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=LAND_ROW
mfeStdUrl: http://localhost:9301/so-ts?type=LAND_ROW
alias: /so-ts-land-row → /so-ts?type=LAND_ROW
API: api/v1/asset/road-assets
domain: Asset
typeCode: LAND_ROW
dump: tbl_land_btra
prefix: DT- (GIS HT giữ)
cluster: land · t33
formPattern: Full page · CatalogFormShell 5 cols · S-LOC-RANGE
gates: tz_na · xco_get_only · share_tenant
migration: none
e2eQa: ON (queued /agent-qa* only)
buildMfe: PASS
buildBe: PASS
skillVersion: 2026.08.19.04
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1
contentHashPrior: sha256:bc698a4aaec65f07d252d2ba4a3997574faa3c51c53e84e26990734b423a7849

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-land-row/implement/so-ts-land-row.md
filterBar: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-land-row-filter-bar.md

## Shipped
- T-UI-LIST-01: LAND_ROW profile · ENSURE TT thửa/CQ/L/W/DT/xã/tỉnh · hide type/kmTo/qty
- T-UI-FILTER-01: filter-bar.md · V1–V5 · cấm nút Tìm riêng
- T-UI-FORM-01: S-ATTR editable · S-LOC-RANGE kmTo ẩn fill 0 · dumpSpecLabels · DT-
- T-BE-INIT-01: landLotStatuses · landExploitTypes · landAccessPavementTypes · landCrossSections · landBoolOptions
- T-BE-CRUD-01: construction IsWeak guard · DT- · dumpSpecs P1 · status_land_lot_id required
- T-UI-LEAVE-01 / T-UI-HIST-01: LeaveConfirmModal · useAlert reuse

## APIs
- GET/POST/PUT/DELETE api/v1/asset/road-assets · init-data land* LOOKUP · BFF proxy

## Debt
- Auth DEFER · flatten Schema_* P2 · E2E queued QA only · Step4b none

## Next
role: qa · /agent-qa
