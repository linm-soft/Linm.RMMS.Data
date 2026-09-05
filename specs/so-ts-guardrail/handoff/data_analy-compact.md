# Handoff compact — data_analy

schemaVersion: 1
feature: so-ts-guardrail
packKind: list
role: data_analy
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T16:20:00.000Z

## Decisions
- changeScope: new_page
- formPattern: Full page (Kind B · reuse S-META/S-ROUTE/S-LOC-RANGE/S-NAME/S-ATTR/S-GPS)
- typeCode: GUARDRAIL · dump tbl_guardrail · tile t17 · cluster linear_protect · prefix đề xuất HL-
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · live `/so-ts?type=GUARDRAIL`
- be: D:/AI-QLBD/Linm.RMMS.WebService · Asset · `api/v1/asset/road-assets` · cấm ERP.*
- real-data §A+§B: PASS
- open questions: lookup loại/VL/mục đích · name optional · reflective Number · alias route · prefix HL- vs TS- · 4 XY flatten · peer NOISE_BARRIER

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| type | Loại TS | SearchInput | asset-type · lock GUARDRAIL |
| route/routeNamed/routeSegment | 3 tầng tuyến | SearchInput | road-route |
| kmFrom / kmTo | Lý trình đầu/cuối | Text | S-LOC-RANGE · mẫu có km cuối |
| type_guardrail | Loại hộ lan | Dropdown | LOOKUP_STATIC · grid primary |
| material_id | Vật liệu | Dropdown | dumpSpecs · grid ON |
| reflective | SL phản quang | Number | dumpSpecs · GAP-GUARDRAIL-REFLECT-01 |
| installation_purpose_id | Mục đích lắp đặt | Dropdown | dumpSpecs · GAP-GUARDRAIL-SPEC-01 |
| actual_length | Chiều dài thực tế (m) | Number | dumpSpecs · grid ON |
| installed_location_id | Vị trí mặt cắt | Dropdown | hide-empty |
| province*/commune* | Địa danh | Text | dumpSpecs · hide-empty |
| lat*/lng* | XY đầu/cuối | Number | RANGE · GAP-GUARDRAIL-RANGE-01 |
| name | Tên | Text | optional · GAP-GUARDRAIL-NAME-01 |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)
- List DES-GRID-A/B/C/D · LinErpListFilterBar (cấm nút Tìm riêng · cấm ảnh invent)
- Form full-page CatalogFormShell 5col · cấm tab legacy
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/so-ts?type=GUARDRAIL
- mfeStdUrl= http://localhost:9301/so-ts-guardrail

## API / tasks (ids only)
- FormMode↔API: list/detail/CRUD/init `…/asset/road-assets` · type=GUARDRAIL
- entity: rmms_road_assets · import RoadAssetCatalogHandler · GIS ho-lan · prefix HL- · unit ATGT · CSV 50335
- T-*: DEFER TL (profile + labels + S-ATTR editable + DefaultCodePrefix)

## UNCLEAR
- GAP-GUARDRAIL-LOOKUP-01: type_guardrail / material_id / installation_purpose_id → Dropdown static vs SearchInput seed
- GAP-GUARDRAIL-NAME-01: name optional vs synthetic
- GAP-GUARDRAIL-REFLECT-01: reflective Number (SL) vs boolean Select
- GAP-GUARDRAIL-ROUTE-01: alias `/so-ts-guardrail` Navigate
- GAP-GUARDRAIL-PREFIX-01: chốt HL- trên DefaultCodePrefix (GIS short HL)
- GAP-GUARDRAIL-RANGE-01: 4 XY scalar vs dumpSpecs only
- GAP-GUARDRAIL-PEER-01: GIS ho-lan + NOISE_BARRIER — page filter GUARDRAIL only

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-guardrail-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-guardrail-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-guardrail.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-guardrail/STATUS.md
