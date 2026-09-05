# Handoff compact — data_analy

schemaVersion: 1
feature: so-ts-traffic-sign
packKind: list
role: data_analy
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T13:25:14.056Z

## Decisions
- changeScope: new_page
- formPattern: Full page (Kind B · reuse S-META/S-ROUTE/S-LOC-POINT/S-NAME/S-ATTR/S-GPS)
- typeCode: TRAFFIC_SIGN · dump `tbl_road_sign` · tile t32 · prefix BB- · cluster atgt_point
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · live `/so-ts?type=TRAFFIC_SIGN`
- be: D:/AI-QLBD/Linm.RMMS.WebService · Asset · `api/v1/asset/road-assets` · cấm ERP.*
- real-data §A+§B: PASS
- contentHash: sha256:36d61492d82e2fbb37adf4b9935116f9ce71e357e336150de46e95049566de88
- open questions: material/shape lookup · list primary name · alias route · dumpSpecs vs flatten

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| type | Loại TS | SearchInput | asset-type · lock TRAFFIC_SIGN |
| route/routeNamed/routeSegment | 3 tầng tuyến | SearchInput | road-route · cấm gộp |
| kmFrom | Lý trình | Text | point · ẩn kmTo |
| name / sign_code_number | Số hiệu QCVN | SearchInput | traffic-sign-type |
| road_sign_content | Nội dung | Text | dumpSpecs |
| location_id | Vị trí đặt | Dropdown/Text | dumpSpecs |
| width / height / area | R/C/DT | Number | GAP-SIGN-SPEC-01 |
| material_sign_id | Vật liệu | Dropdown | LOOKUP_STATIC |
| shape_sign_id | Hình dạng | Dropdown | LOOKUP_STATIC |
| ngaylapdat | Ngày lắp | Date | dumpSpecs |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)
- List DES-GRID-A/B/C/D · LinErpListFilterBar (cấm nút Tìm riêng)
- Form full-page CatalogFormShell 5col · cấm tab legacy · cấm PoleCount
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/so-ts?type=TRAFFIC_SIGN
- mfeStdUrl= http://localhost:9301/so-ts-traffic-sign

## API / tasks (ids only)
- FormMode↔API: list/detail/CRUD/init `…/asset/road-assets` · type=TRAFFIC_SIGN
- sign master: `…/integration/traffic-sign-types/search`
- entity: rmms_road_assets · type seed RoadAssetCatalogHandler · GIS bien-bao
- T-*: DEFER TL (profile + S-ATTR editable · labels dump biển)

## UNCLEAR
- GAP-SIGN-MAT-01 / GAP-SIGN-SHAPE-01: Dropdown static vs SearchInput seed
- GAP-SIGN-NAME-01: list primary = sign_code_number vs road_sign_content
- GAP-SIGN-ROUTE-01: alias `/so-ts-traffic-sign` Navigate
- Flatten dumpSpecs vs migration SA

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-traffic-sign-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-traffic-sign-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-traffic-sign.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-traffic-sign/STATUS.md
