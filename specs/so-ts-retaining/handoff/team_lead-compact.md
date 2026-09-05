# handoff-compact — team_lead → dev
schemaVersion: 1
feature: so-ts-retaining
role: team_lead
status: confirmed
packKind: list
changeScope: new_page
taskId: task_4d5e73e5
generatedAt: 2026-09-02T01:05:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=RETAINING
mfeStdUrl: http://localhost:9301/so-ts?type=RETAINING
alias: /so-ts-retaining → /so-ts?type=RETAINING (optional)
API: api/v1/asset/road-assets
domain: Asset
typeCode: RETAINING
dump: tbl_retaining_wall
prefix: KE- (GIS KE)
cluster: linear_protect · t20
unit: KET_CAU · CSV 9660
formPattern: Full page · CatalogFormShell 5 cols · S-LOC-RANGE
gates: tz_na · xco_get_only · share_tenant
migration: none
e2eQa: ON (queued /agent-qa* only)
skillVersion: 2026.08.19.04
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1
contentHashPrior: sha256:81662f66f48ea982b12b06d93e0716f7449b1356d169541e62a40b377178c061

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-retaining/task/so-ts-retaining.md
filterBar: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-retaining-filter-bar.md
reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-retaining/ui/prototype/so-ts-retaining-list-prototype.html

## Prior (confirmed)
data_analy: contentHash sha256:81662f66f48ea982b12b06d93e0716f7449b1356d169541e62a40b377178c061
po: specs/so-ts-retaining/po/requirement.md
design: specs/so-ts-retaining/ui/design.md · design_confirm=approve
sa: specs/so-ts-retaining/be/solution-discovery.md · solution_confirm=approve

## Decisions
- Kind B · dumpSpecs P1 · flatten DEFER · cấm Schema_* / Step 4b
- name optional · list primary=retaining_wall_type_id · cấm IsWeak
- LOOKUP: retainingWallTypes[] · materialTypes[] · foundationTypes[] · locationOptions[] · dumpAssetTypes[]
- dump asset_type hide-empty · ≠ entity type · GAP-RETAINING-ASSETTYPE-01
- Range: S-LOC-RANGE km* + 4 XY dumpSpecs · cấm ép "0" · không S-LOC-POINT
- prefix KE- · GIS KE · unit KET_CAU
- dumpSpecLabels đủ 8 key RETAINING · GAP-RETAINING-SPEC-01
- peer RETAINING only · cấm gộp SLOPE_PROTECT
- route_confirm=route_a · alias board-only

## Dev focus (T-*)
- T-UI-LIST-01: RETAINING profile · GAP-SOTS-COL-01 · hide-empty vị trí/asset_type/địa danh · LAYOUT-06
- T-UI-FILTER-01: so-ts-retaining-filter-bar.md · V1–V5 · cấm nút Tìm riêng
- T-UI-FORM-01: S-* reuse · S-ATTR editable · S-LOC-RANGE · dumpSpecLabels · KE-
- T-BE-INIT-01: retainingWallTypes/materialTypes/foundationTypes/locationOptions/dumpAssetTypes
- T-BE-CRUD-01: name optional · KE- · dumpSpecs P1 · GAP-RETAINING-NAME/PREFIX
- T-UI-LEAVE-01 / T-UI-HIST-01: LeaveConfirmModal · useAlert · cấm native dialog
- T-QA-*: queued e2e only QA

## Cấm
ERP.* · invent api/v1/so-ts/* · fork AssetFormPage · tab legacy · Step4b/migration · e2e/build/start:std ở TL · GAP-PKT-ROLE-01 · gộp SLOPE_PROTECT

## Next
role: dev · /agent-dev
write: specs/so-ts-retaining/implement/so-ts-retaining.md
