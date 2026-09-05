# handoff-compact — sa · so-ts-land-row

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `so-ts-land-row` |
| title | Sổ TS — Đất thuộc TS HT |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_6047e0c0` |
| typeCode | `LAND_ROW` |
| dump | `tbl_land_btra` |
| clusterUi | `land` · tile `t33` |
| prefix | `DT-` (GIS `HT` giữ) |
| formPattern | **Full page** · CatalogFormShell 5 cols |
| Kind | **B** A–D+F+H |
| solution_confirm | **approve** (autoApprove ON) |
| domain | **Asset** · `api/v1/asset/road-assets` |
| bff | proxy only · `web-bff/api/v1/asset/road-assets` |
| entity | `RoadAssetEntity` · `rmms_road_assets` · dumpSpecs P1 |
| sa_tz_gate | `tz_na` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| contentHashPrior | `sha256:bc698a4aaec65f07d252d2ba4a3997574faa3c51c53e84e26990734b423a7849` |
| headerFingerprintPrior | `sha256:54bcf381ee50402cf714c2ff1097c2db462e8988ff0d6301baaab06194b3a0fb` |
| skillVersion | `2026.08.24.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| writtenAt | `2026-09-01T08:45:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B · Full page form · **cấm** fork
- API **giữ** `api/v1/asset/road-assets` · BFF proxy · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`
- Persist: scalars + **dumpSpecs P1** · flatten **DEFER** (GAP-LAND-FLAT-01) · **không** Schema_* / Step 4b
- `name` ← `construction` · trống OK · **cấm** IsWeak→đoạn (GAP-LAND-NAME-01)
- IdCode create/import **`DT-`** · GIS short **`HT`** giữ (GAP-LAND-PREFIX-01)
- Range: **S-LOC-RANGE** · ẩn `kmTo` fill 0 · **cấm** ép `"0"` · **không** S-LOC-POINT (GAP-LAND-RANGE-01)
- LOOKUP P1 init-data: `landLotStatuses` · `landExploitTypes` · `landAccessPavementTypes` · `landCrossSections` · bool `access_road` (GAP-LAND-LOOKUP-01)
- Form reuse S-META·S-ROUTE·S-LOC-RANGE·S-NAME·S-ATTR·S-GPS · dump key `under_managemen` giữ typo
- Alias `/so-ts-land-row` board-only optional (GAP-LAND-ROUTE-01)
- Gates: tz_na · xco_get_only · share_tenant
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | write |
|----|-------|-------------|-------|
| type | Loại TS | SearchInput | scalar lock LAND_ROW |
| route* | 3 tầng tuyến | SearchInput | scalar |
| kmFrom/kmTo | Lý trình | Text | scalar · kmTo ẩn fill 0 |
| name | CT trên đất | Text | scalar ← construction |
| status_land_lot_id | TT thửa | Dropdown | dumpSpecs |
| under_managemen | CQ chủ quản | Text | dumpSpecs (typo key) |
| under_operation | CQ khai thác | Text | dumpSpecs |
| exploited_id | HT khai thác | Dropdown | dumpSpecs |
| length/width/total_area | Kích thước/DT | Number | dumpSpecs |
| pavement_type_access_road_id | KC mặt ĐV | Dropdown | dumpSpecs |
| access_road | Có đường vào | Dropdown bool | dumpSpecs |
| location_id | Mặt cắt | Dropdown | dumpSpecs |
| lat/lng | GPS | Number | scalar |

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HIST · S-ALIAS
- peerStdUrl=`http://localhost:9301/so-ts?type=LAND_ROW`
- mfeStdUrl=`http://localhost:9301/so-ts-land-row`

## API / tasks (ids only)

- FormMode↔API: C/E/V/Copy ↔ POST/PUT/GET · soft DELETE · init-data · summary-by-type t33
- T-LAND-01..10 → TL (profile · S-ATTR · Range · name · DT- · LOOKUP · Leave · alias · DOMAIN-MAP · pack)

## UNCLEAR

- none

## Full paths

- solution: `specs/so-ts-land-row/be/solution-discovery.md`
- design: `specs/so-ts-land-row/ui/design.md`
- prior compact: `handoff/design-compact.md` · `po-compact.md` · `data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | task/so-ts-land-row.md · T-LAND-* · gates |
| Dev | profile LAND_ROW · S-ATTR · DT- · LOOKUP · LeaveConfirm · Range |
| QA | e2e queued `/agent-qa*` |

## Cấm (compact)

ERP.* · invent API · fork AssetFormPage · Schema_* flatten P1 · Step 4b/migration/e2e/build/start:std ở SA · Write MFE
