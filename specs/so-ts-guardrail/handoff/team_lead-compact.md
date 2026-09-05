# handoff-compact — team_lead → dev
schemaVersion: 1
feature: so-ts-guardrail
role: team_lead
status: confirmed
packKind: list
changeScope: new_page
taskId: task_ff5c4b7e
generatedAt: 2026-09-01T16:35:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=GUARDRAIL
mfeStdUrl: http://localhost:9301/so-ts?type=GUARDRAIL
alias: /so-ts-guardrail → /so-ts?type=GUARDRAIL (optional)
API: api/v1/asset/road-assets
domain: Asset
typeCode: GUARDRAIL
dump: tbl_guardrail
prefix: HL- (GIS HL)
cluster: linear_protect · t17
unit: ATGT
formPattern: Full page · CatalogFormShell 5 cols · S-LOC-RANGE
gates: tz_na · xco_get_only · share_tenant
migration: none
e2eQa: ON (queued /agent-qa* only)
skillVersion: 2026.08.19.04
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1
contentHashPrior: sha256:d0deaacc164574342c2d10d3b3e7f683ad5df9bbefa2fd3072d92c7af8533cc8

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-guardrail/task/so-ts-guardrail.md
filterBar: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-guardrail-filter-bar.md
reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-guardrail/ui/prototype/so-ts-guardrail-list-prototype.html

## Prior (confirmed)
data_analy: contentHash sha256:d0deaacc164574342c2d10d3b3e7f683ad5df9bbefa2fd3072d92c7af8533cc8
po: specs/so-ts-guardrail/po/requirement.md
design: specs/so-ts-guardrail/ui/design.md · design_confirm=approve
sa: specs/so-ts-guardrail/be/solution-discovery.md · solution_confirm=approve

## Decisions
- Kind B · dumpSpecs P1 · flatten DEFER · cấm Schema_* / Step 4b
- name optional · list primary=type_guardrail · cấm IsWeak
- LOOKUP: guardrailTypes[] · guardrailMaterials[] · installationPurposes[] + vitriOptions
- reflective=Number (SL) · GAP-GUARDRAIL-REFLECT-01
- Range: S-LOC-RANGE km* + 4 XY dumpSpecs · cấm ép "0" · không S-LOC-POINT
- prefix HL- · GIS HL · unit ATGT
- peer GUARDRAIL only · NOISE_BARRIER riêng

## Dev focus (T-*)
- T-UI-LIST-01: GUARDRAIL profile · GAP-SOTS-COL-01 · hide-empty vị trí/địa danh · LAYOUT-06
- T-UI-FILTER-01: so-ts-guardrail-filter-bar.md · V1–V5 · cấm nút Tìm riêng
- T-UI-FORM-01: S-* reuse · S-ATTR editable · S-LOC-RANGE · dumpSpecLabels · HL- · reflective Number
- T-BE-INIT-01: guardrailTypes/Materials/installationPurposes · GAP-GUARDRAIL-LOOKUP-01
- T-BE-CRUD-01: name optional · HL- · dumpSpecs P1 · GAP-GUARDRAIL-NAME/PREFIX
- T-UI-LEAVE-01 / T-UI-HIST-01: LeaveConfirmModal · useAlert · cấm native dialog
- T-QA-*: queued e2e only QA

## Cấm
ERP.* · invent api/v1/so-ts/* · fork AssetFormPage · tab legacy · Step4b/migration · e2e/build/start:std ở TL · GAP-PKT-ROLE-01 · gộp NOISE_BARRIER

## Next
role: dev · /agent-dev
write: specs/so-ts-guardrail/implement/so-ts-guardrail.md
