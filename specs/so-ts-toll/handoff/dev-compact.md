# handoff-compact — dev · so-ts-toll
schemaVersion: 1
feature: so-ts-toll
role: dev
status: done
packKind: list
changeScope: new_page
taskId: task_177ba123
typeCode: TOLL
dump: tbl_toll_booth
prefix: TFP-
formPattern: Full page · CatalogFormShell 5 cols
mfeStdRoute: /so-ts?type=TOLL
mfeStdUrl: http://localhost:9301/so-ts?type=TOLL
alias: /so-ts-toll → /so-ts?type=TOLL
API: api/v1/asset/road-assets
domain: Asset
gates: tz_na · xco_get_only · share_tenant
migration: none
build: MFE yarn build PASS · BE dotnet build PASS
e2eQa: ON (queued /agent-qa* only)
skillVersion: 2026.08.19.04
workflowVersion: 2026.08.30.01
rulesVersion: 2026.08.31.2
writtenAt: 2026-09-01T05:30:00.000Z

## Decisions
- reuse AssetListPage/AssetFormPage S-* · cấm fork
- TOLL profile: hide type/kmTo/qty/unit/auxiliary_works_grade_id · ensure weighting/lane/grade/DT cổng
- LOOKUP_STATIC init-data: tollWeightingMethods · tollRoofStructures · tollPavementTypes · tollHouseGrades · tollRoadStructures · tollOperationLocations
- name←station_name · kmFrom/kmTo optional form · weighting_method required
- S-ATTR-WIDTH: width_toll_gate · width_weighting_lane · width_etc_lane · width_manual_lane · width_operation_building
- filter-bar: so-ts-toll-filter-bar.md V1–V5

## Inventory (slim)
| id | surface | notes |
|----|---------|-------|
| list | AssetListPage type=TOLL | LinCatalogDataGrid + profile |
| form | AssetFormPage type=TOLL | 5 col · S-ATTR + S-ATTR-WIDTH |
| init | GET init-data | toll* arrays delta |
| alias | index.tsx | /so-ts-toll Navigate |

## UNCLEAR
- none

## Full paths
- implement: specs/so-ts-toll/implement/so-ts-toll.md
- filter: docs/context/features/so-ts-toll-filter-bar.md

## Next
role: qa · /agent-qa* · e2e queued

## Cấm (compact)
ERP.* · invent so-ts API · e2e ở dev · migration P2 flatten
