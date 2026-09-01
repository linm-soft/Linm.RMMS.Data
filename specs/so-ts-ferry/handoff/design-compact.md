# handoff-compact — design · so-ts-ferry

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `so-ts-ferry` |
| title | Sổ TS — Bến phà |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_c1864fe6` |
| typeCode | `FERRY` |
| dump | `tbl_ferry_terminal` |
| clusterUi | `crossing` · tile `t03` |
| prefix | `PH-` |
| formPattern | **Full page** · CatalogFormShell · `data-form-cols="5"` |
| Kind | **B** A–D+F |
| design_confirm | **approve** (autoApprove ON) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:0737298d3ce0a14ae36a4c9dfb37563e315723a476c59d953737019260a5a2f4` |
| headerFingerprintPrior | `sha256:58c00e1f58997b1effb970a6aaf3a1626625dd2f8783c11f260100336bf39291` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-01T00:15:00.000Z` |

## Decisions

- Kind B · Full page 5 cols · reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · **cấm** fork
- Live `/so-ts?type=FERRY` · alias `/so-ts-ferry` board-only (optional redirect)
- Lookup P1: Dropdown LOOKUP_STATIC loaibenpha · level_worlk_id · river_channel_name_id · bool thay thế
- `name` ← `name_ferry_terminal` · trống OK · **cấm** IsWeak
- Point: ẩn `kmTo` · `kmFrom` **không** required · **cấm** ép `"0"`
- Grid hide-low-fill OFF default: operation_time · chieurongben · chieudailuoiben · is_project_replacement
- LeaveConfirmModal · **cấm** native confirm
- API `api/v1/asset/road-assets` · **cấm ERP.*** · **cấm** invent so-ts path
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| type | Loại TS | SearchInput asset-type | prefill FERRY |
| route | Cao tốc/QL | SearchInput road-route | * |
| name | Tên bến phà | Text | ← name_ferry_terminal |
| loaibenpha | Loại bến | Dropdown | * LOOKUP_STATIC |
| level_worlk_id | Cấp CT | Dropdown | LOOKUP_STATIC · typo key giữ |
| river_channel_name_id | Sông/luồng | Dropdown | LOOKUP_STATIC |
| number_of_ferries_at_terminal | Số phà | Number | grid ON |
| + dump §4 rest | operation_time · KT · thay thế | Text/Number/Dropdown | form ON · grid OFF default |

## Screens / zones (ids only)

- DES-GRID-A · B · B-FILTER · C0 · C2 · C3 · D · F · H
- DES-FORM-Z1 · Z2 · DES-LEAVE
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-ferry/ui/prototype/so-ts-ferry-list-prototype.html`
- peerStdUrl=`http://localhost:9301/so-ts?type=FERRY`
- prototype=`specs/so-ts-ferry/ui/prototype/so-ts-ferry-list-prototype.html`

## API / tasks (ids only)

- FormMode C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE
- Init-data · summary-by-type tile t03
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR

- none

## Full paths

- design: `specs/so-ts-ferry/ui/design.md`
- prototype: `specs/so-ts-ferry/ui/prototype/so-ts-ferry-list-prototype.html`
- prior compact: `handoff/po-compact.md` · `handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **SA** | path giữ · dumpSpecs vs flatten · LOOKUP seed · dumpSpecLabels |
| TL/Dev | profile FERRY · S-ATTR editable · LeaveConfirmModal · hide-low-fill |
| QA | e2e queued `/agent-qa*` only |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · map canvas · re-scan demo · e2e/build/start:std ở Design · paste HTML vào compact
