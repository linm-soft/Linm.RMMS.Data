# handoff-compact — sa · so-ts-row-util

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `so-ts-row-util` |
| title | Sổ TS — CT HTKT trong HL |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_39043d1b` |
| typeCode | `ROW_UTIL` |
| dump | `tbl_infrastructure_row` |
| clusterUi | `land` · tile `t08` |
| prefix | `HT-` (GIS `HT` giữ) |
| formPattern | **Full page** · CatalogFormShell 5 cols |
| Kind | **B** A–D+F+H |
| solution_confirm | **approve** (autoApprove ON) |
| domain | **Asset** · `api/v1/asset/road-assets` |
| bff | proxy only · `web-bff/api/v1/asset/road-assets` |
| entity | `RoadAssetEntity` · `rmms_road_assets` · dumpSpecs P1 |
| sa_tz_gate | `tz_na` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| contentHashPrior | `sha256:87269e623cca6623a6c91b030aaf2c2cc6e3dd9c53134ee4d08a5d110f4e96da` |
| headerFingerprintPrior | `sha256:ab5d9a1a2d5109430727d85edc500e6d1374778a4b16f6f321324e1ffa67aa24` |
| skillVersion | `2026.08.24.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| writtenAt | `2026-09-02T03:58:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B · Full page form · **cấm** fork
- API **giữ** `api/v1/asset/road-assets` · BFF proxy · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`
- Persist: scalars + **dumpSpecs P1** · flatten **DEFER** (GAP-ROWUTIL-FLAT-01) · **không** Schema_* / Step 4b
- `name` ← `tencongtrinh_htk` · trống OK · **cấm** IsWeak→đoạn (GAP-ROWUTIL-NAME-01)
- IdCode create/import **`HT-`** · GIS short **`HT`** giữ (GAP-ROWUTIL-PREFIX-01)
- Range: **S-LOC-RANGE** · **hiện** kmFrom+kmTo · optional khi trống · **cấm** ép `"0"` · **không** S-LOC-POINT (GAP-ROWUTIL-RANGE-01)
- LOOKUP P1 init-data: `rowUtilWorkTypes` · `rowUtilLocatedWithin` · `rowUtilProtectionTypes` · `rowUtilSupportTypes` · `rowUtilHiringStatuses` · `rowUtilCrossSections` (GAP-ROWUTIL-LOOKUP-01)
- Form reuse S-META·S-ROUTE·S-LOC-RANGE·S-NAME·S-ATTR·S-GPS · dump key `protection_tructure` giữ typo
- Alias `/so-ts-row-util` board-only optional (GAP-ROWUTIL-ROUTE-01)
- Gates: tz_na · xco_get_only · share_tenant
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | write |
|----|-------|-------------|-------|
| type | Loại TS | SearchInput | scalar lock ROW_UTIL |
| route* | 3 tầng tuyến | SearchInput | scalar |
| kmFrom/kmTo | Lý trình đầu/cuối | Text | scalar · hiện cả hai |
| name | Công trình HTKT | Text | scalar ← tencongtrinh_htk |
| type_work_id | Loại công trình | Dropdown | dumpSpecs |
| length/number_post | Dài / Số trụ | Number | dumpSpecs · hide-empty |
| owner | Chủ sở hữu | Text | dumpSpecs |
| located_within_id | Trong phạm vi HL | Dropdown | dumpSpecs |
| protection_tructure | CT bảo vệ | Text | dumpSpecs (typo key) |
| type_protection_structure_id | Loại KC bảo vệ | Dropdown | dumpSpecs |
| support_type_id | Loại giá đỡ | Dropdown | dumpSpecs |
| distance_road_center/distance_between_supports | KC tim/giá | Number | dumpSpecs · hide-empty |
| status_hiring_is_within_row | TT thuê HL | Dropdown | dumpSpecs |
| build_location | Mặt cắt | Dropdown | dumpSpecs |
| lat/lng | GPS | Number | scalar |

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HIST · S-ALIAS
- peerStdUrl=`http://localhost:9301/so-ts?type=ROW_UTIL`
- mfeStdUrl=`http://localhost:9301/so-ts-row-util`

## API / tasks (ids only)

- FormMode↔API: C/E/V/Copy ↔ POST/PUT/GET · soft DELETE · init-data · summary-by-type t08
- T-ROWUTIL-01..10 → TL (profile · S-ATTR · Range · name · HT- · LOOKUP · Leave · alias · DOMAIN-MAP · pack)

## UNCLEAR

- none

## Full paths

- solution: `specs/so-ts-row-util/be/solution-discovery.md`
- design: `specs/so-ts-row-util/ui/design.md`
- prior compact: `handoff/design-compact.md` · `po-compact.md` · `data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | task/so-ts-row-util.md · T-ROWUTIL-* · gates |
| Dev | profile ROW_UTIL · S-ATTR · HT- · LOOKUP · LeaveConfirm · Range |
| QA | e2e queued `/agent-qa*` |

## Cấm (compact)

ERP.* · invent API · fork AssetFormPage · Schema_* flatten P1 · Step 4b/migration/e2e/build/start:std ở SA · Write MFE
