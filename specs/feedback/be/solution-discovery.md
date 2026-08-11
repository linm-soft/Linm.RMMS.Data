# SA — solution-discovery — feedback

| Field | Value |
|-------|-------|
| feature | `feedback` |
| status | `confirmed` (autopilot) |
| domain | **Integration** |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| solution_confirm | `approve` (autopilot · task_d242eb29) |
| updatedAt | 2026-08-09T16:01:00.000Z |

## Gates

| Gate | Value |
|------|-------|
| sa_tz_gate | **tz_na** (UTC store · display local FE) |
| sa_xco_gate | **xco_get_only** (GetById cross-company claim) |
| sa_shared_table | **share_tenant** (`AppFeedbackEntity`) |

## Paths (LOCKED)

| Layer | Path |
|-------|------|
| API domain | `api/src/RMMS.Service.Api/Domains/Integration/` |
| Models | `api/domains/integration/LINM.RMMS.Integration.Models/DTOs/` |
| Entity | `api/shared/RMMS.Service.Persistence/Entities/AppFeedbackEntity.cs` |
| BFF | `bff/domains/integration/LINM.RMMS.Integration.Bff/Controllers/` |
| Route prefix | **`api/v1/integration/feedbacks`** |
| BFF prefix | **`web-bff/api/v1/integration/feedbacks`** |

**Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*`.

## API-01 — List app feedbacks

| | |
|--|--|
| Method / Path | `GET /api/v1/integration/feedbacks` |
| Purpose | Paged catalog inbox |
| Permission | `integration.feedbacks.read` |
| Query | `search` · `status` · `page` · `pageSize` (50/100/200/500) |
| Response | `ApiResponse<AppFeedbackPagedResult>` |
| Context | `features/feedback.md` §3 |
| Demo | `integration/feedback.html` sent list |
| data-import | N/A |

## API-02 — GetById

| | |
|--|--|
| Method / Path | `GET /api/v1/integration/feedbacks/{id}` |
| Purpose | View/Edit hydrate · XCO get_only |
| Permission | `integration.feedbacks.read` |

## API-03 — Create

| | |
|--|--|
| Method / Path | `POST /api/v1/integration/feedbacks` |
| Purpose | Submit / save draft · IdCode `FB-yyyyMMdd-nnnn` |
| Permission | `integration.feedbacks.create` |
| Body | CreateAppFeedbackRequest (no Code) |

## API-04 — Update

| | |
|--|--|
| Method / Path | `PUT /api/v1/integration/feedbacks/{id}` |
| Permission | `integration.feedbacks.update` |

## API-05 — Soft delete

| | |
|--|--|
| Method / Path | `DELETE /api/v1/integration/feedbacks/{id}` |
| Permission | `integration.feedbacks.delete` |

## Entity — AppFeedbackEntity

| Column | Type | Notes |
|--------|------|-------|
| Id | uuid PK | |
| CompanyCode | varchar(64) | tenant filter |
| Code | varchar(64) | unique per company · FB-* |
| SenderName | varchar(256) | |
| UserId | varchar(64)? | optional |
| Role | varchar(64) | tuan-duong / quan-ly / tuan-kiem |
| Category | varchar(64) | loi / de-xuat / ux / khac |
| Body | varchar(4000) | required |
| Status | varchar(32) | draft / sent |
| SubmittedAt | timestamptz | |
| IsActive | bool | soft delete |
| CreatedAt / UpdatedAt | timestamptz | |

**Persist:** flat scalars — **cấm** parent JSON blob.

## BFF

Proxy-only `AppFeedbacksBffController` → API paths trên. No business logic.

## Migration

`Schema_RmmsAppFeedbacks` — table `rmms_app_feedbacks` + indexes `(CompanyCode, Code)` unique · `(CompanyCode, SubmittedAt)`.

## Handoff → TL

- API-01…05 ids
- FE route `/integration/feedback`
- Perm codes `integration.feedbacks.*`
- MFE `Linm.Web.RMMS.Integration`

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.08.17 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-09T16:01:00.000Z |
| versionGate | rechecked |
