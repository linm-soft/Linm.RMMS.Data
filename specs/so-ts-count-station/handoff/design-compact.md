# handoff-compact — design · so-ts-count-station

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `so-ts-count-station` |
| title | Sổ TS — Trạm đếm |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_0e1b860d` |
| typeCode | `COUNT_STATION` |
| dump | `mst_counting_station` |
| clusterUi | `station` · tile `t30` · icon `CAM` |
| prefix | `THC-` (keep live) |
| formPattern | **Full page** · CatalogFormShell · `data-form-cols="5"` |
| Kind | **B** A–D+F |
| design_confirm | **approve** (autoApprove ON) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:dbbe8d52c360d78919c4a7bb313973ee20cd193b6b5c1cee4a0da0e7559be87a` |
| headerFingerprintPrior | `sha256:7bf97d74eae1a084b280fe888b49112b909288bd5a9751299b318a171b5bd9f9` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| writtenAt | `2026-09-01T07:00:00.000Z` |

## Decisions

- Kind B · Full page 5 cols · reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · **cấm** fork
- Live `/so-ts?type=COUNT_STATION` · alias `/so-ts-count-station` board-only (optional redirect)
- Lookup P1: Dropdown LOOKUP_STATIC `agency_id` (ĐVQL)
- Coord: parse `from_coordinate`/`to_coordinate` → lat/lng ưu tiên · dumpSpecs giữ · to_coordinate optional hide
- `name` ← `name_vi` · trống OK · **cấm** IsWeak
- Point: ẩn `kmTo` · `kmFrom` **không** required · **cấm** ép `"0"`
- Grid ON+hide-empty: ĐVQL · tên EN · số làn · tốc độ · ẩn type/kmTo/SL/ĐVT · 3 tầng tuyến tách
- LeaveConfirmModal · **cấm** native confirm · prefix giữ `THC-` · GIS slug **DEFER SA**
- Label UI «Trạm đếm» · BE seed «Trạm đếm xe» giữ
- API `api/v1/asset/road-assets` · **cấm ERP.*** · **cấm** invent so-ts path
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| type | Loại TS | SearchInput asset-type | prefill COUNT_STATION |
| route | Cao tốc/QL | SearchInput road-route | * |
| name | Tên (VI) | Text | ← name_vi |
| agency_id | ĐVQL | Dropdown | LOOKUP_STATIC · grid ON hide-empty |
| name_en | Tên (EN) | Text | grid ON hide-empty |
| no_of_lane | Số làn | Number | grid ON hide-empty |
| speed | Tốc độ | Number | grid ON hide-empty |
| from/to_coordinate | Tọa độ dump | derived | → lat/lng |
| lat/lng | GPS | Number | S-LOC-POINT / S-GPS |

## Screens / zones (ids only)

- DES-GRID-A · B · B-FILTER · C0 · C2 · C3 · D · F · H
- DES-FORM-Z1 · Z2 · DES-LEAVE
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-count-station/ui/prototype/so-ts-count-station-list-prototype.html`
- peerStdUrl=`http://localhost:9301/so-ts?type=COUNT_STATION`
- prototype=`specs/so-ts-count-station/ui/prototype/so-ts-count-station-list-prototype.html`
- countCite=377 · tile t30 · prefix THC

## API / tasks (ids only)

- FormMode C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE
- Init-data · summary-by-type tile t30
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR

- none

## Full paths

- design: `specs/so-ts-count-station/ui/design.md`
- prototype: `specs/so-ts-count-station/ui/prototype/so-ts-count-station-list-prototype.html`
- prior compact: `handoff/po-compact.md` · `handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **SA** | path giữ · dumpSpecs vs flatten · agency LOOKUP seed · coord parse · GIS slug DEFER · dumpSpecLabels |
| TL/Dev | profile COUNT_STATION · S-ATTR editable · LeaveConfirmModal · hide-empty · lookups COUNT |
| QA | e2e queued `/agent-qa*` only |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · map canvas · re-scan demo · e2e/build/start:std ở Design · paste HTML vào compact · invent GIS slug/prefix FE
