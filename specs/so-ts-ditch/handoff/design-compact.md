# handoff-compact — design · so-ts-ditch

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `so-ts-ditch` |
| title | Sổ TS — Cống / rãnh dọc |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_5b77b576` |
| typeCode | `DITCH` |
| dump | `tbl_longitudinal` |
| clusterUi | `linear_protect` · tile `t10` |
| prefix | `CD-` (GIS short `CD`) |
| formPattern | **Full page** · CatalogFormShell · `data-form-cols="5"` |
| Kind | **B** A–D+F |
| design_confirm | **approve** (autoApprove ON) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:8f37e4455aded2ca3a045f47a50916be0563e859af9b18bdcc59000ce4305854` |
| headerFingerprintPrior | `sha256:d6f65b07a78cc92a5d831574bf9ebbbe538d4f5de330080d3f5d997b5a17801b` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| writtenAt | `2026-09-01T10:30:00.000Z` |

## Decisions

- Kind B · Full page 5 cols · reuse S-META·S-ROUTE·S-LOC-RANGE·S-NAME·S-ATTR·S-GPS · **cấm** fork
- Live `/so-ts?type=DITCH` · alias `/so-ts-ditch` board-only (optional redirect)
- Lookup P1: Dropdown LOOKUP_STATIC `ditch_type_id` / `culvert_shape_id` / structure / work / materials / location
- `name` optional · list primary = `ditch_type_id` · **cấm** IsWeak
- Range: S-LOC-RANGE km* + 4 XY dumpSpecs · **cấm** ép `"0"` · **không** S-LOC-POINT · prefix **`CD-`**
- Grid: ON loại rãnh/3 tầng/kmFrom/kmTo/hình dạng/dài/cao · hide-empty rộng/KT/hố ga/địa danh · ẩn type/ảnh
- Page filter **DITCH only** · peer CULVERT_L DEFER
- LeaveConfirmModal · **cấm** native confirm
- API `api/v1/asset/road-assets` · **cấm ERP.*** · **cấm** invent so-ts path
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| type | Loại TS | SearchInput asset-type | prefill DITCH |
| route/routeNamed/routeSegment | 3 tầng | SearchInput road-route | * |
| kmFrom / kmTo | Lý trình | Text | S-LOC-RANGE * |
| ditch_type_id | Loại rãnh/cống | Dropdown | * LOOKUP_STATIC · grid primary |
| culvert_shape_id | Hình dạng | Dropdown | dumpSpecs · grid ON |
| actual_length / height_culvert | Dài/cao | Number | dumpSpecs · grid ON |
| width_bottom / width_top | Rộng đáy/miệng | Number | hide-empty |
| structural_type_id / work_type_id / materials_work_id | KT/CT/VL | Dropdown | LOOKUP_STATIC |
| *_manhole | KT hố ga | Number | hide-empty |
| location_id | Vị trí mặt cắt | Dropdown | optional |
| province*/commune* | Địa danh | Text | hide-empty |
| lat*/lng* | XY đầu/cuối | Number | dumpSpecs RANGE |
| name | Tên | Text | optional |
| lat/lng | GPS | Number | S-GPS |
| code | Mã | Text ro | prefix CD- |

## Screens / zones (ids only)

- DES-GRID-A · B · B-FILTER · C0 · C2 · C3 · D · F · H
- DES-FORM-Z1 · Z2 · DES-LEAVE
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-ditch/ui/prototype/so-ts-ditch-list-prototype.html`
- peerStdUrl=`http://localhost:9301/so-ts?type=DITCH`
- prototype=`specs/so-ts-ditch/ui/prototype/so-ts-ditch-list-prototype.html`

## API / tasks (ids only)

- FormMode C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE
- Init-data · summary-by-type tile t10
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR

- none

## Full paths

- design: `specs/so-ts-ditch/ui/design.md`
- prototype: `specs/so-ts-ditch/ui/prototype/so-ts-ditch-list-prototype.html`
- prior compact: `handoff/po-compact.md` · `handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **SA** | path giữ · `CD-` DefaultCodePrefix · dumpSpecs vs flatten · LOOKUP seed |
| TL/Dev | profile DITCH · S-ATTR editable · dumpSpecLabels · LeaveConfirmModal |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · map canvas · re-scan demo · e2e/build/start:std ở Design · start SA trong task này
