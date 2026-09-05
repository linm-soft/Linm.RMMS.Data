# handoff-compact — po · so-ts-bus-stop

| | |
|--|--|
| schemaVersion | `1` |
| role | `po` |
| feature | `so-ts-bus-stop` |
| title | Sổ TS — Điểm dừng xe buýt |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_1e861241` |
| typeCode | `BUS_STOP` |
| dump | `tbl_bus_stops` |
| clusterUi | `stop` · tile `t13` |
| prefix | `DX-` |
| formPattern | **Full page** · CatalogFormShell 5 cols |
| gridAc | **PASS** · Kind B A–D+F · LinErpListFilterBar · boolean bay/ghế/nhà chờ ON |
| reportAc | **N/A** |
| leaveAc | **PASS** · LeaveConfirmModal · useAlert/Modal |
| screens | S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HIST · S-ALIAS |
| devSlash | `/agent-dev` |
| contentHashPrior | `sha256:c1af893aa22666c6c7941b086d81a47824dda068262aa58824b3657b7f2a4f0f` |
| headerFingerprintPrior | `sha256:ad2e24a0828b77a114a88e50a6e004bf9012e6def28fd606d6b787688a18b0cc` |
| skillVersion | `2026.08.25.02` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| writtenAt | `2026-09-01T07:40:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B · Full page form
- Live list `/so-ts?type=BUS_STOP` · alias `/so-ts-bus-stop` board-only (Design optional redirect)
- API: `api/v1/asset/road-assets` (+ BFF) · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`
- name ← `station_name` · trống OK · **cấm** IsWeak→đoạn
- Point: ẩn `kmTo` · kmFrom **không** required · **cấm** ép `"0"`
- Prefix IdCode **`DX-`** (GAP-DD-PREFIX-01)
- Lookup P1: Dropdown LOOKUP_STATIC dump cho type_work_id · management_id · pavement · shelter · vitri · bool
- Grid: boolean bay/ghế/nhà chờ **luôn ON** · hide-empty length/width/vitri · ẩn type/kmTo/SL/ĐVT
- Form reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · **cấm** fork · **cấm** tab legacy
- open questions: **none** (autoApprove chốt §9 requirement)

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B |
| type | Loại TS | SearchInput asset-type | prefill BUS_STOP / ẩn |
| route | Cao tốc/QL | SearchInput road-route | * |
| kmFrom/kmTo | Lý trình filter | Text | filter only |
| orgTree | Đơn vị | SearchInput org-unit | |
| name | Tên điểm | Text | ← station_name |
| type_work_id | Loại tài sản | Dropdown | * LOOKUP_STATIC |
| management_id | ĐV QL sử dụng | Dropdown | LOOKUP_STATIC |
| stop_bay | Có làn đậu | Dropdown bool | grid ON · no hide-empty |
| seated_waiting_bus | Có ghế chờ | Dropdown bool | grid ON |
| bus_shelter | Có nhà chờ | Dropdown bool | grid ON |
| pavement_type_bus_stop_bay_id | Kết cấu làn đậu | Dropdown | LOOKUP_STATIC |
| length/width_bus_stop_bay | Kích thước làn đậu | Number | hide-empty |
| structure_bus_shelter_id | Kết cấu nhà chờ | Dropdown | LOOKUP_STATIC |
| vitri | Mặt cắt | Dropdown | L/R/C · hide-empty grid |
| escape_route_* | Đường lánh nạn | Text/Number | S-ATTR |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)

- List A/B/C/D + F · Form Full page 5 cols · map: none
- peerStdUrl=`http://localhost:9301/so-ts` · live `…/so-ts?type=BUS_STOP`
- mfeStdUrl alias board `…/so-ts-bus-stop`
- reviewUrl= (Design)

## API / tasks (ids only)

- FormMode↔API: C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE
- Init-data statuses/sources · summary-by-type tile t13
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR

- none

## Full paths (Read only if needed)

- control-hint: `specs/_data-analy/features/so-ts-bus-stop-control-hint.md`
- real-data: `specs/_data-analy/features/so-ts-bus-stop-real-data.md`
- po: `specs/so-ts-bus-stop/po/requirement.md`
- prior compact: `specs/so-ts-bus-stop/handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **Design** | control-map · prototype shared-grid · reviewUrl · hide-empty · alias optional |
| SA | path giữ · `DX-` prefix · dumpSpecs vs flatten · lookup seed |
| TL/Dev | profile BUS_STOP · S-ATTR editable · dumpSpecLabels · LeaveConfirmModal |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · map canvas · re-scan demo · e2e/build/start:std ở PO
