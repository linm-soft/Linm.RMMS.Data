# handoff-compact — sa · so-ts-ditch

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `so-ts-ditch` |
| title | Sổ TS — Cống / rãnh dọc |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_8f67882d` |
| typeCode | `DITCH` |
| dump | `tbl_longitudinal` |
| clusterUi | `linear_protect` · tile `t10` |
| prefix | `CD-` (GIS `CD`) |
| formPattern | **Full page** · CatalogFormShell 5 cols |
| Kind | **B** A–D+F+H |
| solution_confirm | **approve** (autoApprove ON) |
| domain | **Asset** · `api/v1/asset/road-assets` |
| bff | proxy only · `web-bff/api/v1/asset/road-assets` |
| entity | `RoadAssetEntity` · `rmms_road_assets` · dumpSpecs P1 |
| sa_tz_gate | `tz_na` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| contentHashPrior | `sha256:8f37e4455aded2ca3a045f47a50916be0563e859af9b18bdcc59000ce4305854` |
| headerFingerprintPrior | `sha256:d6f65b07a78cc92a5d831574bf9ebbbe538d4f5de330080d3f5d997b5a17801b` |
| skillVersion | `2026.08.24.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| writtenAt | `2026-09-01T10:35:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B · Full page form · **cấm** fork
- API **giữ** `api/v1/asset/road-assets` · BFF proxy · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`
- Persist: scalars + **dumpSpecs P1** · flatten **DEFER** (GAP-DITCH-FLAT-01) · **không** Schema_* / Step 4b
- `name` optional · list primary = `ditch_type_id` · **cấm** IsWeak→đoạn (GAP-DITCH-NAME-01)
- IdCode create/import **`CD-`** · GIS short **`CD`** · unit `THOAT_NUOC` (GAP-DITCH-PREFIX-01)
- Range: **S-LOC-RANGE** km* + 4 XY dumpSpecs · **cấm** ép `"0"` · **không** S-LOC-POINT (GAP-DITCH-RANGE-01)
- LOOKUP P1 init-data: `ditchTypes` · `culvertShapes` · structure/work/materials · vitri (GAP-DITCH-LOOKUP-01)
- Form reuse S-META·S-ROUTE·S-LOC-RANGE·S-NAME·S-ATTR·S-GPS
- Alias `/so-ts-ditch` board-only optional (GAP-DITCH-ROUTE-01)
- Page filter **DITCH only** · CULVERT_L DEFER (GAP-DITCH-PEER-01)
- Gates: tz_na · xco_get_only · share_tenant
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | write |
|----|-------|-------------|-------|
| type | Loại TS | SearchInput | scalar lock DITCH |
| route* | 3 tầng tuyến | SearchInput | scalar |
| kmFrom/kmTo | Lý trình | Text | scalar · S-LOC-RANGE |
| ditch_type_id | Loại rãnh/cống | Dropdown | dumpSpecs · LOOKUP_STATIC * |
| culvert_shape_id | Hình dạng | Dropdown | dumpSpecs · LOOKUP_STATIC |
| actual_length / height_culvert | Dài/cao | Number | dumpSpecs |
| width_* / *_manhole | Rộng / hố ga | Number | dumpSpecs · hide-empty |
| structural/work/materials | KT/CT/VL | Dropdown | dumpSpecs · LOOKUP_STATIC |
| location_id | Vị trí mặt cắt | Dropdown | dumpSpecs · optional |
| province*/commune* | Địa danh | Text | dumpSpecs · hide-empty |
| lat*/lng* | XY đầu/cuối | Number | dumpSpecs RANGE |
| name | Tên | Text | scalar optional |
| lat/lng | GPS | Number | scalar S-GPS |
| code | Mã | Text ro | prefix CD- |

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HIST · S-ALIAS
- peerStdUrl=`http://localhost:9301/so-ts?type=DITCH`
- mfeStdUrl=`http://localhost:9301/so-ts-ditch`

## API / tasks (ids only)

- FormMode↔API: C/E/V/Copy ↔ POST/PUT/GET · soft DELETE · init-data · summary-by-type t10
- T-DITCH-01..10 → TL (profile · S-ATTR · Range · name · CD- · LOOKUP · Leave · alias · DOMAIN-MAP · pack)

## UNCLEAR

- none

## Full paths

- solution: `specs/so-ts-ditch/be/solution-discovery.md`
- design: `specs/so-ts-ditch/ui/design.md`
- prior compact: `handoff/design-compact.md` · `po-compact.md` · `data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | task/so-ts-ditch.md · T-DITCH-* · gates |
| Dev | profile DITCH · S-ATTR · CD- · LOOKUP · LeaveConfirm · Range |
| QA | e2e queued `/agent-qa*` |

## Cấm (compact)

ERP.* · invent API · fork AssetFormPage · Schema_* flatten P1 · Step 4b/migration/e2e/build/start:std ở SA · Write MFE
