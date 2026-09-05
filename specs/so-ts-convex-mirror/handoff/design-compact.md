# Handoff compact — design

schemaVersion: 1
feature: so-ts-convex-mirror
packKind: list
role: design
status: done
skillVersion: 2026.08.29.03
writtenAt: 2026-09-01T15:45:00.000Z
taskId: task_98fbbc05
autoApprove: ON
e2eQa: ON
design_confirm: approve
shared_grid_example: v1
real_view_parity: v1
contentHashPrior: sha256:36242a5e7648360ecaa70554a44a6f2b782712d0d924a0f7121ab77e14ad558f

## Decisions
- changeScope: new_page
- formPattern: Full page CatalogFormShell · data-form-cols=5 · cấm Modal/Slideout/tab · S-ATTR 9 attr dump editable
- Kind B A–D+F · typeCode CONVEX_MIRROR · tile t31 · dump road_sphere_mirror · cluster atgt_point
- GAP-MIRROR-TYPE-01: Dropdown LOOKUP_STATIC P1 (MST/shape/mat/loc)
- GAP-MIRROR-NAME-01: name=loại+km else code · cấm đoạn tuyến
- GAP-MIRROR-QTY-01: quantity←total_number_post
- GAP-MIRROR-SCOPE-01: dumpSpecs P1 · flatten=SA · cấm field gantry/long môn
- GAP-MIRROR-POINT-01: ẩn kmTo · cấm ép km "0"
- GAP-MIRROR-LEAVE-01: LeaveConfirmModal + useAlert
- GAP-MIRROR-LABEL-01: dumpSpecLabels FE
- Alias: board-only /so-ts-convex-mirror · live /so-ts?type=CONVEX_MIRROR (optional Navigate)
- title: «Sổ TS — Gương cầu / long môn» · data chỉ CONVEX_MIRROR
- mfe: Linm.Web.RMMS.Asset · be: road-assets · cấm ERP.*
- open questions: none

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| type | Loại TS | SearchInput asset-type | lock CONVEX_MIRROR |
| route* | 3 tầng | SearchInput road-route | * · cấm gộp |
| kmFrom | Lý trình | Text | ẩn kmTo form/grid |
| name | Tên | Text | ≠ đoạn · GAP-MIRROR-NAME-01 |
| location_post_id | Vị trí đặt | Dropdown | LOOKUP_STATIC · S-LOC |
| asset_type_mst_id | Loại MST | Dropdown | LOOKUP_STATIC · ≠ shell type |
| shape/material + ĐK/cao/nhịp/số biển | S-ATTR | Dropdown/Number | 9 attr dump |
| total_number_post → quantity | SL trụ | Number | GAP-MIRROR-QTY-01 |
| lat/lng | GPS | Number | S-GPS |
| code | Mã | Text ro | IdCode BE |

## Screens / zones (ids only)
- DES-GRID-A · B · B-FILTER · C0 · C2 · C3 · D · F · H
- DES-FORM-Z1 · Z2 · DES-LEAVE · S-META/S-ROUTE/S-LOC-POINT/S-NAME/S-ATTR(9)/S-GPS
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-convex-mirror/ui/prototype/so-ts-convex-mirror-list-prototype.html
- peerStdUrl=http://localhost:9301/so-ts?type=CONVEX_MIRROR
- mfeStdUrl=http://localhost:9301/so-ts-convex-mirror
- prototype=specs/so-ts-convex-mirror/ui/prototype/so-ts-convex-mirror-list-prototype.html

## API / tasks (ids only)
- FormMode C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE · init-data
- entity: rmms_road_assets · type seed CONVEX_MIRROR · GIS guong-cau
- T-*: DEFER TL · devSlash=/agent-dev

## UNCLEAR
- none

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-convex-mirror/ui/design.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-convex-mirror-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-convex-mirror-real-data.md
- prior po: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-convex-mirror/handoff/po-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-convex-mirror/STATUS.md
