# handoff-compact — team_lead → dev
schemaVersion: 1
feature: so-ts-median
role: team_lead
status: confirmed
packKind: list
changeScope: new_page
taskId: task_84bb5413
generatedAt: 2026-09-01T17:25:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=MEDIAN
mfeStdUrl: http://localhost:9301/so-ts?type=MEDIAN
alias: /so-ts-median → /so-ts?type=MEDIAN (optional)
API: api/v1/asset/road-assets
domain: Asset
typeCode: MEDIAN
dump: tbl_median_strip
prefix: PC- (GIS GPC)
cluster: linear_protect · t11
unit: ATGT · CSV 6829
formPattern: Full page · CatalogFormShell 5 cols · S-LOC-RANGE
gates: tz_na · xco_get_only · share_tenant
migration: none
e2eQa: ON (queued /agent-qa* only)
skillVersion: 2026.08.19.04
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1
contentHashPrior: sha256:19145538a01ec132f8d5ebead0c9111d621746cb789c26bf1f6819c5c932c5e5

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-median/task/so-ts-median.md
filterBar: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-median-filter-bar.md
reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-median/ui/prototype/so-ts-median-list-prototype.html

## Prior (confirmed)
data_analy: contentHash sha256:19145538a01ec132f8d5ebead0c9111d621746cb789c26bf1f6819c5c932c5e5
po: specs/so-ts-median/po/requirement.md
design: specs/so-ts-median/ui/design.md · design_confirm=approve
sa: specs/so-ts-median/be/solution-discovery.md · solution_confirm=approve

## Decisions
- Kind B · dumpSpecs P1 · flatten DEFER · cấm Schema_* / Step 4b
- name optional · list primary=type_median_strip_id · cấm IsWeak
- LOOKUP: medianStripTypes[] · fenceMaterials[] · medianLocations[]
- planting_grass/tree=Select bool · GAP-MEDIAN-BOOL-01
- Range: S-LOC-RANGE km* + 4 XY dumpSpecs · cấm ép "0" · không S-LOC-POINT
- prefix PC- · GIS GPC · unit ATGT
- dumpSpecLabels đủ 10 key MEDIAN · GAP-MEDIAN-SPEC-01
- peer MEDIAN only · linear_protect packs riêng

## Dev focus (T-*)
- T-UI-LIST-01: MEDIAN profile · GAP-SOTS-COL-01 · hide-empty vị trí/địa danh · LAYOUT-06
- T-UI-FILTER-01: so-ts-median-filter-bar.md · V1–V5 · cấm nút Tìm riêng
- T-UI-FORM-01: S-* reuse · S-ATTR editable · S-LOC-RANGE · dumpSpecLabels · PC- · Select bool
- T-BE-INIT-01: medianStripTypes/fenceMaterials/medianLocations · GAP-MEDIAN-LOOKUP-01
- T-BE-CRUD-01: name optional · PC- · dumpSpecs P1 · GAP-MEDIAN-NAME/PREFIX
- T-UI-LEAVE-01 / T-UI-HIST-01: LeaveConfirmModal · useAlert · cấm native dialog
- T-QA-*: queued e2e only QA

## Cấm
ERP.* · invent api/v1/so-ts/* · fork AssetFormPage · tab legacy · Step4b/migration · e2e/build/start:std ở TL · GAP-PKT-ROLE-01 · gộp peer linear_protect

## Next
role: dev · /agent-dev
write: specs/so-ts-median/implement/so-ts-median.md
