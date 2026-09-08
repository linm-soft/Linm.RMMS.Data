# Data-analy — controlHint — csdl-bieu-09 (Kind B list + Kind D Slideout · Biểu 09)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-09` |
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
| contentHash | `sha256:863490daf95d2c19ddad660fc05f901eaeb0248fb65961f9e96747ebcf5b04e4` |
| headerFingerprint | `sha256:18fb135f880ed55afa6e9277e8980fd0458a24d85d87e69a753b805424f396bb` |
| analyzedAt | `2026-09-05T10:50:00.000Z` |
| cluster | `csdl-cuc-2026` · Excel sheet Biểu 9 · **17 cột** · live hub **Biểu 8** renumber · 2 khối mốc LG / GPMB |
| taskId | `task_b7a89508` |
| autoApprove | `ON` (queue) |
| realData | `specs/_data-analy/features/csdl-bieu-09-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records?resource=boundary-markers` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-09` · hub deep-link `/so-ts/csdl-so-sach?resource=boundary-markers` |
| resource | `boundary-markers` |
| formNo | `09` · title VN **Mốc lộ giới / GPMB** · live label còn **Biểu 8** |
| peerSoTs | — (không peer typed so-ts trong catalog Cục) · **≠** Sổ TS `so-ts-*` · **GAP-CSDL-CUC-11** |
| runMode | `new_page` · typed form 17 cột · 2 khối theo `markerKind` · **cấm** chỉ 3 ô `detail*` |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** typed DTO + migration.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — demo = zone/field **tham chiếu** · **cấm** demo-json / localStorage SSOT.  
> **Cấm** chỉ 3 ô `detailPrimary`/`detailSpec`/`detailExtra` — form = đủ cột Excel (cite analy).  
> CTX: Live hub Biểu 8 → renumber **formNo=9** · resource key **giữ** `boundary-markers`.  
> Analy: 2 khối mốc lộ giới / mốc GPMB — chủng loại · KC · DT · TT · năm HT.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/csdl-bieu-09.md` | `863490daf95d2c19ddad660fc05f901eaeb0248fb65961f9e96747ebcf5b04e4` |
| Parent hub | `docs/context/features/csdl-so-sach.md` | cite hub Kind G · resource `boundary-markers` |
| Cluster analy | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | Biểu 9 · 17 cột · T-REN-01 · § Biểu 9 |
| DB API SSOT | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` | § Biểu 8 `BoundaryMarker` (số biểu cũ) · map typed Biểu **9** |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` | `c2c9f8194cb104b3202bcaa46a589c9baba5cf8062aa12e7d0872a9e96eba7ae` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/csdl-so-sach.html` | hub+list+slideout chrome tham chiếu · prefix `MK` |
| Demo data | `Linm.RMMS.Demo/src/demo/asset/js/csdl-so-sach-data.js` | `boundary-markers` · formNo **8** (cũ) · labels Loại mốc / Kết cấu / Năm HT |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | `csdl-so-sach` → Asset · `asset` |
| Live API | `CsdlCatalogRecordsController` | `api/v1/asset/csdl-records` (polymorphic shell) |
| Live MFE | `CsdlSoSachPage` · `CsdlFormSlideout` | generic 3-field — **GAP-BIEU09-TYPED-01** |
| Excel | `data-import/Sổ sách, biểu mẫu trình LĐ Cục/1. Biểu mẫu CSDL.xls` sheet Biểu 9 | real source · import OUT Dev/XLS task |

Normalized header (17 — Excel flatten):

`code|roadCode|roadName|province|kmFrom|kmTo|side|markerKind|markerStructure|markerLengthM|markerWidthM|markerAreaM2|markerQty|completedYear|status|manageUnit|notes`

Form trail (đã trong 17): `manageUnit` · `notes`. **Không** thêm cột ngoài 17.

## § Delta Current vs New (`new_page` · `task_b7a89508`)

| ID | Current | New (this analy) | Surface |
|----|---------|------------------|---------|
| GAP-BIEU09-TYPED-01 | Hub list `boundary-markers` + form 3 ô `detail*` | Typed **17 cột** · Slideout 2col · 2 khối theo `markerKind` | form + list cols |
| GAP-BIEU09-REN-01 | Demo/live formNo **8** · title «Mốc lộ giới / GPMB» | Renumber **formNo=9** · giữ `?resource=boundary-markers` · **T-REN-01** | hub card + list A |
| GAP-BIEU09-ROUTE-01 | Chỉ deep-link hub `?resource=boundary-markers` | Alias mfeStd `/csdl-bieu-09` · giữ hub entry | shell / Design |
| GAP-BIEU09-KIND-01 | detailPrimary = «Loại mốc» free | `markerKind` LOOKUP RoadLimit / GPMB · filter list | filter + form |
| GAP-BIEU09-STRUCT-01 | detailSpec = «Kết cấu» free | `markerStructure` LOOKUP_STATIC (Excel seed) | form + list |
| GAP-BIEU09-DIM-01 | — | `markerLengthM` · `markerWidthM` · `markerAreaM2` · `markerQty` | form |
| GAP-BIEU09-YEAR-01 | detailExtra = năm HT free | `completedYear` Number year | form + list |
| GAP-BIEU09-BLOCK-01 | 1 form flat detail* | 2 section UX: Mốc LG · Mốc GPMB (cùng schema · lọc/nhãn theo kind) | form |
| GAP-CSDL-ROAD-01 | `roadName` Text free (hub) | `SearchInput` `road-route` + `roadCode` | filter + form |
| GAP-CSDL-PROV-01 | LOOKUP_STATIC 5 tỉnh | giữ P1 **hoặc** master province — PO chốt | filter + form |
| GAP-CSDL-ORG-01 | `manageUnit` Text | SearchInput tree `org-unit` · DEFER P2 OK | form |
| GAP-CSDL-CUC-03 | Form generic không đủ cột | Đóng gap cho Biểu 9 khi typed PASS | form |
| GAP-CSDL-XLS-01 | Import/export stub | Sheet Biểu 9 đúng 17 cột / merge — OUT pack Dev/XLS | toolbar |
| GAP-CSDL-CUC-11 | — | **≠** Sổ TS · LOOKUP `road-route` chung · ROW riêng | nav |

**Không** đổi: API prefix `api/v1/asset/csdl-records` · resource key `boundary-markers` · Kind B list A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · **cấm ERP.*** · IdCode **cấm** Guid · prefix **`MK`**.

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| Entry | Hub card **hoặc** `/csdl-bieu-09` | Title VN · back hub · **cấm** slug trên card |
| List A | Header | «Biểu 09 — Mốc lộ giới / GPMB» · back hub |
| List B | Toolbar + filter | SearchTextInput · province · status · road SearchInput · kmFrom/kmTo · side · **markerKind** · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub · **search must work** · **cấm** nút Tìm riêng |
| List C | `LinCatalogDataGrid` | Cột typed (không chỉ 3 detail) · STT · row menu Xem/Sửa/Copy/Xóa/Lịch sử · kéo cột ON |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form | Kind **D** Slideout Z1–Z3 · 2col | C/E/V/Copy · View=`readOnly` · LeaveConfirmModal dirty · footer Lưu/Hủy · section shared + khối theo `markerKind` |
| Map | none | deep-link gis only · **cấm** invent map canvas |

**Skip chrome:** GOVOne logo/bell/user · demo skin.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · đường · kết cấu · ghi chú |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | **GAP-CSDL-PROV-01** |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC | tot/tb/kem/hong |
| roadCode | Đường | `SearchInput` | **road-route** | **GAP-CSDL-ROAD-01** |
| kmFrom / kmTo | Lý trình từ–đến | `Number` | — | Point geom (thường kmFrom=kmTo) |
| side | Vị trí (T/P/C) | `Dropdown` | LOOKUP_STATIC | L/R/C/Both |
| markerKind | Loại mốc | `Dropdown` | LOOKUP_STATIC | RoadLimit / GPMB · **GAP-BIEU09-KIND-01** |

## Control hint — form fields (Slideout)

| # | Field key | Label | controlHint | required | Notes |
|---|-----------|-------|-------------|----------|-------|
| — | code | Mã | `Text` readonly | auto | IdCode prefix `MK` · **cấm** Guid |
| 1–2 | roadCode / roadName | Mã/Tên đường | `SearchInput` | * | catalogKind `road-route` |
| 3 | province | Địa danh | `Dropdown` | * | LOOKUP_STATIC P1 |
| 4–5 | kmFrom / kmTo | Lý trình từ–đến (Km) | `Number` | * | decimal · Point thường bằng nhau |
| 6 | side | Vị trí | `Dropdown` | * | L/R/C/Both |
| 7 | markerKind | Loại mốc | `Dropdown` | * | RoadLimit (= mốc LG) · GPMB · **Q-KIND-LABEL** |
| 8 | markerStructure | Kết cấu | `Dropdown` | * | LOOKUP_STATIC Excel seed · **Q-STRUCT** |
| 9–10 | markerLengthM / markerWidthM | KC dài / rộng (m) | `Number` | | decimal · **Q-DIM** |
| 11 | markerAreaM2 | Diện tích (m²) | `Number` | | decimal |
| 12 | markerQty | Số lượng | `Number` | | int ≥ 1 |
| 13 | completedYear | Năm hoàn thành | `Number` | * | year · **GAP-BIEU09-YEAR-01** |
| 14 | status | Tình trạng | `Dropdown` | * | LOOKUP_STATIC |
| — | manageUnit | ĐV QL | `Text` → SearchInput | | **GAP-CSDL-ORG-01** · trail |
| — | notes | Ghi chú | `Textarea` | | trail |

### Form sections (2 khối · cùng field set)

| Section | When | Notes |
|---------|------|-------|
| Mốc lộ giới | `markerKind=RoadLimit` | nhãn section theo kind · **GAP-BIEU09-BLOCK-01** |
| Mốc GPMB | `markerKind=GPMB` | cùng schema · **cấm** 2 entity wide |

## Control hint — actions

| Action | Surface | Notes |
|--------|---------|-------|
| back-hub | List A | về `/so-ts/csdl-so-sach` |
| create / view / edit / copy / delete | Toolbar + row | soft-delete API |
| save / cancel | Form footer | LeaveConfirmModal dirty |
| import / export | Toolbar | stub · XLS Biểu 9 OUT pack · merge-header |
| history | Toolbar / row | stub modal OK P2 |
| schema-config | Toolbar | UiSchema typed `boundary-markers` |

## Open questions (PO trước Design)

| ID | Q | Options |
|----|---|---------|
| Q-ROUTE | Alias `/csdl-bieu-09` Navigate ngay hay DEFER hub-only? | alias_now · hub_only |
| Q-PROV | Province static vs master? | keep_static · master_province |
| Q-KIND-LABEL | Enum value `RoadLimit`/`GPMB` vs label VN «Mốc lộ giới»/«Mốc GPMB» seed? | code_en · label_vn |
| Q-STRUCT | `markerStructure` enum set (bê tông / đá / khác) seed đâu? | excel_seed · lookup_static |
| Q-DIM | Length/Width bắt buộc hay chỉ Area? | area_only · full_dim |
| Q-QTY | `markerQty` mặc định 1 · có hiện list? | hide_default · show_always |
| Q-LIST-COLS | Grid mặc định: shared + kind subset hay schema-config only? | subset · schema_only |
| Q-REN-LABEL | Đổi label hub card «Biểu 8» → «Biểu 09» cùng release typed? | with_typed · label_first |

## Handoff

| Role | Dùng packet |
|------|-------------|
| **PO** | § Delta + open Q → `requirement.md` |
| **Design** | control-map khớp bảng · prototype list+slideout · 2 section kind · reviewUrl |
| **SA** | path `api/v1/asset/csdl-records` · typed DTO/UiSchema · Schema_CsdlBieu9 · renumber formNo |
| **TL/Dev** | Wire controlHint · **cấm** đoán Text vs SearchInput |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHash | `sha256:863490daf95d2c19ddad660fc05f901eaeb0248fb65961f9e96747ebcf5b04e4` |
| headerFingerprint | `sha256:18fb135f880ed55afa6e9277e8980fd0458a24d85d87e69a753b805424f396bb` |
| generatedAt | 2026-09-05T10:50:00.000Z |
| versionGate | ok |
| taskId | task_b7a89508 |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:863490daf95d2c19ddad660fc05f901eaeb0248fb65961f9e96747ebcf5b04e4 -->
