# BFF endpoints — mnt-log (mobile · Nhật ký xử lý)

| | |
|---|---|
| feature | `mnt-log` |
| bff | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all |
| prefix | `mobile-bff/api/v1` |
| package | proxy catch-all |
| downstream | `ApiBase` → `RMMS.Service.Api` · Maintenance domain |
| cite | CTX `mnt-log.md` · live `WorkOrdersController.GetById` · `WorkOrderDto` · demo `#sc-mnt-log` |
| taskId | `task_6e7aa15d` |
| **cấm** | invent `api/v1/mnt-log` · invent `…/logs` · invent `…/progress-history` · invent comment GET · ERP.* · app `:5101` · DbContext trên BFF · `mfeStdUrl` |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix.

## Như thế nào (skill step 6)

| Tầng | Repo / package | App có biết? |
|------|----------------|--------------|
| UI | iOS + Android | Có — `{BffPrefix}` |
| BFF host | `Linm.RMMS.Mobile.Bff` | Có — một host |
| Domain API | `RMMS.Service.Api` · Maintenance | **Không** — proxy rewrite |
| Dedicated Mobile LogController | **không** | catch-all proxy · **cấm invent** |

Canonical path: `api/v1/maintenance/work-orders/{id}` — **không** legacy flat `/api/v1/work-orders/{id}`.

## Table — `#sc-mnt-log` · entry `#i-list`

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|---------------|--------|--------------------|-----|------------|--------|-----|
| **Load nhật ký + header** | GET | `maintenance/work-orders/{id}` | proxy | `WorkOrdersController.GetById` | nav arg id | **primary** · derive timeline |
| Init status labels (opt) | GET | `maintenance/work-orders/init-data` | proxy | `GetInitData` | status map | display · opt |
| Timeline rows UI | — | — | — | **client derive** từ `WorkOrderDto` | CTX derive table | **CLOSED P1** HIST |
| History list API | — | — | — | **không live** · DEFER | CTX | **cấm invent** |
| Comments | — | — | — | **DEFER** | `mnt-chat` | CMT-01 |
| Nav back | — | — | — | local | `mnt-list` | **không** API |
| Toast err | — | — | — | UI | after GET fail | **cấm** fake |

## DTO bind (live) — `WorkOrderDto`

| Field | Mobile P1 bind |
|-------|----------------|
| `Id` / `Code` / `Title` | header `#wo-*` |
| `Status` | badge → VN map |
| `CreatedAt` | timeline · created |
| `DueAt` | timeline · due |
| `Description` | timeline · description |
| `ProgressPercent` | timeline · progress |
| `Note` | timeline · note |
| `UpdatedAt` | at cho progress / note / done |
| `TeamName` / `AssigneeName` / `RouteName` / `IncidentId` | opt subtitle (Design) |

**Cấm** app fork DTO khác BFF table · **cấm** invent history collection trước SA Signed.

## Có trên domain — **không** thuộc slug `mnt-log` P1

| Method | Path | Ghi |
|--------|------|-----|
| GET | `maintenance/work-orders` | list — `mnt-list` |
| POST | `maintenance/work-orders/{id}/progress` | `mnt-progress` |
| POST | `maintenance/work-orders/{id}/complete` | `mnt-progress` |
| POST | `…/comments` | **DEFER** · `mnt-chat` |
| GET | `…/logs` / `…/progress-history` | **MISSING** — **cấm invent** |
| Web | `web-bff/api/v1/maintenance/**` | mobile = `mobile-bff` |

## Verify live (không invent)

| Check | Result |
|-------|--------|
| `WorkOrdersController` | `[Route("api/v1/maintenance/work-orders")]` · `[HttpGet("{id:guid}")]` · **không** comments/logs |
| `WorkOrderDto` | Signed fields đủ derive P1 |
| Mobile.Bff `maintenance/*` | proxy catch-all |
| Step 4b | **N/A** ở role analy |

## Cấm

- App biết RMMS `:5101` trực tiếp  
- Invent `GET mnt-log` / `…/logs`  
- Fake timeline khi 404/network fail  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.31.2 |
| schemaVersion | 2 |
| workflowVersion | 2026.09.19.2 |
| rulesVersion | 2026.09.19.5 |
| generatedAt | 2026-09-19T13:38:11.000Z |
| versionGate | recheck_new |
| contentHash | sha256:5c74f801620d6dabea7e29b3591c3298a358205a64070a14c4d371d3098a3dd3 |
| bffContentHash | sha256:maintenance-work-orders-getbyid-proxy-passthrough |
| taskId | `task_6e7aa15d` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.31.2 schemaVersion=2 workflowVersion=2026.09.19.2 rulesVersion=2026.09.19.5 versionGate=recheck_new -->
