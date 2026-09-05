# handoff-compact — team_lead → dev
schemaVersion: 1
feature: so-ts-convex-mirror
role: team_lead
status: confirmed
packKind: list
changeScope: new_page
taskId: task_b13d2b38
generatedAt: 2026-09-01T15:42:00.000Z
route_confirm: route_a
mfeStdRoute: /so-ts?type=CONVEX_MIRROR
mfeStdUrl: http://localhost:9301/so-ts?type=CONVEX_MIRROR
alias: /so-ts-convex-mirror → /so-ts?type=CONVEX_MIRROR (optional)
API: api/v1/asset/road-assets
domain: Asset
typeCode: CONVEX_MIRROR
dump: road_sphere_mirror
gis: guong-cau
cluster: atgt_point · tile t31
formPattern: Full page CatalogFormShell 5col · S-ATTR 9 attr
gates: tz_na · xco_get_only · share_tenant
migration: none
e2eQa: ON (queued /agent-qa* only)
skillVersion: 2026.08.19.04
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1
contentHashPrior: sha256:36242a5e7648360ecaa70554a44a6f2b782712d0d924a0f7121ab77e14ad558f

## Artifact
write: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-convex-mirror/task/so-ts-convex-mirror.md
filterBar: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-convex-mirror-filter-bar.md
reviewUrl: file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-convex-mirror/ui/prototype/so-ts-convex-mirror-list-prototype.html

## Prior (confirmed)
data_analy: contentHash sha256:36242a5e7648360ecaa70554a44a6f2b782712d0d924a0f7121ab77e14ad558f
po: specs/so-ts-convex-mirror/po/requirement.md
design: specs/so-ts-convex-mirror/ui/design.md · design_confirm=approve
sa: specs/so-ts-convex-mirror/be/solution-discovery.md · solution_confirm=approve

## Dev focus (T-*)
- T-UI-LIST-01: CONVEX_MIRROR grid · GAP-SOTS-COL-01 · LAYOUT-06 · show name/qty/loc/MST/shape/mat/ĐK/cao/nhịp/số biển
- T-UI-FILTER-01: so-ts-convex-mirror-filter-bar.md (create) · V1–V5
- T-UI-FORM-01: S-* reuse · S-ATTR editable **9 attr** · kmTo ẩn · cấm ép "0" · name≠đoạn · qty←total_number_post · cấm gantry field
- T-BE-INIT-01: assetTypeMsts[] · shapeCutPosts[] · materialPosts[] · locationPosts[] · GAP-MIRROR-TYPE-01
- T-BE-CRUD-01: name/qty/label import · dumpSpecs P1 · no flatten · GAP-MIRROR-NAME/QTY/LABEL/SCOPE
- T-UI-LEAVE-01 / T-UI-HIST-01: LeaveConfirmModal · useAlert · cấm native dialog
- T-QA-*: queued e2e only QA

## Attr dump (9)
location_post_id · asset_type_mst_id · shape_cut_post_id · diameter_post · height_post · span_length · material_post_id · number_sign · total_number_post→quantity · lat/lng · code

## Cấm
ERP.* · invent api/v1/so-ts/* · fork AssetFormPage · tab legacy · Step4b/migration · e2e/build/start:std ở TL · invent gantry · GAP-PKT-ROLE-01

## Next
role: dev · /agent-dev
write: specs/so-ts-convex-mirror/implement/so-ts-convex-mirror.md
