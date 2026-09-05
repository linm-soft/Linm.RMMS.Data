# handoff-compact — team_lead → dev

schemaVersion: 1
feature: so-ts-its-camera
role: team_lead
status: confirmed
packKind: list
changeScope: new_page
taskId: task_d4c9d606
generatedAt: 2026-09-02T09:00:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=ITS_CAMERA
mfeStdUrl: http://localhost:9301/so-ts?type=ITS_CAMERA
alias: /so-ts-its-camera → /so-ts?type=ITS_CAMERA (optional board)
API: api/v1/asset/road-assets
domain: Asset
typeCode: ITS_CAMERA
dump: tbl_its
prefix: IT-
cluster: ops · tile t19
gates: tz_na · xco_get_only · share_tenant
migration: none
e2eQa: ON (queued /agent-qa* only)
skillVersion: 2026.08.25.01
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-its-camera/task/so-ts-its-camera.md
filterBar: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-its-camera-filter-bar.md
reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-its-camera/ui/prototype/so-ts-its-camera-list-prototype.html

## Prior (confirmed)
data_analy: contentHash sha256:f84fdaca28c60fcf81fcd282b87f9a7d6d9ba3129b26cf9e3a12f6e85f201946
po: specs/so-ts-its-camera/po/requirement.md · design_confirm=approve
design: specs/so-ts-its-camera/ui/design.md · design_confirm=approve
sa: specs/so-ts-its-camera/be/solution-discovery.md · solution_confirm=approve

## Dev focus (T-*)
- T-UI-LIST-01: ITS_CAMERA grid · GAP-SOTS-COL-01 · LAYOUT-06 · 3 tầng · kmFrom · TTĐH · thiết bị · hide-empty · cấm camera-connect
- T-UI-FILTER-01: so-ts-its-camera-filter-bar.md (create) · V1–V5 · cấm nút Tìm riêng
- T-UI-FORM-01: S-* reuse · S-ATTR editable · S-LOC-POINT kmFrom only · ẩn kmTo · name optional · dumpSpecs · prefix IT- · cấm camera-connect
- T-BE-INIT-01: itsManagementCenterTypes[] · itsCentralControlLocations[] · GAP-ITS-LOOKUP-01
- T-BE-CRUD-01: name optional cấm IsWeak · IT- prefix · GAP-ITS-NAME/PREFIX · no flatten
- T-UI-LEAVE-01 / T-UI-HIST-01: LeaveConfirmModal · useAlert · cấm native dialog
- T-CTX-01: context + filter-bar.md · optional alias /so-ts-its-camera
- T-QA-*: queued e2e only QA

## Attr dump
type_management_center_id · location_its_central_control_id · tn_vms_interface · tn_screen_controller · tn_data_server · tn_wim_high_speed · tn_cable_duct_length · tn_fiber_optic_length · tn_its_pole · tn_cctv_monitoring … tn_incident_data_management (detail-only)

## Cấm
ERP.* · invent api/v1/so-ts/* · fork AssetFormPage · tab legacy · camera-connect merge · Step4b/migration · e2e/build/start:std ở TL · GAP-PKT-ROLE-01

## Next
role: dev · /agent-dev
write: specs/so-ts-its-camera/implement/so-ts-its-camera.md
