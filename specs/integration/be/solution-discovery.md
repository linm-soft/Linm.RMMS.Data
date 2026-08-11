# SA — solution-discovery — integration

| Field | Value |
|-------|-------|
| feature | `integration` |
| status | `confirmed` (autopilot) |
| domain | **Integration** |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| solution_confirm | `approve` (autopilot · task_805cde43) |
| updatedAt | 2026-08-09T16:34:00.000Z |

## Gates

| Gate | Value |
|------|-------|
| sa_tz_gate | **tz_na** (UTC store · display local FE) |
| sa_xco_gate | **xco_get_only** (SyncJob GetById) |
| sa_shared_table | **share_tenant** (`SyncJobEntity` · `PartnerAdapterEntity`) |

## Paths (LOCKED)

| Layer | Path |
|-------|------|
| API domain | `api/src/RMMS.Service.Api/Domains/Integration/` |
| Models | `api/domains/integration/LINM.RMMS.Integration.Models/DTOs/IntegrationHubDtos.cs` |
| Entity | `SyncJobEntity` · `PartnerAdapterEntity` |
| BFF | `bff/domains/integration/LINM.RMMS.Integration.Bff/Controllers/` |
| Route prefix | **`api/v1/integration`** |
| BFF prefix | **`web-bff/api/v1/integration`** |

**Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*`.

## APIs

| ID | Method / Path | Purpose |
|----|---------------|---------|
| API-01 | `GET /api/v1/integration/health` | Health (+ adapter summary) |
| API-02 | `GET /api/v1/integration/endpoints` | OpenAPI endpoint catalog |
| API-03 | `GET /api/v1/integration/sync-jobs` | Paged sync jobs |
| API-04 | `GET /api/v1/integration/sync-jobs/{id}` | Detail + log |
| API-05 | `POST /api/v1/integration/sync-jobs` | Create job |
| API-06 | `POST /api/v1/integration/sync-jobs/{id}/retry` | Retry failed/running |
| API-07 | `GET /api/v1/integration/partners` | Partner adapters |
| API-08 | `POST /api/v1/integration/partners/{id}/toggle` | Enable/disable |
| API-09 | `POST /api/v1/integration/assets/import` | Import → SyncJob |
| API-10 | `POST /api/v1/integration/sync/offline-batch` | Offline batch → SyncJob |

## Entities

**SyncJobEntity** `rmms_sync_jobs` — Code SYNC-* · SyncType · Partner · Status · RecordCount · timestamps · Error · LogJson · import fields · tenant.

**PartnerAdapterEntity** `rmms_partner_adapters` — Name · SystemType · Auth · Health · Enabled · Phase · tenant.

**Persist:** flat scalars — **cấm** parent JSON blob (LogJson = string column only).

## BFF

Proxy-only SyncJobs / Partners / Hub (endpoints · import · offline-batch).

## Migration

`Schema_RmmsIntegrationHub` — tables + indexes CompanyCode.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.09.02 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-09T16:34:00.000Z |
| versionGate | rechecked |
