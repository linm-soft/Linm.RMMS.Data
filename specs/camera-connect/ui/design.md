# Design — camera-connect (Kết nối camera ITS)

| Field | Value |
|-------|-------|
| feature | `camera-connect` |
| this role | `design` · `/agent-design` |
| Feature Kind | **B** catalog list A–D + **Kind C** full-page connect form Z1–Z4 — **cấm** Kind D Slideout / Resource |
| status | `confirmed` (`design_confirm=approve` · autoApprove ON · `task_2eab28c8`) |
| changeScope | `edit_page` |
| packKind | `list` |
| requestSource | run packet `task_2eab28c8` · `/agent-qldb-workflow` · roleOnly=`design` · autoApprove=**ON** |
| prior · po | `confirmed` · `specs/camera-connect/po/requirement.md` |
| prior · data_analy | `confirmed` · `specs/_data-analy/features/camera-connect-control-hint.md` · contentHash `sha256:e76fd3d510a81dbad3ce8b7513652bb48d47eb2933520d75ef953acd1084681a` · cluster path **không tồn tại** — SSOT = controlHint |
| taskId | `task_2eab28c8` |
| autoApprove | **ON** |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Camera` · `/camera` · `http://localhost:9316/camera` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/cameras`** · schema `api/v1/integration/catalogs/camera-devices/ui-schema` (**cấm ERP.***) |
| domain | **Camera** |
| updatedAt | `2026-08-16T03:35:00.000Z` |
| design_confirm | **approve** (autopilot · agent · `task_2eab28c8`) |

## 0. Context & Demo (from PO)

| ID | Path | Notes |
|----|------|-------|
| CTX-01 | `docs/context/features/camera-connect.md` | Kind B list + Kind C connect |
| CTX-02 | `docs/context/camera-model.md` | catalog + TCM403 |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/camera-connect-demo.html` | visual SSOT · **không** clone chrome · **không** regen |
| DA-01 | `specs/_data-analy/features/camera-connect-control-hint.md` | controlHint SSOT — Design chốt dưới đây |
| DI-01 | — | **no Excel** |

**Delta pack (lock):** list config cột = `LinCatalogUiSchemaEditorModal` kind=`camera-devices` + `useCatalogUiSchema` + `buildDynamicGridColumns` · BE `CatalogUiSchemaRegistry` seed. Form Kind C / CRUD / SDK-first **keep**. Align demo → MFE Camera `/camera`.

Live MFE/BE sau `task_fc29c24c` **đã ship** GAP schema. Design **không** invent field mới. Prototype **IN P1** content-only A–D + schema editor mock. Dev sau = **verify / no-op** nếu parity giữ.

**Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** `Domains/Master`.

## 1. Kind + UI pattern (chốt)

| | |
|--|--|
| Feature Kind | **B** list + **Kind C** full-page form (≥10 field — **không** Modal) |
| List pattern | 1× `LinPageLayout kind="catalog"` — **cấm** nested `CatalogListShell` |
| Grid | `LinCatalogDataGrid` + kéo cột default **ON** · `columns={buildDynamicGridColumns(schema, uiColumns)}` |
| Footer | `LinCatalogListPagination` 50 / 100 / 200 / 500 — **cấm** footerPagination / pageSizeBar / raw table product |
| Form pattern | Full-page `CameraFormPage` C/E/V/Copy — **cấm** Slideout / Resource / Modal form |
| View | **`<dl>` display** — **cấm** View=`readOnly` Input xám toàn form (live GAP-DES-VIEW-DL: still Input readOnly — **chốt SSOT** cho Dev verify) |
| Routes | List `/camera` · create `/camera/new` · edit `/camera/:id` · view `/camera/:id?mode=view` · copy `/camera/new?copyFrom=` |
| Zone F | `LinCatalogUiSchemaEditorModal` title «Cấu hình hiển thị danh mục» · kind=`camera-devices` — **cấm** `LinListTableConfigModal` editor cột · **cấm** `configHint` |
| Toolbar SSOT | `catalogToolbar` + `erp-control-icon-map` |

## 2. Screens / zones

| Screen | FormMode | Zones | Controls |
|--------|----------|-------|----------|
| Danh sách `/camera` | list | **A Header · B Toolbar+filter · C Grid · D Pagination · F Schema** | SearchTextInput · Dropdown Online |
| Kết nối `/camera/new` · `/camera/:id` | create / edit / copy | Kind C **Z1 Config · Z2 Protocols · Z3 JPEG live · Z4 Events** · footer Save/Cancel | controlHint §3 |
| Kết nối view | view | same zones | **`<dl>`** · Test/JPEG **read** · **cấm** Input xám |

### DES-GRID

| Zone | Spec |
|------|------|
| DES-GRID-A | Title «Kết nối camera ITS» · icon `fa-video` — **cấm** Thêm mới trên A |
| DES-GRID-B | catalogToolbar: Làm mới · Lịch sử (stub / `LinCatalogHistoryModal`) · **Cấu hình** `fa-cog` (Zone F) · Xem/Sửa/Xóa khi chọn · **+Thêm** primary → `/camera/new` |
| DES-GRID-B-FILTER | `SearchTextInput` «Tìm kiếm» (mã · tên · IP · model · tuyến) · `Dropdown`/`Select` «Trạng thái» Tất cả / Online / Offline — đổi filter → page=1 |
| DES-GRID-C | `LinCatalogDataGrid` · resize default ON · schema-driven · row menu: Xem · Sửa · Copy · Lịch sử · Xóa · double-click → view |
| DES-GRID-D | `LinCatalogListPagination` 50/100/200/500 |
| DES-GRID-F | Modal title «Cấu hình hiển thị danh mục» · bảng cột List/width/filter/sort · Thêm cột · kind=`camera-devices` |

### DES-FORM (Kind C)

| Zone | Spec |
|------|------|
| Z1 Config | Model Dropdown · mã · tên · IP · HTTP · SDK · RTSP · User · Pass · tuyến · Km · protocolMode |
| Z2 Protocols | Checkbox RTSP · ONVIF · ISAPI · HTTPS · Text Host notify URL |
| Z3 Live | JPEG poll SDK CaptureJPEG · Test kết nối · **OUT** MediaMTX HLS/WebRTC |
| Z4 Events | Feed plate · speed · type · color · direction · timestamp |
| Footer | Lưu · Huỷ · Test kết nối · Bật live (edit) · Sửa (view) · leave-confirm dirty |
| View | `<dl>` Z1–Z2 · Z3/Z4 still live/events display |

## 3. Control map (Design chốt — không đoán Dev)

### 3.1 Zone B filters

| uiField | Label VN | Control | catalogKind | Notes |
|---------|----------|---------|-------------|-------|
| search | Tìm kiếm | `SearchTextInput` | text | mã · tên · IP · model · tuyến · apply → page=1 |
| online | Trạng thái | `Dropdown` (`Select`) | enum | Tất cả · Online · Offline |

GET list: `?search=&online=&page=&pageSize=`

### 3.2 Form fields (unchanged this edit — chốt type)

| uiField | Label VN | Control | Required | Notes |
|---------|----------|---------|----------|-------|
| modelCode | Model | `Dropdown` | * | GET `/cameras/models` — **cấm** Text · seed `iDS-TCM403-GIR` |
| code | Mã camera | `Text` | * | copy suffix `-COPY` |
| name | Tên | `Text` | | |
| host | IP / Host | `Text` | * | lab `113.179.52.55` |
| httpPort | HTTP port | `Text` (number) | | default 80 |
| rtspPort | RTSP port | `Text` (number) | | default 554 |
| sdkPort | SDK port | `Text` (number) | * TCM403 | public map **8100** |
| protocolMode | Protocol | `Dropdown` | | auto · sdk · isapi |
| username | User | `Text` | * | |
| password | Pass | `Text` (password) | * | view mask · **cấm** plaintext |
| roadRouteCode | Tuyến | `Text` | | P1 free-text · master road-route **later** |
| kmMark | Km | `Text` | | |
| protoRtsp / protoOnvif / protoIsapi / useHttps | Protocols | `Checkbox` | | |
| isapiNotifyUrl | Host notify URL | `Text` | | |

**Cấm** Dev đoán Text vs SearchInput. Lookup model = Dropdown only.

### 3.3 List columns (bootstrap seed `camera-devices`)

| Field key | Label | controlHint | list default |
|-----------|-------|-------------|--------------|
| code | Mã camera | `Text` | visible · sort · link → view |
| name | Tên | `Text` | visible · sort |
| modelCode | Model | `Text` | visible · sort |
| host | IP / Host | `Text` | visible · sort |
| sdkPort | SDK port | `Text` (number) | visible |
| road | Tuyến / Km | `Text` | visible (computed `roadRouteCode` + `kmMark`) |
| online | Online | `Dropdown` | visible · sort · badge Online/Offline |

Grid = `useCatalogUiSchema('camera-devices')` + `columns={buildDynamicGridColumns(schema, uiColumns)}`. **Cấm** leftover `const columns` / `LinCatalogDataColumn[]` static after import đổi.

### FormMode badge

| mode | Badge |
|------|-------|
| create | Tạo mới |
| edit | Sửa |
| view | Xem |
| copy | Sao chép |

## 4. Prototype (REQUIRED)

| | |
|--|--|
| Artifact | `ui/prototype/camera-connect-list-prototype.html` |
| Zones | **A–D** + **Zone F** schema mock + **Kind C** form Z1–Z4 (cùng file, `#screen-form`) |
| Scope | content-only — skip note/sidebar/menu/chrome demo |
| **reviewUrl (proto)** | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/camera-connect/ui/prototype/camera-connect-list-prototype.html` |
| **reviewUrl (live)** | `http://localhost:9316/camera` |
| design_confirm | **approve** (autoApprove=ON · agent · 2026-08-16) |

Prototype **không** Modal form. Click Mã / +Thêm / Sửa → full-page `#screen-form`.

## 5. AC Design (align PO)

| ID | AC |
|----|-----|
| AC-G-01 | Zones **A Header · B Toolbar · C Grid · D Pagination** |
| AC-G-02 | Search + Online filter apply → page=1 |
| AC-G-03 | Row menu Xem / Sửa / Copy / Lịch sử / Xóa |
| AC-G-04 | `LinCatalogDataGrid` + kéo cột default ON · schema-driven columns |
| AC-G-05 | Footer `LinCatalogListPagination` 50/100/200/500 |
| AC-G-06 | 1× `LinPageLayout` — **cấm** nested CatalogListShell |
| AC-G-07 | Flex + skeleton — **cấm** blank body |
| AC-G-08 | Zone F `LinCatalogUiSchemaEditorModal` — **cấm** `configHint` / `LinListTableConfigModal` cột |
| AC-F-01 | Form Kind C `/camera/new` · `/camera/:id` · validate + save · Test kết nối · JPEG · events |
| AC-F-02 | View = `<dl>` — **cấm** Input readOnly xám toàn form |
| AC-F-03 | Required: modelCode · code · host · username · password · sdkPort (TCM403) |
| AC-F-04 | Lookup model = Dropdown `GET /cameras/models` |

## 6. Open / closed (Design)

| ID | Decision |
|----|----------|
| GAP-P2-CC-06 / CONFIG-PLACEHOLDER / GRID-SCHEMA-BOOTSTRAP | **CLOSED live** — Design proto **IN** · keep DoD |
| GAP-DES-VIEW-DL | **OPEN for Dev verify** — Design chốt `<dl>` · live still Input `readOnly` |
| GAP-CAM-01 | CRUD **DONE** · SDK ITS listen **DEFER** |
| GAP-CAM-02 | JPEG poll **keep** · MediaMTX **OUT** |
| GAP-CAM-03 | Password encrypt at rest **P2** |
| Kind D / Resource | **Cấm** |
| `window.confirm` delete | Keep parity this wave |

## 7. Out of scope (this pack)

- P2 live gateway HLS/WebRTC / MediaMTX (plan 21)
- SDK ITS plate callback listen
- Password encrypt at rest
- Clone chrome demo · Resource · Kind D Slideout
- Regen demo HTML
- `window.confirm` delete parity (other Kind B wave)
- road-route SearchInput master

## 8. Handoff → SA (`/agent-sa`)

| Field | Value |
|-------|-------|
| API | `GET/POST/PUT/DELETE api/v1/cameras` · connect/test · connect/snapshot · ingest · events · models |
| Query | `?search=&online=&page=&pageSize=` |
| Schema | GET/PUT `web-bff/api/v1/integration/catalogs/camera-devices/ui-schema` · Registry + Seed kind=`camera-devices` |
| Lookup | models `GET /cameras/models` **already DONE** · road-route master **not** this pack |
| Entity | `CameraDevice` · `CameraEvent` · SHARE=tenant_keep |
| BE root | `D:/AI-QLBD/Linm.RMMS.WebService` · domain **Camera** · **cấm** `ERP.Service.*` · `api/v1/rmms/*` |
| UI | Camera `/camera` · form Kind C full-page |
| controlHint | search=`SearchTextInput` · online=`Dropdown` · modelCode=`Dropdown` · ports=`Text` number · protocols=`Checkbox` · password=`Text` password |
| Next | sa = **pending** đến lượt (roleOnly=design this task) · autoApprove ON → enqueue SA sau completed |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-design |
| skillVersion | 2026.08.15.19 |
| schemaVersion | qldb-workflow-skill-v1 |
| workflowVersion | 2026.08.15.19 |
| generatedAt | 2026-08-16T03:35:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new (STATUS) |
| contentHashPriorDataAnaly | sha256:e76fd3d510a81dbad3ce8b7513652bb48d47eb2933520d75ef953acd1084681a |
| orchestratorSkillVersion | 2026.08.15.19 |
| poSkillVersion | 2026.08.15.19 |
| dataAnalySkillVersion | 2026.08.15.19 |

---
<!-- Version meta: skillVersion=2026.08.15.19 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.15.19 · versionGate=rechecked -->
