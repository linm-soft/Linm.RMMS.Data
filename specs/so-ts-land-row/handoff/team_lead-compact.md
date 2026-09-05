# handoff-compact — team_lead → dev
schemaVersion: 1
feature: so-ts-land-row
role: team_lead
status: confirmed
packKind: list
changeScope: new_page
taskId: task_0d0d2e8b
generatedAt: 2026-09-01T09:00:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=LAND_ROW
mfeStdUrl: http://localhost:9301/so-ts?type=LAND_ROW
alias: /so-ts-land-row → /so-ts?type=LAND_ROW (optional)
API: api/v1/asset/road-assets
domain: Asset
typeCode: LAND_ROW
dump: tbl_land_btra
prefix: DT- (GIS HT giữ)
cluster: land · t33
formPattern: Full page · CatalogFormShell 5 cols · S-LOC-RANGE
gates: tz_na · xco_get_only · share_tenant
migration: none
e2eQa: ON (queued /agent-qa* only)
skillVersion: 2026.08.19.04
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1
contentHashPrior: sha256:bc698a4aaec65f07d252d2ba4a3997574faa3c51c53e84e26990734b423a7849

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-land-row/task/so-ts-land-row.md
filterBar: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-land-row-filter-bar.md
reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-land-row/ui/prototype/so-ts-land-row-list-prototype.html

## Prior (confirmed)
data_analy: contentHash sha256:bc698a4aaec65f07d252d2ba4a3997574faa3c51c53e84e26990734b423a7849
po: specs/so-ts-land-row/po/requirement.md
design: specs/so-ts-land-row/ui/design.md · design_confirm=approve
sa: specs/so-ts-land-row/be/solution-discovery.md · solution_confirm=approve

## Decisions
- Kind B · dumpSpecs P1 · flatten DEFER · cấm Schema_* / Step 4b
- name←construction · trống OK · cấm IsWeak · under_managemen typo giữ
- LOOKUP: landLotStatuses · landExploitTypes · landAccessPavementTypes · landCrossSections · access_road bool
- Range: S-LOC-RANGE · kmTo ẩn fill 0 · cấm ép "0" · không S-LOC-POINT

## Dev focus (T-*)
- T-UI-LIST-01: LAND_ROW profile · GAP-SOTS-COL-01 · hide-empty L/W/xaphuong · LAYOUT-06
- T-UI-FILTER-01: so-ts-land-row-filter-bar.md · V1–V5 · cấm nút Tìm riêng
- T-UI-FORM-01: S-* reuse · S-ATTR editable · S-LOC-RANGE · dumpSpecLabels · DT-
- T-BE-INIT-01: land* LOOKUP arrays · GAP-LAND-LOOKUP-01
- T-BE-CRUD-01: construction IsWeak guard · DT- · dumpSpecs P1 · GAP-LAND-NAME/PREFIX
- T-UI-LEAVE-01 / T-UI-HIST-01: LeaveConfirmModal · useAlert · cấm native dialog
- T-QA-*: queued e2e only QA

## Cấm
ERP.* · invent api/v1/so-ts/* · fork AssetFormPage · tab legacy · Step4b/migration · e2e/build/start:std ở TL · GAP-PKT-ROLE-01

## Next
role: dev · /agent-dev
write: specs/so-ts-land-row/implement/so-ts-land-row.md
