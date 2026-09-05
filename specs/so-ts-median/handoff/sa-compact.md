# handoff-compact — sa · so-ts-median

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `so-ts-median` |
| title | Sổ TS — Dải phân cách |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_1094a2ca` |
| typeCode | `MEDIAN` |
| dump | `tbl_median_strip` |
| clusterUi | `linear_protect` · tile `t11` |
| prefix | `PC-` (GIS `GPC`) |
| formPattern | **Full page** · CatalogFormShell 5 cols |
| Kind | **B** A–D+F+H |
| solution_confirm | **approve** (autoApprove ON) |
| domain | **Asset** · `api/v1/asset/road-assets` |
| bff | proxy only · `web-bff/api/v1/asset/road-assets` |
| entity | `RoadAssetEntity` · `rmms_road_assets` · dumpSpecs P1 |
| sa_tz_gate | `tz_na` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| contentHashPrior | `sha256:19145538a01ec132f8d5ebead0c9111d621746cb789c26bf1f6819c5c932c5e5` |
| headerFingerprintPrior | `sha256:8ecee9407c93e12178225c668342cdfb13d1b721ae9ea4b3b7241c5c840481a7` |
| skillVersion | `2026.08.24.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| writtenAt | `2026-09-01T17:20:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B · Full page form · **cấm** fork
- API **giữ** `api/v1/asset/road-assets` · BFF proxy · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`
- Persist: scalars + **dumpSpecs P1** · flatten **DEFER** (GAP-MEDIAN-FLAT-01) · **không** Schema_* / Step 4b
- `name` optional · list primary = `type_median_strip_id` · **cấm** IsWeak→đoạn (GAP-MEDIAN-NAME-01)
- IdCode create/import **`PC-`** · GIS short **`GPC`** (GAP-MEDIAN-PREFIX-01)
- Range: **S-LOC-RANGE** km* + 4 XY dumpSpecs · **cấm** ép `"0"` · **không** S-LOC-POINT (GAP-MEDIAN-RANGE-01)
- LOOKUP P1 init-data: `medianStripTypes[]` · `fenceMaterials[]` · `medianLocations[]` (GAP-MEDIAN-LOOKUP-01)
- `planting_grass`/`planting_tree`=Select bool (GAP-MEDIAN-BOOL-01)
- dumpSpecLabels đủ **10 key** MEDIAN (GAP-MEDIAN-SPEC-01)
- Form reuse S-META·S-ROUTE·S-LOC-RANGE·S-NAME·S-ATTR·S-GPS
- Alias `/so-ts-median` board-only optional (GAP-MEDIAN-ROUTE-01)
- Peer: MEDIAN only · linear_protect packs riêng
- Gates: tz_na · xco_get_only · share_tenant
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | write |
|----|-------|-------------|-------|
| type | Loại TS | SearchInput | scalar lock MEDIAN |
| route* | 3 tầng tuyến | SearchInput | scalar |
| kmFrom/kmTo | Lý trình | Text | scalar · S-LOC-RANGE |
| type_median_strip_id | Loại dải | Dropdown | dumpSpecs · LOOKUP_STATIC * · grid primary |
| length_median_strip | Chiều dài (m) | Number | dumpSpecs |
| width_median_strip | Chiều rộng (m) | Number | dumpSpecs |
| planting_grass | Trồng cỏ | Select bool | dumpSpecs |
| planting_grass_area | DT cỏ (m²) | Number | dumpSpecs · hide-empty |
| planting_tree | Trồng cây | Select bool | dumpSpecs |
| number_tree | Số cây | Number | dumpSpecs · hide-empty |
| height_fence | Cao hàng rào (m) | Number | dumpSpecs |
| material_type_fence_id | VL hàng rào | Dropdown | dumpSpecs · LOOKUP_STATIC |
| location_median_strip_id | Vị trí dải | Dropdown | dumpSpecs · hide-empty |
| lat*/lng* | XY đầu/cuối | Number | dumpSpecs RANGE |
| name | Tên | Text | scalar optional |
| lat/lng | GPS | Number | scalar S-GPS |
| code | Mã | Text ro | prefix PC- |

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HIST · S-ALIAS
- peerStdUrl=`http://localhost:9301/so-ts?type=MEDIAN`
- mfeStdUrl=`http://localhost:9301/so-ts-median`

## API / tasks (ids only)

- FormMode↔API: C/E/V/Copy ↔ POST/PUT/GET · soft DELETE · init-data · summary-by-type t11
- T-MD-01..10 → TL (profile · S-ATTR · Range · name · PC- · LOOKUP · Leave · alias · DOMAIN-MAP · pack)

## UNCLEAR

- none

## Full paths

- solution: `specs/so-ts-median/be/solution-discovery.md`
- design: `specs/so-ts-median/ui/design.md`
- prior compact: `handoff/design-compact.md` · `po-compact.md` · `data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | task/so-ts-median.md · T-MD-* · gates |
| Dev | profile MEDIAN · S-ATTR · PC- · LOOKUP · LeaveConfirm · Range · dumpSpecLabels |
| QA | e2e queued `/agent-qa*` |

## Cấm (compact)

ERP.* · invent API · fork AssetFormPage · Schema_* flatten P1 · Step 4b/migration/e2e/build/start:std ở SA · Write MFE · gộp peer linear_protect
