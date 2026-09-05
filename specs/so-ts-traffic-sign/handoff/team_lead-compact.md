# handoff-compact — team_lead → dev
schemaVersion: 1
feature: so-ts-traffic-sign
role: team_lead
status: confirmed
packKind: list
changeScope: new_page
taskId: task_c254d25d
generatedAt: 2026-09-01T14:00:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=TRAFFIC_SIGN
mfeStdUrl: http://localhost:9301/so-ts?type=TRAFFIC_SIGN
alias: /so-ts-traffic-sign → /so-ts?type=TRAFFIC_SIGN (optional)
API: api/v1/asset/road-assets
domain: Asset
typeCode: TRAFFIC_SIGN
dump: tbl_road_sign
prefix: BB-
cluster: atgt_point · tile t32
gates: tz_na · xco_get_only · share_tenant
migration: none
e2eQa: ON (queued /agent-qa* only)
skillVersion: 2026.08.19.04
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-traffic-sign/task/so-ts-traffic-sign.md
filterBar: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-traffic-sign-filter-bar.md
reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-traffic-sign/ui/prototype/so-ts-traffic-sign-list-prototype.html

## Prior (confirmed)
data_analy: contentHash sha256:36d61492d82e2fbb37adf4b9935116f9ce71e357e336150de46e95049566de88
po: specs/so-ts-traffic-sign/po/requirement.md
design: specs/so-ts-traffic-sign/ui/design.md · design_confirm=approve
sa: specs/so-ts-traffic-sign/be/solution-discovery.md · solution_confirm=approve

## Dev focus (T-*)
- T-UI-LIST-01: TRAFFIC_SIGN grid · GAP-SOTS-COL-01 · LAYOUT-06 · show content/dims/material/shape/location/ngaylapdat
- T-UI-FILTER-01: so-ts-traffic-sign-filter-bar.md (create) · V1–V5
- T-UI-FORM-01: S-* reuse · S-ATTR editable · kmTo ẩn · name←sign_code_number · traffic-sign-types SearchInput · dumpSpecs · prefix BB- · cấm PoleCount
- T-BE-INIT-01: materialsSign[] · shapesSign[] · GAP-SIGN-MAT/SHAPE-01
- T-BE-CRUD-01: sign_code_number IsWeak + BB- · GAP-SIGN-NAME/SPEC · no flatten
- T-UI-LEAVE-01 / T-UI-HIST-01: LeaveConfirmModal · useAlert · cấm native dialog
- T-QA-*: queued e2e only QA

## Attr dump
sign_code_number · road_sign_content · width · height · area · material_sign_id · shape_sign_id · location_id · ngaylapdat

## Cấm
ERP.* · invent api/v1/so-ts/* · fork AssetFormPage · tab legacy · PoleCount · Step4b/migration · e2e/build/start:std ở TL · GAP-PKT-ROLE-01

## Next
role: dev · /agent-dev
write: specs/so-ts-traffic-sign/implement/so-ts-traffic-sign.md
