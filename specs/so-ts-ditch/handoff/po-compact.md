# Handoff compact — po

schemaVersion: 1
feature: so-ts-ditch
packKind: list
role: po
status: confirmed
skillVersion: 2026.08.25.02
writtenAt: 2026-09-01T10:20:00.000Z
contentHash: sha256:8f37e4455aded2ca3a045f47a50916be0563e859af9b18bdcc59000ce4305854
autoApprove: ON

## Decisions
- changeScope: new_page · formPattern: Full page Kind B · reuse S-META/S-ROUTE/S-LOC-RANGE/S-NAME/S-ATTR/S-GPS
- typeCode: DITCH · dump tbl_longitudinal · tile t10 · cluster linear_protect · unit THOAT_NUOC
- liveRoute: /so-ts?type=DITCH · alias /so-ts-ditch board-only (GAP-DITCH-ROUTE-01)
- prefix: CD- (GAP-DITCH-PREFIX-01) · name optional · list primary = ditch_type_id (GAP-DITCH-NAME-01)
- ditch_type_id / culvert_shape_id / …: Dropdown LOOKUP_STATIC dump (GAP-DITCH-LOOKUP-01)
- RANGE: S-LOC-RANGE km* + 4 XY dumpSpecs P1 · cấm ép "0" (GAP-DITCH-RANGE-01) · flatten DEFER SA
- peer: page DITCH only · CULVERT_L DEFER (GAP-DITCH-PEER-01)
- cấm fork form · cấm tab legacy · cấm ERP.* · cấm ảnh invent · LeaveConfirmModal + useAlert
- API: api/v1/asset/road-assets · mfe: Linm.Web.RMMS.Asset · be: Linm.RMMS.WebService

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter · cấm nút Tìm riêng |
| type | Loại TS | SearchInput | asset-type · lock/ẩn DITCH |
| route/routeNamed/routeSegment | 3 tầng | SearchInput | road-route |
| kmFrom / kmTo | Lý trình | Text | S-LOC-RANGE · filter+form * |
| ditch_type_id | Loại rãnh/cống | Dropdown | LOOKUP_STATIC · grid primary * |
| culvert_shape_id | Hình dạng | Dropdown | dumpSpecs · grid ON |
| actual_length / height_culvert | Dài/cao | Number | dumpSpecs · grid ON |
| width_bottom / width_top | Rộng đáy/miệng | Number | hide-empty |
| structural_type_id / work_type_id / materials_work_id | KT/CT/VL | Dropdown | LOOKUP_STATIC |
| *_manhole | KT hố ga | Number | hide-empty |
| location_id | Vị trí mặt cắt | Dropdown | optional |
| province*/commune* | Địa danh | Text | hide-empty |
| lat*/lng* | XY đầu/cuối | Number | dumpSpecs RANGE |
| name | Tên | Text | optional |
| lat/lng | GPS | Number | S-GPS |
| code | Mã | Text ro | prefix CD- |

## Screens / zones (ids only)
- List DES-GRID-A/B/C/D · title «Sổ TS — Cống / rãnh dọc» · LinErpListFilterBar · LinCatalogDataGrid profile · pagination 50/100/200/500
- Form CatalogFormShell 5col · C/E/V/Copy · View readOnly · leave-confirm · S-LOC-RANGE (không POINT)
- reviewUrl= (Design) · peerStdUrl= http://localhost:9301/so-ts?type=DITCH
- mfeStdUrl= http://localhost:9301/so-ts-ditch (alias)

## API / tasks (ids only)
- list/detail/CRUD/init …/asset/road-assets · type=DITCH · entity rmms_road_assets · GIS cong-doc
- T-FE-PROFILE · T-FE-FORM · T-FE-LEAVE · T-FE-LABELS · T-BE-PREFIX · T-BE-LOOKUP · T-FE-ALIAS → DEFER TL

## UNCLEAR
- (none · GAP-DITCH-* chốt autoApprove) · flatten migration / lookup seed detail → SA

## Full paths
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-ditch/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-ditch-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-ditch-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-ditch/STATUS.md
