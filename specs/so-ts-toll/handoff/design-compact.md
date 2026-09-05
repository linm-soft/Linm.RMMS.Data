# handoff-compact — design · so-ts-toll

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `so-ts-toll` |
| title | Sổ TS — Trạm thu phí |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_d313d9f9` |
| typeCode | `TOLL` |
| dump | `tbl_toll_booth` |
| clusterUi | `station` · tile `t28` |
| prefix | `TFP-` |
| formPattern | **Full page** · CatalogFormShell · `data-form-cols="5"` |
| Kind | **B** A–D+F |
| design_confirm | **approve** (autoApprove ON) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:6e5c4611241727abb70516f3ba7828dd429ef7d5513ae99e83ba43c6da43347c` |
| headerFingerprintPrior | `sha256:d6cddccdf1c2265859effb78b3e149df640f2b46d3008cece22203ad6dd4aa4f` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-01T05:05:00.000Z` |

## Decisions

- Kind B · Full page 5 cols · reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-ATTR-WIDTH·S-GPS · **cấm** fork
- Live `/so-ts?type=TOLL` · alias `/so-ts-toll` board-only (optional redirect Navigate)
- Lookup P1: Dropdown LOOKUP_STATIC weighting_method · roof/pavement/grade/road_structure · operation_building_location_id
- `name` ← `station_name` · trống OK · **cấm** IsWeak
- Point: ẩn `kmTo` · `kmFrom` **không** required · **cấm** ép `"0"`
- Grid ON+hide-empty: làn cân · ETC · thủ công · cấp nhà · DT cổng · auxiliary_works_grade_id OFF default
- `width_*` gộp subsection S-ATTR-WIDTH theo mẫu detail
- LeaveConfirmModal · **cấm** native confirm
- API `api/v1/asset/road-assets` · **cấm ERP.*** · **cấm** invent so-ts path
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| type | Loại TS | SearchInput asset-type | prefill TOLL |
| route | Cao tốc/QL | SearchInput road-route | * |
| name | Tên trạm | Text | ← station_name |
| weighting_method | Phương pháp cân | Dropdown | LOOKUP_STATIC · grid ON hide-empty |
| number_weighting_lane | Số làn cân | Number | grid ON hide-empty |
| number_etc_lane | Số làn ETC | Number | grid ON hide-empty |
| number_manual_lane | Số làn thủ công | Number | grid ON hide-empty |
| house_grade_id | Cấp nhà | Dropdown | LOOKUP_STATIC · grid ON hide-empty |
| area_yoll_gate_pavement | DT mặt cổng (m²) | Number | grid hide-empty |
| roof_structures_gate_id | Kết cấu mái cổng | Dropdown | LOOKUP_STATIC |
| pavement_type_id | Loại mặt đường | Dropdown | LOOKUP_STATIC |
| road_structure_id | Kết cấu đường | Dropdown | LOOKUP_STATIC |
| operation_building_location_id | Vị trí nhà ĐH | Dropdown | S-LOC/S-ATTR |
| width_* | Chiều rộng hạng mục | Number | S-ATTR-WIDTH subsection |

## Screens / zones (ids only)

- DES-GRID-A · B · B-FILTER · C0 · C2 · C3 · D · F · H
- DES-FORM-Z1 · Z2 · S-ATTR-WIDTH · DES-LEAVE
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-toll/ui/prototype/so-ts-toll-list-prototype.html`
- peerStdUrl=`http://localhost:9301/so-ts?type=TOLL`
- mfeStdUrl=`http://localhost:9301/so-ts-toll`
- prototype=`specs/so-ts-toll/ui/prototype/so-ts-toll-list-prototype.html`

## API / tasks (ids only)

- FormMode C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE
- Init-data · summary-by-type tile t28
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR

- none

## Full paths

- design: `specs/so-ts-toll/ui/design.md`
- prototype: `specs/so-ts-toll/ui/prototype/so-ts-toll-list-prototype.html`
- prior compact: `handoff/po-compact.md` · `handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **SA** | path giữ · dumpSpecs vs flatten · LOOKUP seed · dumpSpecLabels |
| TL/Dev | profile TOLL · S-ATTR editable · S-ATTR-WIDTH · LeaveConfirmModal · hide-empty · alias route |
| QA | e2e queued `/agent-qa*` only |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · map canvas · re-scan demo · e2e/build/start:std ở Design · paste HTML vào compact
