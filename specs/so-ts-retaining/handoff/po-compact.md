# Handoff compact — po

schemaVersion: 1
feature: so-ts-retaining
packKind: list
role: po
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-02T00:46:04.949Z
taskId: task_c700f1ca
autoApprove: ON
e2eQa: ON

## Decisions
- changeScope: new_page
- formPattern: Full page (CatalogFormShell 5col · cấm Modal/Slideout · cấm tab legacy · reuse S-META/S-ROUTE/S-LOC-RANGE/S-NAME/S-ATTR/S-GPS)
- packKind: list · Kind B · Grid AC YES · Report AC N/A · Leave YES
- typeCode: RETAINING · dump `tbl_retaining_wall` · tile t20 · cluster linear_protect · CSV 9660 · unit KET_CAU
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · live `/so-ts?type=RETAINING`
- alias: STATUS `/so-ts-retaining` board-only · Design optional Navigate
- be: D:/AI-QLBD/Linm.RMMS.WebService · `api/v1/asset/road-assets` · cấm ERP.*
- GAP-RETAINING-LOOKUP-01: Dropdown LOOKUP_STATIC P1 (loại tường/VL/móng/vị trí/asset_type)
- GAP-RETAINING-NAME-01: name optional · list primary=retaining_wall_type_id · cấm IsWeak→routeSegment
- GAP-RETAINING-ASSETTYPE-01: dump asset_type hide-empty · ≠ entity type
- GAP-RETAINING-PREFIX-01: KE- (GIS short KE)
- GAP-RETAINING-RANGE-01: S-LOC-RANGE · 4 XY dumpSpecs P1 · cấm ép "0"
- GAP-RETAINING-SPEC-01: FE labels đủ 8 key dump
- GAP-RETAINING-PEER-01: page RETAINING only · SLOPE_PROTECT riêng
- Flatten: dumpSpecs P1 · flatten=SA
- Leave: LeaveConfirmModal + useAlert
- contentHash: sha256:81662f66f48ea982b12b06d93e0716f7449b1356d169541e62a40b377178c061
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| type | Loại TS | SearchInput | lock RETAINING |
| route* | 3 tầng | SearchInput | road-route · cấm gộp |
| kmFrom/kmTo | Lý trình | Text | S-LOC-RANGE |
| retaining_wall_type_id | Loại tường chắn | Dropdown | LOOKUP_STATIC · grid primary |
| material_type_id | Loại vật liệu | Dropdown | dumpSpecs · grid ON |
| actual_protected | Chiều dài (m) | Number | dumpSpecs · grid ON |
| average_height | Chiều cao TB (m) | Number | dumpSpecs · grid ON |
| number | Số phân đoạn | Number | dumpSpecs · grid ON |
| foundation_type_id | Loại móng | Dropdown | dumpSpecs · grid ON |
| location_id | Vị trí mặt cắt | Dropdown | hide-empty |
| asset_type | Loại TS (dump) | Dropdown | hide-empty · ≠ entity |
| lat*/lng* | XY đầu/cuối | Number | dumpSpecs RANGE |
| name | Tên | Text | optional |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)
- S-LIST DES-GRID-A/B/C/D · LinErpListFilterBar (cấm nút Tìm riêng · cấm ảnh invent)
- S-FORM Full page C/E/V/Copy · S-META/S-ROUTE/S-LOC-RANGE/S-NAME/S-ATTR/S-GPS · LeaveConfirmModal
- S-ALIAS `/so-ts-retaining` board → live filter (optional Navigate)
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/so-ts?type=RETAINING
- mfeStdUrl= http://localhost:9301/so-ts-retaining
- Grid AC=YES · Leave=YES · Report AC=N/A · controlHint cite DA-HINT

## API / tasks (ids only)
- FormMode↔API: list/detail/CRUD/init `…/asset/road-assets` · type=RETAINING
- entity: rmms_road_assets · import RoadAssetCatalogHandler · GIS tuong-chan · prefix KE-
- devSlash=/agent-dev
- T-*: DEFER TL (profile + labels + S-ATTR editable + DefaultCodePrefix KE- + lookup seed)

## UNCLEAR
- none

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-retaining/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-retaining-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-retaining-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-retaining/STATUS.md
