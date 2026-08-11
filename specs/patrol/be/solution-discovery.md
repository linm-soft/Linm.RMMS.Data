# SA — solution-discovery — patrol

| Field | Value |
|-------|-------|
| feature | `patrol` |
| status | `confirmed` (autopilot) |
| domain | **Patrol** |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| solution_confirm | `approve` (autopilot · task_760475f2) |
| updatedAt | 2026-08-10T01:34:00.000Z |

## Gates

| Gate | Value |
|------|-------|
| sa_tz_gate | **tz_na** (UTC store · display local FE) |
| sa_xco_gate | **xco_get_only** (GetById cross-company claim) |
| sa_shared_table | **share_tenant** (`PatrolSessionEntity`) |

## Paths (LOCKED)

| Layer | Path |
|-------|------|
| API domain | `api/src/RMMS.Service.Api/Domains/Patrol/` |
| Models | `api/domains/patrol/LINM.RMMS.Patrol.Models/DTOs/` |
| Entity | `api/shared/RMMS.Service.Persistence/Entities/PatrolSessionEntity.cs` |
| BFF | `bff/domains/patrol/LINM.RMMS.Patrol.Bff/Controllers/` |
| Route prefix | **`api/v1/patrol/sessions`** |
| BFF prefix | **`web-bff/api/v1/patrol/sessions`** |

**Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*`.

## API-01 — List patrol sessions

| | |
|--|--|
| Method / Path | `GET /api/v1/patrol/sessions` |
| Purpose | Paged catalog list |
| Permission | `patrol.sessions.read` |
| Query | `search` · `status` · `page` · `pageSize` (50/100/200/500) |
| Response | `ApiResponse<PatrolSessionPagedResult>` |
| Context | `features/patrol.md` §3 (aligned under DOMAIN-MAP `api/v1/patrol`) |
| Demo | `patrol/patrol.html` giám sát list summary |
| data-import | N/A (synthetic · no Excel this pack) |

## API-02 — GetById

| | |
|--|--|
| Method / Path | `GET /api/v1/patrol/sessions/{id}` |
| Purpose | View/Edit hydrate · XCO get_only |
| Permission | `patrol.sessions.read` |

## API-03 — Create

| | |
|--|--|
| Method / Path | `POST /api/v1/patrol/sessions` |
| Purpose | Manual session · IdCode `TD-yyyyMMdd-nnn` |
| Permission | `patrol.sessions.create` |
| Body | CreatePatrolSessionRequest (no code) |

## API-04 — Update

| | |
|--|--|
| Method / Path | `PUT /api/v1/patrol/sessions/{id}` |
| Permission | `patrol.sessions.update` |

## API-05 — Soft delete

| | |
|--|--|
| Method / Path | `DELETE /api/v1/patrol/sessions/{id}` |
| Permission | `patrol.sessions.delete` |

## Entity — PatrolSessionEntity

| Column | Type | Notes |
|--------|------|-------|
| Id | uuid PK | |
| CompanyCode | varchar(64) | tenant filter |
| Code | varchar(64) | unique per company |
| UserName | varchar(128) | |
| Route | varchar(64) | |
| PatrolType | varchar(32) | Tuần đường / Tuần kiểm |
| PlannedDate | date | |
| StartedAt | timestamptz? | |
| CheckInCount | int | ≥0 |
| CoveragePercent | decimal(5,2) | 0–100 |
| Status | varchar(64) | |
| OfflineQueued | bool | |
| Note | varchar(2000)? | |
| IsActive | bool | soft delete |
| CreatedAt / UpdatedAt | timestamptz | |

**Persist:** flat scalars — **cấm** parent JSON inventory field.

## BFF

Proxy-only `PatrolSessionsBffController` → API paths trên. No business logic.

## Migration

`Schema_RmmsPatrolSessions` — table `rmms_patrol_sessions` + indexes `(CompanyCode, Code)` unique · `(CompanyCode, PlannedDate)`.

## Out of pack (P2)

- `check-ins` · `tracks` · `coverage` compute · `kpi` — keep context DoD; not this list pack.

## Handoff → TL

- API-01…05 ids
- FE route `/patrol`
- Perm codes `patrol.sessions.*`
- MFE `Linm.Web.RMMS.Patrol`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.08.17 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.08.31 |
| rulesVersion | 2026.08.08.31 |
| generatedAt | 2026-08-10T01:34:00.000Z |
| versionGate | rechecked |
