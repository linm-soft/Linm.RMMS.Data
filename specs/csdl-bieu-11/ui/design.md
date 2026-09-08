# Design — csdl-bieu-11 (Biểu 11 — Hệ thống chiếu sáng)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-11` |
| title | CSDL Biểu 11 — Hệ thống chiếu sáng |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** catalog A–D+F · **D** Slideout Z1–Z3 · **`data-form-cols="2"`** |
| formSurface | **slideout** · `slideout_layout: footer_actions_only` · **cấm** Full-page / Modal form |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_94e69c1a`) |
| changeScope | `new_page` |
| packKind | `list` |
| resource | `lighting-systems` |
| formNo | `11` · title VN **Biểu 11 — Hệ thống chiếu sáng** (Q-TITLE keep_demo) |
| columns | **24** · **2 section UX** lưới điện + NLMT |
| IdCode | prefix **`LT`** · `LT-yyyyMMdd-nnnn` · **cấm** Guid |
| peerSoTs | `so-ts-lighting` · toolbar deep-link · **≠** merge form · qty ≠ điểm (**GAP-CSDL-CUC-11**) |
| prior · po | `confirmed` · `po/requirement.md` · `handoff/po-compact.md` · `task_ec8df9b0` |
| prior · data_analy | `confirmed`/`done` · hash skip · `_data-analy/features/csdl-bieu-11-control-hint.md` · `csdl-bieu-11-real-data.md` · contentHash `sha256:7980db07b4712336ab0b675fa89feaab75c67fdaef3b54fe94647ab9ec1863d8` · headerFingerprint `sha256:b37759a9224c09c7c63bc81583b4a9bcbca02e74cba8b63579819e90d57f1d1a` · **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | **`/csdl-bieu-11`** (alias Navigate **now**) · hub `/so-ts/csdl-so-sach?resource=lighting-systems` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-11` |
| hubUrl | `http://localhost:9301/so-ts/csdl-so-sach?resource=lighting-systems` |
| peerUrl | `http://localhost:9301/so-ts-lighting` (toolbar · **cấm** merge) |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · `api/v1/asset/csdl-records` · BFF `web-bff/api/v1/asset/csdl-records` — **cấm ERP.*** · **cấm** invent `api/v1/infra/*` |
| catalogKind UI schema | **`lighting-systems`** (typed) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) — Design không chạy BE |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e/start:std ở Design |
| taskId | `task_94e69c1a` · po `task_ec8df9b0` · analy `task_ed491c32` |
| updatedAt | `2026-09-05T12:25:00.000Z` |

**Cấm:** re-scan demo · form chỉ 3 ô `detail*` · Full-page form · invent map canvas · merge Sổ TS form · dump điểm→qty · ERP.* · invent API · native alert/confirm · yarn build/e2e/start:std · start role SA/Dev trong task này (**GAP-PKT-ROLE-01**).

## 0. Context & inventory (hash skip — **cấm** re-scan demo)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/csdl-bieu-11.md` | feature |
| DEM-01 | `…/csdl-so-sach-demo.html` → `…/asset/csdl-so-sach.html` | zone ref only · **cấm** SSOT data |
| DA-HINT | `specs/_data-analy/features/csdl-bieu-11-control-hint.md` | controlHint SSOT |
| DA-REAL | `specs/_data-analy/features/csdl-bieu-11-real-data.md` | §A+§B bind |
| PO-01 | `specs/csdl-bieu-11/po/requirement.md` | Q chốt · DoD |
| MFE | hub `CsdlSoSachPage` · form `CsdlFormSlideout` | generic → typed replace |
| SVC | `services/csdlSoSach/endpoint.ts` | `BASE=/asset/csdl-records` |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `csdl-so-sach` |
| PEER | `so-ts-lighting` | deep-link only |

Persona: Khu QLĐB · Văn phòng Cục · Ban QLDA (web).

**≠** Sổ TS merge · ≠ hub generic 3 ô `detail*` · ≠ `road-assets`.

### § Delta Current vs New (`new_page`)

| Area | Current (live) | New (this Design) | GAP |
|------|----------------|-------------------|-----|
| Entry | Hub-only `?resource=lighting-systems` | Alias **`/csdl-bieu-11`** + hub | GAP-BIEU11-ROUTE-01 |
| List cols | generic road/km/detail* | Shared + LED4 + gridStatus + pole/cabinet + status subset | GAP-BIEU11-TYPED-01 · Q-LIST-COLS |
| Form | 3 ô `detail*` | Typed **24 cột** Slideout 2col · **2 section** lưới + NLMT | GAP-BIEU11-TYPED/BLOCK-01 · GAP-CSDL-CUC-03 |
| LED qty | free «loại đèn» | `gridLed600/240/150/125` Number · allow_zero | GAP-BIEU11-GRID-01 · Q-LED-ZERO |
| gridStatus | — | LOOKUP align status tot/tb/kem/hong | GAP-BIEU11-GRID-STATUS-01 |
| pole/cabinet/TBA | detailSpec/Extra | `gridPoleCount` · `cabinetCount` · `substationCount` · cabinet **split** | GAP-BIEU11-GRID-QTY-01 · Q-CABINET |
| NLMT | — | 6 solar* Number · optional block | GAP-BIEU11-SOLAR-01 · Q-SOLAR-REQ |
| road | Text free | **SearchInput** `road-route` filter+form | GAP-CSDL-ROAD-01 |
| province | LOOKUP_STATIC | **keep_static** P1 | GAP-CSDL-PROV-01 |
| manageUnit | Text | Text P1 · SearchInput **DEFER P2** | GAP-CSDL-ORG-01 |
| Peer | CTX only | Toolbar deep-link `so-ts-lighting` | GAP-CSDL-CUC-11 · Q-PEER |
| Import/Export | stub | stub OUT Biểu 11 · skip-bridge locked | GAP-CSDL-XLS-01 |

**Không đổi:** Kind B A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · pagination 50/100/200/500 · API prefix · resource key · formNo **11** · IdCode **cấm** Guid · map=`none` · **cấm ERP.***.

**PO chốt (Design khóa):** Q-ROUTE=`alias_now` · Q-PROV=`keep_static` · Q-GRID-STATUS=`align_status` · Q-LED-ZERO=`allow_zero` · Q-SOLAR-REQ=`optional` · Q-CABINET=`split` · Q-LIST-COLS=`subset` · Q-PEER=`toolbar` · Q-TITLE=`keep_demo` · open Q = **none**.

## 1. Kind + UI pattern (HARD)

| | |
|--|--|
| Feature Kind | **B+D** |
| List pattern | **1×** `LinPageLayout` kind=`catalog` — **cấm** nested `CatalogListShell` |
| Grid | `LinCatalogDataGrid` · kéo cột **default ON** · cols = shared + LED/grid subset |
| Filter | **`LinErpListFilterBar`** **1 hàng wrap** · **input + 🔍 cụm phải** — **cấm** nút Tìm riêng · **cấm** stack (**filter-bar-layout-hard**) |
| Footer | `LinCatalogListPagination` **50 / 100 / 200 / 500** |
| Form pattern | **Slideout** · `formSurface: slideout` · **`data-form-cols="2"`** · `footer_actions_only` · **2 section** lưới điện + NLMT |
| Zone F | `LinCatalogUiSchemaEditorModal` catalogKind **`lighting-systems`** — **cấm** `LinListTableConfigModal` |
| Zone H | `LinCatalogHistoryModal` — stub OK P2 · **cấm** invent History API |
| Leave | Dirty → **`LeaveConfirmModal`** — **cấm** native alert/confirm (**GAP-DES-LEAVE-01**) |
| Typography | label **13** · input D14/M16 (**GAP-TYP-01**) |
| Toolbar icons | `erp-control-icon-map` §0 · config=`fa-cog` |
| Map | `map: none` — gis deep-link only · **cấm** invent canvas |
| Peer | Toolbar link Sổ TS · **cấm** merge form · **cấm** dump điểm→qty |
| Skip chrome | GOVOne · demo sidebar/note |
| Report | **N/A** — packKind `list` · DES-RPT skip |
| Grid AC | **YES** · Leave **YES** · Report AC **N/A** |

### Routes (Design chốt)

| Surface | Path |
|---------|------|
| Alias list | `/csdl-bieu-11` → same page as hub resource list |
| Hub entry | `/so-ts/csdl-so-sach?resource=lighting-systems` · card title VN Biểu 11 |
| Form | overlay Slideout · **cấm** Full-page |
| Peer | Navigate `so-ts-lighting` · deep-link only |
| Map | deep-link gis only |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **DES-GRID-A · B · B-FILTER · C0–C3 · D · F · H** | Filter + toolbar FULL · typed grid subset · peer toolbar |
| S-FORM-CREATE | create | **DES-GRID-Z** Slideout 2col Z1–Z3 · 2 section | footer Hủy/Lưu · leave |
| S-FORM-EDIT | edit | DES-GRID-Z | footer Hủy/Lưu · leave dirty |
| S-FORM-VIEW | view | DES-GRID-Z | readOnly · **cấm** disabled xám · footer Đóng/Sửa/Copy |
| S-FORM-COPY | create | DES-GRID-Z | clear id · new `LT-` code |
| S-ACT-DELETE | — | Confirm modal | soft delete |
| S-HIST | — | DES-GRID-H | `LinCatalogHistoryModal` |
| S-HUB-ENTRY | — | — | hub card «Hệ thống chiếu sáng» · open resource |
| S-PEER | — | toolbar | deep-link `so-ts-lighting` |
| S-SKIP-MAP | — | — | **Cấm** map canvas |

**devSlash:** `/agent-dev` (list + Slideout typed · **không** map / e2e ở Design).

### Zone A — Header

- Back hub `/so-ts/csdl-so-sach` · title «Biểu 11 — Hệ thống chiếu sáng» · **cấm** Thêm mới trên A · **cấm** slug trên title

### Zone B — Toolbar + filter (`LinErpListFilterBar`)

| key | Label | Control | catalogKind |
|-----|-------|---------|-------------|
| search | Tìm kiếm | `SearchTextInput` | text · mã · đường · ghi chú · qty text · **🔍 cụm phải** |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC P1 |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC tot/tb/kem/hong |
| roadCode | Đường | `SearchInput` | **road-route** |
| kmFrom / kmTo | Lý trình từ–đến | `Number` | Line geom |
| side | Vị trí | `Dropdown` | LOOKUP L/R/C/Both |
| — | Làm mới / Lịch sử / Cấu hình / Xóa / Import·Export stub / **Sổ TS** | `fa-sync-alt` · `fa-history` · `fa-cog` · `fa-trash` · stub toast OUT Biểu 11 · peer deep-link | |
| — | **Tạo mới** | primary Zone B phải | |

Filter đổi → page=1 · **search must work** · **cấm** nút Tìm riêng.

### Zone C — Grid columns (typed · **subset** · shared+LED)

**Default:** STT · □ · **Mã** · **Đường** · **Tỉnh** · **Km từ** · **Km đến** · **Vị trí** · **LED 600** · **LED 240** · **LED 150** · **LED 125** · **TT lưới** · **Số cột** · **Số tủ** · **TT** · **ĐV QL** · ⋯

Schema-config có thể bổ sung: TBA · solar* · Ghi chú.

Row menu: Xem / Sửa / Copy / Xóa / Lịch sử · kéo cột ON.

Empty: «Chưa có hệ thống chiếu sáng» · CTA Tạo mới.

### Zone D — Pagination

`LinCatalogListPagination` 50/100/200/500.

## 3. Field inventory (Control = controlHint · **cấm** đoán)

### 3.1 Form Slideout — Z1 Định danh & tuyến

| # | uiField | Label VN | Control | Required | FormMode | Notes |
|---|---------|----------|---------|----------|----------|-------|
| — | code | Mã | Text readonly | auto | all ro | IdCode `LT-` · **cấm** Guid |
| 1–2 | roadCode / roadName | Mã/Tên đường | **SearchInput** | * | view=ro | catalogKind `road-route` · **GAP-CSDL-ROAD-01** |
| 3 | province | Địa danh | Dropdown | * | view=ro | LOOKUP_STATIC P1 · **Q-PROV** keep_static |
| 4–5 | kmFrom / kmTo | Lý trình từ–đến (Km) | Number | * | view=ro | decimal · Line |
| 6 | side | Vị trí | Dropdown | * | view=ro | L/R/C/Both |

### 3.2 Form Slideout — Z2 Lưới điện

Section title cố định: **«Lưới điện»**

| # | uiField | Label VN | Control | Required | Notes |
|---|---------|----------|---------|----------|-------|
| 7 | gridLed600 | LED 600W (SL) | Number | | int ≥0 · **Q-LED-ZERO** allow_zero |
| 8 | gridLed240 | LED 240W (SL) | Number | | int ≥0 |
| 9 | gridLed150 | LED 150W (SL) | Number | | int ≥0 |
| 10 | gridLed125 | LED 125W (SL) | Number | | int ≥0 |
| 11 | gridStatus | TT lưới | Dropdown | | LOOKUP_STATIC tot/tb/kem/hong · **Q-GRID-STATUS** align_status |
| 12 | gridPoleCount | Số cột (lưới) | Number | | int ≥0 |
| 13 | cabinetCount | Số tủ (lưới) | Number | | int ≥0 · **Q-CABINET** split |
| 14 | substationCount | Số TBA | Number | | int ≥0 |

### 3.3 Form Slideout — Z2b NLMT (cùng Slideout · optional)

Section title: **«NLMT»** · optional · **cấm** bắt buộc cả khối nếu chỉ lưới (**Q-SOLAR-REQ** optional)

| # | uiField | Label VN | Control | Required | Notes |
|---|---------|----------|---------|----------|-------|
| 15 | solarPoleCount | Cột THGT (NLMT) | Number | | int ≥0 |
| 16 | solarControllerCount | Bộ ĐK (NLMT) | Number | | int ≥0 |
| 17 | solarPanel240Wp | Pin 240Wp (SL) | Number | | int ≥0 |
| 18 | solarLamp100W | Đèn pha 100W (SL) | Number | | int ≥0 |
| 19 | solarBattery145Ah | Acquy 145Ah (SL) | Number | | int ≥0 |
| 20 | solarCabinetCount | Tủ NLMT (SL) | Number | | int ≥0 · **split** vs cabinetCount |

### 3.4 Form Slideout — Z3 Quản lý

| # | uiField | Label VN | Control | Required | Notes |
|---|---------|----------|---------|----------|-------|
| 21 | status | Tình trạng | Dropdown | * | LOOKUP_STATIC tot/tb/kem/hong |
| — | manageUnit | ĐV QL | Text | | **GAP-CSDL-ORG-01** DEFER SearchInput P2 |
| — | notes | Ghi chú | Textarea | | trail · full row |
| — | updatedAt | Cập nhật | DateTime ro | | audit |

**Cấm** mount `detailPrimary` / `detailSpec` / `detailExtra` làm form chính.

### 3.5 controlHint map (Design chốt)

| Surface | Field | Control | catalogKind |
|---------|-------|---------|-------------|
| List B | search | SearchTextInput | — |
| List B | province | Dropdown | LOOKUP_STATIC |
| List B | status | Dropdown | LOOKUP_STATIC |
| List B | roadCode | SearchInput | road-route |
| List B | kmFrom / kmTo | Number | — |
| List B | side | Dropdown | LOOKUP_STATIC |
| Form | code | Text readonly | — |
| Form | roadCode / roadName | SearchInput | road-route |
| Form | province | Dropdown | LOOKUP_STATIC |
| Form | kmFrom / kmTo / side | Number / Dropdown | — |
| Form | gridLed600/240/150/125 | Number | — · allow_zero |
| Form | gridStatus | Dropdown | LOOKUP_STATIC · align_status |
| Form | gridPoleCount / cabinetCount / substationCount | Number | — · cabinet split |
| Form | solar* (6) | Number | — · optional |
| Form | status | Dropdown | LOOKUP_STATIC |
| Form | manageUnit | Text (P1) | — · P2 org-unit |
| Form | notes | Textarea | — |

## 4. Prototype + reviewUrl

| | |
|--|--|
| Prototype | `specs/csdl-bieu-11/ui/prototype/csdl-bieu-11-list-prototype.html` |
| **reviewUrl** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-bieu-11/ui/prototype/csdl-bieu-11-list-prototype.html` |
| README | `specs/csdl-bieu-11/ui/prototype/README.md` |
| Zones covered | DES-GRID-A · B · B-FILTER · C · D · Z (Slideout 2col · 2 section lưới+NLMT) · LeaveConfirm · Delete confirm · peer toolbar |
| Sample rows | synthetic UI only · **cấm** demo-json SSOT |

## 5. API bind (Design cite · SA typed)

| Op | Path |
|----|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=lighting-systems` |
| Detail | `GET …/csdl-records/{id}` |
| Create/Update | `POST` / `PUT` body `resource=lighting-systems` + typed 24 |
| Delete | soft `DELETE` |
| road-route | `GET /integration/road-routes/search` |

**Cấm** ERP.* · invent `api/v1/infra/*` · invent `api/v1/so-ts/*`.

## 6. DoD / design_confirm

| Check | Result |
|-------|--------|
| Control = controlHint (24 typed · 2 section lưới+NLMT) | PASS |
| Kind B A–D+F · Kind D Slideout 2col · filter-bar hard | PASS |
| reviewUrl browser-openable prototype | PASS |
| Grid AC YES · Leave YES · Report N/A | PASS |
| design_confirm (autoApprove ON) | **approve** |
| ui_repo_confirm / be_repo_confirm | **approve** |
| compact ≤5KB · zone ids · reviewUrl · **cấm** paste HTML | PASS |
| **Cấm** e2e / start:std / yarn build / re-scan demo | PASS |

## 7. Handoff next

| Role | Need |
|------|------|
| **SA** | Schema_CsdlBieu11 · typed DTO/UiSchema `lighting-systems` · GridLed*/Solar* · **cấm** infra |
| TL/Dev | Wire controlHint · alias `/csdl-bieu-11` · peer toolbar · **cấm** đoán Text vs SearchInput · **cấm** detail* |
| QA | e2e queued `/agent-qa*` only |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.29.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHashPrior | `sha256:7980db07b4712336ab0b675fa89feaab75c67fdaef3b54fe94647ab9ec1863d8` |
| headerFingerprintPrior | `sha256:b37759a9224c09c7c63bc81583b4a9bcbca02e74cba8b63579819e90d57f1d1a` |
| generatedAt | 2026-09-05T12:25:00.000Z |
| versionGate | ok |
| taskId | task_94e69c1a |
| packKind | list |
| changeScope | new_page |
| design_confirm | approve |

---
<!-- Version meta: skillId=agent-design skillVersion=2026.08.29.03 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok design_confirm=approve taskId=task_94e69c1a -->
