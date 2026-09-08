# Data-analy — controlHint — csdl-bieu-15 (Kind B list + Kind D Slideout · Biểu 15)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-15` |
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
| contentHash | `sha256:3bf356f00182dd6c0864bf5b88ae4d460ef8da73e5521f1b14756b7168dc20a7` |
| headerFingerprint | `sha256:0064a4903777f7ea8d51c7423d8451a20daf77a5934929001905edaa380f4fe4` |
| analyzedAt | `2026-09-05T15:17:00.000Z` |
| cluster | `csdl-cuc-2026` · Excel sheet Biểu 15 · **20 cột** · TMC/thu phí/hạt/kho · **NEW card** |
| taskId | `task_23453ac3` |
| autoApprove | `ON` (queue) |
| realData | `specs/_data-analy/features/csdl-bieu-15-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records?resource=ops-facilities` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-15` · hub deep-link `/so-ts/csdl-so-sach?resource=ops-facilities` |
| resource | `ops-facilities` |
| formNo | `15` · title VN **TMC / thu phí / hạt / kho** |
| peerSoTs | `so-ts-toll` · `so-ts-rest-area` · `so-ts-station-house` (+ cite `so-ts-parking` nếu kho/đỗ) · **≠** merge form so-ts-* · **GAP-CSDL-CUC-11** |
| runMode | `new_page` · typed form **20 cột** · **cấm** chỉ 3 ô `detail*` |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** typed DTO + migration.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — demo = zone/field **tham chiếu** · **cấm** demo-json / localStorage SSOT.  
> **Cấm** chỉ 3 ô `detailPrimary`/`detailSpec`/`detailExtra` — form = đủ cột Excel (cite analy).  
> Analy: `facilityKind` 5 loại (TMC · trạm thu phí · dừng chân · nhà hạt · kho) · DT khuôn viên · nhà (SL+DT) · KT khác (SL+DT) · TT · năm · thiết bị (chủng SL TT).  
> DB SSOT doc hiện **1–12 only** — entity `OpsFacility` / Schema_CsdlBieu15 = **SA + migration** (**GAP-BIEU15-DB-01**).  
> Peer Sổ TS = inventory `road-assets?type=…` — **ROW riêng** CSDL Cục · **cấm** reuse dumpSpecs / merge form.  
> **≠** deep-link Sổ TS làm SSOT biểu.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/csdl-bieu-15.md` | `3bf356f00182dd6c0864bf5b88ae4d460ef8da73e5521f1b14756b7168dc20a7` |
| Parent hub | `docs/context/features/csdl-so-sach.md` | cite hub Kind G · **thiếu** card `ops-facilities` |
| Cluster analy | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | Biểu 15 · **20 cột** · § Biểu 15 · **MISSING hub** · **GAP-CSDL-CUC-05** |
| DB API SSOT | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` | chỉ Biểu **1–12** · **GAP-BIEU15-DB-01** · live path = `asset/csdl-records` (doc §2.1 `infra` = legacy · **cấm** invent) |
| Peer CTX | `so-ts-toll` · `so-ts-rest-area` · `so-ts-station-house` | peer types · **cấm** merge |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` | `c2c9f8194cb104b3202bcaa46a589c9baba5cf8062aa12e7d0872a9e96eba7ae` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/csdl-so-sach.html` | hub+list+slideout chrome · **chưa** card Biểu 15 |
| Demo data | `Linm.RMMS.Demo/src/demo/asset/js/csdl-so-sach-data.js` | `csdlResources` **12** biểu · **thiếu** `ops-facilities` · **GAP-BIEU15-HUB-01** |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | `csdl-so-sach` → Asset · slug tới `csdl-bieu-14` · **GAP-BIEU15-DMAP-01** thiếu `csdl-bieu-15` |
| Live API | `CsdlCatalogRecordsController` | `api/v1/asset/csdl-records` (polymorphic shell) · resource **chưa** đăng ký |
| Live MFE | `CsdlSoSachPage` · `CsdlFormSlideout` | generic 3-field — **GAP-BIEU15-TYPED-01** |
| Excel | `data-import/Sổ sách, biểu mẫu trình LĐ Cục/1. Biểu mẫu CSDL.xls` sheet Biểu 15 | real source · import OUT Dev/XLS task |
| Peer Sổ TS | toll / rest-area / station-house · `api/v1/asset/road-assets?type=…` | peer only · **cấm** merge |

Normalized header (20 — Excel flatten + shared trail):

`code|roadCode|roadName|province|kmFrom|kmTo|facilityKind|facilityName|courtyardAreaM2|buildingQty|buildingAreaM2|otherStructQty|otherStructAreaM2|status|yearBuilt|equipmentKind|equipmentQty|equipmentStatus|manageUnit|notes`

Form trail (đã trong 20 nếu Excel có · hoặc P2): `manageUnit` — **Q-MANAGE** · **Không** thêm cột ngoài 20 không confirm.  
DB đề xuất: `FacilityKind` · `FacilityName` · `CourtyardAreaM2` · `BuildingQty`/`BuildingAreaM2` · `OtherStructQty`/`OtherStructAreaM2` · `Status` · `YearBuilt` · `EquipmentKind`/`EquipmentQty`/`EquipmentStatus` — **SA** confirm Excel.

## § Delta Current vs New (`new_page` · `task_23453ac3`)

| ID | Current | New (this analy) | Surface |
|----|---------|------------------|---------|
| GAP-BIEU15-HUB-01 | Hub demo/live **12** biểu · **MISSING** card Biểu 15 | NEW card «TMC / thu phí / hạt / kho» · `?resource=ops-facilities` · formNo **15** | hub Kind G |
| GAP-BIEU15-TYPED-01 | Không resource / form generic nếu bootstrap | Typed **20 cột** · Slideout 2col · facility + building + equipment | form + list cols |
| GAP-BIEU15-ROUTE-01 | Chưa alias | Alias mfeStd `/csdl-bieu-15` · giữ hub entry | shell / Design |
| GAP-BIEU15-KIND-01 | — | `facilityKind` LOOKUP 5: TMC / trạm thu phí / dừng chân / nhà hạt / kho | filter + form + list |
| GAP-BIEU15-AREA-01 | — | `courtyardAreaM2` · `buildingQty`/`buildingAreaM2` · `otherStructQty`/`otherStructAreaM2` | form + list |
| GAP-BIEU15-EQ-01 | — | `equipmentKind` · `equipmentQty` · `equipmentStatus` | form + list |
| GAP-BIEU15-STATUS-01 | — | `status` TT công trình · `yearBuilt` | filter + form |
| GAP-BIEU15-DB-01 | DB SSOT doc chỉ Biểu 1–12 | Schema_CsdlBieu15 / `OpsFacility` + resource registry | SA / migration |
| GAP-BIEU15-DMAP-01 | DOMAIN-MAP thiếu `csdl-bieu-15` | Thêm slug → Asset (cùng `csdl-so-sach`) | SA / Dev |
| GAP-CSDL-CUC-05 | Biểu 13–16 chưa có resource | Đóng gap Biểu 15 khi hub+API PASS | hub + API |
| GAP-CSDL-ROAD-01 | — | `SearchInput` `road-route` + `roadCode` | filter + form |
| GAP-CSDL-PROV-01 | LOOKUP_STATIC 5 tỉnh (hub peers) | giữ P1 **hoặc** master province — PO chốt | filter + form |
| GAP-CSDL-ORG-01 | `manageUnit` Text | SearchInput tree `org-unit` · DEFER P2 OK | form |
| GAP-CSDL-CUC-03 | Form generic không đủ cột | Đóng gap Biểu 15 khi typed PASS | form |
| GAP-CSDL-XLS-01 | Import/export stub | Sheet Biểu 15 đúng 20 cột / merge — OUT pack Dev/XLS | toolbar |
| GAP-CSDL-CUC-11 | Peer so-ts-toll / rest-area / station-house tồn tại | **≠** Sổ TS · LOOKUP `road-route` chung · ROW riêng · **cấm** merge dumpSpecs / form so-ts | nav |

**Không** đổi: API prefix `api/v1/asset/csdl-records` · resource key `ops-facilities` (CTX) · Kind B list A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · **cấm ERP.*** · IdCode **cấm** Guid · prefix đề xuất **`OF`** (**Q-PREFIX**).

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| Entry | Hub card **mới** **hoặc** `/csdl-bieu-15` | Title VN · back hub · **cấm** slug trên card |
| List A | Header | «Biểu 15 — TMC / thu phí / hạt / kho» · back hub |
| List B | Toolbar + filter | SearchTextInput · province · status · facilityKind · road SearchInput · kmFrom/kmTo · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub · **search must work** · **cấm** nút Tìm riêng |
| List C | `LinCatalogDataGrid` | Cột typed (không chỉ 3 detail) · STT · row menu Xem/Sửa/Copy/Xóa/Lịch sử · kéo cột ON |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form | Kind **D** Slideout Z1–Z3 · 2col | C/E/V/Copy · View=`readOnly` · LeaveConfirmModal dirty · footer Lưu/Hủy · section vị trí + công trình + thiết bị |
| Map | none | deep-link gis only · **cấm** invent map canvas |

**Skip chrome:** GOVOne logo/bell/user · demo skin.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên CS · đường · ghi chú |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | **GAP-CSDL-PROV-01** |
| facilityKind | Loại CS | `Dropdown` | LOOKUP_STATIC | 5 loại · **GAP-BIEU15-KIND-01** |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC | **GAP-BIEU15-STATUS-01** |
| roadCode | Đường | `SearchInput` | **road-route** | **GAP-CSDL-ROAD-01** |
| kmFrom / kmTo | Lý trình từ–đến | `Number` | — | Line geom |

## Control hint — form fields (Slideout)

| # | Field key | Label | controlHint | required | Notes |
|---|-----------|-------|-------------|----------|-------|
| — | code | Mã | `Text` readonly | auto | IdCode prefix `OF` · **cấm** Guid · **Q-PREFIX** |
| 1–2 | roadCode / roadName | Mã/Tên đường | `SearchInput` | * | catalogKind `road-route` |
| 3 | province | Địa danh | `Dropdown` | * | LOOKUP_STATIC P1 |
| 4–5 | kmFrom / kmTo | Lý trình từ–đến (Km) | `Number` | * | decimal · Line |
| 6 | facilityKind | Loại cơ sở | `Dropdown` | * | TMC / trạm thu phí / dừng chân / nhà hạt / kho · **GAP-BIEU15-KIND-01** |
| 7 | facilityName | Tên cơ sở | `Text` | * | |
| 8 | courtyardAreaM2 | DT khuôn viên (m²) | `Number` | | ≥0 · **GAP-BIEU15-AREA-01** |
| 9 | buildingQty | Nhà — số lượng | `Number` | | integer ≥0 |
| 10 | buildingAreaM2 | Nhà — diện tích (m²) | `Number` | | ≥0 |
| 11 | otherStructQty | KT khác — SL | `Number` | | integer ≥0 |
| 12 | otherStructAreaM2 | KT khác — DT (m²) | `Number` | | ≥0 |
| 13 | status | Tình trạng (TT) | `Dropdown` | * | LOOKUP_STATIC |
| 14 | yearBuilt | Năm | `Number` | | year · 1900–2100 |
| 15 | equipmentKind | Thiết bị — chủng | `Text` / Dropdown | | **GAP-BIEU15-EQ-01** · **Q-EQ-SET** |
| 16 | equipmentQty | Thiết bị — SL | `Number` | | integer ≥0 |
| 17 | equipmentStatus | Thiết bị — TT | `Dropdown` | | LOOKUP_STATIC |
| 18 | manageUnit | ĐV QL | `Text` → SearchInput | | **GAP-CSDL-ORG-01** · **Q-MANAGE** |
| 19 | notes | Ghi chú | `Textarea` | | trail trong 20 |
| — | (shared count) | — | — | — | 20 keys trong headerFingerprint |

### Form sections

| Section | Fields | Notes |
|---------|--------|-------|
| Vị trí tuyến | roadCode · roadName · province · kmFrom · kmTo | shared đầu form |
| Cơ sở / công trình | facilityKind · facilityName · courtyardAreaM2 · buildingQty · buildingAreaM2 · otherStructQty · otherStructAreaM2 · status · yearBuilt | **cấm** gộp 1 text detail* |
| Thiết bị | equipmentKind · equipmentQty · equipmentStatus | section riêng |
| Quản lý | manageUnit · notes · code | trail |

## Control hint — actions

| Action | Surface | Notes |
|--------|---------|-------|
| back-hub | List A | về `/so-ts/csdl-so-sach` |
| create / view / edit / copy / delete | Toolbar + row | soft-delete API |
| save / cancel | Form footer | LeaveConfirmModal dirty |
| import / export | Toolbar | stub · XLS Biểu 15 OUT pack · merge-header |
| history | Toolbar / row | stub modal OK P2 |
| schema-config | Toolbar | UiSchema typed `ops-facilities` |

## Open questions (PO trước Design)

| ID | Q | Options |
|----|---|---------|
| Q-ROUTE | Alias `/csdl-bieu-15` Navigate ngay hay DEFER hub-only? | alias_now · hub_only |
| Q-PROV | Province static vs master? | keep_static · master_province |
| Q-KIND-SET | Bộ 5 `facilityKind` đủ Excel (TMC/thu phí/dừng chân/nhà hạt/kho)? | keep_5 · expand_excel |
| Q-EQ-SET | `equipmentKind` free Text hay LOOKUP cố định từ Excel? | free_text · lookup |
| Q-AREA-UNIT | DT luôn m² Number hay Text kèm đơn vị? | number_m2 · text_unit |
| Q-MANAGE | `manageUnit` nằm trong 20 cột Excel hay trail P2? | in_20 · trail_p2 |
| Q-PREFIX | IdCode prefix `OF` vs `CS` vs Cục riêng? | OF · CS · other |
| Q-LIST-COLS | Grid mặc định: shared + facilityKind/name/status hay schema-config only? | subset · schema_only |
| Q-TITLE | Title hub «TMC / thu phí / hạt / kho» vs «Công trình phục vụ vận hành»? | ctx_tmc · ops_title |
| Q-DMAP | Thêm `csdl-bieu-15` vào DOMAIN-MAP khi Dev? | add_now · hub_only_map |
| Q-PEER-LINK | Deep-link Sổ TS theo facilityKind (toll/rest/station)? | none_p1 · optional_link |
| Q-KM | Biểu dùng kmFrom–kmTo Line hay điểm Km đơn? | range · point |

## Handoff

| Role | Dùng packet |
|------|-------------|
| **PO** | § Delta + open Q → `requirement.md` |
| **Design** | control-map khớp bảng · prototype list+slideout · section công trình + thiết bị · reviewUrl |
| **SA** | path `api/v1/asset/csdl-records` · typed DTO/UiSchema · Schema_CsdlBieu15 · register `ops-facilities` · **cấm** `infra` · DOMAIN-MAP slug · **cấm** merge road-assets / so-ts-* |
| **TL/Dev** | Wire controlHint · hub card mới · **cấm** đoán Text vs SearchInput · **cấm** 3 ô detail* · **cấm** merge so-ts-* |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHash | `sha256:3bf356f00182dd6c0864bf5b88ae4d460ef8da73e5521f1b14756b7168dc20a7` |
| headerFingerprint | `sha256:0064a4903777f7ea8d51c7423d8451a20daf77a5934929001905edaa380f4fe4` |
| generatedAt | 2026-09-05T15:17:00.000Z |
| versionGate | ok |
| taskId | task_23453ac3 |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:3bf356f00182dd6c0864bf5b88ae4d460ef8da73e5521f1b14756b7168dc20a7 -->
