# BFF endpoints — incident-detail (mobile · Chi tiết vấn đề)

| | |
|---|---|
| feature | `incident-detail` |
| bff | `Linm.RMMS.Mobile.Bff` · `MobileApiProxyController` catch-all |
| prefix | `mobile-bff/api/v1` |
| downstream | `ApiBase` → `RMMS.Service.Api` · Incident domain |
| source | CTX `incident-detail.md` · `incident.md` · `IncidentsController` · DOMAIN-MAP Incident · demo `#sc-incident-detail` |
| **cấm** | invent `api/v1/incident-detail` · ERP.* · app `:5101` · DbContext trên BFF |

App `ApiClient.base` = `{BffBase}/mobile-bff/api/v1`. Path **không** lặp prefix.

## Như thế nào (skill step 6)

| Tầng | Repo / package | App có biết? |
|------|----------------|--------------|
| UI | iOS + Android | Có — `{BffPrefix}` |
| BFF host | `Linm.RMMS.Mobile.Bff` | Có — một host |
| Domain API | `RMMS.Service.Api` · Incident | **Không** — proxy rewrite |
| Dedicated IncidentDetailController | **không** | **cấm invent** |

## Table — detail `#sc-incident-detail` · `DES-MOB-INC-DETAIL`

| Action / zone | Method | `{BffPrefix}` path | BFF | Downstream | Source | Gap |
|---------------|--------|--------------------|-----|------------|--------|-----|
| Load chi tiết | GET | `incident/incidents/{id}` | proxy | `IncidentsController.GetById` | `api/v1/incident/incidents/{id}` | hero + rows |
| Đóng sự cố | POST | `incident/incidents/{id}/close` | proxy | `IncidentsController.Close` | body `CloseIncidentRequest` optional `Note` | toast · refresh |
| Nav Giao việc | — | — | — | local nav | `go('estimate')` | **không** API slug này |
| Nav Bản đồ | — | — | — | local nav | `go('gis-map')` | **không** API |
| Nav back list | — | — | — | local nav | `go('incident-list')` | **không** API |

## DTO bind (live `IncidentDto`)

| Field | Detail zone |
|-------|-------------|
| `Id` | route param / nav key |
| `Code` | codeValue hero |
| `Severity` · `Status` | badge |
| `Title` | rowType (ưu tiên) |
| `IncidentType` | rowType fallback |
| `RouteName` · `KmStart` | rowLoc |
| `HasGps` | rowGps flag · **không** Lat/Lng trên DTO |
| `DetectionId` | rowSource optional |
| `ReporterName` · `AssigneeName` | optional meta (không demo iOS) |
| `Description` · `AssetLabel` | optional expand P2 |
| `RequestedAt` | optional meta P2 |

**Cấm** app fork DTO khác BFF table. **Cấm** invent Lat/Lng trên wire P1.

## Request — Close

| Body | Required | Notes |
|------|----------|-------|
| `CloseIncidentRequest.Note` | no | demo toast không nhập note · empty OK |

Close set `Status = closed` server-side.

## Có trên domain — **không** thuộc slug `incident-detail` P1 UI

| Method | Path | Ghi |
|--------|------|-----|
| GET | `incident/incidents` | list — owner `incident-list` |
| POST | `incident/incidents` | create — owner `incident-create` |
| PUT | `incident/incidents/{id}` | update — **OUT** (không sửa định vị) |
| DELETE | `incident/incidents/{id}` | soft delete — **OUT** feature-guide |
| POST | `…/assign` | live — UI P1 nav `estimate` · **không** gọi trên detail CTA |
| POST | `…/comments` | **DEFER** · sibling `incident-chat` |
| Sheet UI | `#sheet-incident` | **OUT** |
| Screen | `#sc-inc-form` | sibling create — **OUT** |
| Web `web-bff/api/v1/incident/**` | — | web BFF · mobile = `mobile-bff` proxy |

## Verify live (không invent)

| Check | Result |
|-------|--------|
| `IncidentsController` | `[Route("api/v1/incident/incidents")]` GetById · Close · Assign · CRUD |
| `IncidentDto` | Code · Title · Route · Type · Status · Severity · HasGps · **không** Lat/Lng |
| Mobile.Bff `incident/*` | proxy catch-all |
| DOMAIN-MAP | Incident · **cấm** ERP.* |
| `api/v1/incident-detail` | **không** — **cấm invent** |
| Step 4b | **N/A** role data_analy · Lat/Lng Signed = GAP field SA nếu cần |

## Cấm

- App biết RMMS `:5101` trực tiếp  
- DbContext trên Mobile.Bff  
- Invent `GET incident-detail` / mobile-only DTO fork  
- Fake lat/lng khi API không trả coords  

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-data-analy-mobile |
| skillVersion | 2026.08.25.01 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.25.01 |
| rulesVersion | 2026.08.25.2 |
| generatedAt | 2026-08-29T02:38:26.000Z |
| versionGate | rechecked |
| contentHash | sha256:incident-detail-mobile-bff-20260829 |
| bffContentHash | sha256:incident-incidents-getbyid-close-proxy |
| taskId | `task_42bb4141` |

---
<!-- Version meta: skillId=agent-data-analy-mobile skillVersion=2026.08.25.01 schemaVersion=2 workflowVersion=2026.08.25.01 rulesVersion=2026.08.25.2 versionGate=rechecked -->
