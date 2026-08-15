# SA — solution-discovery — attendance (crud_gap)

| Field | Value |
|-------|-------|
| feature | `attendance` |
| this role | `sa` · `/agent-sa` |
| status | `await_confirm` (autoApprove=OFF · user Approve board) |
| changeScope | `edit_page` |
| packKind | `list` |
| runMode | `crud_gap` |
| gap | `crud_formtype` |
| domain | **Patrol** (DOMAIN-MAP slug `attendance` → Patrol) |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` · `/patrol/attendance` |
| solution_confirm | `pending` (autoApprove=OFF · **không** auto-confirm) |
| prior · design | `await_confirm` → board Approve → SA · `ui/design.md` + prototype |
| prior · po | `done` · GAP-PO-ATT-01..07 |
| prior · data_analy | `done` · hash `1ec355a64b…` |
| taskId | `task_9869676e` |
| updatedAt | `2026-08-14T16:55:00.000Z` |

> SA **chốt** lookup API + list query delta. Design **chốt** control-map. **Cấm** Dev đoán Text vs SearchInput.  
> **Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` · prefix `/api/v1/attendance/*` (GAP-F-ATT-04 / GAP-PO-ATT-07).

## Gates

| Gate | Value |
|------|-------|
| sa_tz_gate | **tz_na** — store `CheckInAt` / `CreatedAt` / `UpdatedAt` **UTC** (`timestamptz` / `ToUniversalTime`) · display local FE |
| sa_xco_gate | **xco_get_only** — GetById may IgnoreQueryFilters + `allowed_company_ids` · deny → 403 (existing `AttendanceForbiddenException`) |
| sa_shared_table | **share_tenant** (`AttendanceLogEntity` : `TenantEntity` · filter `CompanyCode`) |
| lookup_share | road-route catalog = **share_a** (Integration Type A) — **read-only** từ Patrol FE |
| parent_json | **cấm** — persist flat scalars only |
| design_confirm | board (user) — SA assumes Design inventory §3 locked after Approve |
| repo | `be_repo_confirm=approve` · `ui_repo_confirm=approve` (board) — TL/Dev sau SA confirm |

## Paths (LOCKED — no new domain)

| Layer | Path |
|-------|------|
| API domain | `api/src/RMMS.Service.Api/Domains/Patrol/` |
| Models | `api/domains/patrol/LINM.RMMS.Patrol.Models/DTOs/AttendanceLogDtos.cs` |
| Entity | `api/shared/RMMS.Service.Persistence/Entities/AttendanceLogEntity.cs` |
| Table | `rmms_attendance_logs` · migration `Schema_RmmsAttendanceLogs` **đã có** |
| BFF | `bff/domains/patrol/LINM.RMMS.Patrol.Bff/Controllers/AttendanceLogsBffController.cs` |
| Route prefix | **`api/v1/patrol/attendance-logs`** |
| BFF prefix | **`web-bff/api/v1/patrol/attendance-logs`** |
| FE BASE | `/patrol/attendance-logs` (relative `VITE_API_URL`) |
| Lookup API | **`api/v1/integration/road-routes`** (domain Integration — **không** copy vào Patrol) |
| Lookup BFF | **`web-bff/api/v1/integration/road-routes`** |
| Lookup FE | `/integration/road-routes` (Field MFE SearchInput) |

**Cấm** tạo folder domain mới · **cấm** `ERP.*`.

## Live BE vs this pack (delta)

CRUD API-01…05 **đã implement**. Pack `crud_formtype` **không** rewrite entity. SA chốt **GAP** Dev phải đụng API:

| ID | Live today | Required this pack | Layer |
|----|------------|--------------------|-------|
| GAP-SA-ATT-Q01 | `GET` query `search` · `status` · `page` · `pageSize` only | + **`route`** (exact code) · + **`onlyOutZone`** (bool) | API + BFF query-string forward + FE `getList` |
| GAP-SA-ATT-Q02 | `search` matches Code/UserName/Route/Status/KmPoint | + GPS: `Lat`/`Lng` `ToString` Contains (PO DoD-1) | `AttendanceLogService.GetListAsync` |
| GAP-SA-ATT-LKP | FE `route` Text · mock `QL.22` | SearchInput → **LKP-01** `GET …/road-routes/search` · persist **code** `QL.1` | FE + Integration read · **không** users P1 |
| GAP-SA-ATT-VAL | Create/Update trim Route, no catalog check | Validate `Route` ∈ `rmms_road_routes.Code` **IsActive** · 422 nếu unknown / `QL.22` | Patrol service → Integration DbSet **read** |
| GAP-SA-ATT-ENUM | Status free string | Allow-list **Đúng tuyến · Lệch zone · Thiếu điểm** · 422 else | Create/Update |
| GAP-SA-ATT-SEED | MFE `attendanceStore` / `patrolStore` `QL.22` | Alias **`QL.22` → `QL.1`** — **cấm** invent QL.22 vào 38 | FE mock only (no CUC2 seed write) |

**Không** migration schema mới (cột `Route` varchar đã đủ filter). Index optional P2 `(CompanyCode, Route)` — **out** nếu list nhỏ.

**P2 / out of pack (không API mới):** report · summary · validate-checkin · zones · Face/NFC · Excel · `GET /api/v1/attendance/*`.

## API catalog (attendance-logs)

### API-01 — List (DELTA query)

| | |
|--|--|
| Method / Path | `GET /api/v1/patrol/attendance-logs` |
| BFF | `GET /web-bff/api/v1/patrol/attendance-logs` (proxy query as-is) |
| Purpose | Paged Kind B catalog — search must work · filter đổi → FE `page=1` |
| Permission | `patrol.attendance-logs.read` (BE `[RequirePermission]` stub P1) |
| Query | `search?` · `status?` · **`route?`** · **`onlyOutZone?`** (`true`/`1`) · `page` default 1 · `pageSize` **50/100/200/500** (else 50) |
| Filter semantics | `status` exact · `route` exact trim = `AttendanceLog.Route` (master **code**) · `onlyOutZone=true` → `InZone == false` (Checkbox Zone B; **không** bắt buộc `status=Lệch zone`) · `search` AND với các filter |
| Response | `ApiResponse<AttendanceLogPagedResult>` |
| Sort | `CheckInAt` DESC · `IsActive=true` only |

### API-02 — GetById

| | |
|--|--|
| Method / Path | `GET /api/v1/patrol/attendance-logs/{id}` |
| Purpose | Slideout View/Edit hydrate · XCO get_only |
| Permission | `patrol.attendance-logs.read` |
| Errors | 404 · 403 cross-company |

### API-03 — Create

| | |
|--|--|
| Method / Path | `POST /api/v1/patrol/attendance-logs` |
| Purpose | Manual / Copy → POST new · IdCode **`CC-yyyyMMdd-nnn`** server-generated (body **không** gửi `code`) |
| Permission | `patrol.attendance-logs.create` |
| Body | `CreateAttendanceLogRequest` — UserName · Route (**code**) · CheckInAt · KmPoint? · Lat · Lng · InZone · Status · Note? |
| Validate | required UserName/Route/Status · Route ∈ road-routes active · Status enum · Lat/Lng required (decimal) |
| Errors | 422 message VN |

### API-04 — Update

| | |
|--|--|
| Method / Path | `PUT /api/v1/patrol/attendance-logs/{id}` |
| Permission | `patrol.attendance-logs.update` |
| Body | `UpdateAttendanceLogRequest` (cùng field + `IsActive?`) · **không** đổi `Code` |
| Validate | như Create |

### API-05 — Soft delete

| | |
|--|--|
| Method / Path | `DELETE /api/v1/patrol/attendance-logs/{id}` |
| Permission | `patrol.attendance-logs.delete` |
| Behavior | `IsActive=false` · 404 nếu không còn |

## Lookup (SA chốt — T-UI-LKP)

### LKP-01 — SearchInput `road-route` (form + Zone B filter)

| | |
|--|--|
| catalogKind | **road-route** |
| Method / Path | `GET /api/v1/integration/road-routes/search` |
| BFF | `GET /web-bff/api/v1/integration/road-routes/search` |
| Query | `search?` · `page` · `pageSize` · `excludeCode?` |
| Item | `RoadRouteSearchItemDto`: `code` · `name` · `routeKind` · `isSelectable` |
| Display | `code — name` (Design) |
| Value persisted on log | **`code`** string (`QL.1`) trên `AttendanceLog.Route` — **không** FK Guid · **không** JSON |
| Permission | `master.road-routes.read` (stub) |
| Seed | 38 CUC2 · **có `QL.1`** · **không `QL.22`** |
| Fallback | BFF down → FE demo subset 38 **chỉ mã có trong seed** (QL.1…) |

**Cấm** LKP users P1 (GAP-PO-ATT-03). **Cấm** free-text `route`. **Cấm** duplicate Search endpoint trong Patrol.

Optional hydrate: `GET /api/v1/integration/road-routes?search=` (API-list) — SearchInput **ưu tiên `/search`**.

## Field map (Design uiField → DTO → DB)

| uiField | controlHint | dtoField | dbColumn | notes |
|---------|-------------|----------|----------|-------|
| code | Text readonly IdCode | `Code` | `code` | server `CC-yyyyMMdd-nnn` · UK (CompanyCode, Code) |
| userName | Text * | `UserName` | `user_name` | P1 no users LKP |
| route | SearchInput road-route * | `Route` | `route` | master **code** |
| checkInAt | Date datetime-local * | `CheckInAt` | `check_in_at` | UTC store |
| kmPoint | Text | `KmPoint` | `km_point` | |
| lat | Text number * | `Lat` | `lat` decimal(12,8) | |
| lng | Text number * | `Lng` | `lng` decimal(12,8) | |
| inZone | Dropdown Trong/Ngoài | `InZone` | `in_zone` bool | FE map true/false |
| status | Dropdown 3 enum * | `Status` | `status` | exact VN labels |
| note | Text multiline | `Note` | `note` | |
| updatedAt | Date readonly | `UpdatedAt` | `updated_at` | |
| (filter) onlyOutZone | Checkbox | query `onlyOutZone` | filter `in_zone = false` | **không** cột mới |
| (grid GPS) | display | `Lat`,`Lng` | | FE format |

**Cấm** parent JSON string trên DTO/entity.

## Status enum (LOCKED)

`Đúng tuyến` · `Lệch zone` · `Thiếu điểm`

InZone Dropdown labels: `Trong zone` → `true` · `Ngoài zone` → `false`. Server **không** auto-sync Status từ InZone P1 (form độc lập; PostGIS validate-checkin = P2).

## Entity — AttendanceLogEntity (unchanged schema)

| Column | Type | Notes |
|--------|------|-------|
| Id | uuid PK | |
| CompanyCode | varchar(64) | tenant |
| Code | varchar(64) | unique per company |
| UserName | varchar(128) | |
| Route | varchar(64) | **road-route.code** |
| CheckInAt | timestamptz | UTC |
| KmPoint | varchar(32)? | |
| Lat / Lng | decimal(12,8) | |
| InZone | bool | |
| Status | varchar(64) | enum VN |
| Note | varchar(2000)? | |
| IsActive | bool | soft delete |
| CreatedAt / UpdatedAt | timestamptz | |

## BFF

`AttendanceLogsBffController` **proxy-only** — forward GET list **kèm** `route` + `onlyOutZone` (query string passthrough đã có `Request.QueryString`). **Không** business logic. **Không** proxy road-routes từ Patrol BFF — FE gọi Integration BFF trực tiếp.

## Migration

**Không** `Schema_*` mới pack này. Validate Route đọc `DbSet<RoadRouteEntity>` đã có. Seed master **không** thêm QL.22.

## Perm (FE + BE stub)

`patrol.attendance-logs.read|create|update|delete`  
Lookup: `master.road-routes.read`

## Handoff → TL

Emit **T-CTX · T-PERM · T-UI-LIST (A–D) · T-UI-FORM · T-UI-ACT · T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX · T-BE/BFF**.

| Task hint | Scope |
|-----------|--------|
| T-UI-LKP-01 | SearchInput route form + Zone B → LKP-01 · display `code — name` |
| T-UI-FIELD-01 | controlHint vs BE types (Date UTC · decimal GPS · bool InZone · enum status) |
| T-UI-PROD-01 | mock `QL.22` → `QL.1` |
| T-UI-UX-01 | constitution · 1× LinPageLayout · LinCatalogDataGrid · LinCatalogListPagination · View readOnly · footer-only · **cấm** Resource |
| T-BE-Q-01 | API-01 query `route` + `onlyOutZone` + GPS search |
| T-BE-VAL-01 | Route ∈ road-routes · status allow-list · 422 |
| T-BFF-01 | verify query passthrough (no new controller) |
| T-FE-API-01 | `attendanceEndpoint.getList` params `route` · `onlyOutZone` |

Next: team-lead **pending** đến `solution_confirm=approve` (board). Dev **pending** `confirms.beRepo && uiRepo` (đã approve).

## Confirm

`solution_confirm` = **pending** — autoApprove **OFF** · user Approve trên `/qldb-workflow` · **không** auto-confirm.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.14.5 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.14.5 |
| rulesVersion | 2026.08.14.9 |
| generatedAt | 2026-08-14T16:55:00.000Z |
| versionGate | rechecked |
| contentHashPriorDesign | design.md · task_dcdef46b · 2026-08-14T16:50:00.000Z |
| contentHashPriorPo | sha256:po-requirement-task_be41b753 |
| contentHashPriorDataAnaly | sha256:1ec355a64b1bcdf471e211c98b74d77fbdca665bd23472f63456457aa538fba4 |
