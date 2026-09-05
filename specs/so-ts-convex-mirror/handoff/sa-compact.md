# Handoff compact — sa

schemaVersion: 1
feature: so-ts-convex-mirror
packKind: list
role: sa
status: done
skillVersion: 2026.08.24.01
workflowVersion: 2026.09.01.02
rulesVersion: 2026.09.01.1
writtenAt: 2026-09-01T15:37:03.741Z
taskId: task_41734ed0
autoApprove: ON
e2eQa: ON
solution_confirm: approve
changeScope: new_page
typeCode: CONVEX_MIRROR
dump: road_sphere_mirror
clusterUi: atgt_point · tile t31
gis: guong-cau
formPattern: Full page · CatalogFormShell 5 cols · S-ATTR 9 attr
Kind: B A–D+F+H
domain: Asset · api/v1/asset/road-assets
bff: proxy only · web-bff/api/v1/asset/road-assets
entity: RoadAssetEntity · rmms_road_assets · dumpSpecs P1
sa_tz_gate: tz_na
sa_xco_gate: xco_get_only
sa_shared_table: share_tenant
contentHashPrior: sha256:36242a5e7648360ecaa70554a44a6f2b782712d0d924a0f7121ab77e14ad558f
headerFingerprintPrior: sha256:131abdbfcd141444d6157bae0ac4625cb0e456c9104e2122596023cd3a0eec8a

## Decisions
- changeScope=new_page · packKind=list · Kind B · Full page · cấm fork · cấm tab · S-ATTR 9 attr dump
- API giữ api/v1/asset/road-assets · BFF proxy · cấm ERP.* · cấm invent api/v1/so-ts/*
- Persist: scalars + dumpSpecs P1 · flatten DEFER Schema_* (GAP-MIRROR-SCOPE-01) · không Step 4b
- name≠đoạn · loại+km else code/vidagis (GAP-MIRROR-NAME-01)
- quantity←total_number_post (GAP-MIRROR-QTY-01)
- LOOKUP P1 init-data: assetTypeMsts · shapeCutPosts · materialPosts · locationPosts (GAP-MIRROR-TYPE-01)
- dumpSpecs editable 9 attr · dumpSpecLabels FE (GAP-MIRROR-LABEL-01)
- Point: S-LOC-POINT · ẩn kmTo · cấm ép "0" (GAP-MIRROR-POINT-01)
- LeaveConfirmModal + useAlert (GAP-MIRROR-LEAVE-01)
- Alias board-only /so-ts-convex-mirror optional Navigate (GAP-MIRROR-ROUTE-01)
- Title tile gộp long môn · data chỉ CONVEX_MIRROR · cấm field gantry
- Form reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR(9)·S-GPS
- Gates: tz_na · xco_get_only · share_tenant
- open questions: none

## Inventory (slim)
| id | label | controlHint | write |
|----|-------|-------------|-------|
| type | Loại TS | SearchInput | scalar lock CONVEX_MIRROR |
| route* | 3 tầng | SearchInput | scalar · cấm gộp |
| kmFrom | Lý trình | Text | scalar · ẩn kmTo |
| name | Tên | Text | scalar · ≠ đoạn |
| quantity | SL trụ | Number | ← total_number_post |
| location_post_id | Vị trí đặt | Dropdown | dumpSpecs · LOOKUP |
| asset_type_mst_id | Loại MST | Dropdown | dumpSpecs · ≠ shell type |
| shape/material + ĐK/cao/nhịp/số biển | S-ATTR | Dropdown/Number | dumpSpecs 9 attr |
| lat/lng | GPS | Number | scalar S-GPS |
| code | Mã | Text ro | IdCode BE |

## Screens / zones (ids only)
- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HIST · S-ALIAS
- peerStdUrl=http://localhost:9301/so-ts?type=CONVEX_MIRROR
- mfeStdUrl=http://localhost:9301/so-ts-convex-mirror
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-convex-mirror/ui/prototype/so-ts-convex-mirror-list-prototype.html

## API / tasks (ids only)
- FormMode↔API: C/E/V/Copy ↔ POST/PUT/GET · soft DELETE · init-data · summary-by-type t31
- LKP: asset-type · road-route · org-unit
- T-* → TL (profile · S-ATTR9 · name · qty · LOOKUP · Point · Leave · alias · DOMAIN-MAP · pack)

## UNCLEAR
- none

## Full paths
- solution: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-convex-mirror/be/solution-discovery.md
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-convex-mirror/ui/design.md
- prior compact: handoff/design-compact.md · po-compact.md · data_analy-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-convex-mirror/STATUS.md
