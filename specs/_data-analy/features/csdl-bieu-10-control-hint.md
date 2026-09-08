# Data-analy — controlHint — csdl-bieu-10 (Kind B list + Kind D Slideout · Biểu 10)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-10` |
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
| contentHash | `sha256:56715ebbcfffd0589eab296a31137e79a82b49c672dc14582fc554f4ed262346` |
| headerFingerprint | `sha256:100df2f2285c57a909981f9248564af4f788a1ea653fd261122e9a64064773ad` |
| analyzedAt | `2026-09-05T11:25:00.000Z` |
| cluster | `csdl-cuc-2026` · Excel sheet Biểu 10 · **21 cột** · live hub **Biểu 9** renumber · khối tường + rãnh đỉnh |
| taskId | `task_6b4b8a1b` |
| autoApprove | `ON` (queue) |
| realData | `specs/_data-analy/features/csdl-bieu-10-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records?resource=retaining-walls` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-10` · hub deep-link `/so-ts/csdl-so-sach?resource=retaining-walls` |
| resource | `retaining-walls` |
| formNo | `10` · title VN **Kè, tường chắn** · live label còn **Biểu 9** |
| peerSoTs | `so-ts-retaining` · **≠** merge form · **GAP-CSDL-CUC-11** · deep-link OK |
| runMode | `new_page` · typed form 21 cột · section tường + rãnh đỉnh · **cấm** chỉ 3 ô `detail*` |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** typed DTO + migration.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — demo = zone/field **tham chiếu** · **cấm** demo-json / localStorage SSOT.  
> **Cấm** chỉ 3 ô `detailPrimary`/`detailSpec`/`detailExtra` — form = đủ cột Excel (cite analy).  
> CTX: Live hub Biểu 9 → renumber **formNo=10** · resource key **giữ** `retaining-walls`.  
> Analy: Từ–đến · vị trí · chủng (trọng lực/rọ/BTCT/tường chắn) · KC · dài · cao · DT · rãnh đỉnh (loại KC hình dài) · năm SD.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/csdl-bieu-10.md` | `56715ebbcfffd0589eab296a31137e79a82b49c672dc14582fc554f4ed262346` |
| Parent hub | `docs/context/features/csdl-so-sach.md` | cite hub Kind G · resource `retaining-walls` |
| Cluster analy | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | Biểu 10 · 21 cột · T-REN-01 · § Biểu 10 |
| DB API SSOT | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` | § Biểu 9 `RetainingWall` (số biểu cũ) · map typed Biểu **10** |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` | `c2c9f8194cb104b3202bcaa46a589c9baba5cf8062aa12e7d0872a9e96eba7ae` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/csdl-so-sach.html` | hub+list+slideout chrome tham chiếu · prefix `KE` |
| Demo data | `Linm.RMMS.Demo/src/demo/asset/js/csdl-so-sach-data.js` | `retaining-walls` · formNo **9** (cũ) · labels Loại kè/tường / Chiều dài / Vật liệu |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | `csdl-so-sach` → Asset · `asset` |
| Live API | `CsdlCatalogRecordsController` | `api/v1/asset/csdl-records` (polymorphic shell) |
| Live MFE | `CsdlSoSachPage` · `CsdlFormSlideout` | generic 3-field — **GAP-BIEU10-TYPED-01** |
| Excel | `data-import/Sổ sách, biểu mẫu trình LĐ Cục/1. Biểu mẫu CSDL.xls` sheet Biểu 10 | real source · import OUT Dev/XLS task |
| Peer Sổ TS | `so-ts-retaining` · type `RETAINING` | deep-link only · **cấm** merge |

Normalized header (21 — Excel flatten):

`code|roadCode|roadName|province|kmFrom|kmTo|side|wallKind|structure|material|lengthM|heightM|areaM2|crestDitchKind|crestDitchStructure|crestDitchShape|crestDitchLengthM|inServiceYear|status|manageUnit|notes`

Form trail (đã trong 21): `manageUnit` · `notes`. **Không** thêm cột ngoài 21.  
DB SSOT `WidthM` ↔ UI `heightM` (cao) — **Q-HEIGHT** · SA confirm. `WallSide` ↔ shared `side`.

## § Delta Current vs New (`new_page` · `task_6b4b8a1b`)

| ID | Current | New (this analy) | Surface |
|----|---------|------------------|---------|
| GAP-BIEU10-TYPED-01 | Hub list `retaining-walls` + form 3 ô `detail*` | Typed **21 cột** · Slideout 2col · section tường + rãnh đỉnh | form + list cols |
| GAP-BIEU10-REN-01 | Demo/live formNo **9** · title «Kè, tường chắn» | Renumber **formNo=10** · giữ `?resource=retaining-walls` · **T-REN-01** | hub card + list A |
| GAP-BIEU10-ROUTE-01 | Chỉ deep-link hub `?resource=retaining-walls` | Alias mfeStd `/csdl-bieu-10` · giữ hub entry | shell / Design |
| GAP-BIEU10-KIND-01 | detailPrimary = «Loại kè/tường» free | `wallKind` LOOKUP (trọng lực / rọ / BTCT / tường chắn) | filter + form |
| GAP-BIEU10-STRUCT-01 | — | `structure` LOOKUP_STATIC Excel seed | form + list |
| GAP-BIEU10-MAT-01 | detailExtra = vật liệu free | `material` LOOKUP_STATIC / Text → LOOKUP | form + list |
| GAP-BIEU10-DIM-01 | detailSpec = dài free | `lengthM` · `heightM` · `areaM2` typed Number | form + list |
| GAP-BIEU10-CREST-01 | — | rãnh đỉnh: `crestDitchKind` · Structure · Shape · LengthM | form section |
| GAP-BIEU10-YEAR-01 | — | `inServiceYear` Number year (năm SD) | form + list |
| GAP-BIEU10-BLOCK-01 | 1 form flat detail* | 2 section UX: Tường chắn · Rãnh đỉnh | form |
| GAP-CSDL-ROAD-01 | `roadName` Text free (hub) | `SearchInput` `road-route` + `roadCode` | filter + form |
| GAP-CSDL-PROV-01 | LOOKUP_STATIC 5 tỉnh | giữ P1 **hoặc** master province — PO chốt | filter + form |
| GAP-CSDL-ORG-01 | `manageUnit` Text | SearchInput tree `org-unit` · DEFER P2 OK | form |
| GAP-CSDL-CUC-03 | Form generic không đủ cột | Đóng gap cho Biểu 10 khi typed PASS | form |
| GAP-CSDL-XLS-01 | Import/export stub | Sheet Biểu 10 đúng 21 cột / merge — OUT pack Dev/XLS | toolbar |
| GAP-CSDL-CUC-11 | Peer `so-ts-retaining` | **≠** Sổ TS · LOOKUP `road-route` chung · ROW riêng · deep-link OK | nav |

**Không** đổi: API prefix `api/v1/asset/csdl-records` · resource key `retaining-walls` · Kind B list A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · **cấm ERP.*** · IdCode **cấm** Guid · prefix **`KE`**.

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| Entry | Hub card **hoặc** `/csdl-bieu-10` | Title VN · back hub · **cấm** slug trên card |
| List A | Header | «Biểu 10 — Kè, tường chắn» · back hub |
| List B | Toolbar + filter | SearchTextInput · province · status · road SearchInput · kmFrom/kmTo · side · **wallKind** · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub · **search must work** · **cấm** nút Tìm riêng |
| List C | `LinCatalogDataGrid` | Cột typed (không chỉ 3 detail) · STT · row menu Xem/Sửa/Copy/Xóa/Lịch sử · kéo cột ON |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form | Kind **D** Slideout Z1–Z3 · 2col | C/E/V/Copy · View=`readOnly` · LeaveConfirmModal dirty · footer Lưu/Hủy · section tường + rãnh đỉnh |
| Map | none | deep-link gis only · **cấm** invent map canvas |

**Skip chrome:** GOVOne logo/bell/user · demo skin.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · đường · chủng · vật liệu · ghi chú |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | **GAP-CSDL-PROV-01** |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC | tot/tb/kem/hong |
| roadCode | Đường | `SearchInput` | **road-route** | **GAP-CSDL-ROAD-01** |
| kmFrom / kmTo | Lý trình từ–đến | `Number` | — | Line geom |
| side | Vị trí (T/P/C) | `Dropdown` | LOOKUP_STATIC | L/R/C/Both · ↔ WallSide |
| wallKind | Loại kè/tường | `Dropdown` | LOOKUP_STATIC | trọng lực / rọ / BTCT / tường chắn · **GAP-BIEU10-KIND-01** |

## Control hint — form fields (Slideout)

| # | Field key | Label | controlHint | required | Notes |
|---|-----------|-------|-------------|----------|-------|
| — | code | Mã | `Text` readonly | auto | IdCode prefix `KE` · **cấm** Guid |
| 1–2 | roadCode / roadName | Mã/Tên đường | `SearchInput` | * | catalogKind `road-route` |
| 3 | province | Địa danh | `Dropdown` | * | LOOKUP_STATIC P1 |
| 4–5 | kmFrom / kmTo | Lý trình từ–đến (Km) | `Number` | * | decimal · Line |
| 6 | side | Vị trí | `Dropdown` | * | L/R/C/Both |
| 7 | wallKind | Loại kè/tường | `Dropdown` | * | trọng lực / rọ đá / BTCT / tường chắn · **Q-KIND** |
| 8 | structure | Kết cấu | `Dropdown` | * | LOOKUP_STATIC Excel seed · **Q-STRUCT** |
| 9 | material | Vật liệu | `Dropdown` | * | LOOKUP_STATIC / Text→LOOKUP · **GAP-BIEU10-MAT-01** |
| 10 | lengthM | Chiều dài (m) | `Number` | * | decimal |
| 11 | heightM | Chiều cao (m) | `Number` | * | decimal · DB `WidthM` · **Q-HEIGHT** |
| 12 | areaM2 | Diện tích (m²) | `Number` | | decimal · có thể derived |
| 13 | crestDitchKind | Rãnh đỉnh — loại | `Dropdown` | | LOOKUP_STATIC · section crest |
| 14 | crestDitchStructure | Rãnh đỉnh — KC | `Dropdown` | | LOOKUP_STATIC |
| 15 | crestDitchShape | Rãnh đỉnh — hình | `Dropdown` | | LOOKUP_STATIC · **Q-CREST** |
| 16 | crestDitchLengthM | Rãnh đỉnh — dài (m) | `Number` | | decimal |
| 17 | inServiceYear | Năm sử dụng | `Number` | * | year · **GAP-BIEU10-YEAR-01** |
| 18 | status | Tình trạng | `Dropdown` | * | LOOKUP_STATIC |
| — | manageUnit | ĐV QL | `Text` → SearchInput | | **GAP-CSDL-ORG-01** · trail |
| — | notes | Ghi chú | `Textarea` | | trail |

### Form sections (2 khối)

| Section | Fields | Notes |
|---------|--------|-------|
| Tường chắn / kè | wallKind → areaM2 · inServiceYear | shared road/km/side trên đầu · **GAP-BIEU10-BLOCK-01** |
| Rãnh đỉnh | crestDitch* (4) | optional block · **cấm** 2 entity wide · optional CrestDitch child SA |

## Control hint — actions

| Action | Surface | Notes |
|--------|---------|-------|
| back-hub | List A | về `/so-ts/csdl-so-sach` |
| create / view / edit / copy / delete | Toolbar + row | soft-delete API |
| save / cancel | Form footer | LeaveConfirmModal dirty |
| import / export | Toolbar | stub · XLS Biểu 10 OUT pack · merge-header |
| history | Toolbar / row | stub modal OK P2 |
| schema-config | Toolbar | UiSchema typed `retaining-walls` |
| peer-sots | List / form link | deep-link `so-ts-retaining` · **cấm** merge |

## Open questions (PO trước Design)

| ID | Q | Options |
|----|---|---------|
| Q-ROUTE | Alias `/csdl-bieu-10` Navigate ngay hay DEFER hub-only? | alias_now · hub_only |
| Q-PROV | Province static vs master? | keep_static · master_province |
| Q-KIND | Enum wallKind seed (trọng lực/rọ/BTCT/tường chắn) EN code vs VN label? | code_en · label_vn |
| Q-STRUCT | `structure` enum set seed đâu? | excel_seed · lookup_static |
| Q-MAT | `material` LOOKUP cứng hay free+seed? | lookup · free_text |
| Q-HEIGHT | Map DB `WidthM` → UI `heightM` (cao) hay giữ width? | height_alias · keep_width |
| Q-CREST | Rãnh đỉnh bắt buộc hay optional · child table? | optional_flat · child_entity |
| Q-AREA | `areaM2` bắt buộc hay derived length×height? | required · derived · optional |
| Q-LIST-COLS | Grid mặc định: shared + kind/dim subset hay schema-config only? | subset · schema_only |
| Q-REN-LABEL | Đổi label hub card «Biểu 9» → «Biểu 10» cùng release typed? | with_typed · label_first |
| Q-PEER | Deep-link Sổ TS `so-ts-retaining` trên toolbar hay chỉ CTX note? | toolbar · ctx_only |

## Handoff

| Role | Dùng packet |
|------|-------------|
| **PO** | § Delta + open Q → `requirement.md` |
| **Design** | control-map khớp bảng · prototype list+slideout · 2 section · reviewUrl |
| **SA** | path `api/v1/asset/csdl-records` · typed DTO/UiSchema · Schema_CsdlBieu10 · renumber formNo · CrestDitch optional |
| **TL/Dev** | Wire controlHint · **cấm** đoán Text vs SearchInput |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHash | `sha256:56715ebbcfffd0589eab296a31137e79a82b49c672dc14582fc554f4ed262346` |
| headerFingerprint | `sha256:100df2f2285c57a909981f9248564af4f788a1ea653fd261122e9a64064773ad` |
| generatedAt | 2026-09-05T11:25:00.000Z |
| versionGate | ok |
| taskId | task_6b4b8a1b |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:56715ebbcfffd0589eab296a31137e79a82b49c672dc14582fc554f4ed262346 -->
