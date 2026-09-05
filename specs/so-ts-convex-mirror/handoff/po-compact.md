# Handoff compact — po

schemaVersion: 1
feature: so-ts-convex-mirror
packKind: list
role: po
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T15:30:00.000Z
taskId: task_4405a6a5
autoApprove: ON
e2eQa: ON

## Decisions
- changeScope: new_page
- formPattern: Full page (CatalogFormShell 5col · cấm Modal/Slideout · cấm tab legacy · S-ATTR 9 attr editable)
- packKind: list · Kind B · Grid AC YES · Report AC N/A · Leave YES
- typeCode: CONVEX_MIRROR · dump `road_sphere_mirror` · tile t31 · cluster atgt_point · CSV 187378
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · live `/so-ts?type=CONVEX_MIRROR`
- alias: STATUS `/so-ts-convex-mirror` board-only · Design optional Navigate
- be: D:/AI-QLBD/Linm.RMMS.WebService · `api/v1/asset/road-assets` · cấm ERP.*
- title: «Sổ TS — Gương cầu / long môn» · data chỉ CONVEX_MIRROR · cấm invent long môn
- GAP-MIRROR-TYPE-01: Dropdown LOOKUP_STATIC P1 (MST/shape/mat/loc)
- GAP-MIRROR-NAME-01: name=loại+km else code/vidagis · cấm đoạn tuyến
- GAP-MIRROR-QTY-01: quantity←total_number_post
- GAP-MIRROR-SCOPE-01: dumpSpecs P1 · flatten=SA · cấm field gantry
- GAP-MIRROR-POINT-01: ẩn kmTo · cấm ép km "0"
- GAP-MIRROR-LEAVE-01: LeaveConfirmModal + useAlert
- GAP-MIRROR-LABEL-01: dumpSpecLabels FE
- contentHash: sha256:36242a5e7648360ecaa70554a44a6f2b782712d0d924a0f7121ab77e14ad558f
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| type | Loại TS | SearchInput | lock CONVEX_MIRROR |
| route* | 3 tầng | SearchInput | road-route · cấm gộp |
| kmFrom | Lý trình | Text | ẩn kmTo form/grid |
| name | Tên | Text | ≠ đoạn · GAP-MIRROR-NAME-01 |
| location_post_id | Vị trí đặt | Dropdown | LOOKUP_STATIC · S-LOC |
| asset_type_mst_id | Loại MST | Dropdown | ≠ shell type |
| shape/material + ĐK/cao/nhịp/số biển | S-ATTR | Dropdown/Number | 9 attr dump |
| total_number_post → quantity | SL trụ | Number | GAP-MIRROR-QTY-01 |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)
- S-LIST DES-GRID-A/B/C/D+F · LinErpListFilterBar (cấm nút Tìm riêng)
- S-FORM Full page C/E/V/Copy · S-META/S-ROUTE/S-LOC-POINT/S-NAME/S-ATTR/S-GPS · LeaveConfirmModal
- S-ALIAS `/so-ts-convex-mirror` board → live filter (optional Navigate)
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/so-ts?type=CONVEX_MIRROR
- mfeStdUrl= http://localhost:9301/so-ts-convex-mirror
- Grid AC=YES · Leave=YES · Report AC=N/A · controlHint cite DA-HINT

## API / tasks (ids only)
- FormMode↔API: list/detail/CRUD/init `…/asset/road-assets` · type=CONVEX_MIRROR
- entity: rmms_road_assets · type seed RoadAssetCatalogHandler · GIS guong-cau
- devSlash=/agent-dev
- T-*: DEFER TL (profile + S-ATTR editable · import qty/name · dumpSpecLabels)

## UNCLEAR
- none

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-convex-mirror/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-convex-mirror-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-convex-mirror-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-convex-mirror/STATUS.md
