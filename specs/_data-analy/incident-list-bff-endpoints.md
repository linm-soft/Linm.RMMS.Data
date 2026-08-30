# BFF endpoints — incident-list (mobile list · Vấn đề)

| | |
|---|---|
| feature | `incident-list` |
| bff | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all |
| prefix | `mobile-bff/api/v1` |
| downstream | `ApiBase` → `RMMS.Service.Api` · Incident domain |
| source | CTX `incident-list.md` · `incident.md` · `IncidentsController` · DOMAIN-MAP Incident · demo `#sc-incident-list` |
| **cấm** | invent `api/v1/incident-list` · ERP.* · app `:5101` · DbContext trên BFF |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix.

## Như thế nào (skill step 6)

| Tầng | Repo / package | App có biết? |
|------|----------------|--------------|
| UI | iOS + Android | Có — `{BffPrefix}` |
| BFF host | `Linm.RMMS.Mobile.Bff` | Có — một host |
| Domain API | `RMMS.Service.Api` · Incident | **Không** — proxy rewrite |
| Dedicated IncidentListController | **không** | **cấm invent** |

## Table — list `#sc-incident-list` · `DES-MOB-INC-LIST`

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|---------------|--------|--------------------|-----|------------|--------|-----|
| Incident list | GET | `incident/incidents` | proxy | `IncidentsController.GetList` | `api/v1/incident/incidents` · search/status/severity/page/pageSize | list cards |
| Prefetch detail (opt) | GET | `incident/incidents/{id}` | proxy | `IncidentsController.GetById` | sibling detail | **OUT** slug list UI |
| Nav banner vis | — | — | — | local nav | `go('vis-capture')` | **không** API |
| Nav map | — | — | — | local nav | `go('gis-map')` | **không** API |
| Nav assign WO | — | — | — | local nav | `go('mnt-list')` | **không** API |
| Nav detail | — | — | — | local nav | `go('incident-detail')` | **không** API |
| FAB create | — | — | — | local · `startIncidentPick()` | owner `incident-create` | **không** API slug này |
| Filter / search UI | — | — | — | local | toast / client filter | **không** API P1 |
| Chat toast | — | — | — | local | toast «Trao đổi sự cố» | comments **DEFER** |

## Query (list) — passthrough

`search` · `status` · `severity` · `page` · `pageSize`  
Mobile P1: `page=1` · `pageSize=50` · search client-side OK nếu cần lọc nhanh trên Items đã load.

## DTO bind (live `IncidentDto`)

| Field | Card zone |
|-------|-----------|
| `Title` | cardTitle |
| `IncidentType` · `Code` | cardTypeCode (`{IncidentType} · {Code}`) |
| `RouteName` · `KmStart` | cardLoc |
| `ReporterName` · `AssigneeName` | cardPerson |
| `RequestedAt` | cardTime |
| `Status` | cardStatus |
| `Id` | nav key → detail |

**Cấm** app fork DTO khác BFF table.

## Có trên domain — **không** thuộc slug `incident-list` P1

| Method | Path | Ghi |
|--------|------|-----|
| POST | `incident/incidents` | create — owner `incident-create` |
| PUT/DELETE | `incident/incidents/{id}` | update/delete — detail / web |
| POST | `…/assign` · `…/close` | sibling detail — **OUT** |
| POST | `…/comments` | **DEFER** · sibling `incident-chat` |
| Sheet UI | `#sheet-incident` | **OUT** |
| Screen | `#sc-inc-form` | sibling `incident-create` — **OUT** |
| Web `web-bff/api/v1/incident/**` | — | web BFF · mobile = `mobile-bff` proxy |

## Verify live (không invent)

| Check | Result |
|-------|--------|
| `IncidentsController` | `[Route("api/v1/incident/incidents")]` GET list · get · CRUD · assign · close |
| Mobile.Bff `incident/*` | proxy catch-all |
| DOMAIN-MAP | Incident · **cấm** ERP.* |
| `api/v1/incident-list` | **không** — **cấm invent** |
| Step 4b | **N/A** — reuse Signed endpoints · media thumb = GAP field |

## Cấm

- App biết RMMS `:5101` trực tiếp  
- DbContext trên Mobile.Bff  
- Invent `GET incident-list` / mobile-only Incident DTO fork  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T01:30:00.000Z |
| versionGate | rechecked |
| contentHash | sha256:incident-list-mobile-bff-20260829 |
| bffContentHash | sha256:incident-incidents-proxy-passthrough |
| taskId | `task_246a6ce0` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
