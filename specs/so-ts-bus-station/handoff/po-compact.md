# handoff-compact — po · so-ts-bus-station

| | |
|--|--|
| schemaVersion | `1` |
| role | `po` |
| feature | `so-ts-bus-station` |
| title | Sổ TS — Bến xe |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_71c6f080` |
| typeCode | `BUS_STATION` |
| dump | `tbl_bus_station` |
| clusterUi | `station` · tile `t04` |
| prefix | `BX-` |
| formPattern | **Full page** · CatalogFormShell 5 cols |
| gridAc | **PASS** · Kind B A–D+F · LinErpListFilterBar · input cụm phải |
| reportAc | **N/A** |
| leaveAc | **PASS** · LeaveConfirmModal · useAlert/Modal |
| screens | S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HIST · S-ALIAS |
| devSlash | `/agent-dev` |
| contentHashPrior | `sha256:e163077d4f1e16605d699be6e6c518273e794d50ffa7c0ce79379e92c70d98dd` |
| headerFingerprintPrior | `sha256:9815ded05f96794f988621ea6f19a2f4b6f75cad726a54e80d11060c6af52553` |
| skillVersion | `2026.08.25.02` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-01T03:15:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B · Full page form
- Live list `/so-ts?type=BUS_STATION` · alias `/so-ts-bus-station` board-only (Design optional redirect)
- API: `api/v1/asset/road-assets` (+ BFF) · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`
- name ← `name_terminal` · trống OK · **cấm** IsWeak→đoạn
- Point: ẩn `kmTo` · kmFrom **không** required · **cấm** ép `"0"`
- Lookup P1: Dropdown LOOKUP_STATIC dump cho type_work_id · owner_id · building_grade_id · build_location · classification
- Grid: ON+hide-empty DT/tuyến VT/DT sàn/cấp · classification OFF default · ẩn type/kmTo/SL/ĐVT
- Form reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · **cấm** fork · **cấm** tab legacy
- open questions: **none** (autoApprove chốt §9 requirement)

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B |
| type | Loại TS | SearchInput asset-type | prefill BUS_STATION / ẩn |
| route | Cao tốc/QL | SearchInput road-route | * |
| kmFrom/kmTo | Lý trình filter | Text | filter only |
| orgTree | Đơn vị | SearchInput org-unit | |
| name | Tên bến | Text | ← name_terminal |
| type_work_id | Loại tài sản | Dropdown | * LOOKUP_STATIC |
| owner_id | Chủ sở hữu | Dropdown | LOOKUP_STATIC |
| site_area_using_land | DT mặt bằng | Number | grid ON hide-empty |
| main_transportation_route | Tuyến VT chính | Text | grid ON hide-empty |
| total_area_floors | DT sàn | Number | grid ON hide-empty |
| building_grade_id | Cấp nhà | Dropdown | LOOKUP_STATIC · hide-empty |
| build_location | Mặt cắt | Dropdown | L/R/C |
| classification | Phân loại | Dropdown | form ON · grid OFF default |

## Screens / zones (ids only)

- List A/B/C/D + F · Form Full page 5 cols · map: none
- peerStdUrl=`http://localhost:9301/so-ts` · live `…/so-ts?type=BUS_STATION`
- mfeStdUrl alias board `…/so-ts-bus-station`
- reviewUrl= (Design)

## API / tasks (ids only)

- FormMode↔API: C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE
- Init-data statuses/sources · summary-by-type tile t04
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR

- none

## Full paths (Read only if needed)

- control-hint: `specs/_data-analy/features/so-ts-bus-station-control-hint.md`
- real-data: `specs/_data-analy/features/so-ts-bus-station-real-data.md`
- po: `specs/so-ts-bus-station/po/requirement.md`
- prior compact: `specs/so-ts-bus-station/handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **Design** | control-map · prototype shared-grid · reviewUrl · hide-empty · alias optional |
| SA | path giữ · dumpSpecs vs flatten · lookup seed |
| TL/Dev | profile BUS_STATION · S-ATTR editable · dumpSpecLabels · LeaveConfirmModal |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · map canvas · re-scan demo · e2e/build/start:std ở PO
