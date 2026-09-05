# handoff-compact — team_lead → dev
schemaVersion: 1
feature: so-ts-ditch
role: team_lead
status: confirmed
packKind: list
changeScope: new_page
taskId: task_4cb3181d
generatedAt: 2026-09-01T10:40:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=DITCH
mfeStdUrl: http://localhost:9301/so-ts?type=DITCH
alias: /so-ts-ditch → /so-ts?type=DITCH (optional)
API: api/v1/asset/road-assets
domain: Asset
typeCode: DITCH
dump: tbl_longitudinal
prefix: CD- (GIS CD)
unit: THOAT_NUOC
cluster: linear_protect · t10
formPattern: Full page · CatalogFormShell 5 cols · S-LOC-RANGE
gates: tz_na · xco_get_only · share_tenant
migration: none
e2eQa: ON (queued /agent-qa* only)
skillVersion: 2026.08.19.04
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1
contentHashPrior: sha256:8f37e4455aded2ca3a045f47a50916be0563e859af9b18bdcc59000ce4305854

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-ditch/task/so-ts-ditch.md
filterBar: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-ditch-filter-bar.md
reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-ditch/ui/prototype/so-ts-ditch-list-prototype.html

## Prior (confirmed)
data_analy: contentHash sha256:8f37e4455aded2ca3a045f47a50916be0563e859af9b18bdcc59000ce4305854
po: specs/so-ts-ditch/po/requirement.md
design: specs/so-ts-ditch/ui/design.md · design_confirm=approve
sa: specs/so-ts-ditch/be/solution-discovery.md · solution_confirm=approve

## Decisions
- Kind B · dumpSpecs P1 · flatten DEFER · cấm Schema_* / Step 4b
- name optional · list primary=ditch_type_id · cấm IsWeak
- LOOKUP: ditchTypes · culvertShapes · structure/work/materials · vitri
- Range: S-LOC-RANGE km* + 4 XY dumpSpecs · cấm ép "0" · không S-LOC-POINT
- prefix CD- · GIS CD · unit THOAT_NUOC · page DITCH only · CULVERT_L DEFER

## Dev focus (T-*)
- T-UI-LIST-01: DITCH profile · GAP-SOTS-COL-01 · GAP-DITCH-PEER-01 · hide-empty · LAYOUT-06
- T-UI-FILTER-01: so-ts-ditch-filter-bar.md · V1–V5 · cấm nút Tìm riêng
- T-UI-FORM-01: S-* reuse · S-ATTR editable · S-LOC-RANGE · dumpSpecLabels · CD-
- T-BE-INIT-01: ditchTypes · culvertShapes · GAP-DITCH-LOOKUP-01
- T-BE-CRUD-01: name optional · CD- · dumpSpecs P1 · GAP-DITCH-NAME/PREFIX
- T-UI-LEAVE-01 / T-UI-HIST-01: LeaveConfirmModal · useAlert · cấm native dialog
- T-QA-*: queued e2e only QA

## Cấm
ERP.* · invent api/v1/so-ts/* · fork AssetFormPage · tab legacy · Step4b/migration · e2e/build/start:std ở TL · GAP-PKT-ROLE-01

## Next
role: dev · /agent-dev
write: specs/so-ts-ditch/implement/so-ts-ditch.md
