# SA — solution-discovery — ops

| Field | Value |
|-------|-------|
| feature | `ops` |
| status | `confirmed` (autopilot) |
| domain | **Notification** |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| solution_confirm | `approve` (autopilot · task_9c3e9db0) |
| updatedAt | 2026-08-10T02:14:00.000Z |

## Gates

| Gate | Value |
|------|-------|
| sa_tz_gate | **tz_na** (UTC store · display local FE) |
| sa_xco_gate | **xco_get_only** (GetById cross-company claim) |
| sa_shared_table | **share_tenant** (`NotificationEntity`) |

## Paths (LOCKED)

| Layer | Path |
|-------|------|
| API domain | `api/src/RMMS.Service.Api/Domains/Notification/` |
| Models | `api/domains/notification/LINM.RMMS.Notification.Models/DTOs/` |
| Entity | `api/shared/RMMS.Service.Persistence/Entities/NotificationEntity.cs` |
| BFF | `bff/domains/notification/LINM.RMMS.Notification.Bff/Controllers/` |
| Route prefix | **`api/v1/notification/inbox`** |
| Overview | **`api/v1/notification/overview`** |
| BFF prefix | **`web-bff/api/v1/notification/inbox`** · **`web-bff/api/v1/notification/overview`** |

**Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` · nhầm domain Ops riêng (slug `ops` → Notification).

## API-01 — List inbox

| | |
|--|--|
| Method / Path | `GET /api/v1/notification/inbox` |
| Purpose | Paged catalog chỉ đạo |
| Permission | `notification.inbox.read` |
| Query | `search` · `status` · `priority` · `type` · `unreadOnly` · `page` · `pageSize` (50/100/200/500) |
| Response | `ApiResponse<NotificationPagedResult>` |
| Context | `features/ops.md` §3 |
| Demo | `ops/ops.html` list |
| data-import | N/A |

## API-02 — GetById

| | |
|--|--|
| Method / Path | `GET /api/v1/notification/inbox/{id}` |
| Purpose | View/Edit hydrate · XCO get_only |
| Permission | `notification.inbox.read` |

## API-03 — Create / Send

| | |
|--|--|
| Method / Path | `POST /api/v1/notification/inbox` |
| Purpose | Create · IdCode `OPS-yyyyMMdd-nnnn` · status da-gui (or nhap if draft) |
| Permission | `notification.inbox.create` |
| Body | CreateNotificationRequest (no Code) |

## API-04 — Update

| | |
|--|--|
| Method / Path | `PUT /api/v1/notification/inbox/{id}` |
| Permission | `notification.inbox.update` |

## API-05 — Soft delete

| | |
|--|--|
| Method / Path | `DELETE /api/v1/notification/inbox/{id}` |
| Permission | `notification.inbox.delete` |

## API-06 — Mark read

| | |
|--|--|
| Method / Path | `POST /api/v1/notification/inbox/{id}/mark-read` |
| Effect | IsUnread=false |

## API-07 — Mark all read

| | |
|--|--|
| Method / Path | `POST /api/v1/notification/inbox/mark-all-read` |
| Effect | all active unread → read |

## API-08 — Overview KPI

| | |
|--|--|
| Method / Path | `GET /api/v1/notification/overview` |
| Response | staffOnline · openIncidents · woInProgress · unread (seed/aggregate stub OK for P1) |

## Entity — NotificationEntity

Flat scalars — **cấm** parent JSON blob. Table `rmms_notifications`.

Key columns: Code · Title · Body · Recipient · Priority · Type · Status · Channel · Sender · LinkRef · Reply · SentAt · IsUnread · IsActive · CompanyCode · CreatedAt · UpdatedAt.

## BFF

Proxy-only `NotificationInboxBffController` + `NotificationOverviewBffController` → API paths trên. Keep health `NotificationBffController`.

## Migration

`Schema_RmmsNotifications` — table `rmms_notifications` + indexes `(CompanyCode, Code)` unique · `(CompanyCode, SentAt)` · `(CompanyCode, Status, IsActive)` · `(CompanyCode, IsUnread, IsActive)`.

## Handoff → TL

- API-01…08 ids
- FE route `/ops`
- Perm codes `notification.inbox.*`
- MFE `Linm.Web.RMMS.Notification`
- SignalR OpsHub DEFER P2

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.08.17 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-10T02:14:00.000Z |
| versionGate | rechecked |
