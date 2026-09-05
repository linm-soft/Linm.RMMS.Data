# handoff-compact — design · so-ts-noise-barrier

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `so-ts-noise-barrier` |
| title | Sổ TS — Rào chắn ồn |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_b4455967` |
| typeCode | `NOISE_BARRIER` |
| dump | `tbl_noise_barrier` |
| clusterUi | `linear_protect` · tile `t25` |
| prefix | `TC-` (GIS short `TC`) |
| formPattern | **Full page** · CatalogFormShell · `data-form-cols="5"` |
| Kind | **B** A–D+F |
| design_confirm | **approve** (autoApprove ON) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:5167bd802b25b82d0d99f0194c1bb059f8f5862747e2035a61e451fd8ae0b7e3` |
| headerFingerprintPrior | `sha256:f557d62410b865aa3f70d298e63448fb481dbfdbfddd3d4758f7e9a6a0fd18f5` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| writtenAt | `2026-09-01T09:45:00.000Z` |

## Decisions

- Kind B · Full page 5 cols · reuse S-META·S-ROUTE·S-LOC-RANGE·S-NAME·S-ATTR·S-GPS · **cấm** fork
- Live `/so-ts?type=NOISE_BARRIER` · alias `/so-ts-noise-barrier` board-only (optional redirect)
- Lookup P1: Dropdown LOOKUP_STATIC `type_noise_barrier_id` (COMPOSITE/Khác/Bê tông…)
- `name` optional · list primary = loại tường · **cấm** IsWeak
- Range: S-LOC-RANGE km* + 4 XY dumpSpecs · **cấm** ép `"0"` · **không** S-LOC-POINT · prefix **`TC-`**
- Grid: ON loại tường/3 tầng/kmFrom/kmTo/tỉnh/cao/dài · hide-empty vitri/xã · ẩn type/SL/ĐVT/ảnh
- LeaveConfirmModal · **cấm** native confirm
- API `api/v1/asset/road-assets` · **cấm ERP.*** · **cấm** invent so-ts path
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| type | Loại TS | SearchInput asset-type | prefill NOISE_BARRIER |
| route/routeNamed/routeSegment | 3 tầng | SearchInput road-route | * |
| kmFrom / kmTo | Lý trình | Text | S-LOC-RANGE * |
| type_noise_barrier_id | Loại tường | Dropdown | * LOOKUP_STATIC · grid primary |
| average_height | Cao TB (m) | Number | dumpSpecs |
| actual_length | Dài thực tế (m) | Number | dumpSpecs |
| vitri | Vị trí | Dropdown | optional · hide-empty |
| province*/commune* | Địa danh | Text | hide-empty |
| lat*/lng* | XY đầu/cuối | Number | dumpSpecs RANGE |
| name | Tên | Text | optional |
| lat/lng | GPS | Number | S-GPS |
| code | Mã | Text ro | prefix TC- |

## Screens / zones (ids only)

- DES-GRID-A · B · B-FILTER · C0 · C2 · C3 · D · F · H
- DES-FORM-Z1 · Z2 · DES-LEAVE
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-noise-barrier/ui/prototype/so-ts-noise-barrier-list-prototype.html`
- peerStdUrl=`http://localhost:9301/so-ts?type=NOISE_BARRIER`
- prototype=`specs/so-ts-noise-barrier/ui/prototype/so-ts-noise-barrier-list-prototype.html`

## API / tasks (ids only)

- FormMode C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE
- Init-data · summary-by-type tile t25
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR

- none

## Full paths

- design: `specs/so-ts-noise-barrier/ui/design.md`
- prototype: `specs/so-ts-noise-barrier/ui/prototype/so-ts-noise-barrier-list-prototype.html`
- prior compact: `handoff/po-compact.md` · `handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **SA** | path giữ · `TC-` DefaultCodePrefix · dumpSpecs vs flatten · LOOKUP seed |
| TL/Dev | profile NOISE_BARRIER · S-ATTR editable · dumpSpecLabels · LeaveConfirmModal |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · map canvas · re-scan demo · e2e/build/start:std ở Design · start SA trong task này
