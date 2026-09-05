# Handoff compact — po

schemaVersion: 1
feature: so-ts-noise-barrier
packKind: list
role: po
status: confirmed
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T09:35:00.000Z
contentHash: sha256:5167bd802b25b82d0d99f0194c1bb059f8f5862747e2035a61e451fd8ae0b7e3
autoApprove: ON

## Decisions
- changeScope: new_page · formPattern: Full page Kind B · reuse S-META/S-ROUTE/S-LOC-RANGE/S-NAME/S-ATTR/S-GPS
- typeCode: NOISE_BARRIER · dump tbl_noise_barrier · tile t25 · cluster linear_protect
- liveRoute: /so-ts?type=NOISE_BARRIER · alias /so-ts-noise-barrier board-only (GAP-NB-ROUTE-01)
- prefix: TC- (GAP-NB-PREFIX-01) · name optional · list primary = type_noise_barrier_id (GAP-NB-NAME-01)
- type_noise_barrier_id: Dropdown LOOKUP_STATIC dump (GAP-NB-LOOKUP-01)
- RANGE: S-LOC-RANGE km* + 4 XY dumpSpecs P1 · cấm ép "0" (GAP-NB-RANGE-01) · flatten DEFER SA
- vitri: optional · grid hide-empty · cấm fork form · cấm tab legacy · cấm ERP.* · cấm ảnh invent
- API: api/v1/asset/road-assets · LeaveConfirmModal + useAlert
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · be: D:/AI-QLBD/Linm.RMMS.WebService

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter · cấm nút Tìm riêng |
| type | Loại TS | SearchInput | asset-type · lock/ẩn NOISE_BARRIER |
| route/routeNamed/routeSegment | 3 tầng | SearchInput | road-route |
| kmFrom / kmTo | Lý trình | Text | S-LOC-RANGE · filter+form * |
| type_noise_barrier_id | Loại tường | Dropdown | LOOKUP_STATIC · grid primary * |
| average_height | Cao TB (m) | Number | dumpSpecs |
| actual_length | Dài thực tế (m) | Number | dumpSpecs · label «thực tế» |
| vitri | Vị trí | Dropdown | optional · hide-empty |
| province*/commune* | Địa danh | Text | hide-empty |
| lat*/lng* | XY đầu/cuối | Number | dumpSpecs RANGE |
| name | Tên | Text | optional |
| lat/lng | GPS | Number | S-GPS |
| code | Mã | Text ro | prefix TC- |

## Screens / zones (ids only)
- List DES-GRID-A/B/C/D · title «Sổ TS — Rào chắn ồn» · LinErpListFilterBar · LinCatalogDataGrid profile · pagination 50/100/200/500
- Form CatalogFormShell 5col · C/E/V/Copy · View readOnly · leave-confirm
- reviewUrl= (Design) · peerStdUrl= http://localhost:9301/so-ts?type=NOISE_BARRIER
- mfeStdUrl= http://localhost:9301/so-ts-noise-barrier (alias)

## API / tasks (ids only)
- list/detail/CRUD/init …/asset/road-assets · type=NOISE_BARRIER · entity rmms_road_assets
- T-FE-PROFILE · T-FE-FORM · T-FE-LEAVE · T-BE-PREFIX · T-BE-LOOKUP · T-FE-ALIAS → DEFER TL

## UNCLEAR
- (none · GAP-NB-* chốt autoApprove) · flatten migration / lookup seed detail → SA

## Full paths
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-noise-barrier/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-noise-barrier-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-noise-barrier-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-noise-barrier/STATUS.md
