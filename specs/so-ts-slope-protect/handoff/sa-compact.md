# handoff-compact — sa · so-ts-slope-protect

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `so-ts-slope-protect` |
| title | Sổ TS — Bảo vệ mái dốc |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_6fb60810` |
| typeCode | `SLOPE_PROTECT` |
| dump | `tbl_slope` |
| clusterUi | `linear_protect` · tile `t12` |
| prefix | `MD-` (GIS `MD`) |
| formPattern | **Full page** · CatalogFormShell 5 cols |
| Kind | **B** A–D+F+H |
| solution_confirm | **approve** (autoApprove ON) |
| domain | **Asset** · `api/v1/asset/road-assets` |
| bff | proxy only · `web-bff/api/v1/asset/road-assets` |
| entity | `RoadAssetEntity` · `rmms_road_assets` · dumpSpecs P1 |
| sa_tz_gate | `tz_na` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| contentHashPrior | `sha256:52501076e559261162c4741e46e0826cab2059143221abe3e32b1ca279253294` |
| headerFingerprintPrior | `sha256:e90b5bb79a2daf9804fa5d3f7d369378a256efa38f7efaa4ba784bce11e90bb6` |
| skillVersion | `2026.08.24.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| writtenAt | `2026-09-02T01:45:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B · Full page form · **cấm** fork
- API **giữ** `api/v1/asset/road-assets` · BFF proxy · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`
- Persist: scalars + **dumpSpecs P1** · flatten **DEFER** (GAP-SLOPE-FLAT-01) · **không** Schema_* / Step 4b
- `name` optional · list primary = `protection_type_id` · **cấm** IsWeak→đoạn (GAP-SLOPE-NAME-01)
- IdCode create/import **`MD-`** · GIS short **`MD`** · pavement collision mitigated by tenant+type filter (GAP-SLOPE-PREFIX-01)
- Range: **S-LOC-RANGE** km* + 4 XY dumpSpecs · **cấm** ép `"0"` · **không** S-LOC-POINT (GAP-SLOPE-RANGE-01)
- LOOKUP P1 init-data: `protectionTypes[]` · `slopeClassifications[]` · `locationOptions[]` (GAP-SLOPE-LOOKUP-01)
- dumpSpecLabels đủ 5 key SLOPE_PROTECT (GAP-SLOPE-SPEC-01)
- Form reuse S-META·S-ROUTE·S-LOC-RANGE·S-NAME·S-ATTR·S-GPS
- Alias `/so-ts-slope-protect` board-only optional (GAP-SLOPE-ROUTE-01)
- Peer: SLOPE_PROTECT only · RETAINING riêng · layer `mai-doc` (GAP-SLOPE-PEER-01)
- Gates: tz_na · xco_get_only · share_tenant
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | write |
|----|-------|-------------|-------|
| type | Loại TS | SearchInput | scalar lock SLOPE_PROTECT |
| route* | 3 tầng tuyến | SearchInput | scalar |
| kmFrom/kmTo | Lý trình | Text | scalar · S-LOC-RANGE |
| protection_type_id | Kiểu bảo vệ | Dropdown | dumpSpecs · LOOKUP_STATIC * · grid primary |
| slope_classification_id | Phân loại mái dốc | Dropdown | dumpSpecs · LOOKUP_STATIC |
| actual_protected | Chiều dài BV, gia cố (m) | Number | dumpSpecs |
| average_height | Chiều cao TB (m) | Number | dumpSpecs |
| location_id | Vị trí cắt ngang | Dropdown | dumpSpecs · hide-empty |
| lat*/lng* | XY đầu/cuối | Number | dumpSpecs RANGE |
| name | Tên | Text | scalar optional |
| lat/lng | GPS | Number | scalar S-GPS |
| code | Mã | Text ro | prefix MD- |

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HIST · S-ALIAS
- peerStdUrl=`http://localhost:9301/so-ts?type=SLOPE_PROTECT`
- mfeStdUrl=`http://localhost:9301/so-ts-slope-protect`

## API / tasks (ids only)

- FormMode↔API: C/E/V/Copy ↔ POST/PUT/GET · soft DELETE · init-data · summary-by-type t12
- T-MD-01..10 → TL (profile · S-ATTR · Range · name · MD- · LOOKUP · Leave · alias · DOMAIN-MAP · pack)

## UNCLEAR

- none

## Full paths

- solution: `specs/so-ts-slope-protect/be/solution-discovery.md`
- design: `specs/so-ts-slope-protect/ui/design.md`
- prior compact: `handoff/design-compact.md` · `po-compact.md` · `data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | task/so-ts-slope-protect.md · T-MD-* · gates |
| Dev | profile SLOPE_PROTECT · S-ATTR · MD- · LOOKUP · LeaveConfirm · Range |
| QA | e2e queued `/agent-qa*` |

## Cấm (compact)

ERP.* · invent API · fork AssetFormPage · Schema_* flatten P1 · Step 4b/migration/e2e/build/start:std ở SA · Write MFE · gộp RETAINING
