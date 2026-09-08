# Data-analy — controlHint — csdl-bieu-13 (Kind B list + Kind D Slideout · Biểu 13)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-13` |
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
| contentHash | `sha256:39a45de0a9b834c65373e6c20d1664ab43144ff60d97bae4f0d886ad09d91e3a` |
| headerFingerprint | `sha256:31dbc83200b511c9d61333b1cdb94e2880778980a3b21970be414e926db29008` |
| analyzedAt | `2026-09-05T13:50:00.000Z` |
| cluster | `csdl-cuc-2026` · Excel sheet Biểu 13 · **13 cột** · dài · cao · DT · **NEW card** |
| taskId | `task_3cec1103` |
| autoApprove | `ON` (queue) |
| realData | `specs/_data-analy/features/csdl-bieu-13-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records?resource=noise-barriers` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-13` · hub deep-link `/so-ts/csdl-so-sach?resource=noise-barriers` |
| resource | `noise-barriers` |
| formNo | `13` · title VN **Tường chống ồn** |
| peerSoTs | `so-ts-noise-barrier` (peer type `NOISE_BARRIER`) · **≠** merge form so-ts-* · **GAP-CSDL-CUC-11** |
| runMode | `new_page` · typed form 13 cột · dài/cao/DT · **cấm** chỉ 3 ô `detail*` |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** typed DTO + migration.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — demo = zone/field **tham chiếu** · **cấm** demo-json / localStorage SSOT.  
> **Cấm** chỉ 3 ô `detailPrimary`/`detailSpec`/`detailExtra` — form = đủ cột Excel (cite analy).  
> Analy: Từ–đến · vị trí · dài · cao · DT · **NEW card** hub.  
> DB SSOT doc hiện **1–12 only** — entity `NoiseBarrier` / Schema_CsdlBieu13 = **SA + migration** (**GAP-BIEU13-DB-01**).  
> Peer Sổ TS `so-ts-noise-barrier` = inventory `road-assets` — **ROW riêng** CSDL Cục · **cấm** reuse dumpSpecs / merge form.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/csdl-bieu-13.md` | `39a45de0a9b834c65373e6c20d1664ab43144ff60d97bae4f0d886ad09d91e3a` |
| Parent hub | `docs/context/features/csdl-so-sach.md` | cite hub Kind G · **thiếu** card `noise-barriers` |
| Cluster analy | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | Biểu 13 · 13 cột · § Biểu 13 · **MISSING hub** · **GAP-CSDL-CUC-05** |
| DB API SSOT | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` | chỉ Biểu **1–12** · **GAP-BIEU13-DB-01** · live path = `asset/csdl-records` (doc §2.1 `infra` = legacy · **cấm** invent) |
| Peer CTX | `docs/context/features/so-ts-noise-barrier.md` | peer type `NOISE_BARRIER` · **cấm** merge |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` | `c2c9f8194cb104b3202bcaa46a589c9baba5cf8062aa12e7d0872a9e96eba7ae` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/csdl-so-sach.html` | hub+list+slideout chrome · **chưa** card Biểu 13 |
| Demo data | `Linm.RMMS.Demo/src/demo/asset/js/csdl-so-sach-data.js` | `csdlResources` **12** biểu · **thiếu** `noise-barriers` · **GAP-BIEU13-HUB-01** |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | `csdl-so-sach` → Asset · **GAP-BIEU13-DMAP-01** thiếu slug `csdl-bieu-13` |
| Live API | `CsdlCatalogRecordsController` | `api/v1/asset/csdl-records` (polymorphic shell) · resource **chưa** đăng ký |
| Live MFE | `CsdlSoSachPage` · `CsdlFormSlideout` | generic 3-field — **GAP-BIEU13-TYPED-01** |
| Excel | `data-import/Sổ sách, biểu mẫu trình LĐ Cục/1. Biểu mẫu CSDL.xls` sheet Biểu 13 | real source · import OUT Dev/XLS task |
| Peer Sổ TS | `so-ts-noise-barrier` · `api/v1/asset/road-assets?type=NOISE_BARRIER` | peer only · **cấm** merge |

Normalized header (13 — Excel flatten + shared trail):

`code|roadCode|roadName|province|kmFrom|kmTo|side|lengthM|heightM|areaM2|status|manageUnit|notes`

Form trail (đã trong 13): `manageUnit` · `notes`. **Không** thêm cột ngoài 13.  
DB đề xuất: `LengthM` · `HeightM` · `AreaM2` (+ optional `BarrierType` nếu Excel có — **Q-BARRIER-TYPE** · **cấm** nhét ngoài 13 không confirm).

## § Delta Current vs New (`new_page` · `task_3cec1103`)

| ID | Current | New (this analy) | Surface |
|----|---------|------------------|---------|
| GAP-BIEU13-HUB-01 | Hub demo/live **12** biểu · **MISSING** card Biểu 13 | NEW card «Tường chống ồn» · `?resource=noise-barriers` · formNo **13** | hub Kind G |
| GAP-BIEU13-TYPED-01 | Không resource / form generic nếu bootstrap | Typed **13 cột** · Slideout 2col · dài/cao/DT | form + list cols |
| GAP-BIEU13-ROUTE-01 | Chưa alias | Alias mfeStd `/csdl-bieu-13` · giữ hub entry | shell / Design |
| GAP-BIEU13-DIM-01 | — | `lengthM` · `heightM` · `areaM2` Number · **cấm** nhét 3 ô detail* | filter + form + list |
| GAP-BIEU13-SIDE-01 | — | `side` LOOKUP L/R/C/Both · vị trí | filter + form |
| GAP-BIEU13-DB-01 | DB SSOT doc chỉ Biểu 1–12 | Schema_CsdlBieu13 / `NoiseBarrier` + resource registry | SA / migration |
| GAP-BIEU13-DMAP-01 | DOMAIN-MAP thiếu `csdl-bieu-13` | Thêm slug → Asset (cùng `csdl-so-sach`) | SA / Dev |
| GAP-CSDL-CUC-05 | Biểu 13–16 chưa có resource | Đóng gap Biểu 13 khi hub+API PASS | hub + API |
| GAP-CSDL-ROAD-01 | — | `SearchInput` `road-route` + `roadCode` | filter + form |
| GAP-CSDL-PROV-01 | LOOKUP_STATIC 5 tỉnh (hub peers) | giữ P1 **hoặc** master province — PO chốt | filter + form |
| GAP-CSDL-ORG-01 | `manageUnit` Text | SearchInput tree `org-unit` · DEFER P2 OK | form |
| GAP-CSDL-CUC-03 | Form generic không đủ cột | Đóng gap Biểu 13 khi typed PASS | form |
| GAP-CSDL-XLS-01 | Import/export stub | Sheet Biểu 13 đúng 13 cột / merge — OUT pack Dev/XLS | toolbar |
| GAP-CSDL-CUC-11 | Peer `so-ts-noise-barrier` tồn tại | **≠** Sổ TS · LOOKUP `road-route` chung · ROW riêng · **cấm** merge dumpSpecs / form so-ts | nav |

**Không** đổi: API prefix `api/v1/asset/csdl-records` · resource key `noise-barriers` (CTX) · Kind B list A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · **cấm ERP.*** · IdCode **cấm** Guid · prefix đề xuất **`TC`** (khớp GIS peer · **Q-PREFIX**).

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| Entry | Hub card **mới** **hoặc** `/csdl-bieu-13` | Title VN · back hub · **cấm** slug trên card |
| List A | Header | «Biểu 13 — Tường chống ồn» · back hub |
| List B | Toolbar + filter | SearchTextInput · province · status · road SearchInput · kmFrom/kmTo · side · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub · **search must work** · **cấm** nút Tìm riêng |
| List C | `LinCatalogDataGrid` | Cột typed (không chỉ 3 detail) · STT · row menu Xem/Sửa/Copy/Xóa/Lịch sử · kéo cột ON |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form | Kind **D** Slideout Z1–Z3 · 2col | C/E/V/Copy · View=`readOnly` · LeaveConfirmModal dirty · footer Lưu/Hủy · section kích thước dài/cao/DT |
| Map | none | deep-link gis only · **cấm** invent map canvas |

**Skip chrome:** GOVOne logo/bell/user · demo skin.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · đường · ghi chú |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | **GAP-CSDL-PROV-01** |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC | tot/tb/kem/hong |
| roadCode | Đường | `SearchInput` | **road-route** | **GAP-CSDL-ROAD-01** |
| kmFrom / kmTo | Lý trình từ–đến | `Number` | — | Line geom |
| side | Vị trí (T/P/C) | `Dropdown` | LOOKUP_STATIC | L/R/C/Both |

## Control hint — form fields (Slideout)

| # | Field key | Label | controlHint | required | Notes |
|---|-----------|-------|-------------|----------|-------|
| — | code | Mã | `Text` readonly | auto | IdCode prefix `TC` · **cấm** Guid · **Q-PREFIX** |
| 1–2 | roadCode / roadName | Mã/Tên đường | `SearchInput` | * | catalogKind `road-route` |
| 3 | province | Địa danh | `Dropdown` | * | LOOKUP_STATIC P1 |
| 4–5 | kmFrom / kmTo | Lý trình từ–đến (Km) | `Number` | * | decimal · Line |
| 6 | side | Vị trí | `Dropdown` | * | L/R/C/Both |
| 7 | lengthM | Chiều dài (m) | `Number` | * | decimal ≥0 · **GAP-BIEU13-DIM-01** |
| 8 | heightM | Chiều cao (m) | `Number` | | decimal ≥0 |
| 9 | areaM2 | Diện tích (m²) | `Number` | | decimal ≥0 · DT |
| 10 | status | Tình trạng | `Dropdown` | * | LOOKUP_STATIC |
| — | manageUnit | ĐV QL | `Text` → SearchInput | | **GAP-CSDL-ORG-01** · trail |
| — | notes | Ghi chú | `Textarea` | | trail |

### Form sections

| Section | Fields | Notes |
|---------|--------|-------|
| Vị trí tuyến | roadCode · roadName · province · kmFrom · kmTo · side | shared đầu form |
| Kích thước tường | lengthM · heightM · areaM2 | **cấm** gộp 1 text detail* · **Q-AREA-DERIVE** |

## Control hint — actions

| Action | Surface | Notes |
|--------|---------|-------|
| back-hub | List A | về `/so-ts/csdl-so-sach` |
| create / view / edit / copy / delete | Toolbar + row | soft-delete API |
| save / cancel | Form footer | LeaveConfirmModal dirty |
| import / export | Toolbar | stub · XLS Biểu 13 OUT pack · merge-header |
| history | Toolbar / row | stub modal OK P2 |
| schema-config | Toolbar | UiSchema typed `noise-barriers` |

## Open questions (PO trước Design)

| ID | Q | Options |
|----|---|---------|
| Q-ROUTE | Alias `/csdl-bieu-13` Navigate ngay hay DEFER hub-only? | alias_now · hub_only |
| Q-PROV | Province static vs master? | keep_static · master_province |
| Q-BARRIER-TYPE | Excel có cột «loại tường» (peer `type_noise_barrier_id`) ngoài 13? | no_type_keep_13 · add_type_recount |
| Q-AREA-DERIVE | `areaM2` nhập tay hay derive `lengthM×heightM`? | manual · derive_readonly · either |
| Q-PREFIX | IdCode prefix `TC` (GIS peer) vs prefix Cục riêng? | TC · other |
| Q-LIST-COLS | Grid mặc định: shared + dài/cao/DT hay schema-config only? | subset · schema_only |
| Q-TITLE | Title hub «Tường chống ồn» vs peer «Rào chắn ồn»? | ctx_tuong · peer_rao |
| Q-DMAP | Thêm `csdl-bieu-13` vào DOMAIN-MAP khi Dev? | add_now · hub_only_map |
| Q-PEER-LINK | Deep-link sang Sổ TS `?type=NOISE_BARRIER` từ row? | none_p1 · optional_link |

## Handoff

| Role | Dùng packet |
|------|-------------|
| **PO** | § Delta + open Q → `requirement.md` |
| **Design** | control-map khớp bảng · prototype list+slideout · section kích thước · reviewUrl |
| **SA** | path `api/v1/asset/csdl-records` · typed DTO/UiSchema · Schema_CsdlBieu13 · register `noise-barriers` · **cấm** `infra` · DOMAIN-MAP slug · **cấm** merge road-assets |
| **TL/Dev** | Wire controlHint · hub card mới · **cấm** đoán Text vs SearchInput · **cấm** 3 ô detail* · **cấm** merge so-ts-noise-barrier |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHash | `sha256:39a45de0a9b834c65373e6c20d1664ab43144ff60d97bae4f0d886ad09d91e3a` |
| headerFingerprint | `sha256:31dbc83200b511c9d61333b1cdb94e2880778980a3b21970be414e926db29008` |
| generatedAt | 2026-09-05T13:50:00.000Z |
| versionGate | ok |
| taskId | task_3cec1103 |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:39a45de0a9b834c65373e6c20d1664ab43144ff60d97bae4f0d886ad09d91e3a -->
