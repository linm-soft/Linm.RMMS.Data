# handoff-compact — team_lead → dev
schemaVersion: 1
feature: so-ts-pontoon
role: team_lead
status: confirmed
packKind: list
changeScope: new_page
taskId: task_f2ec0170
generatedAt: 2026-09-01T21:07:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=PONTOON
mfeStdUrl: http://localhost:9301/so-ts?type=PONTOON
alias: /so-ts-pontoon → /so-ts?type=PONTOON (optional)
API: api/v1/asset/road-assets
domain: Asset
typeCode: PONTOON
dump: tbl_pontoon_bridge
prefix: CP-
cluster: crossing · t05
formPattern: Full page · CatalogFormShell 5 cols · S-LOC-POINT
gates: tz_na · xco_get_only · share_tenant
migration: none
e2eQa: ON (queued /agent-qa* only)
skillVersion: 2026.08.19.04
workflowVersion: 2026.08.30.01
rulesVersion: 2026.08.31.2
contentHashPrior: sha256:67f93e158eebae7ad4d0dd4818a73f93761b88c8bbbf339d6f1dc95c469e31c30

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-pontoon/task/so-ts-pontoon.md
filterBar: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-pontoon-filter-bar.md
reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-pontoon/ui/prototype/so-ts-pontoon-list-prototype.html

## Prior (confirmed)
data_analy: contentHash sha256:67f93e158eebae7ad4d0dd4818a73f93761b88c8bbbf339d6f1dc95c469e31c30
po: specs/so-ts-pontoon/po/requirement.md · design_confirm=approve
design: specs/so-ts-pontoon/ui/design.md · design_confirm=approve
sa: specs/so-ts-pontoon/be/solution-discovery.md · solution_confirm=approve

## Decisions
- Kind B · dumpSpecs P1 · flatten DEFER · cấm Schema_* / Step 4b
- name ← name_pontoon_bridge · trống OK · cấm IsWeak
- LOOKUP: pontoonWorkLevels[] · pontoonBridgeTypes[]
- S-LOC-POINT · ẩn kmTo · kmFrom không required · cấm ép "0"
- prefix CP- · sample CP-378806 · gov-vn count 2
- Form reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · cấm fork

## Dev focus (T-*)
- T-UI-LIST-01: PONTOON profile · GAP-SOTS-COL-01 · LAYOUT-06
- T-UI-FILTER-01: so-ts-pontoon-filter-bar.md · V1–V5 · cấm nút Tìm riêng
- T-UI-FORM-01: S-* reuse · S-ATTR editable · dumpSpecLabels · GAP-PON-SPEC-01
- T-BE-INIT-01: pontoonWorkLevels/pontoonBridgeTypes · GAP-PON-LOOKUP-01
- T-BE-CRUD-01: name_pontoon_bridge · CP- · dumpSpecs P1 · GAP-PON-NAME-01
- T-UI-LEAVE-01 / T-UI-HIST-01: LeaveConfirmModal · useAlert · cấm native dialog
- T-QA-*: queued e2e only QA

## Cấm
ERP.* · invent api/v1/so-ts/* · fork AssetFormPage · tab legacy · Step4b/migration · e2e/build/start:std ở TL · GAP-PKT-ROLE-01

## Next
role: dev · /agent-dev
write: specs/so-ts-pontoon/implement/so-ts-pontoon.md
