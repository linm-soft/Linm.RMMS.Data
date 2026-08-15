# SA — solution-discovery — patrol (crud_formtype)

| Field | Value |
|-------|-------|
| feature | `patrol` |
| this role | `sa` · `/agent-sa` |
| status | `confirmed` (autoApprove=ON · agent self-confirm) |
| changeScope | `edit_page` |
| packKind | `list` |
| runMode | `fix_gaps` · gap=`crud_formtype` |
| domain | **Patrol** (DOMAIN-MAP slug `patrol` → Patrol) |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` · `/patrol` |
| solution_confirm | `approve` (autoApprove=ON · `task_91df2c14`) |
| prior · design | `confirmed` · `ui/design.md` + `ui/prototype/` · `task_5e7961be` |
| prior · po | `done` · GAP-PO-PAT-01..07 · `task_af761fcc` |
| prior · data_analy | `done` · hash `1d25897d8f…` · `task_36ea7fa2` |
| taskId | `task_91df2c14` |
| updatedAt | `2026-08-14T18:20:00.000Z` |

> SA **chốt** lookup API + list query delta. Design **chốt** control-map. **Cấm** Dev đoán Text vs SearchInput.  
> **Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*`.

## Gates

| Gate | Value |
|------|-------|
| sa_tz_gate | **tz_na** — store `StartedAt` / `CreatedAt` / `UpdatedAt` **UTC** (`timestamptz` / `ToUniversalTime`) · `PlannedDate` = `DateOnly` (no TZ) · display local FE |
| sa_xco_gate | **xco_get_only** — GetById may IgnoreQueryFilters + `allowed_company_ids` · deny → 403 (`PatrolSessionForbiddenException` đã có) |
| sa_shared_table | **share_tenant** (`PatrolSessionEntity` : `TenantEntity` · filter `CompanyCode`) |
| lookup_share | road-route catalog = **share_a** (Integration Type A) — **read-only** từ Patrol FE |
| parent_json | **cấm** — persist flat scalars only |
| design_confirm | **approve** (autoApprove Design `task_5e7961be`) |
| repo | `be_repo_confirm=approve` · `ui_repo_confirm=approve` (packet) — TL/Dev sau SA |

## Paths (LOCKED — no new domain)

| Layer | Path |
|-------|------|
| API domain | `api/src/RMMS.Service.Api/Domains/Patrol/` |
| Models | `api/domains/patrol/LINM.RMMS.Patrol.Models/DTOs/PatrolSessionDtos.cs` |
| Entity | `api/shared/RMMS.Service.Persistence/Entities/PatrolSessionEntity.cs` |
| Table | `rmms_patrol_sessions` · migration `Schema_RmmsPatrolSessions` **đã có** |
| BFF | `bff/domains/patrol/LINM.RMMS.Patrol.Bff/Controllers/PatrolSessionsBffController.cs` |
| Route prefix | **`api/v1/patrol/sessions`** |
| BFF prefix | **`web-bff/api/v1/patrol/sessions`** |
| FE BASE | `/patrol/sessions` (relative `VITE_API_URL`) |
| Lookup API | **`api/v1/integration/road-routes`** (domain Integration — **không** copy vào Patrol) |
| Lookup BFF | **`web-bff/api/v1/integration/road-routes`** |
| Lookup FE | `/integration/road-routes` (Field MFE SearchInput) |

**Cấm** tạo folder domain mới · **cấm** `ERP.*`.

## Live BE vs this pack (delta)

CRUD API-01…05 **đã implement**. Pack `crud_formtype` **không** rewrite entity. SA chốt **GAP** Dev phải đụng API:

| ID | Live today | Required this pack | Layer |
|----|------------|--------------------|-------|
| GAP-SA-PAT-Q01 | `GET` query `search` · `status` · `page` · `pageSize` only | + **`route`** (exact code, trim) | API controller + `IPatrolSessionService.GetListAsync` + BFF query passthrough (đã `Request.QueryString`) + FE `getList` |
| GAP-SA-PAT-LKP | Form `route` = Input Text · list **chưa** filter tuyến | SearchInput → **LKP-01** `GET …/road-routes/search` · persist **code** `QL.1` | FE + Integration read · **không** users P1 |
| GAP-SA-PAT-VAL | Create/Update trim Route, no catalog check · no enum allow-list | Validate `Route` ∈ `rmms_road_routes.Code` **IsActive** · 422 nếu unknown · PatrolType / Status allow-list VN | `PatrolSessionService` → `DbSet<RoadRouteEntity>` **read** (cùng pattern attendance) |
| GAP-SA-PAT-ENUM | Status / PatrolType free string | Persist **nhãn VN** khớp live MFE (`Đang tuần`…) — **không** đổi sang Design codes `in_progress`/`road` (tránh break seed + cột `varchar`) | API + FE lookup value=label |
| GAP-SA-PAT-SEED | MFE seed `QL.1` · `ĐT.784` · `QL.1A` | Chỉ mã ∈ 38 CUC2. `QL.1` **có**. `ĐT.784` / `QL.1A` **phải** thuộc seed; nếu không → đổi seed FE sang mã có trong 38 (cùng rule attendance `QL.22`) | FE mock only |

**Không** migration schema mới (cột `Route` varchar(64) đã đủ filter). Index optional P2 `(CompanyCode, Route)` — **out**.

**P2 / out of pack (không API mới):** `…/check-ins` · `…/tracks` · `…/coverage` · `…/kpi` · Leaflet · Excel · orgUnit / staffType / date range · users lookup · offline conflict merge.

## API catalog (sessions)

### API-01 — List (DELTA query)

| | |
|--|--|
| Method / Path | `GET /api/v1/patrol/sessions` |
| BFF | `GET /web-bff/api/v1/patrol/sessions` (proxy query as-is) |
| Purpose | Paged Kind B catalog — search must work · filter đổi → FE `page=1` |
| Permission | `patrol.sessions.read` (BE `[RequirePermission]` stub P1) |
| Query | `search?` · `status?` · **`route?`** · `page` default 1 · `pageSize` **50/100/200/500** (else 50) |
| Filter semantics | `status` exact trim = `PatrolSession.Status` · `route` exact trim = `PatrolSession.Route` (master **code**) · `search` AND Contains trên Code/UserName/Route/PatrolType/Status (đã có) |
| Response | `ApiResponse<PatrolSessionPagedResult>` |
| Sort | `PlannedDate` DESC · `UpdatedAt` DESC · `IsActive=true` only |

### API-02 — GetById

| | |
|--|--|
| Method / Path | `GET /api/v1/patrol/sessions/{id}` |
| Purpose | Full-page View/Edit hydrate · XCO get_only |
| Permission | `patrol.sessions.read` |
| Errors | 404 · 403 cross-company |

### API-03 — Create

| | |
|--|--|
| Method / Path | `POST /api/v1/patrol/sessions` |
| Purpose | Manual / Copy → POST new · IdCode **`TD-yyyyMMdd-nnn`** server-generated (body **không** gửi `code`) |
| Permission | `patrol.sessions.create` |
| Body | `CreatePatrolSessionRequest` — UserName · Route (**code**) · PatrolType · PlannedDate · StartedAt? · CheckInCount · CoveragePercent · Status · OfflineQueued · Note? |
| Validate | required UserName/Route/PatrolType/Status · CheckInCount ≥0 · Coverage 0–100 · Route ∈ road-routes active · PatrolType/Status allow-list |
| Errors | 422 message VN |

### API-04 — Update

| | |
|--|--|
| Method / Path | `PUT /api/v1/patrol/sessions/{id}` |
| Permission | `patrol.sessions.update` |
| Body | `UpdatePatrolSessionRequest` (cùng field + `IsActive?`) · **không** đổi `Code` |
| Validate | như Create |

### API-05 — Soft delete

| | |
|--|--|
| Method / Path | `DELETE /api/v1/patrol/sessions/{id}` |
| Permission | `patrol.sessions.delete` |
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
| Value persisted on session | **`code`** string (`QL.1`) trên `PatrolSession.Route` — **không** FK Guid · **không** JSON |
| Permission | `master.road-routes.read` (stub) |
| Seed | 38 CUC2 · **có `QL.1`** |
| Fallback | BFF down → FE demo subset 38 **chỉ mã có trong seed** |

**Cấm** LKP users P1 (GAP-PO-PAT-04). **Cấm** free-text `route`. **Cấm** duplicate Search endpoint trong Patrol.

Optional hydrate: `GET /api/v1/integration/road-routes?search=` — SearchInput **ưu tiên `/search`**.

### LKP-02 — Enums local (không API)

| Field | Persist value (LOCKED) | Label |
|-------|------------------------|-------|
| status | `Đang tuần` · `Hoàn thành` · `Bỏ sót` · `Offline queue` | cùng value |
| patrolType | `Tuần đường` · `Tuần kiểm` | cùng value |
| offlineQueued | bool `true`/`false` | Offline queue / Online |

Design.md codes (`in_progress` / `road`) = **không persist**. FE SearchInput `value` = nhãn VN (live `lookups.ts`). Filter `?status=` gửi **nhãn VN** exact.

## Field map (Design uiField → DTO → DB)

| uiField | controlHint | dtoField | dbColumn | notes |
|---------|-------------|----------|----------|-------|
| code | Text readonly IdCode | `Code` | `code` | server `TD-yyyyMMdd-nnn` · UK (CompanyCode, Code) |
| userName | Text * | `UserName` | `user_name` | P1 no users LKP |
| route | SearchInput road-route * | `Route` | `route` | master **code** |
| patrolType | SearchInput enum * | `PatrolType` | `patrol_type` | VN allow-list |
| plannedDate | Date `type=date` * | `PlannedDate` | `planned_date` | DateOnly |
| startedAt | Date datetime-local | `StartedAt` | `started_at` | UTC store |
| checkInCount | Text number ≥0 * | `CheckInCount` | `check_in_count` | int |
| coveragePercent | Text number 0–100 | `CoveragePercent` | `coverage_percent` | decimal(5,2) |
| status | SearchInput enum * | `Status` | `status` | VN allow-list |
| offlineQueued | SearchInput bool | `OfflineQueued` | `offline_queued` | FE map true/false |
| note | Text | `Note` | `note` | |
| updatedAt | Date readonly | `UpdatedAt` | `updated_at` | View display |
| (filter) route | SearchInput | query `route` | filter exact `route` | **không** cột mới |

**Cấm** parent JSON string trên DTO/entity.

## Entity — PatrolSessionEntity (unchanged schema)

| Column | Type | Notes |
|--------|------|-------|
| Id | uuid PK | |
| CompanyCode | varchar(64) | tenant |
| Code | varchar(64) | unique per company |
| UserName | varchar(128) | |
| Route | varchar(64) | **road-route.code** |
| PatrolType | varchar(32) | enum VN |
| PlannedDate | date | |
| StartedAt | timestamptz? | UTC |
| CheckInCount | int | ≥0 |
| CoveragePercent | decimal(5,2) | 0–100 |
| Status | varchar(64) | enum VN |
| OfflineQueued | bool | |
| Note | varchar(2000)? | |
| IsActive | bool | soft delete |
| CreatedAt / UpdatedAt | timestamptz | |

## BFF

`PatrolSessionsBffController` **proxy-only** — `BuildListPath` đã gắn `Request.QueryString` → `route` **passthrough không cần controller mới**. **Không** business logic. **Không** proxy road-routes từ Patrol BFF — FE gọi Integration BFF trực tiếp.

## Migration

**Không** `Schema_*` mới pack này. Validate Route đọc `DbSet<RoadRouteEntity>` đã có. Seed master **không** invent mã ngoài 38.

## Perm (FE + BE stub)

`patrol.sessions.read|create|update|delete`  
Lookup: `master.road-routes.read`

## Handoff → TL

Emit **T-CTX · T-PERM · T-UI-LIST (A–D) · T-UI-FORM · T-UI-ACT · T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX · T-BE/BFF**.

| Task hint | Scope |
|-----------|--------|
| T-UI-LKP-01 | SearchInput route form + Zone B → LKP-01 · display `code — name` |
| T-UI-FIELD-01 | controlHint vs BE (Date UTC · DateOnly · decimal coverage · bool offline · enum VN) |
| T-UI-PROD-01 | cấm Slideout · View=`<dl>` · cấm Resource · seed chỉ mã 38 |
| T-UI-UX-01 | constitution · 1× LinPageLayout · LinCatalogDataGrid · LinCatalogListPagination · footer-only Lưu/Hủy |
| T-BE-Q-01 | API-01 query `route` |
| T-BE-VAL-01 | Route ∈ road-routes · status/patrolType allow-list · 422 |
| T-BFF-01 | verify query passthrough (no new controller) |
| T-FE-API-01 | `patrol` getList params `search` · `status` · `route` · page |

Next: team-lead **pending** chain (autoApprove ON · enqueue TL). Dev **pending** `confirms.beRepo && uiRepo` (đã approve).

## Confirm

`solution_confirm` = **approve** — autoApprove **ON** · agent self-confirm · **cấm** chờ board.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.14.5 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.14.5 |
| rulesVersion | 2026.08.14.9 |
| generatedAt | 2026-08-14T18:20:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new (STATUS orchestrator `2026.08.09.02` · SA SSOT sibling attendance `2026.08.14.5`) |
| contentHashPriorDesign | design.md · task_5e7961be · 2026-08-14T18:10:00.000Z |
| contentHashPriorPo | sha256:po-requirement-task_af761fcc |
| contentHashPriorDataAnaly | sha256:1d25897d8fbcaa2b7be1174adf71f0840253c187980d23b9618bb3251febbcd5 |
| orchestratorSkillVersion | 2026.08.09.02 |
| orchestratorWorkflowVersion | 2026.08.09.02 |

---
<!-- Version meta: skillVersion=2026.08.14.5 · schemaVersion=2 · workflowVersion=2026.08.14.5 · rulesVersion=2026.08.14.9 · versionGate=rechecked -->
