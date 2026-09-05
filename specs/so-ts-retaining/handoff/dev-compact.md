# handoff-compact — dev → qa
schemaVersion: 1
feature: so-ts-retaining
role: dev
status: done
packKind: list
changeScope: new_page
taskId: task_16d90833
generatedAt: 2026-09-02T01:20:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=RETAINING
mfeStdUrl: http://localhost:9301/so-ts?type=RETAINING
alias: /so-ts-retaining → /so-ts?type=RETAINING
API: api/v1/asset/road-assets
domain: Asset
typeCode: RETAINING
dump: tbl_retaining_wall
prefix: KE- (GIS KE)
cluster: linear_protect · t20
unit: KET_CAU
formPattern: Full page · CatalogFormShell 5 cols · S-LOC-RANGE
migration: none
e2eQa: ON (queued /agent-qa* only)
buildMfe: PASS
buildBe: PASS
skillVersion: 2026.08.19.04
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1
contentHashPrior: sha256:81662f66f48ea982b12b06d93e0716f7449b1356d169541e62a40b377178c061

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-retaining/implement/so-ts-retaining.md
filterBar: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-retaining-filter-bar.md
reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-retaining/ui/prototype/so-ts-retaining-list-prototype.html

## Shipped
- BE: KE- · Validate retaining_wall_type_id · init LOOKUP 5 arrays · ResolveRetainingName
- FE list: RETAINING profile · ENSURE 6 cols · kmTo ON · hide-empty vị trí/asset_type/địa danh
- FE form: S-ATTR editable · S-LOC-RANGE + 4 XY · name optional · LeaveConfirm reuse
- labels 8 key · alias route · DOMAIN-MAP · filter-bar.md
- peer RETAINING only · cấm SLOPE_PROTECT gộp

## APIs
- GET/POST/PUT/DELETE api/v1/asset/road-assets · ?type=RETAINING
- GET …/init-data → retainingWallTypes · materialTypes · foundationTypes · locationOptions · dumpAssetTypes
- BFF proxy only

## Debt
- Auth DEFER · flatten Schema_* DEFER · E2E chỉ QA · migration none

## Cấm
ERP.* · invent so-ts API · fork AssetFormPage · e2e/start:std ở Dev · GAP-PKT-ROLE-01

## Next
role: qa · /agent-qa*
write: specs/so-ts-retaining/qa/scenarios.md
