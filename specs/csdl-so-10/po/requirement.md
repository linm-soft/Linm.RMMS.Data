# PO — Requirement — csdl-so-10 (Sổ 10 — Bình đồ duỗi thẳng tuyến)

| Field | Value |
|-------|-------|
| feature | `csdl-so-10` |
| this role | `po` · `/agent-po` |
| changeScope | `new_page` |
| packKind | **`map`** (Kind **B** list A–D + Kind **D** Slideout/dock + Kind **F** map host · typed T-SO-10) — PO confirm |
| Feature Kind | **B** list · **D** Slideout Z1–Z3 · **F** map OMS · entries `pattern_inline_grid` |
| gap | `new_page` · seed resource + typed book + Kind F · GAP-SO10-* + GAP-CSDL-* |
| mode | `feature_context` · **no Excel** · CTX + analy + hub demo zone ref · sourceKind=`synthetic` |
| status | `done` |
| requestSource | run packet `task_c1402f06` · `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · `specs/_data-analy/features/csdl-so-10-control-hint.md` · `csdl-so-10-real-data.md` · contentHash `sha256:e444b5c2b3c297fc9affd2c72aae7f06378eab566c213c88cbdc972a10fae30a` · headerFingerprint `sha256:8d4cc58a120fddd4f98ee78c5876a4eecea942231f87b3df9d5e4ffc025e54ad` · analy `task_7770663d` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` · alias **`/csdl-so-10`** · hub **`/so-ts/csdl-so-sach?resource=route-strip-maps`** |
| mfeStdUrl | `http://localhost:9301/csdl-so-10` |
| hubDeepLink | `http://localhost:9301/so-ts/csdl-so-sach?resource=route-strip-maps` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · **`api/v1/asset/csdl-records?resource=route-strip-maps`** · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` · **cấm** `api/v1/so-ts/*` |
| domain | **Asset** |
| resource | `route-strip-maps` (**NEW** · seed catalog — **GAP-SO10-RES-01** / **GAP-CSDL-CUC-05**) |
| formNo | `10` · title VN **Bình đồ duỗi thẳng tuyến** |
| IdCode | `SO-yyyyMMdd-nnnn` · **cấm** Guid |
| MapGateSlash | **`/agent-dev-oms-map`** · R1–R11 (+ R4b/R4c/R4e/R5b/R7b/R7c · R-UX · R-LEAVE) |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| updatedAt | `2026-09-06T00:35:00.000Z` |
| taskId | `task_c1402f06` · analy `task_7770663d` |
| skillVersion | `2026.08.25.01` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.05.8` |

## 1. Goal

Chốt **new_page** typed **Sổ 10 — Bình đồ duỗi thẳng tuyến** (T-SO-10 · strip theo Km + Kind F map corridor) trên resource `route-strip-maps`: Kind B list + Kind D Slideout CRUD + Kind F map OMS · header T-SO-10 (thầu · Km · kỳ · geometry) + entries strip theo Km · **cấm** DoD chỉ 3 ô `detail*` / `col1–3`.

Persona: Khu QLĐB · ĐV quản lý tuyến · kỹ thuật viên bình đồ · Hạt trưởng.

**packKind confirm:** `map` (data-analy đề xuất · PO chốt). **Không** report pack · Import/Export Excel **OUT pack** · map canvas Kind F **IN pack** · `devSlash`=`/agent-dev-oms-map`.

**≠** Sổ TS `so-ts-*` (deep-link hub only) · ≠ hub Kind G shell `csdl-so-sach` (giữ entry; alias mfeStd riêng) · ≠ Cesium / 3D Twin P1.

**Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** invent `api/v1/infra/*` · **cấm** demo-json / localStorage SSOT · **cấm** re-scan demo HTML (**GAP-PO-DEMO-RESCAN-01**).

## 2. Current → New (`new_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B+§D · `analyzedAt=2026-09-06T00:25:00.000Z` · contentHash khớp · **không** crawl demo/CTX lại.

| Layer | Current (live) | New (PO chốt) |
|-------|----------------|---------------|
| Catalog | Resource **MISSING** | Seed `route-strip-maps` + hub card formNo=`10` (**GAP-SO10-RES-01** / **GAP-CSDL-CUC-05**) |
| Entry | Không route / không card | Alias **`/csdl-so-10`** + hub `?resource=route-strip-maps` (**GAP-SO10-ROUTE-01**) |
| Hub label | — | Title/card **«Sổ 10 — Bình đồ duỗi thẳng tuyến»** |
| List Kind B | — | Typed cols: bookNo · contractor · road · Km · period · status |
| Form Kind D | generic Col1–3 nếu bootstrap | Typed header T-SO-10 + strip entries theo Km (**GAP-SO10-TYPED-01** / **GAP-CSDL-CUC-03**) |
| Map Kind F | — | OMS R1–R11 · OSRM centerline · Fit · line levels · host→bar (**GAP-SO10-MAP-01** / **GAP-CSDL-CUC-10**) |
| Fallback | — | `stripImageUrl` File khi empty geom / GIS chưa READY (**Q-SO10** / **GAP-SO10-FALLBACK-01**) |
| `roadCode`/`roadName` | — | **SearchInput** `road-route` filter + form (**GAP-CSDL-ROAD-01**) |
| `province` | LOOKUP_STATIC 5 tỉnh | **Giữ** LOOKUP_STATIC P1 (**Q-PROV**) · master = P2 |
| `contractor` / `manageUnit` | Text | **Text P1** · SearchInput org/partner **DEFER P2** (**Q-ORG** / **GAP-CSDL-ORG-01**) |
| `status` (sổ) | — | Dropdown LOOKUP_STATIC **`tot\|tb\|kem\|hong`** P1 |
| `alignType` | — | Dropdown **`thang\|cong`** (**Q-ALIGN**) |
| `structureType` | — | Dropdown **`none\|cau\|ham\|cong`** (**Q-STRUCT**) |
| `surfaceStatus` | — | Dropdown **`tot\|tb\|kem`** (**Q-SURF**) |
| `geometry` | — | Map LineString/MultiLineString · srid 4326 · shell jsonb P1 (**Q-GEOM** → SA PostGIS) |
| DOMAIN-MAP | thiếu `csdl-so-10` | SA thêm slug → Asset (**GAP-SO10-DM-01**) |
| API | shell `…/csdl-records` · resource chưa seed | **Giữ prefix** · `?resource=route-strip-maps` · widen typed + geo — SA |
| Import/Export | Stub | **OUT pack** (**GAP-CSDL-XLS-01**) |

**Không đổi:** API prefix `api/v1/asset/csdl-records` · Kind B A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · IdCode `SO-yyyyMMdd-nnnn` · pagination 50/100/200/500 · **cấm** ERP.* · **cấm** Guid IdCode · **cấm** merge Sổ TS · **cấm** invent Cesium P1.

### GAP IDs (PO · P1 trừ DEFER/OUT)

| ID | New | P1 |
|----|-----|-----|
| GAP-SO10-RES-01 | Seed resource `route-strip-maps` + hub card | **YES** |
| GAP-SO10-TYPED-01 | Typed header + strip entries thay detail*/col1–3 | **YES** |
| GAP-SO10-MAP-01 | Kind F OMS map strip · R1–R11 | **YES** |
| GAP-SO10-ROUTE-01 | Alias `/csdl-so-10` + hub entry | **YES** |
| GAP-SO10-DM-01 | DOMAIN-MAP row `csdl-so-10` → Asset | **YES** (SA) |
| GAP-SO10-FALLBACK-01 | File `stripImageUrl` khi empty geom | **YES** (fallback UX) |
| GAP-CSDL-ROAD-01 | SearchInput road-route | **YES** |
| GAP-CSDL-PROV-01 | Province LOOKUP_STATIC P1 | **YES** · master P2 |
| GAP-CSDL-ORG-01 | contractor/manageUnit SearchInput | **DEFER P2** |
| GAP-CSDL-CUC-03 | Đóng gap cột typed Sổ 10 | **YES** (khi typed PASS) |
| GAP-CSDL-CUC-05 | Seed Sổ 10 resource | **YES** (cùng RES-01) |
| GAP-CSDL-CUC-10 | packKind map · Dev OMS | **YES** |
| GAP-DA-MAP-01 | §D real-data | **closed** (analy) |
| GAP-CSDL-XLS-01 | Import/export sheet bình đồ | **OUT pack** |

## 3. Open Q — PO resolve (autoApprove)

| Q | Decision |
|---|----------|
| **Q-SO10** | P1: Kind F map OMS **bắt buộc** khi có GIS/clip READY · empty geom → toast «Chưa có bình đồ» + CTA vẽ **và** optional File `stripImageUrl` fallback · **cấm** thay map bằng ảnh-only khi GIS READY · **cấm** Cesium |
| **Q-ALIGN** | P1: Dropdown LOOKUP_STATIC **`thang\|cong`** · soft/hard curve = **DEFER** · **cấm** free-text · **cấm** invent master |
| **Q-STRUCT** | P1: Dropdown LOOKUP_STATIC **`none\|cau\|ham\|cong`** · `structureName` Text khi ≠ none · Search catalog CT = **DEFER** |
| **Q-SURF** | P1: Dropdown LOOKUP_STATIC **`tot\|tb\|kem`** · master mặt đường = P2 |
| **Q-PROV** | **keep_static** 5 tỉnh P1 · master province = P2 |
| **Q-ORG** | **Text P1** cho `contractor` / `manageUnit` · partner-unit / org-unit SearchInput = P2 (**GAP-CSDL-ORG-01**) |
| **Q-GEOM** | P1: lưu `geometry` + `geomType` + `srid=4326` trên shell jsonb cùng `csdl-records` · PostGIS typed table = **SA quyết** · **cấm** invent geo path ngoài cite |

## 4. DoD (đo được)

1. Entry: mfeStd `/csdl-so-10` **và** hub `?resource=route-strip-maps` mở cùng list typed · title VN «Sổ 10 — Bình đồ duỗi thẳng tuyến» · back hub · **cấm** slug trên card.
2. List load BFF `GET …/csdl-records?resource=route-strip-maps` — empty grid VN «Chưa có bình đồ duỗi thẳng» · **cấm** fake row · **cấm** demo-json/LS SSOT · resource chưa seed → toast/empty (Dev seed trước).
3. Zone A: title VN · back hub · meta resource=`route-strip-maps` — **cấm** Thêm mới trên A.
4. Zone B: filter 1 hàng — SearchTextInput · province · status · road SearchInput · fromDate · toDate · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub — **search must work** · **cấm** nút Tìm riêng · filter đổi → page=1.
5. Zone C: `LinCatalogDataGrid` kéo cột ON · STT · Mã · Số quyển · Nhà thầu · Đường · Km · Kỳ · TT · row menu Xem/Sửa/Copy/Xóa/Lịch sử.
6. Zone D: `LinCatalogListPagination` **50 / 100 / 200 / 500**.
7. Slideout Kind D Z1–Z3: Create/Edit/View/Copy — required: bookNo · contractor · roadCode · kmFrom · kmTo · periodStart · province · ≥1 entry với kmFrom · kmTo · code IdCode `SO-` readonly.
8. View = `readOnly` — **cấm** Input disabled xám toàn form.
9. Entries `pattern_inline_grid` add/remove · typed strip T-SO-10 — **cấm** chỉ Col1–3.
10. `roadCode` = SearchInput road-route bind `roadName` — **cấm** free-text khi master READY.
11. Map Kind F: live Leaflet · clip basemap · OSRM · Fit · line levels · host→bar · **cấm** OSM.org/Esri CDN chip · **cấm** screenshot/gradient map · **cấm** isolate legend trên MFE.
12. Empty map: toast + CTA vẽ / upload `stripImageUrl` — **cấm** blank silent.
13. Leave-confirm dirty form **và** dirty draw → `LeaveConfirmModal` · toast 4xx/5xx · 404 detail → đóng slideout — **cấm** native alert/confirm.
14. Typography: label **13** · input D14/M16 (**GAP-TYP-01**).
15. `yarn build` / e2e / `start:std` **chỉ** Dev/QA — PO **cấm**.

## 5. Grid AC (Kind B list · HARD · cùng pack map)

| AC | Assert |
|----|--------|
| G-01 | List render `LinCatalogDataGrid` · không crash khi empty |
| G-02 | SearchTextInput lọc mã/sổ/đường/thầu — **không** nút Tìm riêng |
| G-03 | Filter province/status/road/from/to → refetch · page=1 |
| G-04 | Sort/kéo cột default ON · STT ổn định |
| G-05 | Row menu: Xem / Sửa / Copy / Xóa / Lịch sử |
| G-06 | Pagination 50/100/200/500 · đổi size → page=1 |
| G-07 | Tạo mới → Slideout Create · Lưu → row mới trên grid |
| G-08 | Soft-delete → row biến khỏi list active · toast OK |
| G-09 | 422 thiếu `resource` → toast · không blank page |
| G-10 | Empty copy VN «Chưa có bình đồ duỗi thẳng» |

## 5b. Map AC (packKind=map · HARD · `/agent-dev-oms-map`)

| AC | Assert |
|----|--------|
| M-01 | Live Leaflet — **cấm** screenshot / CSS gradient giả map (R1) |
| M-02 | Basemap MFE = clip Tiêu chuẩn/Vệ tinh — **cấm** OSM.org/Esri/Google chip (R2) |
| M-03 | Toolbar / Fit / basemap có `title` + `aria-label` (R3) |
| M-04 | Layout host→bar · dock default · full flex fill — **cấm** `height: NNvh` · **cấm** 3D placeholder (R4–R4e) |
| M-05 | Sat maxNativeZoom 17 / no white-box (R5/R5b) |
| M-06 | Corridor underlay + track pane · CT pins theo structureType (R7/R7b) |
| M-07 | MFE map click = popup only — **cấm** auto zoom-isolate (R7c) |
| M-08 | OSRM `routeAlongStreets` / snap — fallback nét đứt + toast · **cấm** silent fail (R8/R9) |
| M-09 | Overlay z-index ≥ 5000 (R10) |
| M-10 | Load Fit = `fitVnClipMap` / bbox Km corridor — **cấm** street-level default (R11) |
| M-11 | Dirty draw/form → `LeaveConfirmModal` · **0** `window.alert` (R-LEAVE) |
| M-12 | Save geometry + geomType + srid cùng PUT/POST resource |

## 6. Screens

| Screen | Route / surface | Pattern | Notes |
|--------|-----------------|---------|-------|
| List | `/csdl-so-10` | Kind B A–D | `LinPageLayout kind="catalog"` |
| Hub entry | `/so-ts/csdl-so-sach?resource=route-strip-maps` | Hub card | open-resource |
| Form C/E/V/Copy | Kind D Slideout/dock Z1–Z3 | Slideout | Footer Lưu/Hủy · leave-confirm |
| Map | Kind F host trong form/dock | Full map host | `devSlash`=`/agent-dev-oms-map` · host→bar |
| Schema | `LinCatalogUiSchemaEditorModal` | Modal | catalogKind `route-strip-maps` |
| History | `LinCatalogHistoryModal` | Modal | **cấm** invent History API path |
| peerStdUrl | hub `?resource=route-strip-maps` | — | Design reviewUrl= |

## 7. Leave / dirty

| Case | UX |
|------|-----|
| Slideout dirty + Hủy / X / Esc / route change | `LeaveConfirmModal` · confirm → discard · cancel → stay |
| Map draw dirty (unsaved geometry) | `LeaveConfirmModal` — **cấm** native |
| View mode | Không leave-confirm (readOnly) |
| Save success | Đóng slideout · refresh list · Fit map · toast |
| Save validation fail | Ở lại · toast field |

## 8. Control map (PO → Design chốt)

### Filter (Zone B)

| key | Label | controlHint | P1 |
|-----|-------|-------------|-----|
| search | Tìm kiếm | SearchTextInput | YES |
| province | Tỉnh/TP | Dropdown LOOKUP_STATIC | YES |
| status | Tình trạng | Dropdown tot/tb/kem/hong | YES |
| roadCode | Tên đường | SearchInput road-route | YES |
| fromDate | Từ ngày | Date | YES |
| toDate | Đến ngày | Date | YES |

### Form header (Z2)

| key | Label | controlHint | req | P1 |
|-----|-------|-------------|-----|-----|
| code | Mã | Text ro | auto | YES |
| bookNo | Số quyển / sổ | Text | * | YES |
| contractor | Nhà thầu | Text | * | YES · SearchInput partner-unit P2 |
| roadCode | Mã đường | SearchInput road-route | * | YES |
| roadName | Tên đường | Text display | * | YES (bind) |
| kmFrom | Lý trình từ | Number | * | YES |
| kmTo | Lý trình đến | Number | * | YES |
| periodStart | Ngày bắt đầu kỳ | Date | * | YES |
| periodEnd | Ngày kết thúc kỳ | Date | | YES |
| province | Tỉnh | Dropdown | * | YES |
| manageUnit | ĐV QL | Text | | YES · org-unit P2 |
| status | Tình trạng | Dropdown tot/tb/kem/hong | | YES |
| stripImageUrl | Ảnh bình đồ | File | | YES · fallback Q-SO10 |
| geometry | Geometry | Map | * (khi map) | YES |
| geomType | Loại geom | Text ro | auto | YES |
| srid | SRID | Number ro | auto | YES · 4326 |
| notes | Ghi chú sổ | Textarea | | YES |

### Entries[] inline grid (T-SO-10 · strip theo Km)

| key | Label | controlHint | req | P1 |
|-----|-------|-------------|-----|-----|
| lineNo | STT | Integer ro | auto | YES |
| kmFrom | Km từ | Number | * | YES |
| kmTo | Km đến | Number | * | YES |
| baseWidthM | B nền (m) | Number | | YES |
| surfaceWidthM | B mặt (m) | Number | | YES |
| medianWidthM | KCMĐ (m) | Number | | YES |
| thicknessM | Dày (m) | Number | | YES |
| gradePct | Dốc dọc (%) | Number | | YES |
| alignType | Thẳng / cong | Dropdown thang/cong | | YES |
| structureType | CT cầu/hầm/cống | Dropdown none/cau/ham/cong | | YES |
| structureName | Tên CT | Text | | YES · khi có CT |
| atgtLeft | ATGT trái | Text | | YES |
| atgtRight | ATGT phải | Text | | YES |
| junction | Nút giao | Text | | YES |
| ditchLeft | Rãnh trái | Text | | YES |
| ditchRight | Rãnh phải | Text | | YES |
| wallLeft | Tường trái | Text | | YES |
| wallRight | Tường phải | Text | | YES |
| scdkDa | SCĐK / DA | Text | | YES |
| surfaceStatus | TT mặt | Dropdown tot/tb/kem | | YES |
| notes | Ghi chú đoạn | Textarea | | YES |

## 9. API / bind (cite real-data · SA widen)

| Op | Path |
|----|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=route-strip-maps` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` body `resource=route-strip-maps` + typed + geometry |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE …/{id}` soft |
| Road lookup | `GET /integration/road-routes/search` |

FE cite: `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records` — typed page **reuse** BASE. SA: Schema_CsdlSo10 · typed DTO/UiSchema · seed catalog `route-strip-maps` · DOMAIN-MAP `csdl-so-10` · geom jsonb vs PostGIS.

Shell tables: `rmms_csdl_catalog_records` · `rmms_csdl_book_entries` · typed pair + geom — SA/Dev (**không** Step 4b ở PO).

## 10. Context / Demo inventory (hash skip · path only)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/csdl-so-10.md` | P0 · từ analy |
| CTX-02 | `docs/context/features/csdl-so-sach.md` | hub Kind G |
| CTX-03 | `docs/context/features/csdl-cuc-2026.md` | epic Sổ 10 = map |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` | zone ref · **cấm** SSOT |
| DEM-02 | `Linm.RMMS.Demo/src/demo/asset/csdl-so-sach.html` | UI chrome · **cấm** crawl lại |
| DI | — | cluster analy T-SO-10 · synthetic |

## 11. Out of scope (P1)

- Report pack · Excel import-export sheet (**GAP-CSDL-XLS-01** OUT)
- Cesium / 3D Twin / invent `api/v1/infra/*`
- Merge ROW với Sổ TS
- Master province · org-unit / partner-unit SearchInput (P2)
- soft/hard curve align · structure Search catalog (DEFER)
- ERP.* / Domains/Master
- yarn build / e2e / start:std ở role PO · re-scan demo

## 12. Handoff Design

1. Chốt control-map từ §8 · filter-bar HARD 1 hàng · **lấp hàng rồi wrap**.
2. Prototype typed list + slideout entries strip T-SO-10 + Kind F map chrome · **cấm** Col1–3 only.
3. reviewUrl · title VN «Sổ 10 — Bình đồ duỗi thẳng tuyến».
4. Hub card + alias route · formNo 10 · peerStdUrl hub resource.
5. Map chrome host→bar · Fit · OSRM · line levels · fallback File slot — **cấm** OSM.org chip · **cấm** invent Cesium.
6. `devSlash` handoff Dev = `/agent-dev-oms-map`.

## 13. DoR PO

- [x] packKind=`map` confirm · changeScope=`new_page`
- [x] Grid AC G-01…G-10 · Map AC M-01…M-12 · Screens · Leave
- [x] Open Q resolved (autoApprove)
- [x] GAP P1 / DEFER / OUT
- [x] control map + API cite real-data · MapGateSlash
- [x] handoff compact `handoff/po-compact.md`
- [x] STATUS updated · lock release
- [x] **cấm** yarn build/e2e/start:std · **cấm** re-scan demo
