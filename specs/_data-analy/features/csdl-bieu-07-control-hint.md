# Data-analy — controlHint — csdl-bieu-07 (Kind B list + Kind D Slideout · Biểu 07)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-07` |
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
| contentHash | `sha256:5634091e7ce3e5272c090320398a76d75f84ed7326366e93e088ff2154e8bf44` |
| headerFingerprint | `sha256:ba33856d00d23440b05be8c78c8b8a5462662c96a1067e702b791eb5020d64cf` |
| analyzedAt | `2026-09-05T09:14:17.821Z` |
| cluster | `csdl-cuc-2026` · Excel sheet Biểu 7 · **20 cột** · live hub **Biểu 10** renumber |
| taskId | `task_480d8882` |
| autoApprove | `ON` (queue) |
| realData | `specs/_data-analy/features/csdl-bieu-07-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records?resource=shoulders-fences` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-07` · hub deep-link `/so-ts/csdl-so-sach?resource=shoulders-fences` |
| resource | `shoulders-fences` |
| formNo | `07` · title VN **Lề / taluy / hàng rào** · live label còn **Biểu 10** |
| peerSoTs | `SHOULDER` (type-grid · chưa enqueue typed so-ts) — deep-link OK nếu có · **cấm** merge 1 form · **≠** Sổ TS |
| runMode | `new_page` · typed form thay generic 3 ô `detail*` · 3 khối lề + taluy + hàng rào |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** typed DTO + migration.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — demo = zone/field **tham chiếu** · **cấm** demo-json / localStorage SSOT.  
> **Cấm** chỉ 3 ô `detailPrimary`/`detailSpec`/`detailExtra` — form = đủ cột Excel (cite analy).  
> CTX: Live hub Biểu 10 → renumber **formNo=7** · resource key **giữ** `shoulders-fences`.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/csdl-bieu-07.md` | `5634091e7ce3e5272c090320398a76d75f84ed7326366e93e088ff2154e8bf44` |
| Parent hub | `docs/context/features/csdl-so-sach.md` | cite hub Kind G · resource `shoulders-fences` |
| Cluster analy | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | Biểu 7 · 20 cột · 3 khối · T-REN-01 |
| DB API SSOT | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` | § Biểu 10 `ShoulderFence` (số cũ) · map typed Biểu 7 |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` | `c2c9f8194cb104b3202bcaa46a589c9baba5cf8062aa12e7d0872a9e96eba7ae` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/csdl-so-sach.html` | hub+list+slideout chrome tham chiếu · prefix `LE` |
| Demo data | `Linm.RMMS.Demo/src/demo/asset/js/csdl-so-sach-data.js` | `shoulders-fences` · formNo **10** (cũ) · labels Hạng mục / dài / DT |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | `csdl-so-sach` → Asset · `asset` |
| Live API | `CsdlCatalogRecordsController` | `api/v1/asset/csdl-records` (polymorphic shell) |
| Live MFE | `CsdlSoSachPage` · `CsdlFormSlideout` | generic 3-field — **GAP-BIEU07-TYPED-01** |
| Excel | `data-import/Sổ sách, biểu mẫu trình LĐ Cục/1. Biểu mẫu CSDL.xls` sheet Biểu 7 | real source · import OUT Dev/XLS task |
| Peer | `so-ts-type-grid` · type `SHOULDER` | deep-link only · **không** enqueue typed so-ts · **≠** biểu Cục |

Normalized header (20):

`code|roadCode|roadName|province|kmFrom|kmTo|side|shoulderStructure|shoulderLengthM|shoulderWidthM|shoulderAreaM2|slopeLengthM|slopeAreaM2|fenceKind|fencePostCount|fenceLengthKm|builtYear|status|manageUnit|notes`

## § Delta Current vs New (`new_page` · `task_480d8882`)

| ID | Current | New (this analy) | Surface |
|----|---------|------------------|---------|
| GAP-BIEU07-TYPED-01 | Hub list `shoulders-fences` + form 3 ô `detail*` | Typed **20 cột** Excel Biểu 7 · Slideout 2col · 3 khối | form + list cols |
| GAP-BIEU07-REN-01 | Demo/live formNo **10** · title «Lề đường / hàng rào» | Renumber **formNo=7** · title «Lề / taluy / hàng rào» · **T-REN-01** · giữ `?resource=` | hub card + list A |
| GAP-BIEU07-ROUTE-01 | Chỉ deep-link hub `?resource=shoulders-fences` | Alias mfeStd `/csdl-bieu-07` · giữ hub entry | shell / Design |
| GAP-BIEU07-SHOULDER-01 | detail* gộp «Lề cứng + HR» | Khối lề: `side` · `shoulderStructure` · dài · rộng · DT | form + list |
| GAP-BIEU07-SLOPE-01 | DB `SlopeClearingM` 1 số | Khối taluy dương: `slopeLengthM` · `slopeAreaM2` (+ vị trí qua `side` / open Q) | form + list |
| GAP-BIEU07-FENCE-01 | detail* không tách HR | Khối hàng rào: `fenceKind` · `fencePostCount` · `fenceLengthKm` | form + list |
| GAP-BIEU07-FENCE-LEN-01 | DB `FenceLengthM` | Excel analy «dài km» → `fenceLengthKm` · SA map | form · **Q-FENCE-LEN** |
| GAP-BIEU07-PANEL-01 | DB `FencePanelCount` | Optional widen · không đếm header 20 · **Q-PANEL** | form SA |
| GAP-CSDL-ROAD-01 | `roadName` Text free (hub) | `SearchInput` `road-route` + `roadCode` | filter + form |
| GAP-CSDL-PROV-01 | LOOKUP_STATIC 5 tỉnh | giữ P1 **hoặc** master province — PO chốt | filter + form |
| GAP-CSDL-ORG-01 | `manageUnit` Text | SearchInput tree `org-unit` · DEFER P2 OK | form |
| GAP-CSDL-CUC-03 | Form generic không đủ cột | Đóng gap cho Biểu 7 khi typed PASS | form |
| GAP-CSDL-XLS-01 | Import/export stub | Sheet Biểu 7 đúng 20 cột — OUT pack Dev/XLS | toolbar |
| GAP-BIEU07-PEER-01 | Type `SHOULDER` chưa enqueue so-ts | Deep-link OK nếu có · **cấm** 1 form hai chuẩn · **GAP-CSDL-CUC-11** | nav |

**Không** đổi: API prefix `api/v1/asset/csdl-records` · resource key `shoulders-fences` · Kind B list A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · **cấm ERP.*** · IdCode **cấm** Guid · prefix **`LE`**.

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| Entry | Hub card **hoặc** `/csdl-bieu-07` | Title VN · back hub · **cấm** slug trên card |
| List A | Header | «Biểu 07 — Lề / taluy / hàng rào» · back hub |
| List B | Toolbar + filter | SearchTextInput · province · status · road SearchInput · kmFrom/kmTo · side · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub · **search must work** · **cấm** nút Tìm riêng |
| List C | `LinCatalogDataGrid` | Cột typed (không chỉ 3 detail) · STT · row menu Xem/Sửa/Copy/Xóa/Lịch sử · kéo cột ON |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form | Kind **D** Slideout Z1–Z3 · 2col | C/E/V/Copy · View=`readOnly` · LeaveConfirmModal dirty · footer Lưu/Hủy · section 3 khối |
| Map | none | deep-link gis only · **cấm** invent map canvas |

**Skip chrome:** GOVOne logo/bell/user · demo skin.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · đường · ghi chú · loại HR |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | **GAP-CSDL-PROV-01** |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC | tot/tb/kem/hong |
| roadCode | Đường | `SearchInput` | **road-route** | **GAP-CSDL-ROAD-01** |
| kmFrom / kmTo | Lý trình từ–đến | `Number` | — | Line geom ShoulderFence |
| side | Vị trí (T/P/C) | `Dropdown` | LOOKUP_STATIC | L/R/Both · **GAP-BIEU07-SHOULDER-01** |
| fenceKind | Loại hàng rào | `Dropdown` | LOOKUP_STATIC | filter optional · **GAP-BIEU07-FENCE-01** |

## Control hint — form fields (Slideout · Excel Biểu 7 · 20 cột)

| # | Field key | Label | controlHint | required | Notes |
|---|-----------|-------|-------------|----------|-------|
| — | code | Mã | `Text` readonly | auto | IdCode prefix `LE` · **cấm** Guid |
| 1–2 | roadCode / roadName | Mã/Tên đường | `SearchInput` | * | catalogKind `road-route` |
| 3 | province | Địa danh | `Dropdown` | * | LOOKUP_STATIC P1 |
| 4–5 | kmFrom / kmTo | Lý trình từ–đến (Km) | `Number` | * | decimal Line |
| 6 | side | Vị trí | `Dropdown` | * | L/R/Both · dùng chung 3 khối P1 · **Q-SIDE** |
| 7 | shoulderStructure | KC lề | `Dropdown` hoặc `Text` | * | cứng/mềm/… · **GAP-BIEU07-SHOULDER-01** |
| 8 | shoulderLengthM | Dài lề (m) | `Number` | * | DB `ShoulderLengthM` |
| 9 | shoulderWidthM | Rộng lề (m) | `Number` | * | DB `ShoulderWidthM` |
| 10 | shoulderAreaM2 | DT lề (m²) | `Number` | | DB `ShoulderAreaM2` · có thể derived |
| 11 | slopeLengthM | Dài taluy / phát quang (m) | `Number` | | map `SlopeClearingM` · **GAP-BIEU07-SLOPE-01** · **Q-SLOPE** |
| 12 | slopeAreaM2 | DT taluy (m²) | `Number` | | analy taluy DT |
| 13 | fenceKind | Quy cách hàng rào | `Dropdown` hoặc `Text` | | DB `FenceKind` · **GAP-BIEU07-FENCE-01** |
| 14 | fencePostCount | Số cột HR | `Number` | | integer ≥0 · DB `FencePostCount` |
| 15 | fenceLengthKm | Dài HR (km) | `Number` | | analy km · **Q-FENCE-LEN** vs `FenceLengthM` |
| 16 | builtYear | Năm XD/SD | `Number` | | year |
| 17 | status | Tình trạng | `Dropdown` | * | LOOKUP_STATIC |
| 18 | manageUnit | ĐV QL | `Text` → SearchInput | | **GAP-CSDL-ORG-01** |
| 19–20 | notes (+ code) | Ghi chú | `Textarea` | | header 20 keys = `code` + shared + 3 khối |

Optional form extras (không đếm Excel 20): `fencePanelCount` Number · `ownerUnit` Text · per-block side — Design/PO · **Q-PANEL** · **Q-SIDE**.

## Control hint — actions

| Action | Surface | Notes |
|--------|---------|-------|
| back-hub | List A | về `/so-ts/csdl-so-sach` |
| create / view / edit / copy / delete | Toolbar + row | soft-delete API |
| save / cancel | Form footer | LeaveConfirmModal dirty |
| import / export | Toolbar | stub · XLS Biểu 7 OUT pack |
| history | Toolbar / row | stub modal OK P2 |
| schema-config | Toolbar | UiSchema typed `shoulders-fences` |
| peer-sots | Toolbar / row (opt) | deep-link type `SHOULDER` nếu route sẵn · **cấm** merge form |

## Open questions (PO trước Design)

| ID | Q | Options |
|----|---|---------|
| Q-ROUTE | Alias `/csdl-bieu-07` Navigate ngay hay DEFER hub-only? | alias_now · hub_only |
| Q-PROV | Province static vs master? | keep_static · master_province |
| Q-SIDE | 1 `side` chung hay side riêng lề / taluy / HR? | shared · per_block |
| Q-SLOPE | `slopeLengthM` = DB `SlopeClearingM` 1:1 hay tách phát quang vs dài taluy? | map_clearing · split_fields |
| Q-FENCE-LEN | Đơn vị dài HR: km (Excel) vs m (DB)? | km · meters · dual |
| Q-PANEL | Có bắt buộc `fencePanelCount` trên form? | omit_p1 · include |
| Q-STRUCT | `shoulderStructure` / `fenceKind` LOOKUP seed vs free-text? | lookup_seed · free_text |
| Q-REN-LABEL | Đổi label hub card «Biểu 10» → «Biểu 07» cùng release typed? | with_typed · label_first |

## Handoff

| Role | Dùng packet |
|------|-------------|
| **PO** | § Delta + open Q → `requirement.md` |
| **Design** | control-map khớp bảng · prototype list+slideout 20 cột · 3 section · reviewUrl |
| **SA** | path `api/v1/asset/csdl-records` · typed DTO/UiSchema · Schema_CsdlBieu7 · renumber formNo |
| **TL/Dev** | Wire controlHint · **cấm** đoán Text vs SearchInput |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHash | `sha256:5634091e7ce3e5272c090320398a76d75f84ed7326366e93e088ff2154e8bf44` |
| headerFingerprint | `sha256:ba33856d00d23440b05be8c78c8b8a5462662c96a1067e702b791eb5020d64cf` |
| generatedAt | 2026-09-05T09:14:17.821Z |
| versionGate | ok |
| taskId | task_480d8882 |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:5634091e7ce3e5272c090320398a76d75f84ed7326366e93e088ff2154e8bf44 -->
