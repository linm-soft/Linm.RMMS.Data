# Handoff compact — data_analy

schemaVersion: 1
feature: so-ts-convex-mirror
packKind: list
role: data_analy
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T15:21:11.932Z

## Decisions
- changeScope: new_page
- formPattern: Full page (Kind B · reuse S-META/S-ROUTE/S-LOC-POINT/S-NAME/S-ATTR/S-GPS)
- typeCode: CONVEX_MIRROR · dump `road_sphere_mirror` · tile t31 · cluster atgt_point · CSV 187378
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · live `/so-ts?type=CONVEX_MIRROR`
- be: D:/AI-QLBD/Linm.RMMS.WebService · Asset · `api/v1/asset/road-assets` · cấm ERP.*
- real-data §A+§B: PASS
- contentHash: sha256:36242a5e7648360ecaa70554a44a6f2b782712d0d924a0f7121ab77e14ad558f
- headerFingerprint: sha256:131abdbfcd141444d6157bae0ac4625cb0e456c9104e2122596023cd3a0eec8a
- open questions: lookup MST/shape/material/location · name primary · alias route · dumpSpecs flatten · title tile vs CTX

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| type | Loại TS | SearchInput | asset-type · lock CONVEX_MIRROR |
| route/routeNamed/routeSegment | 3 tầng tuyến | SearchInput | road-route · cấm gộp |
| kmFrom | Lý trình | Text | point · ẩn kmTo · cấm ép 0 |
| name | Tên | Text | ≠ đoạn · GAP-MIRROR-NAME-01 |
| location_post_id | Vị trí đặt | Dropdown/Text | dumpSpecs · S-LOC |
| asset_type_mst_id | Loại MST | Dropdown | ≠ shell type |
| shape_cut_post_id | Hình cắt trụ | Dropdown | S-ATTR |
| diameter_post / height_post / span_length | ĐK · cao · nhịp | Number | S-ATTR |
| material_post_id | VL trụ | Dropdown | S-ATTR |
| number_sign | Số biển/gương | Number | S-ATTR |
| total_number_post → quantity | SL trụ | Number | GAP-MIRROR-QTY-01 |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)
- List DES-GRID-A/B/C/D · LinErpListFilterBar (cấm nút Tìm riêng)
- Form full-page CatalogFormShell 5col · cấm tab legacy · cấm invent long môn field
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/so-ts?type=CONVEX_MIRROR
- mfeStdUrl= http://localhost:9301/so-ts-convex-mirror

## API / tasks (ids only)
- FormMode↔API: list/detail/CRUD/init `…/asset/road-assets` · type=CONVEX_MIRROR
- entity: rmms_road_assets · type seed RoadAssetCatalogHandler · GIS guong-cau
- T-*: DEFER TL (profile + S-ATTR editable · import qty/name · dumpSpecLabels)

## UNCLEAR
- GAP-MIRROR-TYPE-01: Dropdown static vs SearchInput seed
- GAP-MIRROR-NAME-01: list primary = loại+km vs vidagis_id/code
- GAP-MIRROR-ROUTE-01: alias `/so-ts-convex-mirror` Navigate
- GAP-MIRROR-SCOPE-01: title tile gộp long môn vs data chỉ gương
- Flatten dumpSpecs vs migration SA

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-convex-mirror-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-convex-mirror-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-convex-mirror.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-convex-mirror/STATUS.md
