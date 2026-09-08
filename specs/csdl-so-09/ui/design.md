# Design — csdl-so-09 (Sổ 09 — QL vận hành ITS/ETC/KSTTX · new_page)

| Field | Value |
|-------|-------|
| feature | `csdl-so-09` |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** catalog A–D+F+H + **D** Slideout Z1–Z3 · entries `pattern_inline_grid` |
| status | `confirmed` |
| design_confirm | **approve** (`autoApprove=ON` · `task_f109cd8d`) |
| changeScope | `new_page` |
| packKind | `list` |
| gap | `new_page` · GAP-SO09-RES/TYPED/ROUTE/LINK14/FORMNO · GAP-CSDL-ROAD/PROV/CUC-03/05 · RPT-SRC |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `ui_repo_confirm` **locked** (PO) |
| mfeStdRoute | `/csdl-so-09` |
| mfeStdUrl | `http://localhost:9301/csdl-so-09` |
| peerStdUrl | `http://localhost:9301/so-ts/csdl-so-sach?resource=its-ops-logs` |
| peerLink | Biểu 14 `/csdl-bieu-14` · resource `its-systems` · deep-link / SearchInput |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-09/ui/prototype/csdl-so-09-list-prototype.html` |
| prototype | `specs/csdl-so-09/ui/prototype/csdl-so-09-list-prototype.html` |
| real_view_parity | `v1` |
| shared_grid_example | `v1` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · **`api/v1/asset/csdl-records?resource=its-ops-logs`** · **cấm ERP.*** |
| resource | `its-ops-logs` (**seed NEW**) |
| formNo | `09` · title VN **Sổ 09 — QL vận hành ITS/ETC/KSTTX** · **≠** Biểu 9 `boundary-markers` |
| IdCode | `SO-yyyyMMdd-nnnn` · **cấm** Guid |
| prior · data_analy | `confirmed`/`done` · hash skip · contentHash `sha256:1cbd0cd26f977a518c29457acddd7c893fa56fe9bd750ac1ad6a15b0976d03dc` · headerFingerprint `sha256:c00fdbdda898129b6408c35f9fb57cd2cc918356208b1067310d40c8f3cbefd9` · **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| prior · po | `confirmed` · `po/requirement.md` · `task_fedb10cb` · Q-* resolved |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e/start:std ở Design |
| updatedAt | `2026-09-06T00:00:00.000Z` |
| taskId | `task_f109cd8d` · analy `task_8076c138` · po `task_fedb10cb` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.01.02` |
| rulesVersion | `2026.08.31.2` |

**Cấm:** Dev/BE · re-scan DEM · invent `api/v1/so-ts/*` / `api/v1/infra/*` · ERP.* · Guid IdCode · form chỉ `detail*`/`col1–3` · invent map canvas · merge Biểu 14 ROW · yarn build/e2e/start:std · start role khác (**GAP-PKT-ROLE-01**).

## 0. Context & inventory (hash skip — **cấm** re-scan demo)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/csdl-so-09.md` | feature CTX |
| DA-01 | `specs/_data-analy/features/csdl-so-09-control-hint.md` | controlHint SSOT |
| DA-02 | `specs/_data-analy/features/csdl-so-09-real-data.md` | real-data §A–§E |
| PO-01 | `specs/csdl-so-09/po/requirement.md` | Grid AC · Screens · Leave · Q chốt |
| CLUSTER | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` § T-SO-09 | typed SSOT · ca trực thiết bị |
| DEM-01 | `…/csdl-so-sach-demo.html` → `asset/csdl-so-sach.html` | zone chrome only · **cấm** SSOT data |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · csdl-so-sach · csdl-bieu-14 |
| MFE hub | `CsdlSoSachPage` · form `CsdlFormSlideout` | generic → typed replace / alias |
| MFE svc | `services/csdlSoSach/endpoint.ts` | `BASE=/asset/csdl-records` · **reuse** |
| Peer | `CsdlBieu14Page` · `its-systems` | link / SearchInput only |

Persona: Khu QLĐB · Hạt · Nhà thầu vận hành ITS/ETC/KSTTX · ca trực.

**≠** Sổ TS `so-ts-*` · ≠ Biểu 9 `boundary-markers` · ≠ hub Kind G shell (giữ entry; alias mfeStd riêng).

### § Delta Current vs New (`new_page`)

| Area | Current (live) | New (this Design) | GAP |
|------|----------------|-------------------|-----|
| Entry | Hub thiếu key | Alias **`/csdl-so-09`** + hub `?resource=its-ops-logs` | GAP-SO09-ROUTE-01 |
| Catalog | **MISSING** `its-ops-logs` | Seed + card «Sổ 09 — QL vận hành ITS/ETC/KSTTX» | GAP-SO09-RES-01 · CUC-05 |
| Form | 3 ô `detail*` + Col1–3 | Typed T-SO-09 header + entry **9 cột** ca trực | GAP-SO09-TYPED-01 · CUC-03 |
| formNo | Live 9 = Biểu mốc | Sổ **09** book · **không** đụng Biểu 9 | GAP-SO09-FORMNO-01 |
| Link 14 | — | SearchInput `its-systems` optional · deep-link · **cấm** embed | GAP-SO09-LINK14-01 |
| `roadCode` | Text free | **SearchInput** `road-route` filter+form | GAP-CSDL-ROAD-01 |
| `province` | Select 5 tỉnh | LOOKUP_STATIC P1 keep | GAP-CSDL-PROV-01 |
| contractor / manageUnit | Text | **Text P1** · org/partner SearchInput **DEFER P2** | GAP-CSDL-ORG-01 |
| Media | — | **không** bắt buộc (T-FILE-01 ≠ Sổ 09) | — |
| Import/Export | stub | **OUT pack** stub only | GAP-CSDL-XLS-01 |
| Report source | flat Col1–3 | Typed entries READY sau form | GAP-RPT-SRC-CSDL-01 |
| Map | — | **none** | — |

**Không đổi:** API prefix · Kind B A–D · Kind D Slideout · IdCode `SO-` · pagination 50/100/200/500 · **cấm** ERP.*.

### PO Q-* → Design chốt

| Q | Decision (PO) | Control |
|---|---------------|---------|
| Q-SHIFT | `ca1\|ca2\|ca3` | Dropdown LOOKUP_STATIC |
| Q-SYS-STATUS | `tot\|tb\|kem\|hong` | Dropdown LOOKUP_STATIC |
| Q-LINK14 | optional · 1:1 | SearchInput `its-systems` · deep-link chrome |
| Q-PROV | keep_static 5 tỉnh | Dropdown |
| Q-ORG | Text P1 | Text · SearchInput DEFER P2 |
| Q-SIGN | Text tên P1 | Text · e-sign DEFER |

## 1. Kind + UI pattern (HARD)

| | |
|--|--|
| Feature Kind | **B+D** |
| List pattern | **1×** `LinPageLayout` kind=`catalog` — **cấm** nested `CatalogListShell` |
| Grid | `LinCatalogDataGrid` · kéo cột **default ON** |
| Filter | **`LinErpListFilterBar`** **1 hàng** · SearchText + 🔍 cụm phải — **cấm** nút Tìm riêng · **cấm** wrap 2 hàng default desktop (**filter-bar-layout-hard**) |
| Footer | `LinCatalogListPagination` **50 / 100 / 200 / 500** |
| Form pattern | **Slideout** · `formSurface: slideout` · **`data-form-cols="2"`** · `slideout_layout: footer_actions_only` |
| Entries | `pattern_inline_grid` add/remove · typed **9 cột** + STT — **cấm** chỉ Col1–3 |
| Link 14 | SearchInput + optional deep-link button — **cấm** embed full Biểu 14 |
| Zone F | `LinCatalogUiSchemaEditorModal` catalogKind `its-ops-logs` |
| Zone H | `LinCatalogHistoryModal` — **cấm** invent History API |
| Leave | Dirty → **`LeaveConfirmModal`** — **cấm** native alert/confirm |
| Typography | label **13** · input D14/M16 (**GAP-TYP-01**) |
| View mode | `readOnly` — **cấm** Input disabled xám toàn form |
| Map | `map: none` — deep-link GIS only |
| Skip chrome | GOVOne · demo sidebar/note |
| DES-RPT | **N/A** (list pack · report riêng · GAP-RPT-SRC-CSDL-01 form READY) |

### Routes (Design chốt)

| Surface | Path |
|---------|------|
| List (alias) | `/csdl-so-09` |
| Hub entry | `/so-ts/csdl-so-sach?resource=its-ops-logs` |
| Form | overlay Slideout · QS `?form=` optional |
| Peer Biểu 14 | `/csdl-bieu-14` · hoặc hub `?resource=its-systems` |
| Map | deep-link GIS only · **cấm** canvas |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **DES-GRID-A…D · F · H** | Typed cols · filter HARD |
| S-HUB-ENTRY | hub card | Kind G card | Title VN · open-resource · **cấm** slug trên card |
| S-FORM-CREATE | create | **DES-GRID-Z** · Z1–Z3 | footer Hủy/Lưu · leave |
| S-FORM-EDIT | edit | DES-GRID-Z | footer Hủy/Lưu |
| S-FORM-VIEW | view | DES-GRID-Z | readOnly · footer Đóng/Sửa/Copy |
| S-FORM-COPY | create | DES-GRID-Z | clear id · new code |
| S-ACT-DELETE | — | Confirm modal | soft delete |
| S-HIST | — | DES-GRID-H | `LinCatalogHistoryModal` |
| S-ENTRIES | — | inline_grid trong Z2 | typed 9 cột · **không** media |
| S-LINK14 | — | SearchInput + deep-link | **cấm** embed |
| S-SKIP-MAP | — | — | **Cấm** map canvas |

### Zone A — Header (DES-GRID-A)

- Back hub · title **«Sổ 09 — QL vận hành ITS/ETC/KSTTX»** · meta `resource=its-ops-logs`
- **Cấm** Thêm mới trên A

### Zone B — Toolbar + filter (DES-GRID-B · DES-GRID-B-FILTER)

**Toolbar (trái/phải):** Refresh · History · SchemaConfig · Import stub · Export stub · Delete · **Tạo mới** (primary phải).

**Filter 1 hàng (HARD):**

| key | Label | Control | catalogKind |
|-----|-------|---------|-------------|
| search | Tìm kiếm | `SearchTextInput` (+ 🔍 cụm phải) | text · mã · sổ · đường · thầu · người · ca |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC (5 tỉnh) |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC `tot\|tb\|kem\|hong` |
| roadCode | Tên đường | `SearchInput` | **road-route** |
| fromDate | Từ ngày | `Date` | QS period / ca |
| toDate | Đến ngày | `Date` | QS period / ca |

Rules: search must work · **cấm** nút Tìm riêng · filter đổi → `page=1`.

### Zone C — Grid (DES-GRID-C)

| Col | Field | Notes |
|-----|-------|-------|
| STT | — | ổn định khi sort/kéo |
| Mã | `code` | link → View |
| Số quyển | `bookNo` | |
| Nhà thầu | `contractor` | |
| Đường | `roadName` / `roadCode` | |
| Km | `kmFrom`–`kmTo` | |
| Kỳ | `periodStart`–`periodEnd` | |
| Tỉnh | `province` | |
| TT | `status` | |
| ⋮ | row menu | Xem / Sửa / Copy / Xóa / Lịch sử |

Empty copy VN: **«Chưa có dữ liệu»**.

### Zone D — Footer (DES-GRID-D)

`LinCatalogListPagination` **50 / 100 / 200 / 500** · đổi size → page=1.

### Form Slideout Z1–Z3 (DES-GRID-Z · DES-FORM-Z1–Z3)

| Zone | Content |
|------|---------|
| Z1 | Title mode Create/Edit/View/Copy · X đóng |
| Z2 | Header fields 2-col + link14 chrome + entries inline grid (9 cột) |
| Z3 | Footer Lưu/Hủy (View: Đóng/Sửa/Copy) · leave-confirm dirty |

#### Control-map — form header (Design chốt = controlHint · PO Q-*)

| key | Label | Control | req |
|-----|-------|---------|-----|
| code | Mã | Text **readonly** | auto `SO-` |
| bookNo | Số quyển / sổ | Text | * |
| contractor | Nhà thầu | Text (P1) | * |
| roadCode | Mã đường | SearchInput `road-route` | * |
| roadName | Tên đường | Text display (bind) | * |
| kmFrom | Lý trình từ | Number | * |
| kmTo | Lý trình đến | Number | |
| periodStart | Ngày bắt đầu kỳ | Date | * |
| periodEnd | Ngày kết thúc kỳ | Date | |
| province | Tỉnh | Dropdown LOOKUP_STATIC | * |
| manageUnit | ĐV QL | Text (P1) | |
| status | Tình trạng | Dropdown tot/tb/kem/hong | |
| linkBieu14Id | Liên kết Biểu 14 | SearchInput `its-systems` + deep-link | optional |
| notes | Ghi chú sổ | Textarea | |

#### Control-map — entries[] inline grid (T-SO-09 · ca trực · 9 cột)

| key | Label | Control | req |
|-----|-------|---------|-----|
| lineNo | STT | Integer ro | auto |
| occurredAt | Ngày giờ | DateTime | * |
| shift | Ca | Dropdown `ca1\|ca2\|ca3` | * |
| operatorName | Người | Text | * |
| systemStatus | TT hệ thống | Dropdown `tot\|tb\|kem\|hong` | * |
| anomaly | TB bất thường | Textarea | |
| action | Xử lý (XL) | Textarea | * |
| result | Kết quả | Textarea | * |
| recommendation | Kiến nghị | Textarea | |
| signature | Ký | Text | * |

Required form DoD: bookNo · contractor · roadCode · kmFrom · periodStart · province · ≥1 entry với occurredAt · shift · operatorName · systemStatus · action · result · signature.

## 3. Grid AC (Design mirror PO)

| AC | Assert |
|----|--------|
| G-01 | `LinCatalogDataGrid` · empty không crash |
| G-02 | SearchTextInput lọc mã/sổ/đường/thầu/người/ca · **không** nút Tìm |
| G-03 | Filter province/status/road/from/to → refetch · page=1 |
| G-04 | Sort/kéo cột ON · STT ổn định |
| G-05 | Row menu Xem/Sửa/Copy/Xóa/Lịch sử |
| G-06 | Pagination 50/100/200/500 · size → page=1 |
| G-07 | Tạo mới → Slideout Create · Lưu → row mới |
| G-08 | Soft-delete → row khỏi list · toast OK |
| G-09 | 422 thiếu resource → toast · không blank |
| G-10 | Empty «Chưa có dữ liệu» |

## 4. Leave / dirty / error

| Case | UX |
|------|-----|
| Dirty + Hủy/X/Esc/route | `LeaveConfirmModal` |
| View mode | Không leave-confirm |
| Save OK | Đóng · refresh · toast |
| Validation fail | Ở lại · toast field |
| 404 detail | Đóng slideout · toast |
| Network | Toast lỗi · Retry list |
| Resource chưa seed | toast / empty · Dev seed trước list |

## 5. API / bind (cite real-data · SA widen)

| Op | Path |
|----|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=its-ops-logs` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` + typed body |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE …/{id}` soft |
| road-route | `GET /integration/road-routes/search` |
| Peer Biểu 14 | `GET …/csdl-records?resource=its-systems` · UI `/csdl-bieu-14` |

FE: reuse `BASE=/asset/csdl-records`. SA: `Schema_CsdlSo09` · typed DTO/UiSchema · seed catalog.

## 6. Prototype + reviewUrl

| | |
|--|--|
| HTML | `specs/csdl-so-09/ui/prototype/csdl-so-09-list-prototype.html` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-09/ui/prototype/csdl-so-09-list-prototype.html` |
| Zones tagged | `data-des-id` DES-GRID-A/B/B-FILTER/C/D/Z · DES-FORM-Z1–Z3 · DES-ENTRIES · DES-LINK14 · DES-LEAVE |
| Sample rows | **synthetic UI chrome only** · **cấm** demo-json SSOT |

## 7. design_confirm

| | |
|--|--|
| Gate | `design_confirm` |
| Result | **approve** |
| Reason | autoApprove=ON · DoR PASS · control-map = controlHint · prototype + reviewUrl · filter-bar HARD · link14 chrome · Q-* PO resolved · hash skip · media N/A |
| Board | skipped (autoApprove) |

## 8. Out of scope / Cấm

- ERP.* / Domains/Master / invent infra / so-ts API
- Report pack / Kind F map canvas / Excel full wizard
- Guid IdCode · merge Sổ TS · merge Biểu 14 ROW · embed Biểu 14 form
- Demo/localStorage SSOT · re-scan demo (**GAP-DES-DEMO-RESCAN-01**)
- yarn build / e2e / start:std ở Design
- contractor/manageUnit SearchInput P1 (DEFER P2)
- Master province P1 (DEFER P2)
- e-sign / FileService (DEFER)
- Media bắt buộc trên Sổ 09

## 9. Handoff

| Next | Need |
|------|------|
| **SA** | Schema_CsdlSo09 · typed DTO/UiSchema · seed `its-ops-logs` · migration pair |
| TL/Dev | alias page `/csdl-so-09` + typed form · reuse BASE · seed catalog |
| QA | Grid+form AC · link14 · e2e queued `/agent-qa*` only |

## DoR design

- [x] Kind B+D · zones A–D+F+H · Slideout Z1–Z3
- [x] Control-map chốt = controlHint (filters · header · entries 9 cột · link14)
- [x] Filter-bar HARD · Grid AC G-01…G-10
- [x] Prototype HTML + browser-openable reviewUrl
- [x] design_confirm **approve** (autoApprove)
- [x] hash skip · **cấm** re-scan demo
- [x] handoff compact ≤5KB
- [x] **cấm** Dev/BE · e2e · start:std · yarn build
