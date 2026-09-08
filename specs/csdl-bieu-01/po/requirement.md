# PO — Requirement — csdl-bieu-01 (Biểu 01 — Phân loại mặt đường)

| Field | Value |
|-------|-------|
| feature | `csdl-bieu-01` |
| title | CSDL Biểu 01 — Phân loại mặt đường |
| this role | `po` · `/agent-po` |
| changeScope | **`new_page`** (STATUS + packet · typed Biểu 1 trên resource `pavement-sections`) |
| packKind | **`list`** (**PO confirm** · data-analy đề xuất · Kind B list A–D + Kind D Slideout) |
| Feature Kind | **B** catalog A–D+F · **D** Slideout Z1–Z3 · **2col** · **cấm** Full-page form |
| resource | `pavement-sections` |
| formNo | `01` · title VN **Phân loại mặt đường** |
| columns | **38** (Excel Biểu 1) |
| IdCode | prefix **`MD`** · `MD-yyyyMMdd-nnnn` · **cấm** Guid |
| peerSoTs | `pavement-section` — deep-link OK · **cấm** merge 1 form hai chuẩn (**GAP-BIEU01-PEER-01**) |
| gap | GAP-BIEU01-TYPED-01 · GAP-BIEU01-ROUTE-01 · GAP-BIEU01-WIDTH-01 · GAP-BIEU01-STRUCT-01 · GAP-BIEU01-SKIP-01 · GAP-CSDL-ROAD-01 · GAP-CSDL-PROV-01 · GAP-CSDL-ORG-01 · GAP-CSDL-XLS-01 · GAP-BIEU01-PEER-01 · GAP-CSDL-CUC-03 · GAP-TYP-01 |
| mode | `feature_context` · CTX + cluster analy + hub demo zone ref · sourceKind=`synthetic` · **cấm** demo-json/LS SSOT |
| status | `confirmed` (autoApprove=ON · task `task_4ffaaf27`) |
| requestSource | queue CHAIN `/agent-qldb-workflow` · roleOnly=`po` · `/agent-po` · prior data_analy **confirmed** |
| autoApprove | **ON** — Design/SA/Review khi tới lượt → agent tự confirm · enqueue role kế. Role PO **không** gate confirm. |
| e2eQa | **ON** — queued tới `/agent-qa*` · **cấm** e2e / `yarn start:std` / `yarn build` ở role PO |
| prior · data_analy | status=`done`/`confirmed` · `specs/_data-analy/features/csdl-bieu-01-control-hint.md` · `csdl-bieu-01-real-data.md` · compact `handoff/data_analy-compact.md` · contentHash `sha256:3545960f4006740c9dfe57b5f004fa4a1cd1b7befbcd51e35e2168e16821b65e` · headerFingerprint `sha256:6376475bbf48ca5b3e8cfd26688cd877fd1bc77d5b8d8c4c3d314cd0572f5cf2` · analy `task_41122f1b` · **cấm** re-scan demo (**GAP-PO-DEMO-RESCAN-01**) |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | **`/csdl-bieu-01`** (alias Navigate **now**) · hub `/so-ts/csdl-so-sach?resource=pavement-sections` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-01` |
| hubDeepLink | `http://localhost:9301/so-ts/csdl-so-sach?resource=pavement-sections` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Asset** · live `api/v1/asset/csdl-records?resource=pavement-sections` · BFF `web-bff/api/v1/asset/csdl-records` · **cấm ERP.*** · **cấm** invent `api/v1/infra/*` · **cấm** `api/v1/so-ts/*` invent · **cấm** `api/v1/rmms/*` |
| domain | **Asset** |
| be_repo_confirm | `approve` (`Linm.RMMS.WebService`) |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| controlHint | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-01-control-hint.md` |
| realData | `D:/AI-QLBD/Linm.RMMS.Data/specs/_data-analy/features/csdl-bieu-01-real-data.md` |
| contentHash | `sha256:3545960f4006740c9dfe57b5f004fa4a1cd1b7befbcd51e35e2168e16821b65e` |
| headerFingerprint | `sha256:6376475bbf48ca5b3e8cfd26688cd877fd1bc77d5b8d8c4c3d314cd0572f5cf2` |
| analyReuse | **hash skip** — **cấm** re-scan demo / crawl CTX / DemoRoot (**GAP-PO-DEMO-RESCAN-01**) |
| parent | hub `csdl-so-sach` · cluster `csdl-cuc-2026` · Excel sheet Biểu 1 |
| taskId | `task_4ffaaf27` · analy `task_41122f1b` |
| updatedAt | `2026-09-05T05:00:00.000Z` |
| versionGate | `ok` (skill/schema/workflow khớp analy · pack `po/list@session`) |

**packKind confirm:** `list` (data-analy đề xuất · PO chốt). Kind **B** list A–D+F + Kind **D** Slideout 2col trên MFE Asset host `:9301` — **không** report pack · **không** Kind F map canvas · **không** Excel import wizard trong pack này (OUT **GAP-CSDL-XLS-01**).

**≠** Sổ TS `pavement-section` (peer deep-link) · ≠ hub generic 3 ô `detail*` — đây là **typed Biểu 01** 38 cột.

**Cấm:** implement · re-scan DEM · form chỉ 3 ô `detail*` · merge form Sổ TS · invent map · invent API · ERP.* · demo-json / localStorage SSOT · Guid IdCode · yarn build/e2e/start:std ở role PO · start role khác (**GAP-PKT-ROLE-01**).

## 1. Goal

Chốt requirement **new_page** cho **Biểu 01 — Phân loại mặt đường** (`resource=pavement-sections`): list + Slideout typed **38 cột** Excel Biểu 1 · thay generic hub form · giữ API prefix `csdl-records` · alias route `/csdl-bieu-01` + hub entry.

Persona: Khu QLĐB · Văn phòng Cục · Ban QLDA (web).

**Delta pack này (SSOT lock từ analy):**

1. Form/list typed 38 cột — **cấm** chỉ `detailPrimary`/`detailSpec`/`detailExtra` (**GAP-BIEU01-TYPED-01** / **GAP-CSDL-CUC-03**).
2. Alias mfeStd `/csdl-bieu-01` Navigate P1 · giữ hub deep-link (**Q-ROUTE** / **GAP-BIEU01-ROUTE-01**).
3. `roadCode`/`roadName` = SearchInput `road-route` filter + form (**GAP-CSDL-ROAD-01**).
4. Province LOOKUP_STATIC P1 (**Q-PROV** keep_static).
5. Bề rộng mặt = **4 bucket** Excel (9)–(12) (**Q-WIDTH** / **GAP-BIEU01-WIDTH-01**) — SA chốt storage.
6. Kết cấu = **1 enum** `structureType` (**Q-STRUCT** / **GAP-BIEU01-STRUCT-01**).
7. LeaveConfirmModal dirty · toast 4xx/5xx — **cấm** native alert/confirm.
8. Import skip cầu length âm — rule lock · XLS OUT pack (**GAP-BIEU01-SKIP-01** / **GAP-CSDL-XLS-01**).
9. Peer Sổ TS deep-link only — **cấm** merge form (**GAP-BIEU01-PEER-01**).

## 2. Current → New (`new_page` · REQUIRED)

Nguồn SSOT: control-hint + real-data §A+§B · `analyzedAt=2026-09-05T11:53:25.414Z` · contentHash khớp STATUS · **không** crawl demo/CTX lại.

| Layer | Current (live inventory analy) | New (this pack · copy analy) |
|-------|--------------------------------|------------------------------|
| Entry | Hub-only `?resource=pavement-sections` | Alias **`/csdl-bieu-01`** + hub entry — **GAP-BIEU01-ROUTE-01** |
| List Kind B | Generic road/km/detail cols | Typed cols bề rộng · kết cấu · cấp · năm SD |
| Form Kind D | 3 ô `detail*` polymorphic | Typed **38 cột** Slideout 2col Z1–Z3 — **GAP-BIEU01-TYPED-01** |
| road | Text free (hub) | SearchInput `road-route` — **GAP-CSDL-ROAD-01** |
| province | LOOKUP_STATIC 5 tỉnh | **keep_static** P1 — **Q-PROV** |
| manageUnit | Text | Text P1 · SearchInput org-unit **DEFER P2** — **GAP-CSDL-ORG-01** |
| Width | — / 1 width risk | **4 bucket** `surfWGe14`…`surfWLe5` — **Q-WIDTH** |
| Structure | — | **1 enum** `structureType` — **Q-STRUCT** |
| Import | stub | Skip cầu âm · sheet 38 cột **OUT** |
| API | `…/csdl-records?resource=pavement-sections` | **Giữ prefix** · widen typed DTO/UiSchema — SA |
| Peer | `pavement-section` | Deep-link · **cấm** merge |

**Không đổi:** Kind B A–D · Kind D Slideout · `LinPageLayout kind="catalog"` · `LinCatalogListPagination` 50/100/200/500 · prefix `api/v1/asset/csdl-records` · resource key `pavement-sections` · IdCode **cấm** Guid · **cấm ERP.*** · map = none.

### GAP IDs (PO bắt buộc Design/Dev đóng P1 trừ DEFER/OUT)

| ID | New | P1 |
|----|-----|----|
| GAP-BIEU01-TYPED-01 | Typed 38 cột thay generic detail* | **YES** |
| GAP-BIEU01-ROUTE-01 | Alias `/csdl-bieu-01` Navigate | **YES** (`alias_now`) |
| GAP-CSDL-ROAD-01 | SearchInput `road-route` filter+form | **YES** |
| GAP-CSDL-PROV-01 | Province LOOKUP_STATIC | **YES** (keep_static) · master = P2 |
| GAP-BIEU01-WIDTH-01 | 4 bucket bề rộng mặt | **YES** product · SA storage |
| GAP-BIEU01-STRUCT-01 | 1 enum `structureType` | **YES** |
| GAP-BIEU01-PEER-01 | Deep-link Sổ TS · không merge | **YES** (nav rule) |
| GAP-CSDL-CUC-03 | Đóng gap Biểu 1 khi typed PASS | **YES** (via TYPED) |
| GAP-TYP-01 | label 13 · input D14/M16 | **YES** |
| GAP-CSDL-ORG-01 | manageUnit SearchInput org-unit | **DEFER P2** |
| GAP-BIEU01-SKIP-01 | Import skip cầu âm | **OUT** XLS · rule locked |
| GAP-CSDL-XLS-01 | Import/export sheet Biểu 1 | **OUT pack** |

## 3. DoD (đo được)

1. Entry `/csdl-bieu-01` **và** hub `?resource=pavement-sections` mở cùng list typed — title VN «Biểu 01 — Phân loại mặt đường» · back hub · **cấm** slug trên card hub.
2. List BFF `GET …/csdl-records?resource=pavement-sections` — empty grid VN «Chưa có đoạn mặt đường» · CTA Tạo mới · **cấm** fake row / demo-json / LS SSOT.
3. Zone A: title VN · back `/so-ts/csdl-so-sach` — **cấm** Thêm mới trên A.
4. Zone B: `LinErpListFilterBar` 1 hàng wrap · input+🔍 cụm phải — SearchTextInput · province · status · road SearchInput · kmFrom/kmTo · Tạo mới · Refresh · Delete · History · SchemaConfig · Import/Export stub — filter đổi → page=1 · **search must work** · **cấm** nút Tìm riêng.
5. Zone C: `LinCatalogDataGrid` typed cols (không chỉ 3 detail) · STT · row menu Xem/Sửa/Copy/Xóa/Lịch sử · kéo cột ON.
6. Zone D: `LinCatalogListPagination` **50 / 100 / 200 / 500**.
7. Zone F: `LinCatalogUiSchemaEditorModal` catalogKind **`pavement-sections`** (typed) — **cấm** `LinListTableConfigModal`.
8. Slideout Kind D Z1–Z3 2col: Create/Edit/View/Copy — đủ cột Excel Biểu 1 · **cấm** form chỉ 3 ô `detail*`.
9. Required P1: `roadCode`/`roadName` · `province` · `kmFrom` · `kmTo` · `lengthKm` · `structureType` · `status` · code IdCode `MD-…` readonly.
10. View = `readOnly` — **cấm** Input disabled xám toàn form.
11. Width UI = 4 Number bucket · Structure = 1 Dropdown enum — khớp **Q-WIDTH** / **Q-STRUCT**.
12. Leave-confirm dirty · toast 4xx/5xx — **cấm** native alert/confirm.
13. Typography: label **13** · input D14/M16 (**GAP-TYP-01**).
14. Map = none — deep-link gis only · **cấm** invent map canvas.
15. Peer Sổ TS = navigate only · **cấm** merge form.
16. `yarn build` / e2e / `start:std` **chỉ** Dev/QA — PO **cấm**.

## 4. CTX / DEM / DI inventory (hash skip — đọc analy · **không** re-crawl)

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/csdl-bieu-01.md` | feature |
| CTX-02 | `docs/context/features/csdl-so-sach.md` | parent hub |
| DA-01 | `specs/_data-analy/features/csdl-bieu-01-control-hint.md` | controlHint SSOT · **done** |
| DA-02 | `specs/_data-analy/features/csdl-bieu-01-real-data.md` | real-data §A–§F |
| DA-03 | `specs/_data-analy/csdl-cuc-2026/ANALYSIS-AND-TASKS.md` | cluster Biểu 1 · 38 cột |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/csdl-so-sach-demo.html` | entry · zone ref only |
| DEM-02 | `Linm.RMMS.Demo/src/demo/asset/csdl-so-sach.html` | page · **không** SSOT data |
| DI-01 | `data-import/…/1. Biểu mẫu CSDL.xls` sheet Biểu 1 | Excel cite · import OUT |
| MFE hub | `CsdlSoSachPage` | Kind B live shell |
| MFE form | `CsdlFormSlideout` | generic → typed replace |
| MFE svc | `services/csdlSoSach/endpoint.ts` | `BASE=/asset/csdl-records` |
| BE | `CsdlCatalogRecordsController` · shell entity · typed `Schema_CsdlBieu1` (**SA**) | live CRUD + widen |
| DOMAIN-MAP | `Linm.RMMS.WebService/docs/DOMAIN-MAP.md` | Asset · `csdl-so-sach` · `pavement-section` |

Normalized header (analy):  
`code|roadCode|roadName|province|kmFrom|kmTo|lengthKm|baseWidthM|surfWGe14|surfW14To10|surfW10To5|surfWLe5|structureType|surfaceThicknessCm|plainClass|mountainClass|yearsInServiceBand|handoverMinistry|handoverLocal|lastMajorRehabYear|lastSurfaceRepairYear|updatedByName|manageUnit|notes|status|side`

## 5. controlHint (PO chốt · copy data-analy — Design map UI · SA map API)

### List filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · đường · ghi chú |
| province | Tỉnh/TP | `Dropdown` | LOOKUP_STATIC | **Q-PROV** keep_static |
| status | Tình trạng | `Dropdown` | LOOKUP_STATIC | tot/tb/kem/hong |
| roadCode | Đường | `SearchInput` | **road-route** | **GAP-CSDL-ROAD-01** |
| kmFrom | Từ Km | `Number` | — | filter QS |
| kmTo | Đến Km | `Number` | — | filter QS |

### Form fields (Slideout Kind D · Excel Biểu 1)

| # | Field key | Label | controlHint | required | Notes |
|---|-----------|-------|-------------|----------|-------|
| — | code | Mã | `Text` readonly | auto | IdCode `MD-…` · **cấm** Guid |
| 2–3 | roadCode / roadName | Mã/Tên đường | `SearchInput` | * | catalogKind `road-route` |
| 4 | province | Địa danh | `Dropdown` | * | LOOKUP_STATIC P1 |
| 5–6 | kmFrom / kmTo | Từ/Đến Km | `Number` | * | decimal |
| 7 | lengthKm | Chiều dài (km) | `Number` | * | derived OK nếu SA chốt |
| 8 | baseWidthM | Bề rộng nền (m) | `Number` | | |
| 9–12 | surfWGe14 · surfW14To10 · surfW10To5 · surfWLe5 | B mặt ≥14 / 14–10 / 10–5 / ≤5 | `Number` ×4 | | **Q-WIDTH** four_buckets |
| 13 | structureType | Kết cấu | `Dropdown` | * | BTXM/BTN/Đá nhựa/Cấp phối · **Q-STRUCT** one_enum |
| 17 | surfaceThicknessCm | Dày mặt (cm) | `Number` | | |
| 18–22 | plainClass | Cấp ĐB/đồi I–V | `Dropdown` | | I–V |
| 23–27 | mountainClass | Cấp MN I–V | `Dropdown` | | I–V |
| 28–31 | yearsInServiceBand | Phân loại năm SD | `Dropdown` | | 1–3 / 4–6 / 7–9 / >9 |
| 32 | handoverMinistry | BG T.BỘ | `Checkbox` | | bool |
| 33 | handoverLocal | BG MĐ | `Checkbox` | | bool |
| 34 | lastMajorRehabYear | Năm ĐT | `Number` | | year |
| 35 | lastSurfaceRepairYear | Năm SC ≥1km | `Number` | | year |
| 36 | updatedByName | Người cập nhật | `Text` | | audit display |
| 37 | manageUnit | ĐV QL | `Text` | | **GAP-CSDL-ORG-01** DEFER P2 → SearchInput |
| 38 | notes | Ghi chú | `Textarea` | | |
| — | status | Tình trạng | `Dropdown` | * | LOOKUP_STATIC |
| — | side | Vị trí L/R | `Dropdown` | | L/R/C/Both |

### Actions

| Action | Surface | Notes |
|--------|---------|-------|
| back-hub | List A | về `/so-ts/csdl-so-sach` |
| create / view / edit / copy / delete | Toolbar + row | soft-delete API |
| save / cancel | Form footer | LeaveConfirmModal dirty |
| import / export | Toolbar | stub · XLS Biểu 1 **OUT** |
| history | Toolbar / row | stub modal OK P2 |
| schema-config | Toolbar | UiSchema typed `pavement-sections` |
| open-peer-sots | nav | deep-link `pavement-section` · **cấm** merge |

### Real-data bind (copy §B analy — SA **giữ** path cite)

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/csdl-records?resource=pavement-sections` |
| Detail | `GET /web-bff/api/v1/asset/csdl-records/{id}` |
| Create | `POST /web-bff/api/v1/asset/csdl-records` body `resource=pavement-sections` + typed fields |
| Update | `PUT /web-bff/api/v1/asset/csdl-records/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/csdl-records/{id}` (soft) |
| road-route | `GET /integration/road-routes/search` |
| org-unit | `GET /integration/org-units/search` | **DEFER P2** |

API mirror: `api/v1/asset/csdl-records`. FE cite: `services/csdlSoSach/endpoint.ts` `BASE=/asset/csdl-records`.

### Status / side / structure (LOOKUP_STATIC)

- status: `tot` · `tb` · `kem` · `hong`
- side: `L` · `R` · `C` · `Both`
- structureType: `BTXM` · `BTN` · `DaNhua` · `CapPhoi` (label VN khớp Excel)
- plainClass / mountainClass: `I`–`V`
- yearsInServiceBand: `1-3` · `4-6` · `7-9` · `>9`

## 6. Grid AC (REQUIRED · list packKind)

| ID | AC |
|----|-----|
| AC-G-01 | Zones **A Header · B Toolbar · C Grid · D Pagination** (+ Zone F config) |
| AC-G-02 | Search + province/status/road/kmFrom/kmTo → page=1 khi filter đổi |
| AC-G-03 | Row menu Xem / Sửa / Copy / Xóa / Lịch sử |
| AC-G-04 | `LinCatalogDataGrid` + kéo cột default ON · schema-driven typed |
| AC-G-05 | Footer `LinCatalogListPagination` 50/100/200/500 |
| AC-G-06 | 1× `LinPageLayout` — **cấm** nested CatalogListShell |
| AC-G-07 | Flex + skeleton — **cấm** blank body |
| AC-G-08 | Zone F `LinCatalogUiSchemaEditorModal` catalog `pavement-sections` — **cấm** `LinListTableConfigModal` |
| AC-G-09 | Empty list copy VN — **cấm** fake row / demo-json / LS SSOT |
| AC-G-10 | Toast 4xx/5xx · Confirm modal — **cấm** `window.alert`/`confirm` |
| AC-G-11 | Filter = **`LinErpListFilterBar`** 1 hàng wrap · **input + 🔍 cụm phải** — **cấm** stack / nút Tìm riêng |
| AC-G-12 | Toolbar FULL: Làm mới · Lịch sử · config · Delete · **+ Tạo mới** · Import/Export stub OK |
| AC-G-13 | Grid flow: sort · filter cột panel · chọn dòng · help đúp/Ctrl+chuột phải |
| AC-G-14 | Typed grid cols — **cấm** chỉ 3 cột detail* |
| AC-G-15 | `roadCode` filter = SearchInput road-route — **cấm** Text free (**GAP-CSDL-ROAD-01**) |
| AC-G-16 | Alias route `/csdl-bieu-01` load cùng resource — **GAP-BIEU01-ROUTE-01** |

### Report AC

**N/A** — packKind `list` (**GAP-PO-RPT-01**).

## 7. Screens (REQUIRED)

| Surface | Pattern | FormMode | URL | Tab index | Actions | devSlash |
|---------|---------|----------|-----|-----------|---------|----------|
| S-LIST | Kind **B** A–D+F | filter | `/csdl-bieu-01` · hub `?resource=pavement-sections` | — | search · filter · Tạo mới · Refresh · Delete · config · History | `/agent-dev` |
| S-FORM-CREATE | Kind **D Slideout** Z1–Z3 2col | create | overlay | — | Lưu · Hủy · leave-confirm | `/agent-dev` |
| S-FORM-EDIT | Kind **D Slideout** | edit | overlay | — | Lưu · Hủy | `/agent-dev` |
| S-FORM-VIEW | Kind **D Slideout** | view | overlay | — | readOnly · **không** disabled xám | `/agent-dev` |
| S-FORM-COPY | Kind **D Slideout** | create (copy) | overlay | — | POST new · clear id · new code | `/agent-dev` |
| S-ACT-DELETE | Confirm modal | — | — | — | soft delete | `/agent-dev` |
| S-HIST | History modal | — | — | — | stub OK P2 | `/agent-dev` |
| S-HUB-ENTRY | Hub card open | — | `/so-ts/csdl-so-sach?resource=pavement-sections` | — | open-resource · title VN | `/agent-dev` |
| S-PEER-SOTS | deep-link only | — | peer `pavement-section` | — | **Cấm** merge form | — |
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
| Import skip-bridge (OUT) | log/count hàng bỏ qua | ghi length âm |
| Lookup road-route no match | SearchInput empty · save 422 | free-text substitute master |
| Overlay z-index (modal trên Slideout) | `useAlert` / Modal stacked SSOT | z-index hack |

## 9. Open questions — Autopilot chốt

| ID | Question | Decision (PO) |
|----|----------|----------------|
| Q-WIDTH | 4 bucket bề rộng mặt vs 1 `surfaceWidthM`? | **`four_buckets`** — UI 4 Number khớp Excel (9)–(12) · SA chốt storage/migration. |
| Q-STRUCT | 4 flag kết cấu vs 1 enum? | **`one_enum`** — Dropdown `structureType` · 1 loại/đoạn. |
| Q-ROUTE | Alias `/csdl-bieu-01` ngay hay hub-only? | **`alias_now`** — Navigate `/csdl-bieu-01` P1 · giữ hub entry. |
| Q-PROV | Province static vs master? | **`keep_static`** LOOKUP_STATIC P1 · master province **P2**. |
| GAP-CSDL-ORG-01 | org-unit SearchInput | **DEFER P2** — Text slim OK. |
| GAP-CSDL-XLS-01 / SKIP-01 | Excel import | **OUT pack** · skip-bridge rule locked. |
| packKind | list vs report | **Confirm `list`**. |

UNCLEAR field path/version = **none** sau autopilot chốt — không AskQuestion.

## 10. Out of scope (this pack)

- Import/export Excel full sheet Biểu 1 wizard (toolbar stub OK)
- org-unit SearchInput P2
- master province SSOT
- GIS map shell / Kind F canvas
- Merge form Sổ TS `pavement-section`
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
| Prototype | content-only list+slideout **38 cột** · skip chrome demo · **skip** Kind F map |
| reviewUrl | bắt buộc · `autoApprove=ON` → agent tự confirm Design |
| controlHint | §5 — **không** đoán Text vs SearchInput · **không** 3 ô detail* |
| Screens | §7 · Grid AC §6 · Leave §8 |
| grid_standard | `po-design-grid-standard` + `filter-bar-layout-hard` + `slideout-form-layout` |
| mfeStdUrl | `http://localhost:9301/csdl-bieu-01` |
| hubDeepLink | `http://localhost:9301/so-ts/csdl-so-sach?resource=pavement-sections` |
| BE | `api/v1/asset/csdl-records` · resource `pavement-sections` · road-route — **cấm** invent ERP / infra |
| Q chốt | WIDTH=four_buckets · STRUCT=one_enum · ROUTE=alias_now · PROV=keep_static |
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
| generatedAt | 2026-09-05T05:00:00.000Z |
| versionGate | ok |
| contentHashPriorDataAnaly | sha256:3545960f4006740c9dfe57b5f004fa4a1cd1b7befbcd51e35e2168e16821b65e |
| headerFingerprintPrior | sha256:6376475bbf48ca5b3e8cfd26688cd877fd1bc77d5b8d8c4c3d314cd0572f5cf2 |
| dataAnalySkillVersion | 2026.08.25.01 |
| dataAnalyWorkflowVersion | 2026.09.01.02 |
| dataAnalyRulesVersion | 2026.08.31.2 |
| taskId | `task_4ffaaf27` |
| packKind | list |
| changeScope | new_page |

---
<!-- Version meta: skillId=agent-po skillVersion=2026.08.25.02 schemaVersion=1 workflowVersion=2026.09.01.02 rulesVersion=2026.08.31.2 versionGate=ok contentHashPriorDataAnaly=sha256:3545960f4006740c9dfe57b5f004fa4a1cd1b7befbcd51e35e2168e16821b65e taskId=task_4ffaaf27 -->
