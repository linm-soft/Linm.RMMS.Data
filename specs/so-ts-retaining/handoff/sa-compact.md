# handoff-compact — sa · so-ts-retaining

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `so-ts-retaining` |
| title | Sổ TS — Kè / tường chắn |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_d63d88eb` |
| typeCode | `RETAINING` |
| dump | `tbl_retaining_wall` |
| clusterUi | `linear_protect` · tile `t20` |
| prefix | `KE-` (GIS `KE`) |
| formPattern | **Full page** · CatalogFormShell 5 cols |
| Kind | **B** A–D+F+H |
| solution_confirm | **approve** (autoApprove ON) |
| domain | **Asset** · `api/v1/asset/road-assets` |
| bff | proxy only · `web-bff/api/v1/asset/road-assets` |
| entity | `RoadAssetEntity` · `rmms_road_assets` · dumpSpecs P1 |
| sa_tz_gate | `tz_na` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| contentHashPrior | `sha256:81662f66f48ea982b12b06d93e0716f7449b1356d169541e62a40b377178c061` |
| headerFingerprintPrior | `sha256:a547b71c8847f3079bd462364e95279a8388e5c6de64aaf1b403d77f1e011707` |
| skillVersion | `2026.08.24.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| writtenAt | `2026-09-02T01:00:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B · Full page form · **cấm** fork
- API **giữ** `api/v1/asset/road-assets` · BFF proxy · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`
- Persist: scalars + **dumpSpecs P1** · flatten **DEFER** (GAP-RETAINING-FLAT-01) · **không** Schema_* / Step 4b
- `name` optional · list primary = `retaining_wall_type_id` · **cấm** IsWeak→đoạn (GAP-RETAINING-NAME-01)
- IdCode create/import **`KE-`** · GIS short **`KE`** (GAP-RETAINING-PREFIX-01)
- Range: **S-LOC-RANGE** km* + 4 XY dumpSpecs · **cấm** ép `"0"` · **không** S-LOC-POINT (GAP-RETAINING-RANGE-01)
- LOOKUP P1 init-data: `retainingWallTypes[]` · `materialTypes[]` · `foundationTypes[]` · `locationOptions[]` · `dumpAssetTypes[]` (GAP-RETAINING-LOOKUP-01)
- dumpSpecLabels đủ 8 key RETAINING (GAP-RETAINING-SPEC-01)
- dump `asset_type` hide-empty · ≠ entity type (GAP-RETAINING-ASSETTYPE-01)
- Form reuse S-META·S-ROUTE·S-LOC-RANGE·S-NAME·S-ATTR·S-GPS
- Alias `/so-ts-retaining` board-only optional (GAP-RETAINING-ROUTE-01)
- Peer: RETAINING only · SLOPE_PROTECT riêng (GAP-RETAINING-PEER-01)
- Gates: tz_na · xco_get_only · share_tenant
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | write |
|----|-------|-------------|-------|
| type | Loại TS | SearchInput | scalar lock RETAINING |
| route* | 3 tầng tuyến | SearchInput | scalar |
| kmFrom/kmTo | Lý trình | Text | scalar · S-LOC-RANGE |
| retaining_wall_type_id | Loại tường chắn | Dropdown | dumpSpecs · LOOKUP_STATIC * · grid primary |
| material_type_id | Loại vật liệu | Dropdown | dumpSpecs · LOOKUP_STATIC |
| actual_protected | Chiều dài (m) | Number | dumpSpecs |
| average_height | Chiều cao TB (m) | Number | dumpSpecs |
| number | Số phân đoạn | Number | dumpSpecs |
| foundation_type_id | Loại móng | Dropdown | dumpSpecs · LOOKUP_STATIC |
| location_id | Vị trí mặt cắt | Dropdown | dumpSpecs · hide-empty |
| asset_type | Loại TS (dump) | Dropdown | dumpSpecs · hide-empty ≠ entity |
| lat*/lng* | XY đầu/cuối | Number | dumpSpecs RANGE |
| name | Tên | Text | scalar optional |
| lat/lng | GPS | Number | scalar S-GPS |
| code | Mã | Text ro | prefix KE- |

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HIST · S-ALIAS
- peerStdUrl=`http://localhost:9301/so-ts?type=RETAINING`
- mfeStdUrl=`http://localhost:9301/so-ts-retaining`

## API / tasks (ids only)

- FormMode↔API: C/E/V/Copy ↔ POST/PUT/GET · soft DELETE · init-data · summary-by-type t20
- T-KE-01..10 → TL (profile · S-ATTR · Range · name · KE- · LOOKUP · Leave · alias · DOMAIN-MAP · pack)

## UNCLEAR

- none

## Full paths

- solution: `specs/so-ts-retaining/be/solution-discovery.md`
- design: `specs/so-ts-retaining/ui/design.md`
- prior compact: `handoff/design-compact.md` · `po-compact.md` · `handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | task/so-ts-retaining.md · T-KE-* · gates |
| Dev | profile RETAINING · S-ATTR · KE- · LOOKUP · LeaveConfirm · Range |
| QA | e2e queued `/agent-qa*` |

## Cấm (compact)

ERP.* · invent API · fork AssetFormPage · Schema_* flatten P1 · Step 4b/migration/e2e/build/start:std ở SA · Write MFE · gộp SLOPE_PROTECT
