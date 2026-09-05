# Handoff compact — data_analy

schemaVersion: 1
feature: so-ts-row-util
packKind: list
role: data_analy
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-02T02:00:00.000Z

## Decisions
- changeScope: new_page
- formPattern: Full page (Kind B · reuse S-META/S-ROUTE/S-LOC-RANGE/S-NAME/S-ATTR/S-GPS)
- typeCode: ROW_UTIL · dump tbl_infrastructure_row · tile t08 · cluster land · prefix HT-
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · live `/so-ts?type=ROW_UTIL`
- be: D:/AI-QLBD/Linm.RMMS.WebService · Asset · `api/v1/asset/road-assets` · cấm ERP.*
- real-data §A+§B: PASS
- open questions: lookup static vs seed · alias route · DefaultCodePrefix HT- vs GIS HT · kmTo hiện RANGE

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| type | Loại TS | SearchInput | asset-type · lock ROW_UTIL |
| route/routeNamed/routeSegment | 3 tầng tuyến | SearchInput | road-route |
| kmFrom / kmTo | Lý trình đầu/cuối | Text | RANGE · import có km cuối |
| name / tencongtrinh_htk | Công trình HTKT | Text | primary name · GAP-ROWUTIL-NAME-01 |
| type_work_id | Loại công trình | Dropdown | LOOKUP_STATIC |
| length | Chiều dài (m) | Number | grid ON |
| number_post | Số trụ / cột | Number | hide-empty |
| owner | Chủ sở hữu | Text | |
| located_within_id | Trong phạm vi HL | Dropdown | LOOKUP_STATIC |
| protection_tructure | CT bảo vệ | Text | dump typo key |
| type_protection_structure_id | Loại KC bảo vệ | Dropdown | |
| support_type_id | Loại giá đỡ | Dropdown | |
| distance_road_center | KC đến tim (km) | Number | hide-empty |
| distance_between_supports | KC giữa giá (m) | Number | hide-empty |
| status_hiring_is_within_row | TT thuê HL | Dropdown | |
| build_location | Mặt cắt | Dropdown | |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)
- List DES-GRID-A/B/C/D · LinErpListFilterBar (cấm nút Tìm riêng)
- Form full-page CatalogFormShell 5col · cấm tab legacy
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/so-ts?type=ROW_UTIL
- mfeStdUrl= http://localhost:9301/so-ts-row-util

## API / tasks (ids only)
- FormMode↔API: list/detail/CRUD/init `…/asset/road-assets` · type=ROW_UTIL
- entity: rmms_road_assets · import RoadAssetCatalogHandler · GIS htkt · prefix HT-
- T-*: DEFER TL (profile + labels + S-ATTR editable + DefaultCodePrefix)

## UNCLEAR
- GAP-ROWUTIL-LOOKUP-01: type_work/located_within/protection/support/status_hiring/build_location → Dropdown static vs SearchInput seed
- GAP-ROWUTIL-ROUTE-01: alias `/so-ts-row-util` Navigate
- GAP-ROWUTIL-PREFIX-01: chốt HT- trên DefaultCodePrefix (GIS short HT giữ)
- GAP-ROWUTIL-RANGE-01: S-LOC-RANGE kmTo bắt buộc hay optional khi dump trống

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-row-util-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-row-util-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-row-util.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-row-util/STATUS.md
