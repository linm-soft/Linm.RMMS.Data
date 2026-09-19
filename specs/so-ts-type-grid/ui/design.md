# Design — so-ts-type-grid (Sổ TS — shell grid/form theo loại)

| Field | Value |
|-------|-------|
| feature | `so-ts-type-grid` |
| title | Sổ TS — grid/form theo loại (shell Kind B + section S-*) |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** — Catalog list A–D+F + **full-page** form C/E/V/Copy |
| formSurface | **full** · `CatalogFormShell` · **`data-form-cols="5"`** |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_1123e84d`) |
| changeScope | `edit_page` |
| packKind | `list` |
| typeCode | — (shell · `?type=` · clusters CTX §3 · **out** `route_master` / `pavement`) |
| cluster | registry CTX §3 (`atgt_point` · `linear_protect` · `crossing` · `station` · `stop` · `land` · `ops`) |
| dump | per-type children · parent SSOT · **cấm** invent cột |
| prior · po | `confirmed` · `po/requirement.md` · compact `handoff/po-compact.md` |
| prior · data_analy | `confirmed` · `_data-analy/features/so-ts-type-grid-control-hint.md` · `so-ts-type-grid-real-data.md` · contentHash `sha256:48428b7d526c6b127c4d82d0ac8f2cf8a10326f939e5f15da2daf69b9bbc2c5c` |
| analyReuse | **hash skip** — **cấm** re-scan demo (**GAP-DES-DEMO-RESCAN-01**) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` |
| mfeStdRoute | alias `/so-ts-type-grid` → live `/so-ts` (+ optional `?type=`) |
| mfeStdUrl | `http://localhost:9301/so-ts-type-grid` |
| peerStdUrl | `http://localhost:9301/so-ts` |
| liveForm | `/so-ts/tao-moi` · `/so-ts/sua?id=` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/asset/road-assets`** · BFF `web-bff/api/v1/asset/road-assets` — **cấm ERP.*** |
| catalogKind UI schema | `road-assets` |
| ui_repo_confirm | `approve` (`Linm.Web.RMMS.Asset`) |
| design_confirm | **approve** (autoApprove ON · reviewUrl mở được) |
| shared_grid_example | `v1` |
| real_view_parity | `v1` |
| taskId | `task_1123e84d` |
| updatedAt | `2026-09-19T01:05:00.000Z` |

**Cấm:** re-scan demo · fork `AssetFormPage` 32 file · Modal/Slideout form · tab legacy DRVN · invent API / `api/v1/so-ts/*` path · ERP.* · `ErpListHeaderFilters` / stack filter · nút Tìm riêng · invent ảnh cột · native `confirm`/`alert` · yarn build/e2e/start:std · start role SA/Dev trong task này (**GAP-PKT-ROLE-01**).

## 0. Context & Demo (from PO · hash skip)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/so-ts-type-grid.md` | shell SSOT · clusters §3 · dump cite |
| CTX-02 | `docs/context/features/import-gov-asset-fields.md` | dump per-type · peer |
| DEM-01 | `Linm.RMMS.Demo/.../asset-demo.html` → `asset/asset.html` | UI chrome only · **cấm** SSOT data · **không** re-scan |
| MAU | `docs/img/gov-mau-tai-san/` | 35 cặp list/detail · children cite |
| DA-HINT | `specs/_data-analy/features/so-ts-type-grid-control-hint.md` | controlHint SSOT |
| DA-REAL | `specs/_data-analy/features/so-ts-type-grid-real-data.md` | §A+§B PASS |

**Delta this Design (`edit_page`):** formalize **typeColumnProfiles** registry + hide-empty fill% · extract mountable **S-*** by cluster · harden `LinErpListFilterBar` · `LeaveConfirmModal` · DOMAIN-MAP slug `so-ts-type-grid` (SA) · gap-no-source empty+toast · **giữ** Kind B A–D · full-page 5col · API `road-assets`.

**PO chốt (Design khóa):** GAP-SOTS-COL-01 · FORM-01 · DOMAIN-01 · API-DOC · CULVERT-X-01 · REUSE-01 · TAB-01 · HIDE-01 · ROUTE-SPLIT · FILTER-BAR-01 · LEAVE-01 · OUT-01.

## 1. Kind + UI pattern (chốt)

| | |
|--|--|
| Feature Kind | **B** catalog list + form **full-page** (≥10 field — **cấm** Modal / Slideout) |
| List pattern | `LinPageLayout kind="catalog"` · **1×** — **cấm** nested `CatalogListShell` |
| Form pattern | **full-page** `AssetFormPage` · routes `/so-ts/tao-moi` · `/so-ts/sua?id=` · Copy = create prefill |
| Form grid | **`data-form-cols="5"`** · **cấm** `.fields { 1fr 1fr }` (**GAP-DES-FORM-SURFACE-01**) |
| Toolbar SSOT | `catalogToolbar` + `erp-control-icon-map` §0 · config=`fa-cog` |
| Zone F | **`LinCatalogUiSchemaEditorModal`** title «Cấu hình hiển thị danh mục» · catalogKind=`road-assets` |
| Filter | **`LinErpListFilterBar`** 1 hàng wrap · SearchTextInput lead · **input + 🔍 cụm phải** — **cấm** nút Tìm · **cấm** `ErpListHeaderFilters` (**GAP-FILTER-BAR-01**) |
| Leave | **`LeaveConfirmModal`** dirty — **cấm** native confirm (**GAP-SOTS-LEAVE-01**) |
| Typography | label **13** · input D14/M16 (**GAP-TYP-01**) |
| Alias | `/so-ts-type-grid` → Navigate live `/so-ts` (board std) |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls / notes |
|--------|----------|-------|------------------|
| S-LIST | list | **A Header · B Toolbar+filter · C Grid · D Pagination · F Schema · H History** | profile cột theo `?type=` / cluster |
| S-FORM-CREATE | create | full-page Z1 toolbar · Z2 S-* · (no footer Lưu) | type từ filter/`?type=` · leave-confirm |
| S-FORM-EDIT | edit | same | leave-confirm dirty |
| S-FORM-VIEW | view | same · **`<dl>` / readOnly display** | **cấm** Input disabled xám |
| S-FORM-COPY | create (copy) | same | clear id · keep type |
| S-ACT-DELETE | confirm Modal | — | `useAlert` / Modal · soft delete |
| S-HIST | `LinCatalogHistoryModal` | DES-GRID-H | stub OK |
| S-ALIAS | navigate | — | `/so-ts-type-grid` → `/so-ts` |

**devSlash:** `/agent-dev` (list + full-page · **không** oms-map / ai-detect / camera).

## 3. Control map (Design chốt — khớp controlHint · không đoán)

### 3.1 Zone B filters (`LinErpListFilterBar`)

| uiField | Label VN | Control | catalogKind | Notes |
|---------|----------|---------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên · tuyến · QR · apply → page=1 · **🔍 cụm phải** · **search must work** |
| type | Loại tài sản | `SearchInput` | **asset-type** | **ẩn/lock** khi `?type=` deep-link |
| route | Cao tốc / quốc lộ | `SearchInput` | **road-route** | tầng 1 · **cấm** free-text |
| routeNamed | Tuyến | `SearchInput` | **road-route** · `parentCode=route` | tầng 2 |
| routeSegment | Đoạn | `SearchInput` | **road-route** cascade | tầng 3 |
| kmFrom | Lý trình từ | `Text` | chainage | filter QS |
| kmTo | Lý trình đến | `Text` | chainage | filter range · **≠** form point hide |
| orgUnit | Đơn vị | `SearchInput` tree | **org-unit** | QS `orgUnit` |

GET list: `?type=&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=`

**Cấm** nút «Tìm» riêng · **cấm** invent ảnh cột trên filter.

### 3.2 Grid columns (shell base + type profile)

| uiField | Label VN | Control / col | Visible (shell default) | Notes |
|---------|----------|---------------|-------------------------|-------|
| code | Mã | Text / link | ON | IdCode |
| name | Tên official | link Text | ON | dump name_* / biển = sign |
| type | Loại tài sản | Text | ON · **OFF** khi `?type=` | |
| route | Cao tốc / QL | Text | ON | tầng 1 · **cấm** gộp |
| routeNamed | Tuyến | Text | ON | tầng 2 |
| routeSegment | Đoạn | Text | ON | tầng 3 |
| kmFrom | Lý trình từ/đầu | Text chainage | ON | |
| kmTo | Lý trình đến/cuối | Text | cluster-dependent | **OFF** point nếu dump không có |
| status | Tình trạng KT | Dropdown label | optional | |
| quantity / unitCode | SL / ĐVT | Number/Text | hide-empty | dump fill% |
| dumpSpecs.* | ATTR loại | derived labels | per type profile | children override · **cấm** invent |
| lat/lng | GPS | derived | optional | |

Grid = `useCatalogUiSchema('road-assets')` + **`typeColumnProfiles`** (cluster defaults + hide-empty fill%) · kéo cột default **ON** · STT · row menu Xem/Sửa/Copy/Lịch sử.

**gap-no-source** (vd. `CULVERT_X`): empty grid + toast · **cấm** seed (**GAP-CULVERT-X-01**).

### 3.3 Form sections (reuse S-* — **cấm** fork)

#### S-META — mọi type `/so-ts`

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| code | Mã tài sản | `Text` readonly | auto | IdCode BE · prefix per-type child |
| type | Loại tài sản | `SearchInput` | * | lock khi `?type=` / tile |
| status | Tình trạng KT | `Dropdown` | * | init-data `statuses` |
| source | Nguồn | `Dropdown` | | init-data `sources` |

#### S-ROUTE — mọi

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| route | Cao tốc / quốc lộ | `SearchInput` | * | `catalogKind=road-route` |
| routeNamed | Tuyến | `SearchInput` | | cascade `parentCode=route` |
| routeSegment | Đoạn tuyến | `SearchInput` | | cascade |

#### S-LOC-POINT — `atgt_point` · `stop` · `ops` · `station` · crossing-point

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| kmFrom | Lý trình (Km+) | `Text` chainage | * | **cấm** ép `"0"` |
| lat / lng | X / Y | `Number` | | |
| side | Vị trí mặt cắt | `Dropdown` | | LOOKUP_STATIC L/R/C |
| tỉnh | Tỉnh | Text / SearchInput | | dump nếu có |

**Không mount / không required `kmTo`** trên POINT.

#### S-LOC-RANGE — `linear_protect` · `land` · crossing có km cuối

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| kmFrom / kmTo | Lý trình đầu/cuối | `Text` | * | |
| 4 XY | Tọa độ đầu/cuối | `Number` | | dump nếu có |

#### S-NAME — khi dump có name_*

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| name | Tên official | `Text` **hoặc** `SearchInput` | per dump | biển = **traffic-sign-type** |

#### S-ATTR — mọi · field = mẫu Thông tin chung

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| dumpSpecs.* | Thuộc tính loại | Select / SearchInput / Number / Text / date | per dump | **cấm** bịa · bỏ `<dl>`-only · flatten = SA (**GAP-SOTS-FORM-01**) |

#### S-GPS — mọi

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| lat / lng | GPS | `Number` | | |
| qr | QR | `Text` | | |
| value | Giá trị | `MoneyInput` | | |
| note | Ghi chú | `TextArea` | | span-full |

**Không** mount section trống. **Cấm** tab Chi tiết / Dữ liệu TS / Bảo trì / Tệp / Ghi chú / Lịch sử DRVN (**GAP-SOTS-TAB-01**).

### 3.4 Cluster → form mount / grid hide (SSOT)

| Cluster | Form sections | Grid ẩn mặc định |
|---------|---------------|------------------|
| `atgt_point` | META ROUTE LOC-POINT NAME ATTR GPS | `kmTo` · SL/ĐVT nếu dump 0 · `type` khi `?type=` |
| `linear_protect` | META ROUTE LOC-RANGE NAME ATTR GPS | `type` khi filter · ảnh GOV N/A |
| `crossing` | META ROUTE POINT\|RANGE NAME ATTR GPS | theo fill dump |
| `station` | META ROUTE LOC-POINT NAME ATTR GPS | DT/cấp/CT phụ nếu fill 0 |
| `stop` | như atgt_point + ATTR bay | — |
| `land` | META ROUTE LOC-RANGE NAME ATTR GPS | — |
| `ops` | META ROUTE LOC-POINT NAME ATTR GPS | — |
| `route_master` / `pavement` | **out of `/so-ts`** | slug `road-route` · `pavement-section` |

## 4. Zone wiring (DES-RPT)

| Zone id | Surface | Component / pattern |
|---------|---------|---------------------|
| DES-GRID-A | List header | title «Sổ tài sản» / theo type · **cấm** Thêm mới trên A |
| DES-GRID-B | Toolbar | Refresh · History · SchemaConfig · View/Edit/Del · **Tạo mới** (right) |
| DES-GRID-B-FILTER | Filter | `LinErpListFilterBar` · §3.1 |
| DES-GRID-C0 | Grid shell | `LinCatalogDataGrid` |
| DES-GRID-C2 | Columns | typeColumnProfiles + hide-empty |
| DES-GRID-C3 | Row menu | Xem / Sửa / Copy / Lịch sử |
| DES-GRID-D | Pager | SSOT page/pageSize |
| DES-GRID-F | Schema modal | `LinCatalogUiSchemaEditorModal` · `road-assets` |
| DES-GRID-H | History | `LinCatalogHistoryModal` |
| DES-FORM-Z1 | Form chrome | Lưu / Hủy / Back · title |
| DES-FORM-Z2 | Form body | S-* mount · `data-form-cols="5"` |
| DES-LEAVE | Leave | `LeaveConfirmModal` |

**reviewUrl:** `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-type-grid/ui/prototype/so-ts-type-grid-list-prototype.html`

## 5. Acceptance criteria (Design)

| ID | Criterion |
|----|-----------|
| AC-L-01 | Kind B A–D+F · `LinErpListFilterBar` · search must work · **cấm** nút Tìm |
| AC-L-02 | `typeColumnProfiles` · hide-empty fill% · ẩn `type` khi `?type=` · 3 cột tuyến tách |
| AC-L-03 | Point ẩn `kmTo` nếu dump không có · **cấm** invent cột / ảnh |
| AC-L-04 | gap-no-source → empty + toast · **cấm** seed |
| AC-L-05 | Kéo cột ON · STT · row menu Xem/Sửa/Copy/Lịch sử · pager SSOT |
| AC-F-01 | Full-page · `data-form-cols="5"` · chỉ Thông tin chung · **cấm** Modal form · **cấm** tab legacy |
| AC-F-02 | Mount S-* by cluster · **cấm** fork · **cấm** section trống |
| AC-F-03 | S-ATTR editable đủ mẫu · dumpSpecs JSON đến Schema_* (SA) |
| AC-F-04 | POINT: không required `kmTo` · RANGE: mount S-LOC-RANGE |
| AC-F-05 | Dirty → `LeaveConfirmModal` · delete → Modal — **cấm** native |
| AC-F-06 | View = display/`<dl>` — **cấm** Input disabled xám |
| AC-F-07 | Icons SSOT §0 cùng action = CSS+icon+text+title |
| AC-P-01 | Alias `/so-ts-type-grid` → `/so-ts` · peerStdUrl live |
| AC-P-02 | Prototype content-only · reviewUrl mở được · `shared_grid_example:v1` · `real_view_parity:v1` |
| AC-X-01 | **out** route_master / pavement · **cấm** ERP.* · **cấm** invent API |

## 6. Leave / alert

| Case | Behavior | Cấm |
|------|----------|-----|
| Form dirty → Back / Hủy / navigate | **`LeaveConfirmModal`** | `window.confirm` |
| Xóa | **`useAlert` / `Modal`** | `window.alert` |
| API / empty / gap-no-source | toast · empty grid VN | invent-seed · demo-json |

## 7. Real-data bind (cite analy · **cấm** invent path)

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/asset/road-assets?type=&search=&route=&kmFrom=&kmTo=&orgUnit=&page=&pageSize=` |
| Detail | `GET /web-bff/api/v1/asset/road-assets/{id}` |
| Create | `POST /web-bff/api/v1/asset/road-assets` |
| Update | `PUT /web-bff/api/v1/asset/road-assets/{id}` |
| Delete | `DELETE /web-bff/api/v1/asset/road-assets/{id}` (soft) |
| Init-data | `GET /web-bff/api/v1/asset/road-assets/init-data` |

API mirror: `api/v1/asset/road-assets`. FE: `services/asset/endpoint.ts` `BASE=/asset/road-assets`. Entity: `rmms_road_assets`. CTX `api/v1/so-ts/…` = **doc alias only**.

## 8. Design decisions (autopilot chốt từ PO)

| ID | Decision |
|----|----------|
| GAP-SOTS-COL-01 | Module `typeColumnProfiles` shared · children override |
| GAP-SOTS-FORM-01 | dumpSpecs JSON until Schema_* · SA chốt flatten |
| GAP-SOTS-DOMAIN-01 | DOMAIN-MAP add `so-ts-type-grid` → Asset (SA) |
| GAP-SOTS-API-DOC | Cite `api/v1/asset/road-assets` · CTX so-ts = alias |
| GAP-CULVERT-X-01 | UI mẫu · empty+toast · **cấm** seed |
| GAP-SOTS-REUSE-01 | Mount S-* · **cấm** fork |
| GAP-SOTS-TAB-01 | **Cấm** tab legacy DRVN |
| GAP-SOTS-HIDE-01 | Hide-empty từ fill profile · **không** ẩn cột đang có giá trị chỉ vì vài «—» |
| GAP-SOTS-ROUTE-SPLIT | 3 cột tuyến tách · **cấm** gộp 1 ô |
| GAP-FILTER-BAR-01 | LinErpListFilterBar · **cấm** nút Tìm · search must work |
| GAP-SOTS-LEAVE-01 | LeaveConfirmModal · **cấm** native |
| GAP-SOTS-OUT-01 | route_master / pavement **out** `/so-ts` |

## 9. Out of scope (this pack)

- Fork `AssetFormPage` / tab legacy DRVN / map canvas
- Flatten dumpSpecs → cột DB (SA / migration)
- Excel import/export wizard · invent `api/v1/so-ts/*` · ERP.*
- Per-type ATTR full inventory (children `so-ts-{kebab}`) — shell chỉ mount rules
- yarn build / e2e / start:std ở role Design

## 10. Handoff → SA (`/agent-sa`)

| Field | Value |
|-------|-------|
| feature | `so-ts-type-grid` |
| phase_from / phase_to | design → sa |
| packKind | `list` |
| Kind / surfaces | B A–D+F + Full page 5 cột · shell · clusters CTX §3 |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/so-ts-type-grid/ui/prototype/so-ts-type-grid-list-prototype.html` |
| prototype.artifact | `specs/so-ts-type-grid/ui/prototype/so-ts-type-grid-list-prototype.html` |
| zone ids | DES-GRID-A…D · B-FILTER · F · H · DES-FORM-Z1/Z2 · DES-LEAVE |
| control-map | §3 · SearchInput catalogs · S-* by cluster · typeColumnProfiles |
| Screens | §2 · FormMode C/E/V/Copy · devSlash=`/agent-dev` |
| BE cite | `api/v1/asset/road-assets` — **cấm** invent so-ts path |
| Open SA | DOMAIN-MAP slug · dumpSpecs flatten timing · LOOKUP seed · typeColumnProfiles shape |
| Next | `/agent-sa` khi tới lượt · **cấm** start SA trong task Design này |
| e2e | queued `/agent-qa*` only |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.29.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.01.02 |
| rulesVersion | 2026.09.01.1 |
| generatedAt | 2026-09-19T01:05:00.000Z |
| versionGate | ok |
| contentHashPriorDataAnaly | sha256:48428b7d526c6b127c4d82d0ac8f2cf8a10326f939e5f15da2daf69b9bbc2c5c |
| headerFingerprintPrior | sha256:e90b5bb79a2daf9804fa5d3f7d369378a256efa38f7efaa4ba784bce11e90bb6 |
| orchestratorSkillVersion | 2026.09.01.02 |
| dataAnalySkillVersion | 2026.08.25.01 |
| poSkillVersion | 2026.08.25.01 |
| shared_grid_example | v1 |
| real_view_parity | v1 |
| design_confirm | approve |
| taskId | task_1123e84d |
