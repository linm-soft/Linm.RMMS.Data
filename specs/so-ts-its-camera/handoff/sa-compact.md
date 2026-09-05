# handoff-compact — sa · so-ts-its-camera

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `so-ts-its-camera` |
| title | Sổ TS — Hệ thống ITS |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_00134ed9` |
| typeCode | `ITS_CAMERA` |
| dump | `tbl_its` |
| clusterUi | `ops` · tile `t19` |
| prefix | `IT-` (GIS `CAM`) |
| formPattern | **Full page** · CatalogFormShell 5 cols |
| Kind | **B** A–D+F |
| solution_confirm | **approve** (autoApprove ON) |
| domain | **Asset** · `api/v1/asset/road-assets` |
| bff | proxy only · `web-bff/api/v1/asset/road-assets` |
| entity | `RoadAssetEntity` · `rmms_road_assets` · dumpSpecs P1 |
| sa_tz_gate | `tz_na` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| contentHashPrior | `sha256:f84fdaca28c60fcf81fcd282b87f9a7d6d9ba3129b26cf9e3a12f6e85f201946` |
| headerFingerprintPrior | `sha256:8c2e1f4a9b03d7e65c1a0f8b2d4e6f9012345678abcdef0123456789abcdef` |
| skillVersion | `2026.08.24.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| writtenAt | `2026-09-02T04:00:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B · Full page form · **cấm** fork
- API **giữ** `api/v1/asset/road-assets` · BFF proxy · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`
- Persist: scalars + **dumpSpecs P1** · flatten **DEFER** (GAP-ITS-FLAT-01) · **không** Schema_* / Step 4b
- `name` optional · `location_name_its_ccroom` · **cấm** IsWeak→route (GAP-ITS-NAME-01)
- IdCode create/import **`IT-`** · GIS short **`CAM`** (GAP-ITS-PREFIX-01)
- Point: **S-LOC-POINT** kmFrom only · **ẩn** kmTo · **cấm** ép `"0"`
- LOOKUP P1 init-data: `itsManagementCenterTypes[]` · `itsCentralControlLocations[]` (GAP-ITS-LOOKUP-01)
- dumpSpecLabels: đủ §4 ITS + `tn_*` · header cite `moc_dbvn.tbl_its.2026.8.23.15.11.csv` (GAP-ITS-DUMP-KEY-01 **resolved**)
- Grid: ON mẫu + hide-empty cột số khi 0/null · ẩn type/kmTo/SL/ĐVT · detail-only tn_* form
- Form reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS
- Alias `/so-ts-its-camera` board-only optional (GAP-ITS-ROUTE-01)
- LeaveConfirmModal + useAlert
- **Cấm** camera-connect merge (GAP-ITS-CAM-01 **resolved**)
- Gates: tz_na · xco_get_only · share_tenant
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | write |
|----|-------|-------------|-------|
| type | Loại TS | SearchInput | scalar lock ITS_CAMERA |
| route* | 3 tầng tuyến | SearchInput | scalar |
| kmFrom | Lý trình | Text | scalar · S-LOC-POINT |
| name | Tên phòng ITS | Text | scalar · location_name_its_ccroom |
| type_management_center_id | Loại TTĐH | Dropdown | dumpSpecs · LOOKUP_STATIC · grid ON |
| location_its_central_control_id | Vị trí phòng ITS | Dropdown | dumpSpecs · LOOKUP_STATIC · hide-empty OK |
| tn_vms_interface | VMS | Number | dumpSpecs · grid ON · hide-empty OK |
| tn_screen_controller | Bộ ĐK màn hình | Number | dumpSpecs · grid ON · hide-empty OK |
| tn_data_server | Máy chủ DL | Number | dumpSpecs · grid ON · hide-empty OK |
| tn_wim_high_speed | WIM tốc độ cao | Number | dumpSpecs · grid ON · hide-empty OK |
| tn_cable_duct_length | Cống cáp (km) | Number | dumpSpecs · grid ON · hide-empty OK |
| tn_fiber_optic_length | Cáp quang (km) | Number | dumpSpecs · grid ON · hide-empty OK |
| tn_its_pole | Trụ đỡ ITS | Number | dumpSpecs · grid ON · hide-empty OK |
| tn_cctv_monitoring … tn_incident_data_management | Thiết bị detail | Number | dumpSpecs · form S-ATTR only |
| lat/lng | GPS | Number | scalar S-GPS |
| code | Mã | Text ro | prefix IT- |

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HIST · S-ALIAS
- peerStdUrl=`http://localhost:9301/so-ts?type=ITS_CAMERA`
- mfeStdUrl=`http://localhost:9301/so-ts-its-camera`

## API / tasks (ids only)

- FormMode↔API: C/E/V/Copy ↔ POST/PUT/GET · soft DELETE · init-data · summary-by-type t19
- T-ITS-01..10 → TL (profile · S-ATTR · Point · name · IT- · LOOKUP · Leave · alias · DOMAIN-MAP · pack)

## UNCLEAR

- none

## Full paths

- solution: `specs/so-ts-its-camera/be/solution-discovery.md`
- design: `specs/so-ts-its-camera/ui/design.md`
- prior compact: `handoff/design-compact.md` · `po-compact.md` · `data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | task/so-ts-its-camera.md · T-ITS-* · gates |
| Dev | profile ITS_CAMERA · S-ATTR · IT- · LOOKUP · LeaveConfirm · Point |
| QA | e2e queued `/agent-qa*` |

## Cấm (compact)

ERP.* · invent API · fork AssetFormPage · Schema_* flatten P1 · Step 4b/migration/e2e/build/start:std ở SA · Write MFE · camera-connect merge · re-scan demo
