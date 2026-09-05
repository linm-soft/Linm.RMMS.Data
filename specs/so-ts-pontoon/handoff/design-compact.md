# handoff-compact — design · so-ts-pontoon

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `so-ts-pontoon` |
| title | Sổ TS — Cầu phao |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_064d5b17` |
| typeCode | `PONTOON` |
| dump | `tbl_pontoon_bridge` |
| clusterUi | `crossing` · tile `t05` |
| prefix | `CP-` |
| formPattern | **Full page** · CatalogFormShell · `data-form-cols="5"` |
| Kind | **B** A–D+F |
| design_confirm | **approve** (autoApprove ON) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:67f93e158eebae7ad4d0dd4818a73f93761b88c8bbbf339d6f1dc95c469e31c30` |
| headerFingerprintPrior | `sha256:274740e703cdc983a9596c332d5b72193abd47333e9031e5b4c129d7dbca8e61` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-01T19:10:00.000Z` |

## Decisions

- Kind B · Full page 5 cols · reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · **cấm** fork
- Live `/so-ts?type=PONTOON` · alias `/so-ts-pontoon` board-only (optional redirect)
- Lookup P1: Dropdown LOOKUP_STATIC `level_work_id` · `pontoon_bridge_type_id`
- `name` ← `name_pontoon_bridge` · trống OK · **cấm** IsWeak
- Point: ẩn `kmTo` · `kmFrom` **không** required · **cấm** ép `"0"`
- LeaveConfirmModal · **cấm** native confirm
- API `api/v1/asset/road-assets` · **cấm ERP.*** · **cấm** invent so-ts path
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| type | Loại TS | SearchInput asset-type | prefill PONTOON |
| route | Cao tốc/QL | SearchInput road-route | * |
| name | Tên cầu phao | Text | ← name_pontoon_bridge |
| name_river | Tên sông | Text | S-ATTR |
| level_work_id | Cấp CT | Dropdown | LOOKUP_STATIC |
| width_pontoon_bridge | Chiều rộng (m) | Number | S-ATTR |
| length_pontoon_bridge | Chiều dài (m) | Number | S-ATTR |
| pontoon_bridge_type_id | Loại cầu phao | Dropdown | * LOOKUP_STATIC |
| operational_load | Tải trọng | Text | S-ATTR |

## Screens / zones (ids only)

- DES-GRID-A · B · B-FILTER · C0 · C2 · C3 · D · F · H
- DES-FORM-Z1 · Z2 · DES-LEAVE
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-pontoon/ui/prototype/so-ts-pontoon-list-prototype.html`
- peerStdUrl=`http://localhost:9301/so-ts?type=PONTOON`
- prototype=`specs/so-ts-pontoon/ui/prototype/so-ts-pontoon-list-prototype.html`

## API / tasks (ids only)

- FormMode C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE
- Init-data · summary-by-type tile t05 · gov-vn count **2**
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR

- none

## Full paths

- design: `specs/so-ts-pontoon/ui/design.md`
- prototype: `specs/so-ts-pontoon/ui/prototype/so-ts-pontoon-list-prototype.html`
- prior compact: `handoff/po-compact.md` · `handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **SA** | path giữ · dumpSpecs vs flatten · LOOKUP seed · dumpSpecLabels |
| TL/Dev | profile PONTOON · S-ATTR editable · LeaveConfirmModal |
| QA | e2e queued `/agent-qa*` only |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · map canvas · re-scan demo · e2e/build/start:std ở Design · paste HTML vào compact
