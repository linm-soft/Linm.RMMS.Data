# Handoff compact — design

schemaVersion: 1
feature: so-ts-delineator
packKind: list
role: design
status: done
skillVersion: 2026.08.29.03
writtenAt: 2026-09-01T14:50:00.000Z
taskId: task_7fb62df7
autoApprove: ON
e2eQa: ON
design_confirm: approve
shared_grid_example: v1
real_view_parity: v1
contentHashPrior: sha256:9a116268e7b5c333125d903498bf9135379c2f6a5863d309ff5f1d8055a397b9

## Decisions
- changeScope: new_page
- formPattern: Full page CatalogFormShell · data-form-cols=5 · cấm Modal/Slideout/tab · S-ATTR 2 nhóm tiêu/H
- Kind B A–D+F · typeCode DELINEATOR · tile t14 · dump tbl_guide_post · cluster atgt_point
- GAP-DELIM-TYPE-01: Dropdown LOOKUP_STATIC P1 (h_post_type / materials)
- GAP-DELIM-NAME-01: name=loại+km else code · cấm đoạn tuyến
- GAP-DELIM-QTY-01: quantity←total_number tiêu · fallback h_total
- GAP-DELIM-SPEC-01: dumpSpecs P1 · flatten=SA · form 2 nhóm bắt buộc
- GAP-DELIM-POINT-01: ẩn kmTo · cấm ép km "0"
- GAP-DELIM-LEAVE-01: LeaveConfirmModal + useAlert
- Alias: board-only /so-ts-delineator · live /so-ts?type=DELINEATOR (optional Navigate)
- mfe: Linm.Web.RMMS.Asset · be: road-assets · cấm ERP.*
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| type | Loại TS | SearchInput asset-type | lock DELINEATOR |
| route* | 3 tầng | SearchInput road-route | * · cấm gộp |
| kmFrom | Lý trình | Text | ẩn kmTo form/grid |
| name | Tên | Text | ≠ đoạn · GAP-DELIM-NAME-01 |
| h_post_type_id | Loại kiểu cọc | Dropdown | LOOKUP_STATIC · ≠ guide_post_type_id |
| installed_location_id | Vị trí đặt | Dropdown/Text | dumpSpecs |
| guide_post_type_id + DxRxC + KC + SL | Cọc tiêu | Dropdown/Number | nhóm tiêu |
| h_guide_post_type_id + h_* | Cọc H | Dropdown/Number | nhóm H |
| quantity | SL | Number | ← total_number_* |
| lat/lng | GPS | Number | S-GPS |
| code | Mã | Text ro | IdCode BE |

## Screens / zones (ids only)
- DES-GRID-A · B · B-FILTER · C0 · C2 · C3 · D · F · H
- DES-FORM-Z1 · Z2 · DES-LEAVE · S-META/S-ROUTE/S-LOC-POINT/S-NAME/S-ATTR(2 nhóm)/S-GPS
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-delineator/ui/prototype/so-ts-delineator-list-prototype.html
- peerStdUrl=http://localhost:9301/so-ts?type=DELINEATOR
- mfeStdUrl=http://localhost:9301/so-ts-delineator
- prototype=specs/so-ts-delineator/ui/prototype/so-ts-delineator-list-prototype.html

## API / tasks (ids only)
- FormMode C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE · init-data
- entity: rmms_road_assets · type seed DELINEATOR · GIS coc-tieu
- T-*: DEFER TL · devSlash=/agent-dev

## UNCLEAR
- none

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-delineator/ui/design.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-delineator-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-delineator-real-data.md
- prior po: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-delineator/handoff/po-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-delineator/STATUS.md
