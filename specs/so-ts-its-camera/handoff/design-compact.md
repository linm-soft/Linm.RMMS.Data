# handoff-compact — design · so-ts-its-camera

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `so-ts-its-camera` |
| title | Sổ TS — Hệ thống ITS |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_33ab0873` |
| typeCode | `ITS_CAMERA` |
| dump | `tbl_its` |
| clusterUi | `ops` · tile `t19` |
| prefix | `IT-` |
| formPattern | **Full page** · CatalogFormShell · `data-form-cols="5"` |
| Kind | **B** A–D+F |
| design_confirm | **approve** (autoApprove ON) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:f84fdaca28c60fcf81fcd282b87f9a7d6d9ba3129b26cf9e3a12f6e85f201946` |
| headerFingerprintPrior | `sha256:8c2e1f4a9b03d7e65c1a0f8b2d4e6f9012345678abcdef0123456789abcdef` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| writtenAt | `2026-09-02T03:54:00.000Z` |

## Decisions

- Kind B · Full page 5 cols · reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · **cấm** fork
- Live `/so-ts?type=ITS_CAMERA` · alias `/so-ts-its-camera` board-only (optional redirect)
- Lookup P1: Dropdown LOOKUP_STATIC type_management_center / location_its
- `name` = `location_name_its_ccroom` · trống OK · **cấm** IsWeak route làm tên duy nhất
- Point: ẩn `kmTo` · `kmFrom` **không** required · **cấm** ép `"0"`
- Grid **ON mẫu** + hide-empty cột số khi 0/null · ẩn type/kmTo/SL/ĐVT · detail-only tn_* form only
- LeaveConfirmModal · **cấm** native confirm
- KCHT tile `t19` drill OK · count import **9**
- **Cấm** camera-connect (IP/RTSP/ONVIF) · tách scope GAP-ITS-CAM-01
- API `api/v1/asset/road-assets` · **cấm ERP.*** · **cấm** invent so-ts path
- open questions: **none** (GAP-ITS-DUMP-KEY-01 defer SA)

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| type | Loại TS | SearchInput asset-type | prefill ITS_CAMERA |
| route | Cao tốc/QL | SearchInput road-route | * |
| name | Tên phòng ITS | Text | GAP-ITS-NAME-01 |
| type_management_center_id | Loại TTĐH | Dropdown | LOOKUP_STATIC · grid ON |
| location_its_central_control_id | Vị trí phòng ITS | Dropdown | LOOKUP_STATIC · hide-empty OK |
| tn_vms_interface | VMS | Number | hide-empty OK |
| tn_screen_controller | Bộ ĐK màn hình | Number | hide-empty OK |
| tn_data_server | Máy chủ DL | Number | hide-empty OK |
| tn_wim_high_speed | WIM tốc độ cao | Number | hide-empty OK |
| tn_cable_duct_length | Cống cáp (km) | Number | hide-empty OK |
| tn_fiber_optic_length | Cáp quang (km) | Number | hide-empty OK |
| tn_its_pole | Trụ đỡ ITS | Number | hide-empty OK |
| tn_cctv_monitoring … tn_incident_data_management | Thiết bị detail | Number | form S-ATTR only |

## Screens / zones (ids only)

- DES-GRID-A · B · B-FILTER · C0 · C2 · C3 · D · F · H
- DES-FORM-Z1 · Z2 · DES-LEAVE
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-its-camera/ui/prototype/so-ts-its-camera-list-prototype.html`
- peerStdUrl=`http://localhost:9301/so-ts?type=ITS_CAMERA`
- mfeStdUrl=`http://localhost:9301/so-ts-its-camera`
- prototype=`specs/so-ts-its-camera/ui/prototype/so-ts-its-camera-list-prototype.html`

## API / tasks (ids only)

- FormMode C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE
- Init-data · summary-by-type tile t19
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR

- none

## Full paths

- design: `specs/so-ts-its-camera/ui/design.md`
- prototype: `specs/so-ts-its-camera/ui/prototype/so-ts-its-camera-list-prototype.html`
- prior compact: `handoff/po-compact.md` · `handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **SA** | path giữ · dumpSpecs vs flatten · LOOKUP seed · DefaultCodePrefix IT- · dumpSpecLabels · dump key map tn_* |
| TL/Dev | profile ITS_CAMERA · S-ATTR editable · LeaveConfirmModal · grid ON mẫu · cấm camera-connect |
| QA | e2e queued `/agent-qa*` only |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · invent map · camera-connect merge · re-scan demo · e2e/build/start:std ở Design · paste HTML vào compact
