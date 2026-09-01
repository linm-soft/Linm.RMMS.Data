# handoff-compact — po · so-ts-interchange

| | |
|--|--|
| schemaVersion | `1` |
| role | `po` |
| feature | `so-ts-interchange` |
| title | Sổ TS — Nút giao |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_6c6d0367` |
| typeCode | `INTERCHANGE` |
| dump | `tbl_intersection` |
| clusterUi | `crossing` · tile `t23` |
| prefix | `NG-` |
| formPattern | **Full page** · CatalogFormShell 5 cols |
| gridAc | **PASS** · Kind B A–D+F · LinErpListFilterBar · input cụm phải |
| reportAc | **N/A** |
| leaveAc | **PASS** · LeaveConfirmModal · useAlert/Modal |
| screens | S-LIST · S-FORM-C/E/V/Copy · S-ACT-DELETE · S-HIST · S-ALIAS |
| devSlash | `/agent-dev` |
| contentHashPrior | `sha256:65b62eed838d6077ebf0ff519ea67e2479d50d3ec49f754f056942ade05b112a` |
| headerFingerprintPrior | `sha256:f4c1a09d45e43219aaa1c7b1c713846500e77b074fb3920f6b55afdf3d494fbe` |
| skillVersion | `2026.08.25.02` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-01T05:50:00.000Z` |

## Decisions

- changeScope=`new_page` · packKind=`list` · Kind B · Full page form
- Live list `/so-ts?type=INTERCHANGE` · alias `/so-ts-interchange` board-only (Design optional redirect)
- API: `api/v1/asset/road-assets` (+ BFF) · **cấm ERP.*** · **cấm** invent `api/v1/so-ts/*`
- name ← `name_intersection` · trống OK · **cấm** IsWeak→đoạn
- Point: ẩn `kmTo` · kmFrom **không** required · **cấm** ép `"0"`
- Lookup P1: Dropdown LOOKUP_STATIC dump cho type / giao với / hình dạng
- Grid hide-low-fill OFF default: khoangcach · ketcau · PT ĐK · cao đảo (SchemaConfig)
- Form reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · **cấm** fork · **cấm** tab legacy
- open questions: **none** (autoApprove chốt §9 requirement)

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B |
| type | Loại TS | SearchInput asset-type | prefill INTERCHANGE / ẩn |
| route | Cao tốc/QL | SearchInput road-route | * |
| kmFrom/kmTo | Lý trình filter | Text | filter only |
| orgTree | Đơn vị | SearchInput org-unit | |
| name | Tên nút giao | Text | ← name_intersection |
| intersection_type_id | Loại nút | Dropdown | * LOOKUP_STATIC |
| intersect_with_id | Giao với | Dropdown | LOOKUP_STATIC |
| intersection_shape_id | Hình dạng | Dropdown | LOOKUP_STATIC |
| traffic_signal_lights | Đèn | Dropdown bool | grid ON |
| median_strip | Dải PC | Dropdown bool | grid ON |
| + dump §4 rest | ketcau · khoảng cách · PT ĐK · cao đảo | Text/Number/Dropdown | form ON · grid OFF default |

## Screens / zones (ids only)

- List A/B/C/D + F · Form Full page 5 cols · map: none
- peerStdUrl=`http://localhost:9301/so-ts` · live `…/so-ts?type=INTERCHANGE`
- mfeStdUrl alias board `…/so-ts-interchange`
- reviewUrl= (Design)

## API / tasks (ids only)

- FormMode↔API: C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE
- Init-data statuses/sources · summary-by-type tile t23
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR

- none

## Full paths (Read only if needed)

- control-hint: `specs/_data-analy/features/so-ts-interchange-control-hint.md`
- real-data: `specs/_data-analy/features/so-ts-interchange-real-data.md`
- po: `specs/so-ts-interchange/po/requirement.md`
- prior compact: `specs/so-ts-interchange/handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **Design** | control-map · prototype shared-grid · reviewUrl · hide-low-fill · alias optional |
| SA | path giữ · dumpSpecs vs flatten · lookup seed |
| TL/Dev | profile INTERCHANGE · S-ATTR editable · dumpSpecLabels · LeaveConfirmModal |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · map canvas · re-scan demo · e2e/build/start:std ở PO
