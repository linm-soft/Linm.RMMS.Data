# handoff-compact — dev · so-ts-slope-protect

schemaVersion: 1
feature: so-ts-slope-protect
role: dev
status: done
packKind: list
changeScope: new_page
taskId: task_91ce2ce8
typeCode: SLOPE_PROTECT
dump: tbl_slope
prefix: MD-
cluster: linear_protect · t12
formPattern: Full page · CatalogFormShell 5 cols · S-LOC-RANGE
API: api/v1/asset/road-assets
domain: Asset
mfeStdUrl: http://localhost:9301/so-ts?type=SLOPE_PROTECT
aliasUrl: http://localhost:9301/so-ts-slope-protect
peerStdUrl: http://localhost:9301/so-ts?type=SLOPE_PROTECT
buildMfe: PASS
buildBe: PASS
migration: none
e2eQa: ON (queued /agent-qa*)
writtenAt: 2026-09-02T01:55:00.000Z

## Decisions
- route_confirm route_a · live `/so-ts?type=SLOPE_PROTECT` · alias board redirect
- Grid ON: protection_type_id primary · slope_classification_id · actual_protected · average_height · 3 tầng · kmFrom/kmTo · hide type · hide-empty location/địa danh
- Form S-ATTR editable · dumpSpecLabels 5 key · name optional · cấm IsWeak
- LOOKUP init: protectionTypes · slopeClassifications · locationOptions (reuse)
- Prefix MD- create/import · unit KET_CAU
- flatten DEFER P2 · cấm Step 4b/migration

## Files touched
- MFE: AssetListPage · AssetFormPage · dumpSpecLabels · endpoint · lookups · index.tsx
- BE: RoadAssetService · RoadAssetDtos
- Context: so-ts-slope-protect-filter-bar.md · so-ts-slope-protect.md

## Next
| Role | Need |
|------|------|
| QA | T-QA-* e2e queued · mfeStdUrl verify |
| review | findings.md |

## UNCLEAR
- none

## Full paths
- implement: specs/so-ts-slope-protect/implement/so-ts-slope-protect.md
- filter-bar: docs/context/features/so-ts-slope-protect-filter-bar.md
