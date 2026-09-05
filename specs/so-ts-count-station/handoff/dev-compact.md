# handoff-compact — dev · so-ts-count-station
schemaVersion: 1
feature: so-ts-count-station
role: dev
status: done
packKind: list
changeScope: new_page
taskId: task_b90cdece
typeCode: COUNT_STATION
dump: mst_counting_station
prefix: THC-
formPattern: Full page · CatalogFormShell 5 cols
mfeStdRoute: /so-ts?type=COUNT_STATION
mfeStdUrl: http://localhost:9301/so-ts?type=COUNT_STATION
alias: /so-ts-count-station → /so-ts?type=COUNT_STATION
API: api/v1/asset/road-assets
domain: Asset
gates: tz_na · xco_get_only · share_tenant
migration: none
build: MFE yarn build PASS · BE dotnet build PASS
e2eQa: ON (queued /agent-qa* only)
skillVersion: 2026.08.19.04
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1
writtenAt: 2026-09-01T08:00:00.000Z

## Decisions
- reuse AssetListPage/AssetFormPage S-* · cấm fork
- COUNT profile: hide type/kmTo/qty/unit · ensure agency_id/name_en/no_of_lane/speed
- LOOKUP_STATIC init-data: countAgencies (agency_id)
- name←name_vi · kmFrom/kmTo optional · no IsWeak→đoạn
- coord: parse from_coordinate → lat/lng · dumpSpecs keep · to_coordinate hide
- filter-bar: so-ts-count-station-filter-bar.md V1–V5
- LeaveConfirmModal reuse · History Modal reuse · prefix THC-

## Inventory (slim)
| id | surface | notes |
|----|---------|-------|
| list | AssetListPage type=COUNT_STATION | LinCatalogDataGrid + profile |
| form | AssetFormPage type=COUNT_STATION | 5 col · S-ATTR agency/EN/lane/speed/coord |
| init | GET init-data | countAgencies delta |
| alias | index.tsx | /so-ts-count-station Navigate |

## APIs
- GET/POST/PUT/DELETE api/v1/asset/road-assets
- GET init-data · countAgencies

## UNCLEAR
- none

## Debt
- flatten Schema_* DEFER P2 · GIS slug DEFER · Auth DEFER · E2E QA only · TX→THC rebuild debt

## Full paths
- implement: specs/so-ts-count-station/implement/so-ts-count-station.md
- filter: docs/context/features/so-ts-count-station-filter-bar.md

## Next
role: qa · /agent-qa*
write: specs/so-ts-count-station/qa/scenarios.md
