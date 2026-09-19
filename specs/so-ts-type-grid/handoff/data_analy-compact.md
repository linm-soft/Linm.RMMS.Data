# Handoff compact — data_analy

schemaVersion: 1
feature: so-ts-type-grid
packKind: list
role: data_analy
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-18T17:55:00.000Z

## Decisions
- changeScope: edit_page
- formPattern: Full page (Kind B · reuse S-META/S-ROUTE/S-LOC-POINT|RANGE/S-NAME/S-ATTR/S-GPS)
- typeCode: — (shell · `?type=` · clusters CTX §3 · out route_master/pavement)
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · live `/so-ts`
- be: D:/AI-QLBD/Linm.RMMS.WebService · Asset · `api/v1/asset/road-assets` · cấm ERP.*
- real-data §A+§B: PASS
- open questions: profile registry vs inline · flatten dumpSpecs timing · DOMAIN-MAP slug · CTX API alias · CULVERT_X UI-only

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| type | Loại TS | SearchInput | asset-type · ẩn khi `?type=` |
| route/routeNamed/routeSegment | 3 tầng tuyến | SearchInput | road-route · tách cột |
| kmFrom / kmTo | Lý trình | Text | POINT ẩn kmTo nếu dump không có |
| orgUnit | Đơn vị | SearchInput tree | org-unit |
| code/name/status/source | Định danh | Text/Dropdown | S-META |
| dumpSpecs.* | ATTR loại | Select/SearchInput/Number/Text | S-ATTR · children |
| lat/lng/qr/value/note | GPS/hồ sơ | Number/Money/TextArea | S-GPS |
| quantity/unitCode | SL/ĐVT | Number/Text | hide-empty |

## Screens / zones (ids only)
- List DES-GRID-A/B/C/D · LinErpListFilterBar (cấm nút Tìm riêng · cấm ảnh invent)
- Form full-page CatalogFormShell 5col · cấm tab legacy · mount S-* by cluster
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/so-ts
- mfeStdUrl= http://localhost:9301/so-ts-type-grid

## API / tasks (ids only)
- FormMode↔API: list/detail/CRUD/init `…/asset/road-assets` · `?type=`
- entity: rmms_road_assets · import RoadAssetCatalogHandler · demo asset.html chrome only
- T-PROF / T-SEC / T-FORM / T-FILTER / T-DOC / T-CHILD — DEFER TL

## UNCLEAR
- GAP-SOTS-COL-01: profile module vs keep ad-hoc HIDE maps
- GAP-SOTS-FORM-01: dumpSpecs JSON vs Schema_* flatten timing
- GAP-SOTS-DOMAIN-01: add `so-ts-type-grid` → Asset on DOMAIN-MAP
- GAP-SOTS-API-DOC: CTX `so-ts` path vs live `asset`
- GAP-CULVERT-X-01: child UI when CSV 0 (cấm seed)

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-type-grid-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-type-grid-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-type-grid.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-type-grid/STATUS.md
