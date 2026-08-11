# SA — solution-discovery — incident

| Field | Value |
|-------|-------|
| feature | `incident` |
| status | `confirmed` (autopilot) |
| domain | **Incident** |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| solution_confirm | `approve` (autopilot · task_ddc8f330) |
| updatedAt | 2026-08-09T16:25:00.000Z |

## Gates

| Gate | Value |
|------|-------|
| sa_tz_gate | **tz_na** (UTC store · display local FE) |
| sa_xco_gate | **xco_get_only** (GetById cross-company claim) |
| sa_shared_table | **share_tenant** (`IncidentEntity`) |

## Paths (LOCKED)

| Layer | Path |
|-------|------|
| API domain | `api/src/RMMS.Service.Api/Domains/Incident/` |
| Models | `api/domains/incident/LINM.RMMS.Incident.Models/DTOs/` |
| Entity | `api/shared/RMMS.Service.Persistence/Entities/IncidentEntity.cs` |
| BFF | `bff/domains/incident/LINM.RMMS.Incident.Bff/Controllers/` |
| Route prefix | **`api/v1/incident/incidents`** |
| BFF prefix | **`web-bff/api/v1/incident/incidents`** |

**Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` · nhầm `citizen-incidents`.

## API-01 — List incidents

| | |
|--|--|
| Method / Path | `GET /api/v1/incident/incidents` |
| Purpose | Paged catalog Vấn đề |
| Permission | `incident.incidents.read` |
| Query | `search` · `status` · `severity` · `page` · `pageSize` (50/100/200/500) |
| Response | `ApiResponse<IncidentPagedResult>` |
| Context | `features/incident.md` §3 |
| Demo | `incident/incident.html` list |
| data-import | N/A |

## API-02 — GetById

| | |
|--|--|
| Method / Path | `GET /api/v1/incident/incidents/{id}` |
| Purpose | View/Edit hydrate · XCO get_only |
| Permission | `incident.incidents.read` |

## API-03 — Create

| | |
|--|--|
| Method / Path | `POST /api/v1/incident/incidents` |
| Purpose | Create · IdCode `VD-yyyyMMdd-nnnn` |
| Permission | `incident.incidents.create` |
| Body | CreateIncidentRequest (no Code) |

## API-04 — Update

| | |
|--|--|
| Method / Path | `PUT /api/v1/incident/incidents/{id}` |
| Permission | `incident.incidents.update` |

## API-05 — Soft delete

| | |
|--|--|
| Method / Path | `DELETE /api/v1/incident/incidents/{id}` |
| Permission | `incident.incidents.delete` |

## API-06 — Assign

| | |
|--|--|
| Method / Path | `POST /api/v1/incident/incidents/{id}/assign` |
| Body | AssignIncidentRequest (assigneeName · note?) |
| Effect | set AssigneeName · status new→in_progress |

## API-07 — Close

| | |
|--|--|
| Method / Path | `POST /api/v1/incident/incidents/{id}/close` |
| Effect | status=closed |

## Entity — IncidentEntity

Flat scalars — **cấm** parent JSON blob. Table `rmms_incidents`.

Key columns: Code · Title · RouteName · IncidentType · Status · Severity · RequestedAt · DetectionId · Description · CausesCongestion · HasGps · AssigneeName · IsActive · CompanyCode · CreatedAt · UpdatedAt.

## BFF

Proxy-only `IncidentsBffController` → API paths trên. Keep health `IncidentBffController`.

## Migration

`Schema_RmmsIncidents` — table `rmms_incidents` + indexes `(CompanyCode, Code)` unique · `(CompanyCode, RequestedAt)` · `(CompanyCode, Status, IsActive)`.

## Handoff → TL

- API-01…07 ids
- FE route `/incident`
- Perm codes `incident.incidents.*`
- MFE `Linm.Web.RMMS.Incident`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.08.17 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-09T16:25:00.000Z |
| versionGate | rechecked |
