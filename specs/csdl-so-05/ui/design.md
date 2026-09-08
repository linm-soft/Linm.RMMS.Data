# Design — csdl-so-05 (Sổ 05 — TNGT + điểm đen · new_page)

| Field | Value |
|-------|-------|
| feature | `csdl-so-05` |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** catalog A–D+F+H + **D** Slideout Z1–Z3 · **3 grid** C.1 / C.2 / BS (add-row) |
| status | `confirmed` |
| design_confirm | **approve** (`autoApprove=ON` · `task_0332f55e`) |
| changeScope | `new_page` |
| packKind | `list` |
| gap | `new_page` · GAP-SO05-RES/SPLIT/TYPED/C1/C2/BS/ROUTE/FORMNO · ROAD · PROV · CUC-03/07/11 · RPT-SRC |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `ui_repo_confirm` **locked** (PO) |
| mfeStdRoute | `/csdl-so-05` |
| mfeStdUrl | `http://localhost:9301/csdl-so-05` |
| peerStdUrl | `http://localhost:9301/so-ts/csdl-so-sach?resource=accident-summaries` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-05/ui/prototype/csdl-so-05-list-prototype.html` |
| prototype | `specs/csdl-so-05/ui/prototype/csdl-so-05-list-prototype.html` |
| real_view_parity | `v1` |
| shared_grid_example | `v1` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · **`api/v1/asset/csdl-records?resource=accident-summaries`** · **cấm ERP.*** |
| resource | `accident-summaries` (**NEW**) |
| formNo | `05` · title VN **Sổ 05 — TNGT + điểm đen** |
| IdCode | `SO-yyyyMMdd-nnnn` · **cấm** Guid |
| prior · data_analy | `confirmed`/`done` · hash skip · contentHash `sha256:ccb6cccc2010c67b8cd3b02484f6a424d09f5a7e0494ad59b5b71ea6ff15f8ce` · headerFingerprint `sha256:73a54e566bbad59af489c97e74cad13d131c338daa386a531e535704e374d14a` · **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| prior · po | `confirmed` · `po/requirement.md` · `task_2cd724ab` · Q-* resolved |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e/start:std ở Design |
| updatedAt | `2026-09-06T05:55:00.000Z` |
| taskId | `task_0332f55e` · analy `task_6deceabd` · po `task_2cd724ab` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |

**Cấm:** Dev/BE · re-scan DEM · invent `api/v1/so-ts/*` / `api/v1/infra/*` / runtime `/api/v1/accident-summaries` · ERP.* · Guid IdCode · form chỉ `detail*`/`col1–3` · gộp đếm xe 16 hạng · invent map canvas · yarn build/e2e/start:std · start role khác (**GAP-PKT-ROLE-01**).

## 0. Context & inventory (hash skip — **cấm** re-scan demo)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/csdl-so-05.md` | feature CTX |
| DA-01 | `specs/_data-analy/features/csdl-so-05-control-hint.md` | controlHint SSOT |
| DA-02 | `specs/_data-analy/features/csdl-so-05-real-data.md` | real-data §A–§F |
| PO-01 | `specs/csdl-so-05/po/requirement.md` | Grid AC · Form AC · Leave · Q chốt |
| CLUSTER | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` § T-SO-05 · GAP-CSDL-CUC-07 | typed + split |
| DEM-01 | `…/csdl-so-sach-demo.html` → `asset/csdl-so-sach.html` | zone chrome only · **cấm** SSOT data |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · csdl-so-sach |
| MFE hub | `CsdlSoSachPage` · form `CsdlFormSlideout` | **NEW** card `accident-summaries` |
| MFE svc | `services/csdlSoSach/endpoint.ts` | `BASE=/asset/csdl-records` · **reuse** |

Persona: Khu QLĐB · Hạt trưởng · NV ATGT / TNGT · Nhà thầu BDTX · Báo cáo `rpt-tngt` (RO peer).

**≠** `csdl-so-04` (`traffic-counts` · đếm xe) · ≠ Sổ TS · ≠ hub Kind G shell.

### § Delta Current vs New (`new_page`)

| Area | Current (live) | New (this Design) | GAP |
|------|----------------|-------------------|-----|
| Resource / card | **MISSING** · TNGT dính title Sổ 4 | **NEW** `accident-summaries` · formNo=`05` · title «TNGT + điểm đen» | GAP-SO05-RES-01 · FORMNO-01 |
| Split | Live «(+ TNGT)» trên so-04 | Ship so-05 độc lập · CUC-07 khi cả 2 PASS | GAP-SO05-SPLIT-01 · CUC-07 |
| Entry | Hub-only (chưa) | Alias **`/csdl-so-05`** + hub QS | GAP-SO05-ROUTE-01 |
| Form | generic detail* / Col1–3 | Typed header + **3 grid** C.1 / C.2 / BS | GAP-SO05-TYPED/C1/C2/BS · CUC-03 |
| Đường | Text free | SearchInput `road-route` | GAP-CSDL-ROAD-01 |
| `province` | Select 5 tỉnh | LOOKUP_STATIC P1 keep | GAP-CSDL-PROV-01 |
| `contractor` | Text | **Text P1** · org SearchInput **DEFER P2** | GAP-CSDL-ORG-01 |
| `status` | generic | `draft\|active\|closed` | Q-STATUS |
| Period | — | month 1–12 · half 1\|2 · year=year sync | Q-PERIOD |
| Cause C.1 | — | 3× Number ≥0 (đường/người/PT) + remarks | Q-CAUSE |
| Damage | — | Number ≥0 · overlay «triệu đồng» | Q-DAMAGE |
| BS assess | — | `blackspot\|potential\|under_watch` | Q-BS-ASSESS |
| Grid model | — | 1 header + `entriesC1`/`entriesC2`/`entriesBlackSpot` | Q-GRID-MODEL |
| Import/Export | stub | **OUT pack** stub only | GAP-CSDL-XLS-01 |
| Report | flat | Typed = source `rpt-tngt` READY | GAP-RPT-SRC-CSDL-01 |
| Map | — | **none** | — |

**Không đổi:** API prefix · Kind B A–D · Kind D Slideout · IdCode `SO-` · pagination 50/100/200/500 · **cấm** ERP.*.

### PO decisions locked (Design)

| Q | Design lock |
|---|-------------|
| Q-PERIOD | `periodType` month/half/year · `periodValue` 1–12 / 1\|2 / =year |
| Q-CAUSE | `c1CauseRoad|Person|Vehicle` = Number ≥0 count |
| Q-DAMAGE | `c1/c2Damage*` Number ≥0 · UI overlay «triệu đồng» |
| Q-BS-ASSESS | Dropdown `blackspot\|potential\|under_watch` |
| Q-GRID-MODEL | 1 book + 3 collections · tabs UI |
| Q-SPLIT | so-05 độc lập · không chờ so-04 title drop để ship |
| Q-PROV | keep_static P1 |
| Q-ORG | Text P1 · SearchInput org-unit **DEFER P2** |
| Q-STATUS | `draft\|active\|closed` |
| Q-RPT | READY sau typed form PASS · **cấm** CRUD report |

## 1. Kind + UI pattern (HARD)

| | |
|--|--|
| Feature Kind | **B+D** |
| List pattern | **1×** `LinPageLayout` kind=`catalog` — **cấm** nested `CatalogListShell` |
| Grid | `LinCatalogDataGrid` · kéo cột **default ON** |
| Filter | **`LinErpListFilterBar`** **1 hàng** · SearchText + 🔍 cụm phải — **cấm** nút Tìm riêng · **cấm** wrap 2 hàng default desktop (**filter-bar-layout-hard**) |
| Footer | `LinCatalogListPagination` **50 / 100 / 200 / 500** |
| Form pattern | **Slideout** · `formSurface: slideout` · **`data-form-cols="2"`** · `slideout_layout: footer_actions_only` |
| Tables | Z2 **tabs** · DES-TAB-C1 · DES-TAB-C2 · DES-TAB-BS · add-row per grid · **cấm** Col1–3 only · **cấm** 16 hạng xe |
| Zone F | `LinCatalogUiSchemaEditorModal` catalogKind `accident-summaries` |
| Zone H | `LinCatalogHistoryModal` — **cấm** invent History API |
| Leave | Dirty → **`LeaveConfirmModal`** — **cấm** native alert/confirm |
| Typography | label **13** · input D14/M16 (**GAP-TYP-01**) |
| View mode | `readOnly` — **cấm** Input disabled xám toàn form |
| Map | `map: none` — deep-link GIS only |
| Skip chrome | GOVOne · demo sidebar/note |
| DES-RPT | **N/A** (list pack · report `rpt-tngt` RO peer · GAP-RPT-SRC-CSDL-01 form READY) |

### Routes (Design chốt)

| Surface | Path |
|---------|------|
| List (alias) | `/csdl-so-05` |
| Hub entry | `/so-ts/csdl-so-sach?resource=accident-summaries` |
| Form | overlay Slideout · QS `?form=` optional |
| Peer LOOKUP | deep-link `road-route` · **cấm** merge so-04 / Sổ TS |
| Peer report | `rpt-tngt` read-only · **cấm** CRUD |
| Map | deep-link GIS only · **cấm** canvas |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **DES-GRID-A…D · F · H** | Typed cols · filter HARD |
| S-HUB-ENTRY | hub card | Kind G card | title VN «Sổ 05 — TNGT + điểm đen» · **cấm** slug · **cấm** «(+ đếm xe)» |
| S-FORM-CREATE | create | **DES-GRID-Z** · Z1–Z3 · tabs 3 grid | footer Hủy/Lưu · leave |
| S-FORM-EDIT | edit | DES-GRID-Z | footer Hủy/Lưu |
| S-FORM-VIEW | view | DES-GRID-Z | readOnly · footer Đóng/Sửa/Copy |
| S-FORM-COPY | create | DES-GRID-Z | clear id · new code |
| S-ACT-DELETE | — | Confirm modal | soft delete |
| S-HIST | — | DES-GRID-H | `LinCatalogHistoryModal` |
| S-TAB-C1 | — | DES-TAB-C1 | C.1 tháng · add-row |
| S-TAB-C2 | — | DES-TAB-C2 | C.2 6 tháng/năm · add-row |
| S-TAB-BS | — | DES-TAB-BS | Điểm đen / tiềm ẩn · add-row |
| S-SKIP-MAP | — | — | **Cấm** map canvas |

### Zone A — Header (DES-GRID-A)

- Back hub · title **«Sổ 05 — TNGT + điểm đen»** · meta `resource=accident-summaries`
- **Cấm** Thêm mới trên A · **cấm** «(+ đếm xe)»

### Zone B — Toolbar + filter (DES-GRID-B · DES-GRID-B-FILTER)

**Toolbar:** Refresh · History · SchemaConfig · Import stub · Export stub · Delete · **Tạo mới** (primary phải).

**Filter 1 hàng (HARD):**

| key | Label | Control | catalogKind |
|-----|-------|---------|-------------|
| search | Tìm kiếm | `SearchTextInput` (+ 🔍 cụm phải) | text |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC (5 tỉnh) |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC `draft\|active\|closed` |
| roadCode | Tên đường | `SearchInput` | **road-route** |
| year | Năm | `Integer` / `Dropdown` | — |
| periodType | Loại kỳ | `Dropdown` | LOOKUP_STATIC `month\|half\|year` |
| tableKind | Bảng | `Dropdown` | LOOKUP_STATIC `c1\|c2\|blackspot` (+ all) |

Rules: search must work (mã · sổ · đường · vị trí) · **cấm** nút Tìm riêng · filter đổi → `page=1` · **cấm** wrap 2 hàng default desktop.

### Zone C — Grid (DES-GRID-C)

| Col | Field | Notes |
|-----|-------|-------|
| STT | — | ổn định khi sort/kéo |
| Mã | `code` | link → View |
| Số quyển | `bookNo` | |
| Nhà thầu | `contractor` | |
| Đường | `roadName` / `roadCode` | |
| Km | `kmFrom`–`kmTo` | |
| Năm | `year` | |
| Kỳ | `periodType` + `periodValue` | display |
| Bảng | `tableKind` | c1/c2/blackspot |
| Số vụ | `accidentCount` | aggregate / primary |
| Chết | `fatalities` | |
| Thương | `injuries` | |
| ⋮ | row menu | Xem / Sửa / Copy / Xóa / Lịch sử |

Empty copy VN: **«Chưa có dữ liệu TNGT / điểm đen»**.

### Zone D — Footer (DES-GRID-D)

`LinCatalogListPagination` **50 / 100 / 200 / 500** · đổi size → page=1.

### Form Slideout Z1–Z3 (DES-GRID-Z · DES-FORM-Z1–Z3)

| Zone | Content |
|------|---------|
| Z1 | Title mode Create/Edit/View/Copy · X đóng |
| Z2 | Header fields 2-col + **tabs** C.1 / C.2 / Điểm đen |
| Z3 | Footer Lưu/Hủy (View: Đóng/Sửa/Copy) · leave-confirm dirty |

#### Control-map — form header (Design chốt = controlHint)

| key | Label | Control | req |
|-----|-------|---------|-----|
| code | Mã | Text **readonly** | auto `SO-` |
| bookNo | Số quyển / sổ | Text | * |
| contractor | Nhà thầu | Text (P1) | * |
| roadCode | Mã đường | SearchInput `road-route` | * |
| roadName | Tên đường | Text display (bind) | * |
| kmFrom | Lý trình từ | Number | * |
| kmTo | Lý trình đến | Number | |
| province | Tỉnh | Dropdown LOOKUP_STATIC | * |
| year | Năm | Integer | * |
| periodType | Loại kỳ | Dropdown `month\|half\|year` | * |
| periodValue | Kỳ | Dropdown/Integer (sync Q-PERIOD) | * |
| status | Tình trạng | Dropdown `draft\|active\|closed` | |
| notes | Ghi chú sổ | Textarea | |
| tableKind | Bảng đang nhập | **tabs** UI (c1/c2/blackspot) | * |

#### Control-map — C.1 tháng (DES-TAB-C1 · add-row)

| key | Label | Control | req |
|-----|-------|---------|-----|
| c1RoadName | Đường / đoạn | Text | * |
| c1Location | Vị trí / Km | Text | * |
| c1AccidentCount | Số vụ | Number ≥0 | * |
| c1CauseRoad | Nguyên nhân đường | Number ≥0 | |
| c1CausePerson | Nguyên nhân người | Number ≥0 | |
| c1CauseVehicle | Nguyên nhân PT | Number ≥0 | |
| c1Fatalities | Chết | Number ≥0 | * |
| c1Injuries | Thương | Number ≥0 | * |
| c1DamageInfra | Thiệt hại cầu-đường | Number ≥0 · overlay «triệu đồng» | |
| c1DamageVehicle | Thiệt hại PT | Number ≥0 · overlay «triệu đồng» | |
| c1Remarks | Nhận xét | Textarea | |

#### Control-map — C.2 6 tháng / năm (DES-TAB-C2 · add-row)

| key | Label | Control | req |
|-----|-------|---------|-----|
| c2RoadName | Đường / đoạn | Text | * |
| c2AccidentCount | Số vụ | Number ≥0 | * |
| c2Fatalities | Chết | Number ≥0 | * |
| c2Injuries | Thương | Number ≥0 | * |
| c2DamageInfra | Thiệt hại cầu-đường | Number ≥0 · overlay «triệu đồng» | |
| c2DamageVehicle | Thiệt hại PT | Number ≥0 · overlay «triệu đồng» | |
| c2Remarks | Nhận xét | Textarea | |

#### Control-map — Điểm đen / tiềm ẩn (DES-TAB-BS · add-row)

| key | Label | Control | req |
|-----|-------|---------|-----|
| bsLocation | Vị trí điểm đen | Text | * |
| bsKmFrom | Km từ | Number | * |
| bsKmTo | Km đến | Number | |
| bsAccident12m | Số vụ 12 tháng | Number ≥0 | * |
| bsFatalities12m | Chết 12 tháng | Number ≥0 | * |
| bsInjuries12m | Thương 12 tháng | Number ≥0 | * |
| bsAssessment | Đánh giá | Dropdown `blackspot\|potential\|under_watch` | * |
| bsStateFoundation | Hiện trạng nền | Textarea | |
| bsStateGeometry | Hiện trạng hình học | Textarea | |
| bsStateAtgt | Hiện trạng ATGT | Textarea | |
| bsPreliminaryAction | Xử lý sơ bộ | Textarea | |
| bsMeasures | Biện pháp | Textarea | * |
| bsFollowUp | Theo dõi | Textarea | |

**Cấm:** chỉ Col1–3 · 16 hạng xe · Guid IdCode · merge so-04 form.

Required form DoD: bookNo · contractor · roadCode · kmFrom · province · year · periodType · periodValue · ≥1 line trên tab đang nhập (theo tableKind) · code readonly.

## 3. Grid AC (Design mirror PO)

| AC | Assert |
|----|--------|
| G-01 | `LinCatalogDataGrid` · empty không crash |
| G-02 | SearchTextInput lọc mã/sổ/đường/vị trí · **không** nút Tìm |
| G-03 | Filter province/status/road/year/periodType/tableKind → refetch · page=1 |
| G-04 | Sort/kéo cột ON · STT ổn định |
| G-05 | Row menu Xem/Sửa/Copy/Xóa/Lịch sử |
| G-06 | Pagination 50/100/200/500 · size → page=1 |
| G-07 | Tạo mới → Slideout Create · Lưu → row mới |
| G-08 | Sửa → PUT · grid refresh · toast |
| G-09 | Copy → prefill · code mới |
| G-10 | Soft-delete → row khỏi list · toast OK |
| G-11 | Empty «Chưa có dữ liệu TNGT / điểm đen» |
| G-12 | 422 thiếu resource → toast · không blank |
| G-13 | Hub card **NEW** title «Sổ 05 — TNGT + điểm đen» · key `accident-summaries` |

## 4. Form AC (mirror PO)

| AC | Assert |
|----|--------|
| F-01 | Z1 title C/E/V/Copy · Z3 Lưu/Hủy |
| F-02…F-08 | Header required + SearchInput road · period sync · status |
| F-09 | Tabs C.1 / C.2 / BS · add-row per grid |
| F-10 | C.1 cause 3× Number · damage Number + overlay triệu đồng |
| F-11 | C.2 metrics · kỳ half/year |
| F-12 | BS assess enum · measures required |
| F-13 | View = readOnly · **cấm** disabled xám |
| F-14 | Validation fail → toast · **không** đóng |
| F-15 | contractor Text P1 · **cấm** 16 hạng xe · **cấm** Col1–3 only |

## 5. Leave / dirty / error

| Case | UX |
|------|-----|
| Dirty + Hủy/X/Esc/route | `LeaveConfirmModal` |
| View mode | Không leave-confirm |
| Save OK | Đóng · refresh · toast |
| Validation fail | Ở lại · toast field |
| 404 detail | Đóng slideout · toast |
| 422 thiếu resource | toast · không crash |

## 6. API / bind (cite real-data · SA widen)

| Op | Path |
|----|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=accident-summaries` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` + typed body |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE …/{id}` soft |
| road-route | `GET /integration/road-routes/search` |

FE: reuse `BASE=/asset/csdl-records`. SA: `Schema_CsdlSo05` · typed DTO/UiSchema · 3 entry collections · enums period/BS/status.

## 7. Prototype + reviewUrl

| | |
|--|--|
| HTML | `specs/csdl-so-05/ui/prototype/csdl-so-05-list-prototype.html` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-05/ui/prototype/csdl-so-05-list-prototype.html` |
| Zones tagged | `data-des-id` DES-GRID-A/B/B-FILTER/C/D/Z · DES-FORM-Z1–Z3 · DES-TAB-C1/C2/BS · leave |
| Sample rows | **synthetic UI chrome only** · **cấm** demo-json SSOT |

## 8. design_confirm

| | |
|--|--|
| Gate | `design_confirm` |
| Result | **approve** |
| Reason | autoApprove=ON · DoR PASS · control-map = controlHint · prototype + reviewUrl · filter-bar HARD · 3 grid tabs · Q-* PO resolved · hash skip · NEW resource |
| Board | skipped (autoApprove) |

## 9. Out of scope / Cấm

- ERP.* / Domains/Master / invent infra / so-ts API / runtime `/api/v1/accident-summaries`
- Report pack CRUD / Kind F map canvas / Excel full wizard
- Guid IdCode · merge Sổ TS / so-04 đếm xe · parent JSON-only DoD
- Demo/localStorage SSOT · re-scan demo (**GAP-DES-DEMO-RESCAN-01**)
- yarn build / e2e / start:std ở Design
- contractor SearchInput P1 (DEFER P2) · master province P1
- 16 hạng xe / TrafficCountSummary trên so-05

## 10. Handoff

| Next | Need |
|------|------|
| **SA** | Schema_CsdlSo05 · typed DTO/UiSchema · 3 collections · enums period/BS/status |
| TL/Dev | alias page `/csdl-so-05` + hub card NEW · typed form 3 tabs · reuse BASE |
| QA | Grid+form AC G-01…G-13 · F-01…F-15 · e2e queued `/agent-qa*` only |

## DoR design

- [x] Kind B+D · zones A–D+F+H · Slideout Z1–Z3 · 3 grid tabs
- [x] Control-map chốt = controlHint (filters · header · C.1/C.2/BS)
- [x] Filter-bar HARD · Grid AC G-01…G-13 · Form AC F-01…F-15
- [x] Prototype HTML + browser-openable reviewUrl
- [x] design_confirm **approve** (autoApprove)
- [x] hash skip · **cấm** re-scan demo
- [x] handoff compact ≤5KB
- [x] **cấm** Dev/BE · e2e · start:std · yarn build
