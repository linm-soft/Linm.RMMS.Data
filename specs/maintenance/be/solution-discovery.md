# SA — solution-discovery — maintenance

| Field | Value |
|-------|-------|
| feature | `maintenance` |
| status | `confirmed` (autopilot) |
| domain | **Maintenance** |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| solution_confirm | `approve` (autopilot · task_e4d75335) |
| updatedAt | 2026-08-10T00:24:00.000Z |

## Gates

| Gate | Value |
|------|-------|
| sa_tz_gate | **tz_na** (UTC store · display local FE) |
| sa_xco_gate | **xco_get_only** (GetById cross-company claim) |
| sa_shared_table | **share_tenant** (`WorkOrderEntity`) |

## Paths (LOCKED)

| Layer | Path |
|-------|------|
| API domain | `api/src/RMMS.Service.Api/Domains/Maintenance/` |
| Models | `api/domains/maintenance/LINM.RMMS.Maintenance.Models/DTOs/` |
| Entity | `api/shared/RMMS.Service.Persistence/Entities/WorkOrderEntity.cs` |
| BFF | `bff/domains/maintenance/LINM.RMMS.Maintenance.Bff/Controllers/` |
| Route prefix | **`api/v1/maintenance/work-orders`** |
| BFF prefix | **`web-bff/api/v1/maintenance/work-orders`** |
| Summary | **`api/v1/maintenance/summary`** (stub KPI) |

**Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*`.

> Context cũ ghi `/api/v1/work-orders` flat — **LOCK** nested dưới Maintenance domain để khớp DOMAIN-MAP `api/v1/maintenance`.

## API-01 — List work orders

| | |
|--|--|
| Method / Path | `GET /api/v1/maintenance/work-orders` |
| Purpose | Paged catalog Công việc |
| Permission | `maintenance.work-orders.read` |
| Query | `search` · `status` · `workType` · `page` · `pageSize` (50/100/200/500) |
| Response | `ApiResponse<WorkOrderPagedResult>` |

## API-02 — GetById

| | |
|--|--|
| Method / Path | `GET /api/v1/maintenance/work-orders/{id}` |
| Purpose | View/Edit hydrate · XCO get_only |
| Permission | `maintenance.work-orders.read` |

## API-03 — Create

| | |
|--|--|
| Method / Path | `POST /api/v1/maintenance/work-orders` |
| Purpose | Create · IdCode `WO-yyyyMMdd-nnnn` |
| Permission | `maintenance.work-orders.create` |
| Body | CreateWorkOrderRequest (no Code) |

## API-04 — Update

| | |
|--|--|
| Method / Path | `PUT /api/v1/maintenance/work-orders/{id}` |
| Permission | `maintenance.work-orders.update` |

## API-05 — Soft delete

| | |
|--|--|
| Method / Path | `DELETE /api/v1/maintenance/work-orders/{id}` |
| Permission | `maintenance.work-orders.delete` |

## API-06 — Progress

| | |
|--|--|
| Method / Path | `POST /api/v1/maintenance/work-orders/{id}/progress` |
| Body | ProgressWorkOrderRequest (progressPercent · note?) |
| Effect | set ProgressPercent · Note · status new→in_progress |

## API-07 — Complete (nghiệm thu stub)

| | |
|--|--|
| Method / Path | `POST /api/v1/maintenance/work-orders/{id}/complete` |
| Effect | status=done · progress=100 |

## API-08 — Summary stub

| | |
|--|--|
| Method / Path | `GET /api/v1/maintenance/summary` |
| Purpose | KPI counts by status (Kind E stub) |
| Permission | `maintenance.work-orders.read` |

## Entity — WorkOrderEntity

Flat scalars — **cấm** parent JSON blob. Table `rmms_work_orders`.

Key columns: Code · Title · RouteName · WorkType · Status · TeamName · AssigneeName · DueAt · ProgressPercent · SlaHours · IncidentId · Description · Note · IsActive · CompanyCode · CreatedAt · UpdatedAt.

## BFF

Proxy-only `WorkOrdersBffController` → API paths trên. Keep health `MaintenanceBffController`.

## Migration

`Schema_RmmsWorkOrders` — table `rmms_work_orders` + indexes `(CompanyCode, Code)` unique · `(CompanyCode, DueAt)` · `(CompanyCode, Status, IsActive)`.

## Handoff → TL

- API-01…08 ids
- FE route `/maintenance`
- Perm codes `maintenance.work-orders.*`
- MFE `Linm.Web.RMMS.Maintenance`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.08.17 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-10T00:24:00.000Z |
| versionGate | rechecked |
