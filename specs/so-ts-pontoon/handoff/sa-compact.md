# handoff-compact — sa · so-ts-pontoon

| | |
|--|--|
| schemaVersion | `1` |
| role | `sa` |
| feature | `so-ts-pontoon` |
| title | Sổ TS — Cầu phao |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_1e2f889c` |
| typeCode | `PONTOON` |
| dump | `tbl_pontoon_bridge` |
| clusterUi | `crossing` · tile `t05` |
| prefix | `CP-` |
| formPattern | **Full page** · CatalogFormShell · `data-form-cols="5"` |
| Kind | **B** A–D+F+H |
| solution_confirm | **approve** (autoApprove ON) |
| sa_tz_gate | `tz_na` |
| sa_xco_gate | `xco_get_only` |
| sa_shared_table | `share_tenant` |
| entity | `RoadAssetEntity` · `rmms_road_assets` |
| migration | **none** · dumpSpecs P1 · flatten **DEFER P2** |
| contentHashPrior | `sha256:67f93e158eebae7ad4d0dd4818a73f93761b88c8bbbf339d6f1dc95c469e31c30` |
| headerFingerprintPrior | `sha256:274740e703cdc983a9596c332d5b72193abd47333e9031e5b4c129d7dbca8e61` |
| skillVersion | `2026.08.24.01` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-01T19:20:00.000Z` |

## Decisions

- API **giữ** `api/v1/asset/road-assets` (+ BFF proxy) · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`
- DOMAIN-MAP **Asset** (inherit `asset`) · optional docs row `so-ts-pontoon`
- Persist: scalars + **DumpSpecs** attr bag · **no** Schema_* flatten P1
- `name` ← `name_pontoon_bridge` · trống OK · **cấm** IsWeak→đoạn
- Point: ẩn `kmTo` · `kmFrom` **không** required · **cấm** ép `"0"`
- LOOKUP P1 init-data delta: `pontoonWorkLevels` · `pontoonBridgeTypes`
- Form reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · **cấm** fork
- Live `/so-ts?type=PONTOON` · alias board-only `/so-ts-pontoon`
- Gates: tz_na · xco_get_only · share_tenant
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B |
| type | Loại TS | SearchInput asset-type | lock PONTOON |
| route | Cao tốc/QL | SearchInput road-route | * |
| name | Tên cầu phao | Text | ← name_pontoon_bridge |
| name_river | Tên sông | Text | S-ATTR |
| level_work_id | Cấp CT | Dropdown | init pontoonWorkLevels |
| width_pontoon_bridge | Chiều rộng (m) | Number | S-ATTR |
| length_pontoon_bridge | Chiều dài (m) | Number | S-ATTR |
| pontoon_bridge_type_id | Loại cầu phao | Dropdown | * init pontoonBridgeTypes |
| operational_load | Tải trọng | Text | S-ATTR |

## Screens / zones (ids only)

- S-LIST A–D+F+H · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HIST · S-CFG · S-ALIAS
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-pontoon/ui/prototype/so-ts-pontoon-list-prototype.html`
- peerStdUrl=`http://localhost:9301/so-ts?type=PONTOON`

## API / tasks (ids only)

- FormMode↔API: list GET `?type=PONTOON` · C/E/V/Copy POST/PUT/GET · soft DELETE · init-data LOOKUP delta · summary-by-type t05
- Entity/migration: RoadAsset + DumpSpecs · **migration=none**
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR

- none

## Full paths

- sa: `specs/so-ts-pontoon/be/solution-discovery.md`
- design: `specs/so-ts-pontoon/ui/design.md`
- prior compact: `handoff/design-compact.md` · `handoff/po-compact.md` · `handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **TL** | T-* pack · profile PONTOON · S-ATTR · init LOOKUP · LeaveConfirm · dumpSpecLabels |
| Dev | `/agent-dev` · **cấm** start trong task SA |
| QA | e2e queued `/agent-qa*` only |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · map canvas · flatten P1 · Write MFE · e2e/build/start:std · Step 4b ở SA
