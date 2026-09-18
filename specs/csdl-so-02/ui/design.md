# Design — csdl-so-02 (Sổ 02 — Nhật ký tuần đường · edit_page · CR PDF Wave A)

| Field | Value |
|-------|-------|
| feature | `csdl-so-02` |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** catalog A–D+F+H + **D** Slideout Z1–Z3 · entries `pattern_inline_grid` |
| status | `confirmed` |
| design_confirm | **approve** (`autoApprove=ON` · `task_b40a0dad`) |
| changeScope | `edit_page` |
| packKind | `list` |
| cr | `nktd-pdf-20260917` · cite `SRC-NKTD-PDF` |
| gap | Wave A: **GAP-NKTD-LOC-01** · GAP-NKTD-WEATHER-01 · **GAP-SO02-FILE-01** debt · GAP-NKTD-HDR-01 · STATUS-01 · RPT-PARK OUT |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `ui_repo_confirm` **locked** |
| mfeStdRoute | `/csdl-so-02` |
| mfeStdUrl | `http://localhost:9301/csdl-so-02` |
| peerStdUrl | `http://localhost:9301/so-ts/csdl-so-sach?resource=patrol-logs` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-02/ui/prototype/csdl-so-02-list-prototype.html` |
| prototype | `specs/csdl-so-02/ui/prototype/csdl-so-02-list-prototype.html` |
| real_view_parity | `v1` |
| shared_grid_example | `v1` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · **`api/v1/asset/csdl-records?resource=patrol-logs`** · **cấm ERP.*** · **cấm** invent `api/v1/patrol-logs` |
| resource | `patrol-logs` |
| formNo | `02` · title VN **Sổ 02 — Nhật ký tuần đường** |
| IdCode | `SO-yyyyMMdd-nnnn` · **cấm** Guid |
| prior · data_analy | `confirmed`/`done` · hash skip · contentHash `sha256:3ddc42d7c4404f439925322953f28ffc9d3b263726ac6cf5216065751c19b4d6` · headerFingerprint `sha256:1b032f04f5154622239e0e2bdbebe6923ec76ba9ca33d283b51ebe0062c0d471` · **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| prior · po | `confirmed` · `po/requirement.md` · `task_a2fc4833` · Q-* resolved |
| prior · design new_page | `task_4a522163` · **giữ** zones/routes · Wave A **append** |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e/start:std ở Design |
| updatedAt | `2026-09-18T03:45:00.000Z` |
| taskId | `task_b40a0dad` · analy `task_2a2fd5c4` · po `task_a2fc4833` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |

**Cấm:** Dev/BE · migration Step 4b · re-scan DEM · invent `api/v1/patrol-logs` / infra / ERP.* · Guid IdCode · invent map canvas · invent file API · yarn build/e2e/start:std · enqueue report Wave B · start role khác (**GAP-PKT-ROLE-01**) · wipe new_page design history.

## 0. Context & inventory (hash skip — **cấm** re-scan demo)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/csdl-so-02.md` | feature CTX |
| DA-01 | `specs/_data-analy/features/csdl-so-02-control-hint.md` | controlHint SSOT · CR delta |
| DA-02 | `specs/_data-analy/features/csdl-so-02-real-data.md` | real-data §A+§B |
| PO-01 | `specs/csdl-so-02/po/requirement.md` | Grid AC · OR-rule · Q chốt |
| CR | `specs/_cr/nktd-pdf-20260917/` | SRC-NKTD-PDF |
| EXTRACT | `docs/data/analyzed/nhat-ky-tuan-duong-pdf.md` | PDF vị trí chữ |
| DEM-01 | demo path (chrome only) | **cấm** SSOT · **cấm** re-scan |
| MFE | `CsdlSo02Page` · `CsdlSo02FormSlideout` | live typed · thiếu locationText · weather Input |

Persona: Khu QLĐB · Hạt trưởng · NV tuần đường · Nhà thầu BDTX.

### § Delta Current vs New (`edit_page` · CR PDF Wave A)

| Area | Current (live / prior design) | New (this Design) | GAP |
|------|-------------------------------|-------------------|-----|
| Entry location | `locationKm` Number * only · 1 cột «Vị trí/Km» | **`locationKm` Number** + **`locationText` Text** cạnh nhau · OR-rule | **GAP-NKTD-LOC-01** |
| weatherEvent | Input 1 dòng | **Textarea** rows=**3** · maxLength=**2000** | GAP-NKTD-WEATHER-01 |
| List col | không cột vị trí text | **Luôn** cột **«Vị trí»** (`locationText` · empty → «—») | Q-LIST-COL |
| Sketch/media | FileRef chip (new_page) | **Text id** P1 + toast nếu FileService chưa READY · **cấm** invent picker | **GAP-SO02-FILE-01** |
| Header bìa | typed OK | **Giữ** bookNo·contractor·road·km·patrolStaff·period | GAP-NKTD-HDR-01 |
| status filter | có | **Giữ** filter · **không** cột giấy/print | GAP-NKTD-STATUS-01 |
| Report | Kind E park | **OUT Wave A** · **cấm** enqueue `rpt-nhat-ky-tuan-duong` | GAP-NKTD-RPT-PARK |
| Migration hint | Schema_CsdlSo02 | SA/Dev: `LocationText` · `Schema_CsdlSo02LocationText` CLI | SA |

**Không đổi:** API `api/v1/asset/csdl-records?resource=patrol-logs` · IdCode `SO-` · Kind B A–D · Kind D Slideout · route `/csdl-so-02` + hub · filter-bar HARD · pagination 50/100/200/500 · LeaveConfirm · **cấm** ERP.*.

### § Delta prior `new_page` (giữ — không wipe)

Alias route · hub label Sổ 02 · typed header · SearchInput road-route · LOOKUP_STATIC province · XLS OUT · map none — **vẫn hiệu lực**.

## 1. Kind + UI pattern (HARD)

| | |
|--|--|
| Feature Kind | **B+D** |
| List pattern | **1×** `LinPageLayout` kind=`catalog` — **cấm** nested `CatalogListShell` |
| Grid | `LinCatalogDataGrid` · kéo cột **default ON** |
| Filter | **`LinErpListFilterBar`** **1 hàng** · SearchText + 🔍 cụm phải — **cấm** nút Tìm riêng · **cấm** wrap 2 hàng default desktop |
| Footer | `LinCatalogListPagination` **50 / 100 / 200 / 500** |
| Form pattern | **Slideout** · `formSurface: slideout` · **`data-form-cols="2"`** · `slideout_layout: footer_actions_only` |
| Entries | `pattern_inline_grid` · **locationKm + locationText** cạnh nhau · weather **Textarea** |
| Zone F / H | SchemaConfig · History — **cấm** invent History API |
| Leave | Dirty → **`LeaveConfirmModal`** — **cấm** native alert |
| Typography | label **13** · input D14/M16 (**GAP-TYP-01**) |
| View mode | `readOnly` — **không** required · **cấm** Input disabled xám toàn form |
| Map | `map: none` |
| DES-RPT | **N/A** Wave A (report **park**) |
| Skip chrome | GOVOne · demo sidebar/note |

### Routes (giữ)

| Surface | Path |
|---------|------|
| List (alias) | `/csdl-so-02` |
| Hub entry | `/so-ts/csdl-so-sach?resource=patrol-logs` |
| Form | overlay Slideout |
| Map | deep-link GIS only · **cấm** canvas |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **DES-GRID-A…D · F · H** | + cột «Vị trí» |
| S-HUB-ENTRY | hub card | Kind G card | Title VN · open-resource |
| S-FORM-CREATE | create | **DES-GRID-Z** · Z1–Z3 | OR-rule entry · leave |
| S-FORM-EDIT | edit | DES-GRID-Z | OR-rule · leave |
| S-FORM-VIEW | view | DES-GRID-Z | readOnly · **no-req** · Đóng/Sửa/Copy |
| S-FORM-COPY | create | DES-GRID-Z | clear id · new code |
| S-ACT-DELETE | — | Confirm modal | soft delete |
| S-HIST | — | DES-GRID-H | History modal |
| S-ENTRIES | — | DES-ENTRIES | locationKm + locationText + weather Textarea |
| S-SKIP-MAP | — | — | **Cấm** map canvas |
| S-SKIP-RPT | — | — | Report **OUT** Wave A |

### Zone A — Header (DES-GRID-A)

- Back hub · title **«Sổ 02 — Nhật ký tuần đường»** · meta `resource=patrol-logs`
- **Cấm** Thêm mới trên A

### Zone B — Toolbar + filter (DES-GRID-B · DES-GRID-B-FILTER)

**Toolbar:** Refresh · History · SchemaConfig · Import stub · Export stub · Delete · **Tạo mới** (primary phải).

**Filter 1 hàng (HARD):**

| key | Label | Control | catalogKind |
|-----|-------|---------|-------------|
| search | Tìm kiếm | `SearchTextInput` (+ 🔍 cụm phải) | text |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC (5 tỉnh) |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC `tot\|tb\|kem\|hong` |
| roadCode | Tên đường | `SearchInput` | **road-route** |
| fromDate | Từ ngày | `Date` | — |
| toDate | Đến ngày | `Date` | — |

Rules: search must work · **cấm** nút Tìm riêng · filter đổi → `page=1`.

### Zone C — Grid (DES-GRID-C)

| Col | Field | Notes |
|-----|-------|-------|
| STT | — | ổn định khi sort/kéo |
| Mã | `code` | link → View |
| Số quyển | `bookNo` | |
| Nhà thầu | `contractor` | |
| Đường | `roadName` / `roadCode` | |
| Km | `kmFrom`–`kmTo` | header sổ |
| **Vị trí** | **`locationText`** (entry summary / first / aggregate) | **Luôn hiện** · empty → «—» · **GAP-NKTD-LOC-01** |
| NV tuần | `patrolStaff` | |
| Kỳ | `periodStart`–`periodEnd` | |
| Tỉnh | `province` | |
| TT | `status` | filter only · không in PDF |
| ⋮ | row menu | Xem / Sửa / Copy / Xóa / Lịch sử |

Empty copy VN: **«Chưa có nhật ký tuần đường»**.

### Zone D — Footer (DES-GRID-D)

`LinCatalogListPagination` **50 / 100 / 200 / 500** · đổi size → page=1.

### Form Slideout Z1–Z3 (DES-GRID-Z · DES-FORM-Z1–Z3)

| Zone | Content |
|------|---------|
| Z1 | Title mode Create/Edit/View/Copy · X đóng |
| Z2 | Header fields 2-col + entries inline grid |
| Z3 | Footer Lưu/Hủy (View: Đóng/Sửa/Copy) · leave-confirm dirty |

#### Control-map — form header (Design chốt = controlHint) — **giữ**

| key | Label | Control | req |
|-----|-------|---------|-----|
| code | Mã | Text **readonly** | auto `SO-` |
| bookNo | Số quyển / sổ | Text | * |
| contractor | Nhà thầu | Text (P1) | * |
| roadCode | Mã đường | SearchInput `road-route` | * |
| roadName | Tên đường | Text display (bind) | * |
| kmFrom | Lý trình từ | Number | * |
| kmTo | Lý trình đến | Number | |
| patrolStaff | NV tuần đường | Text | * |
| periodStart | Ngày bắt đầu | Date | * |
| periodEnd | Ngày kết thúc | Date | |
| province | Tỉnh | Dropdown LOOKUP_STATIC | * |
| manageUnit | ĐV QL | Text (P1) | |
| status | Tình trạng | Dropdown tot/tb/kem/hong | |
| notes | Ghi chú sổ | Textarea | |

#### Control-map — entries[] inline grid (Wave A chốt)

| key | Label | Control | req | Notes |
|-----|-------|---------|-----|-------|
| lineNo | STT | Integer ro | auto | |
| eventAt | Giờ / ngày kiểm tra | DateTime | * | View: no-req |
| locationKm | Lý trình (Km) | **Number** | soft OR | optional nếu có locationText |
| **locationText** | **Vị trí / SC-VP** | **Text** | soft OR | **GAP-NKTD-LOC-01** · PDF chữ |
| weatherEvent | Thời tiết + diễn biến | **Textarea** rows=**3** maxLength=**2000** | * | View: no-req |
| onSiteAction | Xử lý tại chỗ | Textarea | | |
| remarkSign | Nhận xét + ký | Text | | |
| note | Ghi chú dòng | Text | | |
| sketchRef | Sketch | **Text** id (debt) | | **GAP-SO02-FILE-01** · toast nếu File chưa READY |
| mediaIds | Ảnh / video | **Text** id (debt) | | cùng nợ · **cấm** invent file API |

**Entry required rule (HARD · Create/Edit):** `eventAt` + (`locationKm` has value **OR** `locationText` not empty) + `weatherEvent`.  
**View:** no-req · readOnly.  
Layout: `locationKm` | `locationText` **cạnh nhau** trên cùng hàng entry (2 ô cạnh / 2 cột trong cell pair).

Required form DoD (header): bookNo · contractor · roadCode · kmFrom · patrolStaff · periodStart · province · ≥1 entry thỏa OR-rule trên.

## 3. Grid AC (Design mirror PO)

| AC | Assert |
|----|--------|
| G-01 | `LinCatalogDataGrid` · empty không crash |
| G-02 | SearchTextInput lọc mã/sổ/đường/NV · **không** nút Tìm |
| G-03 | Filter province/status/road/from/to → refetch · page=1 |
| G-04 | Sort/kéo cột ON · STT ổn định |
| G-05 | Row menu Xem/Sửa/Copy/Xóa/Lịch sử |
| G-06 | Pagination 50/100/200/500 · size → page=1 |
| G-07 | Tạo mới → Slideout Create · Lưu → row mới |
| G-08 | Soft-delete → row khỏi list · toast OK |
| G-09 | 422 thiếu resource → toast · không blank |
| G-10 | Empty «Chưa có nhật ký tuần đường» |
| G-11 | Cột **«Vị trí»** luôn hiện · bind `locationText` · empty «—» |
| G-12 | Entry OR-rule: chỉ Km **hoặc** chỉ Text **hoặc** cả hai → Lưu OK · thiếu cả hai → validation · View no-req |

## 4. Leave / dirty / error

| Case | UX |
|------|-----|
| Dirty + Hủy/X/Esc/route | `LeaveConfirmModal` |
| View mode | Không leave-confirm |
| Save OK | Đóng · refresh · toast |
| Validation fail (OR / weather) | Ở lại · toast field |
| 404 detail | Đóng slideout · toast |
| File debt | Toast · giữ text-id draft · **cấm** fake picker |

## 5. API / bind (cite real-data · SA widen)

| Op | Path |
|----|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=patrol-logs` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` + typed body **incl. locationText** |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE …/{id}` soft |
| road-route | `GET /integration/road-routes/search` |
| file | FileService khi READY · else text-id (**GAP-SO02-FILE-01**) |

FE: reuse `BASE=/asset/csdl-records` · `CsdlSo02Page` / `CsdlSo02FormSlideout`.  
SA: `LocationText` DTO · migration **`Schema_CsdlSo02LocationText`** CLI pair nếu cột mới · **cấm** invent `api/v1/patrol-logs`.

## 6. Prototype + reviewUrl

| | |
|--|--|
| HTML | `specs/csdl-so-02/ui/prototype/csdl-so-02-list-prototype.html` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-02/ui/prototype/csdl-so-02-list-prototype.html` |
| Zones tagged | `data-des-id` DES-GRID-A/B/B-FILTER/C/D/Z · DES-FORM-Z1–Z3 · DES-ENTRIES · leave |
| Wave A chrome | locationKm Number · locationText Text · weather Textarea rows=3 · list col Vị trí · sketch/media text-id |
| Sample rows | **synthetic UI chrome only** · **cấm** demo-json SSOT |

## 7. design_confirm

| | |
|--|--|
| Gate | `design_confirm` |
| Result | **approve** |
| Reason | autoApprove=ON · DoR PASS · control-map = controlHint Wave A · prototype + reviewUrl · OR-rule · G-11/G-12 · hash skip · Q-* PO resolved |
| Board | skipped (autoApprove) |

## 8. Out of scope / Cấm

- ERP.* / Domains/Master / invent patrol-logs path / infra
- Report Wave B / Kind F map canvas / Excel full wizard
- Guid IdCode · wipe new_page pack · parent JSON-only DoD
- Demo/localStorage SSOT · re-scan demo (**GAP-DES-DEMO-RESCAN-01**)
- yarn build / e2e / start:std / migration Step 4b ở Design
- invent FileService picker khi chưa READY

## 9. Handoff

| Next | Need |
|------|------|
| **SA** | `LocationText` DTO · `Schema_CsdlSo02LocationText` confirm · UiSchema seed field |
| TL | T-* từ CR `task-csdl-so-02.md` · **cấm** overwrite `task/csdl-so-02.md` new_page |
| Dev | form OR + list col Vị trí · weather Textarea · migration CLI nếu cần |
| QA | G-11/G-12 · e2e queued `/agent-qa*` only |

## DoR design

- [x] Kind B+D · zones A–D+F+H · Slideout Z1–Z3
- [x] Control-map chốt = controlHint Wave A (locationText · weather Textarea · OR-rule)
- [x] Filter-bar HARD · Grid AC G-01…G-12
- [x] Prototype HTML + browser-openable reviewUrl
- [x] design_confirm **approve** (autoApprove)
- [x] hash skip · **cấm** re-scan demo
- [x] handoff compact ≤5KB
- [x] **cấm** Dev/BE · e2e · start:std · yarn build · migration
