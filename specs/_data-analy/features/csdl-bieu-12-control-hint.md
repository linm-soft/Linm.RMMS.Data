# Data-analy — controlHint — csdl-bieu-12 (Kind B list + Kind D Slideout · Biểu 12)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-12` |
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
| contentHash | `sha256:6da498be3a84192c6f3e3c30a7e8032bf2753359591a9aabd3ad36d809f4c457` |
| headerFingerprint | `sha256:54aef0c755530d138ecefa7a303b22c78c32ca1b6ae3555d5bb33492799b5af9` |
| analyzedAt | `2026-09-05T12:56:00.000Z` |
| cluster | `csdl-cuc-2026` · Excel sheet Biểu 12 · **15 cột** · khóm + m² cỏ |
| taskId | `task_94fca237` |
| autoApprove | `ON` (queue) |
| realData | `specs/_data-analy/features/csdl-bieu-12-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records?resource=green-assets` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-12` · hub deep-link `/so-ts/csdl-so-sach?resource=green-assets` |
| resource | `green-assets` |
| formNo | `12` · title VN **Cây xanh, thảm cỏ** |
| peerSoTs | — (analy: không peer Sổ TS) · **≠** merge form so-ts-* |
| runMode | `new_page` · typed form 15 cột · khóm trúc đào/ngâu/cọ/khác + m² cỏ · **cấm** chỉ 3 ô `detail*` |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** typed DTO + migration.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — demo = zone/field **tham chiếu** · **cấm** demo-json / localStorage SSOT.  
> **Cấm** chỉ 3 ô `detailPrimary`/`detailSpec`/`detailExtra` — form = đủ cột Excel (cite analy).  
> Analy: Khóm trúc đào / ngâu / cọ / khác · thảm cỏ m² · vị trí.  
> DB SSOT: `OleanderClumps` · `NgauClumps` · `PalmClumps` · `GrassAreaM2` (+ `OtherClumps` từ analy «khác» · **Q-OTHER-CLUMP**).

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/csdl-bieu-12.md` | `6da498be3a84192c6f3e3c30a7e8032bf2753359591a9aabd3ad36d809f4c457` |
| Parent hub | `docs/context/features/csdl-so-sach.md` | cite hub Kind G · resource `green-assets` |
| Cluster analy | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | Biểu 12 · 15 cột · § Biểu 12 |
| DB API SSOT | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` | § Biểu 12 `GreenAsset` · **live path** = `asset/csdl-records` (doc §2.1 `infra` = legacy · **cấm** invent) |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` | `c2c9f8194cb104b3202bcaa46a589c9baba5cf8062aa12e7d0872a9e96eba7ae` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/csdl-so-sach.html` | hub+list+slideout chrome · prefix `CX` |
| Demo data | `Linm.RMMS.Demo/src/demo/asset/js/csdl-so-sach-data.js` | `green-assets` · formNo **12** · labels Loại cây/thảm · Số bụi/m² cỏ · Vị trí taluy |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | `csdl-so-sach` → Asset · `asset` · **GAP-BIEU12-DMAP-01** thiếu slug `csdl-bieu-12` |
| Live API | `CsdlCatalogRecordsController` | `api/v1/asset/csdl-records` (polymorphic shell) |
| Live MFE | `CsdlSoSachPage` · `CsdlFormSlideout` | generic 3-field — **GAP-BIEU12-TYPED-01** |
| Excel | `data-import/Sổ sách, biểu mẫu trình LĐ Cục/1. Biểu mẫu CSDL.xls` sheet Biểu 12 | real source · import OUT Dev/XLS task |
| Peer Sổ TS | — | không peer · **cấm** invent so-ts-green |

Normalized header (15 — Excel flatten + shared trail):

`code|roadCode|roadName|province|kmFrom|kmTo|side|oleanderClumps|ngauClumps|palmClumps|otherClumps|grassAreaM2|status|manageUnit|notes`

Form trail (đã trong 15): `manageUnit` · `notes`. **Không** thêm cột ngoài 15.  
DB SSOT: `OleanderClumps` · `NgauClumps` · `PalmClumps` · `GrassAreaM2` · `OtherClumps` (**SA** confirm nếu Excel có cột «khác»).

## § Delta Current vs New (`new_page` · `task_94fca237`)

| ID | Current | New (this analy) | Surface |
|----|---------|------------------|---------|
| GAP-BIEU12-TYPED-01 | Hub list `green-assets` + form 3 ô `detail*` | Typed **15 cột** · Slideout 2col · khóm + m² | form + list cols |
| GAP-BIEU12-ROUTE-01 | Chỉ deep-link hub `?resource=green-assets` | Alias mfeStd `/csdl-bieu-12` · giữ hub entry | shell / Design |
| GAP-BIEU12-CLUMP-01 | detailPrimary free «Dừa cạn + cỏ» | `oleanderClumps` · `ngauClumps` · `palmClumps` · `otherClumps` Number qty · **cấm** 1 text loại cây | filter + form + list |
| GAP-BIEU12-GRASS-01 | detailSpec = «120 / 800» mixed | `grassAreaM2` Number (m²) tách khỏi khóm | form + list |
| GAP-BIEU12-SIDE-01 | detailExtra = «Taluy phải» free | `side` LOOKUP L/R/C/Both · **Q-TALUY** nếu cần label taluy riêng | filter + form |
| GAP-BIEU12-DMAP-01 | DOMAIN-MAP thiếu `csdl-bieu-12` | Thêm slug → Asset (cùng `csdl-so-sach`) | SA / Dev |
| GAP-CSDL-ROAD-01 | `roadName` Text free (hub) | `SearchInput` `road-route` + `roadCode` | filter + form |
| GAP-CSDL-PROV-01 | LOOKUP_STATIC 5 tỉnh | giữ P1 **hoặc** master province — PO chốt | filter + form |
| GAP-CSDL-ORG-01 | `manageUnit` Text | SearchInput tree `org-unit` · DEFER P2 OK | form |
| GAP-CSDL-CUC-03 | Form generic không đủ cột | Đóng gap cho Biểu 12 khi typed PASS | form |
| GAP-CSDL-XLS-01 | Import/export stub | Sheet Biểu 12 đúng 15 cột / merge — OUT pack Dev/XLS | toolbar |
| GAP-CSDL-CUC-11 | — | **≠** Sổ TS · LOOKUP `road-route` chung · ROW riêng · **cấm** invent peer so-ts-green | nav |

**Không** đổi: API prefix `api/v1/asset/csdl-records` · resource key `green-assets` · formNo **12** (demo đã đúng) · Kind B list A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · **cấm ERP.*** · IdCode **cấm** Guid · prefix **`CX`**.

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| Entry | Hub card **hoặc** `/csdl-bieu-12` | Title VN · back hub · **cấm** slug trên card |
| List A | Header | «Biểu 12 — Cây xanh, thảm cỏ» · back hub |
| List B | Toolbar + filter | SearchTextInput · province · status · road SearchInput · kmFrom/kmTo · side · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub · **search must work** · **cấm** nút Tìm riêng |
| List C | `LinCatalogDataGrid` | Cột typed (không chỉ 3 detail) · STT · row menu Xem/Sửa/Copy/Xóa/Lịch sử · kéo cột ON |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form | Kind **D** Slideout Z1–Z3 · 2col | C/E/V/Copy · View=`readOnly` · LeaveConfirmModal dirty · footer Lưu/Hủy · section khóm + thảm cỏ |
| Map | none | deep-link gis only · **cấm** invent map canvas |

**Skip chrome:** GOVOne logo/bell/user · demo skin.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · đường · ghi chú |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | **GAP-CSDL-PROV-01** |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC | tot/tb/kem/hong |
| roadCode | Đường | `SearchInput` | **road-route** | **GAP-CSDL-ROAD-01** |
| kmFrom / kmTo | Lý trình từ–đến | `Number` | — | Line/Polygon geom |
| side | Vị trí (T/P/C) | `Dropdown` | LOOKUP_STATIC | L/R/C/Both |

## Control hint — form fields (Slideout)

| # | Field key | Label | controlHint | required | Notes |
|---|-----------|-------|-------------|----------|-------|
| — | code | Mã | `Text` readonly | auto | IdCode prefix `CX` · **cấm** Guid |
| 1–2 | roadCode / roadName | Mã/Tên đường | `SearchInput` | * | catalogKind `road-route` |
| 3 | province | Địa danh | `Dropdown` | * | LOOKUP_STATIC P1 |
| 4–5 | kmFrom / kmTo | Lý trình từ–đến (Km) | `Number` | * | decimal · Line/Polygon |
| 6 | side | Vị trí | `Dropdown` | * | L/R/C/Both · **Q-TALUY** |
| 7 | oleanderClumps | Khóm trúc đào (SL) | `Number` | | int ≥0 · section khóm |
| 8 | ngauClumps | Khóm ngâu (SL) | `Number` | | int ≥0 |
| 9 | palmClumps | Khóm cọ (SL) | `Number` | | int ≥0 |
| 10 | otherClumps | Khóm khác (SL) | `Number` | | int ≥0 · **Q-OTHER-CLUMP** |
| 11 | grassAreaM2 | Thảm cỏ (m²) | `Number` | | decimal ≥0 · section thảm cỏ |
| 12 | status | Tình trạng | `Dropdown` | * | LOOKUP_STATIC |
| — | manageUnit | ĐV QL | `Text` → SearchInput | | **GAP-CSDL-ORG-01** · trail |
| — | notes | Ghi chú | `Textarea` | | trail |

### Form sections (2 khối)

| Section | Fields | Notes |
|---------|--------|-------|
| Khóm cây | oleanderClumps · ngauClumps · palmClumps · otherClumps | shared road/km/side trên đầu · **GAP-BIEU12-CLUMP-01** |
| Thảm cỏ | grassAreaM2 | optional block · **cấm** bắt buộc cả khóm+cỏ nếu Excel cho phép 1 phía · **Q-GRASS-REQ** |

## Control hint — actions

| Action | Surface | Notes |
|--------|---------|-------|
| back-hub | List A | về `/so-ts/csdl-so-sach` |
| create / view / edit / copy / delete | Toolbar + row | soft-delete API |
| save / cancel | Form footer | LeaveConfirmModal dirty |
| import / export | Toolbar | stub · XLS Biểu 12 OUT pack · merge-header |
| history | Toolbar / row | stub modal OK P2 |
| schema-config | Toolbar | UiSchema typed `green-assets` |

## Open questions (PO trước Design)

| ID | Q | Options |
|----|---|---------|
| Q-ROUTE | Alias `/csdl-bieu-12` Navigate ngay hay DEFER hub-only? | alias_now · hub_only |
| Q-PROV | Province static vs master? | keep_static · master_province |
| Q-OTHER-CLUMP | Excel có cột «khóm khác» tách `otherClumps`? | keep_other · drop_other_recount |
| Q-GRASS-REQ | Cho phép chỉ cỏ (khóm=0) hoặc chỉ khóm (cỏ=0)? | allow_either · require_one |
| Q-TALUY | `side` đủ hay cần label «taluy» riêng (demo detailExtra)? | side_only · taluy_label |
| Q-LIST-COLS | Grid mặc định: shared + khóm subset / m² hay schema-config only? | subset · schema_only |
| Q-TITLE | Giữ title hub «Cây xanh, thảm cỏ»? | keep_demo · ctx_title |
| Q-DMAP | Thêm `csdl-bieu-12` vào DOMAIN-MAP khi Dev? | add_now · hub_only_map |

## Handoff

| Role | Dùng packet |
|------|-------------|
| **PO** | § Delta + open Q → `requirement.md` |
| **Design** | control-map khớp bảng · prototype list+slideout · 2 section · reviewUrl |
| **SA** | path `api/v1/asset/csdl-records` · typed DTO/UiSchema · Schema_CsdlBieu12 · **cấm** `infra` · DOMAIN-MAP slug |
| **TL/Dev** | Wire controlHint · **cấm** đoán Text vs SearchInput · **cấm** 3 ô detail* |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHash | `sha256:6da498be3a84192c6f3e3c30a7e8032bf2753359591a9aabd3ad36d809f4c457` |
| headerFingerprint | `sha256:54aef0c755530d138ecefa7a303b22c78c32ca1b6ae3555d5bb33492799b5af9` |
| generatedAt | 2026-09-05T12:56:00.000Z |
| versionGate | ok |
| taskId | task_94fca237 |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:6da498be3a84192c6f3e3c30a7e8032bf2753359591a9aabd3ad36d809f4c457 -->
