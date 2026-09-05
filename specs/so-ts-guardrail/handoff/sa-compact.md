# handoff-compact — sa · so-ts-guardrail

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `so-ts-guardrail` |
| title | Sổ TS — Hộ lan / tôn sóng |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_4fe4e6c8` |
| typeCode | `GUARDRAIL` |
| dump | `tbl_guardrail` |
| clusterUi | `linear_protect` · tile `t17` |
| prefix | `HL-` (GIS `HL`) |
| formPattern | **Full page** · CatalogFormShell 5 cols |
| Kind | **B** A–D+F+H |
| solution_confirm | **approve** (autoApprove ON) |
| domain | **Asset** · `api/v1/asset/road-assets` |
| bff | proxy only · `web-bff/api/v1/asset/road-assets` |
| entity | `RoadAssetEntity` · `rmms_road_assets` · dumpSpecs P1 |
| sa_tz_gate | `tz_na` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| contentHashPrior | `sha256:d0deaacc164574342c2d10d3b3e7f683ad5df9bbefa2fd3072d92c7af8533cc8` |
| headerFingerprintPrior | `sha256:0b2e8af0ce459112fb3201d0f7a3f58f90a6d5cf139dd50f3d2570b709fd9e75` |
| skillVersion | `2026.08.24.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| writtenAt | `2026-09-01T16:30:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B · Full page form · **cấm** fork
- API **giữ** `api/v1/asset/road-assets` · BFF proxy · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`
- Persist: scalars + **dumpSpecs P1** · flatten **DEFER** (GAP-GUARDRAIL-FLAT-01) · **không** Schema_* / Step 4b
- `name` optional · list primary = `type_guardrail` · **cấm** IsWeak→đoạn (GAP-GUARDRAIL-NAME-01)
- IdCode create/import **`HL-`** · GIS short **`HL`** (GAP-GUARDRAIL-PREFIX-01)
- Range: **S-LOC-RANGE** km* + 4 XY dumpSpecs · **cấm** ép `"0"` · **không** S-LOC-POINT (GAP-GUARDRAIL-RANGE-01)
- LOOKUP P1 init-data: `guardrailTypes[]` · `guardrailMaterials[]` · `installationPurposes[]` + `vitriOptions` (GAP-GUARDRAIL-LOOKUP-01)
- `reflective`=Number (SL) · dumpSpecLabels gồm `installation_purpose_id`
- Form reuse S-META·S-ROUTE·S-LOC-RANGE·S-NAME·S-ATTR·S-GPS
- Alias `/so-ts-guardrail` board-only optional (GAP-GUARDRAIL-ROUTE-01)
- Peer: GUARDRAIL only · NOISE_BARRIER riêng (GAP-GUARDRAIL-PEER-01)
- Gates: tz_na · xco_get_only · share_tenant
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | write |
|----|-------|-------------|-------|
| type | Loại TS | SearchInput | scalar lock GUARDRAIL |
| route* | 3 tầng tuyến | SearchInput | scalar |
| kmFrom/kmTo | Lý trình | Text | scalar · S-LOC-RANGE |
| type_guardrail | Loại hộ lan | Dropdown | dumpSpecs · LOOKUP_STATIC * · grid primary |
| material_id | Vật liệu | Dropdown | dumpSpecs · LOOKUP_STATIC |
| reflective | SL phản quang | Number | dumpSpecs |
| installation_purpose_id | Mục đích lắp đặt | Dropdown | dumpSpecs · LOOKUP_STATIC |
| actual_length | Chiều dài (m) | Number | dumpSpecs |
| installed_location_id | Vị trí mặt cắt | Dropdown | dumpSpecs · hide-empty |
| lat*/lng* | XY đầu/cuối | Number | dumpSpecs RANGE |
| name | Tên | Text | scalar optional |
| lat/lng | GPS | Number | scalar S-GPS |
| code | Mã | Text ro | prefix HL- |

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HIST · S-ALIAS
- peerStdUrl=`http://localhost:9301/so-ts?type=GUARDRAIL`
- mfeStdUrl=`http://localhost:9301/so-ts-guardrail`

## API / tasks (ids only)

- FormMode↔API: C/E/V/Copy ↔ POST/PUT/GET · soft DELETE · init-data · summary-by-type t17
- T-GR-01..10 → TL (profile · S-ATTR · Range · name · HL- · LOOKUP · Leave · alias · DOMAIN-MAP · pack)

## UNCLEAR

- none

## Full paths

- solution: `specs/so-ts-guardrail/be/solution-discovery.md`
- design: `specs/so-ts-guardrail/ui/design.md`
- prior compact: `handoff/design-compact.md` · `po-compact.md` · `data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | task/so-ts-guardrail.md · T-GR-* · gates |
| Dev | profile GUARDRAIL · S-ATTR · HL- · LOOKUP · LeaveConfirm · Range |
| QA | e2e queued `/agent-qa*` |

## Cấm (compact)

ERP.* · invent API · fork AssetFormPage · Schema_* flatten P1 · Step 4b/migration/e2e/build/start:std ở SA · Write MFE · gộp NOISE_BARRIER
