# handoff-compact — design · so-ts-lighting

| | |
|--|--|
| schemaVersion | `1` |
| role | `design` |
| feature | `so-ts-lighting` |
| title | Sổ TS — Chiếu sáng đường |
| packKind | `list` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_9224ca23` |
| typeCode | `LIGHTING` |
| dump | `tbl_street_lighting` |
| clusterUi | `ops` · tile `t18` |
| prefix | `CS-` |
| formPattern | **Full page** · CatalogFormShell · `data-form-cols="5"` |
| Kind | **B** A–D+F |
| design_confirm | **approve** (autoApprove ON) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| contentHashPrior | `sha256:d5601a5c6b83c29e68bbac0fe8ef8a880616a4fc5b053a6480fb82501e90a2aa` |
| headerFingerprintPrior | `sha256:ca587f46bfa8c91bf0f8d30de24bd8e8db206285936ebdfa3ccc7cc43a303316` |
| skillVersion | `2026.08.29.03` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.09.01.1` |
| writtenAt | `2026-09-01T20:30:00.000Z` |

## Decisions

- Kind B · Full page 5 cols · reuse S-META·S-ROUTE·S-LOC-POINT·S-NAME·S-ATTR·S-GPS · **cấm** fork
- Live `/so-ts?type=LIGHTING` · alias `/so-ts-lighting` board-only (optional redirect)
- Lookup P1: Dropdown LOOKUP_STATIC management/bulb/MBA type/control/vitri
- `name` = mô tả hệ thống · trống OK · **cấm** IsWeak route làm tên duy nhất
- Point: ẩn `kmTo` · `kmFrom` **không** required · **cấm** ép `"0"`
- Grid **ON mẫu** + hide-empty cột số khi 0/null · ẩn type/kmTo/SL/ĐVT · cấm Solar*/LampWatt
- LeaveConfirmModal · **cấm** native confirm
- KCHT tile `t18` drill OK · count import **4871**
- API `api/v1/asset/road-assets` · **cấm ERP.*** · **cấm** invent so-ts path
- open questions: **none**

## Inventory (slim)

| id | label | controlHint | notes |
|----|-------|-------------|-------|
| search | Tìm | SearchTextInput | Zone B · 🔍 cụm phải |
| type | Loại TS | SearchInput asset-type | prefill LIGHTING |
| route | Cao tốc/QL | SearchInput road-route | * |
| name | Tên hệ thống | Text | GAP-LT-NAME-01 |
| management_id | ĐV QL sử dụng | Dropdown | LOOKUP_STATIC · grid ON |
| number_pole_light_bulb | Số cột đèn | Number | hide-empty OK |
| number_light | Số đèn | Number | hide-empty OK |
| bulb_type_id | Loại bóng đèn | Dropdown | LOOKUP_STATIC |
| type_transforming_station_id | Loại trạm biến áp | Dropdown | LOOKUP_STATIC |
| capacity_transformer | Công suất MBA (kVA) | Number/Text | hide-empty OK |
| number_control_box | Số tủ điều khiển | Number | hide-empty OK |
| control_method_id | Phương thức điều khiển | Dropdown | LOOKUP_STATIC |
| vitri | Mặt cắt | Dropdown | L/R/C |

## Screens / zones (ids only)

- DES-GRID-A · B · B-FILTER · C0 · C2 · C3 · D · F · H
- DES-FORM-Z1 · Z2 · DES-LEAVE
- reviewUrl=`file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-lighting/ui/prototype/so-ts-lighting-list-prototype.html`
- peerStdUrl=`http://localhost:9301/so-ts?type=LIGHTING`
- prototype=`specs/so-ts-lighting/ui/prototype/so-ts-lighting-list-prototype.html`

## API / tasks (ids only)

- FormMode C/E/V/Copy ↔ POST/PUT/GET road-assets · soft DELETE
- Init-data · summary-by-type tile t18
- T-* = TL (Dev `/agent-dev`)

## UNCLEAR

- none

## Full paths

- design: `specs/so-ts-lighting/ui/design.md`
- prototype: `specs/so-ts-lighting/ui/prototype/so-ts-lighting-list-prototype.html`
- prior compact: `handoff/po-compact.md` · `handoff/data_analy-compact.md`

## Next

| Role | Need |
|------|------|
| **SA** | path giữ · dumpSpecs vs flatten · LOOKUP seed · DefaultCodePrefix CS- · dumpSpecLabels |
| TL/Dev | profile LIGHTING · S-ATTR editable · LeaveConfirmModal · grid ON mẫu |
| QA | e2e queued `/agent-qa*` only |

## Cấm (compact)

Demo/localStorage SSOT · ERP.* · invent API · fork AssetFormPage · tab legacy · invent map · re-scan demo · e2e/build/start:std ở Design · paste HTML vào compact
