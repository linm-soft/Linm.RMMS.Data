# Data-analy — controlHint — csdl-bieu-14 (Kind B list + Kind D Slideout · Biểu 14)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-14` |
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
| contentHash | `sha256:6cfdefa3baaffcf2bd97c7a429bb5043e7f9d77b96bbb77eafaa34689007b112` |
| headerFingerprint | `sha256:14cd156a898dcc971a072dd1cd1b92460a8b597558a90dc9854fead9d4c4de5c` |
| analyzedAt | `2026-09-05T14:30:00.000Z` |
| cluster | `csdl-cuc-2026` · Excel sheet Biểu 14 · **21 cột** · ITS/GTTM · **NEW card** |
| taskId | `task_db0e2ea1` |
| autoApprove | `ON` (queue) |
| realData | `specs/_data-analy/features/csdl-bieu-14-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records?resource=its-systems` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-14` · hub deep-link `/so-ts/csdl-so-sach?resource=its-systems` |
| resource | `its-systems` |
| formNo | `14` · title VN **Hệ thống ITS (GTTM)** |
| peerSoTs | `so-ts-its-camera` (peer type `ITS_CAMERA`) · **≠** merge form so-ts-* · **GAP-CSDL-CUC-11** |
| runMode | `new_page` · typed form **21 cột** · **cấm** chỉ 3 ô `detail*` |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** typed DTO + migration.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — demo = zone/field **tham chiếu** · **cấm** demo-json / localStorage SSOT.  
> **Cấm** chỉ 3 ô `detailPrimary`/`detailSpec`/`detailExtra` — form = đủ cột Excel (cite analy).  
> Analy: Từ–đến · GPS · vị trí · hướng tuyến · loại TB (cáp/CCTV/ANPR/VMS/tủ) · hãng · TS · SL/dài · TT hoạt động · hạ tầng (cần vươn/long môn/đế BT) · KC · SL · TT HT · năm.  
> DB SSOT doc hiện **1–12 only** — entity `ItsSystem` / Schema_CsdlBieu14 = **SA + migration** (**GAP-BIEU14-DB-01**).  
> Peer Sổ TS `so-ts-its-camera` = inventory `road-assets?type=ITS_CAMERA` — **ROW riêng** CSDL Cục · **cấm** reuse dumpSpecs / merge form.  
> **≠** ITS MFE `its-traffic-detect` / `its-anpr-overload` / Camera — cite only.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/csdl-bieu-14.md` | `6cfdefa3baaffcf2bd97c7a429bb5043e7f9d77b96bbb77eafaa34689007b112` |
| Parent hub | `docs/context/features/csdl-so-sach.md` | cite hub Kind G · **thiếu** card `its-systems` |
| Cluster analy | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | Biểu 14 · **21 cột** · § Biểu 14 · **MISSING hub** · **GAP-CSDL-CUC-05** |
| DB API SSOT | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` | chỉ Biểu **1–12** · **GAP-BIEU14-DB-01** · live path = `asset/csdl-records` (doc §2.1 `infra` = legacy · **cấm** invent) |
| Peer CTX | `docs/context/features/so-ts-its-camera.md` | peer type `ITS_CAMERA` · **cấm** merge |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` | `c2c9f8194cb104b3202bcaa46a589c9baba5cf8062aa12e7d0872a9e96eba7ae` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/csdl-so-sach.html` | hub+list+slideout chrome · **chưa** card Biểu 14 |
| Demo data | `Linm.RMMS.Demo/src/demo/asset/js/csdl-so-sach-data.js` | `csdlResources` **12** biểu · **thiếu** `its-systems` · **GAP-BIEU14-HUB-01** |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | `csdl-so-sach` → Asset · slug tới `csdl-bieu-13` · **GAP-BIEU14-DMAP-01** thiếu `csdl-bieu-14` |
| Live API | `CsdlCatalogRecordsController` | `api/v1/asset/csdl-records` (polymorphic shell) · resource **chưa** đăng ký |
| Live MFE | `CsdlSoSachPage` · `CsdlFormSlideout` | generic 3-field — **GAP-BIEU14-TYPED-01** |
| Excel | `data-import/Sổ sách, biểu mẫu trình LĐ Cục/1. Biểu mẫu CSDL.xls` sheet Biểu 14 | real source · import OUT Dev/XLS task |
| Peer Sổ TS | `so-ts-its-camera` · `api/v1/asset/road-assets?type=ITS_CAMERA` | peer only · **cấm** merge |

Normalized header (21 — Excel flatten + shared trail):

`code|roadCode|roadName|province|kmFrom|kmTo|side|direction|gpsLat|gpsLng|deviceType|brand|techSpec|qtyOrLength|operatingStatus|infraKind|clearanceM|infraQty|systemStatus|yearBuilt|notes`

Form trail (đã trong 21 nếu Excel có · hoặc P2): `manageUnit` — **Q-MANAGE** · **Không** thêm cột ngoài 21 không confirm.  
DB đề xuất: `DeviceType` · `Brand` · `TechSpec` · `QtyOrLength` · `OperatingStatus` · `InfraKind` · `ClearanceM` · `InfraQty` · `SystemStatus` · `YearBuilt` · GPS `GpsLat`/`GpsLng` (+ `Direction` · `Side`) — **SA** confirm Excel.

## § Delta Current vs New (`new_page` · `task_db0e2ea1`)

| ID | Current | New (this analy) | Surface |
|----|---------|------------------|---------|
| GAP-BIEU14-HUB-01 | Hub demo/live **12** biểu · **MISSING** card Biểu 14 | NEW card «Hệ thống ITS (GTTM)» · `?resource=its-systems` · formNo **14** | hub Kind G |
| GAP-BIEU14-TYPED-01 | Không resource / form generic nếu bootstrap | Typed **21 cột** · Slideout 2col · ITS device + infra | form + list cols |
| GAP-BIEU14-ROUTE-01 | Chưa alias | Alias mfeStd `/csdl-bieu-14` · giữ hub entry | shell / Design |
| GAP-BIEU14-DEV-01 | — | `deviceType` LOOKUP (cáp/CCTV/ANPR/VMS/tủ) · brand · techSpec · qtyOrLength · operatingStatus | filter + form + list |
| GAP-BIEU14-INFRA-01 | — | `infraKind` (cần vươn/long môn/đế BT) · clearanceM · infraQty · systemStatus · yearBuilt | form + list |
| GAP-BIEU14-GPS-01 | — | `gpsLat` · `gpsLng` Number · Point · **cấm** nhét 3 ô detail* | form + list optional |
| GAP-BIEU14-DIR-01 | — | `direction` hướng tuyến · `side` vị trí LOOKUP | filter + form |
| GAP-BIEU14-DB-01 | DB SSOT doc chỉ Biểu 1–12 | Schema_CsdlBieu14 / `ItsSystem` + resource registry | SA / migration |
| GAP-BIEU14-DMAP-01 | DOMAIN-MAP thiếu `csdl-bieu-14` | Thêm slug → Asset (cùng `csdl-so-sach`) | SA / Dev |
| GAP-CSDL-CUC-05 | Biểu 13–16 chưa có resource | Đóng gap Biểu 14 khi hub+API PASS | hub + API |
| GAP-CSDL-ROAD-01 | — | `SearchInput` `road-route` + `roadCode` | filter + form |
| GAP-CSDL-PROV-01 | LOOKUP_STATIC 5 tỉnh (hub peers) | giữ P1 **hoặc** master province — PO chốt | filter + form |
| GAP-CSDL-ORG-01 | `manageUnit` Text | SearchInput tree `org-unit` · DEFER P2 OK | form |
| GAP-CSDL-CUC-03 | Form generic không đủ cột | Đóng gap Biểu 14 khi typed PASS | form |
| GAP-CSDL-XLS-01 | Import/export stub | Sheet Biểu 14 đúng 21 cột / merge — OUT pack Dev/XLS | toolbar |
| GAP-CSDL-CUC-11 | Peer `so-ts-its-camera` tồn tại | **≠** Sổ TS · LOOKUP `road-route` chung · ROW riêng · **cấm** merge dumpSpecs / form so-ts | nav |
| GAP-BIEU14-PEER-ITS-01 | ITS AiVision/Camera MFEs | **cấm** bind `its-traffic-detect` / `its-anpr-overload` / camera-connect làm SSOT biểu | cite only |

**Không** đổi: API prefix `api/v1/asset/csdl-records` · resource key `its-systems` (CTX) · Kind B list A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · **cấm ERP.*** · IdCode **cấm** Guid · prefix đề xuất **`IT`** (**Q-PREFIX**).

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| Entry | Hub card **mới** **hoặc** `/csdl-bieu-14` | Title VN · back hub · **cấm** slug trên card |
| List A | Header | «Biểu 14 — Hệ thống ITS (GTTM)» · back hub |
| List B | Toolbar + filter | SearchTextInput · province · status/operatingStatus · road SearchInput · kmFrom/kmTo · deviceType · side · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub · **search must work** · **cấm** nút Tìm riêng |
| List C | `LinCatalogDataGrid` | Cột typed (không chỉ 3 detail) · STT · row menu Xem/Sửa/Copy/Xóa/Lịch sử · kéo cột ON |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form | Kind **D** Slideout Z1–Z3 · 2col | C/E/V/Copy · View=`readOnly` · LeaveConfirmModal dirty · footer Lưu/Hủy · section thiết bị + hạ tầng |
| Map | none | deep-link gis only · **cấm** invent map canvas |

**Skip chrome:** GOVOne logo/bell/user · demo skin.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · đường · hãng · ghi chú |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | **GAP-CSDL-PROV-01** |
| operatingStatus | TT hoạt động | `Dropdown` | LOOKUP_STATIC | **GAP-BIEU14-DEV-01** |
| deviceType | Loại TB | `Dropdown` | LOOKUP_STATIC | cáp/CCTV/ANPR/VMS/tủ |
| roadCode | Đường | `SearchInput` | **road-route** | **GAP-CSDL-ROAD-01** |
| kmFrom / kmTo | Lý trình từ–đến | `Number` | — | Line geom |
| side | Vị trí (T/P/C) | `Dropdown` | LOOKUP_STATIC | L/R/C/Both |

## Control hint — form fields (Slideout)

| # | Field key | Label | controlHint | required | Notes |
|---|-----------|-------|-------------|----------|-------|
| — | code | Mã | `Text` readonly | auto | IdCode prefix `IT` · **cấm** Guid · **Q-PREFIX** |
| 1–2 | roadCode / roadName | Mã/Tên đường | `SearchInput` | * | catalogKind `road-route` |
| 3 | province | Địa danh | `Dropdown` | * | LOOKUP_STATIC P1 |
| 4–5 | kmFrom / kmTo | Lý trình từ–đến (Km) | `Number` | * | decimal · Line |
| 6 | side | Vị trí | `Dropdown` | * | L/R/C/Both |
| 7 | direction | Hướng tuyến | `Dropdown` / Text | | **GAP-BIEU14-DIR-01** · **Q-DIR** |
| 8–9 | gpsLat / gpsLng | GPS | `Number` | | decimal · Point · **GAP-BIEU14-GPS-01** |
| 10 | deviceType | Loại thiết bị | `Dropdown` | * | cáp/CCTV/ANPR/VMS/tủ · **GAP-BIEU14-DEV-01** |
| 11 | brand | Hãng | `Text` | | |
| 12 | techSpec | Thông số (TS) | `Text` / Textarea | | |
| 13 | qtyOrLength | SL / dài | `Number` / Text | | **Q-QTY-UNIT** · số hoặc kèm đơn vị |
| 14 | operatingStatus | TT hoạt động | `Dropdown` | * | LOOKUP_STATIC |
| 15 | infraKind | Hạ tầng | `Dropdown` | | cần vươn/long môn/đế BT · **GAP-BIEU14-INFRA-01** |
| 16 | clearanceM | Khoảng cách / KC (m) | `Number` | | decimal ≥0 |
| 17 | infraQty | SL hạ tầng | `Number` | | integer ≥0 |
| 18 | systemStatus | TT hệ thống (HT) | `Dropdown` | | LOOKUP_STATIC |
| 19 | yearBuilt | Năm | `Number` | | year · 1900–2100 |
| 20 | notes | Ghi chú | `Textarea` | | trail trong 21 |
| — | manageUnit | ĐV QL | `Text` → SearchInput | | **GAP-CSDL-ORG-01** · **Q-MANAGE** ngoài/trong 21 |

### Form sections

| Section | Fields | Notes |
|---------|--------|-------|
| Vị trí tuyến | roadCode · roadName · province · kmFrom · kmTo · side · direction · gpsLat · gpsLng | shared đầu form |
| Thiết bị ITS | deviceType · brand · techSpec · qtyOrLength · operatingStatus | **cấm** gộp 1 text detail* |
| Hạ tầng gắn kèm | infraKind · clearanceM · infraQty · systemStatus · yearBuilt | section riêng |

## Control hint — actions

| Action | Surface | Notes |
|--------|---------|-------|
| back-hub | List A | về `/so-ts/csdl-so-sach` |
| create / view / edit / copy / delete | Toolbar + row | soft-delete API |
| save / cancel | Form footer | LeaveConfirmModal dirty |
| import / export | Toolbar | stub · XLS Biểu 14 OUT pack · merge-header |
| history | Toolbar / row | stub modal OK P2 |
| schema-config | Toolbar | UiSchema typed `its-systems` |

## Open questions (PO trước Design)

| ID | Q | Options |
|----|---|---------|
| Q-ROUTE | Alias `/csdl-bieu-14` Navigate ngay hay DEFER hub-only? | alias_now · hub_only |
| Q-PROV | Province static vs master? | keep_static · master_province |
| Q-DIR | `direction` LOOKUP cố định (T/Đ/N/B…) hay free text? | lookup · free_text |
| Q-QTY-UNIT | `qtyOrLength` Number thuần hay Text kèm đơn vị (m/cái)? | number · text_unit |
| Q-DEVICE-SET | Bộ LOOKUP loại TB = cáp/CCTV/ANPR/VMS/tủ đủ Excel? | keep_5 · expand_excel |
| Q-INFRA-SET | Bộ hạ tầng = cần vươn/long môn/đế BT đủ? | keep_3 · expand_excel |
| Q-MANAGE | `manageUnit` nằm trong 21 cột Excel hay trail P2? | in_21 · trail_p2 |
| Q-PREFIX | IdCode prefix `IT` vs `ITS` vs Cục riêng? | IT · ITS · other |
| Q-LIST-COLS | Grid mặc định: shared + deviceType/brand/operatingStatus hay schema-config only? | subset · schema_only |
| Q-TITLE | Title hub «Hệ thống ITS (GTTM)» vs «Hệ thống GTTM (ITS)»? | ctx_its · analy_gttm |
| Q-DMAP | Thêm `csdl-bieu-14` vào DOMAIN-MAP khi Dev? | add_now · hub_only_map |
| Q-PEER-LINK | Deep-link sang Sổ TS `?type=ITS_CAMERA` từ row? | none_p1 · optional_link |
| Q-SO09 | Link Sổ 9 vận hành ITS (T-SO-09) từ Biểu 14 P1? | none_p1 · defer_so09 |

## Handoff

| Role | Dùng packet |
|------|-------------|
| **PO** | § Delta + open Q → `requirement.md` |
| **Design** | control-map khớp bảng · prototype list+slideout · section thiết bị + hạ tầng · reviewUrl |
| **SA** | path `api/v1/asset/csdl-records` · typed DTO/UiSchema · Schema_CsdlBieu14 · register `its-systems` · **cấm** `infra` · DOMAIN-MAP slug · **cấm** merge road-assets / ITS AiVision |
| **TL/Dev** | Wire controlHint · hub card mới · **cấm** đoán Text vs SearchInput · **cấm** 3 ô detail* · **cấm** merge so-ts-its-camera |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHash | `sha256:6cfdefa3baaffcf2bd97c7a429bb5043e7f9d77b96bbb77eafaa34689007b112` |
| headerFingerprint | `sha256:14cd156a898dcc971a072dd1cd1b92460a8b597558a90dc9854fead9d4c4de5c` |
| generatedAt | 2026-09-05T14:30:00.000Z |
| versionGate | ok |
| taskId | task_db0e2ea1 |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:6cfdefa3baaffcf2bd97c7a429bb5043e7f9d77b96bbb77eafaa34689007b112 -->
