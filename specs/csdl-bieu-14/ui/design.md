# Design — csdl-bieu-14 (Biểu 14 — Hệ thống ITS (GTTM))

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-14` |
| title | CSDL Biểu 14 — Hệ thống ITS (GTTM) |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** catalog A–D+F · **D** Slideout Z1–Z3 · **`data-form-cols="2"`** |
| formSurface | **slideout** · `slideout_layout: footer_actions_only` · **cấm** Full-page / Modal form |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_d302ab8a`) |
| changeScope | `new_page` |
| packKind | `list` |
| resource | `its-systems` |
| formNo | `14` · title VN **Biểu 14 — Hệ thống ITS (GTTM)** (Q-TITLE ctx_its) |
| columns | **21** · section **Vị trí tuyến** + **Thiết bị ITS** + **Hạ tầng gắn kèm** |
| IdCode | prefix **`IT`** · `IT-yyyyMMdd-nnnn` · **cấm** Guid |
| peerSoTs | `so-ts-its-camera` · **cấm** merge · Q-PEER-LINK **none_p1** · Q-SO09 **none_p1** |
| prior · po | `confirmed` · `po/requirement.md` · `handoff/po-compact.md` · `task_475a3c19` |
| prior · data_analy | `confirmed`/`done` · hash skip · `_data-analy/features/csdl-bieu-14-control-hint.md` · `csdl-bieu-14-real-data.md` · contentHash `sha256:6cfdefa3baaffcf2bd97c7a429bb5043e7f9d77b96bbb77eafaa34689007b112` · headerFingerprint `sha256:14cd156a898dcc971a072dd1cd1b92460a8b597558a90dc9854fead9d4c4de5c` · **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | **`/csdl-bieu-14`** (alias Navigate **now**) · hub `/so-ts/csdl-so-sach?resource=its-systems` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-14` |
| hubUrl | `http://localhost:9301/so-ts/csdl-so-sach?resource=its-systems` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` — **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| catalogKind UI schema | **`its-systems`** (typed) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) — Design không chạy BE |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e/start:std ở Design |
| taskId | `task_d302ab8a` · po `task_475a3c19` · analy `task_db0e2ea1` |
| updatedAt | `2026-09-05T14:55:00.000Z` |

**Cấm:** re-scan demo · form chỉ 3 ô `detail*` · Full-page form · invent map canvas · merge so-ts-its-camera / road-assets / ITS AiVision · ERP.* · invent API · native alert/confirm · yarn build/e2e/start:std · start role SA/Dev trong task này (**GAP-PKT-ROLE-01**).

## 0. Context & inventory (hash skip — **cấm** re-scan demo)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/csdl-bieu-14.md` | feature |
| DEM-01 | `…/csdl-so-sach-demo.html` → `…/asset/csdl-so-sach.html` | zone ref only · **cấm** SSOT data |
| DA-HINT | `specs/_data-analy/features/csdl-bieu-14-control-hint.md` | controlHint SSOT |
| DA-REAL | `specs/_data-analy/features/csdl-bieu-14-real-data.md` | §A+§B bind |
| PO-01 | `specs/csdl-bieu-14/po/requirement.md` | Q chốt · DoD |
| MFE | hub `CsdlSoSachPage` · form `CsdlFormSlideout` | generic → typed replace |
| SVC | `services/csdlSoSach/endpoint.ts` | `BASE=/asset/csdl-records` |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `csdl-so-sach` · slug `csdl-bieu-14` add_now |
| PEER | `so-ts-its-camera` | cite only · **cấm** merge · **≠** its-traffic-detect / its-anpr-overload |

Persona: Khu QLĐB · Văn phòng Cục · Ban QLDA (web).

**≠** Sổ TS · ≠ hub generic 3 ô `detail*` · ≠ bind `road-assets?type=ITS_CAMERA` · ≠ ITS AiVision MFEs.

### § Delta Current vs New (`new_page`)

| Area | Current (live) | New (this Design) | GAP |
|------|----------------|-------------------|-----|
| Entry | Hub 12 biểu · MISSING Biểu 14 | Alias **`/csdl-bieu-14`** + hub NEW card formNo 14 | GAP-BIEU14-HUB-01 · GAP-BIEU14-ROUTE-01 |
| List cols | generic / N/A | Shared + deviceType/brand/operatingStatus/infraKind subset | GAP-BIEU14-TYPED-01 · Q-LIST-COLS |
| Form | 3 ô `detail*` nếu bootstrap | Typed **21 cột** Slideout 2col · section TB + HT | GAP-BIEU14-TYPED-01 · GAP-CSDL-CUC-03 |
| Device | — | deviceType LOOKUP 5 · brand · techSpec · qtyOrLength Number · operatingStatus | GAP-BIEU14-DEV-01 |
| Infra | — | infraKind LOOKUP 3 · clearanceM · infraQty · systemStatus · yearBuilt | GAP-BIEU14-INFRA-01 |
| GPS / dir | — | gpsLat/gpsLng Number · direction LOOKUP · side LOOKUP | GAP-BIEU14-GPS-01 · GAP-BIEU14-DIR-01 |
| road | Text free | **SearchInput** `road-route` filter+form | GAP-CSDL-ROAD-01 |
| province | LOOKUP_STATIC | **keep_static** P1 | GAP-CSDL-PROV-01 |
| manageUnit | Text | trail **P2** · không trong form P1 21 | GAP-CSDL-ORG-01 · Q-MANAGE trail_p2 |
| Peer | so-ts-its-camera | **cấm** merge · none_p1 link | GAP-CSDL-CUC-11 · GAP-BIEU14-PEER-ITS-01 |
| DOMAIN-MAP | thiếu slug | add_now `csdl-bieu-14` | GAP-BIEU14-DMAP-01 |
| Import/Export | stub | stub OUT Biểu 14 | GAP-CSDL-XLS-01 |

**Không đổi:** Kind B A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · pagination 50/100/200/500 · API prefix · resource key · formNo **14** · IdCode **cấm** Guid · map=`none` · **cấm ERP.***.

**PO chốt (Design khóa):** Q-ROUTE=`alias_now` · Q-PROV=`keep_static` · Q-DIR=`lookup` · Q-QTY-UNIT=`number` · Q-DEVICE-SET=`keep_5` · Q-INFRA-SET=`keep_3` · Q-MANAGE=`trail_p2` · Q-PREFIX=`IT` · Q-LIST-COLS=`subset` · Q-TITLE=`ctx_its` · Q-DMAP=`add_now` · Q-PEER-LINK=`none_p1` · Q-SO09=`none_p1` · open Q = **none**.

## 1. Kind + UI pattern (HARD)

| | |
|--|--|
| Feature Kind | **B+D** |
| List pattern | **1×** `LinPageLayout` kind=`catalog` — **cấm** nested `CatalogListShell` |
| Grid | `LinCatalogDataGrid` · kéo cột **default ON** · cols = shared + deviceType/brand/operatingStatus/infraKind |
| Filter | **`LinErpListFilterBar`** **1 hàng wrap** · **input + 🔍 cụm phải** — **cấm** nút Tìm riêng · **cấm** stack (**filter-bar-layout-hard**) |
| Footer | `LinCatalogListPagination` **50 / 100 / 200 / 500** |
| Form pattern | **Slideout** · `formSurface: slideout` · **`data-form-cols="2"`** · `footer_actions_only` · section Vị trí tuyến + Thiết bị ITS + Hạ tầng gắn kèm |
| Zone F | `LinCatalogUiSchemaEditorModal` catalogKind **`its-systems`** — **cấm** `LinListTableConfigModal` |
| Zone H | `LinCatalogHistoryModal` — stub OK P2 · **cấm** invent History API |
| Leave | Dirty → **`LeaveConfirmModal`** — **cấm** native alert/confirm (**GAP-DES-LEAVE-01**) |
| Typography | label **13** · input D14/M16 (**GAP-TYP-01**) |
| Toolbar icons | `erp-control-icon-map` §0 · config=`fa-cog` |
| Map | `map: none` — gis deep-link only · **cấm** invent canvas |
| Peer | **none_p1** · **cấm** toolbar merge so-ts-its-camera |
| Skip chrome | GOVOne · demo sidebar/note |
| Report | **N/A** — packKind `list` · DES-RPT skip |
| Grid AC | **YES** · Leave **YES** · Report AC **N/A** |

### Routes (Design chốt)

| Surface | Path |
|---------|------|
| Alias list | `/csdl-bieu-14` → same page as hub resource list |
| Hub entry | `/so-ts/csdl-so-sach?resource=its-systems` · NEW card «Hệ thống ITS (GTTM)» · formNo **14** · **cấm** slug trên card |
| Form | overlay Slideout · **cấm** Full-page |
| Map | deep-link gis only |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **DES-GRID-A · B · B-FILTER · C0–C3 · D · F · H** | Filter + toolbar FULL · typed grid subset |
| S-FORM-CREATE | create | **DES-GRID-Z** Slideout 2col Z1–Z3 | footer Hủy/Lưu · leave |
| S-FORM-EDIT | edit | DES-GRID-Z | footer Hủy/Lưu · leave dirty |
| S-FORM-VIEW | view | DES-GRID-Z | readOnly · **cấm** disabled xám · footer Đóng/Sửa/Copy |
| S-FORM-COPY | create | DES-GRID-Z | clear id · new `IT-` code |
| S-ACT-DELETE | — | Confirm modal | soft delete |
| S-HIST | — | DES-GRID-H | `LinCatalogHistoryModal` |
| S-HUB-ENTRY | — | — | hub NEW card «Hệ thống ITS (GTTM)» · open resource |
| S-SKIP-MAP | — | — | **Cấm** map canvas |
| S-SKIP-PEER | — | — | **Cấm** merge / deep-link peer P1 · **cấm** SO09 P1 |

**devSlash:** `/agent-dev` (list + Slideout typed · **không** map / e2e ở Design).

### Zone A — Header

- Back hub `/so-ts/csdl-so-sach` · title «Biểu 14 — Hệ thống ITS (GTTM)» · **cấm** Thêm mới trên A · **cấm** slug trên title

### Zone B — Toolbar + filter (`LinErpListFilterBar`)

| key | Label | Control | catalogKind |
|-----|-------|---------|-------------|
| search | Tìm kiếm | `SearchTextInput` | text · mã · đường · hãng · ghi chú · **🔍 cụm phải** |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC P1 |
| operatingStatus | TT hoạt động | `Dropdown` | LOOKUP_STATIC |
| deviceType | Loại TB | `Dropdown` | LOOKUP_STATIC · cáp/CCTV/ANPR/VMS/tủ |
| roadCode | Đường | `SearchInput` | **road-route** |
| kmFrom / kmTo | Lý trình từ–đến | `Number` | Line geom |
| side | Vị trí | `Dropdown` | LOOKUP L/R/C/Both |
| — | Làm mới / Lịch sử / Cấu hình / Xóa / Import·Export stub | `fa-sync-alt` · `fa-history` · `fa-cog` · `fa-trash` · stub toast OUT Biểu 14 | |
| — | **Tạo mới** | primary Zone B phải | |

Filter đổi → page=1 · **search must work** · **cấm** nút Tìm riêng · **cấm** nút Sổ TS peer.

### Zone C — Grid columns (typed · **subset** · shared+device+infraKind)

**Default:** STT · □ · **Mã** · **Đường** · **Tỉnh** · **Km từ** · **Km đến** · **Vị trí** · **Loại TB** · **Hãng** · **TT HĐ** · **Hạ tầng** · ⋯

Schema-config có thể bổ sung: direction · gpsLat/gpsLng · techSpec · qtyOrLength · clearanceM · infraQty · systemStatus · yearBuilt · notes.

Row menu: Xem / Sửa / Copy / Xóa / Lịch sử · kéo cột ON.

Empty: «Chưa có hệ thống ITS» · CTA Tạo mới.

### Zone D — Pagination

`LinCatalogListPagination` 50/100/200/500.

## 3. Field inventory (Control = controlHint · **cấm** đoán)

### 3.1 Form Slideout — Z1 Vị trí tuyến

| # | uiField | Label VN | Control | Required | FormMode | Notes |
|---|---------|----------|---------|----------|----------|-------|
| — | code | Mã | Text readonly | auto | all ro | IdCode `IT-` · **cấm** Guid |
| 1–2 | roadCode / roadName | Mã/Tên đường | **SearchInput** | * | view=ro | catalogKind `road-route` · **GAP-CSDL-ROAD-01** |
| 3 | province | Địa danh | Dropdown | * | view=ro | LOOKUP_STATIC P1 · **Q-PROV** keep_static |
| 4–5 | kmFrom / kmTo | Lý trình từ–đến (Km) | Number | * | view=ro | decimal · Line |
| 6 | side | Vị trí | Dropdown | * | view=ro | L/R/C/Both |
| 7 | direction | Hướng tuyến | Dropdown | | view=ro | LOOKUP T/Đ/N/B · **Q-DIR** lookup · **GAP-BIEU14-DIR-01** |
| 8–9 | gpsLat / gpsLng | GPS Lat / Lng | Number | | view=ro | decimal · Point · **GAP-BIEU14-GPS-01** |

### 3.2 Form Slideout — Z2 Thiết bị ITS

Section title cố định: **«Thiết bị ITS»** · **cấm** gộp 1 text detail*

| # | uiField | Label VN | Control | Required | Notes |
|---|---------|----------|---------|----------|-------|
| 10 | deviceType | Loại thiết bị | Dropdown | * | cáp/CCTV/ANPR/VMS/tủ · **Q-DEVICE-SET** keep_5 · **GAP-BIEU14-DEV-01** |
| 11 | brand | Hãng | Text | | |
| 12 | techSpec | Thông số (TS) | Textarea | | full row OK |
| 13 | qtyOrLength | SL / dài | Number | | decimal ≥0 · **Q-QTY-UNIT** number |
| 14 | operatingStatus | TT hoạt động | Dropdown | * | LOOKUP_STATIC tot/tb/kem/hong |

### 3.3 Form Slideout — Z3 Hạ tầng gắn kèm (+ trail)

Section title cố định: **«Hạ tầng gắn kèm»**

| # | uiField | Label VN | Control | Required | Notes |
|---|---------|----------|---------|----------|-------|
| 15 | infraKind | Hạ tầng | Dropdown | | cần vươn/long môn/đế BT · **Q-INFRA-SET** keep_3 · **GAP-BIEU14-INFRA-01** |
| 16 | clearanceM | Khoảng cách / KC (m) | Number | | decimal ≥0 |
| 17 | infraQty | SL hạ tầng | Number | | integer ≥0 |
| 18 | systemStatus | TT hệ thống (HT) | Dropdown | | LOOKUP_STATIC align operatingStatus |
| 19 | yearBuilt | Năm | Number | | year 1900–2100 |
| 20 | notes | Ghi chú | Textarea | | trail trong 21 · full row |
| — | updatedAt | Cập nhật | DateTime ro | | audit |
| — | manageUnit | ĐV QL | — | | **Q-MANAGE** trail_p2 · **không** mount P1 · **GAP-CSDL-ORG-01** |

**Cấm** mount `detailPrimary` / `detailSpec` / `detailExtra` làm form chính.  
**Cấm** expand device/infra LOOKUP ngoài keep_5 / keep_3 không confirm.

### 3.4 controlHint map (Design chốt)

| Surface | Field | Control | catalogKind |
|---------|-------|---------|-------------|
| List B | search | SearchTextInput | — |
| List B | province | Dropdown | LOOKUP_STATIC |
| List B | operatingStatus | Dropdown | LOOKUP_STATIC |
| List B | deviceType | Dropdown | LOOKUP_STATIC |
| List B | roadCode | SearchInput | road-route |
| List B | kmFrom / kmTo | Number | — |
| List B | side | Dropdown | LOOKUP_STATIC |
| Form | code | Text readonly | — |
| Form | roadCode / roadName | SearchInput | road-route |
| Form | province / side / direction | Dropdown | LOOKUP_STATIC |
| Form | kmFrom / kmTo / gpsLat / gpsLng | Number | — |
| Form | deviceType / operatingStatus / infraKind / systemStatus | Dropdown | LOOKUP_STATIC |
| Form | brand | Text | — |
| Form | techSpec / notes | Textarea | — |
| Form | qtyOrLength / clearanceM / infraQty / yearBuilt | Number | — |

## 4. Prototype + reviewUrl

| | |
|--|--|
| Prototype | `specs/csdl-bieu-14/ui/prototype/csdl-bieu-14-list-prototype.html` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-14/ui/prototype/csdl-bieu-14-list-prototype.html` |
| README | `specs/csdl-bieu-14/ui/prototype/README.md` |
| Zones covered | DES-GRID-A · B · B-FILTER · C · D · Z (Slideout 2col · section vị trí + TB + HT) · LeaveConfirm · Delete confirm |
| Sample rows | synthetic UI only · **cấm** demo-json SSOT |

## 5. API bind (Design cite · SA typed)

| Op | Path |
|----|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=its-systems` |
| Detail | `GET …/csdl-records/{id}` |
| Create/Update | `POST` / `PUT` body `resource=its-systems` + typed 21 |
| Delete | soft `DELETE` |
| road-route | `GET /integration/road-routes/search` |

**Cấm** ERP.* · invent `api/v1/infra/*` · invent `api/v1/so-ts/*` · bind peer `road-assets` · bind ITS AiVision APIs.

## 6. DoD / design_confirm

| Check | Result |
|-------|--------|
| Control = controlHint (21 typed · section TB + HT · GPS · direction) | PASS |
| Kind B A–D+F · Kind D Slideout 2col · filter-bar hard · hub NEW card | PASS |
| reviewUrl browser-openable prototype | PASS |
| Grid AC YES · Leave YES · Report N/A | PASS |
| design_confirm (autoApprove ON) | **approve** |
| ui_repo_confirm / be_repo_confirm | **approve** |
| compact ≤5KB · zone ids · reviewUrl · **cấm** paste HTML | PASS |
| **Cấm** e2e / start:std / yarn build / re-scan demo | PASS |

## 7. Handoff next

| Role | Need |
|------|------|
| **SA** | Schema_CsdlBieu14 · typed DTO/UiSchema `its-systems` · Device*/Infra*/Gps* · DOMAIN-MAP slug · **cấm** invent infra API · **cấm** merge road-assets / ITS AiVision |
| TL/Dev | Wire controlHint · alias `/csdl-bieu-14` · hub NEW card · **cấm** đoán Text vs SearchInput · **cấm** detail* · **cấm** merge so-ts-its-camera |
| QA | e2e queued `/agent-qa*` only |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.29.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHashPrior | `sha256:6cfdefa3baaffcf2bd97c7a429bb5043e7f9d77b96bbb77eafaa34689007b112` |
| headerFingerprintPrior | `sha256:14cd156a898dcc971a072dd1cd1b92460a8b597558a90dc9854fead9d4c4de5c` |
| generatedAt | 2026-09-05T14:55:00.000Z |
| versionGate | ok |
| taskId | task_d302ab8a |
| packKind | list |
| changeScope | new_page |
| design_confirm | approve |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.08.29.03 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok design_confirm=approve taskId=task_d302ab8a -->
