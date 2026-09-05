# Handoff compact — po

schemaVersion: 1
feature: so-ts-slope-protect
packKind: list
role: po
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-02T01:33:20.000Z
taskId: task_1a1b1159
autoApprove: ON
e2eQa: ON

## Decisions
- changeScope: new_page
- formPattern: Full page (CatalogFormShell 5col · cấm Modal/Slideout · cấm tab legacy · reuse S-META/S-ROUTE/S-LOC-RANGE/S-NAME/S-ATTR/S-GPS)
- packKind: list · Kind B · Grid AC YES · Report AC N/A · Leave YES
- typeCode: SLOPE_PROTECT · dump `tbl_slope` · tile t12 · cluster linear_protect · CSV 10547 · unit KET_CAU
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · live `/so-ts?type=SLOPE_PROTECT`
- alias: STATUS `/so-ts-slope-protect` board-only · Design optional Navigate
- be: D:/AI-QLBD/Linm.RMMS.WebService · `api/v1/asset/road-assets` · cấm ERP.*
- GAP-SLOPE-LOOKUP-01: Dropdown LOOKUP_STATIC P1 (kiểu BV/phân loại/vị trí)
- GAP-SLOPE-NAME-01: name optional · list primary=protection_type_id · cấm IsWeak→routeSegment
- GAP-SLOPE-PREFIX-01: MD- (GIS short MD) · SA chốt collision pavement-sections
- GAP-SLOPE-RANGE-01: S-LOC-RANGE · 4 XY dumpSpecs P1 · cấm ép "0"
- GAP-SLOPE-SPEC-01: FE labels đủ 5 key dump
- GAP-SLOPE-PEER-01: page SLOPE_PROTECT only · RETAINING riêng · layer mai-doc
- Flatten: dumpSpecs P1 · flatten=SA
- Leave: LeaveConfirmModal + useAlert
- contentHash: sha256:52501076e559261162c4741e46e0826cab2059143221abe3e32b1ca279253294
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| type | Loại TS | SearchInput | lock SLOPE_PROTECT |
| route* | 3 tầng | SearchInput | road-route · cấm gộp |
| kmFrom/kmTo | Lý trình | Text | S-LOC-RANGE |
| protection_type_id | Kiểu bảo vệ | Dropdown | LOOKUP_STATIC · grid primary |
| slope_classification_id | Phân loại mái dốc | Dropdown | dumpSpecs · grid ON |
| actual_protected | Chiều dài BV, gia cố (m) | Number | dumpSpecs · grid ON |
| average_height | Chiều cao TB (m) | Number | dumpSpecs · grid ON |
| location_id | Vị trí cắt ngang | Dropdown | hide-empty |
| lat*/lng* | XY đầu/cuối | Number | dumpSpecs RANGE |
| name | Tên | Text | optional |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)
- S-LIST DES-GRID-A/B/C/D · LinErpListFilterBar (cấm nút Tìm riêng · cấm ảnh invent)
- S-FORM Full page C/E/V/Copy · S-META/S-ROUTE/S-LOC-RANGE/S-NAME/S-ATTR/S-GPS · LeaveConfirmModal
- S-ALIAS `/so-ts-slope-protect` board → live filter (optional Navigate)
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/so-ts?type=SLOPE_PROTECT
- mfeStdUrl= http://localhost:9301/so-ts-slope-protect
- Grid AC=YES · Leave=YES · Report AC=N/A · controlHint cite DA-HINT

## API / tasks (ids only)
- FormMode↔API: list/detail/CRUD/init `…/asset/road-assets` · type=SLOPE_PROTECT
- entity: rmms_road_assets · import RoadAssetCatalogHandler · GIS mai-doc · prefix MD-
- devSlash=/agent-dev
- T-*: DEFER TL (profile + labels + S-ATTR editable + DefaultCodePrefix MD- + lookup seed)

## UNCLEAR
- none

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-slope-protect/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-slope-protect-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-slope-protect-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-slope-protect/STATUS.md
