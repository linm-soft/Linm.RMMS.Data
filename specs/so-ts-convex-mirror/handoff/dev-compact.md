# handoff-compact — dev → qa
schemaVersion: 1
feature: so-ts-convex-mirror
role: dev
status: done
packKind: list
changeScope: new_page
taskId: task_035da760
generatedAt: 2026-09-01T16:15:00.000Z
mfeStdRoute: /so-ts?type=CONVEX_MIRROR
mfeStdUrl: http://localhost:9301/so-ts?type=CONVEX_MIRROR
alias: /so-ts-convex-mirror → /so-ts?type=CONVEX_MIRROR
API: api/v1/asset/road-assets
domain: Asset
typeCode: CONVEX_MIRROR
dump: road_sphere_mirror
formPattern: Full page CatalogFormShell 5col · S-ATTR 9 attr
gates: tz_na · xco_get_only · share_tenant
migration: none
e2eQa: ON (queued /agent-qa* only)
build: MFE yarn build PASS · BE dotnet build PASS
skillVersion: 2026.08.19.04
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1
contentHashPrior: sha256:36242a5e7648360ecaa70554a44a6f2b782712d0d924a0f7121ab77e14ad558f

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-convex-mirror/implement/so-ts-convex-mirror.md
filterBar: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-convex-mirror-filter-bar.md

## Done (T-*)
- T-UI-LIST-01: CONVEX_MIRROR grid · hide type/kmTo · ensure dump cols
- T-UI-FILTER-01: filter-bar V1–V5 · type lock
- T-UI-FORM-01: S-ATTR 9 editable · kmTo ẩn · LOOKUP MST/shape/mat/loc
- T-BE-INIT-01: assetTypeMsts · shapeCutPosts · materialPosts · locationPosts
- T-BE-CRUD-01: ResolveConvexMirrorName · qty←total_number_post
- T-UI-LEAVE-01 / T-UI-HIST-01: shell Modal · useAlert
- GAP-MIRROR-ROUTE-01: alias Navigate

## APIs
- GET/POST/PUT/DELETE api/v1/asset/road-assets
- GET …/init-data (+4 LOOKUP)
- BFF proxy /asset/road-assets

## Debt
- flatten dumpSpecs DEFER
- Auth DEFER
- E2E chỉ QA

## Next
role: qa · /agent-qa
write: specs/so-ts-convex-mirror/qa/scenarios.md
