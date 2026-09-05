# handoff-compact — team_lead → dev
schemaVersion: 1
feature: so-ts-noise-barrier
role: team_lead
status: confirmed
packKind: list
changeScope: new_page
taskId: task_47090d83
generatedAt: 2026-09-01T10:00:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=NOISE_BARRIER
mfeStdUrl: http://localhost:9301/so-ts?type=NOISE_BARRIER
alias: /so-ts-noise-barrier → /so-ts?type=NOISE_BARRIER (optional)
API: api/v1/asset/road-assets
domain: Asset
typeCode: NOISE_BARRIER
dump: tbl_noise_barrier
prefix: TC- (GIS TC)
cluster: linear_protect · t25
formPattern: Full page · CatalogFormShell 5 cols · S-LOC-RANGE
gates: tz_na · xco_get_only · share_tenant
migration: none
e2eQa: ON (queued /agent-qa* only)
skillVersion: 2026.08.19.04
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1
contentHashPrior: sha256:5167bd802b25b82d0d99f0194c1bb059f8f5862747e2035a61e451fd8ae0b7e3

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-noise-barrier/task/so-ts-noise-barrier.md
filterBar: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-noise-barrier-filter-bar.md
reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-noise-barrier/ui/prototype/so-ts-noise-barrier-list-prototype.html

## Prior (confirmed)
data_analy: contentHash sha256:5167bd802b25b82d0d99f0194c1bb059f8f5862747e2035a61e451fd8ae0b7e3
po: specs/so-ts-noise-barrier/po/requirement.md
design: specs/so-ts-noise-barrier/ui/design.md · design_confirm=approve
sa: specs/so-ts-noise-barrier/be/solution-discovery.md · solution_confirm=approve

## Decisions
- Kind B · dumpSpecs P1 · flatten DEFER · cấm Schema_* / Step 4b
- name optional · list primary=type_noise_barrier_id · cấm IsWeak
- LOOKUP: noiseBarrierTypes[] ← type_noise_barrier_id
- Range: S-LOC-RANGE km* + 4 XY dumpSpecs · cấm ép "0" · không S-LOC-POINT
- prefix TC- · GIS TC

## Dev focus (T-*)
- T-UI-LIST-01: NOISE_BARRIER profile · GAP-SOTS-COL-01 · hide-empty vitri/xã · LAYOUT-06
- T-UI-FILTER-01: so-ts-noise-barrier-filter-bar.md · V1–V5 · cấm nút Tìm riêng
- T-UI-FORM-01: S-* reuse · S-ATTR editable · S-LOC-RANGE · dumpSpecLabels · TC-
- T-BE-INIT-01: noiseBarrierTypes · GAP-NB-LOOKUP-01
- T-BE-CRUD-01: name optional · TC- · dumpSpecs P1 · GAP-NB-NAME/PREFIX
- T-UI-LEAVE-01 / T-UI-HIST-01: LeaveConfirmModal · useAlert · cấm native dialog
- T-QA-*: queued e2e only QA

## Cấm
ERP.* · invent api/v1/so-ts/* · fork AssetFormPage · tab legacy · Step4b/migration · e2e/build/start:std ở TL · GAP-PKT-ROLE-01

## Next
role: dev · /agent-dev
write: specs/so-ts-noise-barrier/implement/so-ts-noise-barrier.md
