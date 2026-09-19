# Handoff compact — design

schemaVersion: 1
feature: so-ts-type-grid
packKind: list
role: design
status: done
skillVersion: 2026.08.29.03
writtenAt: 2026-09-19T01:05:00.000Z
taskId: task_1123e84d
autoApprove: ON
e2eQa: ON
design_confirm: approve
shared_grid_example: v1
real_view_parity: v1
contentHashPrior: sha256:48428b7d526c6b127c4d82d0ac8f2cf8a10326f939e5f15da2daf69b9bbc2c5c
changeScope: edit_page

## Decisions
- formPattern: Full page CatalogFormShell · data-form-cols=5 · cấm Modal/Slideout/tab
- Kind B A–D+F · typeCode — (shell · ?type= · clusters CTX §3)
- typeColumnProfiles shared · hide-empty fill% · children override
- S-* mount by cluster · cấm fork · dumpSpecs JSON until Schema_* (SA)
- LinErpListFilterBar · cấm nút Tìm · LeaveConfirmModal
- gap-no-source empty+toast · cấm seed · out route_master/pavement
- alias /so-ts-type-grid → /so-ts · be road-assets · cấm ERP.*
- open questions: none (PO resolved)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| type | Loại TS | SearchInput asset-type | ẩn/?type= |
| route* | 3 tầng | SearchInput road-route | tách cột |
| kmFrom/kmTo | Lý trình | Text | POINT ẩn kmTo |
| orgUnit | Đơn vị | SearchInput tree | org-unit |
| code/name/status/source | Định danh | Text/Dropdown | S-META |
| dumpSpecs.* | ATTR | Select/SearchInput/Number/Text | S-ATTR |
| lat/lng/qr/value/note | GPS/hồ sơ | Number/Money/TextArea | S-GPS |

## Screens / zones (ids only)
- DES-GRID-A · B · B-FILTER · C0 · C2 · C3 · D · F · H
- DES-FORM-Z1 · Z2 · DES-LEAVE
- reviewUrl=file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-type-grid/ui/prototype/so-ts-type-grid-list-prototype.html
- peerStdUrl=http://localhost:9301/so-ts
- mfeStdUrl=http://localhost:9301/so-ts-type-grid
- prototype=specs/so-ts-type-grid/ui/prototype/so-ts-type-grid-list-prototype.html

## API / tasks (ids only)
- FormMode C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE · init-data
- entity: rmms_road_assets · RoadAssetCatalogHandler
- T-PROF / T-SEC / T-FORM / T-FILTER / T-DOC / T-CHILD — DEFER TL
- devSlash=/agent-dev

## UNCLEAR
- none

## Full paths (Read only if needed)
- design: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-type-grid/ui/design.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-type-grid-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-type-grid-real-data.md
- prior po: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-type-grid/handoff/po-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-type-grid/STATUS.md
