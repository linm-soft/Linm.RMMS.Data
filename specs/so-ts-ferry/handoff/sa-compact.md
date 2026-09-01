# handoff-compact — sa · so-ts-ferry

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `so-ts-ferry` |
| title | Sổ TS — Bến phà |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_d49f2c9c` |
| typeCode | `FERRY` |
| dump | `tbl_ferry_terminal` |
| clusterUi | `crossing` · tile `t03` |
| prefix | `PH-` |
| formPattern | **Full page** · CatalogFormShell · `data-form-cols="5"` |
| Kind | **B** A–D+F+H |
| solution_confirm | **approve** (autoApprove ON) |
| sa_tz_gate | `tz_na` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| entity | `RoadAssetEntity` · `rmms_road_assets` |
| migration | **none** · dumpSpecs P1 · flatten **DEFER P2** |
| contentHashPrior | `sha256:0737298d3ce0a14ae36a4c9dfb37563e315723a476c59d953737019260a5a2f4` |
| headerFingerprintPrior | `sha256:58c00e1f58997b1effb970a6aaf3a1626625dd2f8783c11f260100336bf39291` |
| skillVersion | `2026.08.24.01` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-01T07:10:17.318Z` |

## Decisions

- API **giữ** `api/v1/asset/road-assets` (+ BFF proxy) · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`
- DOMAIN-MAP **Asset** (inherit `asset`) · optional docs row `so-ts-ferry`
- Persist: scalars + **DumpSpecs** attr bag · **no** Schema_* flatten P1
- `name` ← `name_ferry_terminal` · trống OK · **cấm** IsWeak→đoạn
- Point: ẩn `kmTo` · `kmFrom` **không** required · **cấm** ép `"0"`
- LOOKUP P1 init-data delta: `ferryTypes` · `ferryWorkLevels` · `riverChannelNames`
- Grid hide-low-fill OFF default: operation_time · chieurongben · chieudailuoiben · is_project_replacement
- Form reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · **cấm** fork
- Live `/so-ts?type=FERRY` · alias board-only
- Gates: tz_na · xco_get_only · share_tenant
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B |
| type | Loại TS | SearchInput asset-type | lock FERRY |
| route | Cao tốc/QL | SearchInput road-route | * |
| name | Tên bến phà | Text | ← name_ferry_terminal |
| loaibenpha | Loại bến | Dropdown | * init ferryTypes |
| level_worlk_id | Cấp CT | Dropdown | init ferryWorkLevels · typo key giữ |
| river_channel_name_id | Sông/luồng | Dropdown | init riverChannelNames |
| number_of_ferries_at_terminal | Số phà | Number | dumpSpecs · grid ON |
| + dump §4 rest | operation_time · KT · thay thế | Text/Number/Dropdown | dumpSpecs · grid OFF default |

## Screens / zones (ids only)

- S-LIST A–D+F+H · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HIST · S-CFG
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-ferry/ui/prototype/so-ts-ferry-list-prototype.html`
- peerStdUrl=`http://localhost:9301/so-ts?type=FERRY`

## API / tasks (ids only)

- FormMode↔API: list GET `?type=FERRY` · C/E/V/Copy POST/PUT/GET · soft DELETE · init-data LOOKUP delta · summary-by-type t03
- Entity/migration: RoadAsset + DumpSpecs · **migration=none**
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR

- none

## Full paths

- sa: `specs/so-ts-ferry/be/solution-discovery.md`
- design: `specs/so-ts-ferry/ui/design.md`
- prior compact: `handoff/design-compact.md` · `handoff/po-compact.md` · `handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | T-* pack · profile FERRY · S-ATTR · init LOOKUP · LeaveConfirm · dumpSpecLabels |
| Dev | `/agent-dev` · **cấm** start trong task SA |
| QA | e2e queued `/agent-qa*` only |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · map canvas · flatten P1 · Write MFE · e2e/build/start:std · Step 4b ở SA
