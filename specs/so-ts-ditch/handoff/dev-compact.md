# handoff-compact — dev → qa
schemaVersion: 1
feature: so-ts-ditch
role: dev
status: done
packKind: list
changeScope: new_page
taskId: task_25267e6c
generatedAt: 2026-09-01T11:10:00.000Z
mfeStdRoute: /so-ts?type=DITCH
mfeStdUrl: http://localhost:9301/so-ts?type=DITCH
alias: /so-ts-ditch → /so-ts?type=DITCH
API: api/v1/asset/road-assets
domain: Asset
typeCode: DITCH
prefix: CD-
unit: THOAT_NUOC
formPattern: Full page · CatalogFormShell 5 cols · S-LOC-RANGE
migration: none
e2eQa: ON (queued /agent-qa* only)
contentHashPrior: sha256:8f37e4455aded2ca3a045f47a50916be0563e859af9b18bdcc59000ce4305854
skillVersion: 2026.08.19.04
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-ditch/implement/so-ts-ditch.md
filterBar: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-ditch-filter-bar.md

## Decisions
- Kind B · dumpSpecs P1 · flatten DEFER · cấm Schema_* / Step 4b
- name optional · list primary=ditch_type_id · cấm IsWeak
- LOOKUP init: ditchTypes · culvertShapes · ditchStructuralTypes · ditchWorkTypes · ditchMaterialsWork · ditchLocations
- Range: S-LOC-RANGE km* + 4 XY dumpSpecs · cấm ép "0"
- prefix CD- · page DITCH only · CULVERT_L DEFER
- LeaveConfirmModal + useAlert · cấm native dialog

## APIs
- GET/POST/PUT/DELETE `/api/v1/asset/road-assets` · `?type=DITCH`
- GET `/api/v1/asset/road-assets/init-data` (+ ditch* lookups)
- BFF proxy `/asset/road-assets` · catalogKind `road-assets`

## Gates
- List config FULL: LinCatalogUiSchemaEditorModal + buildDynamicGridColumns
- Build: yarn build + dotnet build PASS
- E2E: not run in Dev

## Debt
- GAP-DITCH-FLAT-01 flatten P2
- Auth DEFER
- CULVERT_L peer DEFER

## Next
role: qa · /agent-qa*
write: specs/so-ts-ditch/qa/scenarios.md
