# Data-analy — controlHint — csdl-bieu-11 (Kind B list + Kind D Slideout · Biểu 11)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-11` |
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
| contentHash | `sha256:7980db07b4712336ab0b675fa89feaab75c67fdaef3b54fe94647ab9ec1863d8` |
| headerFingerprint | `sha256:b37759a9224c09c7c63bc81583b4a9bcbca02e74cba8b63579819e90d57f1d1a` |
| analyzedAt | `2026-09-05T12:11:10.761Z` |
| cluster | `csdl-cuc-2026` · Excel sheet Biểu 11 · **24 cột** · lưới LED + NLMT · qty bucket |
| taskId | `task_ed491c32` |
| autoApprove | `ON` (queue) |
| realData | `specs/_data-analy/features/csdl-bieu-11-real-data.md` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records?resource=lighting-systems` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-11` · hub deep-link `/so-ts/csdl-so-sach?resource=lighting-systems` |
| resource | `lighting-systems` |
| formNo | `11` · title VN **Hệ thống chiếu sáng** / CTX **Chiếu sáng lưới + NLMT** |
| peerSoTs | `so-ts-lighting` · type `LIGHTING` · **≠** merge form · **GAP-CSDL-CUC-11** · deep-link OK |
| runMode | `new_page` · typed form 24 cột · section lưới + NLMT · **cấm** chỉ 3 ô `detail*` |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** typed DTO + migration.  
> Typography: label **13** · input D14 / M16 (**GAP-TYP-01**).  
> `sourceKind=synthetic` — demo = zone/field **tham chiếu** · **cấm** demo-json / localStorage SSOT.  
> **Cấm** chỉ 3 ô `detailPrimary`/`detailSpec`/`detailExtra` — form = đủ cột Excel (cite analy).  
> Analy: Lưới LED 600/240/150/125 · TT · số cột · tủ · TBA · NLMT: cột THGT · bộ ĐK · pin 240Wp · đèn pha 100W · acquy 145Ah · tủ.  
> Peer Sổ TS = điểm/asset · biểu Cục = **qty bucket** LED/solar — **≠** dump điểm.

## Sources

| Source | Path | sha256 / note |
|--------|------|---------------|
| Context | `docs/context/features/csdl-bieu-11.md` | `7980db07b4712336ab0b675fa89feaab75c67fdaef3b54fe94647ab9ec1863d8` |
| Parent hub | `docs/context/features/csdl-so-sach.md` | cite hub Kind G · resource `lighting-systems` |
| Cluster analy | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | Biểu 11 · 24 cột · § Biểu 11 · GAP-CSDL-CUC-11 |
| DB API SSOT | `docs/context/11-CSDL-SO-SACH-DATABASE-API.md` | § Biểu 11 `LightingSystem` · **live path** = `asset/csdl-records` (doc §2.1 `infra` = legacy · **cấm** invent) |
| Demo entry | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` | `c2c9f8194cb104b3202bcaa46a589c9baba5cf8062aa12e7d0872a9e96eba7ae` |
| Demo page | `Linm.RMMS.Demo/src/demo/asset/csdl-so-sach.html` | hub+list+slideout chrome · prefix `LT` |
| Demo data | `Linm.RMMS.Demo/src/demo/asset/js/csdl-so-sach-data.js` | `lighting-systems` · formNo **11** · labels Loại đèn / Số cột / Số tủ/trạm |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | `csdl-so-sach` → Asset · `asset` |
| Live API | `CsdlCatalogRecordsController` | `api/v1/asset/csdl-records` (polymorphic shell) |
| Live MFE | `CsdlSoSachPage` · `CsdlFormSlideout` | generic 3-field — **GAP-BIEU11-TYPED-01** |
| Excel | `data-import/Sổ sách, biểu mẫu trình LĐ Cục/1. Biểu mẫu CSDL.xls` sheet Biểu 11 | real source · import OUT Dev/XLS task |
| Peer Sổ TS | `so-ts-lighting` · type `LIGHTING` | deep-link only · **cấm** merge |

Normalized header (24 — Excel flatten):

`code|roadCode|roadName|province|kmFrom|kmTo|side|gridLed600|gridLed240|gridLed150|gridLed125|gridStatus|gridPoleCount|cabinetCount|substationCount|solarPoleCount|solarControllerCount|solarPanel240Wp|solarLamp100W|solarBattery145Ah|solarCabinetCount|status|manageUnit|notes`

Form trail (đã trong 24): `manageUnit` · `notes`. **Không** thêm cột ngoài 24.  
DB SSOT: `GridLed600`…`GridLed125` · `GridStatus` · `GridPoleCount` · `CabinetCount` · `SubstationCount` · `Solar*` (pole/controller/panel/lamp/battery/cabinet).

## § Delta Current vs New (`new_page` · `task_ed491c32`)

| ID | Current | New (this analy) | Surface |
|----|---------|------------------|---------|
| GAP-BIEU11-TYPED-01 | Hub list `lighting-systems` + form 3 ô `detail*` | Typed **24 cột** · Slideout 2col · section lưới + NLMT | form + list cols |
| GAP-BIEU11-ROUTE-01 | Chỉ deep-link hub `?resource=lighting-systems` | Alias mfeStd `/csdl-bieu-11` · giữ hub entry | shell / Design |
| GAP-BIEU11-GRID-01 | detailPrimary free «LED 150W grid» | `gridLed600/240/150/125` Number qty · **cấm** 1 text loại đèn | filter + form + list |
| GAP-BIEU11-GRID-STATUS-01 | — | `gridStatus` LOOKUP_STATIC (TT lưới) | form + list |
| GAP-BIEU11-GRID-QTY-01 | detailSpec = số cột · detailExtra = tủ/trạm | `gridPoleCount` · `cabinetCount` · `substationCount` typed Number | form + list |
| GAP-BIEU11-SOLAR-01 | — | NLMT: `solarPoleCount` · `solarControllerCount` · `solarPanel240Wp` · `solarLamp100W` · `solarBattery145Ah` · `solarCabinetCount` | form section |
| GAP-BIEU11-BLOCK-01 | 1 form flat detail* | 2 section UX: Lưới điện · NLMT | form |
| GAP-CSDL-ROAD-01 | `roadName` Text free (hub) | `SearchInput` `road-route` + `roadCode` | filter + form |
| GAP-CSDL-PROV-01 | LOOKUP_STATIC 5 tỉnh | giữ P1 **hoặc** master province — PO chốt | filter + form |
| GAP-CSDL-ORG-01 | `manageUnit` Text | SearchInput tree `org-unit` · DEFER P2 OK | form |
| GAP-CSDL-CUC-03 | Form generic không đủ cột | Đóng gap cho Biểu 11 khi typed PASS | form |
| GAP-CSDL-XLS-01 | Import/export stub | Sheet Biểu 11 đúng 24 cột / merge — OUT pack Dev/XLS | toolbar |
| GAP-CSDL-CUC-11 | Peer `so-ts-lighting` | **≠** Sổ TS · LOOKUP `road-route` chung · ROW riêng · bucket qty ≠ dump điểm · deep-link OK | nav |

**Không** đổi: API prefix `api/v1/asset/csdl-records` · resource key `lighting-systems` · formNo **11** (demo đã đúng) · Kind B list A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · **cấm ERP.*** · IdCode **cấm** Guid · prefix **`LT`**.

## Kind / zones (handoff Design)

| Zone / surface | Pattern | DoD |
|----------------|---------|-----|
| Entry | Hub card **hoặc** `/csdl-bieu-11` | Title VN · back hub · **cấm** slug trên card |
| List A | Header | «Biểu 11 — Hệ thống chiếu sáng» · back hub |
| List B | Toolbar + filter | SearchTextInput · province · status · road SearchInput · kmFrom/kmTo · side · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub · **search must work** · **cấm** nút Tìm riêng |
| List C | `LinCatalogDataGrid` | Cột typed (không chỉ 3 detail) · STT · row menu Xem/Sửa/Copy/Xóa/Lịch sử · kéo cột ON |
| List D | Footer | `LinCatalogListPagination` 50/100/200/500 |
| Form | Kind **D** Slideout Z1–Z3 · 2col | C/E/V/Copy · View=`readOnly` · LeaveConfirmModal dirty · footer Lưu/Hủy · section lưới + NLMT |
| Map | none | deep-link gis only · **cấm** invent map canvas |

**Skip chrome:** GOVOne logo/bell/user · demo skin.

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · đường · ghi chú · qty text |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | **GAP-CSDL-PROV-01** |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC | tot/tb/kem/hong |
| roadCode | Đường | `SearchInput` | **road-route** | **GAP-CSDL-ROAD-01** |
| kmFrom / kmTo | Lý trình từ–đến | `Number` | — | Line geom |
| side | Vị trí (T/P/C) | `Dropdown` | LOOKUP_STATIC | L/R/C/Both |

## Control hint — form fields (Slideout)

| # | Field key | Label | controlHint | required | Notes |
|---|-----------|-------|-------------|----------|-------|
| — | code | Mã | `Text` readonly | auto | IdCode prefix `LT` · **cấm** Guid |
| 1–2 | roadCode / roadName | Mã/Tên đường | `SearchInput` | * | catalogKind `road-route` |
| 3 | province | Địa danh | `Dropdown` | * | LOOKUP_STATIC P1 |
| 4–5 | kmFrom / kmTo | Lý trình từ–đến (Km) | `Number` | * | decimal · Line |
| 6 | side | Vị trí | `Dropdown` | * | L/R/C/Both |
| 7 | gridLed600 | LED 600W (SL) | `Number` | | int ≥0 · section lưới |
| 8 | gridLed240 | LED 240W (SL) | `Number` | | int ≥0 |
| 9 | gridLed150 | LED 150W (SL) | `Number` | | int ≥0 |
| 10 | gridLed125 | LED 125W (SL) | `Number` | | int ≥0 |
| 11 | gridStatus | TT lưới | `Dropdown` | | LOOKUP_STATIC · **Q-GRID-STATUS** |
| 12 | gridPoleCount | Số cột (lưới) | `Number` | | int ≥0 |
| 13 | cabinetCount | Số tủ (lưới) | `Number` | | int ≥0 |
| 14 | substationCount | Số TBA | `Number` | | int ≥0 |
| 15 | solarPoleCount | Cột THGT (NLMT) | `Number` | | int ≥0 · section NLMT |
| 16 | solarControllerCount | Bộ ĐK (NLMT) | `Number` | | int ≥0 |
| 17 | solarPanel240Wp | Pin 240Wp (SL) | `Number` | | int ≥0 |
| 18 | solarLamp100W | Đèn pha 100W (SL) | `Number` | | int ≥0 |
| 19 | solarBattery145Ah | Acquy 145Ah (SL) | `Number` | | int ≥0 |
| 20 | solarCabinetCount | Tủ NLMT (SL) | `Number` | | int ≥0 |
| 21 | status | Tình trạng | `Dropdown` | * | LOOKUP_STATIC |
| — | manageUnit | ĐV QL | `Text` → SearchInput | | **GAP-CSDL-ORG-01** · trail |
| — | notes | Ghi chú | `Textarea` | | trail |

### Form sections (2 khối)

| Section | Fields | Notes |
|---------|--------|-------|
| Lưới điện | gridLed* · gridStatus · gridPoleCount · cabinetCount · substationCount | shared road/km/side trên đầu · **GAP-BIEU11-BLOCK-01** |
| NLMT | solarPoleCount · solarControllerCount · solarPanel240Wp · solarLamp100W · solarBattery145Ah · solarCabinetCount | optional block · **cấm** bắt buộc cả 2 khối nếu Excel cho phép 1 phía · **Q-SOLAR-REQ** |

## Control hint — actions

| Action | Surface | Notes |
|--------|---------|-------|
| back-hub | List A | về `/so-ts/csdl-so-sach` |
| create / view / edit / copy / delete | Toolbar + row | soft-delete API |
| save / cancel | Form footer | LeaveConfirmModal dirty |
| import / export | Toolbar | stub · XLS Biểu 11 OUT pack · merge-header |
| history | Toolbar / row | stub modal OK P2 |
| schema-config | Toolbar | UiSchema typed `lighting-systems` |
| peer-sots | List / form link | deep-link `so-ts-lighting` · **cấm** merge |

## Open questions (PO trước Design)

| ID | Q | Options |
|----|---|---------|
| Q-ROUTE | Alias `/csdl-bieu-11` Navigate ngay hay DEFER hub-only? | alias_now · hub_only |
| Q-PROV | Province static vs master? | keep_static · master_province |
| Q-GRID-STATUS | Enum `gridStatus` seed đâu (tot/tb/kem hay Excel riêng)? | align_status · excel_seed |
| Q-LED-ZERO | Cho phép cả 4 LED = 0 khi chỉ có NLMT? | allow_zero · require_one_led |
| Q-SOLAR-REQ | Khối NLMT bắt buộc hay optional? | optional · required_if_any |
| Q-CABINET | `cabinetCount` (lưới) vs `solarCabinetCount` — 2 field tách đúng Excel? | split · merge_one |
| Q-LIST-COLS | Grid mặc định: shared + LED subset / số cột·tủ hay schema-config only? | subset · schema_only |
| Q-PEER | Deep-link Sổ TS `so-ts-lighting` trên toolbar hay chỉ CTX note? | toolbar · ctx_only |
| Q-TITLE | Label hub «Hệ thống chiếu sáng» vs CTX «Chiếu sáng lưới + NLMT»? | keep_demo · ctx_title |

## Handoff

| Role | Dùng packet |
|------|-------------|
| **PO** | § Delta + open Q → `requirement.md` |
| **Design** | control-map khớp bảng · prototype list+slideout · 2 section · reviewUrl |
| **SA** | path `api/v1/asset/csdl-records` · typed DTO/UiSchema · Schema_CsdlBieu11 · **cấm** `infra` |
| **TL/Dev** | Wire controlHint · **cấm** đoán Text vs SearchInput · **cấm** 3 ô detail* |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHash | `sha256:7980db07b4712336ab0b675fa89feaab75c67fdaef3b54fe94647ab9ec1863d8` |
| headerFingerprint | `sha256:b37759a9224c09c7c63bc81583b4a9bcbca02e74cba8b63579819e90d57f1d1a` |
| generatedAt | 2026-09-05T12:11:10.761Z |
| versionGate | ok |
| taskId | task_ed491c32 |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-data-analy skillVersion=2026.08.25.01 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:7980db07b4712336ab0b675fa89feaab75c67fdaef3b54fe94647ab9ec1863d8 -->
