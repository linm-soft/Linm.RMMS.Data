# handoff-compact — sa · so-ts-underpass

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `so-ts-underpass` |
| title | Sổ TS — Hầm chui dân sinh |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_f5f39e3e` |
| typeCode | `UNDERPASS` |
| dump | `tbl_underpass_box` |
| clusterUi | `crossing` · tile `t06` |
| prefix | `CC-` (GIS `CC`) |
| formPattern | **Full page** · CatalogFormShell 5 cols |
| Kind | **B** A–D+F+H |
| solution_confirm | **approve** (autoApprove ON) |
| domain | **Asset** · `api/v1/asset/road-assets` |
| bff | proxy only · `web-bff/api/v1/asset/road-assets` |
| entity | `RoadAssetEntity` · `rmms_road_assets` · dumpSpecs P1 |
| sa_tz_gate | `tz_na` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| contentHashPrior | `sha256:e0d055aba3a52b289144ba966e1c00448c1f54daf105b50bef00004d8355e2bd` |
| headerFingerprintPrior | `sha256:c267ab7ecbe32162d2ea8be9518521aec8ef1bd031d6a751e30ab72c44c3c1fa` |
| skillVersion | `2026.08.24.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| writtenAt | `2026-09-01T11:30:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B · Full page form · **cấm** fork
- API **giữ** `api/v1/asset/road-assets` · BFF proxy · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`
- Persist: scalars + **dumpSpecs P1** · flatten **DEFER** (GAP-UP-FLAT-01) · **không** Schema_* / Step 4b
- `name` ← tencongchui · fallback name_underpass · trống OK · **cấm** IsWeak→đoạn (GAP-UP-NAME-01)
- IdCode create/import **`CC-`** · GIS short **`CC`** · GIS `cong-chui` (GAP-UP-PREFIX-01)
- Point: **S-LOC-POINT** · ẩn kmTo · **cấm** ép `"0"` · **không** S-LOC-RANGE (GAP-UP-POINT-01)
- LOOKUP P1 init-data: culvertTypes · constructionTypes · structureTypes · wingwall · pavement (GAP-UP-LOOKUP-01)
- Form reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS
- Alias `/so-ts-underpass` board-only optional (GAP-UP-ROUTE-01)
- Grid hide low-fill pavement_*/lighting/signboard/barrier · ẩn type/kmTo/SL/ĐVT
- Gates: tz_na · xco_get_only · share_tenant
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | write |
|----|-------|-------------|-------|
| type | Loại TS | SearchInput | scalar lock UNDERPASS |
| route* | 3 tầng tuyến | SearchInput | scalar |
| kmFrom | Lý trình | Text | scalar · S-LOC-POINT · ẩn kmTo |
| culvert_type_id | Loại cống | Dropdown | dumpSpecs · LOOKUP_STATIC * |
| construction_id | Thi công | Dropdown | dumpSpecs · LOOKUP_STATIC |
| weight / number | Tải / số ngăn | Number | dumpSpecs · grid ON |
| width / height | Rộng / cao | Number | dumpSpecs · optional |
| crossing_length_culvert | Dài thân cống | Number | dumpSpecs · grid ON |
| structure_type_id | Kết cấu | Dropdown | dumpSpecs · LOOKUP_STATIC |
| wingwall / pavement / lighting / signboard / barrier | Attr phụ | Dropdown/Number | dumpSpecs · form ON · grid OFF low-fill |
| name / name_underpass | Tên cống / đường chui | Text | scalar + dumpSpecs · S-NAME |
| lat/lng | GPS | Number | scalar S-GPS |
| code | Mã | Text ro | prefix CC- |

## Screens / zones (ids only)

- S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HIST · S-ALIAS
- peerStdUrl=`http://localhost:9301/so-ts?type=UNDERPASS`
- mfeStdUrl=`http://localhost:9301/so-ts-underpass`

## API / tasks (ids only)

- FormMode↔API: C/E/V/Copy ↔ POST/PUT/GET · soft DELETE · init-data · summary-by-type t06
- T-UP-01..10 → TL (profile · S-ATTR · Point · name · CC- · LOOKUP · Leave · alias · DOMAIN-MAP · pack)

## UNCLEAR

- none

## Full paths

- solution: `specs/so-ts-underpass/be/solution-discovery.md`
- design: `specs/so-ts-underpass/ui/design.md`
- prior compact: `handoff/design-compact.md` · `po-compact.md` · `data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | task/so-ts-underpass.md · T-UP-* · gates |
| Dev | profile UNDERPASS · S-ATTR · CC- · LOOKUP · LeaveConfirm · Point |
| QA | e2e queued `/agent-qa*` |

## Cấm (compact)

ERP.* · invent API · fork AssetFormPage · Schema_* flatten P1 · Step 4b/migration/e2e/build/start:std ở SA · Write MFE