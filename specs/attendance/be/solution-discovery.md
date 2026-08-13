# SA — solution-discovery — attendance

| Field | Value |
|-------|-------|
| feature | `attendance` |
| status | `confirmed` (autopilot) |
| domain | **Patrol** |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| solution_confirm | `approve` (autopilot · task_b83eaaf1) |
| updatedAt | 2026-08-09T01:57:00.000Z |

## Gates

| Gate | Value |
|------|-------|
| sa_tz_gate | **tz_na** (UTC store · display local FE) |
| sa_xco_gate | **xco_get_only** (GetById cross-company claim) |
| sa_shared_table | **share_tenant** (`AttendanceLogEntity`) |

## Paths (LOCKED)

| Layer | Path |
|-------|------|
| API domain | `api/src/RMMS.Service.Api/Domains/Patrol/` |
| Models | `api/domains/patrol/LINM.RMMS.Patrol.Models/DTOs/` |
| Entity | `api/shared/RMMS.Service.Persistence/Entities/AttendanceLogEntity.cs` |
| BFF | `bff/domains/patrol/LINM.RMMS.Patrol.Bff/Controllers/` |
| Route prefix | **`api/v1/patrol/attendance-logs`** |
| BFF prefix | **`web-bff/api/v1/patrol/attendance-logs`** |

**Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*`.

## API-01 — List attendance logs

| | |
|--|--|
| Method / Path | `GET /api/v1/patrol/attendance-logs` |
| Purpose | Paged catalog list |
| Permission | `patrol.attendance-logs.read` |
| Query | `search` · `status` · `page` · `pageSize` (50/100/200/500) |
| Response | `ApiResponse<AttendanceLogPagedResult>` |
| Context | `features/attendance.md` §3 |
| Demo | `patrol/attendance.html` summary grid |
| data-import | N/A (synthetic · no Excel this pack) |

## API-02 — GetById

| | |
|--|--|
| Method / Path | `GET /api/v1/patrol/attendance-logs/{id}` |
| Purpose | View/Edit hydrate · XCO get_only |
| Permission | `patrol.attendance-logs.read` |

## API-03 — Create

| | |
|--|--|
| Method / Path | `POST /api/v1/patrol/attendance-logs` |
| Purpose | Manual / adjust log · IdCode `CC-yyyyMMdd-nnn` |
| Permission | `patrol.attendance-logs.create` |
| Body | CreateAttendanceLogRequest (no code) |

## API-04 — Update

| | |
|--|--|
| Method / Path | `PUT /api/v1/patrol/attendance-logs/{id}` |
| Permission | `patrol.attendance-logs.update` |

## API-05 — Soft delete

| | |
|--|--|
| Method / Path | `DELETE /api/v1/patrol/attendance-logs/{id}` |
| Permission | `patrol.attendance-logs.delete` |

## Entity — AttendanceLogEntity

| Column | Type | Notes |
|--------|------|-------|
| Id | uuid PK | |
| CompanyCode | varchar(64) | tenant filter |
| Code | varchar(64) | unique per company |
| UserName | varchar(128) | |
| Route | varchar(64) | |
| CheckInAt | timestamptz | |
| KmPoint | varchar(32)? | |
| Lat / Lng | decimal(12,8) | |
| InZone | bool | |
| Status | varchar(64) | |
| Note | varchar(2000)? | |
| IsActive | bool | soft delete |
| CreatedAt / UpdatedAt | timestamptz | |

**Persist:** flat scalars — **cấm** parent JSON inventory field.

## BFF

Proxy-only `AttendanceLogsBffController` → API paths trên. No business logic.

## Migration

`Schema_RmmsAttendanceLogs` — table `rmms_attendance_logs` + indexes `(CompanyCode, Code)` unique · `(CompanyCode, CheckInAt)`.

## Handoff → TL

- API-01…05 ids
- FE route `/patrol/attendance`
- Perm codes `patrol.attendance-logs.*`
- MFE `Linm.Web.RMMS.Field`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.08.17 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.08.31 |
| rulesVersion | 2026.08.08.31 |
| generatedAt | 2026-08-09T01:57:00.000Z |
| versionGate | rechecked |
