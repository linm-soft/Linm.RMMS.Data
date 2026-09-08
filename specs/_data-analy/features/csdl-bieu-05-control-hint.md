# Data-analy — controlHint — csdl-bieu-05 (Kind B list + Kind D Slideout · Biểu 05)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-05` |
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
| contentHash | `sha256:fd4e6899790aa98d6bc4cb628dc9c0bc5efc90acb3abf03a7b157cf123590117` |
| headerFingerprint | `sha256:008898723c0a5b94fae7de8810903b1dcc39ccfd0dfa5d4a36dd398eb088ac2f` |
| analyzedAt | `2026-09-05T06:30:58.027Z` |
| cluster | `csdl-cuc-2026` · Excel sheet Biểu 5 · **18 cột** |
| taskId | `task_fdcb7c28` |
| autoApprove | `ON` (queue) |
| realData | `specs/_data-analy/features/csdl-bieu-05-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records?resource=ditches` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-05` · hub deep-link `/so-ts/csdl-so-sach?resource=ditches` |
| resource | `ditches` |
| formNo | `05` · title VN **Rãnh các loại** |
| peerSoTs | `so-ts-ditch` (DITCH) — deep-link OK · **cấm** merge 1 form hai chuẩn · **≠** Sổ TS |
| runMode | `new_page` · typed form thay generic 3 ô `detail*` |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** typed DTO + migration.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — demo = zone/field **tham chiếu** · **cấm** demo-json / localStorage SSOT.  
> **Cấm** chỉ 3 ô `detailPrimary`/`detailSpec`/`detailExtra` — form = đủ cột Excel (cite analy).

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/csdl-bieu-05.md` | `fd4e6899790aa98d6bc4cb628dc9c0bc5efc90acb3abf03a7b157cf123590117` |
| Parent hub | `docs/context/features/csdl-so-sach.md` | cite hub Kind G · resource `ditches` |
| Cluster analy | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | Biểu 5 · 18 cột · peer `so-ts-ditch` |
| DB API SSOT | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` | § Biểu 5 `Ditch` |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` | `c2c9f8194cb104b3202bcaa46a589c9baba5cf8062aa12e7d0872a9e96eba7ae` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/csdl-so-sach.html` | hub+list+slideout chrome tham chiếu · prefix `RN` |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | `csdl-so-sach` → Asset · `asset` |
| Live API | `CsdlCatalogRecordsController` | `api/v1/asset/csdl-records` (polymorphic shell) |
| Live MFE | `CsdlSoSachPage` · `CsdlFormSlideout` | generic 3-field — **GAP-BIEU05-TYPED-01** |
| Excel | `data-import/Sổ sách, biểu mẫu trình LĐ Cục/1. Biểu mẫu CSDL.xls` sheet Biểu 5 | real source · import OUT Dev/XLS task |
| Peer CTX | `docs/context/features/so-ts-ditch.md` | Sổ TS deep-link only · **≠** biểu Cục |

Normalized header:

`code|roadCode|roadName|province|kmFrom|kmTo|side|ditchKind|structure|shape|apertureSize|lengthM|drainageCapacity|builtYear|status|manageUnit|ownerUnit|notes`

## § Delta Current vs New (`new_page` · `task_fdcb7c28`)

| ID | Current | New (this analy) | Surface |
|----|---------|------------------|---------|
| GAP-BIEU05-TYPED-01 | Hub list `ditches` + form 3 ô `detail*` | Typed **18 cột** Excel Biểu 5 · Slideout 2col | form + list cols |
| GAP-BIEU05-ROUTE-01 | Chỉ deep-link hub `?resource=ditches` | Alias mfeStd `/csdl-bieu-05` · giữ hub entry | shell / Design |
| GAP-BIEU05-KIND-01 | — | `ditchKind` hở/kín LOOKUP | form |
| GAP-BIEU05-SHAPE-01 | — | Hình + khẩu độ + kết cấu (KC) typed | form |
| GAP-BIEU05-DRAIN-01 | — | `drainageCapacity` khả năng thoát | form / list |
| GAP-BIEU05-RANGE-01 | Demo `kmFrom`/`kmTo` | Filter + form Từ–đến (range) | filter + form |
| GAP-CSDL-ROAD-01 | `roadName` Text free (hub) | `SearchInput` `road-route` + `roadCode` | filter + form |
| GAP-CSDL-PROV-01 | LOOKUP_STATIC 5 tỉnh | giữ P1 **hoặc** master province — PO chốt | filter + form |
| GAP-CSDL-ORG-01 | `manageUnit` Text | SearchInput tree `org-unit` · DEFER P2 OK | form |
| GAP-CSDL-CUC-03 | Form generic không đủ cột | Đóng gap cho Biểu 5 khi typed PASS | form |
| GAP-CSDL-XLS-01 | Import/export stub | Sheet Biểu 5 đúng 18 cột — OUT pack Dev/XLS | toolbar |
| GAP-BIEU05-PEER-01 | Peer Sổ TS `so-ts-ditch` | Deep-link OK · **cấm** 1 form hai chuẩn · **GAP-CSDL-CUC-11** | nav |

**Không** đổi: API prefix `api/v1/asset/csdl-records` · resource key `ditches` · Kind B list A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · **cấm ERP.*** · IdCode **cấm** Guid.

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| Entry | Hub card **hoặc** `/csdl-bieu-05` | Title VN · back hub · **cấm** slug trên card |
| List A | Header | «Biểu 05 — Rãnh các loại» · back hub |
| List B | Toolbar + filter | SearchTextInput · province · status · road SearchInput · kmFrom/kmTo · ditchKind · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub · **search must work** · **cấm** nút Tìm riêng |
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
| kmFrom | Km từ | `Number` | — | filter range |
| kmTo | Km đến | `Number` | — | filter range |
| ditchKind | Loại rãnh | `Dropdown` | LOOKUP_STATIC | hở / kín · **GAP-BIEU05-KIND-01** |

## Control hint — form fields (Slideout · Excel Biểu 5 · 18 cột)

| # | Field key | Label | controlHint | required | Notes |
|---|-----------|-------|-------------|----------|-------|
| — | code | Mã | `Text` readonly | auto | IdCode prefix `RN` · **cấm** Guid |
| 1–2 | roadCode / roadName | Mã/Tên đường | `SearchInput` | * | catalogKind `road-route` |
| 3 | province | Địa danh | `Dropdown` | * | LOOKUP_STATIC P1 |
| 4–5 | kmFrom / kmTo | Km từ–đến | `Number` | * | decimal · **GAP-BIEU05-RANGE-01** |
| 6 | side | Vị trí L/R | `Dropdown` | * | L/R/C/Both |
| 7 | ditchKind | Hở / Kín | `Dropdown` | * | LOOKUP · **GAP-BIEU05-KIND-01** |
| 8 | structure | Kết cấu (KC) | `Dropdown` hoặc `Text` | | vật liệu/KC thân |
| 9 | shape | Hình dạng | `Dropdown` | | chữ nhật / thang / tròn · **GAP-BIEU05-SHAPE-01** |
| 10 | apertureSize | Khẩu độ | `Text` hoặc `Number` | | m hoặc WxH · **Q-APERTURE** |
| 11 | lengthM | Chiều dài (m) | `Number` | * | |
| 12 | drainageCapacity | Khả năng thoát | `Text` hoặc `Number` | | **GAP-BIEU05-DRAIN-01** · **Q-DRAIN** |
| 13 | builtYear | Năm XD/SD | `Number` | | year |
| 14 | status | Tình trạng | `Dropdown` | * | LOOKUP_STATIC |
| 15 | manageUnit | ĐV QL | `Text` → SearchInput | | **GAP-CSDL-ORG-01** |
| 16 | ownerUnit | ĐV sở hữu | `Text` | | P1 free-text OK |
| 17–18 | notes (+ code) | Ghi chú | `Textarea` | | header 18 keys = `code` + 17 field rows trên |

## Control hint — actions

| Action | Surface | Notes |
|--------|---------|-------|
| back-hub | List A | về `/so-ts/csdl-so-sach` |
| create / view / edit / copy / delete | Toolbar + row | soft-delete API |
| save / cancel | Form footer | LeaveConfirmModal dirty |
| import / export | Toolbar | stub · XLS Biểu 5 OUT pack |
| history | Toolbar / row | stub modal OK P2 |
| schema-config | Toolbar | UiSchema typed `ditches` |
| peer-sots | Toolbar / row (opt) | deep-link `/so-ts-ditch` · **cấm** merge form |

## Open questions (PO trước Design)

| ID | Q | Options |
|----|---|---------|
| Q-ROUTE | Alias `/csdl-bieu-05` Navigate ngay hay DEFER hub-only? | alias_now · hub_only |
| Q-PROV | Province static vs master? | keep_static · master_province |
| Q-APERTURE | `apertureSize` free-text (WxH) vs Number m? | free_text · number_m |
| Q-DRAIN | `drainageCapacity` free-text vs Number (m³/s)? | free_text · number_cms |
| Q-SHAPE | Shape LOOKUP values? | rect_trap_round · excel_seed |

## Handoff

| Role | Dùng packet |
|------|-------------|
| **PO** | § Delta + open Q → `requirement.md` |
| **Design** | control-map khớp bảng · prototype list+slideout 18 cột · reviewUrl |
| **SA** | path `api/v1/asset/csdl-records` · typed DTO/UiSchema · Schema_CsdlBieu5 |
| **TL/Dev** | Wire controlHint · **cấm** đoán Text vs SearchInput |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHash | `sha256:fd4e6899790aa98d6bc4cb628dc9c0bc5efc90acb3abf03a7b157cf123590117` |
| headerFingerprint | `sha256:008898723c0a5b94fae7de8810903b1dcc39ccfd0dfa5d4a36dd398eb088ac2f` |
| generatedAt | 2026-09-05T06:30:58.027Z |
| versionGate | ok |
| taskId | task_fdcb7c28 |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:fd4e6899790aa98d6bc4cb628dc9c0bc5efc90acb3abf03a7b157cf123590117 -->
