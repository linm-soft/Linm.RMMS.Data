# PO — Requirement — csdl-bieu-04 (Biểu 04 — Cống các loại)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-04` |
| title | CSDL Biểu 04 — Cống các loại |
| this role | `po` · `/agent-po` |
| changeScope | **`new_page`** (STATUS + packet · typed Biểu 4 trên resource `culverts`) |
| packKind | **`list`** (**PO confirm** · data-analy đề xuất · Kind B list A–D + Kind D Slideout) |
| Feature Kind | **B** catalog A–D+F · **D** Slideout Z1–Z3 · **2col** · **cấm** Full-page form |
| resource | `culverts` |
| formNo | `04` · title VN **Cống các loại** |
| columns | **17** (Excel Biểu 4) |
| IdCode | prefix **`CG`** · `CG-yyyyMMdd-nnnn` · **cấm** Guid |
| peerSoTs | `so-ts-culvert-x` (CULVERT_X) — deep-link OK · **cấm** merge 1 form hai chuẩn (**GAP-BIEU04-PEER-01** / **GAP-CSDL-CUC-11**) |
| gap | GAP-BIEU04-TYPED-01 · GAP-BIEU04-ROUTE-01 · GAP-BIEU04-GPS-01 · GAP-BIEU04-SHAPE-01 · GAP-BIEU04-PEER-01 · GAP-CSDL-ROAD-01 · GAP-CSDL-PROV-01 · GAP-CSDL-ORG-01 · GAP-CSDL-XLS-01 · GAP-CSDL-CUC-03 · GAP-CSDL-CUC-11 · GAP-TYP-01 |
| mode | `feature_context` · CTX + cluster analy + hub demo zone ref · sourceKind=`synthetic` · **cấm** demo-json/LS SSOT |
| status | `confirmed` (autoApprove=ON · task `task_ad060865`) |
| requestSource | queue CHAIN `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · prior data_analy **confirmed** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · `specs/_data-analy/features/csdl-bieu-04-control-hint.md` · `csdl-bieu-04-real-data.md` · compact `handoff/data_analy-compact.md` · contentHash `sha256:7498ad6644d0e599bc40afb7589db5335c18adb4b92f1573de3c1fae2e17d3d6` · headerFingerprint `sha256:155df2db0952d6e139fbedac748878ecd5c607d506fdf5fccc172f5b0f937024` · analy `task_ea0d8d57` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | **`/csdl-bieu-04`** (alias Navigate **now**) · hub `/so-ts/csdl-so-sach?resource=culverts` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-04` |
| hubDeepLink | `http://localhost:9301/so-ts/csdl-so-sach?resource=culverts` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · live `api/v1/asset/csdl-records?resource=culverts` · BFF `web-bff/api/v1/asset/csdl-records` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` · **cấm** `api/v1/so-ts/*` invent · **cấm** `api/v1/rmms/*` |
| domain | **Asset** |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-04-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-04-real-data.md` |
| contentHash | `sha256:7498ad6644d0e599bc40afb7589db5335c18adb4b92f1573de3c1fae2e17d3d6` |
| headerFingerprint | `sha256:155df2db0952d6e139fbedac748878ecd5c607d506fdf5fccc172f5b0f937024` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX / DemoRoot (**GAP-PO-DEMO-RESCAN-01**) |
| parent | hub `csdl-so-sach` · cluster `csdl-cuc-2026` · Excel sheet Biểu 4 |
| taskId | `task_ad060865` · analy `task_ea0d8d57` |
| updatedAt | `2026-09-05T06:00:00.000Z` |
| versionGate | `ok` (skill/schema/workflow khớp analy · pack `po/list@session`) |

**packKind confirm:** `list` (data-analy đề xuất · PO chốt). Kind **B** list A–D+F + Kind **D** Slideout 2col trên MFE Asset host `:9301` — **không** report pack · **không** Kind F map canvas · **không** Excel import wizard trong pack này (OUT **GAP-CSDL-XLS-01**).

**≠** Sổ TS `so-ts-culvert-x` (peer deep-link) · ≠ hub generic 3 ô `detail*` — đây là **typed Biểu 04** 17 cột.

**Cấm:** implement · re-scan DEM · form chỉ 3 ô `detail*` · merge form Sổ TS · invent map · invent API · ERP.* · demo-json / localStorage SSOT · Guid IdCode · yarn build/e2e/start:std ở role PO · start role khác (**GAP-PKT-ROLE-01**).

## 1. Goal

Chốt requirement **new_page** cho **Biểu 04 — Cống các loại** (`resource=culverts`): list + Slideout typed **17 cột** Excel Biểu 4 · thay generic hub form · giữ API prefix `csdl-records` · alias route `/csdl-bieu-04` + hub entry.

Persona: Khu QLĐB · Văn phòng Cục · Ban QLDA (web).

**Delta pack này (SSOT lock từ analy):**

1. Form/list typed 17 cột — **cấm** chỉ `detailPrimary`/`detailSpec`/`detailExtra` (**GAP-BIEU04-TYPED-01** / **GAP-CSDL-CUC-03**).
2. Alias mfeStd `/csdl-bieu-04` Navigate P1 · giữ hub deep-link (**Q-ROUTE** / **GAP-BIEU04-ROUTE-01**).
3. GPS = **4 số** X/Y tim cống × tim đường (**Q-GPS** / **GAP-BIEU04-GPS-01**) — SA chốt CRS/storage.
4. Hình dạng LOOKUP hộp/tròn · thân + đầu T.Lưu/H.Lưu (**GAP-BIEU04-SHAPE-01**).
5. `roadCode`/`roadName` = SearchInput `road-route` filter + form (**GAP-CSDL-ROAD-01**).
6. Province LOOKUP_STATIC P1 (**Q-PROV** keep_static).
7. `loadClass` free-text P1 (**Q-LOAD**) · lookup DEFER.
8. LeaveConfirmModal dirty · toast 4xx/5xx — **cấm** native alert/confirm.
9. Import/export sheet Biểu 4 OUT pack (**GAP-CSDL-XLS-01**).
10. Peer Sổ TS deep-link only — **cấm** merge form (**GAP-BIEU04-PEER-01**).

## 2. Current → New (`new_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · `analyzedAt=2026-09-05T05:52:43.665Z` · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live inventory analy) | New (this pack · copy analy) |
|-------|--------------------------------|------------------------------|
| Entry | Hub-only `?resource=culverts` | Alias **`/csdl-bieu-04`** + hub entry — **GAP-BIEU04-ROUTE-01** |
| List Kind B | Generic road/km/detail cols | Typed cols km · khẩu độ · hình · dài · tải · năm · TT |
| Form Kind D | 3 ô `detail*` polymorphic | Typed **17 cột** Slideout 2col Z1–Z3 — **GAP-BIEU04-TYPED-01** |
| GPS | — | 4 Number X/Y cống×đường — **Q-GPS** `four_xy` |
| shape | — | Dropdown hộp/tròn · thân/đầu — **GAP-BIEU04-SHAPE-01** |
| road | Text free (hub) | SearchInput `road-route` — **GAP-CSDL-ROAD-01** |
| province | LOOKUP_STATIC 5 tỉnh | **keep_static** P1 — **Q-PROV** |
| loadClass | — | **free_text** P1 — **Q-LOAD** |
| manageUnit | Text | Text P1 · SearchInput org-unit **DEFER P2** — **GAP-CSDL-ORG-01** |
| Import | stub | Sheet 17 cột **OUT** |
| API | `…/csdl-records?resource=culverts` | **Giữ prefix** · widen typed DTO/UiSchema — SA |
| Peer | `so-ts-culvert-x` | Deep-link · **cấm** merge |

**Không đổi:** Kind B A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · `LinCatalogListPagination` 50/100/200/500 · prefix `api/v1/asset/csdl-records` · resource key `culverts` · IdCode **cấm** Guid · **cấm ERP.*** · map = none.

### GAP IDs (PO bắt buộc Design/Dev đóng P1 trừ DEFER/OUT)

| ID | New | P1 |
|----|-----|----|
| GAP-BIEU04-TYPED-01 | Typed 17 cột thay generic detail* | **YES** |
| GAP-BIEU04-ROUTE-01 | Alias `/csdl-bieu-04` Navigate | **YES** (`alias_now`) |
| GAP-BIEU04-GPS-01 | 4 Number X/Y tim cống×đường | **YES** product · SA CRS/storage |
| GAP-BIEU04-SHAPE-01 | Hình hộp/tròn LOOKUP + thân/đầu | **YES** |
| GAP-CSDL-ROAD-01 | SearchInput `road-route` filter+form | **YES** |
| GAP-CSDL-PROV-01 | Province LOOKUP_STATIC | **YES** (keep_static) · master = P2 |
| GAP-BIEU04-PEER-01 | Deep-link Sổ TS · không merge | **YES** (nav rule) |
| GAP-CSDL-CUC-03 | Đóng gap Biểu 4 khi typed PASS | **YES** (via TYPED) |
| GAP-CSDL-CUC-11 | 2 lớp vận hành vs biểu Cục | **YES** (peer rule) |
| GAP-TYP-01 | label 13 · input D14/M16 | **YES** |
| GAP-CSDL-ORG-01 | manageUnit SearchInput org-unit | **DEFER P2** |
| GAP-CSDL-XLS-01 | Import/export sheet Biểu 4 | **OUT pack** |

## 3. DoD (đo được)

1. Entry `/csdl-bieu-04` **và** hub `?resource=culverts` mở cùng list typed — title VN «Biểu 04 — Cống các loại» · back hub · **cấm** slug trên card hub.
2. List BFF `GET …/csdl-records?resource=culverts` — empty grid VN «Chưa có cống» · CTA Tạo mới · **cấm** fake row / demo-json / LS SSOT.
3. Zone A: title VN · back `/so-ts/csdl-so-sach` — **cấm** Thêm mới trên A.
4. Zone B: `LinErpListFilterBar` 1 hàng wrap · input+🔍 cụm phải — SearchTextInput · province · status · road SearchInput · kmPoint · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub — filter đổi → page=1 · **search must work** · **cấm** nút Tìm riêng.
5. Zone C: `LinCatalogDataGrid` typed cols (không chỉ 3 detail) · STT · row menu Xem/Sửa/Copy/Xóa/Lịch sử · kéo cột ON.
6. Zone D: `LinCatalogListPagination` **50 / 100 / 200 / 500**.
7. Zone F: `LinCatalogUiSchemaEditorModal` catalogKind **`culverts`** (typed) — **cấm** `LinListTableConfigModal`.
8. Slideout Kind D Z1–Z3 2col: Create/Edit/View/Copy — đủ cột Excel Biểu 4 · **cấm** form chỉ 3 ô `detail*`.
9. Required P1: `roadCode`/`roadName` · `province` · `kmPoint` · `apertureM` · `shape` · `lengthM` · `status` · code IdCode `CG-…` readonly.
10. GPS P1: `gpsCulvertX`/`gpsCulvertY`/`gpsRoadX`/`gpsRoadY` = 4 Number (**Q-GPS** four_xy).
11. View = `readOnly` — **cấm** Input disabled xám toàn form.
12. Leave-confirm dirty · toast 4xx/5xx — **cấm** native alert/confirm.
13. Typography: label **13** · input D14/M16 (**GAP-TYP-01**).
14. Map = none — deep-link gis only · **cấm** invent map canvas.
15. Peer Sổ TS = navigate only · **cấm** merge form.
16. `yarn build` / e2e / `start:std` **chỉ** Dev/QA — PO **cấm**.

## 4. CTX / DEM / DI inventory (hash skip — đọc analy · **không** re-crawl)

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/csdl-bieu-04.md` | feature |
| CTX-02 | `docs/context/features/csdl-so-sach.md` | parent hub |
| DA-01 | `specs/_data-analy/features/csdl-bieu-04-control-hint.md` | controlHint SSOT · **done** |
| DA-02 | `specs/_data-analy/features/csdl-bieu-04-real-data.md` | real-data §A–§F |
| DA-03 | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | cluster Biểu 4 · 17 cột |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` | entry · zone ref only |
| DEM-02 | `Linm.RMMS.Demo/src/demo/asset/csdl-so-sach.html` | page · **không** SSOT data |
| DI-01 | `data-import/…/1. Biểu mẫu CSDL.xls` sheet Biểu 4 | Excel cite · import OUT |
| MFE hub | `CsdlSoSachPage` | Kind B live shell |
| MFE form | `CsdlFormSlideout` | generic → typed replace |
| MFE svc | `services/csdlSoSach/endpoint.ts` | `BASE=/asset/csdl-records` |
| BE | `CsdlCatalogRecordsController` · shell entity · typed `Schema_CsdlBieu4` (**SA**) | live CRUD + widen |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `csdl-so-sach` · culverts |
| Peer CTX | `docs/context/features/so-ts-culvert-x.md` | deep-link only |

Normalized header (analy):  
`code|roadCode|roadName|province|kmPoint|gpsCulvertX|gpsCulvertY|gpsRoadX|gpsRoadY|apertureM|shape|bodyMaterial|inletUpstream|outletDownstream|lengthM|loadClass|builtYear|status|side|manageUnit|notes`

## 5. controlHint (PO chốt · copy data-analy — Design map UI · SA map API)

### List filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · đường · ghi chú |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | **Q-PROV** keep_static |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC | tot/tb/kem/hong |
| roadCode | Đường | `SearchInput` | **road-route** | **GAP-CSDL-ROAD-01** |
| kmPoint | Km điểm | `Number` | — | filter QS |

### Form fields (Slideout Kind D · Excel Biểu 4 · 17 cột)

| # | Field key | Label | controlHint | required | Notes |
|---|-----------|-------|-------------|----------|-------|
| — | code | Mã | `Text` readonly | auto | IdCode `CG-…` · **cấm** Guid |
| 1–2 | roadCode / roadName | Mã/Tên đường | `SearchInput` | * | catalogKind `road-route` |
| 3 | province | Địa danh | `Dropdown` | * | LOOKUP_STATIC P1 |
| 4 | kmPoint | Km điểm | `Number` | * | decimal · điểm đặt cống |
| 5–6 | gpsCulvertX / gpsCulvertY | GPS tim cống X/Y | `Number` | | **Q-GPS** four_xy |
| 7–8 | gpsRoadX / gpsRoadY | GPS tim đường X/Y | `Number` | | **Q-GPS** four_xy |
| 9 | apertureM | Khẩu độ (m) | `Number` | * | |
| 10 | shape | Hình dạng | `Dropdown` | * | hộp / tròn · **GAP-BIEU04-SHAPE-01** |
| 11 | bodyMaterial | Thân cống | `Dropdown` | | BT / BTCT / thép / khác |
| 12 | inletUpstream | Đầu thượng lưu | `Text` | | đầu T.Lưu |
| 13 | outletDownstream | Đầu hạ lưu | `Text` | | đầu H.Lưu |
| 14 | lengthM | Chiều dài (m) | `Number` | * | |
| 15 | loadClass | Tải trọng TK | `Text` | | **Q-LOAD** free_text P1 |
| 16 | builtYear | Năm XD/SD | `Number` | | year |
| 17 | status | Tình trạng | `Dropdown` | * | LOOKUP_STATIC |
| — | side | Vị trí L/R | `Dropdown` | | L/R/C/Both |
| — | manageUnit | ĐV QL | `Text` | | **GAP-CSDL-ORG-01** DEFER P2 → SearchInput |
| — | notes | Ghi chú | `Textarea` | | |

### Actions

| Action | Surface | Notes |
|--------|---------|-------|
| back-hub | List A | về `/so-ts/csdl-so-sach` |
| create / view / edit / copy / delete | Toolbar + row | soft-delete API |
| save / cancel | Form footer | LeaveConfirmModal dirty |
| import / export | Toolbar | stub · XLS Biểu 4 **OUT** |
| history | Toolbar / row | stub modal OK P2 |
| schema-config | Toolbar | UiSchema typed `culverts` |
| open-peer-sots | nav | deep-link `/so-ts-culvert-x` · **cấm** merge |

### Real-data bind (copy §B analy — SA **giữ** path cite)

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=culverts` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` body `resource=culverts` + typed fields |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/csdl-records/{id}` (soft) |
| road-route | `GET /integration/road-routes/search` |
| org-unit | `GET /integration/org-units/search` | **DEFER P2** |

API mirror: `api/v1/asset/csdl-records`. FE cite: `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records`.

### Status / side / shape / bodyMaterial (LOOKUP_STATIC)

- status: `tot` · `tb` · `kem` · `hong`
- side: `L` · `R` · `C` · `Both`
- shape: `hop` · `tron` (label VN hộp / tròn)
- bodyMaterial: `BT` · `BTCT` · `thep` · `khac` (label VN khớp Excel)

## 6. Grid AC (REQUIRED · list packKind)

| ID | AC |
|----|-----|
| AC-G-01 | Zones **A Header · B Toolbar · C Grid · D Pagination** (+ Zone F config) |
| AC-G-02 | Search + province/status/road/kmPoint → page=1 khi filter đổi |
| AC-G-03 | Row menu Xem / Sửa / Copy / Xóa / Lịch sử |
| AC-G-04 | `LinCatalogDataGrid` + kéo cột default ON · schema-driven typed |
| AC-G-05 | Footer `LinCatalogListPagination` 50/100/200/500 |
| AC-G-06 | 1× `LinPageLayout` — **cấm** nested CatalogListShell |
| AC-G-07 | Flex + skeleton — **cấm** blank body |
| AC-G-08 | Zone F `LinCatalogUiSchemaEditorModal` catalog `culverts` — **cấm** `LinListTableConfigModal` |
| AC-G-09 | Empty list copy VN «Chưa có cống» — **cấm** fake row / demo-json / LS SSOT |
| AC-G-10 | Toast 4xx/5xx · Confirm modal — **cấm** `window.alert`/`confirm` |
| AC-G-11 | Filter = **`LinErpListFilterBar`** 1 hàng wrap · **input + 🔍 cụm phải** — **cấm** stack / nút Tìm riêng |
| AC-G-12 | Toolbar FULL: Làm mới · Lịch sử · config · Delete · **+ Tạo mới** · Import/Export stub OK |
| AC-G-13 | Grid flow: sort · filter cột panel · chọn dòng · help đúp/Ctrl+chuột phải |
| AC-G-14 | Typed grid cols — **cấm** chỉ 3 cột detail* |
| AC-G-15 | `roadCode` filter = SearchInput road-route — **cấm** Text free (**GAP-CSDL-ROAD-01**) |
| AC-G-16 | Alias route `/csdl-bieu-04` load cùng resource — **GAP-BIEU04-ROUTE-01** |

### Report AC

**N/A** — packKind `list` (**GAP-PO-RPT-01**).

## 7. Screens (REQUIRED)

| Surface | Pattern | FormMode | URL | Tab index | Actions | devSlash |
|---------|---------|----------|-----|-----------|---------|----------|
| S-LIST | Kind **B** A–D+F | filter | `/csdl-bieu-04` · hub `?resource=culverts` | — | search · filter · Tạo mới · Refresh · Delete · config · History | `/agent-dev` |
| S-FORM-CREATE | Kind **D Slideout** Z1–Z3 2col | create | overlay | — | Lưu · Hủy · leave-confirm | `/agent-dev` |
| S-FORM-EDIT | Kind **D Slideout** | edit | overlay | — | Lưu · Hủy | `/agent-dev` |
| S-FORM-VIEW | Kind **D Slideout** | view | overlay | — | readOnly · **không** disabled xám | `/agent-dev` |
| S-FORM-COPY | Kind **D Slideout** | create (copy) | overlay | — | POST new · clear id · new code | `/agent-dev` |
| S-ACT-DELETE | Confirm modal | — | — | — | soft delete | `/agent-dev` |
| S-HIST | History modal | — | — | — | stub OK P2 | `/agent-dev` |
| S-HUB-ENTRY | Hub card open | — | `/so-ts/csdl-so-sach?resource=culverts` | — | open-resource · title VN | `/agent-dev` |
| S-PEER-SOTS | deep-link only | — | peer `so-ts-culvert-x` | — | **Cấm** merge form | — |
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
| Q-GPS | 4 số X/Y tim cống×tim đường vs 2 cặp lat/lng? | **`four_xy`** — UI 4 Number khớp Excel · SA chốt CRS/storage/migration. |
| Q-ROUTE | Alias `/csdl-bieu-04` ngay hay hub-only? | **`alias_now`** — Navigate `/csdl-bieu-04` P1 · giữ hub entry. |
| Q-PROV | Province static vs master? | **`keep_static`** LOOKUP_STATIC P1 · master province **P2**. |
| Q-LOAD | `loadClass` free-text vs LOOKUP? | **`free_text`** P1 · lookup_static **DEFER**. |
| GAP-CSDL-ORG-01 | org-unit SearchInput | **DEFER P2** — Text slim OK. |
| GAP-CSDL-XLS-01 | Excel import | **OUT pack** · toolbar stub OK. |
| packKind | list vs report | **Confirm `list`**. |

UNCLEAR field path/version = **none** sau autopilot chốt — không AskQuestion.

## 10. Out of scope (this pack)

- Import/export Excel full sheet Biểu 4 wizard (toolbar stub OK)
- org-unit SearchInput P2
- master province SSOT
- loadClass LOOKUP (DEFER)
- GIS map shell / Kind F canvas
- Merge form Sổ TS `so-ts-culvert-x`
- Auth NuGet wire (CommonLib debt)
- Re-scan demo HTML / crawl DemoRoot
- `yarn build` / e2e / `start:std` ở role PO
- Start role Design/SA/Dev trong cùng task (**GAP-PKT-ROLE-01**)
- Step 4b / migration (SA/Dev)

## 11. Handoff → Design (`/agent-design`)

| Field | Value |
|-------|-------|
| packKind confirm | **`list`** |
| Kind / surfaces | B catalog A–D+F + Kind D Slideout Z1–Z3 2col |
| Prototype | content-only list+slideout **17 cột** · skip chrome demo · **skip** Kind F map |
| reviewUrl | bắt buộc · `autoApprove=ON` → agent tự confirm Design |
| controlHint | §5 — **không** đoán Text vs SearchInput · **không** 3 ô detail* |
| Screens | §7 · Grid AC §6 · Leave §8 |
| grid_standard | `po-design-grid-standard` + `filter-bar-layout-hard` + `slideout-form-layout` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-04` |
| hubDeepLink | `http://localhost:9301/so-ts/csdl-so-sach?resource=culverts` |
| BE | `api/v1/asset/csdl-records` · resource `culverts` · road-route — **cấm** invent ERP / infra |
| Q chốt | GPS=four_xy · ROUTE=alias_now · PROV=keep_static · LOAD=free_text |
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
| generatedAt | 2026-09-05T06:00:00.000Z |
| versionGate | ok |
| contentHashPriorDataAnaly | sha256:7498ad6644d0e599bc40afb7589db5335c18adb4b92f1573de3c1fae2e17d3d6 |
| headerFingerprintPrior | sha256:155df2db0952d6e139fbedac748878ecd5c607d506fdf5fccc172f5b0f937024 |
| dataAnalySkillVersion | 2026.08.25.01 |
| dataAnalyWorkflowVersion | 2026.09.01.02 |
| dataAnalyRulesVersion | 2026.08.31.2 |
| taskId | `task_ad060865` |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-po skillVersion=2026.08.25.02 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHashPrior=sha256:7498ad6644d0e599bc40afb7589db5335c18adb4b92f1573de3c1fae2e17d3d6 taskId=task_ad060865 -->
