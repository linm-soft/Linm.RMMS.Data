# Handoff compact — po

schemaVersion: 1
feature: so-ts-median
packKind: list
role: po
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T17:05:00.000Z
taskId: task_471bda1f
autoApprove: ON
e2eQa: ON

## Decisions
- changeScope: new_page
- formPattern: Full page (CatalogFormShell 5col · cấm Modal/Slideout · cấm tab legacy · reuse S-META/S-ROUTE/S-LOC-RANGE/S-NAME/S-ATTR/S-GPS)
- packKind: list · Kind B · Grid AC YES · Report AC N/A · Leave YES
- typeCode: MEDIAN · dump `tbl_median_strip` · tile t11 · cluster linear_protect · CSV 6829 · unit ATGT
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · live `/so-ts?type=MEDIAN`
- alias: STATUS `/so-ts-median` board-only · Design optional Navigate
- be: D:/AI-QLBD/Linm.RMMS.WebService · `api/v1/asset/road-assets` · cấm ERP.*
- GAP-MEDIAN-LOOKUP-01: Dropdown LOOKUP_STATIC P1 (loại dải / VL hàng rào / vị trí)
- GAP-MEDIAN-NAME-01: name optional · list primary=type_median_strip_id · cấm IsWeak→routeSegment
- GAP-MEDIAN-BOOL-01: planting_grass/tree=Select boolean
- GAP-MEDIAN-PREFIX-01: PC- (GIS short GPC)
- GAP-MEDIAN-RANGE-01: S-LOC-RANGE · 4 XY dumpSpecs P1 · cấm ép "0"
- GAP-MEDIAN-SPEC-01: FE labels đủ 10 key dump MEDIAN
- Flatten: dumpSpecs P1 · flatten=SA
- Leave: LeaveConfirmModal + useAlert
- contentHash: sha256:19145538a01ec132f8d5ebead0c9111d621746cb789c26bf1f6819c5c932c5e5
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| type | Loại TS | SearchInput | lock MEDIAN |
| route* | 3 tầng | SearchInput | road-route · cấm gộp |
| kmFrom/kmTo | Lý trình | Text | S-LOC-RANGE |
| type_median_strip_id | Loại dải | Dropdown | LOOKUP_STATIC · grid primary |
| length_median_strip | Chiều dài (m) | Number | dumpSpecs · grid ON |
| width_median_strip | Chiều rộng (m) | Number | dumpSpecs · grid ON |
| planting_grass | Trồng cỏ | Select bool | GAP-MEDIAN-BOOL-01 |
| planting_grass_area | DT cỏ (m²) | Number | hide-empty |
| planting_tree | Trồng cây | Select bool | GAP-MEDIAN-BOOL-01 |
| number_tree | Số cây | Number | hide-empty |
| height_fence | Cao hàng rào (m) | Number | grid ON |
| material_type_fence_id | VL hàng rào | Dropdown | LOOKUP_STATIC |
| location_median_strip_id | Vị trí dải | Dropdown | hide-empty |
| lat*/lng* | XY đầu/cuối | Number | dumpSpecs RANGE |
| name | Tên | Text | optional |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)
- S-LIST DES-GRID-A/B/C/D · LinErpListFilterBar (cấm nút Tìm riêng · cấm ảnh invent)
- S-FORM Full page C/E/V/Copy · S-META/S-ROUTE/S-LOC-RANGE/S-NAME/S-ATTR/S-GPS · LeaveConfirmModal
- S-ALIAS `/so-ts-median` board → live filter (optional Navigate)
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/so-ts?type=MEDIAN
- mfeStdUrl= http://localhost:9301/so-ts-median
- Grid AC=YES · Leave=YES · Report AC=N/A · controlHint cite DA-HINT

## API / tasks (ids only)
- FormMode↔API: list/detail/CRUD/init `…/asset/road-assets` · type=MEDIAN
- entity: rmms_road_assets · import RoadAssetCatalogHandler · GIS dai-phan-cach · prefix PC-
- devSlash=/agent-dev
- T-*: DEFER TL (profile + labels + S-ATTR editable + DefaultCodePrefix PC- + lookup seed)

## UNCLEAR
- none

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-median/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-median-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-median-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-median/STATUS.md
