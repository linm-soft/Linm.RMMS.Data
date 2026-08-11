# SA — solution-discovery — citizen

| Field | Value |
|-------|-------|
| feature | `citizen` |
| status | `confirmed` (autopilot) |
| domain | **Integration** |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| solution_confirm | `approve` (autopilot · task_ae6e4e92) |
| updatedAt | 2026-08-09T14:43:00.000Z |

## Gates

| Gate | Value |
|------|-------|
| sa_tz_gate | **tz_na** (UTC store · display local FE) |
| sa_xco_gate | **xco_get_only** (GetById cross-company claim) |
| sa_shared_table | **share_tenant** (`CitizenIncidentEntity`) |

## Paths (LOCKED)

| Layer | Path |
|-------|------|
| API domain | `api/src/RMMS.Service.Api/Domains/Integration/` |
| Models | `api/domains/integration/LINM.RMMS.Integration.Models/DTOs/` |
| Entity | `api/shared/RMMS.Service.Persistence/Entities/CitizenIncidentEntity.cs` |
| BFF | `bff/domains/integration/LINM.RMMS.Integration.Bff/Controllers/` |
| Route prefix | **`api/v1/integration/citizen-incidents`** |
| Public | **`api/v1/public/incidents`** |
| Alias | **`api/v1/citizen/incident`** |
| BFF prefix | **`web-bff/api/v1/integration/citizen-incidents`** |

**Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*`.

## API-01 — List citizen incidents

| | |
|--|--|
| Method / Path | `GET /api/v1/integration/citizen-incidents` |
| Purpose | Paged catalog inbox |
| Permission | `integration.citizen-incidents.read` |
| Query | `search` · `status` · `page` · `pageSize` (50/100/200/500) |
| Response | `ApiResponse<CitizenIncidentPagedResult>` |
| Context | `features/citizen.md` §3 |
| Demo | `integration/citizen.html` recent table |
| data-import | N/A (synthetic · no Excel this pack) |

## API-02 — GetById

| | |
|--|--|
| Method / Path | `GET /api/v1/integration/citizen-incidents/{id}` |
| Purpose | View/Edit hydrate · XCO get_only |
| Permission | `integration.citizen-incidents.read` |

## API-03 — Create

| | |
|--|--|
| Method / Path | `POST /api/v1/integration/citizen-incidents` |
| Purpose | Manual / operator create · IdCode `CIT-yyyyMMdd-nnnn` |
| Permission | `integration.citizen-incidents.create` |
| Body | CreateCitizenIncidentRequest (no trackingCode) |

## API-04 — Update

| | |
|--|--|
| Method / Path | `PUT /api/v1/integration/citizen-incidents/{id}` |
| Permission | `integration.citizen-incidents.update` |

## API-05 — Soft delete

| | |
|--|--|
| Method / Path | `DELETE /api/v1/integration/citizen-incidents/{id}` |
| Permission | `integration.citizen-incidents.delete` |

## API-06 — Public create

| | |
|--|--|
| Method / Path | `POST /api/v1/public/incidents` (+ alias `POST /api/v1/citizen/incident`) |
| Purpose | Citizen report · rate-limit stub P1 |
| Permission | anonymous / temp token stub |

## API-07 — Public track

| | |
|--|--|
| Method / Path | `GET /api/v1/public/incidents/{trackingCode}` |
| Purpose | Theo dõi xử lý by mã |

## Entity — CitizenIncidentEntity

| Column | Type | Notes |
|--------|------|-------|
| Id | uuid PK | |
| CompanyCode | varchar(64) | tenant filter |
| TrackingCode | varchar(64) | unique per company · CIT-* |
| ReporterName / Phone / Email | varchar | PII scalars (enc DEFER) |
| IncidentType | varchar(64) | |
| Description | varchar(4000) | |
| Address / Road / Chainage | varchar? | |
| Lat / Lng | decimal(12,8) | |
| Status | varchar(64) | |
| Source | varchar(32) | default `citizen` |
| ReportedAt | timestamptz | |
| MediaMeta | varchar(2000)? | filenames stub |
| IsActive | bool | soft delete |
| CreatedAt / UpdatedAt | timestamptz | |

**Persist:** flat scalars — **cấm** parent JSON inventory field (MediaMeta = optional string only).

## BFF

Proxy-only `CitizenIncidentsBffController` → API paths trên. No business logic.

## Migration

`Schema_RmmsCitizenIncidents` — table `rmms_citizen_incidents` + indexes `(CompanyCode, TrackingCode)` unique · `(CompanyCode, ReportedAt)`.

## Handoff → TL

- API-01…07 ids
- FE route `/integration/citizen`
- Perm codes `integration.citizen-incidents.*`
- MFE `Linm.Web.RMMS.Integration`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.08.17 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.08.31 |
| rulesVersion | 2026.08.08.31 |
| generatedAt | 2026-08-09T14:43:00.000Z |
| versionGate | rechecked |
