# PO — Requirement — csdl-bieu-02 (Biểu 02 — Thống kê cầu)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-02` |
| title | CSDL Biểu 02 — Thống kê cầu |
| this role | `po` · `/agent-po` |
| changeScope | **`new_page`** (STATUS + packet · typed Biểu 2 trên resource `bridges`) |
| packKind | **`list`** (**PO confirm** · data-analy đề xuất · Kind B list A–D + Kind D Slideout) |
| Feature Kind | **B** catalog A–D+F · **D** Slideout Z1–Z3 · **2col** · sections · **cấm** Full-page form |
| resource | `bridges` |
| formNo | `02` · title VN **Thống kê cầu** |
| columns | **48** (Excel Biểu 2) + legacy 64–69 keep_hidden P1 |
| IdCode | prefix **`BR`** · `BR-yyyyMMdd-nnnn` · **cấm** Guid |
| peerSoTs | none trên map Cục (—) · deep-link Sổ 6 `bridge-inspections` / passport OK · **cấm** merge 1 form (**GAP-BIEU02-PEER-01**) |
| gap | GAP-BIEU02-TYPED-01 · GAP-BIEU02-ROUTE-01 · GAP-BIEU02-GPS-01 · GAP-BIEU02-BEAM-01 · GAP-BIEU02-SUB-01 · GAP-BIEU02-LOAD-01 · GAP-BIEU02-FURN-01 · GAP-BIEU02-LEGACY-01 · GAP-BIEU02-PEER-01 · GAP-BIEU02-DMAP-01 · GAP-BIEU02-MAP-01 · GAP-CSDL-ROAD-01 · GAP-CSDL-PROV-01 · GAP-CSDL-ORG-01 · GAP-CSDL-XLS-01 · GAP-CSDL-CUC-03 · GAP-TYP-01 |
| mode | `feature_context` · CTX + cluster analy + hub demo zone ref · sourceKind=`synthetic` · **cấm** demo-json/LS SSOT |
| status | `confirmed` (autoApprove=ON · task `task_ba5815a6`) |
| requestSource | queue CHAIN `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · prior data_analy **confirmed** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · `specs/_data-analy/features/csdl-bieu-02-control-hint.md` · `csdl-bieu-02-real-data.md` · compact `handoff/data_analy-compact.md` · contentHash `sha256:bd73974e607f886dd38736015cb5a6a3fb82aff9d6a63328963ceb5c4be436a2` · headerFingerprint `sha256:34e1fcb051f6010fbe70ebdffab71df3d6f441a373d3be0249dd601e596d5591` · analy `task_dd8553f8` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | **`/csdl-bieu-02`** (alias Navigate **now**) · hub `/so-ts/csdl-so-sach?resource=bridges` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-02` |
| hubDeepLink | `http://localhost:9301/so-ts/csdl-so-sach?resource=bridges` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · live `api/v1/asset/csdl-records?resource=bridges` · BFF `web-bff/api/v1/asset/csdl-records` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` · **cấm** `api/v1/so-ts/*` invent · **cấm** `api/v1/rmms/*` · **cấm** CRUD qua `/bridges/{id}/passport` |
| domain | **Asset** |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-02-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-02-real-data.md` |
| contentHash | `sha256:bd73974e607f886dd38736015cb5a6a3fb82aff9d6a63328963ceb5c4be436a2` |
| headerFingerprint | `sha256:34e1fcb051f6010fbe70ebdffab71df3d6f441a373d3be0249dd601e596d5591` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX / DemoRoot (**GAP-PO-DEMO-RESCAN-01**) |
| parent | hub `csdl-so-sach` · cluster `csdl-cuc-2026` · Excel sheet Biểu 2 |
| taskId | `task_ba5815a6` · analy `task_dd8553f8` |
| updatedAt | `2026-09-05T08:05:00.000Z` |
| versionGate | `ok` (skill/schema/workflow khớp analy · pack `po/list@session`) |

**packKind confirm:** `list` (data-analy đề xuất · PO chốt). Kind **B** list A–D+F + Kind **D** Slideout 2col sectioned trên MFE Asset host `:9301` — **không** report pack · **không** Kind F map canvas · **không** Excel import wizard trong pack này (OUT **GAP-CSDL-XLS-01**).

**≠** Sổ 6 / passport (peer deep-link) · ≠ hub generic 3 ô `detail*` — đây là **typed Biểu 02** 48 cột.

**Cấm:** implement · re-scan DEM · form chỉ 3 ô `detail*` · merge form passport/Sổ 6 · invent map · invent API · ERP.* · demo-json / localStorage SSOT · Guid IdCode · yarn build/e2e/start:std ở role PO · start role khác (**GAP-PKT-ROLE-01**).

## 1. Goal

Chốt requirement **new_page** cho **Biểu 02 — Thống kê cầu** (`resource=bridges`): list + Slideout typed **48 cột** Excel Biểu 2 · GPS 3 điểm · dầm / phần dưới / tải+gối / lan can+thoát · thay generic hub form · giữ API prefix `csdl-records` · alias route `/csdl-bieu-02` + hub entry.

Persona: Khu QLĐB · Văn phòng Cục · Ban QLDA (web).

**Delta pack này (SSOT lock từ analy):**

1. Form/list typed 48 cột — **cấm** chỉ `detailPrimary`/`detailSpec`/`detailExtra` (**GAP-BIEU02-TYPED-01** / **GAP-CSDL-CUC-03**).
2. Alias mfeStd `/csdl-bieu-02` Navigate P1 · giữ hub deep-link (**Q-ROUTE** / **GAP-BIEU02-ROUTE-01**).
3. GPS 3 điểm = 6 Number lat/lng (**Q-GPS** six_numbers / **GAP-BIEU02-GPS-01**).
4. Dầm + phần dưới + gối/lan can/thoát/PQ (**GAP-BIEU02-BEAM-01** / **SUB-01** / **FURN-01**).
5. Tải TK/TT = Text P1 (**Q-LOAD** / **GAP-BIEU02-LOAD-01**) — SA refine unit.
6. Legacy 64–69 = keep_hidden P1 (**Q-LEGACY** / **GAP-BIEU02-LEGACY-01**).
7. Form sections 5 khối (**Q-SECTION** sectioned).
8. `roadCode`/`roadName` = SearchInput `road-route` (**GAP-CSDL-ROAD-01**).
9. Province LOOKUP_STATIC P1 (**Q-PROV** keep_static).
10. LeaveConfirmModal dirty · toast 4xx/5xx — **cấm** native alert/confirm.
11. Peer Sổ 6 / passport deep-link only — **cấm** merge form (**GAP-BIEU02-PEER-01**).
12. DOMAIN-MAP thêm slug `csdl-bieu-02` (**GAP-BIEU02-DMAP-01** — SA).

## 2. Current → New (`new_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · `analyzedAt=2026-09-05T07:55:00.000Z` · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live inventory analy) | New (this pack · copy analy) |
|-------|--------------------------------|------------------------------|
| Entry | Hub-only `?resource=bridges` | Alias **`/csdl-bieu-02`** + hub entry — **GAP-BIEU02-ROUTE-01** |
| List Kind B | Generic road/km/detail cols | Typed cols bridgeName · lengthM · beamType · GPS summary |
| Form Kind D | 3 ô `detail*` polymorphic | Typed **48 cột** Slideout 2col Z1–Z3 sectioned — **GAP-BIEU02-TYPED-01** |
| GPS | — | 6 Number lat/lng ×3 điểm — **Q-GPS** |
| Dầm / phần dưới | — | span/beam + mố/trụ — **BEAM/SUB** |
| Tải / gối / lan can | — | Text/Number/Dropdown/Checkbox — **LOAD/FURN** |
| road | Text free (hub) | SearchInput `road-route` — **GAP-CSDL-ROAD-01** |
| province | LOOKUP_STATIC 5 tỉnh | **keep_static** P1 — **Q-PROV** |
| manageUnit | Text | Text P1 · SearchInput org-unit **DEFER P2** — **GAP-CSDL-ORG-01** |
| Legacy | Excel 64–69 | **keep_hidden** P1 — **Q-LEGACY** · SA map/drop |
| Import | stub | Sheet 48 cột · legacy map **OUT** |
| API | `…/csdl-records?resource=bridges` | **Giữ prefix** · widen typed DTO/UiSchema — SA |
| Peer | passport `/bridges/{id}` · Sổ 6 | Deep-link · **cấm** merge / CRUD passport |
| DOMAIN-MAP | thiếu slug | Thêm `csdl-bieu-02` → Asset — **GAP-BIEU02-DMAP-01** |

**Không đổi:** Kind B A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · `LinCatalogListPagination` 50/100/200/500 · prefix `api/v1/asset/csdl-records` · resource key `bridges` · IdCode **cấm** Guid · **cấm ERP.*** · map = none.

### GAP IDs (PO bắt buộc Design/Dev đóng P1 trừ DEFER/OUT)

| ID | New | P1 |
|----|-----|----|
| GAP-BIEU02-TYPED-01 | Typed 48 cột thay generic detail* | **YES** |
| GAP-BIEU02-ROUTE-01 | Alias `/csdl-bieu-02` Navigate | **YES** (`alias_now`) |
| GAP-BIEU02-GPS-01 | GPS 3 điểm lat/lng×3 | **YES** (`six_numbers`) |
| GAP-BIEU02-BEAM-01 | Dầm: nhịp · sơ đồ · dài · loại | **YES** |
| GAP-BIEU02-SUB-01 | Phần dưới mố/trụ | **YES** |
| GAP-BIEU02-LOAD-01 | Tải TK/TT Text P1 | **YES** product · SA unit |
| GAP-BIEU02-FURN-01 | Gối · lan can · ống thoát · PQ · đỉnh | **YES** |
| GAP-BIEU02-LEGACY-01 | Legacy 64–69 keep_hidden | **YES** UI hidden · SA map/drop |
| GAP-BIEU02-PEER-01 | Deep-link Sổ 6/passport · không merge | **YES** (nav rule) |
| GAP-BIEU02-DMAP-01 | DOMAIN-MAP thêm slug | **YES** (SA) |
| GAP-BIEU02-MAP-01 | GPS fields only · cấm map canvas | **YES** |
| GAP-CSDL-ROAD-01 | SearchInput `road-route` filter+form | **YES** |
| GAP-CSDL-PROV-01 | Province LOOKUP_STATIC | **YES** (keep_static) · master = P2 |
| GAP-CSDL-CUC-03 | Đóng gap Biểu 2 khi typed PASS | **YES** (via TYPED) |
| GAP-TYP-01 | label 13 · input D14/M16 | **YES** |
| GAP-CSDL-ORG-01 | manageUnit SearchInput org-unit | **DEFER P2** |
| GAP-CSDL-XLS-01 | Import/export sheet Biểu 2 | **OUT pack** |

## 3. DoD (đo được)

1. Entry `/csdl-bieu-02` **và** hub `?resource=bridges` mở cùng list typed — title VN «Biểu 02 — Thống kê cầu» · back hub · **cấm** slug trên card hub.
2. List BFF `GET …/csdl-records?resource=bridges` — empty grid VN «Chưa có cầu» · CTA Tạo mới · **cấm** fake row / demo-json / LS SSOT.
3. Zone A: title VN · back `/so-ts/csdl-so-sach` — **cấm** Thêm mới trên A.
4. Zone B: `LinErpListFilterBar` 1 hàng wrap · input+🔍 cụm phải — SearchTextInput · province · status · road SearchInput · kmFrom/kmTo · beamType optional · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub — filter đổi → page=1 · **search must work** · **cấm** nút Tìm riêng.
5. Zone C: `LinCatalogDataGrid` typed cols (bridgeName · lengthM · beamType · GPS summary · không chỉ 3 detail) · STT · row menu Xem/Sửa/Copy/Xóa/Lịch sử · kéo cột ON.
6. Zone D: `LinCatalogListPagination` **50 / 100 / 200 / 500**.
7. Zone F: `LinCatalogUiSchemaEditorModal` catalogKind **`bridges`** (typed) — **cấm** `LinListTableConfigModal`.
8. Slideout Kind D Z1–Z3 2col **sectioned** (GPS / Dầm / Phần dưới / Tải+Gối / Lan can+thoát + định danh): Create/Edit/View/Copy — đủ cột Excel Biểu 2 · **cấm** form chỉ 3 ô `detail*`.
9. Required P1: `bridgeName` · `roadCode`/`roadName` · `province` · `kmFrom`/`kmTo` · GPS 6 số · `spanCount` · `beamType` · `lengthM` · `carriageWidthM` · `status` · code IdCode `BR-…` readonly.
10. View = `readOnly` — **cấm** Input disabled xám toàn form.
11. GPS = 6 Number · **cấm** invent map canvas (**GAP-BIEU02-MAP-01**).
12. Leave-confirm dirty · toast 4xx/5xx — **cấm** native alert/confirm.
13. Typography: label **13** · input D14/M16 (**GAP-TYP-01**).
14. Peer Sổ 6 / passport = navigate only · **cấm** merge form / CRUD passport.
15. `yarn build` / e2e / `start:std` **chỉ** Dev/QA — PO **cấm**.

## 4. CTX / DEM / DI inventory (hash skip — đọc analy · **không** re-crawl)

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/csdl-bieu-02.md` | feature |
| CTX-02 | `docs/context/features/csdl-so-sach.md` | parent hub |
| DA-01 | `specs/_data-analy/features/csdl-bieu-02-control-hint.md` | controlHint SSOT · **done** |
| DA-02 | `specs/_data-analy/features/csdl-bieu-02-real-data.md` | real-data §A–§F |
| DA-03 | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | cluster Biểu 2 · 48 cột |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` | entry · zone ref only |
| DEM-02 | `Linm.RMMS.Demo/src/demo/asset/csdl-so-sach.html` | page · **không** SSOT data |
| DI-01 | `data-import/…/1. Biểu mẫu CSDL.xls` sheet Biểu 2 | Excel cite · import OUT |
| MFE hub | `CsdlSoSachPage` | Kind B live shell |
| MFE form | `CsdlFormSlideout` | generic → typed replace |
| MFE svc | `services/csdlSoSach/endpoint.ts` | `BASE=/asset/csdl-records` |
| BE | `CsdlCatalogRecordsController` · shell entity · typed `Schema_CsdlBieu2` (**SA**) | live CRUD + widen |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · thiếu slug `csdl-bieu-02` |

Normalized header (analy):  
`code|bridgeName|roadCode|roadName|province|kmFrom|kmTo|side|gpsStartLat|gpsStartLng|gpsMidLat|gpsMidLng|gpsEndLat|gpsEndLng|spanCount|spanScheme|beamLengthM|beamType|abutmentCondition|abutmentFoundation|abutmentBody|pierCondition|pierFoundation|pierBody|designLoad|actualLoad|bearingCount|bearingType|railingLengthM|curbAreaM2|handrailType|drainPipeCount|drainPipeLengthM|reflectiveArea10mM2|steelCompositeBeam|pierAbutmentCrown|lengthM|carriageWidthM|builtYear|status|manageUnit|updatedByName|notes|waterClearanceM|approachType|navigationClass|legacyCol64|legacyCol69`

## 5. controlHint (PO chốt · copy data-analy — Design map UI · SA map API)

### List filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên cầu · đường · ghi chú |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | **Q-PROV** keep_static |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC | tot/tb/kem/hong |
| roadCode | Đường | `SearchInput` | **road-route** | **GAP-CSDL-ROAD-01** |
| kmFrom | Từ Km | `Number` | — | filter QS |
| kmTo | Đến Km | `Number` | — | filter QS |
| beamType | Loại dầm | `Dropdown` | LOOKUP_STATIC | optional filter |

### Form fields (Slideout Kind D · Excel Biểu 2 · sectioned)

| # | Field key | Label | controlHint | required | Notes |
|---|-----------|-------|-------------|----------|-------|
| — | code | Mã | `Text` readonly | auto | IdCode `BR-…` · **cấm** Guid |
| 1 | bridgeName | Tên cầu | `Text` | * | |
| 2–3 | roadCode / roadName | Mã/Tên đường | `SearchInput` | * | catalogKind `road-route` |
| 4 | province | Địa danh | `Dropdown` | * | LOOKUP_STATIC P1 |
| 5–6 | kmFrom / kmTo | Từ/Đến Km | `Number` | * | decimal |
| 7 | side | Vị trí L/R | `Dropdown` | | L/R/C/Both |
| 8–13 | gpsStartLat/Lng · gpsMidLat/Lng · gpsEndLat/Lng | GPS đầu/giữa/cuối | `Number` ×6 | * | **Q-GPS** six_numbers · đuôi mố / tim |
| 14 | spanCount | Số nhịp | `Number` | * | int |
| 15 | spanScheme | Sơ đồ nhịp | `Text` | | |
| 16 | beamLengthM | Dài dầm (m) | `Number` | | |
| 17 | beamType | Loại dầm | `Dropdown` | * | DUL/BTCT/dàn thép/I LH/vòm/khác |
| 18 | abutmentCondition | Mố TT | `Dropdown` | | tot/tb/kem/hong |
| 19–20 | abutmentFoundation / abutmentBody | Móng / thân mố | `Text` | | |
| 21 | pierCondition | Trụ TT | `Dropdown` | | tot/tb/kem/hong |
| 22–23 | pierFoundation / pierBody | Móng / thân trụ | `Text` | | |
| 24–25 | designLoad / actualLoad | Tải TK / TT | `Text` | | **Q-LOAD** text · SA unit |
| 26–27 | bearingCount / bearingType | Gối SL / loại | `Number` + `Text` | | |
| 28–30 | railingLengthM / curbAreaM2 / handrailType | Lan can · DT gờ · tay vịn | `Number`/`Text` | | |
| 31–32 | drainPipeCount / drainPipeLengthM | Ống thoát SL / dài | `Number` | | |
| 33 | reflectiveArea10mM2 | DT phát quang 10m | `Number` | | |
| 34 | steelCompositeBeam | Dầm thép LH | `Checkbox` | | |
| 35 | pierAbutmentCrown | Đỉnh trụ/mố | `Text` | | |
| 36–37 | lengthM / carriageWidthM | Cdài cầu / B xe chạy | `Number` | * | |
| 38 | builtYear | Năm XD | `Number` | | year |
| 39 | status | Tình trạng | `Dropdown` | * | LOOKUP_STATIC |
| 40 | manageUnit | ĐV QL | `Text` | | **GAP-CSDL-ORG-01** DEFER P2 |
| 41 | updatedByName | Người cập nhật | `Text` | | audit display |
| 42 | notes | Ghi chú | `Textarea` | | |
| 43–44 | waterClearanceM / approachType | Tĩnh không nước · đường dẫn | `Number`/`Text` | | |
| 45 | navigationClass | Cấp thông thuyền | `Text` | | |
| 46–47 | legacyCol64 / legacyCol69 | Legacy Excel | `Text` hidden | | **Q-LEGACY** keep_hidden |

**Form sections (Q-SECTION = sectioned):** Z1 định danh+lý trình · Z2 GPS · Z3 Dầm · Z3b Phần dưới · Z3c Tải+Gối · Z3d Lan can+thoát+PQ · footer audit/notes.

### Actions

| Action | Surface | Notes |
|--------|---------|-------|
| back-hub | List A | về `/so-ts/csdl-so-sach` |
| create / view / edit / copy / delete | Toolbar + row | soft-delete API |
| save / cancel | Form footer | LeaveConfirmModal dirty |
| import / export | Toolbar | stub · XLS Biểu 2 **OUT** |
| history | Toolbar / row | stub modal OK P2 |
| schema-config | Toolbar | UiSchema typed `bridges` |
| open-so6 / passport | Row optional | deep-link · **cấm** merge |

### Real-data bind (copy §B analy — SA **giữ** path cite)

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=bridges` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` body `resource=bridges` + typed fields |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/csdl-records/{id}` (soft) |
| road-route | `GET /integration/road-routes/search` |
| org-unit | `GET /integration/org-units/search` | **DEFER P2** |

API mirror: `api/v1/asset/csdl-records`. FE cite: `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records`.

**Không** bind CRUD Biểu 2 vào `GET/PUT /api/v1/bridges/{id}/passport`.

### Status / side / beamType (LOOKUP_STATIC)

- status / abutmentCondition / pierCondition: `tot` · `tb` · `kem` · `hong`
- side: `L` · `R` · `C` · `Both`
- beamType: `DUL` · `BTCT` · `DanThep` · `I_LH` · `Vom` · `Khac` (label VN khớp Excel)

## 6. Grid AC (REQUIRED · list packKind)

| ID | AC |
|----|-----|
| AC-G-01 | Zones **A Header · B Toolbar · C Grid · D Pagination** (+ Zone F config) |
| AC-G-02 | Search + province/status/road/kmFrom/kmTo/(beamType) → page=1 khi filter đổi |
| AC-G-03 | Row menu Xem / Sửa / Copy / Xóa / Lịch sử |
| AC-G-04 | `LinCatalogDataGrid` + kéo cột default ON · schema-driven typed |
| AC-G-05 | Footer `LinCatalogListPagination` 50/100/200/500 |
| AC-G-06 | 1× `LinPageLayout` — **cấm** nested CatalogListShell |
| AC-G-07 | Flex + skeleton — **cấm** blank body |
| AC-G-08 | Zone F `LinCatalogUiSchemaEditorModal` catalog `bridges` — **cấm** `LinListTableConfigModal` |
| AC-G-09 | Empty list copy VN «Chưa có cầu» — **cấm** fake row / demo-json / LS SSOT |
| AC-G-10 | Toast 4xx/5xx · Confirm modal — **cấm** `window.alert`/`confirm` |
| AC-G-11 | Filter = **`LinErpListFilterBar`** 1 hàng wrap · **input + 🔍 cụm phải** — **cấm** stack / nút Tìm riêng |
| AC-G-12 | Toolbar FULL: Làm mới · Lịch sử · config · Delete · **+ Tạo mới** · Import/Export stub OK |
| AC-G-13 | Grid flow: sort · filter cột panel · chọn dòng · help đúp/Ctrl+chuột phải |
| AC-G-14 | Typed grid cols — **cấm** chỉ 3 cột detail* |
| AC-G-15 | `roadCode` filter = SearchInput road-route — **cấm** Text free (**GAP-CSDL-ROAD-01**) |
| AC-G-16 | Alias route `/csdl-bieu-02` load cùng resource — **GAP-BIEU02-ROUTE-01** |
| AC-G-17 | GPS summary col OK · **cấm** invent map canvas (**GAP-BIEU02-MAP-01**) |

### Report AC

**N/A** — packKind `list` (**GAP-PO-RPT-01**).

## 7. Screens (REQUIRED)

| Surface | Pattern | FormMode | URL | Tab index | Actions | devSlash |
|---------|---------|----------|-----|-----------|---------|----------|
| S-LIST | Kind **B** A–D+F | filter | `/csdl-bieu-02` · hub `?resource=bridges` | — | search · filter · Tạo mới · Refresh · Delete · config · History | `/agent-dev` |
| S-FORM-CREATE | Kind **D Slideout** Z1–Z3 2col sectioned | create | overlay | — | Lưu · Hủy · leave-confirm | `/agent-dev` |
| S-FORM-EDIT | Kind **D Slideout** | edit | overlay | — | Lưu · Hủy | `/agent-dev` |
| S-FORM-VIEW | Kind **D Slideout** | view | overlay | — | readOnly · **không** disabled xám | `/agent-dev` |
| S-FORM-COPY | Kind **D Slideout** | create (copy) | overlay | — | POST new · clear id · new code | `/agent-dev` |
| S-ACT-DELETE | Confirm modal | — | — | — | soft delete | `/agent-dev` |
| S-HIST | History modal | — | — | — | stub OK P2 | `/agent-dev` |
| S-HUB-ENTRY | Hub card open | — | `/so-ts/csdl-so-sach?resource=bridges` | — | open-resource · title VN | `/agent-dev` |
| S-PEER-SO6 | deep-link only | — | Sổ 6 / passport | — | **Cấm** merge form | — |
| S-SKIP-MAP | deep-link only | — | gis | — | **Cấm** map canvas | — |

**devSlash:** `/agent-dev` (list + slideout · **không** oms-map / ai-detect).

**Cấm** Full-page form URL `/new`·`:id` · **cấm** GOVOne chrome · **cấm** Resource form thay Slideout.

## 8. Leave / alert (REQUIRED)

| Case | Control | Cấm |
|------|---------|-----|
| Form dirty · đóng slideout / navigate / back-hub | `LeaveConfirmModal` + leave guard | `window.confirm` / native dialog |
| API 4xx validation | `useAppToast` business message | `window.alert` |
| API 5xx list/detail | toast error | silent empty / fake success |
| detail 404 | toast · đóng slideout | silent fail |
| thiếu `resource` | không gọi list · API 422 | invent default resource |
| GPS thiếu bắt buộc | validation toast field | silent save |
| Delete | Confirm `Modal` / `useAlert` | native `confirm` |
| Lookup road-route no match | SearchInput empty · save 422 | free-text substitute master |
| Overlay z-index (modal trên Slideout) | `useAlert` / Modal stacked SSOT | z-index hack |

## 9. Open questions — Autopilot chốt

| ID | Question | Decision (PO) |
|----|----------|----------------|
| Q-GPS | GPS 6 số vs widget GIS pick? | **`six_numbers`** — 6 Number lat/lng×3 P1 · gis_pick optional Design later · **cấm** invent map canvas. |
| Q-LOAD | Tải TK/TT Text vs Number+unit? | **`text`** — Text free P1 · SA refine unit/enum nếu Excel bắt buộc. |
| Q-LEGACY | Giữ/drop legacy 64–69? | **`keep_hidden`** P1 · SA map/drop khi import OUT. |
| Q-ROUTE | Alias `/csdl-bieu-02` ngay hay hub-only? | **`alias_now`** — Navigate `/csdl-bieu-02` P1 · giữ hub entry. |
| Q-PROV | Province static vs master? | **`keep_static`** LOOKUP_STATIC P1 · master province **P2**. |
| Q-SECTION | Form 5 khối vs flat 2col? | **`sectioned`** — GPS / Dầm / Phần dưới / Tải+Gối / Lan can+thoát. |
| GAP-CSDL-ORG-01 | org-unit SearchInput | **DEFER P2** — Text slim OK. |
| GAP-CSDL-XLS-01 | Excel import | **OUT pack**. |
| packKind | list vs report | **Confirm `list`**. |

UNCLEAR field path/version = **none** sau autopilot chốt — không AskQuestion.

## 10. Out of scope (this pack)

- Import/export Excel full sheet Biểu 2 wizard (toolbar stub OK)
- org-unit SearchInput P2
- master province SSOT
- GIS map shell / Kind F canvas / gis_pick widget P1
- Merge form Sổ 6 / passport
- Auth NuGet wire (CommonLib debt)
- Re-scan demo HTML / crawl DemoRoot
- `yarn build` / e2e / `start:std` ở role PO
- Start role Design/SA/Dev trong cùng task (**GAP-PKT-ROLE-01**)
- Step 4b / migration (SA/Dev)

## 11. Handoff → Design (`/agent-design`)

| Field | Value |
|-------|-------|
| packKind confirm | **`list`** |
| Kind / surfaces | B catalog A–D+F + Kind D Slideout Z1–Z3 2col **sectioned** |
| Prototype | content-only list+slideout **48 cột** · skip chrome demo · **skip** Kind F map |
| reviewUrl | bắt buộc · `autoApprove=ON` → agent tự confirm Design |
| controlHint | §5 — **không** đoán Text vs SearchInput · **không** 3 ô detail* |
| Screens | §7 · Grid AC §6 · Leave §8 |
| grid_standard | `po-design-grid-standard` + `filter-bar-layout-hard` + `slideout-form-layout` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-02` |
| hubDeepLink | `http://localhost:9301/so-ts/csdl-so-sach?resource=bridges` |
| BE | `api/v1/asset/csdl-records` · resource `bridges` · road-route — **cấm** invent ERP / infra / passport CRUD |
| Q chốt | GPS=six_numbers · LOAD=text · LEGACY=keep_hidden · ROUTE=alias_now · PROV=keep_static · SECTION=sectioned |
| Next roles | design → sa → team-lead → dev → qa → review = **pending** đến lượt · chain ON |
| e2e | queued `/agent-qa*` only |
| blockedReason | — |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.25.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-09-05T08:05:00.000Z |
| versionGate | ok |
| contentHashPriorDataAnaly | sha256:bd73974e607f886dd38736015cb5a6a3fb82aff9d6a63328963ceb5c4be436a2 |
| headerFingerprintPrior | sha256:34e1fcb051f6010fbe70ebdffab71df3d6f441a373d3be0249dd601e596d5591 |
| dataAnalySkillVersion | 2026.08.25.01 |
| dataAnalyWorkflowVersion | 2026.09.01.02 |
| dataAnalyRulesVersion | 2026.08.31.2 |
| taskId | `task_ba5815a6` |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-po skillVersion=2026.08.25.02 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHashPriorDataAnaly=sha256:bd73974e607f886dd38736015cb5a6a3fb82aff9d6a63328963ceb5c4be436a2 taskId=task_ba5815a6 -->
