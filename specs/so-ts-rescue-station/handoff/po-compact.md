# handoff-compact — po · so-ts-rescue-station

| | |
|--|--|
| schemaVersion | `1` |
| role | `po` |
| feature | `so-ts-rescue-station` |
| title | Sổ TS — Công trình cứu hộ |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_cdbd698e` |
| typeCode | `RESCUE_STATION` |
| dump | `tbl_disaster_res_facility` |
| clusterUi | `station` · ô `—` (list only · t24≠facility) |
| prefix | `CN-` |
| formPattern | **Full page** · CatalogFormShell 5 cols |
| gridAc | **PASS** · Kind B A–D+F · LinErpListFilterBar · input cụm phải |
| reportAc | **N/A** |
| leaveAc | **PASS** · LeaveConfirmModal · useAlert/Modal |
| screens | S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HIST · S-ALIAS |
| devSlash | `/agent-dev` |
| contentHashPrior | `sha256:5e5eb3da5e2e10fae059fd2082ba0ed1c1f0c1337d89e41940099e39d1320e47` |
| headerFingerprintPrior | `sha256:35d2d6b7556670ded6f3e2a4554bf71aa4177a89f2fcbc7bfc14dc0dca54db4d` |
| skillVersion | `2026.08.25.02` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-01T02:15:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B · Full page form
- Live list `/so-ts?type=RESCUE_STATION` · alias `/so-ts-rescue-station` board-only (Design optional redirect)
- API: `api/v1/asset/road-assets` (+ BFF) · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`
- name ← `name_building` · label «Tên kho bãi» · trống OK · **cấm** IsWeak→đoạn
- Header title «Sổ TS — Công trình cứu hộ» (CTX)
- Point: ẩn `kmTo` · kmFrom **không** required · **cấm** ép `"0"`
- Lookup P1: Dropdown LOOKUP_STATIC dump cho office/aux/stored grade · vitri
- Grid **ON mẫu**: materials · site_area · office/aux/stored grade+area · ẩn type/kmTo/SL/ĐVT
- Form reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · **cấm** fork · **cấm** tab legacy
- KCHT ô `—` · **cấm** invent tile · **cấm** nhầm RESCUE_VEHICLE
- open questions: **none** (autoApprove chốt §9 requirement)

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B |
| type | Loại TS | SearchInput asset-type | prefill RESCUE_STATION / ẩn |
| route | Cao tốc/QL | SearchInput road-route | * |
| kmFrom/kmTo | Lý trình filter | Text | filter only |
| orgTree | Đơn vị | SearchInput org-unit | |
| name | Tên kho bãi | Text | ← name_building |
| materials_in_store | Vật tư chứa trong kho | TextArea | form ON · grid ON |
| site_area_using_land | DT khuôn viên | Number | form ON · grid ON |
| office_building_grade_id | Cấp nhà làm việc | Dropdown | LOOKUP_STATIC |
| total_area_office_building | DT nhà (m²) | Number | form ON · grid ON |
| auxiliary_works_grade_id | Cấp CT phụ | Dropdown | LOOKUP_STATIC |
| total_area_auxiliary_works | DT CT phụ | Number | form ON · grid ON |
| stored_building_grade_id | Cấp nhà kho | Dropdown | LOOKUP_STATIC |
| total_area_stored_building | DT nhà kho | Number | form ON · grid ON |
| vitri | Vị trí | Text/Dropdown | LOOKUP_STATIC · S-ATTR/S-LOC |

## Screens / zones (ids only)

- List A/B/C/D + F · Form Full page 5 cols · map: none
- peerStdUrl=`http://localhost:9301/so-ts` · live `…/so-ts?type=RESCUE_STATION`
- mfeStdUrl alias board `…/so-ts-rescue-station`
- reviewUrl= (Design)

## API / tasks (ids only)

- FormMode↔API: C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE
- Init-data statuses/sources · summary-by-type (no facility tile)
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR

- none

## Full paths (Read only if needed)

- control-hint: `specs/_data-analy/features/so-ts-rescue-station-control-hint.md`
- real-data: `specs/_data-analy/features/so-ts-rescue-station-real-data.md`
- po: `specs/so-ts-rescue-station/po/requirement.md`
- prior compact: `specs/so-ts-rescue-station/handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **Design** | control-map · prototype shared-grid · reviewUrl · ON-mẫu cols · alias optional |
| SA | path giữ · dumpSpecs vs flatten · lookup seed |
| TL/Dev | profile RESCUE_STATION · S-ATTR editable · dumpSpecLabels · LeaveConfirmModal |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · invent map/tile · nhầm RESCUE_VEHICLE · re-scan demo · e2e/build/start:std ở PO
