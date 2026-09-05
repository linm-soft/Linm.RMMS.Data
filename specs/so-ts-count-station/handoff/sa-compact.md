# handoff-compact — sa · so-ts-count-station

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `so-ts-count-station` |
| title | Sổ TS — Trạm đếm |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_c54bef0c` |
| typeCode | `COUNT_STATION` |
| dump | `mst_counting_station` |
| clusterUi | `station` · tile `t30` · icon `CAM` |
| prefix | `THC-` (keep live GIS · rebuild TX debt align) |
| formPattern | **Full page** · CatalogFormShell 5 cols |
| solution_confirm | **approve** (autoApprove ON) |
| domain | **Asset** · `api/v1/asset/road-assets` · **cấm ERP.*** |
| gates | `tz_na` · `xco_get_only` · `share_tenant` |
| contentHashPrior | `sha256:dbbe8d52c360d78919c4a7bb313973ee20cd193b6b5c1cee4a0da0e7559be87a` |
| headerFingerprintPrior | `sha256:7bf97d74eae1a084b280fe888b49112b909288bd5a9751299b318a171b5bd9f9` |
| skillVersion | `2026.08.24.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| writtenAt | `2026-09-01T07:10:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B · Full page form
- API **giữ** `api/v1/asset/road-assets` (+ BFF proxy) · entity `RoadAssetEntity`/`rmms_road_assets`
- Persist P1: **dumpSpecs** JSON · **no** Schema_* flatten (**GAP-COUNT-FLAT-01** defer P2)
- `name` ← `name_vi` · trống OK · **cấm** IsWeak → đoạn
- Point: ẩn `kmTo` · `kmFrom` **không** required · **cấm** ép `"0"`
- LOOKUP P1: Dropdown LOOKUP_STATIC · init-data delta `countAgencies` (`agency_id`)
- Coord: parse `from_coordinate`/`to_coordinate` → lat/lng · dumpSpecs giữ · to_coordinate optional hide
- Grid: ON+hide-empty ĐVQL/tên EN/số làn/tốc độ · ẩn type/kmTo/SL/ĐVT · 3 tầng tuyến tách
- Form reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · **cấm** fork · **cấm** tab legacy
- Prefix **giữ `THC-`** · GIS slug **DEFER** · Live `/so-ts?type=COUNT_STATION` · alias board optional
- Label UI «Trạm đếm» · BE seed «Trạm đếm xe» giữ · count cite **377** · tile t30
- open questions: **none** (autoApprove)

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | filter |
| type | Loại TS | SearchInput asset-type | lock COUNT_STATION |
| route/routeNamed/routeSegment | 3 tầng tuyến | SearchInput road-route | * |
| kmFrom | Lý trình | Text | point · không required |
| name / name_vi | Tên (VI) | Text | ← name_vi |
| agency_id | ĐVQL | Dropdown | LOOKUP_STATIC · grid ON hide-empty |
| name_en | Tên (EN) | Text | grid ON hide-empty |
| no_of_lane | Số làn | Number | grid ON hide-empty |
| speed | Tốc độ | Number | grid ON hide-empty |
| from/to_coordinate | Tọa độ dump | derived | → lat/lng · dump keep |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)

- DES-GRID-A/B/C/D/F/H · DES-FORM-Z1/Z2 · DES-LEAVE
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-count-station/ui/prototype/so-ts-count-station-list-prototype.html`
- peerStdUrl=`http://localhost:9301/so-ts?type=COUNT_STATION`
- mfeStdUrl alias board `…/so-ts-count-station`

## API / tasks (ids only)

- FormMode↔API: C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE · `?type=COUNT_STATION`
- Init-data delta: countAgencies
- summary-by-type tile t30 · count **377**
- T-COUNT-01…08 = TL (Dev `/agent-dev`) · migration **none** SA turn

## UNCLEAR

- none

## Full paths (Read only if needed)

- solution: `specs/so-ts-count-station/be/solution-discovery.md`
- prior compact: `handoff/design-compact.md` · `handoff/po-compact.md` · `handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | task pack · profile COUNT · GAP-COUNT-* · init LOOKUP delta |
| Dev | S-ATTR editable · dumpSpecLabels · coord parse · LeaveConfirmModal · hide-empty · alias |
| QA | e2e queued `/agent-qa*` only |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent `api/v1/so-ts/*` · fork AssetFormPage · tab legacy · map canvas · re-scan demo · e2e/build/start:std ở SA · Step 4b/migration · invent GIS slug/prefix FE
