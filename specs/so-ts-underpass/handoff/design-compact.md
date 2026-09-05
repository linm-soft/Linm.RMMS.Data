# handoff-compact — design · so-ts-underpass

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `so-ts-underpass` |
| title | Sổ TS — Hầm chui dân sinh |
| packKind | `list` |
| changeScope | `new_page` |
| status | `confirmed` |
| taskId | `task_bee06bee` |
| typeCode | `UNDERPASS` |
| dump | `tbl_underpass_box` |
| clusterUi | `crossing` · tile `t06` |
| prefix | `CC-` |
| formPattern | **Full page** · CatalogFormShell · `data-form-cols="5"` |
| Kind | **B** A–D+F |
| design_confirm | **approve** (autoApprove ON) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:e0d055aba3a52b289144ba966e1c00448c1f54daf105b50bef00004d8355e2bd` |
| headerFingerprintPrior | `sha256:c267ab7ecbe32162d2ea8be9518521aec8ef1bd031d6a751e30ab72c44c3c1fa` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-01T11:20:00.000Z` |
| autoApprove | `ON` |
| e2eQa | `ON` (queued `/agent-qa*` only) |

## Artifacts

| Kind | Path |
|------|------|
| design | `specs/so-ts-underpass/ui/design.md` |
| prototype | `specs/so-ts-underpass/ui/prototype/so-ts-underpass-list-prototype.html` |
| control-hint | `specs/_data-analy/features/so-ts-underpass-control-hint.md` |
| real-data | `specs/_data-analy/features/so-ts-underpass-real-data.md` |
| prior po | `specs/so-ts-underpass/handoff/po-compact.md` |

## Decisions

- Kind B · Full page 5 cols · reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · **cấm** fork
- Live `/so-ts?type=UNDERPASS` · alias `/so-ts-underpass` board-only (optional redirect)
- Lookup P1: Dropdown LOOKUP_STATIC culvert/construction/structure/wingwall/pavement
- `name` ← tencongchui · fallback name_underpass · trống OK · **cấm** IsWeak
- Point: S-LOC-POINT · ẩn kmTo · **cấm** ép `"0"` · prefix **`CC-`**
- Grid: ON loại cống/3 tầng/tên/lytrinh/đường chui/thi công/tải/số ngăn/dài/kết cấu · hide low-fill pavement_*/lighting/signboard/barrier · ẩn type/kmTo/SL/ĐVT
- LeaveConfirmModal · **cấm** native confirm
- API `api/v1/asset/road-assets` · **cấm ERP.*** · **cấm** invent so-ts path
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| type | Loại TS | SearchInput asset-type | prefill UNDERPASS |
| route/routeNamed/routeSegment | 3 tầng | SearchInput road-route | * |
| kmFrom | Lý trình | Text | S-LOC-POINT · filter± |
| culvert_type_id | Loại cống | Dropdown | * LOOKUP_STATIC · grid ON |
| construction_id | Thi công | Dropdown | LOOKUP_STATIC · grid ON |
| weight / number | Tải / số ngăn | Number | dumpSpecs · grid ON |
| width / height | Rộng / cao | Number | optional grid |
| crossing_length_culvert | Dài thân cống | Number | grid ON |
| structure_type_id | Kết cấu | Dropdown | LOOKUP_STATIC |
| number_wingwall / material_wingwall_id | Tường cánh | Number / Dropdown | optional |
| pavement_* / lighting / signboard / barrier | Low-fill | Dropdown/Number | form ON · grid OFF |
| name / name_underpass | Tên cống / đường chui | Text | S-NAME |
| lat/lng | GPS | Number | S-GPS / point |
| code | Mã | Text ro | prefix CC- |

## Screens / zones (ids only)

- DES-GRID-A · B · B-FILTER · C0 · C2 · C3 · D · F · H
- DES-FORM-Z1 · Z2 · DES-LEAVE
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-underpass/ui/prototype/so-ts-underpass-list-prototype.html`
- peerStdUrl=`http://localhost:9301/so-ts?type=UNDERPASS`
- prototype=`specs/so-ts-underpass/ui/prototype/so-ts-underpass-list-prototype.html`

## API / tasks (ids only)

- FormMode C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE
- Init-data · summary-by-type tile t06
- T-* = TL (Dev `/agent-dev`)

## Next

| Role | Need |
|------|------|
| **SA** | path giữ · dumpSpecs vs flatten · LOOKUP seed · IdCode `CC-` · dumpSpecLabels |
| TL/Dev | type-profile UNDERPASS · S-ATTR editable · LeaveConfirmModal |

## UNCLEAR

- none

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · seed giả · fork AssetFormPage · tab legacy · invent map · re-scan demo · e2e/start:std/build ở Design · start role khác
