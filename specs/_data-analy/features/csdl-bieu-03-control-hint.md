# Data-analy — controlHint — csdl-bieu-03 (Kind B list + Kind D Slideout · Biểu 03)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-03` |
| packKind | `list` |
| mode | `feature_context` (new_page · CTX + cluster analy + hub demo · synthetic) |
| changeScope | `new_page` |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.25.01` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |
| versionGate | `ok` (first fill stubs · CTX+demo hash pair · autoApprove queue) |
| contentHash | `sha256:2c03537918bbda56c29e1e1ef98cc081cc4e72c94447a1ac2f87f06bd6f9310e` |
| headerFingerprint | `sha256:60f7ea4153b5853222bdeaf2679929a6e4c5b66b6973bcfe12e5bd9dd3fcfbcc` |
| analyzedAt | `2026-09-05T08:40:00.000Z` |
| cluster | `csdl-cuc-2026` · Excel sheet Biểu 3 · **42** cột |
| taskId | `task_df175ffd` |
| autoApprove | `ON` (queue) |
| realData | `specs/_data-analy/features/csdl-bieu-03-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records?resource=road-tunnels` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-03` · hub deep-link `/so-ts/csdl-so-sach?resource=road-tunnels` |
| resource | `road-tunnels` |
| formNo | `03` · title VN **Hầm đường bộ** |
| peerSoTs | none trên map Cục (—) · Sổ 6 `bridge-inspections` (QL cầu/hầm) deep-link OK · **cấm** merge 1 form hai chuẩn |
| IdCode prefix | `TN` |
| runMode | `new_page` · typed form thay generic 3 ô `detail*` · GPS 3 điểm · **2 ống = 2 bản ghi GPS** |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** GPS/tube shape + migration.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — demo = zone/field **tham chiếu** · **cấm** demo-json / localStorage SSOT.  
> **Cấm** chỉ 3 ô `detailPrimary`/`detailSpec`/`detailExtra` — form = đủ cột Excel (cite analy).

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/csdl-bieu-03.md` | `9e5f1c3dbdff8e158bfe716f240d226b7bd4f842420de3f385ac5a4ba50b1367` |
| Parent hub | `docs/context/features/csdl-so-sach.md` | cite hub Kind G · sample `TN-*` / `resource=road-tunnels` |
| Cluster analy | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | Biểu 3 · 42 cột · GPS 3 điểm · 2 ống = 2 bản ghi |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` | `c2c9f8194cb104b3202bcaa46a589c9baba5cf8062aa12e7d0872a9e96eba7ae` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/csdl-so-sach.html` | hub+list+slideout chrome tham chiếu |
| Demo seed | `…/asset/js/csdl-so-sach-data.js` | `TN-20260115-0001` · labels p/s/e = Tên hầm / Cdài / Số ống · **UI only** |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | `csdl-so-sach` → Asset · **GAP-BIEU03-DMAP-01** thêm slug `csdl-bieu-03` |
| Live API | `CsdlCatalogRecordsController` | `api/v1/asset/csdl-records` (polymorphic shell) |
| Live MFE | `CsdlSoSachPage` · `CsdlFormSlideout` | generic 3-field — **GAP-BIEU03-TYPED-01** |
| Excel | `data-import/Sổ sách, biểu mẫu trình LĐ Cục/1. Biểu mẫu CSDL.xls` sheet Biểu 3 | real source · import OUT Dev/XLS task |

Normalized header (42):

`tunnelName|roadCode|roadName|province|kmFrom|kmTo|side|gpsStartLat|gpsStartLng|gpsMidLat|gpsMidLng|gpsEndLat|gpsEndLng|crossingType|tunnelClass|tubeCount|tubeIndex|liningType|clearanceM|sectionHeightM|sectionWidthM|carriageWidthM|pavementInTunnel|drainLengthM|drainSpacingM|shoulderInTunnelM|firePump|fireNicheCount|fanCount|lightCount|hasCctv|hasVms|lengthM|builtYear|status|manageUnit|updatedByName|notes|ventilationType|escapeExitCount|designLoad|ownerUnit`

## § Delta Current vs New (`new_page` · `task_df175ffd`)

| ID | Current | New (this analy) | Surface |
|----|---------|------------------|---------|
| GAP-BIEU03-TYPED-01 | Hub list `road-tunnels` + form 3 ô `detail*` (Tên/Cdài/Số ống) | Typed **42 cột** Excel Biểu 3 · Slideout 2col · nhóm GPS / kết cấu / thoát+PCCC / thiết bị | form + list cols |
| GAP-BIEU03-ROUTE-01 | Chỉ deep-link hub `?resource=road-tunnels` | Alias mfeStd `/csdl-bieu-03` · giữ hub entry | shell / Design |
| GAP-BIEU03-GPS-01 | Không có GPS typed | 3 điểm đầu/giữa/cuối · lat/lng ×3 | form |
| GAP-BIEU03-TUBE-01 | `detailExtra` = số ống free | `tubeCount` + **`tubeIndex`** · **2 ống = 2 bản ghi GPS** (mỗi ống 1 row GPS) | form · list |
| GAP-BIEU03-STRUCT-01 | — | Loại xuyên · cấp ĐB/MN · vỏ · tĩnh không · khổ CxR · B xe chạy · mặt đường trong hầm | form |
| GAP-BIEU03-DRAIN-01 | — | Thoát nước dài+KC · lề trong hầm | form |
| GAP-BIEU03-FIRE-01 | — | PCCC bơm / hốc · quạt · đèn SL · CCTV/VMS | form |
| GAP-BIEU03-VENT-01 | — | `ventilationType` · `escapeExitCount` · `designLoad` — **SA** unit/shape | form |
| GAP-CSDL-ROAD-01 | `roadName` Text free (hub) | `SearchInput` `road-route` + `roadCode` | filter + form |
| GAP-CSDL-PROV-01 | LOOKUP_STATIC 5 tỉnh | giữ P1 **hoặc** master province — PO chốt | filter + form |
| GAP-CSDL-ORG-01 | `manageUnit` Text | SearchInput tree `org-unit` · DEFER P2 OK | form |
| GAP-CSDL-CUC-03 | Form generic không đủ cột | Đóng gap cho Biểu 3 khi typed PASS | form |
| GAP-CSDL-XLS-01 | Import/export stub | Sheet Biểu 3 đúng 42 cột — OUT pack Dev/XLS | toolbar |
| GAP-BIEU03-PEER-01 | Sổ 6 QL cầu/hầm | Deep-link OK · **cấm** 1 form hai chuẩn / invent merge | nav |
| GAP-BIEU03-DMAP-01 | DOMAIN-MAP thiếu `csdl-bieu-03` (có 01/02/04…) | Thêm slug → Asset | DOMAIN-MAP |
| GAP-BIEU03-MAP-01 | — | GPS fields · **cấm** invent map canvas trên list | form · gis deep-link only |

**Không** đổi: API prefix `api/v1/asset/csdl-records` · resource key `road-tunnels` · Kind B list A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · **cấm ERP.*** · IdCode **cấm** Guid · prefix `TN`.

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| Entry | Hub card **hoặc** `/csdl-bieu-03` | Title VN · back hub · **cấm** slug trên card |
| List A | Header | «Biểu 03 — Hầm đường bộ» · back hub |
| List B | Toolbar + filter | SearchTextInput · province · status · road SearchInput · kmFrom/kmTo · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub · **search must work** · **cấm** nút Tìm riêng |
| List C | `LinCatalogDataGrid` | Cột typed (tunnelName · lengthM · tubeCount · GPS summary · không chỉ 3 detail) · STT · row menu Xem/Sửa/Copy/Xóa/Lịch sử · kéo cột ON |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form | Kind **D** Slideout Z1–Z3 · 2col · **sections** GPS / Kết cấu / Thoát+PCCC / Thiết bị | C/E/V/Copy · View=`readOnly` · LeaveConfirmModal dirty · footer Lưu/Hủy |
| Map | none | deep-link gis only · **cấm** invent map canvas |

**Skip chrome:** GOVOne logo/bell/user · demo skin.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên hầm · đường · ghi chú |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | **GAP-CSDL-PROV-01** |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC | tot/tb/kem/hong |
| roadCode | Đường | `SearchInput` | **road-route** | **GAP-CSDL-ROAD-01** |
| kmFrom | Từ Km | `Number` | — | filter QS |
| kmTo | Đến Km | `Number` | — | filter QS |
| tunnelClass | Cấp hầm | `Dropdown` | LOOKUP_STATIC | optional filter ĐB/MN |
| tubeCount | Số ống | `Number` | — | optional filter |

## Control hint — form fields (Slideout · Excel Biểu 3)

| # | Field key | Label | controlHint | required | Notes |
|---|-----------|-------|-------------|----------|-------|
| — | code | Mã | `Text` readonly | auto | IdCode prefix `TN` · **cấm** Guid |
| 1 | tunnelName | Tên hầm | `Text` | * | |
| 2–3 | roadCode / roadName | Mã/Tên đường | `SearchInput` | * | catalogKind `road-route` |
| 4 | province | Địa danh | `Dropdown` | * | LOOKUP_STATIC P1 |
| 5–6 | kmFrom / kmTo | Từ/Đến Km | `Number` | * | decimal · lý trình |
| 7 | side | Vị trí L/R | `Dropdown` | | L/R/C/Both |
| 8–13 | gpsStartLat/Lng · gpsMidLat/Lng · gpsEndLat/Lng | GPS đầu/giữa/cuối | `Number` | * | **GAP-BIEU03-GPS-01** |
| 14 | crossingType | Loại xuyên | `Dropdown` | * | núi / sông / đô thị / khác — **SA** enum |
| 15 | tunnelClass | Cấp hầm ĐB/MN | `Dropdown` | * | ĐB / MN |
| 16 | tubeCount | Số ống | `Number` | * | int ≥1 |
| 17 | tubeIndex | Ống số | `Number` | * nếu tubeCount>1 | **GAP-BIEU03-TUBE-01** · 1-based · mỗi ống 1 row GPS |
| 18 | liningType | Vỏ hầm | `Dropdown`/`Text` | | BTCT / đá / thép / khác |
| 19 | clearanceM | Tĩnh không (m) | `Number` | | |
| 20–21 | sectionHeightM / sectionWidthM | Khổ C × R (m) | `Number` | | |
| 22 | carriageWidthM | B xe chạy (m) | `Number` | * | |
| 23 | pavementInTunnel | Mặt đường trong hầm | `Dropdown`/`Text` | | BTXM/BTN/… |
| 24–25 | drainLengthM / drainSpacingM | Thoát nước dài / KC | `Number` | | |
| 26 | shoulderInTunnelM | Lề trong hầm (m) | `Number` | | |
| 27 | firePump | PCCC bơm | `Checkbox`/`Text` | | |
| 28 | fireNicheCount | Hốc PCCC SL | `Number` | | |
| 29 | fanCount | Quạt SL | `Number` | | |
| 30 | lightCount | Đèn SL | `Number` | | |
| 31 | hasCctv | CCTV | `Checkbox` | | |
| 32 | hasVms | VMS | `Checkbox` | | |
| 33 | lengthM | Chiều dài (m) | `Number` | * | |
| 34 | builtYear | Năm XD | `Number` | | year |
| 35 | status | Tình trạng | `Dropdown` | * | LOOKUP_STATIC |
| 36 | manageUnit | ĐV QL | `Text` → SearchInput | | **GAP-CSDL-ORG-01** |
| 37 | updatedByName | Người cập nhật | `Text` | | audit display |
| 38 | notes | Ghi chú | `Textarea` | | |
| 39 | ventilationType | Loại thông gió | `Dropdown`/`Text` | | **GAP-BIEU03-VENT-01** |
| 40 | escapeExitCount | Lối thoát hiểm SL | `Number` | | |
| 41 | designLoad | Tải TK | `Text`/`Number` | | **SA** shape |
| 42 | ownerUnit | Chủ quản | `Text` | | demo có · optional typed |

> Số thứ tự # = đề xuất bind · **SA** khớp merge-header sheet Biểu 3 (1)–(42) · fingerprint trên.  
> Rule cứng: **2 ống = 2 bản ghi** (mỗi bản ghi có bộ GPS 3 điểm riêng) — **không** nhét 2 bộ GPS trên 1 row.

## Control hint — actions

| Action | Surface | Notes |
|--------|---------|-------|
| back-hub | List A | về `/so-ts/csdl-so-sach` |
| create / view / edit / copy / delete | Toolbar + row | soft-delete API |
| save / cancel | Form footer | LeaveConfirmModal dirty |
| import / export | Toolbar | stub · XLS Biểu 3 OUT pack |
| history | Toolbar / row | stub modal OK P2 |
| schema-config | Toolbar | UiSchema typed `road-tunnels` |
| open-so6 | Row optional | deep-link Sổ 6 QL cầu/hầm · **cấm** merge form |

## Open questions (PO trước Design)

| ID | Q | Options |
|----|---|---------|
| Q-GPS | GPS 6 số (lat/lng×3) vs widget tọa độ + copy từ GIS? | six_numbers · gis_pick (**Design/SA**) |
| Q-TUBE | 2 ống = 2 row (khuyến nghị) vs 1 row + child tube GPS? | two_rows · child_table (**SA**) |
| Q-VENT | ventilationType / designLoad Text vs Dropdown+Number? | text · enum_number (**SA**) |
| Q-ROUTE | Alias `/csdl-bieu-03` Navigate ngay hay DEFER hub-only? | alias_now · hub_only |
| Q-PROV | Province static vs master? | keep_static · master_province |
| Q-SECTION | Form sections 4 khối vs flat 2col? | sectioned · flat (**Design**) |

## Handoff

| Role | Dùng packet |
|------|-------------|
| **PO** | § Delta + open Q → `requirement.md` |
| **Design** | control-map khớp bảng · prototype list+slideout 42 cột · reviewUrl |
| **SA** | path `api/v1/asset/csdl-records` · typed DTO/UiSchema · Schema_CsdlBieu3 · GPS/TUBE/VENT |
| **TL/Dev** | Wire controlHint · **cấm** đoán Text vs SearchInput |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHash | `sha256:2c03537918bbda56c29e1e1ef98cc081cc4e72c94447a1ac2f87f06bd6f9310e` |
| headerFingerprint | `sha256:60f7ea4153b5853222bdeaf2679929a6e4c5b66b6973bcfe12e5bd9dd3fcfbcc` |
| generatedAt | 2026-09-05T08:40:00.000Z |
| versionGate | ok |
| taskId | task_df175ffd |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:2c03537918bbda56c29e1e1ef98cc081cc4e72c94447a1ac2f87f06bd6f9310e -->
