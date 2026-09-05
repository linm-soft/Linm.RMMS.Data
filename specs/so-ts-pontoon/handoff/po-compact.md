# handoff-compact — po · so-ts-pontoon

| | |
|--|--|
| schemaVersion | `1` |
| role | `po` |
| feature | `so-ts-pontoon` |
| title | Sổ TS — Cầu phao |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_093eb569` |
| typeCode | `PONTOON` |
| dump | `tbl_pontoon_bridge` |
| clusterUi | `crossing` · tile `t05` |
| prefix | `CP-` |
| formPattern | **Full page** · CatalogFormShell 5 cols |
| gridAc | **PASS** · Kind B A–D+F · LinErpListFilterBar · input cụm phải |
| reportAc | **N/A** |
| leaveAc | **PASS** · LeaveConfirmModal · useAlert/Modal |
| screens | S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HIST · S-ALIAS |
| devSlash | `/agent-dev` |
| contentHashPrior | `sha256:67f93e158eebae7ad4d0dd4818a73f93761b88c8bbbf339d6f1dc95c469e31c30` |
| headerFingerprintPrior | `sha256:274740e703cdc983a9596c332d5b72193abd47333e9031e5b4c129d7dbca8e61` |
| skillVersion | `2026.08.25.02` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-01T19:01:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B · Full page form
- Live list `/so-ts?type=PONTOON` · alias `/so-ts-pontoon` board-only (Design optional redirect)
- API: `api/v1/asset/road-assets` (+ BFF) · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`
- name ← `name_pontoon_bridge` · trống OK · **cấm** IsWeak→đoạn
- Point: ẩn `kmTo` · kmFrom **không** required · **cấm** ép `"0"`
- Lookup P1: Dropdown LOOKUP_STATIC dump cho `level_work_id` · `pontoon_bridge_type_id`
- Flatten: dumpSpecs P1 · flatten cột DB = SA migration P2
- Form reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · **cấm** fork · **cấm** tab legacy
- open questions: **none** (autoApprove chốt §9 requirement)

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B |
| type | Loại TS | SearchInput asset-type | prefill PONTOON / ẩn |
| route | Cao tốc/QL | SearchInput road-route | * |
| kmFrom/kmTo | Lý trình filter | Text | filter only |
| orgTree | Đơn vị | SearchInput org-unit | |
| name | Tên cầu phao | Text | ← name_pontoon_bridge |
| name_river | Tên sông | Text | S-ATTR |
| level_work_id | Cấp CT | Dropdown | LOOKUP_STATIC |
| width_pontoon_bridge | Chiều rộng (m) | Number | S-ATTR |
| length_pontoon_bridge | Chiều dài (m) | Number | S-ATTR |
| pontoon_bridge_type_id | Loại cầu phao | Dropdown | * LOOKUP_STATIC |
| operational_load | Tải trọng cho phép | Text | S-ATTR |

## Screens / zones (ids only)

- List A/B/C/D + F · Form Full page 5 cols · map: none
- peerStdUrl=`http://localhost:9301/so-ts` · live `…/so-ts?type=PONTOON`
- mfeStdUrl alias board `…/so-ts-pontoon`
- reviewUrl= (Design)

## API / tasks (ids only)

- FormMode↔API: C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE
- Init-data statuses/sources · summary-by-type tile t05 · gov-vn count **2**
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR

- none

## Full paths (Read only if needed)

- control-hint: `specs/_data-analy/features/so-ts-pontoon-control-hint.md`
- real-data: `specs/_data-analy/features/so-ts-pontoon-real-data.md`
- po: `specs/so-ts-pontoon/po/requirement.md`
- prior compact: `specs/so-ts-pontoon/handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **Design** | control-map · prototype shared-grid · reviewUrl · alias optional |
| SA | path giữ · dumpSpecs vs flatten · lookup seed |
| TL/Dev | profile PONTOON · S-ATTR editable · dumpSpecLabels · LeaveConfirmModal |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · map canvas · re-scan demo · e2e/build/start:std ở PO
