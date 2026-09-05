# Handoff compact — design

schemaVersion: 1
feature: so-ts-culvert-x
packKind: list
role: design
status: done
skillVersion: 2026.08.29.03
writtenAt: 2026-09-01T12:30:00.000Z
taskId: task_d82a3890
autoApprove: ON
e2eQa: ON
design_confirm: approve
shared_grid_example: v1
real_view_parity: v1
contentHashPrior: sha256:baf73523f54f4452cfe4c8eaef3f1a5cd333c56f48f44933027a34a417d49b1b

## Decisions
- changeScope: new_page
- formPattern: Full page CatalogFormShell · data-form-cols=5 · cấm Modal/Slideout/tab
- Kind B A–D+F · typeCode CULVERT_X · tile t07 · prefix CN- · dump thiếu · empty OK · cấm seed
- Lookup: Dropdown LOOKUP_STATIC · name form optional · list OFF
- hide-empty: width · material_body_id · ẩn kmTo form/grid
- Alias Navigate REQUIRED: /so-ts-culvert-x → /so-ts?type=CULVERT_X
- mfe: Linm.Web.RMMS.Asset · be: road-assets · cấm ERP.*
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| type | Loại TS | SearchInput asset-type | lock CULVERT_X |
| route* | 3 tầng | SearchInput road-route | * |
| kmFrom | Lý trình | Text | ẩn kmTo form |
| type_work_id | Loại CT | Dropdown | * LOOKUP_STATIC |
| culvert_shape_id | Hình dạng | Dropdown | Hộp/Bản |
| weight/number | Tải/Số ngăn | Number | |
| width/height/crossing_length_culvert | Rộng/Cao/Dài | Number | hide-empty width |
| material_body_id | VL thân | Dropdown | hide-empty |
| has_*/*_structure/*_area/*_basin_* | Thượng/hạ lưu | Checkbox/Dropdown/Number | S-ATTR |
| name | Tên | Text | optional · list OFF |
| lat/lng | GPS | Number | S-GPS |
| code | Mã | Text ro | prefix CN- |

## Screens / zones (ids only)
- DES-GRID-A · B · B-FILTER · C0 · C2 · C3 · D · F · H
- DES-FORM-Z1 · Z2 · DES-LEAVE
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-culvert-x/ui/prototype/so-ts-culvert-x-list-prototype.html
- peerStdUrl=http://localhost:9301/so-ts?type=CULVERT_X
- mfeStdUrl=http://localhost:9301/so-ts-culvert-x
- prototype=specs/so-ts-culvert-x/ui/prototype/so-ts-culvert-x-list-prototype.html

## API / tasks (ids only)
- FormMode C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE · init-data
- entity: rmms_road_assets · prefix CN- · GIS cong
- T-*: DEFER TL · devSlash=/agent-dev

## UNCLEAR
- none

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-culvert-x/ui/design.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-culvert-x-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-culvert-x-real-data.md
- prior po: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-culvert-x/handoff/po-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-culvert-x/STATUS.md
