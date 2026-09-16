# BFF endpoints — mnt-list (mobile list · Công việc)

| | |
|---|---|
| feature | `mnt-list` |
| bff | `Linm.RMMS.Mobile.Bff` · `bff/src/RMMS.Mobile.Bff` |
| prefix | `mobile-bff/api/v1` |
| package | proxy `MobileApiProxyController` catch-all |
| downstream | `ApiBase` → `RMMS.Service.Api` · Maintenance domain |
| verify | CTX `maintenance.md` §3 · `WorkOrdersController` · DOMAIN-MAP Maintenance · `docs/bff-route-map.md` `maintenance/*` |
| **cấm** | invent path · app gọi `:5101` · DbContext trên BFF · ERP.* · Domains/Master |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix.

## Như thế nào (skill step 6)

| Tầng | Repo / package | App có biết? |
|------|----------------|--------------|
| UI | iOS + Android | Có — `{BffPrefix}` |
| BFF host | `Linm.RMMS.Mobile.Bff` | Có — một host |
| Domain API | `RMMS.Service.Api` · Maintenance | **Không** — proxy rewrite |
| Dedicated Mobile MaintenanceController | **không** | catch-all proxy |

## Table — list `#sc-mnt-list`

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|---------------|--------|--------------------|-----|------------|--------|-----|
| WO list | GET | `maintenance/work-orders` | proxy | `WorkOrdersController` | `api/v1/maintenance/work-orders` · search/status/workType/page/pageSize | list cards |
| Init lookup (opt filter P2) | GET | `maintenance/work-orders/init-data` | proxy | same | status/workType options | filter sheet P2 |
| Nav hub estimate | — | — | — | local nav | `go('estimate')` | **không** API slug này |
| Nav back | — | — | — | local nav | `home` | **không** API |
| Filter / search UI | — | — | — | local | toast / client filter | **không** API P1 |

## Query (list) — passthrough

`search` · `status` · `workType` · `page` · `pageSize`  
Mobile P1: `page=1` · `pageSize=50` · search client-side OK nếu BE search trống.

## Có trên domain — **không** thuộc slug `mnt-list` P1 (sibling / web)

| Method | Path | Ghi |
|--------|------|-----|
| GET/PUT/DELETE | `maintenance/work-orders/{id}` | detail/form — web / sibling |
| POST | `maintenance/work-orders` | create — web / estimate flow |
| POST | `maintenance/work-orders/{id}/progress` | sibling `mnt-progress` toast P1 |
| POST | `maintenance/work-orders/{id}/complete` | nghiệm thu stub P2 |
| POST | `maintenance/work-orders/{id}/comments` | **DEFER** · sibling `mnt-chat` |
| GET | `maintenance/summary` | Kind E KPI — **OUT** mobile list |
| Web `web-bff/api/v1/maintenance/**` | — | web BFF · mobile = `mobile-bff` proxy |

## Verify live (không invent)

| Check | Result |
|-------|--------|
| `WorkOrdersController` | `[Route("api/v1/maintenance/work-orders")]` GET list · init-data · CRUD · progress · complete |
| Mobile.Bff `maintenance/*` | proxy catch-all · `docs/bff-route-map.md` |
| DOMAIN-MAP | Maintenance · **cấm** ERP.* |
| Step 4b | **N/A** — reuse Signed endpoints |

## Cấm

- App biết RMMS `:5101` trực tiếp  
- DbContext trên Mobile.Bff  
- Invent `GET mnt-list` / mobile-only WO DTO fork  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-28T18:45:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:mnt-list-mobile-bff-20260828 |
| bffContentHash | sha256:maintenance-work-orders-proxy-passthrough |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
