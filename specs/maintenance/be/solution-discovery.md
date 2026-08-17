# Solution discovery — maintenance

> Status: **confirmed** (`solution_confirm=approve` · autoApprove ON · `task_1e3650ac`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** (TZ · XCO · SHARE)  
> Requires: `ui/design.md` **confirmed** (autoApprove ON · Design 2026-08-16 Kind B A–D + Zone F + full-page form)  
> **Supersedes** solution 2026-08-10 (`tz_na` · enum BE `periodic`/`awaiting_accept` · thiếu init-data)  
> **Cấm** `ERP.Service.*` · `ERP.Master.*` · `Domains/Master` · `api/v1/rmms/*`

| Field | Value |
|-------|-------|
| feature | `maintenance` |
| packKind | `list` (Kind B catalog A–D + Zone F schema + **full-page** form) |
| status | `confirmed` |
| design_confirm | **approve** (autoApprove ON · `task_1e3650ac`) |
| solution_confirm | **approve** (autoApprove ON · `task_1e3650ac`) |
| taskId | `task_1e3650ac` |
| updatedAt | `2026-08-15T17:45:00.000Z` |
| changeScope | `edit_page` |

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm` (board tick giữ) |
| Domain | **Maintenance** / `maintenance` · DOMAIN-MAP · ui-schema **Integration** |
| API host | `api/src/RMMS.Service.Api/Domains/Maintenance/` |
| Integration schema | `api/src/RMMS.Service.Api/Domains/Integration/` (`CatalogUiSchema*`) |
| Models | `api/domains/maintenance/LINM.RMMS.Maintenance.Models/DTOs/` |
| BFF | `bff/domains/maintenance/LINM.RMMS.Maintenance.Bff/` · **proxy only = yes** |
| BFF schema | `bff/domains/integration/LINM.RMMS.Integration.Bff/Controllers/CatalogUiSchemaBffController.cs` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` · `/maintenance` · `ui_repo_confirm` |
| Persist | `no-parent-json-field` · `WorkOrderEntity` / `rmms_work_orders` **flat scalars** |
| Auth perm | `maintenance.work-orders.read\|create\|update\|delete` — `[RequirePermission]` stub đến CommonLib ≥1.4.0 |
| Out of pack | Kind E KPI live · comment/media tables · SLA Workflow · **GAP-RPT-SRC-WO-01** Quantity+UnitCode |

**Cấm** `ERP.Service.*` · `Domains/Master` · invent `/api/v1/work-orders` flat.

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | 1× `LinPageLayout` · `LinCatalogDataGrid` · `LinCatalogListPagination` · `LinCatalogUiSchemaEditorModal` |
| HTTP | `apiClient` SSOT | MFE re-export only |
| BE envelope | CommonLib `ApiResponse` (local stub until upgrade) | cấm envelope mới |
| Persist | `no-parent-json-field` | **cấm** progress/comment JSON blob trên WO |
| Lookup | **API-09 init-data** (closed catalog Design §3.3) | **cấm** FE-only enum làm SSOT |
| BFF | proxy only | không business logic |
| Schema | Integration `CatalogUiSchemaRegistry.WorkOrders` | **cấm** clone registry dưới Maintenance |

## Implement gates (confirm)

> Kind B **tenant catalog** Công việc. autoApprove ON → agent confirm.

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| **TZ** | **required** (`tz_required`) | **API-03/04** body `dueAt` · list display Hạn · form Date datetime-local | `/review-timezone-implement` | Persist **UTC** (`ToUniversalTime` đã có) · FE **display** local (`form-datetime-local-utc`). Audit `createdAt`/`updatedAt` UTC server. List filter không period. |
| **XCO** | **required** (`xco_get_only`) | **API-02** `GET …/work-orders/{id}` | `/implement-view-cross-company` | **Đã có** `WorkOrderService.GetByIdAsync`: tenant query → `IgnoreQueryFilters` + claim `allowed_company_ids` · 403/404. List **không** XCO |
| **SHARE** | **tenant_keep** (`share_tenant`) | `WorkOrderEntity` | `/implement-shared-table` | WO theo `CompanyCode`. Closed catalogs status/workType = Type C enum trên Maintenance (không master Integration table) |

AskQuestion (autoApprove ON): `sa_tz_gate=tz_required` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · 2026-08-15T17:45:00.000Z.

## FormType pack (`packKind=list`)

### Screens (from Design)

| id | Surface | Pattern | Route / open | FormMode | Actions |
|----|---------|---------|--------------|----------|---------|
| S-LIST | List A–D | Full page `LinPageLayout` catalog | `/maintenance` | — | search, create, refresh, history stub, **config Zone F**, clear, row Xem/Sửa/Copy/Xóa/Lịch sử/Tiến độ/Nghiệm thu |
| S-FORM | Form | **Full-page** `MaintenanceFormPage` — **cấm** Slideout/Resource/`?form=` | `/maintenance/new` · `/maintenance/:id` · `/maintenance/:id/edit` · `/maintenance/:id/copy` | C/E/V/Copy | save, cancel, copy, edit, back · leave-confirm dirty |
| S-MOD-CFG | Column config | `LinCatalogUiSchemaEditorModal` | toolbar `fa-cog` | — | title «Cấu hình hiển thị danh mục» · PUT ui-schema |

### FormMode ↔ API (REQUIRED)

| FormMode / action | Endpoint |
|-------------------|----------|
| List search + filter + page | **API-01** GET `work-orders` |
| View / Edit load | **API-02** GET `work-orders/{id}` |
| Create · Copy (POST new, IdCode mới) | **API-03** POST `work-orders` |
| Edit save | **API-04** PUT `work-orders/{id}` |
| Delete | **API-05** DELETE `work-orders/{id}` |
| Progress | **API-06** POST `work-orders/{id}/progress` |
| Complete stub P2 | **API-07** POST `work-orders/{id}/complete` |
| KPI stub | **API-08** GET `summary` (DEFER live Kind E) |
| SearchInput status / workType | **API-09** GET `work-orders/init-data` |
| Zone F schema | **API-SCHEMA-01/02** GET/PUT `integration/catalogs/work-orders/ui-schema` |

`devSlash` (handoff TL): `/agent-dev` (list+form). **Không** `/erp-feature`.

Canonical TL task ids (SA **không** viết HOW): T-CTX-01 · T-PERM-01 · T-UI-LIST-01 · T-UI-FORM-01 · T-UI-ACT-01 · T-UI-LKP-01 · T-UI-FIELD-01 · T-UI-PROD-01 · T-UI-UX-01 · T-UI-LIST-CONFIG-01 · T-BE-CRUD-01 · **T-BE-INIT-01** · **T-BE-ENUM-01** · T-BE-UISCHEMA-01 · T-BFF-01 · T-QA-01 · T-QA-CRUD-01.

## Live BE / MFE (re-audit 2026-08-16)

| Layer | Exists | Gap vs Design 2026-08-16 |
|-------|--------|--------------------------|
| `WorkOrdersController` `api/v1/maintenance/work-orders` | yes | CRUD + progress + complete OK |
| List query `search` · `status` · `workType` · pageSize 50/100/200/500 | yes | search ILIKE code/title/route/type/status/team/assignee — OK |
| XCO GET/{id} | yes | giữ |
| IdCode `WO-yyyyMMdd-nnnn` | yes | OK |
| `GET …/init-data` | **no** | **GAP-SA-INIT-01** — SearchInput **cấm** FE-only enum SSOT |
| Enum `AllowedStatuses` / `AllowedWorkTypes` | yes | **GAP-SA-ENUM-01** lệch Design §3.3 (xem bảng dưới) |
| `CatalogUiSchemaRegistry.WorkOrders` + `CatalogUiSchemaSeed.WorkOrders()` | yes | **GAP-BE-UISCHEMA-01 closed** (seed + registry) |
| GET/PUT `api/v1/integration/catalogs/work-orders/ui-schema` | yes | giữ |
| BFF work-orders + summary | yes proxy | **thiếu** forward `init-data` (**GAP-SA-BFF-INIT-01**) |
| BFF ui-schema | yes | giữ |
| MFE `LinCatalogUiSchemaEditorModal` + `useCatalogUiSchema('work-orders')` | yes | leftover `configHint` **closed** trên list |
| MFE `lookups.ts` | yes | copy `maintenanceStore` **cũ** — phải consume API-09 + Design labels |
| Form pattern | full-page routes | giữ — **cấm** Slideout |

### GAP-SA-ENUM-01 (LOCK Design — Dev phải đổi BE+FE)

| Catalog | Design (chốt) | Live BE `WorkOrderService` | Live MFE `maintenanceStore` |
|---------|---------------|----------------------------|-----------------------------|
| status | `new` · `in_progress` · `done` · `cancelled` | `new` · `in_progress` · `awaiting_accept` · `done` | same as BE (label «Chờ NT») |
| workType | `repair` · `inspect` · `emergency` | `periodic` · `from-incident` · `bdtx` | Định kỳ / Từ sự cố / BDTX |

**Lock persist codes = Design.** Labels VN Design §3.3. Rows cũ: remap 1-shot Dev (không cột DB mới) — `awaiting_accept`→`in_progress` · `periodic`→`repair` · `from-incident`→`repair` · `bdtx`→`inspect` (không invent code mới). **Cấm** giữ dual enum.

## 2. Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Persist entity | Notes |
|-------------------|-------------|-------------|----------------|-------|
| List filter B | search, status, workType | query | — | SearchTextInput · SearchInput từ API-09 |
| List grid C | code, routeName, workType, teamName, assigneeName, dueAt, status, progressPercent | derived | `WorkOrderEntity` | schema-driven columns |
| Create / Edit / Copy | title, routeName*, workType*, status*, teamName, assigneeName, dueAt*, progressPercent, slaHours, incidentId, description, note · code auto | transaction | same | Copy = POST · code empty until save |
| View | same · **display** (không Input readOnly) | transaction | same | dueAt UTC→local |
| Zone F | schema fields | Integration setting | — | PUT override tenant |
| KPI / comment | — | — | — | **OUT of pack** |

### controlHint → API shape

| controlHint (Design) | SA API |
|----------------------|--------|
| SearchTextInput `search` | API-01 `?search=` |
| SearchInput `work-order-status` | API-09 `statuses[]` `{ value, label }` · persist `status` = **code** |
| SearchInput `work-type` | API-09 `workTypes[]` · persist `workType` = **code** |
| Text scalars | DTO fields |
| Date `dueAt` | body/response UTC · FE datetime-local |
| Number progress 0–100 | scalar · validate BE |
| ui-schema | API-SCHEMA GET default seed · PUT override |

### Field map (ui → dto → db)

| uiField | dtoField | dbColumn | Notes |
|---------|----------|----------|-------|
| code | Code | `code` | server `WO-yyyyMMdd-nnnn` · copy = mã mới |
| title | Title | `title` | optional |
| routeName | RouteName | `route_name` | required |
| workType | WorkType | `work_type` | **repair\|inspect\|emergency** |
| status | Status | `status` | **new\|in_progress\|done\|cancelled** |
| teamName | TeamName | `team_name` | |
| assigneeName | AssigneeName | `assignee_name` | |
| dueAt | DueAt | `due_at` | timestamptz UTC |
| progressPercent | ProgressPercent | `progress_percent` | 0–100 |
| slaHours | SlaHours | `sla_hours` | optional |
| incidentId | IncidentId | `incident_id` | text P1 (không FK pack) |
| description | Description | `description` | |
| note | Note | `note` | |
| — | CompanyCode | `company_code` | tenant |
| — | IsActive | `is_active` | soft delete |

## API contracts (LOCKED)

### API-01 — List

| | |
|--|--|
| Method / Path | `GET /api/v1/maintenance/work-orders` |
| Query | `search` · `status` · `workType` · `page` · `pageSize` (50/100/200/500) |
| Permission | `maintenance.work-orders.read` |
| Response | `ApiResponse<WorkOrderPagedResult>` |

### API-02 — GetById (XCO)

| | |
|--|--|
| Method / Path | `GET /api/v1/maintenance/work-orders/{id}` |
| Permission | `maintenance.work-orders.read` |
| Errors | 404 · 403 XCO |

### API-03 — Create

| | |
|--|--|
| Method / Path | `POST /api/v1/maintenance/work-orders` |
| Body | `CreateWorkOrderRequest` (**no Code**) |
| Permission | `maintenance.work-orders.create` |
| 422 | missing required · invalid enum · progress range |

### API-04 — Update

| | |
|--|--|
| Method / Path | `PUT /api/v1/maintenance/work-orders/{id}` |
| Permission | `maintenance.work-orders.update` |

### API-05 — Soft delete

| | |
|--|--|
| Method / Path | `DELETE /api/v1/maintenance/work-orders/{id}` |
| Effect | `IsActive=false` |
| Permission | `maintenance.work-orders.delete` |

### API-06 — Progress

| | |
|--|--|
| Method / Path | `POST /api/v1/maintenance/work-orders/{id}/progress` |
| Body | `ProgressWorkOrderRequest` (`progressPercent` · `note?`) |
| Effect | set ProgressPercent · Note · `new`→`in_progress` |

### API-07 — Complete (stub P2)

| | |
|--|--|
| Method / Path | `POST /api/v1/maintenance/work-orders/{id}/complete` |
| Effect | `status=done` · progress=100 |

### API-08 — Summary stub

| | |
|--|--|
| Method / Path | `GET /api/v1/maintenance/summary` |
| Purpose | KPI counts — Kind E **DEFER** live |

### API-09 — Init-data (NEW — GAP-SA-INIT-01)

| | |
|--|--|
| Method / Path | `GET /api/v1/maintenance/work-orders/init-data` |
| Permission | `maintenance.work-orders.read` |
| Response | `{ statuses: [{ value, label }], workTypes: [{ value, label }] }` **đúng Design §3.3** |
| BFF | `GET web-bff/api/v1/maintenance/work-orders/init-data` |

**Cấm** native Select FE-only. **Cấm** Integration master table mới cho 4+3 values.

### API-SCHEMA-01 / 02

| | |
|--|--|
| Method / Path | `GET` / `PUT` `/api/v1/integration/catalogs/work-orders/ui-schema` |
| Domain | **Integration** |
| Seed | `CatalogUiSchemaSeed.WorkOrders()` — bootstrap columns khớp Design: Mã · Tuyến · Loại · Đội · Cán bộ · Hạn · Trạng thái · Tiến độ (+ title/sla/incident/note ẩn list) |
| BFF | `web-bff/api/v1/integration/catalogs/{kind}/ui-schema` |

## Entity / migration

Table `rmms_work_orders` — migration **`Schema_RmmsWorkOrders` already applied in repo**. Pack này **không** migration cột mới (Quantity/UnitCode = report GAP). Enum remap = data update, không schema.

Indexes giữ: unique `(CompanyCode, Code)` · `(CompanyCode, DueAt)` · `(CompanyCode, Status, IsActive)` · `(CompanyCode, WorkType, IsActive)`.

## BFF

- `WorkOrdersBffController` proxy CRUD/progress/complete/summary + **thêm init-data**.
- `CatalogUiSchemaBffController` giữ.
- Keep health `MaintenanceBffController`.

## Permissions

`maintenance.work-orders.read|create|update|delete` — attribute TODO CommonLib; không block CRUD.

## Out of pack

- Kind E charts live
- Comments POST
- Progress media
- Quantity + UnitCode (**GAP-RPT-SRC-WO-01**)
- Excel / map

## Handoff → TL (`/agent-team-lead`)

- API-01…09 + API-SCHEMA-01/02
- Close **GAP-SA-ENUM-01** · **GAP-SA-INIT-01** · **GAP-SA-BFF-INIT-01**
- T-UI-LIST-CONFIG-01 (FE schema editor — mostly done; bind init-data + enum labels)
- T-BE-ENUM-01 · T-BE-INIT-01 · T-BE-UISCHEMA-01 (seed **exists** — verify Hint/list keys vs Design)
- FE route `/maintenance` · MFE Field
- Roles sau SA = **pending** đến lượt (Dev/QA/Review)

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-15T17:45:00.000Z |
| versionGate | rechecked |
