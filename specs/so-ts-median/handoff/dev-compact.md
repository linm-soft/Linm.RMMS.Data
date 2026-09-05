# handoff-compact — dev → qa
schemaVersion: 1
feature: so-ts-median
role: dev
status: done
packKind: list
changeScope: new_page
taskId: task_8711a649
generatedAt: 2026-09-01T17:45:00.000Z
typeCode: MEDIAN
mfeStdRoute: /so-ts?type=MEDIAN
mfeStdUrl: http://localhost:9301/so-ts?type=MEDIAN
alias: /so-ts-median → /so-ts?type=MEDIAN
API: api/v1/asset/road-assets
prefix: PC-
domain: Asset
dump: tbl_median_strip
formPattern: Full page · CatalogFormShell 5 cols · S-LOC-RANGE
gates: tz_na · xco_get_only · share_tenant
migration: none
buildMfe: PASS
buildBe: PASS
e2eQa: ON (queued /agent-qa* only)
contentHashPrior: sha256:19145538a01ec132f8d5ebead0c9111d621746cb789c26bf1f6819c5c932c5e5
skillVersion: 2026.08.19.04
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-median/implement/so-ts-median.md
filterBar: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-median-filter-bar.md
reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-median/ui/prototype/so-ts-median-list-prototype.html

## Decisions delivered
- Kind B · dumpSpecs P1 · flatten DEFER · cấm Schema_* / Step 4b
- name optional · list primary=type_median_strip_id · ResolveMedianName
- LOOKUP init: medianStripTypes · fenceMaterials · medianLocations
- planting_grass/tree=Select bool · prefix PC-
- Range S-LOC-RANGE km* + 4 XY · cấm ép "0"
- dumpSpecLabels đủ 10 key MEDIAN
- LeaveConfirmModal · useAlert reuse
- BFF proxy only

## APIs
- GET/POST/PUT/DELETE …/asset/road-assets · type=MEDIAN
- GET …/init-data (+ medianStripTypes/fenceMaterials/medianLocations)
- soft DELETE · summary-by-type t11 peer

## Debt
- Auth DEFER · flatten P2 · E2E QA queued

## Next
role: qa · /agent-qa*
write: specs/so-ts-median/qa/scenarios.md
