# handoff-compact — dev → qa
schemaVersion: 1
feature: so-ts-noise-barrier
role: dev
status: done
packKind: list
changeScope: new_page
taskId: task_b276d797
generatedAt: 2026-09-01T10:30:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=NOISE_BARRIER
mfeStdUrl: http://localhost:9301/so-ts?type=NOISE_BARRIER
alias: /so-ts-noise-barrier → /so-ts?type=NOISE_BARRIER
API: api/v1/asset/road-assets
domain: Asset
typeCode: NOISE_BARRIER
dump: tbl_noise_barrier
prefix: TC-
cluster: linear_protect · t25
formPattern: Full page · CatalogFormShell 5 cols · S-LOC-RANGE
gates: tz_na · xco_get_only · share_tenant
migration: none
e2eQa: ON (queued /agent-qa* only)
skillVersion: 2026.08.19.04
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1
contentHashPrior: sha256:5167bd802b25b82d0d99f0194c1bb059f8f5862747e2035a61e451fd8ae0b7e3
buildMfe: PASS
buildBe: PASS

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-noise-barrier/implement/so-ts-noise-barrier.md
filterBar: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-noise-barrier-filter-bar.md

## APIs
- GET/POST/PUT/DELETE api/v1/asset/road-assets · type=NOISE_BARRIER
- GET init-data → noiseBarrierTypes[] · noiseBarrierVitriOptions[]
- BFF proxy only · catalogKind road-assets

## Shipped
- BE: TC- · name optional · type_noise_barrier_id required · LOOKUP seed
- FE list: profile ENSURE loại tường/cao/dài/tỉnh · kmTo ON · hide-empty vitri/xã
- FE form: S-ATTR · S-LOC-RANGE · 4 XY dumpSpecs · LeaveConfirmModal
- alias Navigate · DOMAIN-MAP Asset

## Debt
- flatten Schema_* DEFER P2 · Auth DEFER · E2E QA only

## Cấm
ERP.* · invent api/v1/so-ts/* · fork AssetFormPage · Step4b/migration · e2e ở Dev

## Next
role: qa · /agent-qa
write: specs/so-ts-noise-barrier/qa/scenarios.md
