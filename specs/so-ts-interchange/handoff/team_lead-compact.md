# handoff-compact — team_lead → dev
schemaVersion: 1
feature: so-ts-interchange
role: team_lead
status: confirmed
packKind: list
changeScope: new_page
taskId: task_298afb04
generatedAt: 2026-09-01T06:30:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=INTERCHANGE
mfeStdUrl: http://localhost:9301/so-ts?type=INTERCHANGE
alias: /so-ts-interchange → /so-ts?type=INTERCHANGE (optional)
API: api/v1/asset/road-assets
domain: Asset
gates: tz_na · xco_get_only · share_tenant
migration: none
e2eQa: ON (queued /agent-qa* only)
skillVersion: 2026.08.19.04
workflowVersion: 2026.08.30.01
rulesVersion: 2026.08.31.2

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-interchange/task/so-ts-interchange.md
filterBar: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-interchange-filter-bar.md
reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-interchange/ui/prototype/so-ts-interchange-list-prototype.html

## Prior (confirmed)
data_analy: contentHash sha256:65b62eed838d6077ebf0ff519ea67e2479d50d3ec49f754f056942ade05b112a
po: specs/so-ts-interchange/po/requirement.md
design: specs/so-ts-interchange/ui/design.md
sa: specs/so-ts-interchange/be/solution-discovery.md · solution_confirm=approve

## Dev focus (T-*)
- T-UI-LIST-01: INTERCHANGE grid profile · GAP-SOTS-COL-01 · LAYOUT-06
- T-UI-FILTER-01: so-ts-interchange-filter-bar.md · V1–V5
- T-UI-FORM-01: S-* reuse · S-ATTR editable · kmTo ẩn · name←name_intersection · dumpSpecs merge
- T-BE-INIT-01: intersectionTypes[] · intersectWiths[] · intersectionShapes[] · GAP-IX-LOOKUP-01
- T-BE-CRUD-01: name_intersection IsWeak guard · GAP-IX-NAME/SPEC · no flatten
- T-UI-LEAVE-01 / T-UI-HIST-01: LeaveConfirmModal · useAlert · cấm native dialog
- T-QA-*: queued e2e only QA

## Cấm
ERP.* · invent api/v1/so-ts/* · fork AssetFormPage · Step4b/migration · e2e/build/start:std ở TL · GAP-PKT-ROLE-01

## Next
role: dev · /agent-dev
write: specs/so-ts-interchange/implement/so-ts-interchange.md
