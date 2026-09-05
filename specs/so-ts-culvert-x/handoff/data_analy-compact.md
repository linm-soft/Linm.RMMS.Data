# Handoff compact — data_analy

schemaVersion: 1
feature: so-ts-culvert-x
packKind: list
role: data_analy
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T19:12:09.599Z

## Decisions
- changeScope: new_page
- formPattern: Full page (Kind B · reuse S-META/S-ROUTE/S-LOC-POINT/S-NAME/S-ATTR/S-GPS)
- typeCode: CULVERT_X · dump **thiếu** (GAP-CULVERT-X-01) · tile t07 · prefix CN-
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · live `/so-ts?type=CULVERT_X`
- be: D:/AI-QLBD/Linm.RMMS.WebService · Asset · `api/v1/asset/road-assets` · cấm ERP.*
- real-data §A+§B: PASS
- open questions: lookup · name col · alias route · keep proposed keys · hide-empty

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| type | Loại TS | SearchInput | asset-type · lock CULVERT_X |
| route/routeNamed/routeSegment | 3 tầng tuyến | SearchInput | road-route |
| kmFrom | Lý trình | Text | point · ẩn kmTo |
| type_work_id | Loại công trình | Dropdown | LOOKUP_STATIC |
| culvert_shape_id | Hình dạng | Dropdown | Hộp/Bản |
| weight / number | Tải / Số ngăn | Number | |
| width / height / crossing_length_culvert | Rộng/Cao/Dài (m) | Number | |
| material_body_id | VL thân | Dropdown | hide-empty OK |
| has_* / *_structure / *_area / *_basin_* | Attr thượng/hạ lưu | Checkbox/Dropdown/Number | detail mẫu |
| name | Tên/mô tả | Text | optional · GAP-CN-NAME-01 |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)
- List DES-GRID-A/B/C/D · LinErpListFilterBar (cấm nút Tìm riêng)
- Form full-page CatalogFormShell 5col · cấm tab legacy
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/so-ts?type=CULVERT_X
- mfeStdUrl= http://localhost:9301/so-ts-culvert-x

## API / tasks (ids only)
- FormMode↔API: list/detail/CRUD/init `…/asset/road-assets` · type=CULVERT_X
- entity: rmms_road_assets · type seed RoadAssetCatalogHandler · GIS cong/CN
- T-*: DEFER TL (profile + labels + S-ATTR editable · prefix CN-)

## UNCLEAR
- GAP-CN-LOOKUP-01: shape/VL/KC → Dropdown static vs SearchInput seed
- GAP-CN-NAME-01: list có cột name?
- GAP-CN-ROUTE-01: alias `/so-ts-culvert-x` Navigate
- GAP-CN-KEY-01: proposed dumpSpecs keys vs chờ tbl_*
- Grid hide-empty vs always-ON cho width / material_body_id

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-culvert-x-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-culvert-x-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-culvert-x.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-culvert-x/STATUS.md
