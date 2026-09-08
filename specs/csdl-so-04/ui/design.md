# Design — csdl-so-04 (Sổ 04 — Tổng hợp đếm xe · new_page)

| Field | Value |
|-------|-------|
| feature | `csdl-so-04` |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** catalog A–D+F+H + **D** Slideout Z1–Z3 · count matrix 16 class (**không** journal) |
| status | `confirmed` |
| design_confirm | **approve** (`autoApprove=ON` · `task_e5edcfa3`) |
| changeScope | `new_page` |
| packKind | `list` |
| gap | `new_page` · GAP-SO04-TYPED-01 · SPLIT-01 · ROUTE-01 · FORMNO-01 · STATION-01 · METHOD-01 · ROW-01 · ROAD-01 · PROV-01 · CUC-03 · CUC-07 · CUC-11 · RPT-SRC |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `ui_repo_confirm` **locked** (PO) |
| mfeStdRoute | `/csdl-so-04` |
| mfeStdUrl | `http://localhost:9301/csdl-so-04` |
| peerStdUrl | `http://localhost:9301/so-ts/csdl-so-sach?resource=traffic-counts` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-04/ui/prototype/csdl-so-04-list-prototype.html` |
| prototype | `specs/csdl-so-04/ui/prototype/csdl-so-04-list-prototype.html` |
| real_view_parity | `v1` |
| shared_grid_example | `v1` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · **`api/v1/asset/csdl-records?resource=traffic-counts`** · **cấm ERP.*** |
| resource | `traffic-counts` (**giữ** key · drop TNGT title/fields) |
| formNo | `04` · title VN **Sổ 04 — Tổng hợp đếm xe** |
| IdCode | `SO-yyyyMMdd-nnnn` · **cấm** Guid |
| prior · data_analy | `confirmed`/`done` · hash skip · contentHash `sha256:f4b9c168d339477350ba42a03f7ec00e774b38da0ecc6037de8950d9f25e944d` · headerFingerprint `sha256:202e875ac43d1dd97b8ac8f32d3528ac827776078cde980e7bb6ca9634aff7e2` · **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| prior · po | `confirmed` · `po/requirement.md` · `task_8789a3fb` · Q-* resolved |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e/start:std ở Design |
| updatedAt | `2026-09-06T05:20:00.000Z` |
| taskId | `task_e5edcfa3` · analy `task_85934368` · po `task_8789a3fb` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |

**Cấm:** Dev/BE · re-scan DEM · invent `api/v1/so-ts/*` / `api/v1/infra/*` / runtime `/api/v1/traffic-counts` · ERP.* · Guid IdCode · form chỉ `detail*`/`col1–3` · gộp TNGT · invent map canvas · yarn build/e2e/start:std · start role khác (**GAP-PKT-ROLE-01**).

## 0. Context & inventory (hash skip — **cấm** re-scan demo)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/csdl-so-04.md` | feature CTX |
| DA-01 | `specs/_data-analy/features/csdl-so-04-control-hint.md` | controlHint SSOT |
| DA-02 | `specs/_data-analy/features/csdl-so-04-real-data.md` | real-data §A–§F |
| PO-01 | `specs/csdl-so-04/po/requirement.md` | Grid AC · Form AC · Leave · Q chốt |
| CLUSTER | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` § T-SO-04 · GAP-CSDL-CUC-07 | typed + split |
| DEM-01 | `…/csdl-so-sach-demo.html` → `asset/csdl-so-sach.html` | zone chrome only · **cấm** SSOT data |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · csdl-so-sach |
| MFE hub | `CsdlSoSachPage` · form `CsdlFormSlideout` | store `traffic-counts` · drop TNGT label |
| MFE svc | `services/csdlSoSach/endpoint.ts` | `BASE=/asset/csdl-records` · **reuse** |

Persona: Khu QLĐB · Hạt trưởng · NV đếm xe / IoT · Nhà thầu BDTX · Báo cáo `rpt-dem-xe` (RO peer).

**≠** Sổ TS `so-ts-count-station` (LOOKUP / deep-link only) · ≠ hub Kind G shell · ≠ `csdl-so-05` (TNGT).

### § Delta Current vs New (`new_page`)

| Area | Current (live) | New (this Design) | GAP |
|------|----------------|-------------------|-----|
| Title / split | «đếm xe (+ TNGT)» | **«Sổ 04 — Tổng hợp đếm xe»** · **cấm** TNGT fields | GAP-SO04-SPLIT-01 · CUC-07 |
| Entry | Hub-only QS | Alias **`/csdl-so-04`** + hub | GAP-SO04-ROUTE-01 |
| formNo | Live `4` · title lẫn TNGT | Cục **`04`** · giữ key | GAP-SO04-FORMNO-01 |
| Form | 3 ô `detail*` + Col1–3 | Typed T-SO-04 + **16 class** + `totalCars` | GAP-SO04-TYPED-01 · ROW-01 · CUC-03 |
| Trạm | Free text | SearchInput `count-station` | GAP-SO04-STATION-01 |
| Đường | Text free | SearchInput `road-route` | GAP-CSDL-ROAD-01 |
| `countMethod` | — | Dropdown `manual\|auto` | GAP-SO04-METHOD-01 |
| `province` | Select 5 tỉnh | LOOKUP_STATIC P1 keep | GAP-CSDL-PROV-01 |
| `contractor` | Text | **Text P1** · org SearchInput **DEFER P2** | GAP-CSDL-ORG-01 |
| `status` | generic | `draft\|active\|closed` | Q-STATUS |
| Unique | — | hard 422 station+year+quarter | Q-UNIQUE |
| Class labels | — | interim «Hạng xe {nn}» · Excel overlay khi có cite | Q-CLASS-LABEL |
| `totalCars` | — | **readonly derived** = sum(class*) | Q-TOTAL |
| Import/Export | stub | **OUT pack** stub only | GAP-CSDL-XLS-01 |
| Report | flat Col1–3 | Typed 16 class READY | GAP-RPT-SRC-CSDL-01 |
| Map | — | **none** | — |

**Không đổi:** API prefix · Kind B A–D · Kind D Slideout · IdCode `SO-` · pagination 50/100/200/500 · **cấm** ERP.*.

### Class label overlay (Q-CLASS-LABEL)

| | |
|--|--|
| P1 keys | `class01`…`class16` · **cấm** đổi/gộp/bớt |
| P1 UI label | **«Hạng xe {nn}»** (interim TCVN 14182 PL B slot) |
| Excel overlay | **pending cite** — không có Excel/Word Cục trong productRoot lúc Design · khi file có → overlay 1:1 cite path trong design.md · lệch số cột → AskQuestion `version_mismatch_action` |
| Cấm | invent tên không cite |

## 1. Kind + UI pattern (HARD)

| | |
|--|--|
| Feature Kind | **B+D** |
| List pattern | **1×** `LinPageLayout` kind=`catalog` — **cấm** nested `CatalogListShell` |
| Grid | `LinCatalogDataGrid` · kéo cột **default ON** |
| Filter | **`LinErpListFilterBar`** **1 hàng** · SearchText + 🔍 cụm phải — **cấm** nút Tìm riêng · **cấm** wrap 2 hàng default desktop (**filter-bar-layout-hard**) |
| Footer | `LinCatalogListPagination` **50 / 100 / 200 / 500** |
| Form pattern | **Slideout** · `formSurface: slideout` · **`data-form-cols="2"`** · `slideout_layout: footer_actions_only` |
| Count matrix | Z2 section · 16 `Number` + `totalCars` readonly · **cấm** journal add-row · **cấm** Col1–3 |
| Zone F | `LinCatalogUiSchemaEditorModal` catalogKind `traffic-counts` |
| Zone H | `LinCatalogHistoryModal` — **cấm** invent History API |
| Leave | Dirty → **`LeaveConfirmModal`** — **cấm** native alert/confirm |
| Typography | label **13** · input D14/M16 (**GAP-TYP-01**) |
| View mode | `readOnly` — **cấm** Input disabled xám toàn form |
| Map | `map: none` — deep-link GIS only |
| Skip chrome | GOVOne · demo sidebar/note |
| DES-RPT | **N/A** (list pack · report `rpt-dem-xe` RO peer · GAP-RPT-SRC-CSDL-01 form READY) |

### Routes (Design chốt)

| Surface | Path |
|---------|------|
| List (alias) | `/csdl-so-04` |
| Hub entry | `/so-ts/csdl-so-sach?resource=traffic-counts` |
| Form | overlay Slideout · QS `?form=` optional |
| Peer LOOKUP | deep-link Sổ TS trạm đếm · **cấm** merge form |
| Peer report | `rpt-dem-xe` read-only · **cấm** CRUD |
| Map | deep-link GIS only · **cấm** canvas |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **DES-GRID-A…D · F · H** | Typed cols · filter HARD |
| S-HUB-ENTRY | hub card | Kind G card | title VN **không** «+ TNGT» · open-resource · **cấm** slug |
| S-FORM-CREATE | create | **DES-GRID-Z** · Z1–Z3 | footer Hủy/Lưu · leave · matrix |
| S-FORM-EDIT | edit | DES-GRID-Z | footer Hủy/Lưu |
| S-FORM-VIEW | view | DES-GRID-Z | readOnly · footer Đóng/Sửa/Copy |
| S-FORM-COPY | create | DES-GRID-Z | clear id · new code · **cấm** reuse unique station+year+quarter |
| S-ACT-DELETE | — | Confirm modal | soft delete |
| S-HIST | — | DES-GRID-H | `LinCatalogHistoryModal` |
| S-COUNT-MATRIX | — | DES-COUNT-MATRIX trong Z2 | 16 class · totalCars derived |
| S-SKIP-MAP | — | — | **Cấm** map canvas |

### Zone A — Header (DES-GRID-A)

- Back hub · title **«Sổ 04 — Tổng hợp đếm xe»** · meta `resource=traffic-counts`
- **Cấm** Thêm mới trên A · **cấm** «(+ TNGT)»

### Zone B — Toolbar + filter (DES-GRID-B · DES-GRID-B-FILTER)

**Toolbar (trái/phải):** Refresh · History · SchemaConfig · Import stub · Export stub · Delete · **Tạo mới** (primary phải).

**Filter 1 hàng (HARD):**

| key | Label | Control | catalogKind |
|-----|-------|---------|-------------|
| search | Tìm kiếm | `SearchTextInput` (+ 🔍 cụm phải) | text |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC (5 tỉnh) |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC `draft\|active\|closed` |
| roadCode | Tên đường | `SearchInput` | **road-route** |
| stationCode | Trạm đếm | `SearchInput` | **count-station** |
| year | Năm | `Integer` / `Dropdown` | — |
| quarter | Quý | `Dropdown` | LOOKUP_STATIC 1–4 |
| countMethod | Phương pháp | `Dropdown` | LOOKUP_STATIC `manual\|auto` |

Rules: search must work (mã · sổ · trạm · đường) · **cấm** nút Tìm riêng · filter đổi → `page=1` · **cấm** wrap 2 hàng default desktop.

### Zone C — Grid (DES-GRID-C)

| Col | Field | Notes |
|-----|-------|-------|
| STT | — | ổn định khi sort/kéo |
| Mã | `code` | link → View |
| Số quyển | `bookNo` | |
| Nhà thầu | `contractor` | |
| Trạm | `stationName` / `stationCode` | |
| Đường | `roadName` / `roadCode` | |
| Km | `kmFrom`–`kmTo` | |
| Năm | `year` | |
| Quý | `quarter` | 1–4 |
| Phương pháp | `countMethod` | Thủ công / Tự động |
| Tổng ôtô | `totalCars` | derived |
| ⋮ | row menu | Xem / Sửa / Copy / Xóa / Lịch sử |

Empty copy VN: **«Chưa có dữ liệu tổng hợp đếm xe»**.

### Zone D — Footer (DES-GRID-D)

`LinCatalogListPagination` **50 / 100 / 200 / 500** · đổi size → page=1.

### Form Slideout Z1–Z3 (DES-GRID-Z · DES-FORM-Z1–Z3)

| Zone | Content |
|------|---------|
| Z1 | Title mode Create/Edit/View/Copy · X đóng |
| Z2 | Header fields 2-col + **count matrix** 16 class |
| Z3 | Footer Lưu/Hủy (View: Đóng/Sửa/Copy) · leave-confirm dirty |

#### Control-map — form header (Design chốt = controlHint)

| key | Label | Control | req |
|-----|-------|---------|-----|
| code | Mã | Text **readonly** | auto `SO-` |
| bookNo | Số quyển / sổ | Text | * |
| contractor | Nhà thầu | Text (P1) | * |
| stationCode | Mã trạm | SearchInput `count-station` | * |
| stationName | Tên trạm | Text display (bind) | * |
| roadCode | Mã đường | SearchInput `road-route` | * |
| roadName | Tên đường | Text display (bind) | * |
| kmFrom | Lý trình từ | Number | * |
| kmTo | Lý trình đến | Number | |
| year | Năm | Integer | * |
| quarter | Quý | Dropdown 1–4 | * |
| countMethod | Thủ công / tự động | Dropdown `manual\|auto` | * |
| province | Tỉnh | Dropdown LOOKUP_STATIC | * |
| status | Tình trạng | Dropdown `draft\|active\|closed` | |
| notes | Ghi chú sổ | Textarea | |

#### Control-map — count matrix (DES-COUNT-MATRIX · 1 row / trạm / quý)

| key | Label | Control | req |
|-----|-------|---------|-----|
| class01…class16 | «Hạng xe {nn}» (interim) | `Number` integer ≥0 | * |
| totalCars | Tổng ôtô | `Number` **readonly derived** = sum(class*) | * (derived) |

**Cấm:** journal add-row · chỉ Col1–3 · TNGT / điểm đen / AccidentSummary fields · Guid IdCode.

Required form DoD: bookNo · contractor · stationCode · roadCode · kmFrom · year · quarter · countMethod · province · class01…class16 · totalCars derived · code readonly.

## 3. Grid AC (Design mirror PO)

| AC | Assert |
|----|--------|
| G-01 | `LinCatalogDataGrid` · empty không crash |
| G-02 | SearchTextInput lọc mã/sổ/trạm/đường · **không** nút Tìm |
| G-03 | Filter province/status/road/station/year/quarter/countMethod → refetch · page=1 |
| G-04 | Sort/kéo cột ON · STT ổn định |
| G-05 | Row menu Xem/Sửa/Copy/Xóa/Lịch sử |
| G-06 | Pagination 50/100/200/500 · size → page=1 |
| G-07 | Tạo mới → Slideout Create · Lưu → row mới |
| G-08 | Sửa → PUT · grid refresh · toast |
| G-09 | Copy → prefill · code mới · **cấm** reuse unique |
| G-10 | Soft-delete → row khỏi list · toast OK |
| G-11 | Empty «Chưa có dữ liệu tổng hợp đếm xe» |
| G-12 | 422 thiếu resource / duplicate unique → toast · không blank |
| G-13 | Hub card title **không** «(+ TNGT)» · key vẫn `traffic-counts` |

## 4. Form AC (mirror PO F-01…F-15)

| AC | Assert |
|----|--------|
| F-01 | Z1 title C/E/V/Copy · Z3 Lưu/Hủy |
| F-02…F-09 | Header required + SearchInput station/road · countMethod · status |
| F-10 | class01…16 Number ≥0 · interim «Hạng xe {nn}» |
| F-11 | totalCars readonly derived sync |
| F-12 | **1 row / trạm / quý** · **cấm** journal · **cấm** TNGT |
| F-13 | View = readOnly · **cấm** disabled xám |
| F-14 | Validation / unique fail → toast · **không** đóng |
| F-15 | contractor Text P1 |

## 5. Leave / dirty / error

| Case | UX |
|------|-----|
| Dirty + Hủy/X/Esc/route | `LeaveConfirmModal` |
| View mode | Không leave-confirm |
| Save OK | Đóng · refresh · toast |
| Validation fail | Ở lại · toast field |
| Unique 422 | toast VN · ở lại |
| 404 detail | Đóng slideout · toast |

## 6. API / bind (cite real-data · SA widen)

| Op | Path |
|----|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=traffic-counts` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` + typed body |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE …/{id}` soft |
| road-route | `GET /integration/road-routes/search` |
| count-station | peer Asset `COUNT_STATION` / integration search |

FE: reuse `BASE=/asset/csdl-records`. SA: `Schema_CsdlSo04` · typed DTO/UiSchema · unique station+year+quarter · totalCars derived.

## 7. Prototype + reviewUrl

| | |
|--|--|
| HTML | `specs/csdl-so-04/ui/prototype/csdl-so-04-list-prototype.html` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-04/ui/prototype/csdl-so-04-list-prototype.html` |
| Zones tagged | `data-des-id` DES-GRID-A/B/B-FILTER/C/D/Z · DES-FORM-Z1–Z3 · DES-COUNT-MATRIX · leave |
| Sample rows | **synthetic UI chrome only** · **cấm** demo-json SSOT |

## 8. design_confirm

| | |
|--|--|
| Gate | `design_confirm` |
| Result | **approve** |
| Reason | autoApprove=ON · DoR PASS · control-map = controlHint · prototype + reviewUrl · filter-bar HARD · typed matrix · Q-* PO resolved · hash skip · title không TNGT |
| Board | skipped (autoApprove) |

## 9. Out of scope / Cấm

- ERP.* / Domains/Master / invent infra / so-ts API / runtime `/api/v1/traffic-counts`
- Report pack CRUD / Kind F map canvas / Excel full wizard
- Guid IdCode · merge Sổ TS · parent JSON-only DoD
- Demo/localStorage SSOT · re-scan demo (**GAP-DES-DEMO-RESCAN-01**)
- yarn build / e2e / start:std ở Design
- contractor SearchInput P1 (DEFER P2) · master province P1
- TNGT / điểm đen / AccidentSummary trên so-04 · invent class label không cite

## 10. Handoff

| Next | Need |
|------|------|
| **SA** | Schema_CsdlSo04 · typed DTO/UiSchema · unique station+year+quarter · totalCars derived · widen DTO |
| TL/Dev | alias page `/csdl-so-04` + typed form · hub title drop TNGT · reuse BASE |
| QA | Grid+form AC G-01…G-13 · F-01…F-15 · e2e queued `/agent-qa*` only |

## DoR design

- [x] Kind B+D · zones A–D+F+H · Slideout Z1–Z3 · count matrix
- [x] Control-map chốt = controlHint (filters · header · matrix)
- [x] Filter-bar HARD · Grid AC G-01…G-13 · Form AC F-01…F-15
- [x] Prototype HTML + browser-openable reviewUrl
- [x] design_confirm **approve** (autoApprove)
- [x] hash skip · **cấm** re-scan demo
- [x] handoff compact ≤5KB
- [x] **cấm** Dev/BE · e2e · start:std · yarn build
