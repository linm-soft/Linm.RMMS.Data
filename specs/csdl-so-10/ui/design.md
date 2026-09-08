# Design — csdl-so-10 (Sổ 10 — Bình đồ duỗi thẳng tuyến · new_page · packKind=map)

| Field | Value |
|-------|-------|
| feature | `csdl-so-10` |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** catalog A–D+F+H + **D** Slideout Z1–Z3 + **F** map host · entries `pattern_inline_grid` |
| status | `confirmed` |
| design_confirm | **approve** (`autoApprove=ON` · `task_7d13ee8d`) |
| changeScope | `new_page` |
| packKind | **`map`** |
| gap | `new_page` · GAP-SO10-RES/TYPED/MAP/ROUTE/FALLBACK · GAP-CSDL-ROAD/PROV/CUC-03/05/10 · GAP-SO10-DM-01 (SA) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · `ui_repo_confirm` **locked** (PO) |
| mfeStdRoute | `/csdl-so-10` |
| mfeStdUrl | `http://localhost:9301/csdl-so-10` |
| peerStdUrl | `http://localhost:9301/so-ts/csdl-so-sach?resource=route-strip-maps` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-10/ui/prototype/csdl-so-10-list-prototype.html` |
| prototype | `specs/csdl-so-10/ui/prototype/csdl-so-10-list-prototype.html` |
| real_view_parity | `v1` |
| shared_grid_example | `v1` |
| MapGateSlash | `/agent-dev-oms-map` · R1–R11 (+ R4b/R4c/R4e/R5b/R7b/R7c · R-LEAVE) |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · **`api/v1/asset/csdl-records?resource=route-strip-maps`** · **cấm ERP.*** |
| resource | `route-strip-maps` |
| formNo | `10` · title VN **Sổ 10 — Bình đồ duỗi thẳng tuyến** |
| IdCode | `SO-yyyyMMdd-nnnn` · **cấm** Guid |
| prior · data_analy | `confirmed`/`done` · hash skip · contentHash `sha256:e444b5c2b3c297fc9affd2c72aae7f06378eab566c213c88cbdc972a10fae30a` · headerFingerprint `sha256:8d4cc58a120fddd4f98ee78c5876a4eecea942231f87b3df9d5e4ffc025e54ad` · **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| prior · po | `confirmed` · `po/requirement.md` · `task_c1402f06` · Q-* resolved |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e/start:std ở Design |
| updatedAt | `2026-09-06T00:45:00.000Z` |
| taskId | `task_7d13ee8d` · analy `task_7770663d` · po `task_c1402f06` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.05.8` |

**Cấm:** Dev/BE · re-scan DEM · invent `api/v1/so-ts/*` / `api/v1/infra/*` · ERP.* · Guid IdCode · form chỉ `detail*`/`col1–3` · Cesium · yarn build/e2e/start:std · start role khác (**GAP-PKT-ROLE-01**).

## 0. Context & inventory (hash skip — **cấm** re-scan demo)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/csdl-so-10.md` | feature CTX |
| DA-01 | `specs/_data-analy/features/csdl-so-10-control-hint.md` | controlHint SSOT |
| DA-02 | `specs/_data-analy/features/csdl-so-10-real-data.md` | real-data §A–§D map |
| PO-01 | `specs/csdl-so-10/po/requirement.md` | Grid+Map AC · Screens · Leave · Q chốt |
| CLUSTER | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` § T-SO-10 | typed SSOT |
| DEM-01 | `…/csdl-so-sach-demo.html` → `asset/csdl-so-sach.html` | zone chrome only · **cấm** SSOT data |
| DOMAIN | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | thiếu `csdl-so-10` → SA |
| MFE hub | `CsdlSoSachPage` · form slideout | seed key `route-strip-maps` |
| MFE svc | `services/csdlSoSach/endpoint.ts` | `BASE=/asset/csdl-records` · **reuse** |

Persona: Khu QLĐB · ĐV QL tuyến · kỹ thuật viên bình đồ · Hạt trưởng.

**≠** Sổ TS `so-ts-*` · ≠ hub Kind G shell (giữ entry; alias mfeStd riêng) · ≠ Cesium P1.

### § Delta Current vs New (`new_page`)

| Area | Current (live) | New (this Design) | GAP |
|------|----------------|-------------------|-----|
| Entry | thiếu resource/route | Alias **`/csdl-so-10`** + hub `?resource=route-strip-maps` | GAP-SO10-ROUTE/RES-01 |
| Hub label | — | **«Sổ 10 — Bình đồ duỗi thẳng tuyến»** | GAP-CSDL-CUC-05 |
| Form | Col1–3 nếu bootstrap | Typed T-SO-10 header + strip entries | GAP-SO10-TYPED-01 · CUC-03 |
| Map | không | Kind F OMS host→bar · OSRM · Fit · line levels | GAP-SO10-MAP-01 · CUC-10 |
| Fallback | — | File `stripImageUrl` khi empty geom | GAP-SO10-FALLBACK-01 |
| `roadCode` | — | SearchInput `road-route` | GAP-CSDL-ROAD-01 |
| `province` | — | LOOKUP_STATIC P1 | GAP-CSDL-PROV-01 |
| contractor/manageUnit | — | Text P1 · SearchInput **DEFER P2** | GAP-CSDL-ORG-01 |
| DOMAIN-MAP | thiếu slug | SA thêm `csdl-so-10` → Asset | GAP-SO10-DM-01 |
| Import/Export | stub | **OUT pack** | GAP-CSDL-XLS-01 |

**Không đổi:** API prefix · Kind B A–D · Kind D Slideout · IdCode `SO-` · pagination 50/100/200/500 · **cấm** ERP.*.

## 1. Kind + UI pattern (HARD)

| | |
|--|--|
| Feature Kind | **B+D+F** |
| List pattern | **1×** `LinPageLayout` kind=`catalog` — **cấm** nested `CatalogListShell` |
| Grid | `LinCatalogDataGrid` · kéo cột **default ON** |
| Filter | **`LinErpListFilterBar`** **1 hàng** · SearchText + 🔍 cụm phải — **cấm** nút Tìm riêng · **cấm** wrap 2 hàng default desktop |
| Footer | `LinCatalogListPagination` **50 / 100 / 200 / 500** |
| Form pattern | **Slideout** · `formSurface: slideout` · **`data-form-cols="2"`** · `slideout_layout: footer_actions_only` |
| Entries | `pattern_inline_grid` add/remove · strip T-SO-10 — **cấm** chỉ Col1–3 |
| Map | Kind **F** · `map-host` → `map-bar` · dock default · Dev `/agent-dev-oms-map` |
| Zone F | `LinCatalogUiSchemaEditorModal` catalogKind `route-strip-maps` |
| Zone H | `LinCatalogHistoryModal` — **cấm** invent History API |
| Leave | Dirty form **hoặc** dirty draw → **`LeaveConfirmModal`** — **cấm** native alert/confirm |
| Typography | label **13** · input D14/M16 (**GAP-TYP-01**) |
| View mode | `readOnly` — **cấm** Input disabled xám toàn form |
| DES-RPT | **N/A** (map pack · không report) |
| Skip chrome | GOVOne · demo sidebar/note |

### Routes (Design chốt)

| Surface | Path |
|---------|------|
| List (alias) | `/csdl-so-10` |
| Hub entry | `/so-ts/csdl-so-sach?resource=route-strip-maps` |
| Form | overlay Slideout · QS `?form=` optional |
| Map | Kind F host trong form/dock · **cấm** isolate legend MFE · **cấm** OSM.org/Esri CDN chip |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **DES-GRID-A…D · F · H** | Typed cols · filter HARD |
| S-HUB-ENTRY | hub card | Kind G card | Title VN · open-resource · **cấm** slug trên card |
| S-FORM-CREATE | create | **DES-GRID-Z** · Z1–Z3 · **DES-MAP-F** | footer Hủy/Lưu · leave |
| S-FORM-EDIT | edit | DES-GRID-Z + map | footer Hủy/Lưu |
| S-FORM-VIEW | view | DES-GRID-Z + map | readOnly · footer Đóng/Sửa/Copy |
| S-FORM-COPY | create | DES-GRID-Z + map | clear id · new code |
| S-MAP | draw/view | **DES-MAP-F** · **DES-MAP-BAR** | host→bar · Fit · OSRM · line levels |
| S-ACT-DELETE | — | Confirm modal | soft delete |
| S-HIST | — | DES-GRID-H | `LinCatalogHistoryModal` |
| S-ENTRIES | — | DES-ENTRIES inline_grid | strip theo Km |

### Zone A — Header (DES-GRID-A)

- Back hub · title **«Sổ 10 — Bình đồ duỗi thẳng tuyến»** · meta `resource=route-strip-maps`
- **Cấm** Thêm mới trên A

### Zone B — Toolbar + filter (DES-GRID-B · DES-GRID-B-FILTER)

**Toolbar:** Refresh · History · SchemaConfig · Import stub · Export stub · Delete · **Thêm mới** (primary phải).

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
| Km | `kmFrom`–`kmTo` | |
| Kỳ | `periodStart`–`periodEnd` | |
| TT | `status` | |
| ⋮ | row menu | Xem / Sửa / Copy / Xóa / Lịch sử |

Empty copy VN: **«Chưa có bình đồ duỗi thẳng»**.

### Zone D — Footer (DES-GRID-D)

`LinCatalogListPagination` **50 / 100 / 200 / 500** · đổi size → page=1.

### Form Slideout Z1–Z3 (DES-GRID-Z · DES-FORM-Z1–Z3)

| Zone | Content |
|------|---------|
| Z1 | Title mode Create/Edit/View/Copy · X đóng |
| Z2 | Header 2-col + Kind F map + entries inline grid |
| Z3 | Footer Lưu/Hủy (View: Đóng/Sửa/Copy) · leave-confirm dirty form/draw |

#### Control-map — form header (Design chốt = controlHint)

| key | Label | Control | req |
|-----|-------|---------|-----|
| code | Mã | Text **readonly** | auto `SO-` |
| bookNo | Số quyển / sổ | Text | * |
| contractor | Nhà thầu | Text (P1) | * |
| manageUnit | ĐV QL | Text (P1) | |
| roadCode | Mã đường | SearchInput `road-route` | * |
| roadName | Tên đường | Text display (bind) | * |
| kmFrom | Lý trình từ | Number | * |
| kmTo | Lý trình đến | Number | * |
| periodStart | Ngày bắt đầu kỳ | Date | * |
| periodEnd | Ngày kết thúc kỳ | Date | |
| province | Tỉnh | Dropdown LOOKUP_STATIC | * |
| status | Tình trạng | Dropdown tot/tb/kem/hong | |
| stripImageUrl | Ảnh bình đồ | File | fallback empty geom |
| geometry | Geometry | Map (Kind F) | * khi map |
| geomType | Loại geom | Text ro | auto |
| srid | SRID | Number ro | auto 4326 |
| notes | Ghi chú sổ | Textarea | |

#### Control-map — entries[] inline grid (T-SO-10)

| key | Label | Control | req |
|-----|-------|---------|-----|
| lineNo | STT | Integer ro | auto |
| kmFrom | Km từ | Number | * |
| kmTo | Km đến | Number | * |
| baseWidthM | B nền (m) | Number | |
| surfaceWidthM | B mặt (m) | Number | |
| medianWidthM | KCMĐ (m) | Number | |
| thicknessM | Dày (m) | Number | |
| gradePct | Dốc dọc (%) | Number | |
| alignType | Thẳng / cong | Dropdown `thang\|cong` | |
| structureType | CT | Dropdown `none\|cau\|ham\|cong` | |
| structureName | Tên CT | Text | khi ≠ none |
| atgtLeft / atgtRight | ATGT T/P | Text | |
| junction | Nút giao | Text | |
| ditchLeft / ditchRight | Rãnh T/P | Text | |
| wallLeft / wallRight | Tường T/P | Text | |
| scdkDa | SCĐK / DA | Text | |
| surfaceStatus | TT mặt | Dropdown `tot\|tb\|kem` | |
| notes | Ghi chú đoạn | Textarea | |

Required form DoD: bookNo · contractor · roadCode · kmFrom · kmTo · periodStart · province · ≥1 entry với kmFrom · kmTo.

### Kind F map chrome (DES-MAP-F · DES-MAP-BAR)

| Item | Design chốt |
|------|-------------|
| Layout | `map-host` → `map-bar` → canvas · dock default · full flex fill (Dev) |
| Basemap chips | **Tiêu chuẩn / Vệ tinh** clip MFE — **cấm** OSM.org / Esri / Google chip |
| Tools | Fit · Vẽ LineString/MultiLineString · Xóa geom · measure Km (Dev) |
| Layers | corridor underlay + track pane · CT pins theo `structureType` |
| OSRM | snap centerline · fallback nét đứt + toast |
| Fit | load `fitVnClipMap` / bbox Km — **cấm** street-level default |
| Click | MFE = popup only — **cấm** auto isolate zoom |
| Empty | toast «Chưa có bình đồ» + CTA vẽ / upload `stripImageUrl` |
| Leave | dirty draw → LeaveConfirmModal |

## 3. Grid AC (Design mirror PO)

| AC | Assert |
|----|--------|
| G-01 | `LinCatalogDataGrid` · empty không crash |
| G-02 | SearchTextInput lọc mã/sổ/đường/thầu · **không** nút Tìm |
| G-03 | Filter province/status/road/from/to → refetch · page=1 |
| G-04 | Sort/kéo cột ON · STT ổn định |
| G-05 | Row menu Xem/Sửa/Copy/Xóa/Lịch sử |
| G-06 | Pagination 50/100/200/500 · size → page=1 |
| G-07 | Tạo mới → Slideout Create · Lưu → row mới |
| G-08 | Soft-delete → row khỏi list · toast OK |
| G-09 | 422 thiếu resource → toast · không blank |
| G-10 | Empty «Chưa có bình đồ duỗi thẳng» |

## 3b. Map AC (Design mirror PO · `/agent-dev-oms-map`)

| AC | Assert |
|----|--------|
| M-01 | Live Leaflet — **cấm** screenshot/gradient giả (R1) · proto = chrome mock |
| M-02 | Basemap clip Tiêu chuẩn/Vệ tinh — **cấm** OSM.org/Esri/Google (R2) |
| M-03 | Toolbar/Fit/basemap `title` + `aria-label` (R3) |
| M-04 | host→bar · dock · flex fill — **cấm** `height:NNvh` · **cấm** 3D placeholder |
| M-05 | Sat maxNativeZoom 17 / no white-box (R5/R5b) |
| M-06 | Corridor + track · CT pins (R7/R7b) |
| M-07 | MFE click = popup only (R7c) |
| M-08 | OSRM snap · fallback toast (R8/R9) |
| M-09 | Overlay z-index ≥ 5000 (R10) |
| M-10 | Fit `fitVnClipMap` / bbox Km (R11) |
| M-11 | Dirty draw/form → LeaveConfirmModal (R-LEAVE) |
| M-12 | Save geometry + geomType + srid cùng PUT/POST |

## 4. Leave / dirty / error

| Case | UX |
|------|-----|
| Dirty form/draw + Hủy/X/Esc/route | `LeaveConfirmModal` |
| View mode | Không leave-confirm |
| Save OK | Đóng · refresh · Fit map · toast |
| Validation fail | Ở lại · toast field |
| 404 detail | Đóng slideout · toast |
| Empty map | toast + CTA vẽ / upload ảnh |
| OSRM fail | nét đứt + toast · **cấm** silent |

## 5. API / bind (cite real-data · SA widen)

| Op | Path |
|----|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=route-strip-maps` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` + typed + geometry |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE …/{id}` soft |
| road-route | `GET /integration/road-routes/search` |
| file | FileService `integrate-file-upload-web` (`stripImageUrl`) |

FE: reuse `BASE=/asset/csdl-records`. SA: `Schema_CsdlSo10` · typed DTO/UiSchema · seed · DOMAIN-MAP · geom jsonb vs PostGIS.

## 6. Prototype + reviewUrl

| | |
|--|--|
| HTML | `specs/csdl-so-10/ui/prototype/csdl-so-10-list-prototype.html` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/csdl-so-10/ui/prototype/csdl-so-10-list-prototype.html` |
| peerStdUrl | `http://localhost:9301/so-ts/csdl-so-sach?resource=route-strip-maps` |
| Zones tagged | `data-des-id` DES-GRID-A/B/B-FILTER/C/D/Z · DES-FORM-Z1–Z3 · DES-ENTRIES · DES-MAP-F · DES-MAP-BAR · DES-LEAVE |
| Sample rows | **synthetic UI chrome only** · **cấm** demo-json SSOT |
| Map in proto | chrome mock host→bar · Dev wires live Leaflet |

## 7. design_confirm

| | |
|--|--|
| Gate | `design_confirm` |
| Result | **approve** |
| Reason | autoApprove=ON · DoR PASS · control-map = controlHint · Kind F chrome · prototype + reviewUrl · filter-bar HARD · Grid+Map AC · Q-* PO resolved · hash skip |
| Board | skipped (autoApprove) |

## 8. Out of scope / Cấm

- ERP.* / Domains/Master / invent infra / so-ts API
- Cesium / 3D Twin / Excel full wizard (OUT)
- Guid IdCode · merge Sổ TS · parent JSON-only DoD
- Demo/localStorage SSOT · re-scan demo (**GAP-DES-DEMO-RESCAN-01**)
- yarn build / e2e / start:std ở Design
- contractor/manageUnit SearchInput P1 (DEFER P2)
- Master province P1 (DEFER P2)
- OSM.org/Esri CDN chip trên MFE

## 9. Handoff

| Next | Need |
|------|------|
| **SA** | Schema_CsdlSo10 · typed DTO/UiSchema · seed `route-strip-maps` · DOMAIN-MAP · geom jsonb vs PostGIS |
| TL/Dev | alias `/csdl-so-10` + typed form + **`/agent-dev-oms-map`** R1–R11 |
| QA | Grid+Map AC · e2e queued `/agent-qa*` only |

## DoR design

- [x] Kind B+D+F · zones A–D+F+H · Slideout Z1–Z3 · DES-MAP-F/BAR
- [x] Control-map chốt = controlHint (filters · header · entries · map)
- [x] Filter-bar HARD · Grid AC G-01…G-10 · Map AC M-01…M-12
- [x] Prototype HTML + browser-openable reviewUrl · real_view_parity v1
- [x] design_confirm **approve** (autoApprove)
- [x] hash skip · **cấm** re-scan demo
- [x] handoff compact ≤5KB
- [x] **cấm** Dev/BE · e2e · start:std · yarn build
