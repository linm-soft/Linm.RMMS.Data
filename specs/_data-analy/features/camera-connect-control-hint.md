# Data-analy — controlHint — camera-connect (Kind B list + Kind C form)

| Field | Value |
|-------|-------|
| feature | `camera-connect` |
| packKind | `list` |
| mode | `feature_context` (edit_page · no Excel DI) |
| status | `done` |
| skillId | `agent-data-analy` |
| skillVersion | `2026.08.15.19` |
| schemaVersion | `qldb-workflow-skill-v1` |
| workflowVersion | `2026.08.15.19` |
| versionGate | `rechecked` |
| contentHash | `sha256:e76fd3d510a81dbad3ce8b7513652bb48d47eb2933520d75ef953acd1084681a` |
| analyzedAt | `2026-08-16T03:15:00.000Z` |
| taskId | `task_fc29c24c` |
| changeScope | `edit_page` |

> Data-analy **đề xuất** controlHint. Design **chốt** control-map. SA **chốt** lookup API.  
> **Cấm** Dev đoán Text vs SearchInput khi đã có bảng này.

## Sources

| Source | Path | sha256 |
|--------|------|--------|
| Context | `docs/context/features/camera-connect.md` | `e76fd3d510a81dbad3ce8b7513652bb48d47eb2933520d75ef953acd1084681a` |
| Demo | `Linm.RMMS.Demo/src/demo/features/camera-connect-demo.html` | `6c7ca1e4f723b81294aa2e324979f153e7a1e8288aeb4e1b36be8380c69bdfcd` |
| Live list (Current) | `MFE-Source/Linm.Web.RMMS.Camera/src/pages/CameraListPage/CameraListPage.tsx` | `e4dbcd8169c226e579dc5cf31e712168e60b5c1e8981e2c8ba3110556adf5930` |

## § Delta Current vs New (`edit_page`)

| Surface | Current | New (this task) |
|---------|---------|-----------------|
| List Zone B config | `configHint` stub dialog · `onEditConfig` placeholder | **`LinCatalogUiSchemaEditorModal`** title «Cấu hình hiển thị danh mục» · `useCatalogUiSchema('camera-devices')` · `buildDynamicGridColumns` |
| List columns | leftover `const columns: LinCatalogDataColumn[]` | **`uiColumns` bootstrap** only — grid = schema order/width/filter/sort |
| BE schema | no `camera-devices` in `CatalogUiSchemaRegistry` | Seed + registry kind **`camera-devices`** · Integration GET/PUT `/integration/catalogs/{kind}/ui-schema` |
| Form Kind C | Config · protocols · JPEG live · events | **Keep** — no form field type change this edit |
| Filters | SearchTextInput + Select Online | **Keep** SearchInput-text + Dropdown online |
| Live video P2 | JPEG poll | **Out of scope** (plan 21 · pending confirm) |
| `window.confirm` delete | still used | **Keep parity** other Kind B this wave (not this delta) |

**Mode:** `fix_gaps` · GAP-P2-CC-06 · GAP-DEV-CONFIG-PLACEHOLDER-01 · GAP-DEV-GRID-SCHEMA-BOOTSTRAP-01  
**Keep:** existing PO/Design/CRUD/SDK artifacts — do **not** regen demo.

## Kind / zones (handoff Design)

| Zone | Pattern | DoD |
|------|---------|-----|
| A | Header | title «Kết nối camera ITS» — **cấm** Thêm mới trên A |
| B | Toolbar + filter | SearchTextInput · Dropdown Online · Refresh · History · **schema config** · +Thêm |
| C | `LinCatalogDataGrid` | kéo cột default ON · row menu Xem/Sửa/Copy/Lịch sử/Xóa |
| D | Footer | `LinCatalogListPagination` |
| Form | Kind C full page | Z1–Z4 · footer Save/Cancel · View mode |

## Control hint — list filters (Zone B)

| Field key | Label | controlHint | catalogKind | Notes |
|-----------|-------|-------------|-------------|-------|
| search | Tìm kiếm | `SearchInput` | text | mã · tên · IP · model · tuyến |
| online | Trạng thái | `Dropdown` | enum | Tất cả · Online · Offline |

## Control hint — list columns (schema seed)

| Field key | Label | controlHint | list default |
|-----------|-------|-------------|--------------|
| code | Mã camera | `Text` | visible · sort |
| name | Tên | `Text` | visible · sort |
| modelCode | Model | `Text` | visible · sort |
| host | IP / Host | `Text` | visible · sort |
| sdkPort | SDK port | `Text` (number) | visible |
| road | Tuyến / Km | `Text` | visible (computed `roadRouteCode` + `kmMark`) |
| online | Online | `Dropdown` | visible · sort |

## Control hint — form fields (unchanged)

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

## Lookup APIs (SA)

| catalogKind | API | Notes |
|-------------|-----|-------|
| `camera-devices` | GET/PUT `web-bff/api/v1/integration/catalogs/camera-devices/ui-schema` | Integration registry — **cấm ERP** |
| cameras CRUD | `web-bff/api/v1/cameras` | Camera domain |
| models | GET `/cameras/models` | already DONE |

## Handoff

- PO: copy § Delta vào requirement.md  
- Design: list zones A–D + schema editor (content-only) · reviewUrl `http://localhost:9316/camera`  
- SA: register `camera-devices` seed  
- TL: **T-UI-CONFIG-01** · **T-BE-SCHEMA-01** (không reset CRUD ids)  
- Dev: `/agent-dev` · cấm `configHint` · cấm leftover `const columns`
