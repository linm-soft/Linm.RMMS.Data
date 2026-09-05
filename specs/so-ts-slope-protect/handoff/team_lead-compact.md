# handoff-compact — team_lead → dev
schemaVersion: 1
feature: so-ts-slope-protect
role: team_lead
status: confirmed
packKind: list
changeScope: new_page
taskId: task_b2cb8c48
generatedAt: 2026-09-02T01:42:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=SLOPE_PROTECT
mfeStdUrl: http://localhost:9301/so-ts?type=SLOPE_PROTECT
alias: /so-ts-slope-protect → /so-ts?type=SLOPE_PROTECT (optional)
API: api/v1/asset/road-assets
domain: Asset
typeCode: SLOPE_PROTECT
dump: tbl_slope
prefix: MD- (GIS MD)
cluster: linear_protect · t12
unit: KET_CAU
formPattern: Full page · CatalogFormShell 5 cols · S-LOC-RANGE
gates: tz_na · xco_get_only · share_tenant
migration: none
e2eQa: ON (queued /agent-qa* only)
skillVersion: 2026.08.19.04
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1
contentHashPrior: sha256:52501076e559261162c4741e46e0826cab2059143221abe3e32b1ca279253294

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-slope-protect/task/so-ts-slope-protect.md
filterBar: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-slope-protect-filter-bar.md
reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-slope-protect/ui/prototype/so-ts-slope-protect-list-prototype.html

## Prior (confirmed)
data_analy: contentHash sha256:52501076e559261162c4741e46e0826cab2059143221abe3e32b1ca279253294
po: specs/so-ts-slope-protect/po/requirement.md
design: specs/so-ts-slope-protect/ui/design.md · design_confirm=approve
sa: specs/so-ts-slope-protect/be/solution-discovery.md · solution_confirm=approve

## Decisions
- Kind B · dumpSpecs P1 · flatten DEFER · cấm Schema_* / Step 4b
- name optional · list primary=protection_type_id · cấm IsWeak
- LOOKUP: protectionTypes[] · slopeClassifications[] · locationOptions[]
- Range: S-LOC-RANGE km* + 4 XY dumpSpecs · cấm ép "0" · không S-LOC-POINT
- prefix MD- · GIS MD · unit KET_CAU · CSV 10547
- dumpSpecLabels 5 key SLOPE_PROTECT · GAP-SLOPE-SPEC-01
- peer SLOPE_PROTECT only · RETAINING riêng · layer mai-doc

## Dev focus (T-*)
- T-UI-LIST-01: SLOPE_PROTECT profile · GAP-SOTS-COL-01 · hide-empty vị trí/địa danh · LAYOUT-06
- T-UI-FILTER-01: so-ts-slope-protect-filter-bar.md · V1–V5 · cấm nút Tìm riêng
- T-UI-FORM-01: S-* reuse · S-ATTR editable · S-LOC-RANGE · dumpSpecLabels · MD-
- T-BE-INIT-01: protectionTypes/slopeClassifications/locationOptions · GAP-SLOPE-LOOKUP-01
- T-BE-CRUD-01: name optional · MD- · dumpSpecs P1 · GAP-SLOPE-NAME/PREFIX
- T-UI-LEAVE-01 / T-UI-HIST-01: LeaveConfirmModal · useAlert · cấm native dialog
- T-QA-*: queued e2e only QA

## Cấm
ERP.* · invent api/v1/so-ts/* · fork AssetFormPage · tab legacy · Step4b/migration · e2e/build/start:std ở TL · GAP-PKT-ROLE-01 · gộp RETAINING

## Next
role: dev · /agent-dev
write: specs/so-ts-slope-protect/implement/so-ts-slope-protect.md
