# handoff-compact — po · so-ts-ferry

| | |
|--|--|
| schemaVersion | `1` |
| role | `po` |
| feature | `so-ts-ferry` |
| title | Sổ TS — Bến phà |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_46865749` |
| typeCode | `FERRY` |
| dump | `tbl_ferry_terminal` |
| clusterUi | `crossing` · tile `t03` |
| prefix | `PH-` |
| formPattern | **Full page** · CatalogFormShell 5 cols |
| gridAc | **PASS** · Kind B A–D+F · LinErpListFilterBar · input cụm phải |
| reportAc | **N/A** |
| leaveAc | **PASS** · LeaveConfirmModal · useAlert/Modal |
| screens | S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HIST · S-ALIAS |
| devSlash | `/agent-dev` |
| contentHashPrior | `sha256:0737298d3ce0a14ae36a4c9dfb37563e315723a476c59d953737019260a5a2f4` |
| headerFingerprintPrior | `sha256:58c00e1f58997b1effb970a6aaf3a1626625dd2f8783c11f260100336bf39291` |
| skillVersion | `2026.08.25.02` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-01T06:56:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B · Full page form
- Live list `/so-ts?type=FERRY` · alias `/so-ts-ferry` board-only (Design optional redirect)
- API: `api/v1/asset/road-assets` (+ BFF) · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`
- name ← `name_ferry_terminal` · trống OK · **cấm** IsWeak→đoạn
- Point: ẩn `kmTo` · kmFrom **không** required · **cấm** ép `"0"`
- Lookup P1: Dropdown LOOKUP_STATIC dump cho loaibenpha · level_worlk_id · river_channel_name_id · bool thay thế
- Grid hide-low-fill OFF default: operation_time · chieurongben · chieudailuoiben · is_project_replacement (SchemaConfig)
- Form reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · **cấm** fork · **cấm** tab legacy
- open questions: **none** (autoApprove chốt §9 requirement)

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B |
| type | Loại TS | SearchInput asset-type | prefill FERRY / ẩn |
| route | Cao tốc/QL | SearchInput road-route | * |
| kmFrom/kmTo | Lý trình filter | Text | filter only |
| orgTree | Đơn vị | SearchInput org-unit | |
| name | Tên bến phà | Text | ← name_ferry_terminal |
| loaibenpha | Loại bến | Dropdown | * LOOKUP_STATIC |
| level_worlk_id | Cấp CT | Dropdown | LOOKUP_STATIC · typo key giữ |
| river_channel_name_id | Sông/luồng | Dropdown | LOOKUP_STATIC |
| number_of_ferries_at_terminal | Số phà | Number | grid ON |
| + dump §4 rest | operation_time · KT · thay thế | Text/Number/Dropdown | form ON · grid OFF default |

## Screens / zones (ids only)

- List A/B/C/D + F · Form Full page 5 cols · map: none
- peerStdUrl=`http://localhost:9301/so-ts` · live `…/so-ts?type=FERRY`
- mfeStdUrl alias board `…/so-ts-ferry`
- reviewUrl= (Design)

## API / tasks (ids only)

- FormMode↔API: C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE
- Init-data statuses/sources · summary-by-type tile t03
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR

- none

## Full paths (Read only if needed)

- control-hint: `specs/_data-analy/features/so-ts-ferry-control-hint.md`
- real-data: `specs/_data-analy/features/so-ts-ferry-real-data.md`
- po: `specs/so-ts-ferry/po/requirement.md`
- prior compact: `specs/so-ts-ferry/handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **Design** | control-map · prototype shared-grid · reviewUrl · hide-low-fill · alias optional |
| SA | path giữ · dumpSpecs vs flatten · lookup seed |
| TL/Dev | profile FERRY · S-ATTR editable · dumpSpecLabels · LeaveConfirmModal |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · map canvas · re-scan demo · e2e/build/start:std ở PO
