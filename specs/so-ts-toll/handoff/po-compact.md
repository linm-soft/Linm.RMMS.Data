# handoff-compact — po · so-ts-toll

| | |
|--|--|
| schemaVersion | `1` |
| role | `po` |
| feature | `so-ts-toll` |
| title | Sổ TS — Trạm thu phí |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_a5a4bec3` |
| typeCode | `TOLL` |
| dump | `tbl_toll_booth` |
| clusterUi | `station` · tile `t28` |
| prefix | `TFP-` |
| formPattern | **Full page** · CatalogFormShell 5 cols |
| gridAc | **PASS** · Kind B A–D+F · LinErpListFilterBar · input cụm phải |
| reportAc | **N/A** |
| leaveAc | **PASS** · LeaveConfirmModal · useAlert/Modal |
| screens | S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HIST · S-ALIAS |
| devSlash | `/agent-dev` |
| contentHashPrior | `sha256:6e5c4611241727abb70516f3ba7828dd429ef7d5513ae99e83ba43c6da43347c` |
| headerFingerprintPrior | `sha256:d6cddccdf1c2265859effb78b3e149df640f2b46d3008cece22203ad6dd4aa4f` |
| skillVersion | `2026.08.25.02` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-01T05:00:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B · Full page form
- Live list `/so-ts?type=TOLL` · alias `/so-ts-toll` board-only (Design optional redirect)
- API: `api/v1/asset/road-assets` (+ BFF) · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`
- name ← `station_name` · trống OK · **cấm** IsWeak→đoạn
- Point: ẩn `kmTo` · kmFrom **không** required · **cấm** ép `"0"`
- Lookup P1: Dropdown LOOKUP_STATIC dump cho weighting_method · roof/pavement/grade/road_structure · operation_building_location_id
- Grid: ON+hide-empty làn cân/ETC/thủ công/DT cổng/cấp · auxiliary_works_grade_id OFF default · ẩn type/kmTo/SL/ĐVT
- width_*: Design gộp subsection S-ATTR theo mẫu detail
- Form reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · **cấm** fork · **cấm** tab legacy
- open questions: **none** (autoApprove chốt §9 requirement)

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B |
| type | Loại TS | SearchInput asset-type | prefill TOLL / ẩn |
| route | Cao tốc/QL | SearchInput road-route | * |
| kmFrom/kmTo | Lý trình filter | Text | filter only |
| orgTree | Đơn vị | SearchInput org-unit | |
| name | Tên trạm | Text | ← station_name |
| weighting_method | Phương pháp cân | Dropdown | LOOKUP_STATIC |
| number_weighting_lane | Số làn cân | Number | grid ON hide-empty |
| number_etc_lane | Số làn ETC | Number | grid ON hide-empty |
| number_manual_lane | Số làn thủ công | Number | grid ON hide-empty |
| number_one_stop_lane | Số làn một dừng | Number | optional hide-empty |
| roof_structures_gate_id | Kết cấu mái cổng | Dropdown | LOOKUP_STATIC |
| pavement_type_id | Loại mặt đường | Dropdown | LOOKUP_STATIC |
| area_yoll_gate_pavement | DT mặt cổng (m²) | Number | grid hide-empty |
| house_grade_id | Cấp nhà | Dropdown | LOOKUP_STATIC · hide-empty |
| road_structure_id | Kết cấu đường | Dropdown | LOOKUP_STATIC |
| operation_building_location_id | Vị trí nhà ĐH | Dropdown | S-LOC/S-ATTR |
| lat/lng | GPS | Number | S-GPS |

## Screens / zones (ids only)

- List A/B/C/D + F · Form Full page 5 cols · map: none
- peerStdUrl=`http://localhost:9301/so-ts?type=TOLL`
- mfeStdUrl alias board `…/so-ts-toll`
- reviewUrl= (Design)

## API / tasks (ids only)

- FormMode↔API: C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE
- Init-data statuses/sources · summary-by-type tile t28
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR

- none

## Full paths (Read only if needed)

- control-hint: `specs/_data-analy/features/so-ts-toll-control-hint.md`
- real-data: `specs/_data-analy/features/so-ts-toll-real-data.md`
- po: `specs/so-ts-toll/po/requirement.md`
- prior compact: `specs/so-ts-toll/handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **Design** | control-map · prototype shared-grid · reviewUrl · hide-empty · width_* grouping · alias optional |
| SA | path giữ · dumpSpecs vs flatten · lookup seed |
| TL/Dev | profile TOLL · S-ATTR editable · dumpSpecLabels · LeaveConfirmModal |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · map canvas · re-scan demo · e2e/build/start:std ở PO
