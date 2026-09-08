# Data-analy — controlHint — csdl-bieu-01 (Kind B list + Kind D Slideout · Biểu 01)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-01` |
| packKind | `list` |
| mode | `feature_context` (new_page · CTX + cluster analy + hub demo · synthetic) |
| changeScope | `new_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| versionGate | `ok` (first fill stubs · CTX+demo unchanged vs create · autoApprove queue) |
| contentHash | `sha256:3545960f4006740c9dfe57b5f004fa4a1cd1b7befbcd51e35e2168e16821b65e` |
| headerFingerprint | `sha256:6376475bbf48ca5b3e8cfd26688cd877fd1bc77d5b8d8c4c3d314cd0572f5cf2` |
| analyzedAt | `2026-09-05T11:53:25.414Z` |
| cluster | `csdl-cuc-2026` · Excel sheet Biểu 1 · **38 cột** |
| taskId | `task_41122f1b` |
| autoApprove | `ON` (queue) |
| realData | `specs/_data-analy/features/csdl-bieu-01-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records?resource=pavement-sections` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-01` · hub deep-link `/so-ts/csdl-so-sach?resource=pavement-sections` |
| resource | `pavement-sections` |
| formNo | `01` · title VN **Phân loại mặt đường** |
| peerSoTs | `pavement-section` (DOMAIN-MAP Asset) — deep-link OK · **cấm** merge 1 form hai chuẩn |
| runMode | `new_page` · typed form thay generic 3 ô `detail*` |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** width/structure shape + migration.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — demo = zone/field **tham chiếu** · **cấm** demo-json / localStorage SSOT.  
> **Cấm** chỉ 3 ô `detailPrimary`/`detailSpec`/`detailExtra` — form = đủ cột Excel (cite analy).

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/csdl-bieu-01.md` | `5f88a8fb9e80533568fb3c7d35fc811ec5d6e57afb9c93c3db378c446213c9ca` |
| Parent hub | `docs/context/features/csdl-so-sach.md` | cite hub Kind G |
| Cluster analy | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | Biểu 1 · 38 cột · skip cầu âm |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` | `c2c9f8194cb104b3202bcaa46a589c9baba5cf8062aa12e7d0872a9e96eba7ae` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/csdl-so-sach.html` | hub+list+slideout chrome tham chiếu |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | `csdl-so-sach` · `pavement-section` → Asset · `asset` |
| Live API | `CsdlCatalogRecordsController` | `api/v1/asset/csdl-records` (polymorphic shell) |
| Live MFE | `CsdlSoSachPage` · `CsdlFormSlideout` | generic 3-field — **GAP-BIEU01-TYPED-01** |
| Excel | `data-import/Sổ sách, biểu mẫu trình LĐ Cục/1. Biểu mẫu CSDL.xls` sheet Biểu 1 | real source · import OUT Dev/XLS task |

Normalized header:

`code|roadCode|roadName|province|kmFrom|kmTo|lengthKm|baseWidthM|surfWGe14|surfW14To10|surfW10To5|surfWLe5|structureType|surfaceThicknessCm|plainClass|mountainClass|yearsInServiceBand|handoverMinistry|handoverLocal|lastMajorRehabYear|lastSurfaceRepairYear|updatedByName|manageUnit|notes|status|side`

## § Delta Current vs New (`new_page` · `task_41122f1b`)

| ID | Current | New (this analy) | Surface |
|----|---------|------------------|---------|
| GAP-BIEU01-TYPED-01 | Hub list `pavement-sections` + form 3 ô `detail*` | Typed **38 cột** Excel Biểu 1 · Slideout 2col | form + list cols |
| GAP-BIEU01-ROUTE-01 | Chỉ deep-link hub `?resource=pavement-sections` | Alias mfeStd `/csdl-bieu-01` · giữ hub entry | shell / Design |
| GAP-CSDL-ROAD-01 | `roadName` Text free (hub) | `SearchInput` `road-route` + `roadCode` | filter + form |
| GAP-CSDL-PROV-01 | LOOKUP_STATIC 5 tỉnh | giữ P1 **hoặc** master province — PO chốt | filter + form |
| GAP-CSDL-ORG-01 | `manageUnit` Text | SearchInput tree `org-unit` · DEFER P2 OK | form |
| GAP-BIEU01-WIDTH-01 | — | Excel (9)–(12) 4 bucket vs 1 `surfaceWidthM` — **SA chốt** | form / BE |
| GAP-BIEU01-STRUCT-01 | — | (13)–(16) 4 flag vs 1 `structureType` enum — **SA chốt** | form / BE |
| GAP-BIEU01-SKIP-01 | — | Import skip hàng «Cầu …. Km» length âm / `skip-bridge` | import |
| GAP-CSDL-CUC-03 | Form generic không đủ cột | Đóng gap cho Biểu 1 khi typed PASS | form |
| GAP-CSDL-XLS-01 | Import/export stub | Sheet Biểu 1 đúng 38 cột — OUT pack Dev/XLS | toolbar |
| GAP-BIEU01-PEER-01 | Peer Sổ TS `pavement-section` | Deep-link OK · **cấm** 1 form hai chuẩn | nav |

**Không** đổi: API prefix `api/v1/asset/csdl-records` · resource key `pavement-sections` · Kind B list A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · **cấm ERP.*** · IdCode **cấm** Guid.

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| Entry | Hub card **hoặc** `/csdl-bieu-01` | Title VN · back hub · **cấm** slug trên card |
| List A | Header | «Biểu 01 — Phân loại mặt đường» · back hub |
| List B | Toolbar + filter | SearchTextInput · province · status · road SearchInput · kmFrom/kmTo · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub · **search must work** · **cấm** nút Tìm riêng |
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
| kmFrom | Từ Km | `Number` | — | filter QS |
| kmTo | Đến Km | `Number` | — | filter QS |

## Control hint — form fields (Slideout · Excel Biểu 1)

| # | Field key | Label | controlHint | required | Notes |
|---|-----------|-------|-------------|----------|-------|
| — | code | Mã | `Text` readonly | auto | IdCode prefix `MD` · **cấm** Guid |
| 2–3 | roadCode / roadName | Mã/Tên đường | `SearchInput` | * | catalogKind `road-route` |
| 4 | province | Địa danh | `Dropdown` | * | LOOKUP_STATIC P1 |
| 5–6 | kmFrom / kmTo | Từ/Đến Km | `Number` | * | decimal |
| 7 | lengthKm | Chiều dài (km) | `Number` | * | derived OK nếu SA chốt |
| 8 | baseWidthM | Bề rộng nền (m) | `Number` | | |
| 9–12 | surfWGe14 · surfW14To10 · surfW10To5 · surfWLe5 | B mặt ≥14 / 14–10 / 10–5 / ≤5 | `Number` **hoặc** 1 `surfaceWidthM` | | **GAP-BIEU01-WIDTH-01** SA |
| 13–16 | structureType | Kết cấu BTXM/BTN/Đá nhựa/Cấp phối | `Dropdown` **hoặc** 4 Checkbox | * | 1 loại/đoạn · **GAP-BIEU01-STRUCT-01** |
| 17 | surfaceThicknessCm | Dày mặt (cm) | `Number` | | |
| 18–22 | plainClass | Cấp ĐB/đồi I–V | `Dropdown` | | I–V |
| 23–27 | mountainClass | Cấp MN I–V | `Dropdown` | | I–V |
| 28–31 | yearsInServiceBand | Phân loại năm SD | `Dropdown` | | 1–3 / 4–6 / 7–9 / >9 |
| 32 | handoverMinistry | BG T.BỘ | `Checkbox` | | bool |
| 33 | handoverLocal | BG MĐ | `Checkbox` | | bool |
| 34 | lastMajorRehabYear | Năm ĐT | `Number` | | year |
| 35 | lastSurfaceRepairYear | Năm SC ≥1km | `Number` | | year |
| 36 | updatedByName | Người cập nhật | `Text` | | audit display |
| 37 | manageUnit | ĐV QL | `Text` → SearchInput | | **GAP-CSDL-ORG-01** |
| 38 | notes | Ghi chú | `Textarea` | | |
| — | status | Tình trạng | `Dropdown` | * | LOOKUP_STATIC |
| — | side | Vị trí L/R | `Dropdown` | | L/R/C/Both · common CTX |

## Control hint — actions

| Action | Surface | Notes |
|--------|---------|-------|
| back-hub | List A | về `/so-ts/csdl-so-sach` |
| create / view / edit / copy / delete | Toolbar + row | soft-delete API |
| save / cancel | Form footer | LeaveConfirmModal dirty |
| import / export | Toolbar | stub · XLS Biểu 1 OUT pack |
| history | Toolbar / row | stub modal OK P2 |
| schema-config | Toolbar | UiSchema typed `pavement-sections` |

## Open questions (PO trước Design)

| ID | Q | Options |
|----|---|---------|
| Q-WIDTH | 4 bucket bề rộng mặt vs 1 `surfaceWidthM`? | four_buckets · one_width (**SA**) |
| Q-STRUCT | 4 flag kết cấu vs 1 enum? | four_flags · one_enum (**khuyến nghị**) |
| Q-ROUTE | Alias `/csdl-bieu-01` Navigate ngay hay DEFER hub-only? | alias_now · hub_only |
| Q-PROV | Province static vs master? | keep_static · master_province |

## Handoff

| Role | Dùng packet |
|------|-------------|
| **PO** | § Delta + open Q → `requirement.md` |
| **Design** | control-map khớp bảng · prototype list+slideout 38 cột · reviewUrl |
| **SA** | path `api/v1/asset/csdl-records` · typed DTO/UiSchema · Schema_CsdlBieu1 · WIDTH/STRUCT |
| **TL/Dev** | Wire controlHint · **cấm** đoán Text vs SearchInput |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHash | `sha256:3545960f4006740c9dfe57b5f004fa4a1cd1b7befbcd51e35e2168e16821b65e` |
| headerFingerprint | `sha256:6376475bbf48ca5b3e8cfd26688cd877fd1bc77d5b8d8c4c3d314cd0572f5cf2` |
| generatedAt | 2026-09-05T11:53:25.414Z |
| versionGate | ok |
| taskId | task_41122f1b |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:3545960f4006740c9dfe57b5f004fa4a1cd1b7befbcd51e35e2168e16821b65e -->
