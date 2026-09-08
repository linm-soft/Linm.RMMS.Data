# Data-analy — controlHint — csdl-bieu-02 (Kind B list + Kind D Slideout · Biểu 02)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-02` |
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
| contentHash | `sha256:bd73974e607f886dd38736015cb5a6a3fb82aff9d6a63328963ceb5c4be436a2` |
| headerFingerprint | `sha256:34e1fcb051f6010fbe70ebdffab71df3d6f441a373d3be0249dd601e596d5591` |
| analyzedAt | `2026-09-05T07:55:00.000Z` |
| cluster | `csdl-cuc-2026` · Excel sheet Biểu 2 · **48** cột (+ legacy 64–69) |
| taskId | `task_dd8553f8` |
| autoApprove | `ON` (queue) |
| realData | `specs/_data-analy/features/csdl-bieu-02-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records?resource=bridges` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-02` · hub deep-link `/so-ts/csdl-so-sach?resource=bridges` |
| resource | `bridges` |
| formNo | `02` · title VN **Thống kê cầu** |
| peerSoTs | none trên map Cục (—) · link Sổ 6 `bridge-inspections` / passport — deep-link OK · **cấm** merge 1 form hai chuẩn |
| IdCode prefix | `BR` |
| runMode | `new_page` · typed form thay generic 3 ô `detail*` · GPS 3 điểm |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** GPS/structure shape + migration.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — demo = zone/field **tham chiếu** · **cấm** demo-json / localStorage SSOT.  
> **Cấm** chỉ 3 ô `detailPrimary`/`detailSpec`/`detailExtra` — form = đủ cột Excel (cite analy).

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/csdl-bieu-02.md` | `2e3676698a1e7987d26a030e04fc9ee452949e937281d112d1b0a40050c29eed` |
| Parent hub | `docs/context/features/csdl-so-sach.md` | cite hub Kind G · sample `BR-*` / `resource=bridges` |
| Cluster analy | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | Biểu 2 · 48 cột · GPS 3 điểm · dầm + phần dưới + gối/lan can |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` | `c2c9f8194cb104b3202bcaa46a589c9baba5cf8062aa12e7d0872a9e96eba7ae` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/csdl-so-sach.html` | hub+list+slideout chrome tham chiếu |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | `csdl-so-sach` → Asset · **GAP-BIEU02-DMAP-01** thêm slug `csdl-bieu-02` |
| Live API | `CsdlCatalogRecordsController` | `api/v1/asset/csdl-records` (polymorphic shell) |
| Live MFE | `CsdlSoSachPage` · `CsdlFormSlideout` | generic 3-field — **GAP-BIEU02-TYPED-01** |
| Excel | `data-import/Sổ sách, biểu mẫu trình LĐ Cục/1. Biểu mẫu CSDL.xls` sheet Biểu 2 | real source · import OUT Dev/XLS task |

Normalized header (48):

`code|bridgeName|roadCode|roadName|province|kmFrom|kmTo|side|gpsStartLat|gpsStartLng|gpsMidLat|gpsMidLng|gpsEndLat|gpsEndLng|spanCount|spanScheme|beamLengthM|beamType|abutmentCondition|abutmentFoundation|abutmentBody|pierCondition|pierFoundation|pierBody|designLoad|actualLoad|bearingCount|bearingType|railingLengthM|curbAreaM2|handrailType|drainPipeCount|drainPipeLengthM|reflectiveArea10mM2|steelCompositeBeam|pierAbutmentCrown|lengthM|carriageWidthM|builtYear|status|manageUnit|updatedByName|notes|waterClearanceM|approachType|navigationClass|legacyCol64|legacyCol69`

## § Delta Current vs New (`new_page` · `task_dd8553f8`)

| ID | Current | New (this analy) | Surface |
|----|---------|------------------|---------|
| GAP-BIEU02-TYPED-01 | Hub list `bridges` + form 3 ô `detail*` | Typed **48 cột** Excel Biểu 2 · Slideout 2col · nhóm GPS/dầm/phần dưới | form + list cols |
| GAP-BIEU02-ROUTE-01 | Chỉ deep-link hub `?resource=bridges` | Alias mfeStd `/csdl-bieu-02` · giữ hub entry | shell / Design |
| GAP-BIEU02-GPS-01 | Không có GPS typed | 3 điểm đầu/giữa/cuối (đuôi mố / tim) · lat/lng ×3 | form |
| GAP-BIEU02-BEAM-01 | — | Dầm: số nhịp · sơ đồ · dài · loại DUL/BTCT/dàn thép/I LH/vòm/khác | form |
| GAP-BIEU02-SUB-01 | — | Phần dưới: mố TT · móng/thân mố · trụ TT · móng/thân trụ | form |
| GAP-BIEU02-LOAD-01 | — | Tải TK + tải TT | form |
| GAP-BIEU02-FURN-01 | — | Gối SL+loại · lan can dài + DT gờ + tay vịn · ống thoát SL+dài · DT PQ 10m · dầm thép LH · đỉnh trụ/mố | form |
| GAP-BIEU02-LEGACY-01 | Excel legacy 64–69 | Map/drop 2 cột legacy (`legacyCol64`/`legacyCol69`) — **SA chốt** | import / BE |
| GAP-CSDL-ROAD-01 | `roadName` Text free (hub) | `SearchInput` `road-route` + `roadCode` | filter + form |
| GAP-CSDL-PROV-01 | LOOKUP_STATIC 5 tỉnh | giữ P1 **hoặc** master province — PO chốt | filter + form |
| GAP-CSDL-ORG-01 | `manageUnit` Text | SearchInput tree `org-unit` · DEFER P2 OK | form |
| GAP-CSDL-CUC-03 | Form generic không đủ cột | Đóng gap cho Biểu 2 khi typed PASS | form |
| GAP-CSDL-XLS-01 | Import/export stub | Sheet Biểu 2 đúng 48 cột — OUT pack Dev/XLS | toolbar |
| GAP-BIEU02-PEER-01 | Passport `/bridges/{id}` · Sổ 6 | Deep-link OK · **cấm** 1 form hai chuẩn / invent merge | nav |
| GAP-BIEU02-DMAP-01 | DOMAIN-MAP thiếu `csdl-bieu-02` | Thêm slug → Asset (cùng `csdl-bieu-01/04…`) | DOMAIN-MAP |
| GAP-BIEU02-MAP-01 | — | GPS fields · **cấm** invent map canvas trên list | form · gis deep-link only |

**Không** đổi: API prefix `api/v1/asset/csdl-records` · resource key `bridges` · Kind B list A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · **cấm ERP.*** · IdCode **cấm** Guid · prefix `BR`.

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| Entry | Hub card **hoặc** `/csdl-bieu-02` | Title VN · back hub · **cấm** slug trên card |
| List A | Header | «Biểu 02 — Thống kê cầu» · back hub |
| List B | Toolbar + filter | SearchTextInput · province · status · road SearchInput · kmFrom/kmTo · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub · **search must work** · **cấm** nút Tìm riêng |
| List C | `LinCatalogDataGrid` | Cột typed (bridgeName · length · beamType · GPS summary · không chỉ 3 detail) · STT · row menu Xem/Sửa/Copy/Xóa/Lịch sử · kéo cột ON |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form | Kind **D** Slideout Z1–Z3 · 2col · **sections** GPS / Dầm / Phần dưới / Tải+Gối / Lan can+ thoát | C/E/V/Copy · View=`readOnly` · LeaveConfirmModal dirty · footer Lưu/Hủy |
| Map | none | deep-link gis only · **cấm** invent map canvas |

**Skip chrome:** GOVOne logo/bell/user · demo skin.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên cầu · đường · ghi chú |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | **GAP-CSDL-PROV-01** |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC | tot/tb/kem/hong |
| roadCode | Đường | `SearchInput` | **road-route** | **GAP-CSDL-ROAD-01** |
| kmFrom | Từ Km | `Number` | — | filter QS |
| kmTo | Đến Km | `Number` | — | filter QS |
| beamType | Loại dầm | `Dropdown` | LOOKUP_STATIC | optional filter |

## Control hint — form fields (Slideout · Excel Biểu 2)

| # | Field key | Label | controlHint | required | Notes |
|---|-----------|-------|-------------|----------|-------|
| — | code | Mã | `Text` readonly | auto | IdCode prefix `BR` · **cấm** Guid |
| 1 | bridgeName | Tên cầu | `Text` | * | |
| 2–3 | roadCode / roadName | Mã/Tên đường | `SearchInput` | * | catalogKind `road-route` |
| 4 | province | Địa danh | `Dropdown` | * | LOOKUP_STATIC P1 |
| 5–6 | kmFrom / kmTo | Từ/Đến Km | `Number` | * | decimal · lý trình |
| 7 | side | Vị trí L/R | `Dropdown` | | L/R/C/Both |
| 8–13 | gpsStartLat/Lng · gpsMidLat/Lng · gpsEndLat/Lng | GPS đầu/giữa/cuối | `Number` | * | **GAP-BIEU02-GPS-01** · đuôi mố / tim |
| 14 | spanCount | Số nhịp | `Number` | * | int |
| 15 | spanScheme | Sơ đồ nhịp | `Text` | | |
| 16 | beamLengthM | Dài dầm (m) | `Number` | | |
| 17 | beamType | Loại dầm | `Dropdown` | * | DUL/BTCT/dàn thép/I LH/vòm/khác |
| 18 | abutmentCondition | Mố TT | `Dropdown` | | tot/tb/kem/hong |
| 19–20 | abutmentFoundation / abutmentBody | Móng / thân mố | `Text` | | |
| 21 | pierCondition | Trụ TT | `Dropdown` | | tot/tb/kem/hong |
| 22–23 | pierFoundation / pierBody | Móng / thân trụ | `Text` | | |
| 24–25 | designLoad / actualLoad | Tải TK / TT | `Text` **hoặc** `Number` | | **SA** unit/shape |
| 26–27 | bearingCount / bearingType | Gối SL / loại | `Number` + `Dropdown`/`Text` | | |
| 28–30 | railingLengthM / curbAreaM2 / handrailType | Lan can dài · DT gờ · tay vịn | `Number`/`Text` | | |
| 31–32 | drainPipeCount / drainPipeLengthM | Ống thoát SL / dài | `Number` | | |
| 33 | reflectiveArea10mM2 | DT phát quang 10m | `Number` | | |
| 34 | steelCompositeBeam | Dầm thép LH | `Checkbox` **hoặc** `Text` | | |
| 35 | pierAbutmentCrown | Đỉnh trụ/mố | `Text` | | |
| 36–37 | lengthM / carriageWidthM | Cdài cầu / B xe chạy | `Number` | * | |
| 38 | builtYear | Năm XD | `Number` | | year |
| 39 | status | Tình trạng | `Dropdown` | * | LOOKUP_STATIC |
| 40 | manageUnit | ĐV QL | `Text` → SearchInput | | **GAP-CSDL-ORG-01** |
| 41 | updatedByName | Người cập nhật | `Text` | | audit display |
| 42 | notes | Ghi chú | `Textarea` | | |
| 43–44 | waterClearanceM / approachType | Tĩnh không nước · đường dẫn | `Number`/`Text` | | Excel cite |
| 45 | navigationClass | Cấp thông thuyền | `Dropdown`/`Text` | | nếu có |
| 46–47 | legacyCol64 / legacyCol69 | Legacy Excel | `Text` hidden P1 | | **GAP-BIEU02-LEGACY-01** SA drop/map |

> Số thứ tự # = đề xuất bind · **SA** khớp merge-header sheet Biểu 2 (1)–(48) · fingerprint trên.

## Control hint — actions

| Action | Surface | Notes |
|--------|---------|-------|
| back-hub | List A | về `/so-ts/csdl-so-sach` |
| create / view / edit / copy / delete | Toolbar + row | soft-delete API |
| save / cancel | Form footer | LeaveConfirmModal dirty |
| import / export | Toolbar | stub · XLS Biểu 2 OUT pack |
| history | Toolbar / row | stub modal OK P2 |
| schema-config | Toolbar | UiSchema typed `bridges` |
| open-so6 / passport | Row optional | deep-link Sổ 6 / passport · **cấm** merge form |

## Open questions (PO trước Design)

| ID | Q | Options |
|----|---|---------|
| Q-GPS | GPS 6 số (lat/lng×3) vs widget tọa độ + copy từ GIS? | six_numbers · gis_pick (**Design/SA**) |
| Q-LOAD | Tải TK/TT Text free vs Number+đơn vị enum? | text · number_unit (**SA**) |
| Q-LEGACY | Giữ 2 cột legacy 64–69 hay drop khi import? | keep_hidden · drop (**SA**) |
| Q-ROUTE | Alias `/csdl-bieu-02` Navigate ngay hay DEFER hub-only? | alias_now · hub_only |
| Q-PROV | Province static vs master? | keep_static · master_province |
| Q-SECTION | Form sections 5 khối vs flat 2col? | sectioned · flat (**Design**) |

## Handoff

| Role | Dùng packet |
|------|-------------|
| **PO** | § Delta + open Q → `requirement.md` |
| **Design** | control-map khớp bảng · prototype list+slideout 48 cột · reviewUrl |
| **SA** | path `api/v1/asset/csdl-records` · typed DTO/UiSchema · Schema_CsdlBieu2 · GPS/LEGACY/LOAD |
| **TL/Dev** | Wire controlHint · **cấm** đoán Text vs SearchInput |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHash | `sha256:bd73974e607f886dd38736015cb5a6a3fb82aff9d6a63328963ceb5c4be436a2` |
| headerFingerprint | `sha256:34e1fcb051f6010fbe70ebdffab71df3d6f441a373d3be0249dd601e596d5591` |
| generatedAt | 2026-09-05T07:55:00.000Z |
| versionGate | ok |
| taskId | task_dd8553f8 |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:bd73974e607f886dd38736015cb5a6a3fb82aff9d6a63328963ceb5c4be436a2 -->
