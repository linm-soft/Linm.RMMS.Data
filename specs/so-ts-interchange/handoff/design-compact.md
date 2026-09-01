# handoff-compact — design · so-ts-interchange

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `so-ts-interchange` |
| title | Sổ TS — Nút giao |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_964e2f7a` |
| typeCode | `INTERCHANGE` |
| dump | `tbl_intersection` |
| clusterUi | `crossing` · tile `t23` |
| prefix | `NG-` |
| formPattern | **Full page** · CatalogFormShell · `data-form-cols="5"` |
| Kind | **B** A–D+F |
| design_confirm | **approve** (autoApprove ON) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:65b62eed838d6077ebf0ff519ea67e2479d50d3ec49f754f056942ade05b112a` |
| headerFingerprintPrior | `sha256:f4c1a09d45e43219aaa1c7b1c713846500e77b074fb3920f6b55afdf3d494fbe` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.08.30.01` |
| rulesVersion | `2026.08.31.2` |
| writtenAt | `2026-09-01T06:05:00.000Z` |

## Decisions

- Kind B · Full page 5 cols · reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · **cấm** fork
- Live `/so-ts?type=INTERCHANGE` · alias `/so-ts-interchange` board-only (optional redirect)
- Lookup P1: Dropdown LOOKUP_STATIC type / giao với / hình dạng
- `name` ← `name_intersection` · trống OK · **cấm** IsWeak
- Point: ẩn `kmTo` · `kmFrom` **không** required · **cấm** ép `"0"`
- Grid hide-low-fill OFF default: khoangcach · ketcau · PT ĐK · cao đảo
- LeaveConfirmModal · **cấm** native confirm
- API `api/v1/asset/road-assets` · **cấm ERP.*** · **cấm** invent so-ts path
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| type | Loại TS | SearchInput asset-type | prefill INTERCHANGE |
| route | Cao tốc/QL | SearchInput road-route | * |
| name | Tên nút giao | Text | ← name_intersection |
| intersection_type_id | Loại nút | Dropdown | * LOOKUP_STATIC |
| intersect_with_id | Giao với | Dropdown | LOOKUP_STATIC |
| intersection_shape_id | Hình dạng | Dropdown | LOOKUP_STATIC |
| traffic_signal_lights | Đèn | Dropdown bool | grid ON |
| median_strip | Dải PC | Dropdown bool | grid ON |
| + dump §4 rest | ketcau · khoảng cách · PT ĐK · cao đảo | Text/Number | form ON · grid OFF default |

## Screens / zones (ids only)

- DES-GRID-A · B · B-FILTER · C0 · C2 · C3 · D · F · H
- DES-FORM-Z1 · Z2 · DES-LEAVE
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-interchange/ui/prototype/so-ts-interchange-list-prototype.html`
- peerStdUrl=`http://localhost:9301/so-ts?type=INTERCHANGE`
- prototype=`specs/so-ts-interchange/ui/prototype/so-ts-interchange-list-prototype.html`

## API / tasks (ids only)

- FormMode C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE
- Init-data · summary-by-type tile t23
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR

- none

## Full paths

- design: `specs/so-ts-interchange/ui/design.md`
- prototype: `specs/so-ts-interchange/ui/prototype/so-ts-interchange-list-prototype.html`
- prior compact: `handoff/po-compact.md` · `handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **SA** | path giữ · dumpSpecs vs flatten · LOOKUP seed · dumpSpecLabels |
| TL/Dev | profile INTERCHANGE · S-ATTR editable · LeaveConfirmModal · hide-low-fill |
| QA | e2e queued `/agent-qa*` only |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · map canvas · re-scan demo · e2e/build/start:std ở Design · paste HTML vào compact
