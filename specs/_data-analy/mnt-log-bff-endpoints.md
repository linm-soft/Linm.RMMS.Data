# BFF endpoints — mnt-log (mobile · Nhật ký xử lý)

| | |
|---|---|
| feature | `mnt-log` |
| bff | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all |
| prefix | `mobile-bff/api/v1` |
| package | proxy catch-all |
| downstream | `ApiBase` → `RMMS.Service.Api` · Maintenance domain |
| cite | CTX `mnt-log.md` · `maintenance.md` · live `WorkOrdersController.GetById` · `WorkOrderDto` · DOMAIN-MAP Maintenance · `docs/bff-route-map.md` `maintenance/*` · demo toast `#i-list` |
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
| Timeline rows UI | — | — | — | **client derive** từ `WorkOrderDto` | CTX derive table | **GAP-MOB-MNT-LOG-HIST-01** |
| History list API | — | — | — | **không live** | CTX `WorkOrderProgress` | **GAP** · **cấm invent** |
| Comments | — | — | — | **DEFER** | `mnt-chat` | **GAP-MOB-MNT-LOG-CMT-01** |
| Nav back | — | — | — | local | `mnt-list` | **không** API |
| Toast err | — | — | — | UI | after GET fail | **không** API · **cấm** fake |

## DTO bind (live) — `WorkOrderDto`

| Field | Mobile P1 bind |
|-------|----------------|
| `Id` / `Code` / `Title` | header |
| `Status` | badge → VN map |
| `CreatedAt` | timeline · created |
| `DueAt` | timeline · due |
| `Description` | timeline · description (nếu có) |
| `ProgressPercent` | timeline · progress |
| `Note` | timeline · note |
| `UpdatedAt` | at cho progress / note / done |
| `TeamName` / `AssigneeName` / `RouteName` / `IncidentId` | opt subtitle header (Design) |

**Cấm** app fork DTO khác BFF table · **cấm** invent history collection trên response trước khi SA Signed.

## Query

List `maintenance/work-orders` — sibling `mnt-list` — **OUT** slug này (entry đã có `id`).

## Có trên domain — **không** thuộc slug `mnt-log` P1

| Method | Path | Ghi |
|--------|------|-----|
| GET | `maintenance/work-orders` | list — `mnt-list` |
| POST | `maintenance/work-orders/{id}/progress` | write — `mnt-progress` |
| POST | `maintenance/work-orders/{id}/complete` | write — `mnt-progress` |
| POST | `…/comments` | **DEFER** · `mnt-chat` · **không** live controller |
| GET | `…/logs` / `…/progress-history` | **MISSING** — **cấm invent** · GAP HIST |
| GET | `maintenance/summary` | Kind E — **OUT** |
| Web | `web-bff/api/v1/maintenance/**` | web BFF · mobile = `mobile-bff` |

## Verify live (không invent)

| Check | Result |
|-------|--------|
| `WorkOrdersController` | `[Route("api/v1/maintenance/work-orders")]` · `[HttpGet("{id:guid}")]` · **không** comments/logs |
| `WorkOrderDto` | Signed fields đủ derive P1 |
| Mobile.Bff `maintenance/*` | proxy catch-all · `docs/bff-route-map.md` |
| DOMAIN-MAP | Maintenance · **cấm** ERP.* |
| Step 4b | **N/A** ở role analy — reuse GetById · history API = SA GAP sau |

## Cấm

- App biết RMMS `:5101` trực tiếp  
- DbContext trên Mobile.Bff  
- Invent `GET mnt-log` / `…/logs` / mobile-only history path  
- Bind `mfeStdUrl`  
- Fake timeline khi 404/network fail  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T07:13:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:mnt-log-mobile-bff-20260829 |
| bffContentHash | sha256:maintenance-work-orders-getbyid-proxy-passthrough |
| taskId | `task_60cc0721` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
