# Handoff compact — dev

schemaVersion: 1
feature: so-ts-guardrail
packKind: list
role: dev
status: done
taskId: task_a0431186
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T17:00:00.000Z
changeScope: new_page
typeCode: GUARDRAIL
prefix: HL-
formPattern: Full page · CatalogFormShell 5 cols
Kind: B
build: PASS (MFE yarn · BE dotnet)
e2eQa: ON (queued /agent-qa*)

## Decisions
- route live `/so-ts?type=GUARDRAIL` · alias `/so-ts-guardrail` Navigate
- GUARDRAIL grid profile ON: type_guardrail · material_id · reflective · installation_purpose_id · actual_length · hide-empty vitri/địa danh
- Form S-ATTR editable · reflective=Number · name optional · S-LOC-RANGE km* + 4 XY dumpSpecs
- BE init-data: guardrailTypes[] · guardrailMaterials[] · installationPurposes[] + vitriOptions
- DefaultCodePrefix HL- · ValidateRequired type_guardrail required · kmFrom RANGE
- filter context: so-ts-guardrail-filter-bar.md
- flatten DEFER · migration none
- open questions: none

## Inventory (slim)
| id | controlHint | write |
|----|-------------|-------|
| type_guardrail | Dropdown LOOKUP_STATIC | dumpSpecs * grid primary |
| material_id | Dropdown | dumpSpecs |
| reflective | Number | dumpSpecs |
| installation_purpose_id | Dropdown | dumpSpecs |
| actual_length | Number | dumpSpecs grid |
| installed_location_id | Dropdown | dumpSpecs hide-empty |

## Screens / zones
- testId: rmms-so-ts-guardrail-list
- mfeStdUrl: http://localhost:9301/so-ts?type=GUARDRAIL
- alias: http://localhost:9301/so-ts-guardrail
- peerStdUrl: http://localhost:9301/so-ts?type=GUARDRAIL

## API
- GET/POST/PUT/DELETE `api/v1/asset/road-assets` · type=GUARDRAIL
- GET init-data delta guardrail lookups

## Files touched
- MFE: index.tsx · AssetListPage · AssetFormPage · endpoint.ts · lookups.ts · dumpSpecLabels.ts
- BE: RoadAssetDtos.cs · RoadAssetService.cs
- context: so-ts-guardrail-filter-bar.md

## Next
| Role | Need |
|------|------|
| QA | e2e `/agent-qa*` · mfeStdUrl verify |
| review | findings.md |

## Cấm
ERP.* · e2e ở dev · flatten P1 · invent so-ts API
