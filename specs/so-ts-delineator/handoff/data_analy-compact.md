# Handoff compact — data_analy

schemaVersion: 1
feature: so-ts-delineator
packKind: list
role: data_analy
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T14:30:00.000Z

## Decisions
- changeScope: new_page
- formPattern: Full page (Kind B · reuse S-META/S-ROUTE/S-LOC-POINT/S-NAME/S-ATTR/S-GPS)
- typeCode: DELINEATOR · dump `tbl_guide_post` · tile t14 · cluster atgt_point · CSV 37303
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · live `/so-ts?type=DELINEATOR`
- be: D:/AI-QLBD/Linm.RMMS.WebService · Asset · `api/v1/asset/road-assets` · cấm ERP.*
- real-data §A+§B: PASS
- contentHash: sha256:9a116268e7b5c333125d903498bf9135379c2f6a5863d309ff5f1d8055a397b9
- open questions: lookup post-type/materials · name primary · alias route · dumpSpecs flatten · qty tiêu vs H

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| type | Loại TS | SearchInput | asset-type · lock DELINEATOR |
| route/routeNamed/routeSegment | 3 tầng tuyến | SearchInput | road-route · cấm gộp |
| kmFrom | Lý trình | Text | point · ẩn kmTo · cấm ép 0 |
| name | Tên | Text | ≠ đoạn · GAP-DELIM-NAME-01 |
| h_post_type_id | Loại kiểu cọc | Dropdown | dump · ≠ guide_post_type_id |
| installed_location_id | Vị trí đặt | Dropdown/Text | dumpSpecs |
| guide_post_type_id + DxRxC + KC + SL | Cọc tiêu | Dropdown/Number | nhóm tiêu |
| h_guide_post_type_id + h_* | Cọc H | Dropdown/Number | nhóm H |
| quantity | SL | Number | ← total_number_* |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)
- List DES-GRID-A/B/C/D · LinErpListFilterBar (cấm nút Tìm riêng)
- Form full-page CatalogFormShell 5col · cấm tab legacy · 2 nhóm S-ATTR
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/so-ts?type=DELINEATOR
- mfeStdUrl= http://localhost:9301/so-ts-delineator

## API / tasks (ids only)
- FormMode↔API: list/detail/CRUD/init `…/asset/road-assets` · type=DELINEATOR
- entity: rmms_road_assets · type seed RoadAssetCatalogHandler · GIS coc-tieu
- T-*: DEFER TL (profile + S-ATTR editable 2 nhóm · import qty/name)

## UNCLEAR
- GAP-DELIM-TYPE-01: Dropdown static vs SearchInput seed
- GAP-DELIM-NAME-01: list primary = loại+km vs vidagis_id/code
- GAP-DELIM-ROUTE-01: alias `/so-ts-delineator` Navigate
- GAP-DELIM-QTY-01: ưu tiên total_number tiêu vs h_total
- Flatten dumpSpecs vs migration SA

## Full paths (Read only if needed)
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-delineator-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-delineator-real-data.md
- context: D:/AI-QLBD/Linm.RMMS.Data/docs/context/features/so-ts-delineator.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-delineator/STATUS.md
