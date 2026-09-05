# Handoff compact — data_analy

schemaVersion: 1
feature: so-ts-noise-barrier
packKind: list
role: data_analy
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T09:30:00.000Z

## Decisions
- changeScope: new_page
- formPattern: Full page (Kind B · reuse S-META/S-ROUTE/S-LOC-RANGE/S-NAME/S-ATTR/S-GPS)
- typeCode: NOISE_BARRIER · dump tbl_noise_barrier · tile t25 · cluster linear_protect · prefix đề xuất TC-
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · live `/so-ts?type=NOISE_BARRIER`
- be: D:/AI-QLBD/Linm.RMMS.WebService · Asset · `api/v1/asset/road-assets` · cấm ERP.*
- real-data §A+§B: PASS
- open questions: lookup loại tường · name optional · alias route · prefix TC- vs TS- · 4 XY flatten

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| type | Loại TS | SearchInput | asset-type · lock NOISE_BARRIER |
| route/routeNamed/routeSegment | 3 tầng tuyến | SearchInput | road-route |
| kmFrom / kmTo | Lý trình đầu/cuối | Text | S-LOC-RANGE · mẫu có km cuối |
| type_noise_barrier_id | Loại tường chống ồn | Dropdown | LOOKUP_STATIC · grid primary |
| average_height | Chiều cao TB (m) | Number | dumpSpecs |
| actual_length | Chiều dài thực tế (m) | Number | dumpSpecs · label ≠ generic |
| vitri | Vị trí | Dropdown | optional · hide-empty |
| province*/commune* | Địa danh | Text | dumpSpecs · hide-empty |
| lat*/lng* | XY đầu/cuối | Number | RANGE · GAP-NB-RANGE-01 |
| name | Tên | Text | optional · GAP-NB-NAME-01 |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)
- List DES-GRID-A/B/C/D · LinErpListFilterBar (cấm nút Tìm riêng · cấm ảnh invent)
- Form full-page CatalogFormShell 5col · cấm tab legacy
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/so-ts?type=NOISE_BARRIER
- mfeStdUrl= http://localhost:9301/so-ts-noise-barrier

## API / tasks (ids only)
- FormMode↔API: list/detail/CRUD/init `…/asset/road-assets` · type=NOISE_BARRIER
- entity: rmms_road_assets · import RoadAssetCatalogHandler · GIS chong-on · prefix TC-
- T-*: DEFER TL (profile + labels + S-ATTR editable + DefaultCodePrefix)

## UNCLEAR
- GAP-NB-LOOKUP-01: type_noise_barrier_id → Dropdown static vs SearchInput seed
- GAP-NB-NAME-01: name optional vs synthetic
- GAP-NB-ROUTE-01: alias `/so-ts-noise-barrier` Navigate
- GAP-NB-PREFIX-01: chốt TC- trên DefaultCodePrefix (GIS short TC)
- GAP-NB-RANGE-01: 4 XY scalar vs dumpSpecs only

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-noise-barrier-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-noise-barrier-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-noise-barrier.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-noise-barrier/STATUS.md
