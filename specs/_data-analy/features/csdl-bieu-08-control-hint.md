# Data-analy — controlHint — csdl-bieu-08 (Kind B list + Kind D Slideout · Biểu 08)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-08` |
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
| contentHash | `sha256:f972c82727726d256754d076435f9ef97c993b4f9844dc79e50b6415fcaf54be` |
| headerFingerprint | `sha256:ba8b8db4f7637ee32cfd4a882b6abdc774c538f6c9812c3ecd1d13f6151cdd6f` |
| analyzedAt | `2026-09-05T16:58:08.958Z` |
| cluster | `csdl-cuc-2026` · Excel sheet Biểu 8 · **45 cột** · **11 nhóm** · live hub **Biểu 7** renumber |
| taskId | `task_a21c4937` |
| autoApprove | `ON` (queue) |
| realData | `specs/_data-analy/features/csdl-bieu-08-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records?resource=traffic-safety` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-08` · hub deep-link `/so-ts/csdl-so-sach?resource=traffic-safety` |
| resource | `traffic-safety` |
| formNo | `08` · title VN **Hệ thống ATGT** · live label còn **Biểu 7** |
| peerSoTs | `TRAFFIC_SIGN` · `KM_POST` · `DELINEATOR` · `CONVEX_MIRROR` · `GUARDRAIL` · `MEDIAN` (+ ATGT thiếu typed) — deep-link OK · **cấm** merge 1 form · **≠** Sổ TS |
| runMode | `new_page` · typed child/`type=` · **cấm** 1 hàng wide 45 cột · **cấm** chỉ 3 ô `detail*` |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** typed DTO + child tables / migration.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — demo = zone/field **tham chiếu** · **cấm** demo-json / localStorage SSOT.  
> **Cấm** chỉ 3 ô `detailPrimary`/`detailSpec`/`detailExtra` — form = đủ cột Excel theo `assetType` (cite analy).  
> CTX: Live hub Biểu 7 → renumber **formNo=8** · resource key **giữ** `traffic-safety`.  
> **GAP-CSDL-01 / GAP-CSDL-CUC-08:** child tables hoặc `?type=` — **cấm** 1 entity wide.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/csdl-bieu-08.md` | `f972c82727726d256754d076435f9ef97c993b4f9844dc79e50b6415fcaf54be` |
| Parent hub | `docs/context/features/csdl-so-sach.md` | cite hub Kind G · resource `traffic-safety` |
| Cluster analy | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | Biểu 8 · 45 cột · 11 nhóm · T-REN-01 · GAP-CSDL-CUC-08 |
| DB API SSOT | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` | § Biểu 7 `TrafficSafetyAsset` (+ children) · map typed Biểu **8** |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` | `c2c9f8194cb104b3202bcaa46a589c9baba5cf8062aa12e7d0872a9e96eba7ae` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/csdl-so-sach.html` | hub+list+slideout chrome tham chiếu · prefix `AT` |
| Demo data | `Linm.RMMS.Demo/src/demo/asset/js/csdl-so-sach-data.js` | `traffic-safety` · formNo **7** (cũ) · labels Chủng loại / Mã biển / SL |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | `csdl-so-sach` → Asset · `asset` |
| Live API | `CsdlCatalogRecordsController` | `api/v1/asset/csdl-records` (polymorphic shell) |
| Live MFE | `CsdlSoSachPage` · `CsdlFormSlideout` | generic 3-field — **GAP-BIEU08-TYPED-01** |
| Excel | `data-import/Sổ sách, biểu mẫu trình LĐ Cục/1. Biểu mẫu CSDL.xls` sheet Biểu 8 | real source · import OUT Dev/XLS task |
| Peer | `so-ts-type-grid` · cluster `atgt_point` + guardrail/median | deep-link only · **≠** biểu Cục |

Normalized header (45 — Excel flatten · runtime = shared + child theo `assetType`):

`code|roadCode|roadName|province|kmFrom|kmTo|side|assetType|signCode|signSize|signPoleCount|signPoleHeightM|markerKind|markerQty|markerStructure|markerAreaM2|medianKind|medianStructure|medianLengthM|medianHeightM|antiGlareKind|antiGlareStructure|antiGlareQty|antiGlareLengthM|islandType|islandStructure|islandAreaM2|studSize|studQty|guardrailKind|guardrailStructure|guardrailLengthM|guardrailReflector|markCode|markLengthM|markWidthM|markAreaM2|cushionQty|mirrorQty|signalPoleKind|signalHeightM|lampKind|lampQty|builtYear|status`

Form trail extras (không đếm 45): `manageUnit` · `notes`.

## § Delta Current vs New (`new_page` · `task_a21c4937`)

| ID | Current | New (this analy) | Surface |
|----|---------|------------------|---------|
| GAP-BIEU08-TYPED-01 | Hub list `traffic-safety` + form 3 ô `detail*` | Typed **45 cột / 11 nhóm** · Slideout 2col · discriminator `assetType` + child section | form + list cols |
| GAP-BIEU08-CHILD-01 | 1 hàng wide / generic detail | Child tables **hoặc** `?type=` · **cấm** 1 entity wide · **GAP-CSDL-01** · **GAP-CSDL-CUC-08** | SA + form |
| GAP-BIEU08-REN-01 | Demo/live formNo **7** · title «Hệ thống ATGT» | Renumber **formNo=8** · giữ `?resource=traffic-safety` · **T-REN-01** | hub card + list A |
| GAP-BIEU08-ROUTE-01 | Chỉ deep-link hub `?resource=traffic-safety` | Alias mfeStd `/csdl-bieu-08` · giữ hub entry | shell / Design |
| GAP-BIEU08-TYPE-01 | detailPrimary = «Chủng loại ATGT» free | `assetType` LOOKUP 11 giá trị · filter list | filter + form |
| GAP-BIEU08-SIGN-01 | detail* gộp mã/biển | Child biển: `signCode` · `signSize` · `signPoleCount` · `signPoleHeightM` | form |
| GAP-BIEU08-MARKER-01 | — | Child cọc/Km/H/dẻo/thủy chí: `markerKind` · qty · KC · DT | form |
| GAP-BIEU08-MEDIAN-01 | — | Child GPC: kind · KC · dài · cao | form |
| GAP-BIEU08-AG-01 | — | Child chống chói: kind · KC · SL · dài | form |
| GAP-BIEU08-ISLAND-01 | — | Child đảo: type · KC · DT | form |
| GAP-BIEU08-STUD-01 | — | Child đinh PQ: size · qty | form |
| GAP-BIEU08-GR-01 | seed «Hộ lan sóng» trong detail* | Child hộ lan: kind · KC · dài · mắt PQ | form + list |
| GAP-BIEU08-MARK-01 | — | Child vạch sơn: markCode · dài · rộng · DT | form |
| GAP-BIEU08-CUSH-01 | — | Child thùng giảm chấn: `cushionQty` | form |
| GAP-BIEU08-MIRROR-01 | — | Child gương cầu: `mirrorQty` | form |
| GAP-BIEU08-SIGNAL-01 | — | Child đèn: poleKind · cao · lampKind · qty | form |
| GAP-CSDL-ROAD-01 | `roadName` Text free (hub) | `SearchInput` `road-route` + `roadCode` | filter + form |
| GAP-CSDL-PROV-01 | LOOKUP_STATIC 5 tỉnh | giữ P1 **hoặc** master province — PO chốt | filter + form |
| GAP-CSDL-ORG-01 | `manageUnit` Text | SearchInput tree `org-unit` · DEFER P2 OK | form |
| GAP-CSDL-CUC-03 | Form generic không đủ cột | Đóng gap cho Biểu 8 khi typed PASS | form |
| GAP-CSDL-XLS-01 | Import/export stub | Sheet Biểu 8 đúng 45 cột / merge — OUT pack Dev/XLS | toolbar |
| GAP-BIEU08-PEER-01 | so-ts ATGT typed riêng | Deep-link OK · **cấm** 1 form hai chuẩn · **GAP-CSDL-CUC-11** | nav |

**Không** đổi: API prefix `api/v1/asset/csdl-records` · resource key `traffic-safety` · Kind B list A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · **cấm ERP.*** · IdCode **cấm** Guid · prefix **`AT`**.

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| Entry | Hub card **hoặc** `/csdl-bieu-08` | Title VN · back hub · **cấm** slug trên card |
| List A | Header | «Biểu 08 — Hệ thống ATGT» · back hub |
| List B | Toolbar + filter | SearchTextInput · province · status · road SearchInput · kmFrom/kmTo · side · **assetType** · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub · **search must work** · **cấm** nút Tìm riêng |
| List C | `LinCatalogDataGrid` | Cột typed theo type (không chỉ 3 detail) · STT · row menu Xem/Sửa/Copy/Xóa/Lịch sử · kéo cột ON · **cấm** hiện đủ 45 cột cùng lúc |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form | Kind **D** Slideout Z1–Z3 · 2col | C/E/V/Copy · View=`readOnly` · LeaveConfirmModal dirty · footer Lưu/Hủy · section shared + **1 child** theo `assetType` |
| Map | none | deep-link gis only · **cấm** invent map canvas |

**Skip chrome:** GOVOne logo/bell/user · demo skin.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · đường · signCode · ghi chú |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | **GAP-CSDL-PROV-01** |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC | tot/tb/kem/hong |
| roadCode | Đường | `SearchInput` | **road-route** | **GAP-CSDL-ROAD-01** |
| kmFrom / kmTo | Lý trình từ–đến | `Number` | — | Point/Line geom |
| side | Vị trí (T/P/C) | `Dropdown` | LOOKUP_STATIC | L/R/C/Both |
| assetType | Chủng loại ATGT | `Dropdown` | LOOKUP_STATIC | 11 nhóm · **GAP-BIEU08-TYPE-01** · map `?type=` |

## Control hint — form fields (Slideout · shared + child)

### Shared (mọi type)

| # | Field key | Label | controlHint | required | Notes |
|---|-----------|-------|-------------|----------|-------|
| — | code | Mã | `Text` readonly | auto | IdCode prefix `AT` · **cấm** Guid |
| 1–2 | roadCode / roadName | Mã/Tên đường | `SearchInput` | * | catalogKind `road-route` |
| 3 | province | Địa danh | `Dropdown` | * | LOOKUP_STATIC P1 |
| 4–5 | kmFrom / kmTo | Lý trình từ–đến (Km) | `Number` | * | decimal |
| 6 | side | Vị trí | `Dropdown` | * | L/R/C/Both |
| 7 | assetType | Chủng loại | `Dropdown` | * | 11 enum · đổi type → đổi child section · **Q-TYPE-UX** |
| 8 | builtYear | Năm XD/SD | `Number` | | year |
| 9 | status | Tình trạng | `Dropdown` | * | LOOKUP_STATIC |
| — | manageUnit | ĐV QL | `Text` → SearchInput | | **GAP-CSDL-ORG-01** · trail |
| — | notes | Ghi chú | `Textarea` | | trail |

### Child sections (1 visible · theo `assetType`)

| assetType | Fields | controlHint notes |
|-----------|--------|-------------------|
| `TRAFFIC_SIGN` | signCode · signSize · signPoleCount · signPoleHeightM | QCVN mã biển · Number cao cột |
| `MARKER_POST` | markerKind · markerQty · markerStructure · markerAreaM2 | cọc tiêu/H/Km/dẻo/thủy chí · **Q-MARKER-KIND** |
| `MEDIAN` | medianKind · medianStructure · medianLengthM · medianHeightM | GPC |
| `ANTI_GLARE` | antiGlareKind · antiGlareStructure · antiGlareQty · antiGlareLengthM | tấm chống chói |
| `TRAFFIC_ISLAND` | islandType · islandStructure · islandAreaM2 | đảo GT |
| `ROAD_STUD` | studSize · studQty | đinh phản quang |
| `GUARDRAIL` | guardrailKind · guardrailStructure · guardrailLengthM · guardrailReflector | hộ lan + mắt PQ |
| `ROAD_MARKING` | markCode · markLengthM · markWidthM · markAreaM2 | vạch sơn |
| `CRASH_CUSHION` | cushionQty | thùng giảm chấn |
| `CONVEX_MIRROR` | mirrorQty | gương cầu |
| `TRAFFIC_SIGNAL` | signalPoleKind · signalHeightM · lampKind · lampQty | đèn tín hiệu |

## Control hint — actions

| Action | Surface | Notes |
|--------|---------|-------|
| back-hub | List A | về `/so-ts/csdl-so-sach` |
| create / view / edit / copy / delete | Toolbar + row | soft-delete API |
| save / cancel | Form footer | LeaveConfirmModal dirty |
| import / export | Toolbar | stub · XLS Biểu 8 OUT pack · merge-header |
| history | Toolbar / row | stub modal OK P2 |
| schema-config | Toolbar | UiSchema typed `traffic-safety` (+ per-type) |
| peer-sots | Toolbar / row (opt) | deep-link so-ts type khớp assetType · **cấm** merge form |

## Open questions (PO trước Design)

| ID | Q | Options |
|----|---|---------|
| Q-ROUTE | Alias `/csdl-bieu-08` Navigate ngay hay DEFER hub-only? | alias_now · hub_only |
| Q-PROV | Province static vs master? | keep_static · master_province |
| Q-CHILD | SA model: bảng con / JSON typed / polymorphic row + `type=`? | child_tables · json_typed · poly_row |
| Q-TYPE-UX | Đổi `assetType` khi edit: clear child · block · confirm? | clear · block · confirm |
| Q-MARKER-KIND | `markerKind` enum set (cọc tiêu/H/Km/dẻo/thủy chí) seed đâu? | excel_seed · lookup_static |
| Q-LIST-COLS | Grid mặc định: shared + type-specific subset hay schema-config only? | subset_by_type · schema_only |
| Q-REN-LABEL | Đổi label hub card «Biểu 7» → «Biểu 08» cùng release typed? | with_typed · label_first |
| Q-PEER | Peer deep-link bắt buộc P1 hay optional? | optional · required_map |

## Handoff

| Role | Dùng packet |
|------|-------------|
| **PO** | § Delta + open Q → `requirement.md` |
| **Design** | control-map khớp bảng · prototype list+slideout · **1 child section** · reviewUrl |
| **SA** | path `api/v1/asset/csdl-records` · typed DTO/UiSchema · Schema_CsdlBieu8 (+ children) · renumber formNo · **cấm** wide table |
| **TL/Dev** | Wire controlHint · **cấm** đoán Text vs SearchInput |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHash | `sha256:f972c82727726d256754d076435f9ef97c993b4f9844dc79e50b6415fcaf54be` |
| headerFingerprint | `sha256:ba8b8db4f7637ee32cfd4a882b6abdc774c538f6c9812c3ecd1d13f6151cdd6f` |
| generatedAt | 2026-09-05T16:58:08.958Z |
| versionGate | ok |
| taskId | task_a21c4937 |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:f972c82727726d256754d076435f9ef97c993b4f9844dc79e50b6415fcaf54be -->
