# Handoff compact — po

schemaVersion: 1
feature: so-ts-type-grid
packKind: list
role: po
status: confirmed
skillVersion: 2026.08.25.01
writtenAt: 2026-09-18T18:05:00.000Z
contentHash: sha256:48428b7d526c6b127c4d82d0ac8f2cf8a10326f939e5f15da2daf69b9bbc2c5c
changeScope: edit_page
autoApprove: ON
e2eQa: ON

## Decisions
- GAP-SOTS-COL-01: module typeColumnProfiles shared · children override
- GAP-SOTS-FORM-01: dumpSpecs JSON until Schema_* migration · SA chốt flatten
- GAP-SOTS-DOMAIN-01: yes · DOMAIN-MAP slug → Asset
- GAP-SOTS-API-DOC: cite api/v1/asset/road-assets · CTX so-ts = alias
- GAP-CULVERT-X-01: UI mẫu · empty+toast · cấm seed
- GAP-SOTS-REUSE-01: mount S-META/ROUTE/LOC-POINT|RANGE/NAME/ATTR/GPS · cấm fork
- GAP-SOTS-TAB-01: cấm tab legacy DRVN
- GAP-FILTER-BAR-01: LinErpListFilterBar · cấm nút Tìm · search must work
- GAP-SOTS-LEAVE-01: LeaveConfirmModal · cấm native
- GAP-SOTS-OUT-01: route_master/pavement out /so-ts
- formPattern: Full page CatalogFormShell 5col Kind B
- typeCode: — (shell · ?type= · clusters CTX §3)

## Inventory (slim)
| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter B |
| type | Loại TS | SearchInput | asset-type · ẩn/?type= |
| route/routeNamed/routeSegment | 3 tầng | SearchInput | road-route · tách cột |
| kmFrom/kmTo | Lý trình | Text | POINT ẩn kmTo |
| orgUnit | Đơn vị | SearchInput tree | org-unit |
| code/name/status/source | Định danh | Text/Dropdown | S-META |
| dumpSpecs.* | ATTR | Select/SearchInput/Number/Text | S-ATTR |
| lat/lng/qr/value/note | GPS/hồ sơ | Number/Money/TextArea | S-GPS |

## Screens / zones (ids only)
- List DES-GRID-A/B/C/D · LinErpListFilterBar · LinCatalogDataGrid
- Form full-page CatalogFormShell 5col · mount S-* by cluster
- peerStdUrl= http://localhost:9301/so-ts
- mfeStdUrl= http://localhost:9301/so-ts-type-grid
- reviewUrl= (Design)

## API / tasks (ids only)
- FormMode↔API: list/detail/CRUD/init …/asset/road-assets · ?type=
- entity: rmms_road_assets · RoadAssetCatalogHandler
- T-PROF / T-SEC / T-FORM / T-FILTER / T-DOC / T-CHILD — DEFER TL

## AC (slim)
- Grid: profile cột · hide-empty · route 3 cột · gap-no-source empty+toast
- Form: Thông tin chung only · S-* · LeaveConfirmModal
- cấm ERP.* · cấm invent API · cấm re-scan demo

## UNCLEAR
- (none — PO resolved analy open questions)

## Full paths
- requirement: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-type-grid/po/requirement.md
- control-hint: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-type-grid-control-hint.md
- real-data: D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/so-ts-type-grid-real-data.md
- prior compact: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-type-grid/handoff/data_analy-compact.md
- STATUS: D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-type-grid/STATUS.md
