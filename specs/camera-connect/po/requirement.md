# PO — camera-connect (Kết nối camera ITS)

| Field | Value |
|-------|-------|
| feature | `camera-connect` |
| this role | `po` · `/agent-po` |
| changeScope | `edit_page` |
| packKind | `list` |
| Feature Kind | **B** catalog list A–D + **Kind C** full-page connect form — **cấm** Kind D Slideout / Resource |
| status | `done` |
| requestSource | run packet `task_f1708a71` · `/agent-qldb-workflow` · roleOnly=`po` · autoApprove=**ON** |
| prior · data_analy | `confirmed` · `specs/_data-analy/features/camera-connect-control-hint.md` · contentHash `sha256:e76fd3d510a81dbad3ce8b7513652bb48d47eb2933520d75ef953acd1084681a` · cluster `specs/camera-connect/specs/_data-analy/clusters/camera-connect.md` **không tồn tại** — SSOT = feature controlHint · **no Excel** · sourceKind=`synthetic` |
| taskId | `task_f1708a71` |
| autoApprove | **ON** |
| productRoot | `D:/AI-QLBD/Linm.RMMS.Data` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Camera` · `/camera` · `http://localhost:9316/camera` |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/cameras`** · schema `api/v1/integration/catalogs/camera-devices/ui-schema` (**cấm ERP.***) |
| domain | **Camera** |
| updatedAt | `2026-08-16T03:25:00.000Z` |

## 1. Goal

Chốt yêu cầu Kind **B** list thiết bị camera + form Kind **C** kết nối ITS (model **iDS-TCM403-GIR**) theo data-analy `feature_context` / `edit_page`. Persona: kỹ thuật Chi cục · ITS admin.

**Delta pack (SSOT lock):** list config cột = `LinCatalogUiSchemaEditorModal` kind=`camera-devices` + `useCatalogUiSchema` + `buildDynamicGridColumns` · BE `CatalogUiSchemaRegistry` seed. Form Kind C / CRUD / SDK-first **keep**. Align demo → MFE Camera `/camera` · BE domain **Camera**.

Live MFE/BE sau `task_fc29c24c` **đã ship** GAP schema (editor · bootstrap columns · seed `camera-devices`). PO **không** invent field mới. Design **phải** rà prototype content-only A–D (schema cog · **không** `configHint`). Dev = **verify / no-op** nếu parity giữ.

**Cấm ERP.*** · **cấm** `api/v1/rmms/*` · **cấm** `Domains/Master`.

## 2. Current → New (`edit_page`)

Nguồn SSOT: control-hint `2026-08-16T03:15:00.000Z` + live MFE `CameraListPage.tsx` / `CameraFormPage` + implement `task_fc29c24c`.

| Layer | Current (live 2026-08-16) | New (delta this pack) |
|-------|---------------------------|------------------------|
| Kind / shell | 1× `LinPageLayout` A–D · `LinCatalogDataGrid` kéo cột ON · `LinCatalogListPagination` | **keep** — **cấm** nested CatalogListShell · footerPagination · pageSizeBar · raw table |
| Zone B filter | SearchTextInput · Dropdown Online · Refresh · History · +Thêm | **keep** |
| Zone B config | `LinCatalogUiSchemaEditorModal` title «Cấu hình hiển thị danh mục» · `useCatalogUiSchema('camera-devices')` | **keep** — **cấm** `configHint` · **cấm** `LinListTableConfigModal` editor cột |
| Grid cols | `uiColumns` + `buildDynamicGridColumns(schema, uiColumns)` — code · name · modelCode · host · sdkPort · road · online | **keep** — **cấm** leftover `const columns` / `LinCatalogDataColumn` static |
| BE schema | `CatalogUiSchemaRegistry.CameraDevices` + seed | **keep** · GET/PUT `web-bff/api/v1/integration/catalogs/camera-devices/ui-schema` |
| Form Kind C | Z1 Config · Z2 Protocols · Z3 JPEG live · Z4 Events · footer Save/Cancel · View | **keep** — **cấm** Resource / Slideout / View=`readOnly` Input xám toàn form |
| Prototype | `specs/camera-connect/ui/prototype/` · reviewUrl `http://localhost:9316/camera` | **IN P1 Design:** content-only A–D + schema editor mock · skip chrome demo |
| Demo HTML | `camera-connect-demo.html` | Giữ visual SSOT — **không** clone chrome · **không** regen demo |
| API / BE | CameraDevice CRUD · connect test/snapshot · ingest events | **keep** · **cấm ERP.*** |
| Stale PO (P1 demo) | localStorage · BE deferred | **SUPERSEDED** — CRUD + schema editor live |
| Live video P2 | JPEG poll SDK | **OUT pack** (plan 21 · `live_gateway_confirm` pending) |
| `window.confirm` delete | still used | **Keep parity** Kind B this wave (not this delta) |

## 3. Personas / DoD (đo được)

1. List load + search (mã · tên · IP · model · tuyến) — page=1 khi filter đổi.
2. Zone A: title «Kết nối camera ITS» — **cấm** Thêm mới trên A.
3. Zone B: SearchTextInput · Dropdown Online (Tất cả / Online / Offline) · Refresh · History stub · config `fa-cog` · +Thêm primary.
4. Zone C: `LinCatalogDataGrid` + kéo cột default ON · row menu Xem / Sửa / Copy / Lịch sử / Xóa.
5. Zone D: `LinCatalogListPagination` pageSize **50 / 100 / 200 / 500**.
6. Zone F: `LinCatalogUiSchemaEditorModal` kind=`camera-devices` — bảng cột List/width/filter/sort/Thêm cột.
7. Form Kind C `/camera/new` · `/camera/:id`: validate + save · Test kết nối · JPEG snapshot · events feed · View mode.
8. Required list bootstrap cols: code · name · modelCode · host · sdkPort · road · online.
9. Required form: modelCode · code · host · username · password · sdkPort (TCM403).
10. Lookup model = Dropdown `GET /cameras/models` — **cấm** Dev đoán Text vs SearchInput khi đã có controlHint.
11. FE `yarn build` (+ typecheck nếu có) PASS · BE `dotnet build` PASS khi đụng API — Dev ghi implement § Build. **This PO role: no FE/BE write → build n/a.**

## 4. CTX / DEM / DI inventory

| ID | Path | Loại |
|----|------|------|
| CTX-01 | `docs/context/features/camera-connect.md` | feature Kind B + Kind C |
| CTX-02 | `docs/context/camera-model.md` | catalog + TCM403 |
| DEM-01 | `Linm.RMMS.Demo/src/demo/features/camera-connect-demo.html` | visual SSOT |
| DI-01 | — | **no Excel cluster** |
| DA-01 | `specs/_data-analy/features/camera-connect-control-hint.md` | controlHint SSOT |
| MFE | `Linm.Web.RMMS.Camera` `/camera` | UI |
| BE | `D:/AI-QLBD/Linm.RMMS.WebService` · DOMAIN-MAP Camera · `api/v1/cameras` | API |

### List columns (bootstrap seed `camera-devices`)

| Field key | Label | controlHint | list default |
|-----------|-------|-------------|--------------|
| code | Mã camera | `Text` | visible · sort |
| name | Tên | `Text` | visible · sort |
| modelCode | Model | `Text` | visible · sort |
| host | IP / Host | `Text` | visible · sort |
| sdkPort | SDK port | `Text` (number) | visible |
| road | Tuyến / Km | `Text` | visible (computed `roadRouteCode` + `kmMark`) |
| online | Online | `Dropdown` | visible · sort |

### List filters (Zone B)

| Field key | Label | controlHint | Notes |
|-----------|-------|-------------|-------|
| search | Tìm kiếm | `SearchInput` | text · mã · tên · IP · model · tuyến |
| online | Trạng thái | `Dropdown` | enum Tất cả · Online · Offline |

### Form fields (controlHint — Design chốt UI · SA chốt API · **unchanged this edit**)

| Field key | Label | controlHint | required | Notes |
|-----------|-------|-------------|----------|-------|
| modelCode | Model | `Dropdown` | * | GET `/cameras/models` |
| code | Mã camera | `Text` | * | |
| name | Tên | `Text` | | |
| host | IP / Host | `Text` | * | |
| httpPort | HTTP port | `Text` (number) | | |
| rtspPort | RTSP port | `Text` (number) | | |
| sdkPort | SDK port | `Text` (number) | * TCM403 | |
| username | User | `Text` | * | |
| password | Pass | `Text` (password) | * | |
| roadRouteCode | Tuyến | `Text` | | P1 free-text · master road-route later |
| kmMark | Km | `Text` | | |
| protoRtsp / onvif / isapi | Protocols | `Checkbox` | | |
| isapiNotifyUrl | Host notify URL | `Text` | | |

### Lookup APIs (SA)

| catalogKind | API | Notes |
|-------------|-----|-------|
| `camera-devices` | GET/PUT `web-bff/api/v1/integration/catalogs/camera-devices/ui-schema` | Integration registry — **cấm ERP** |
| cameras CRUD | `web-bff/api/v1/cameras` | Camera domain |
| models | GET `/cameras/models` | already DONE |

## 5. Grid AC (REQUIRED · list)

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

## 6. Open questions — PO chốt

| ID | Question | Decision (PO) |
|----|----------|----------------|
| GAP-P2-CC-06 | List config schema | **CLOSED live** (`task_fc29c24c`). Keep DoD. Design proto **IN**. |
| GAP-DEV-CONFIG-PLACEHOLDER-01 | `configHint` | **CLOSED live**. Keep schema editor. |
| GAP-DEV-GRID-SCHEMA-BOOTSTRAP-01 | leftover `const columns` | **CLOSED live**. Seed `camera-devices`. |
| GAP-CAM-01 | BE CRUD + listener | CRUD **DONE**. SDK ITS listen **DEFER**. |
| GAP-CAM-02 | Live video FPS | JPEG poll **keep**. MediaMTX **OUT** until `live_gateway_confirm`. |
| GAP-CAM-03 | Password encrypt at rest | **P2**. |
| Kind D / Resource | — | **Cấm**. Kind C full page only. |
| parent JSON / ERP | — | **Cấm**. BE = `Linm.RMMS.WebService` Camera. |

## 7. Out of scope (this pack)

- P2 live gateway HLS/WebRTC / MediaMTX (plan 21)
- SDK ITS plate callback listen
- Password encrypt at rest
- Clone chrome demo · Resource · Kind D Slideout
- Regen demo HTML
- `window.confirm` delete parity (other Kind B wave)

## 8. Handoff → Design

| Field | Value |
|-------|-------|
| Kind | B list A–D + Kind C form Z1–Z4 (**không** Slideout / Modal form) |
| Prototype | content-only · `list-shell-prototype.md` · **skip** note/sidebar/menu/chrome · **bắt buộc** schema editor Zone F |
| reviewUrl | bắt buộc · `http://localhost:9316/camera` · `autoApprove=ON` → agent tự confirm **khi tới role Design** |
| controlHint | bảng §4 — **cấm** native select Online nếu Design chốt Dropdown |
| Demo visual | `camera-connect-demo.html` — không regen |
| BE | `api/v1/cameras` + ui-schema `camera-devices` · **cấm** `api/v1/rmms/*` |
| Next roles | design → sa → team-lead → dev → qa → review = **pending** đến lượt |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-po |
| skillVersion | 2026.08.15.19 |
| schemaVersion | qldb-workflow-skill-v1 |
| workflowVersion | 2026.08.15.19 |
| generatedAt | 2026-08-16T03:25:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new (STATUS) |
| contentHashPriorDataAnaly | sha256:e76fd3d510a81dbad3ce8b7513652bb48d47eb2933520d75ef953acd1084681a |
| orchestratorSkillVersion | 2026.08.15.19 |
| orchestratorWorkflowVersion | 2026.08.15.19 |
| orchestratorSchemaVersion | qldb-workflow-skill-v1 |
| dataAnalySkillVersion | 2026.08.15.19 |
| dataAnalyWorkflowVersion | 2026.08.15.19 |

---
<!-- Version meta: skillVersion=2026.08.15.19 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.15.19 · versionGate=rechecked -->
