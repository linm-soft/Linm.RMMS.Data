# Solution discovery — camera-connect

> Status: **confirmed** (`solution_confirm=approve` · autoApprove ON · `task_ae3b33f3`)

| Field | Value |
|-------|-------|
| feature | `camera-connect` |
| this role | `sa` · `/agent-sa` |
| packKind | `list` (Kind B catalog A–D+F + Kind C full-page connect) |
| status | `confirmed` |
| changeScope | `edit_page` |
| design_confirm | **approve** (`task_2eab28c8`) |
| solution_confirm | **approve** (autoApprove ON) |
| version_mismatch_action | **recheck_new** — stamp SSOT `2026.08.15.19` |
| prior · design | `ui/design.md` confirmed · prototype A–D+F + Kind C Z1–Z4 |
| prior · po | `po/requirement.md` confirmed |
| prior · data_analy | controlHint `specs/_data-analy/features/camera-connect-control-hint.md` · hash `sha256:e76fd3d510a81dbad3ce8b7513652bb48d47eb2933520d75ef953acd1084681a` · cluster path **không tồn tại** |
| taskId | `task_ae3b33f3` |
| updatedAt | `2026-08-16T03:45:00.000Z` |

## 1. Ownership (DOMAIN-MAP Camera)

| Layer | Repo / path |
|-------|-------------|
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Camera` · `/camera` · `http://localhost:9316/camera` |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API | `api/src/RMMS.Service.Api/Domains/Camera/` · `CamerasController` |
| Models / DTO | `api/domains/camera/LINM.RMMS.Camera.Models/DTOs/CameraDeviceDtos.cs` |
| Persistence | `api/shared/RMMS.Service.Persistence/Entities/CameraDeviceEntity.cs` · `CameraEvent` (ingest) |
| Migrations | `Schema_RmmsCameraDevices` (`20260810163000`) · `Schema_RmmsCameraEvents` (`20260812160439`) |
| BFF | `bff/domains/camera/LINM.RMMS.Camera.Bff/Controllers/CamerasBffController.cs` |
| Ui-schema | `api/src/RMMS.Service.Api/Domains/Integration/` · kind=`camera-devices` |

**Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` · invent prefix ngoài DOMAIN-MAP.

### Architecture

| Layer | Choice |
|-------|--------|
| Domain prefix | `api/v1/cameras` · BFF `web-bff/api/v1/cameras` |
| Resource | `/cameras` (plural SSOT — **không** `/camera` trên API) |
| Persist | `CameraDeviceEntity` → `rmms_camera_devices` · **flat scalars** (**cấm** parent `*Json`) |
| BFF | **proxy only** (passthrough query + body) |
| Auth perm | `camera.devices.read\|create\|update\|delete` — BE `[RequirePermission]` **OUT pack** (stub TODO CommonLib) |
| Tenant | `TenantEntity` + `X-Company-Id` |
| Connect | SDK-first TCM403 (`sdkPort`) · else ISAPI Digest — **keep** live `CameraConnectService` |

### Route decision

DOMAIN-MAP: `camera-connect` → Pascal **Camera** · kebab `camera` · API **`api/v1/cameras`**. Ui-schema **không** nằm Camera domain — SSOT Integration: `api/v1/integration/catalogs/camera-devices/ui-schema`.

### SSOT / anti-duplicate

Một resource CRUD Camera. Không clone controller ERP. Không dual prefix. List columns = schema seed `CatalogUiSchemaRegistry.CameraDevices` — FE `useCatalogUiSchema('camera-devices')` + `buildDynamicGridColumns`. **Cấm** leftover static `const columns` / `LinCatalogDataColumn[]`.

## 2. FormType pack (`packKind=list`)

| Surface | Pattern | FormMode ↔ API |
|---------|---------|----------------|
| List A–D + F | Kind B catalog | API-01 list · API-12/13 ui-schema |
| Form create | full-page `/camera/new` | API-03 POST |
| Form edit | full-page `/camera/:id` | API-02 GET + API-04 PUT |
| Form view | full-page `/camera/:id?mode=view` · **`<dl>`** (Design GAP-DES-VIEW-DL) | API-02 GET |
| Form copy | `/camera/new?copyFrom=` · code suffix `-COPY` | API-02 GET + API-03 POST |
| Delete | toolbar + row | API-05 DELETE soft |
| History | stub client | **OUT** — không API |
| Test connect | Kind C toolbar | API-08 POST `/connect/test` |
| JPEG live | Kind C Z3 | API-09 POST `/connect/snapshot` · API-10 POST `/{id}/snapshot` |
| Events | Kind C Z4 | API-11 GET `/events` · ingest API-INGEST **keep** |
| Models lookup | Kind C Z1 Dropdown | API-07 GET `/models` **DONE** |
| Health | ops | API-06 GET `/health` |

Dev slash: **`/agent-dev`**. **Cấm** Resource · Slideout · View=`readOnly` Input xám toàn form.

Canonical TL ids (handoff, SA không viết HOW): T-CTX · T-PERM · T-UI-LIST · T-UI-CONFIG · T-UI-FORM · T-UI-ACT · T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX · T-BE-CRUD · T-BE-SCHEMA · T-BFF · T-QA-CRUD. T-BE-INIT **n/a** (models in-process). T-UI-MAP-FORM **n/a**. T-UI-LIVE-P2 **OUT**.

## 3. Form data inventory (controlHint → API)

| Screen / FormMode | Fields (UI) | Source type | Persist | Notes |
|-------------------|-------------|----------------|---------|-------|
| List filter | search · online | query | — | SearchTextInput · Dropdown enum |
| List grid | code · name · modelCode · host · sdkPort · road · online | transaction | Entity | `road` = computed `roadRouteCode` + `kmMark` (schema key `road`, **không** DB column) |
| Create/Edit/Copy | Design §3.2 | body | Entity | required: modelCode · code · host · username · password · sdkPort (TCM403) |
| View | same | GET | Entity | `<dl>` Z1–Z2 · Z3/Z4 display |
| Zone F | catalogKind=`camera-devices` | Integration | ui-schema row | **cấm** `configHint` |
| Lookup model | modelCode | GET `/cameras/models` | — | **cấm** Text · **cấm** invent `form-init-data` |
| Tuyến | roadRouteCode | Text P1 | Entity | master SearchInput **OUT pack** |

### 3a. controlHint → API shape

| controlHint (Design) | SA decision |
|----------------------|-------------|
| SearchTextInput `search` | query `search` API-01 (code · name · IP · model · tuyến · km) |
| Dropdown `online` | query `online` bool? — Tất cả = omit · Online=`true` · Offline=`false` |
| Dropdown `modelCode` | **LOOKUP_API** API-07 `GET /cameras/models` — already DONE |
| Text ports | DTO int `HttpPort` · `RtspPort` · `SdkPort` |
| Text password | DTO `Password` write · persist `PasswordEnc` P1 plaintext · **cấm** log · list **không** trả password |
| Checkbox protocols | DTO bool `ProtoRtsp` · `ProtoOnvif` · `ProtoIsapi` · `UseHttps` |
| Text notify URL | DTO `IsapiNotifyUrl` |

### 3b. Persist gate

| ✅ | ❌ |
|----|-----|
| Scalar columns trên `rmms_camera_devices` | Parent `*Json` blob |
| `PasswordEnc` varchar | Password encrypt-at-rest **P2** (không migration this pack) |
| `CameraEvent` ingest table | MediaMTX / HLS / WebRTC tables **OUT** |

## 4. Field map (ui → dto → db)

| uiField | dtoField | dbColumn / property |
|---------|----------|---------------------|
| code | Code | `Code` |
| name | Name | `Name` |
| modelCode | ModelCode | `ModelCode` |
| host | Host | `Host` |
| httpPort | HttpPort | `HttpPort` |
| rtspPort | RtspPort | `RtspPort` |
| sdkPort | SdkPort | `SdkPort` (entity default 8000 · TCM403 lab **8100** FE seed — **không** đổi default DB) |
| useHttps | UseHttps | `UseHttps` |
| username | Username | `Username` |
| password | Password | `PasswordEnc` (P1 as-is) |
| protocolMode | ProtocolMode | `ProtocolMode` (`auto` · `sdk` · `isapi`) |
| protoRtsp | ProtoRtsp | `ProtoRtsp` |
| protoOnvif | ProtoOnvif | `ProtoOnvif` |
| protoIsapi | ProtoIsapi | `ProtoIsapi` |
| isapiNotifyUrl | IsapiNotifyUrl | `IsapiNotifyUrl` |
| roadRouteCode | RoadRouteCode | `RoadRouteCode` |
| kmMark | KmMark | `KmMark` |
| road (list) | — | computed FE from RoadRouteCode + KmMark |
| online | Online | `Online` |
| updatedAt | UpdatedAt | `UpdatedAt` UTC |

Create **gửi** `Code` (user-entered — **không** server IdCode). Update **được** đổi Code nếu unique trong tenant.

## 5. API catalog

### API-01: GET `/api/v1/cameras`

| | |
|--|--|
| Purpose | Paged list Kind B · filter Zone B |
| Permission | `camera.devices.read` (stub) |
| Tenant | `X-Company-Id` · `IsActive=true` |
| Request | query: `search` string · `online` bool? · `page` int default 1 · `pageSize` 50\|100\|200\|500 |
| Response | `CameraDevicePagedResult` `{ items, totalCount, page, pageSize, totalPages }` items = `CameraDeviceDto` **không** `Password` |
| Errors | 200 empty list |
| Form surfaces | list search |
| Sample | `search=CAM&online=true&page=1&pageSize=50` |
| Live | `CamerasController.GetList` · `CameraDeviceService.GetListAsync` |

### API-02: GET `/api/v1/cameras/{id}` · **XCO get_only**

| | |
|--|--|
| Purpose | Load form View/Edit/Copy |
| Permission | `camera.devices.read` |
| Tenant | company filter; **XCO** `IgnoreQueryFilters` + claim `allowed_company_ids` → 403 nếu ngoài allow-list |
| Request | path `id` guid |
| Response | `CameraDeviceDto` (**có** `Password` cho edit — never log) |
| Errors | 404 · 403 |
| Live | `GetByIdAsync` |

### API-03: POST `/api/v1/cameras`

| | |
|--|--|
| Purpose | Create device |
| Permission | `camera.devices.create` |
| Request | `CreateCameraDeviceRequest` — required: Code · Name · Host · Username; TCM403: SdkPort; Password on write |
| Response | `CameraDeviceDto` 200 |
| Errors | 422 duplicate code / missing required |
| Live | `CreateAsync` |

### API-04: PUT `/api/v1/cameras/{id}`

| | |
|--|--|
| Purpose | Update scalars |
| Permission | `camera.devices.update` |
| Request | path id + `UpdateCameraDeviceRequest` (+ optional `IsActive`) |
| Response | DTO 200 |
| Errors | 404 · 422 |
| Live | `UpdateAsync` |

### API-05: DELETE `/api/v1/cameras/{id}`

| | |
|--|--|
| Purpose | Soft delete (`IsActive=false`) |
| Permission | `camera.devices.delete` |
| Response | `{ id }` + message Deleted |
| Errors | 404 |
| Live | `SoftDeleteAsync` |

### API-06: GET `/api/v1/cameras/health`

Health + `sdkDllLoaded`. Keep. No list surface.

### API-07: GET `/api/v1/cameras/models` · **LOOKUP**

| | |
|--|--|
| Purpose | Kind C Dropdown model |
| Response | `IReadOnlyList<CameraModelProfileDto>` (ports · preferred protocol) |
| Live | `ListModels()` in-process — **không** master table this pack |

### API-08: POST `/api/v1/cameras/connect/test`

Body: host · httpPort · sdkPort · rtspPort · username · password · modelCode · protocolMode · timeoutSeconds. TCM403 SDK-first.

### API-09: POST `/api/v1/cameras/connect/snapshot`

JPEG SDK CaptureJPEG · fallback ISAPI. Kind C Z3 unsaved form.

### API-10: POST `/api/v1/cameras/{id}/snapshot`

JPEG for persisted device. Kind C edit live.

### API-INGEST: POST `/api/v1/cameras/ingest/isapi`

Webhook Host notify → persist `CameraEvent`. **Keep** · not list CRUD.

### API-11: GET `/api/v1/cameras/events`

Event feed (`?host=` optional). Kind C Z4.

### API-12: GET `/api/v1/integration/catalogs/camera-devices/ui-schema`

| | |
|--|--|
| Purpose | Zone F + `buildDynamicGridColumns` |
| Request | path kind=`camera-devices` · query `configMode` bool |
| Response | seed fields: code · name · modelCode · host · sdkPort · road · online |
| Live | `CatalogUiSchemaController` + `CatalogUiSchemaSeed.CameraDevices` |

### API-13: PUT `/api/v1/integration/catalogs/camera-devices/ui-schema`

Persist user column config. Zone F save.

### BFF

`web-bff/api/v1/cameras` GET list (forward `search`/`online`/`page`/`pageSize`) · GET/{id} · POST · PUT/{id} · DELETE/{id} · health · models · connect/test · connect/snapshot · events. Ui-schema **không** qua Camera BFF — MFE gọi Integration prefix `/integration/catalogs/camera-devices/ui-schema`.

**OUT pack (không invent):** `POST /cameras/{id}/live/start` MediaMTX (plan 21).

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **na** | không date filter / Date field trên Design this pack · audit `CreatedAt`/`UpdatedAt` **UTC** keep | `/review-timezone-implement` | `sa_tz_gate=tz_na` |
| XCO | **get_only** | API-02 GET/{id} | `/implement-view-cross-company` | claim `allowed_company_ids` · list stays tenant filter |
| SHARE | **tenant_keep** | `CameraDeviceEntity` : `TenantEntity` | `/implement-shared-table` | camera theo đơn vị — **không** Type A/B/C |

AskQuestion (autoApprove ON): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `solution_confirm=approve` · `2026-08-16T03:45:00.000Z`

## Live vs delta (`edit_page`)

Live BE/MFE **đã ship** CRUD + connect test/snapshot + ingest/events + schema seed `camera-devices` + `LinCatalogUiSchemaEditorModal` (`task_fc29c24c`). SA **không** invent endpoint / migration mới. TL/Dev = **verify / no-op** nếu parity giữ · **verify** GAP-DES-VIEW-DL (View=`<dl>` vs live Input readOnly — **UI only**, không API). **Cấm** regen migration CameraDevices/Events.

## Out of pack

- P2 live gateway HLS/WebRTC / MediaMTX (plan 21 · `live_gateway_confirm`)
- SDK ITS plate callback listen
- Password encrypt at rest
- History API · Excel import/export
- `[RequirePermission]` CommonLib mount
- road-route SearchInput master
- `GET …/form-init-data`
- ERP.* / `api/v1/rmms/*`

## Handoff → TL (`/agent-team-lead`)

- Keep Camera route `api/v1/cameras` + Integration ui-schema `camera-devices`
- Gates: TZ na · XCO GET only · SHARE tenant_keep
- Lookup models API-07 DONE — T-BE-INIT n/a
- FormType list: T-UI-* + T-BE-CRUD verify + T-BE-SCHEMA verify + T-BFF verify
- Open for Dev UI: **GAP-DES-VIEW-DL**
- Schema/config GAPS **CLOSED live** — T-UI-CONFIG-01 / T-BE-SCHEMA-01 = verify no-op
- `autoApprove=ON` → SA **confirmed** · next TL **pending** đến lượt (roleOnly=sa this task)
- Repo: BE `Linm.RMMS.WebService` · UI `Linm.Web.RMMS.Camera` (run packet)
- This SA role: **no FE/BE write** → build n/a

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.15.19 |
| schemaVersion | qldb-workflow-skill-v1 |
| workflowVersion | 2026.08.15.19 |
| generatedAt | 2026-08-16T03:45:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new |
| orchestratorSkillVersion | 2026.08.15.19 |
| designSkillVersion | 2026.08.15.19 |
| poSkillVersion | 2026.08.15.19 |
| dataAnalySkillVersion | 2026.08.15.19 |
| contentHashPriorDataAnaly | sha256:e76fd3d510a81dbad3ce8b7513652bb48d47eb2933520d75ef953acd1084681a |

---
<!-- Version meta: skillVersion=2026.08.15.19 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.15.19 · versionGate=rechecked -->
