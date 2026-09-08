# Data-analy — controlHint — csdl-bieu-06 (Kind B list + Kind D Slideout · Biểu 06)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-06` |
| packKind | `list` |
| mode | `feature_context` (new_page · CTX + cluster analy + hub demo · synthetic) |
| changeScope | `new_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| versionGate | `ok` (first fill stubs · CTX+demo hash recorded · autoApprove queue) |
| contentHash | `sha256:ffc5c8381b04dcec3f0376df87187012f34b16bf211a3e3fb7311a8375a386f0` |
| headerFingerprint | `sha256:3b2f5c531f0538509147846466d92090a3c8f5adc05a4be6d1dbb80ad73ff2a7` |
| analyzedAt | `2026-09-05T07:12:53.176Z` |
| cluster | `csdl-cuc-2026` · Excel sheet Biểu 6 · **19 cột** |
| taskId | `task_b6ef926c` |
| autoApprove | `ON` (queue) |
| realData | `specs/_data-analy/features/csdl-bieu-06-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records?resource=underpasses` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-06` · hub deep-link `/so-ts/csdl-so-sach?resource=underpasses` |
| resource | `underpasses` |
| formNo | `06` · title VN **Hầm chui DS + hộp KT** |
| peerSoTs | `so-ts-underpass` (UNDERPASS) — deep-link OK · **cấm** merge 1 form hai chuẩn · **≠** Sổ TS |
| runMode | `new_page` · typed form thay generic 3 ô `detail*` |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** typed DTO + migration.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — demo = zone/field **tham chiếu** · **cấm** demo-json / localStorage SSOT.  
> **Cấm** chỉ 3 ô `detailPrimary`/`detailSpec`/`detailExtra` — form = đủ cột Excel (cite analy).  
> CTX: **Thêm hộp kỹ thuật** → `underpassKind` phân loại hầm chui DS / hộp KT.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/csdl-bieu-06.md` | `ffc5c8381b04dcec3f0376df87187012f34b16bf211a3e3fb7311a8375a386f0` |
| Parent hub | `docs/context/features/csdl-so-sach.md` | cite hub Kind G · resource `underpasses` |
| Cluster analy | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | Biểu 6 · 19 cột · peer `so-ts-underpass` · hộp KT |
| DB API SSOT | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` | § Biểu 6 `Underpass` |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` | `c2c9f8194cb104b3202bcaa46a589c9baba5cf8062aa12e7d0872a9e96eba7ae` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/csdl-so-sach.html` | hub+list+slideout chrome tham chiếu · prefix `HC` |
| Demo data | `Linm.RMMS.Demo/src/demo/asset/js/csdl-so-sach-data.js` | `underpasses` · formNo 6 · labels khẩu độ / dài |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | `csdl-so-sach` → Asset · `asset` |
| Live API | `CsdlCatalogRecordsController` | `api/v1/asset/csdl-records` (polymorphic shell) |
| Live MFE | `CsdlSoSachPage` · `CsdlFormSlideout` | generic 3-field — **GAP-BIEU06-TYPED-01** |
| Excel | `data-import/Sổ sách, biểu mẫu trình LĐ Cục/1. Biểu mẫu CSDL.xls` sheet Biểu 6 | real source · import OUT Dev/XLS task |
| Peer CTX | `docs/context/features/so-ts-underpass.md` | Sổ TS deep-link only · **≠** biểu Cục · API `road-assets` |

Normalized header (19):

`code|roadCode|roadName|province|kmPoint|underpassKind|apertureM|pipeCount|bodyStructure|portalStructure|lengthM|designLoad|pavementInside|lighting|drainage|builtYear|status|manageUnit|notes`

## § Delta Current vs New (`new_page` · `task_b6ef926c`)

| ID | Current | New (this analy) | Surface |
|----|---------|------------------|---------|
| GAP-BIEU06-TYPED-01 | Hub list `underpasses` + form 3 ô `detail*` | Typed **19 cột** Excel Biểu 6 · Slideout 2col | form + list cols |
| GAP-BIEU06-ROUTE-01 | Chỉ deep-link hub `?resource=underpasses` | Alias mfeStd `/csdl-bieu-06` · giữ hub entry | shell / Design |
| GAP-BIEU06-KIND-01 | Demo title chỉ «Hầm chui dân sinh» | `underpassKind` hầm chui DS / hộp KT LOOKUP · **CTX thêm hộp KT** | form + filter + list |
| GAP-BIEU06-PIPE-01 | — | `pipeCount` số ống / ngăn | form / list |
| GAP-BIEU06-STRUCT-01 | — | `bodyStructure` thân + `portalStructure` cửa typed | form |
| GAP-BIEU06-LOAD-01 | — | `designLoad` tải thiết kế (HL93 / …) | form / list |
| GAP-BIEU06-PAVE-01 | — | `pavementInside` mặt trong BTXM/BTN LOOKUP | form |
| GAP-BIEU06-LIGHT-01 | — | `lighting` chiếu sáng | form |
| GAP-BIEU06-DRAIN-01 | — | `drainage` thoát nước | form |
| GAP-BIEU06-POINT-01 | Demo km generic | `kmPoint` Point (geom Underpass) · **không** ép kmTo | filter + form |
| GAP-CSDL-ROAD-01 | `roadName` Text free (hub) | `SearchInput` `road-route` + `roadCode` | filter + form |
| GAP-CSDL-PROV-01 | LOOKUP_STATIC 5 tỉnh | giữ P1 **hoặc** master province — PO chốt | filter + form |
| GAP-CSDL-ORG-01 | `manageUnit` Text | SearchInput tree `org-unit` · DEFER P2 OK | form |
| GAP-CSDL-CUC-03 | Form generic không đủ cột | Đóng gap cho Biểu 6 khi typed PASS | form |
| GAP-CSDL-XLS-01 | Import/export stub | Sheet Biểu 6 đúng 19 cột — OUT pack Dev/XLS | toolbar |
| GAP-BIEU06-PEER-01 | Peer Sổ TS `so-ts-underpass` | Deep-link OK · **cấm** 1 form hai chuẩn · **GAP-CSDL-CUC-11** · **≠** `road-assets` API | nav |

**Không** đổi: API prefix `api/v1/asset/csdl-records` · resource key `underpasses` · Kind B list A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · **cấm ERP.*** · IdCode **cấm** Guid · prefix **`HC`**.

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| Entry | Hub card **hoặc** `/csdl-bieu-06` | Title VN · back hub · **cấm** slug trên card |
| List A | Header | «Biểu 06 — Hầm chui DS + hộp KT» · back hub |
| List B | Toolbar + filter | SearchTextInput · province · status · road SearchInput · kmPoint · underpassKind · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub · **search must work** · **cấm** nút Tìm riêng |
| List C | `LinCatalogDataGrid` | Cột typed (không chỉ 3 detail) · STT · row menu Xem/Sửa/Copy/Xóa/Lịch sử · kéo cột ON |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form | Kind **D** Slideout Z1–Z3 · 2col | C/E/V/Copy · View=`readOnly` · LeaveConfirmModal dirty · footer Lưu/Hủy |
| Map | none | deep-link gis only · **cấm** invent map canvas |

**Skip chrome:** GOVOne logo/bell/user · demo skin.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · đường · ghi chú |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | **GAP-CSDL-PROV-01** |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC | tot/tb/kem/hong |
| roadCode | Đường | `SearchInput` | **road-route** | **GAP-CSDL-ROAD-01** |
| kmPoint | Lý trình (Km) | `Number` | — | Point · **GAP-BIEU06-POINT-01** |
| underpassKind | Loại | `Dropdown` | LOOKUP_STATIC | hầm chui DS / hộp KT · **GAP-BIEU06-KIND-01** |

## Control hint — form fields (Slideout · Excel Biểu 6 · 19 cột)

| # | Field key | Label | controlHint | required | Notes |
|---|-----------|-------|-------------|----------|-------|
| — | code | Mã | `Text` readonly | auto | IdCode prefix `HC` · **cấm** Guid |
| 1–2 | roadCode / roadName | Mã/Tên đường | `SearchInput` | * | catalogKind `road-route` |
| 3 | province | Địa danh | `Dropdown` | * | LOOKUP_STATIC P1 |
| 4 | kmPoint | Lý trình (Km) | `Number` | * | decimal Point · **GAP-BIEU06-POINT-01** |
| 5 | underpassKind | Loại CT | `Dropdown` | * | hầm chui DS / hộp KT · **GAP-BIEU06-KIND-01** |
| 6 | apertureM | Khẩu độ (m) | `Number` | * | DB `ApertureM` · **Q-APERTURE** |
| 7 | pipeCount | Số ống / ngăn | `Number` | | integer ≥1 · **GAP-BIEU06-PIPE-01** · **Q-PIPE** |
| 8 | bodyStructure | Kết cấu thân | `Dropdown` hoặc `Text` | | BT / BTCT / … · **GAP-BIEU06-STRUCT-01** |
| 9 | portalStructure | Kết cấu cửa | `Dropdown` hoặc `Text` | | DB `PortalStructure` |
| 10 | lengthM | Chiều dài (m) | `Number` | * | |
| 11 | designLoad | Tải thiết kế | `Dropdown` hoặc `Text` | | HL93 / H30 / … · **GAP-BIEU06-LOAD-01** · **Q-LOAD** |
| 12 | pavementInside | Mặt trong | `Dropdown` | | BTXM / BTN · **GAP-BIEU06-PAVE-01** |
| 13 | lighting | Chiếu sáng | `Text` hoặc `Dropdown` | | có/không hoặc mô tả · **GAP-BIEU06-LIGHT-01** · **Q-LIGHT** |
| 14 | drainage | Thoát nước | `Text` hoặc `Dropdown` | | **GAP-BIEU06-DRAIN-01** · **Q-DRAIN** |
| 15 | builtYear | Năm XD/SD | `Number` | | year |
| 16 | status | Tình trạng | `Dropdown` | * | LOOKUP_STATIC |
| 17 | manageUnit | ĐV QL | `Text` → SearchInput | | **GAP-CSDL-ORG-01** |
| 18–19 | notes (+ code) | Ghi chú | `Textarea` | | header 19 keys = `code` + 18 field rows trên |

Optional form extras (không đếm Excel 19): `side` Dropdown L/R/C · `ownerUnit` Text — Design/PO.

## Control hint — actions

| Action | Surface | Notes |
|--------|---------|-------|
| back-hub | List A | về `/so-ts/csdl-so-sach` |
| create / view / edit / copy / delete | Toolbar + row | soft-delete API |
| save / cancel | Form footer | LeaveConfirmModal dirty |
| import / export | Toolbar | stub · XLS Biểu 6 OUT pack |
| history | Toolbar / row | stub modal OK P2 |
| schema-config | Toolbar | UiSchema typed `underpasses` |
| peer-sots | Toolbar / row (opt) | deep-link `/so-ts?type=UNDERPASS` · **cấm** merge form |

## Open questions (PO trước Design)

| ID | Q | Options |
|----|---|---------|
| Q-ROUTE | Alias `/csdl-bieu-06` Navigate ngay hay DEFER hub-only? | alias_now · hub_only |
| Q-PROV | Province static vs master? | keep_static · master_province |
| Q-APERTURE | `apertureM` Number m (DB) vs free-text WxH? | number_m · free_text |
| Q-PIPE | `pipeCount` bắt buộc khi hộp KT? | optional · required_when_box |
| Q-LOAD | `designLoad` LOOKUP (HL93/H30/…) vs free-text? | lookup_hl · free_text |
| Q-LIGHT | `lighting` Dropdown có/không vs Text mô tả? | yes_no · free_text |
| Q-DRAIN | `drainage` Dropdown vs Text? | yes_no · free_text |
| Q-KIND | Seed LOOKUP `underpassKind`? | hc_ds_hop_kt · excel_seed |

## Handoff

| Role | Dùng packet |
|------|-------------|
| **PO** | § Delta + open Q → `requirement.md` |
| **Design** | control-map khớp bảng · prototype list+slideout 19 cột · reviewUrl |
| **SA** | path `api/v1/asset/csdl-records` · typed DTO/UiSchema · Schema_CsdlBieu6 |
| **TL/Dev** | Wire controlHint · **cấm** đoán Text vs SearchInput |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHash | `sha256:ffc5c8381b04dcec3f0376df87187012f34b16bf211a3e3fb7311a8375a386f0` |
| headerFingerprint | `sha256:3b2f5c531f0538509147846466d92090a3c8f5adc05a4be6d1dbb80ad73ff2a7` |
| generatedAt | 2026-09-05T07:12:53.176Z |
| versionGate | ok |
| taskId | task_b6ef926c |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:ffc5c8381b04dcec3f0376df87187012f34b16bf211a3e3fb7311a8375a386f0 -->
