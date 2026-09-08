# PO — Requirement — csdl-bieu-05 (Biểu 05 — Rãnh các loại)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-05` |
| title | CSDL Biểu 05 — Rãnh các loại |
| this role | `po` · `/agent-po` |
| changeScope | **`new_page`** (STATUS + packet · typed Biểu 5 trên resource `ditches`) |
| packKind | **`list`** (**PO confirm** · data-analy đề xuất · Kind B list A–D + Kind D Slideout) |
| Feature Kind | **B** catalog A–D+F · **D** Slideout Z1–Z3 · **2col** · **cấm** Full-page form |
| resource | `ditches` |
| formNo | `05` · title VN **Rãnh các loại** |
| columns | **18** (Excel Biểu 5) |
| IdCode | prefix **`RN`** · `RN-yyyyMMdd-nnnn` · **cấm** Guid |
| peerSoTs | `so-ts-ditch` (DITCH) — deep-link OK · **cấm** merge 1 form hai chuẩn (**GAP-BIEU05-PEER-01** / **GAP-CSDL-CUC-11**) |
| gap | GAP-BIEU05-TYPED-01 · GAP-BIEU05-ROUTE-01 · GAP-BIEU05-KIND-01 · GAP-BIEU05-SHAPE-01 · GAP-BIEU05-DRAIN-01 · GAP-BIEU05-RANGE-01 · GAP-BIEU05-PEER-01 · GAP-CSDL-ROAD-01 · GAP-CSDL-PROV-01 · GAP-CSDL-ORG-01 · GAP-CSDL-XLS-01 · GAP-CSDL-CUC-03 · GAP-CSDL-CUC-11 · GAP-TYP-01 |
| mode | `feature_context` · CTX + cluster analy + hub demo zone ref · sourceKind=`synthetic` · **cấm** demo-json/LS SSOT |
| status | `confirmed` (autoApprove=ON · task `task_0ccf0f40`) |
| requestSource | queue CHAIN `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · prior data_analy **confirmed** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · `specs/_data-analy/features/csdl-bieu-05-control-hint.md` · `csdl-bieu-05-real-data.md` · compact `handoff/data_analy-compact.md` · contentHash `sha256:fd4e6899790aa98d6bc4cb628dc9c0bc5efc90acb3abf03a7b157cf123590117` · headerFingerprint `sha256:008898723c0a5b94fae7de8810903b1dcc39ccfd0dfa5d4a36dd398eb088ac2f` · analy `task_fdcb7c28` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | **`/csdl-bieu-05`** (alias Navigate **now**) · hub `/so-ts/csdl-so-sach?resource=ditches` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-05` |
| hubDeepLink | `http://localhost:9301/so-ts/csdl-so-sach?resource=ditches` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · live `api/v1/asset/csdl-records?resource=ditches` · BFF `web-bff/api/v1/asset/csdl-records` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` · **cấm** `api/v1/so-ts/*` invent · **cấm** `api/v1/rmms/*` |
| domain | **Asset** |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-05-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-05-real-data.md` |
| contentHash | `sha256:fd4e6899790aa98d6bc4cb628dc9c0bc5efc90acb3abf03a7b157cf123590117` |
| headerFingerprint | `sha256:008898723c0a5b94fae7de8810903b1dcc39ccfd0dfa5d4a36dd398eb088ac2f` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX / DemoRoot (**GAP-PO-DEMO-RESCAN-01**) |
| parent | hub `csdl-so-sach` · cluster `csdl-cuc-2026` · Excel sheet Biểu 5 |
| taskId | `task_0ccf0f40` · analy `task_fdcb7c28` |
| updatedAt | `2026-09-05T06:40:00.000Z` |
| versionGate | `ok` (skill/schema/workflow khớp analy · pack `po/list@session`) |

**packKind confirm:** `list` (data-analy đề xuất · PO chốt). Kind **B** list A–D+F + Kind **D** Slideout 2col trên MFE Asset host `:9301` — **không** report pack · **không** Kind F map canvas · **không** Excel import wizard trong pack này (OUT **GAP-CSDL-XLS-01**).

**≠** Sổ TS `so-ts-ditch` (peer deep-link) · **≠** hub generic 3 ô `detail*` — đây là **typed Biểu 05** 18 cột.

**Cấm:** implement · re-scan DEM · form chỉ 3 ô `detail*` · merge form Sổ TS · invent map · invent API · ERP.* · demo-json / localStorage SSOT · Guid IdCode · yarn build/e2e/start:std ở role PO · start role khác (**GAP-PKT-ROLE-01**).

## 1. Goal

Chốt requirement **new_page** cho **Biểu 05 — Rãnh các loại** (`resource=ditches`): list + Slideout typed **18 cột** Excel Biểu 5 · thay generic hub form · giữ API prefix `csdl-records` · alias route `/csdl-bieu-05` + hub entry.

Persona: Khu QLĐB · Văn phòng Cục · Ban QLDA (web).

**Delta pack này (SSOT lock từ analy):**

1. Form/list typed 18 cột — **cấm** chỉ `detailPrimary`/`detailSpec`/`detailExtra` (**GAP-BIEU05-TYPED-01** / **GAP-CSDL-CUC-03**).
2. Alias mfeStd `/csdl-bieu-05` Navigate P1 · giữ hub deep-link (**Q-ROUTE** / **GAP-BIEU05-ROUTE-01**).
3. `ditchKind` LOOKUP hở/kín (**GAP-BIEU05-KIND-01**).
4. Hình + khẩu độ + kết cấu (KC) typed (**GAP-BIEU05-SHAPE-01** · **Q-SHAPE** · **Q-APERTURE**).
5. `drainageCapacity` khả năng thoát (**GAP-BIEU05-DRAIN-01** · **Q-DRAIN**).
6. `kmFrom`/`kmTo` Từ–đến filter + form (**GAP-BIEU05-RANGE-01**).
7. `roadCode`/`roadName` = SearchInput `road-route` filter + form (**GAP-CSDL-ROAD-01**).
8. Province LOOKUP_STATIC P1 (**Q-PROV** keep_static).
9. LeaveConfirmModal dirty · toast 4xx/5xx — **cấm** native alert/confirm.
10. Import/export sheet Biểu 5 OUT pack (**GAP-CSDL-XLS-01**).
11. Peer Sổ TS deep-link only — **cấm** merge form (**GAP-BIEU05-PEER-01**).

## 2. Current → New (`new_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · `analyzedAt=2026-09-05T06:30:58.027Z` · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live inventory analy) | New (this pack · copy analy) |
|-------|--------------------------------|------------------------------|
| Entry | Hub-only `?resource=ditches` | Alias **`/csdl-bieu-05`** + hub entry — **GAP-BIEU05-ROUTE-01** |
| List Kind B | Generic road/km/detail cols | Typed cols từ–đến · hở/kín · KC · hình · khẩu độ · dài · thoát · năm · TT |
| Form Kind D | 3 ô `detail*` polymorphic | Typed **18 cột** Slideout 2col Z1–Z3 — **GAP-BIEU05-TYPED-01** |
| ditchKind | — | Dropdown hở/kín — **GAP-BIEU05-KIND-01** |
| shape / aperture / structure | — | Dropdown hình · aperture free_text · KC LOOKUP/Text — **GAP-BIEU05-SHAPE-01** |
| drainageCapacity | — | **free_text** P1 — **Q-DRAIN** |
| km range | Demo kmFrom/kmTo | Filter + form Từ–đến — **GAP-BIEU05-RANGE-01** |
| road | Text free (hub) | SearchInput `road-route` — **GAP-CSDL-ROAD-01** |
| province | LOOKUP_STATIC 5 tỉnh | **keep_static** P1 — **Q-PROV** |
| manageUnit | Text | Text P1 · SearchInput org-unit **DEFER P2** — **GAP-CSDL-ORG-01** |
| Import | stub | Sheet 18 cột **OUT** |
| API | `…/csdl-records?resource=ditches` | **Giữ prefix** · widen typed DTO/UiSchema — SA |
| Peer | `so-ts-ditch` | Deep-link · **cấm** merge |

**Không đổi:** Kind B A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · `LinCatalogListPagination` 50/100/200/500 · prefix `api/v1/asset/csdl-records` · resource key `ditches` · IdCode **cấm** Guid · **cấm ERP.*** · map = none.

### GAP IDs (PO bắt buộc Design/Dev đóng P1 trừ DEFER/OUT)

| ID | New | P1 |
|----|-----|----|
| GAP-BIEU05-TYPED-01 | Typed 18 cột thay generic detail* | **YES** |
| GAP-BIEU05-ROUTE-01 | Alias `/csdl-bieu-05` Navigate | **YES** (`alias_now`) |
| GAP-BIEU05-KIND-01 | ditchKind hở/kín LOOKUP | **YES** |
| GAP-BIEU05-SHAPE-01 | Hình + khẩu độ + KC typed | **YES** |
| GAP-BIEU05-DRAIN-01 | drainageCapacity | **YES** (`free_text` P1) |
| GAP-BIEU05-RANGE-01 | kmFrom/kmTo Từ–đến | **YES** |
| GAP-CSDL-ROAD-01 | SearchInput `road-route` filter+form | **YES** |
| GAP-CSDL-PROV-01 | Province LOOKUP_STATIC | **YES** (keep_static) · master = P2 |
| GAP-BIEU05-PEER-01 | Deep-link Sổ TS · không merge | **YES** (nav rule) |
| GAP-CSDL-CUC-03 | Đóng gap Biểu 5 khi typed PASS | **YES** (via TYPED) |
| GAP-CSDL-CUC-11 | 2 lớp vận hành vs biểu Cục | **YES** (peer rule) |
| GAP-TYP-01 | label 13 · input D14/M16 | **YES** |
| GAP-CSDL-ORG-01 | manageUnit SearchInput org-unit | **DEFER P2** |
| GAP-CSDL-XLS-01 | Import/export sheet Biểu 5 | **OUT pack** |

## 3. DoD (đo được)

1. Entry `/csdl-bieu-05` **và** hub `?resource=ditches` mở cùng list typed — title VN «Biểu 05 — Rãnh các loại» · back hub · **cấm** slug trên card hub.
2. List BFF `GET …/csdl-records?resource=ditches` — empty grid VN «Chưa có rãnh» · CTA Tạo mới · **cấm** fake row / demo-json / LS SSOT.
3. Zone A: title VN · back `/so-ts/csdl-so-sach` — **cấm** Thêm mới trên A.
4. Zone B: `LinErpListFilterBar` 1 hàng wrap · input+🔍 cụm phải — SearchTextInput · province · status · road SearchInput · kmFrom/kmTo · ditchKind · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub — filter đổi → page=1 · **search must work** · **cấm** nút Tìm riêng.
5. Zone C: `LinCatalogDataGrid` typed cols (không chỉ 3 detail) · STT · row menu Xem/Sửa/Copy/Xóa/Lịch sử · kéo cột ON.
6. Zone D: `LinCatalogListPagination` **50 / 100 / 200 / 500**.
7. Zone F: `LinCatalogUiSchemaEditorModal` catalogKind **`ditches`** (typed) — **cấm** `LinListTableConfigModal`.
8. Slideout Kind D Z1–Z3 2col: Create/Edit/View/Copy — đủ cột Excel Biểu 5 · **cấm** form chỉ 3 ô `detail*`.
9. Required P1: `roadCode`/`roadName` · `province` · `kmFrom` · `kmTo` · `side` · `ditchKind` · `lengthM` · `status` · code IdCode `RN-…` readonly.
10. View = `readOnly` — **cấm** Input disabled xám toàn form.
11. Leave-confirm dirty · toast 4xx/5xx — **cấm** native alert/confirm.
12. Typography: label **13** · input D14/M16 (**GAP-TYP-01**).
13. Map = none — deep-link gis only · **cấm** invent map canvas.
14. Peer Sổ TS = navigate only · **cấm** merge form.
15. `yarn build` / e2e / `start:std` **chỉ** Dev/QA — PO **cấm**.

## 4. CTX / DEM / DI inventory (hash skip — đọc analy · **không** re-crawl)

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/csdl-bieu-05.md` | feature |
| CTX-02 | `docs/context/features/csdl-so-sach.md` | parent hub |
| DA-01 | `specs/_data-analy/features/csdl-bieu-05-control-hint.md` | controlHint SSOT · **done** |
| DA-02 | `specs/_data-analy/features/csdl-bieu-05-real-data.md` | real-data §A–§F |
| DA-03 | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | cluster Biểu 5 · 18 cột |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` | entry · zone ref only |
| DEM-02 | `Linm.RMMS.Demo/src/demo/asset/csdl-so-sach.html` | page · **không** SSOT data |
| DI-01 | `data-import/…/1. Biểu mẫu CSDL.xls` sheet Biểu 5 | Excel cite · import OUT |
| MFE hub | `CsdlSoSachPage` | Kind B live shell |
| MFE form | `CsdlFormSlideout` | generic → typed replace |
| MFE svc | `services/csdlSoSach/endpoint.ts` | `BASE=/asset/csdl-records` |
| BE | `CsdlCatalogRecordsController` · shell entity · typed `Schema_CsdlBieu5` (**SA**) | live CRUD + widen |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `csdl-so-sach` · ditches |
| Peer CTX | `docs/context/features/so-ts-ditch.md` | deep-link only |

Normalized header (analy):  
`code|roadCode|roadName|province|kmFrom|kmTo|side|ditchKind|structure|shape|apertureSize|lengthM|drainageCapacity|builtYear|status|manageUnit|ownerUnit|notes`

## 5. controlHint (PO chốt · copy data-analy — Design map UI · SA map API)

### List filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · đường · ghi chú |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | **Q-PROV** keep_static |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC | tot/tb/kem/hong |
| roadCode | Đường | `SearchInput` | **road-route** | **GAP-CSDL-ROAD-01** |
| kmFrom | Km từ | `Number` | — | filter range · **GAP-BIEU05-RANGE-01** |
| kmTo | Km đến | `Number` | — | filter range |
| ditchKind | Loại rãnh | `Dropdown` | LOOKUP_STATIC | hở / kín · **GAP-BIEU05-KIND-01** |

### Form fields (Slideout Kind D · Excel Biểu 5 · 18 cột)

| # | Field key | Label | controlHint | required | Notes |
|---|-----------|-------|-------------|----------|-------|
| — | code | Mã | `Text` readonly | auto | IdCode `RN-…` · **cấm** Guid |
| 1–2 | roadCode / roadName | Mã/Tên đường | `SearchInput` | * | catalogKind `road-route` |
| 3 | province | Địa danh | `Dropdown` | * | LOOKUP_STATIC P1 |
| 4–5 | kmFrom / kmTo | Km từ–đến | `Number` | * | decimal · **GAP-BIEU05-RANGE-01** |
| 6 | side | Vị trí L/R | `Dropdown` | * | L/R/C/Both |
| 7 | ditchKind | Hở / Kín | `Dropdown` | * | LOOKUP · **GAP-BIEU05-KIND-01** |
| 8 | structure | Kết cấu (KC) | `Dropdown` | | BT / BTCT / đá xây / khác |
| 9 | shape | Hình dạng | `Dropdown` | | chữ nhật / thang / tròn · **Q-SHAPE** `rect_trap_round` |
| 10 | apertureSize | Khẩu độ | `Text` | | free-text WxH hoặc m · **Q-APERTURE** `free_text` |
| 11 | lengthM | Chiều dài (m) | `Number` | * | |
| 12 | drainageCapacity | Khả năng thoát | `Text` | | **Q-DRAIN** `free_text` P1 · number_cms DEFER |
| 13 | builtYear | Năm XD/SD | `Number` | | year |
| 14 | status | Tình trạng | `Dropdown` | * | LOOKUP_STATIC |
| 15 | manageUnit | ĐV QL | `Text` | | **GAP-CSDL-ORG-01** DEFER P2 → SearchInput |
| 16 | ownerUnit | ĐV sở hữu | `Text` | | P1 free-text OK |
| 17–18 | notes (+ code) | Ghi chú | `Textarea` | | header 18 keys = `code` + 17 field rows |

### Actions

| Action | Surface | Notes |
|--------|---------|-------|
| back-hub | List A | về `/so-ts/csdl-so-sach` |
| create / view / edit / copy / delete | Toolbar + row | soft-delete API |
| save / cancel | Form footer | LeaveConfirmModal dirty |
| import / export | Toolbar | stub · XLS Biểu 5 **OUT** |
| history | Toolbar / row | stub modal OK P2 |
| schema-config | Toolbar | UiSchema typed `ditches` |
| open-peer-sots | nav | deep-link `/so-ts-ditch` · **cấm** merge |

### Real-data bind (copy §B analy — SA **giữ** path cite)

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=ditches` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` body `resource=ditches` + typed fields |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/csdl-records/{id}` (soft) |
| road-route | `GET /integration/road-routes/search` |
| org-unit | `GET /integration/org-units/search` | **DEFER P2** |

API mirror: `api/v1/asset/csdl-records`. FE cite: `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records`.

### Status / side / ditchKind / shape / structure (LOOKUP_STATIC)

- status: `tot` · `tb` · `kem` · `hong`
- side: `L` · `R` · `C` · `Both`
- ditchKind: `ho` · `kin` (label VN hở / kín)
- shape: `chu_nhat` · `thang` · `tron` (label VN chữ nhật / thang / tròn) — **Q-SHAPE** `rect_trap_round`
- structure: `BT` · `BTCT` · `da_xay` · `khac` (label VN khớp Excel)

## 6. Grid AC (REQUIRED · list packKind)

| ID | AC |
|----|-----|
| AC-G-01 | Zones **A Header · B Toolbar · C Grid · D Pagination** (+ Zone F config) |
| AC-G-02 | Search + province/status/road/kmFrom/kmTo/ditchKind → page=1 khi filter đổi |
| AC-G-03 | Row menu Xem / Sửa / Copy / Xóa / Lịch sử |
| AC-G-04 | `LinCatalogDataGrid` + kéo cột default ON · schema-driven typed |
| AC-G-05 | Footer `LinCatalogListPagination` 50/100/200/500 |
| AC-G-06 | 1× `LinPageLayout` — **cấm** nested CatalogListShell |
| AC-G-07 | Flex + skeleton — **cấm** blank body |
| AC-G-08 | Zone F `LinCatalogUiSchemaEditorModal` catalog `ditches` — **cấm** `LinListTableConfigModal` |
| AC-G-09 | Empty list copy VN «Chưa có rãnh» — **cấm** fake row / demo-json / LS SSOT |
| AC-G-10 | Toast 4xx/5xx · Confirm modal — **cấm** `window.alert`/`confirm` |
| AC-G-11 | Filter = **`LinErpListFilterBar`** 1 hàng wrap · **input + 🔍 cụm phải** — **cấm** stack / nút Tìm riêng |
| AC-G-12 | Toolbar FULL: Làm mới · Lịch sử · config · Delete · **+ Tạo mới** · Import/Export stub OK |
| AC-G-13 | Grid flow: sort · filter cột panel · chọn dòng · help đúp/Ctrl+chuột phải |
| AC-G-14 | Typed grid cols — **cấm** chỉ 3 cột detail* |
| AC-G-15 | `roadCode` filter = SearchInput road-route — **cấm** Text free (**GAP-CSDL-ROAD-01**) |
| AC-G-16 | Alias route `/csdl-bieu-05` load cùng resource — **GAP-BIEU05-ROUTE-01** |
| AC-G-17 | Filter `kmFrom`/`kmTo` Number range — **GAP-BIEU05-RANGE-01** |
| AC-G-18 | Filter `ditchKind` Dropdown hở/kín — **GAP-BIEU05-KIND-01** |

### Report AC

**N/A** — packKind `list` (**GAP-PO-RPT-01**).

## 7. Screens (REQUIRED)

| Surface | Pattern | FormMode | URL | Tab index | Actions | devSlash |
|---------|---------|----------|-----|-----------|---------|----------|
| S-LIST | Kind **B** A–D+F | filter | `/csdl-bieu-05` · hub `?resource=ditches` | — | search · filter · Tạo mới · Refresh · Delete · config · History | `/agent-dev` |
| S-FORM-CREATE | Kind **D Slideout** Z1–Z3 2col | create | overlay | — | Lưu · Hủy · leave-confirm | `/agent-dev` |
| S-FORM-EDIT | Kind **D Slideout** | edit | overlay | — | Lưu · Hủy | `/agent-dev` |
| S-FORM-VIEW | Kind **D Slideout** | view | overlay | — | readOnly · **không** disabled xám | `/agent-dev` |
| S-FORM-COPY | Kind **D Slideout** | create (copy) | overlay | — | POST new · clear id · new code | `/agent-dev` |
| S-ACT-DELETE | Confirm modal | — | — | — | soft delete | `/agent-dev` |
| S-HIST | History modal | — | — | — | stub OK P2 | `/agent-dev` |
| S-HUB-ENTRY | Hub card open | — | `/so-ts/csdl-so-sach?resource=ditches` | — | open-resource · title VN | `/agent-dev` |
| S-PEER-SOTS | deep-link only | — | peer `so-ts-ditch` | — | **Cấm** merge form | — |
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
| Delete | Confirm `Modal` / `useAlert` | native `confirm` |
| Lookup road-route no match | SearchInput empty · save 422 | free-text substitute master |
| Overlay z-index (modal trên Slideout) | `useAlert` / Modal stacked SSOT | z-index hack |

## 9. Open questions — Autopilot chốt

| ID | Question | Decision (PO) |
|----|----------|----------------|
| Q-ROUTE | Alias `/csdl-bieu-05` ngay hay hub-only? | **`alias_now`** — Navigate `/csdl-bieu-05` P1 · giữ hub entry. |
| Q-PROV | Province static vs master? | **`keep_static`** LOOKUP_STATIC P1 · master province **P2**. |
| Q-APERTURE | `apertureSize` free-text (WxH) vs Number m? | **`free_text`** — Text cho phép WxH hoặc mô tả · Number m DEFER nếu Excel chuẩn hóa sau. |
| Q-DRAIN | `drainageCapacity` free-text vs Number (m³/s)? | **`free_text`** P1 · `number_cms` **DEFER**. |
| Q-SHAPE | Shape LOOKUP values? | **`rect_trap_round`** — chữ nhật / thang / tròn. |
| GAP-CSDL-ORG-01 | org-unit SearchInput | **DEFER P2** — Text slim OK. |
| GAP-CSDL-XLS-01 | Import/export sheet Biểu 5 | **OUT** — toolbar stub OK P1. |

**Open Q còn lại:** **none** (autopilot chốt đủ handoff Design).

## 10. Out of scope / cấm (PO lock)

- Implement / migration / Step 4b / yarn build / e2e / `start:std` ở role PO
- Re-scan demo / crawl CTX (**GAP-PO-DEMO-RESCAN-01**)
- Form chỉ 3 ô `detail*` · Guid IdCode · invent map canvas
- Merge form Sổ TS `so-ts-ditch` · invent `api/v1/infra/*` · ERP.* · `api/v1/rmms/*`
- Demo / localStorage / seed giả làm SSOT runtime
- Report pack / Kind F map / Full-page form
- Start role Design/SA/… trong cùng task (**GAP-PKT-ROLE-01**)

## 11. Handoff Design

| Need | Detail |
|------|--------|
| control-map | Khớp §5 controlHint · filter Zone B · form 18 cột |
| prototype | List Kind B + Slideout Kind D 2col · reviewUrl |
| typography | label 13 · input D14/M16 |
| filter bar | `LinErpListFilterBar` · **cấm** nút Tìm riêng |
| next SA | typed DTO/UiSchema `ditches` · `Schema_CsdlBieu5` · giữ path `csdl-records` |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.25.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.08.31.2 |
| contentHash | `sha256:fd4e6899790aa98d6bc4cb628dc9c0bc5efc90acb3abf03a7b157cf123590117` |
| headerFingerprint | `sha256:008898723c0a5b94fae7de8810903b1dcc39ccfd0dfa5d4a36dd398eb088ac2f` |
| generatedAt | 2026-09-05T06:40:00.000Z |
| versionGate | ok |
| taskId | task_0ccf0f40 |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-po skillVersion=2026.08.25.02 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHash=sha256:fd4e6899790aa98d6bc4cb628dc9c0bc5efc90acb3abf03a7b157cf123590117 -->
