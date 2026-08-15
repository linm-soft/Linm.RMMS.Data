# SA — solution-discovery — citizen (crud_formtype)

| Field | Value |
|-------|-------|
| feature | `citizen` |
| this role | `sa` · `/agent-sa` |
| status | `confirmed` (autoApprove=ON · agent self-confirm) |
| changeScope | `edit_page` |
| packKind | `list` |
| runMode | `full_pipeline` |
| gap | `crud_formtype` |
| domain | **Integration** (DOMAIN-MAP slug `citizen` → Integration) |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Integration` · `/integration/citizen` |
| solution_confirm | `approve` (autoApprove=ON · `task_de8336cd`) |
| prior · design | `confirmed` · `ui/design.md` + prototype · `task_5c19b559` |
| prior · po | `done` · GAP-PO-CIT-01..10 · `task_a77e191e` |
| prior · data_analy | `done` · hash `aed65b28a0…` · `task_067181fe` |
| taskId | `task_de8336cd` |
| updatedAt | `2026-08-14T17:21:00.000Z` |

> SA **chốt** lookup API + list query delta. Design **chốt** control-map. **Cấm** Dev đoán Text vs SearchInput.  
> **Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*`.  
> **≠** Mobile **Góp ý** (`feedback`).

## Gates

| Gate | Value |
|------|-------|
| sa_tz_gate | **tz_na** — store `ReportedAt` / `CreatedAt` / `UpdatedAt` **UTC** (`timestamptz` / `ToUniversalTime`) · display local FE |
| sa_xco_gate | **xco_get_only** — GetById may IgnoreQueryFilters + claim `allowed_company_ids` · deny → 403 (`CitizenIncidentForbiddenException`) |
| sa_shared_table | **share_tenant** (`CitizenIncidentEntity` : `TenantEntity` · filter `CompanyCode`) |
| lookup_share | road-route catalog = **share_a** (Integration Type A) — **read-only** từ inbox FE |
| parent_json | **cấm** — persist flat scalars only (`MediaMeta` = optional **string**, không JSON inventory) |
| design_confirm | **approve** (`task_5c19b559`) — inventory §3 locked |
| repo | `be_repo_confirm=approve` · `ui_repo_confirm=approve` (packet) |

## Paths (LOCKED — no new domain)

| Layer | Path |
|-------|------|
| API domain | `api/src/RMMS.Service.Api/Domains/Integration/` |
| Models | `api/domains/integration/LINM.RMMS.Integration.Models/DTOs/CitizenIncidentDtos.cs` |
| Entity | `api/shared/RMMS.Service.Persistence/Entities/CitizenIncidentEntity.cs` |
| Table | `rmms_citizen_incidents` · migration `Schema_RmmsCitizenIncidents` **đã có** |
| BFF | `bff/domains/integration/LINM.RMMS.Integration.Bff/Controllers/CitizenIncidentsBffController.cs` |
| Route prefix | **`api/v1/integration/citizen-incidents`** |
| BFF prefix | **`web-bff/api/v1/integration/citizen-incidents`** |
| FE BASE | `/integration/citizen-incidents` (relative `VITE_API_URL`) |
| Lookup API | **`api/v1/integration/road-routes`** |
| Lookup BFF | **`web-bff/api/v1/integration/road-routes`** |
| Lookup FE | `/integration/road-routes` (SearchInput) |
| Public (P2 UI) | **`api/v1/public/incidents`** · alias **`api/v1/citizen/incident`** — BE **đã có** · pack này **không** clone Kind G MFE |

**Cấm** tạo folder domain mới · **cấm** `ERP.*`.

## Live BE vs this pack (delta)

CRUD API-01…05 + public API-06/07 **đã implement**. Pack `crud_formtype` **không** rewrite entity / **không** migration schema. SA chốt **GAP** Dev phải đụng API + FE:

| ID | Live today | Required this pack | Layer |
|----|------------|--------------------|-------|
| GAP-SA-CIT-Q01 | `GET` query `search` · `status` · `page` · `pageSize` only | + **`road`** (exact **code** trim) | API `GetList` + `ICitizenIncidentService` + BFF query passthrough + FE `citizenEndpoint.getList` |
| GAP-SA-CIT-Q02 | `search` matches TrackingCode / ReporterName / Phone / IncidentType / Status / Road | **giữ** — khớp PO DoD-1 (mã · họ tên · SĐT · loại · tuyến · status). **Không** bắt buộc email/GPS Contains P1 | service `GetListAsync` unchanged besides `road` AND |
| GAP-SA-CIT-LKP | MFE form `road` Text · list **không** filter tuyến | SearchInput → **LKP-01** `GET …/road-routes/search` · persist **code** `QL.1` | FE + Integration read |
| GAP-SA-CIT-VAL | Create/Update trim `Road`, no catalog check · no enum allow-list | Nếu `Road` có giá trị → ∈ `rmms_road_routes.Code` **IsActive** · 422 unknown. Status ∈ 5 · IncidentType ∈ 6 · 422 else. Source create **force** `citizen` | `CitizenIncidentService` → `DbSet<RoadRouteEntity>` **read** |
| GAP-SA-CIT-SEED | Demo `QL.1` | Khớp CUC2 38 · **cấm** invent tuyến ngoài seed | FE mock + master seed **không** thêm mã lạ |

**Không** migration schema mới (cột `Road` varchar đã đủ filter). Index optional P2 `(CompanyCode, Road)` — **out**.

**P2 / out of pack (không API mới / không UI pack này):** Kind G public host MFE · Leaflet · OTP/SMS · PII enc-at-rest · presign `POST /api/v1/upload/presign` · Incident adapter `source=citizen` · `CitizenMedia` / `CitizenStatusEvent` tables (context §4) — **không** tạo P1.

Public endpoints **giữ** như live (inbox pack không gọi). Rate-limit 5/min/IP = stub P2.

## API catalog (citizen-incidents)

### API-01 — List (DELTA query)

| | |
|--|--|
| Method / Path | `GET /api/v1/integration/citizen-incidents` |
| BFF | `GET /web-bff/api/v1/integration/citizen-incidents` (proxy query as-is) |
| Purpose | Paged Kind B inbox — search must work · filter đổi → FE `page=1` |
| Permission | `integration.citizen-incidents.read` (BE `[RequirePermission]` stub P1) |
| Query | `search?` · `status?` · **`road?`** · `page` default 1 · `pageSize` **50/100/200/500** (else 50) |
| Filter semantics | `status` exact · `road` exact trim = `CitizenIncident.Road` (master **code**) · `search` AND với các filter |
| Response | `ApiResponse<CitizenIncidentPagedResult>` |
| Sort | `ReportedAt` DESC · `IsActive=true` only |

### API-02 — GetById

| | |
|--|--|
| Method / Path | `GET /api/v1/integration/citizen-incidents/{id}` |
| Purpose | Full-page View/Edit hydrate · XCO get_only |
| Permission | `integration.citizen-incidents.read` |
| Errors | 404 · 403 cross-company |

### API-03 — Create

| | |
|--|--|
| Method / Path | `POST /api/v1/integration/citizen-incidents` |
| Purpose | Operator create / Copy → POST new · IdCode **`CIT-yyyyMMdd-nnnn`** server-generated (body **không** gửi `trackingCode`) |
| Permission | `integration.citizen-incidents.create` |
| Body | `CreateCitizenIncidentRequest` — ReporterName · Phone · Email? · IncidentType · Description · Address? · Lat · Lng · Road? (**code**) · Chainage? · Status · Source ignored → **`citizen`** · ReportedAt · MediaMeta? |
| Validate | required Họ tên / SĐT / mô tả / loại / trạng thái · enum type/status · Road empty OK · Road set → catalog · Lat/Lng decimal (FE luôn gửi) |
| Errors | 422 message VN |

### API-04 — Update

| | |
|--|--|
| Method / Path | `PUT /api/v1/integration/citizen-incidents/{id}` |
| Permission | `integration.citizen-incidents.update` |
| Body | `UpdateCitizenIncidentRequest` (cùng field + `IsActive?`) · **không** đổi `TrackingCode` |
| Validate | như Create · Source: nếu client gửi khác `citizen` **giữ** `citizen` P1 (inbox) |
| Errors | 404 · 422 |

### API-05 — Soft delete

| | |
|--|--|
| Method / Path | `DELETE /api/v1/integration/citizen-incidents/{id}` |
| Permission | `integration.citizen-incidents.delete` |
| Behavior | `IsActive=false` · 404 nếu không còn |

### API-06 / API-07 — Public (P2 UI · BE keep)

| | |
|--|--|
| API-06 | `POST /api/v1/public/incidents` (+ alias `POST /api/v1/citizen/incident`) — anonymous create · **không** MFE pack này |
| API-07 | `GET /api/v1/public/incidents/{trackingCode}` — track by mã · **không** MFE pack này |

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
| Value persisted on incident | **`code`** string (`QL.1`) trên `CitizenIncident.Road` — **không** FK Guid · **không** JSON |
| Permission | `master.road-routes.read` (stub) |
| Seed | 38 CUC2 · **có `QL.1`** |
| Fallback | BFF down → FE subset 38 **chỉ mã có trong seed** |

**Cấm** free-text `road`. **Cấm** duplicate Search endpoint. **Cấm** map `incidentType` → `asset-type`.

### LKP-02 — SearchInput static `incidentType` (form)

Không API catalog. FE static 6 value Design §3. Server allow-list cùng 6.

### LKP-03 — SearchInput static `status` (form + Zone B)

Không API catalog. FE static 5 + trống=tất cả trên filter. Server allow-list 5 trên Create/Update.

Optional hydrate list: `GET /api/v1/integration/road-routes?search=` — SearchInput **ưu tiên `/search`**.

## Field map (Design uiField → DTO → DB)

| uiField | controlHint | dtoField | dbColumn | notes |
|---------|-------------|----------|----------|-------|
| trackingCode | Text readonly IdCode | `TrackingCode` | `tracking_code` | server `CIT-yyyyMMdd-nnnn` · UK (CompanyCode, TrackingCode) |
| reporterName | Text * | `ReporterName` | `reporter_name` | PII |
| phone | Text tel * | `Phone` | `phone` | PII mask list |
| email | Text email | `Email` | `email` | PII |
| incidentType | SearchInput static 6 * | `IncidentType` | `incident_type` | **cấm** native select · **không** asset-type |
| description | Text multiline * | `Description` | `description` | |
| address | Text | `Address` | `address` | |
| lat | Text number * | `Lat` | `lat` decimal(12,8) | GPS pair |
| lng | Text number * | `Lng` | `lng` decimal(12,8) | GPS pair |
| road | SearchInput road-route | `Road` | `road` | master **code** · optional |
| chainage | Text | `Chainage` | `chainage` | |
| status | SearchInput static 5 * | `Status` | `status` | exact codes dưới |
| source | Text readonly | `Source` | `source` | luôn `citizen` |
| reportedAt | Date datetime-local * | `ReportedAt` | `reported_at` | UTC store |
| mediaMeta | Text filenames | `MediaMeta` | `media_meta` | P1 stub string · **cấm** JSON parent |
| (filter) road | SearchInput Zone B | query `road` | filter `road` exact | **không** cột mới |
| (grid GPS) | display | `Lat`,`Lng` | | FE format |

**Cấm** parent JSON string trên DTO/entity.

## Status enum (LOCKED)

| value | Label VN |
|-------|----------|
| `draft` | Nháp |
| `sent` | Đã gửi |
| `received` | Đã tiếp nhận |
| `processing` | Đang xử lý |
| `done` | Hoàn thành |

## Incident types (LOCKED — không CUC2 asset-type)

| value | Label VN |
|-------|----------|
| `o-ga` | Ổ gà / mặt đường hư |
| `sat-lo` | Sạt lở / taluy |
| `bien-bao` | Biển báo / ATGT |
| `ngap` | Ngập / thoát nước |
| `vat-can` | Vật cản lòng đường |
| `khac` | Khác / phản ánh hiện trường |

## Entity — CitizenIncidentEntity (unchanged schema)

| Column | Type | Notes |
|--------|------|-------|
| Id | uuid PK | |
| CompanyCode | varchar(64) | tenant |
| TrackingCode | varchar(64) | unique per company |
| ReporterName / Phone / Email | varchar | PII scalars (enc DEFER) |
| IncidentType | varchar(64) | enum 6 |
| Description | varchar(4000) | |
| Address | varchar(512)? | |
| Lat / Lng | decimal(12,8) | |
| Road | varchar(128)? | **road-route.code** |
| Chainage | varchar(64)? | |
| Status | varchar(64) | enum 5 |
| Source | varchar(32) | default `citizen` |
| ReportedAt | timestamptz | UTC |
| MediaMeta | varchar(2000)? | filenames stub |
| IsActive | bool | soft delete |
| CreatedAt / UpdatedAt | timestamptz | |

## BFF

`CitizenIncidentsBffController` **proxy-only** — `BuildListPath()` đã `Request.QueryString` → **`road` passthrough không cần controller mới**. **Không** business logic. FE gọi Integration BFF `road-routes/search` trực tiếp (controller **đã có** `[HttpGet("search")]`).

## Migration

**Không** `Schema_*` mới pack này. Validate Road đọc `DbSet<RoadRouteEntity>` đã có.

## Perm (FE + BE stub)

`integration.citizen-incidents.read|create|update|delete`  
Lookup: `master.road-routes.read`

## Handoff → TL

Emit **T-CTX · T-PERM · T-UI-LIST (A–D) · T-UI-FORM · T-UI-ACT · T-UI-LKP · T-UI-FIELD · T-UI-PROD · T-UI-UX · T-BE/BFF**.

| Task hint | Scope |
|-----------|--------|
| T-UI-LKP-01 | SearchInput `road` form + Zone B → LKP-01 · display `code — name` · **cấm** Text |
| T-UI-FIELD-01 | controlHint vs BE types (Date UTC · decimal GPS · enum status/type · Road code) |
| T-UI-PROD-01 | seed display `QL.1` · badge ≠ feedback |
| T-UI-UX-01 | constitution · 1× LinPageLayout · LinCatalogDataGrid · LinCatalogListPagination · View `<dl>` · footer-only · **cấm** Resource/Slideout |
| T-UI-LIST-01 | Zone B filter `road` · search work · page=1 |
| T-UI-FORM-01 | full-page C/E/V/Copy |
| T-BE-Q-01 | API-01 query `road` exact + AND search |
| T-BE-VAL-01 | Road ∈ road-routes · status/type allow-list · Source=`citizen` · 422 |
| T-BFF-01 | verify query passthrough (no new controller) |
| T-FE-API-01 | `citizenEndpoint.getList` param `road` |
| T-CTX-01 | TL re-run CTX vs this SA |

Next: team-lead **pending** (chain · autoApprove ON). Dev **pending** `confirms.beRepo && uiRepo` (đã approve) đến lượt.

## Confirm

`solution_confirm` = **approve** — autoApprove **ON** · agent self-confirm · chain TL **pending** enqueue.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.14.5 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.14.5 |
| rulesVersion | 2026.08.14.9 |
| generatedAt | 2026-08-14T17:21:00.000Z |
| versionGate | rechecked |
| contentHashPriorDesign | design.md · task_5c19b559 · 2026-08-14T17:30:00.000Z |
| contentHashPriorPo | sha256:po-requirement-task_a77e191e |
| contentHashPriorDataAnaly | sha256:aed65b28a023535141cbe64a35d1089c5bfa537acd0d5191e64049f5f248e023 |
