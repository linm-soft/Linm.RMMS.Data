# handoff-compact — sa · so-ts-noise-barrier

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `so-ts-noise-barrier` |
| title | Sổ TS — Rào chắn ồn |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_f2c991b9` |
| typeCode | `NOISE_BARRIER` |
| dump | `tbl_noise_barrier` |
| clusterUi | `linear_protect` · tile `t25` |
| prefix | `TC-` (GIS `TC`) |
| formPattern | **Full page** · CatalogFormShell 5 cols |
| Kind | **B** A–D+F+H |
| solution_confirm | **approve** (autoApprove ON) |
| domain | **Asset** · `api/v1/asset/road-assets` |
| bff | proxy only · `web-bff/api/v1/asset/road-assets` |
| entity | `RoadAssetEntity` · `rmms_road_assets` · dumpSpecs P1 |
| sa_tz_gate | `tz_na` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| contentHashPrior | `sha256:5167bd802b25b82d0d99f0194c1bb059f8f5862747e2035a61e451fd8ae0b7e3` |
| headerFingerprintPrior | `sha256:f557d62410b865aa3f70d298e63448fb481dbfdbfddd3d4758f7e9a6a0fd18f5` |
| skillVersion | `2026.08.24.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| writtenAt | `2026-09-01T09:55:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B · Full page form · **cấm** fork
- API **giữ** `api/v1/asset/road-assets` · BFF proxy · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`
- Persist: scalars + **dumpSpecs P1** · flatten **DEFER** (GAP-NB-FLAT-01) · **không** Schema_* / Step 4b
- `name` optional · list primary = `type_noise_barrier_id` · **cấm** IsWeak→đoạn (GAP-NB-NAME-01)
- IdCode create/import **`TC-`** · GIS short **`TC`** (GAP-NB-PREFIX-01)
- Range: **S-LOC-RANGE** km* + 4 XY dumpSpecs · **cấm** ép `"0"` · **không** S-LOC-POINT (GAP-NB-RANGE-01)
- LOOKUP P1 init-data: `noiseBarrierTypes[]` ← `type_noise_barrier_id` (GAP-NB-LOOKUP-01)
- Form reuse S-META·S-ROUTE·S-LOC-RANGE·S-NAME·S-ATTR·S-GPS
- Alias `/so-ts-noise-barrier` board-only optional (GAP-NB-ROUTE-01)
- Gates: tz_na · xco_get_only · share_tenant
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | write |
|----|-------|-------------|-------|
| type | Loại TS | SearchInput | scalar lock NOISE_BARRIER |
| route* | 3 tầng tuyến | SearchInput | scalar |
| kmFrom/kmTo | Lý trình | Text | scalar · S-LOC-RANGE |
| type_noise_barrier_id | Loại tường | Dropdown | dumpSpecs · LOOKUP_STATIC * |
| average_height | Cao TB (m) | Number | dumpSpecs |
| actual_length | Dài thực tế (m) | Number | dumpSpecs |
| vitri | Vị trí | Dropdown | dumpSpecs · optional |
| province*/commune* | Địa danh | Text | dumpSpecs · hide-empty |
| lat*/lng* | XY đầu/cuối | Number | dumpSpecs RANGE |
| name | Tên | Text | scalar optional |
| lat/lng | GPS | Number | scalar S-GPS |
| code | Mã | Text ro | prefix TC- |

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HIST · S-ALIAS
- peerStdUrl=`http://localhost:9301/so-ts?type=NOISE_BARRIER`
- mfeStdUrl=`http://localhost:9301/so-ts-noise-barrier`

## API / tasks (ids only)

- FormMode↔API: C/E/V/Copy ↔ POST/PUT/GET · soft DELETE · init-data · summary-by-type t25
- T-NB-01..10 → TL (profile · S-ATTR · Range · name · TC- · LOOKUP · Leave · alias · DOMAIN-MAP · pack)

## UNCLEAR

- none

## Full paths

- solution: `specs/so-ts-noise-barrier/be/solution-discovery.md`
- design: `specs/so-ts-noise-barrier/ui/design.md`
- prior compact: `handoff/design-compact.md` · `po-compact.md` · `data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | task/so-ts-noise-barrier.md · T-NB-* · gates |
| Dev | profile NOISE_BARRIER · S-ATTR · TC- · LOOKUP · LeaveConfirm · Range |
| QA | e2e queued `/agent-qa*` |

## Cấm (compact)

ERP.* · invent API · fork AssetFormPage · Schema_* flatten P1 · Step 4b/migration/e2e/build/start:std ở SA · Write MFE
