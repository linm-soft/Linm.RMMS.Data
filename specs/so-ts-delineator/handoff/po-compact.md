# Handoff compact — po

schemaVersion: 1
feature: so-ts-delineator
packKind: list
role: po
status: done
skillVersion: 2026.08.25.01
writtenAt: 2026-09-01T14:45:00.000Z
taskId: task_0e31bcd7
autoApprove: ON
e2eQa: ON

## Decisions
- changeScope: new_page
- formPattern: Full page (CatalogFormShell 5col · cấm Modal/Slideout · cấm tab legacy · 2 nhóm S-ATTR tiêu/H)
- packKind: list · Kind B · Grid AC YES · Report AC N/A · Leave YES
- typeCode: DELINEATOR · dump `tbl_guide_post` · tile t14 · cluster atgt_point · CSV 37303
- mfe: D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset · live `/so-ts?type=DELINEATOR`
- alias: STATUS `/so-ts-delineator` board-only · Design optional Navigate
- be: D:/AI-QLBD/Linm.RMMS.WebService · `api/v1/asset/road-assets` · cấm ERP.*
- GAP-DELIM-TYPE-01: Dropdown LOOKUP_STATIC P1
- GAP-DELIM-NAME-01: name=loại+km else code/vidagis · cấm đoạn tuyến
- GAP-DELIM-QTY-01: quantity←total_number tiêu · fallback h_total
- GAP-DELIM-SPEC-01: dumpSpecs P1 · flatten=SA · form 2 nhóm bắt buộc
- GAP-DELIM-POINT-01: ẩn kmTo · cấm ép km "0"
- GAP-DELIM-LEAVE-01: LeaveConfirmModal + useAlert
- contentHash: sha256:9a116268e7b5c333125d903498bf9135379c2f6a5863d309ff5f1d8055a397b9
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| type | Loại TS | SearchInput | lock DELINEATOR |
| route* | 3 tầng | SearchInput | road-route · cấm gộp |
| kmFrom | Lý trình | Text | ẩn kmTo form/grid |
| name | Tên | Text | ≠ đoạn · GAP-DELIM-NAME-01 |
| h_post_type_id | Loại kiểu cọc | Dropdown | LOOKUP_STATIC · ≠ guide_post_type_id |
| installed_location_id | Vị trí đặt | Dropdown/Text | dumpSpecs |
| guide_post_type_id + DxRxC + KC + SL | Cọc tiêu | Dropdown/Number | nhóm tiêu |
| h_guide_post_type_id + h_* | Cọc H | Dropdown/Number | nhóm H |
| quantity | SL | Number | ← total_number_* |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)
- S-LIST DES-GRID-A/B/C/D+F · LinErpListFilterBar (cấm nút Tìm riêng)
- S-FORM Full page C/E/V/Copy · S-META/S-ROUTE/S-LOC-POINT/S-NAME/S-ATTR(2 nhóm)/S-GPS · LeaveConfirmModal
- S-ALIAS `/so-ts-delineator` board → live filter (optional Navigate)
- reviewUrl= (Design)
- peerStdUrl= http://localhost:9301/so-ts?type=DELINEATOR
- mfeStdUrl= http://localhost:9301/so-ts-delineator
- Grid AC=YES · Leave=YES · Report AC=N/A · controlHint cite DA-HINT

## API / tasks (ids only)
- FormMode↔API: list/detail/CRUD/init `…/asset/road-assets` · type=DELINEATOR
- entity: rmms_road_assets · type seed RoadAssetCatalogHandler · GIS coc-tieu
- devSlash=/agent-dev
- T-*: DEFER TL (profile + S-ATTR editable 2 nhóm · import qty/name)

## UNCLEAR
- none

## Full paths (Read only if needed)
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-delineator/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-delineator-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-delineator-real-data.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-delineator/STATUS.md
