# handoff-compact — design · so-ts-bus-stop

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `so-ts-bus-stop` |
| title | Sổ TS — Điểm dừng xe buýt |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_fd756851` |
| typeCode | `BUS_STOP` |
| dump | `tbl_bus_stops` |
| clusterUi | `stop` · tile `t13` |
| prefix | `DX-` |
| formPattern | **Full page** · CatalogFormShell · `data-form-cols="5"` |
| Kind | **B** A–D+F |
| design_confirm | **approve** (autoApprove ON) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:c1af893aa22666c6c7941b086d81a47824dda068262aa58824b3657b7f2a4f0f` |
| headerFingerprintPrior | `sha256:ad2e24a0828b77a114a88e50a6e004bf9012e6def28fd606d6b787688a18b0cc` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| writtenAt | `2026-09-01T07:55:00.000Z` |

## Decisions

- Kind B · Full page 5 cols · reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · **cấm** fork
- Live `/so-ts?type=BUS_STOP` · alias `/so-ts-bus-stop` board-only (optional redirect)
- Lookup P1: Dropdown LOOKUP_STATIC type_work_id · management_id · pavement · shelter · vitri · bool
- `name` ← `station_name` · trống OK · **cấm** IsWeak
- Point: ẩn `kmTo` · `kmFrom` **không** required · **cấm** ép `"0"` · prefix **`DX-`**
- Grid: boolean bay/ghế/nhà chờ **luôn ON** · hide-empty length/width/vitri · ẩn type/kmTo/SL/ĐVT
- LeaveConfirmModal · **cấm** native confirm
- API `api/v1/asset/road-assets` · **cấm ERP.*** · **cấm** invent so-ts path
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| type | Loại TS | SearchInput asset-type | prefill BUS_STOP |
| route | Cao tốc/QL | SearchInput road-route | * |
| name | Tên điểm | Text | ← station_name |
| type_work_id | Loại tài sản | Dropdown | * LOOKUP_STATIC · grid ON |
| management_id | ĐV QL sử dụng | Dropdown | LOOKUP_STATIC · grid ON |
| stop_bay | Có làn đậu | Dropdown bool | grid **luôn ON** |
| seated_waiting_bus | Có ghế chờ | Dropdown bool | grid **luôn ON** |
| bus_shelter | Có nhà chờ | Dropdown bool | grid **luôn ON** |
| pavement_type_bus_stop_bay_id | Kết cấu làn đậu | Dropdown | LOOKUP_STATIC |
| length/width_bus_stop_bay | Kích thước làn | Number | hide-empty grid |
| structure_bus_shelter_id | Kết cấu nhà chờ | Dropdown | LOOKUP_STATIC |
| vitri | Mặt cắt | Dropdown | L/R/C · hide-empty grid |
| escape_route_* | Đường lánh nạn | Text/Number | S-ATTR |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)

- DES-GRID-A · B · B-FILTER · C0 · C2 · C3 · D · F · H
- DES-FORM-Z1 · Z2 · DES-LEAVE
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-bus-stop/ui/prototype/so-ts-bus-stop-list-prototype.html`
- peerStdUrl=`http://localhost:9301/so-ts?type=BUS_STOP`
- prototype=`specs/so-ts-bus-stop/ui/prototype/so-ts-bus-stop-list-prototype.html`

## API / tasks (ids only)

- FormMode C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE
- Init-data · summary-by-type tile t13
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR

- none

## Full paths

- design: `specs/so-ts-bus-stop/ui/design.md`
- prototype: `specs/so-ts-bus-stop/ui/prototype/so-ts-bus-stop-list-prototype.html`
- prior compact: `handoff/po-compact.md` · `handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **SA** | path giữ · `DX-` DefaultCodePrefix · dumpSpecs vs flatten · LOOKUP seed |
| TL/Dev | profile BUS_STOP · S-ATTR editable · dumpSpecLabels · LeaveConfirmModal |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · map canvas · re-scan demo · e2e/build/start:std ở Design · start SA trong task này
