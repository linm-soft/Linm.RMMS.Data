# handoff-compact — sa · so-ts-lighting

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `so-ts-lighting` |
| title | Sổ TS — Chiếu sáng đường |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_38f62562` |
| typeCode | `LIGHTING` |
| dump | `tbl_street_lighting` |
| clusterUi | `ops` · tile `t18` |
| prefix | `CS-` (GIS `CS`) |
| formPattern | **Full page** · CatalogFormShell 5 cols |
| Kind | **B** A–D+F |
| solution_confirm | **approve** (autoApprove ON) |
| domain | **Asset** · `api/v1/asset/road-assets` |
| bff | proxy only · `web-bff/api/v1/asset/road-assets` |
| entity | `RoadAssetEntity` · `rmms_road_assets` · dumpSpecs P1 |
| sa_tz_gate | `tz_na` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| contentHashPrior | `sha256:d5601a5c6b83c29e68bbac0fe8ef8a880616a4fc5b053a6480fb82501e90a2aa` |
| headerFingerprintPrior | `sha256:ca587f46bfa8c91bf0f8d30de24bd8e8db206285936ebdfa3ccc7cc43a303316` |
| skillVersion | `2026.08.24.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| writtenAt | `2026-09-02T03:30:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B · Full page form · **cấm** fork
- API **giữ** `api/v1/asset/road-assets` · BFF proxy · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`
- Persist: scalars + **dumpSpecs P1** · flatten **DEFER** (GAP-LT-FLAT-01) · **không** Schema_* / Step 4b
- `name` optional · mô tả hệ thống · **cấm** IsWeak→route (GAP-LT-NAME-01)
- IdCode create/import **`CS-`** · GIS short **`CS`** (GAP-LT-PREFIX-01)
- Point: **S-LOC-POINT** kmFrom only · **ẩn** kmTo · **cấm** ép `"0"`
- LOOKUP P1 init-data: `lightingManagementUnits[]` · `bulbTypes[]` · `transformingStationTypes[]` · `controlMethods[]` + `vitriOptions` (GAP-LT-LOOKUP-01)
- dumpSpecLabels: management · bulb · MBA · control · vitri
- Grid: hide type/kmTo/SL/ĐVT · hide-empty số cột khi 0/null · **cấm** Solar*/LampWatt (GAP-AK32-07)
- Form reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS
- Alias `/so-ts-lighting` board-only optional (GAP-LT-ROUTE-01)
- LeaveConfirmModal + useAlert (GAP-LT-LEAVE-01)
- Gates: tz_na · xco_get_only · share_tenant
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | write |
|----|-------|-------------|-------|
| type | Loại TS | SearchInput | scalar lock LIGHTING |
| route* | 3 tầng tuyến | SearchInput | scalar |
| kmFrom | Lý trình | Text | scalar · S-LOC-POINT |
| management_id | ĐV QL sử dụng | Dropdown | dumpSpecs · LOOKUP_STATIC · grid ON |
| number_pole_light_bulb | Số cột đèn | Number | dumpSpecs · hide-empty OK |
| number_light | Số đèn | Number | dumpSpecs · hide-empty OK |
| bulb_type_id | Loại bóng đèn | Dropdown | dumpSpecs · LOOKUP_STATIC |
| type_transforming_station_id | Loại trạm biến áp | Dropdown | dumpSpecs · LOOKUP_STATIC |
| capacity_transformer | Công suất MBA (kVA) | Number/Text | dumpSpecs |
| number_control_box | Số tủ điều khiển | Number | dumpSpecs · hide-empty OK |
| control_method_id | Phương thức điều khiển | Dropdown | dumpSpecs · LOOKUP_STATIC |
| vitri | Mặt cắt | Dropdown | dumpSpecs · L/R/C |
| name | Tên hệ thống | Text | scalar optional |
| lat/lng | GPS | Number | scalar S-GPS |
| code | Mã | Text ro | prefix CS- |

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HIST · S-ALIAS
- peerStdUrl=`http://localhost:9301/so-ts?type=LIGHTING`
- mfeStdUrl=`http://localhost:9301/so-ts-lighting`

## API / tasks (ids only)

- FormMode↔API: C/E/V/Copy ↔ POST/PUT/GET · soft DELETE · init-data · summary-by-type t18
- T-LT-01..10 → TL (profile · S-ATTR · Point · name · CS- · LOOKUP · Leave · alias · DOMAIN-MAP · pack)

## UNCLEAR

- none

## Full paths

- solution: `specs/so-ts-lighting/be/solution-discovery.md`
- design: `specs/so-ts-lighting/ui/design.md`
- prior compact: `handoff/design-compact.md` · `po-compact.md` · `data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | task/so-ts-lighting.md · T-LT-* · gates |
| Dev | profile LIGHTING · S-ATTR · CS- · LOOKUP · LeaveConfirm · Point |
| QA | e2e queued `/agent-qa*` |

## Cấm (compact)

ERP.* · invent API · fork AssetFormPage · Schema_* flatten P1 · Step 4b/migration/e2e/build/start:std ở SA · Write MFE · Solar*/LampWatt · re-scan demo
