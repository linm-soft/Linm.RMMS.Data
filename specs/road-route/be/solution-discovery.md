# Solution discovery — road-route

> Status: **confirmed** (`solution_confirm=approve` · Autopilot run packet)  
> Domain: **Integration** (DOMAIN-MAP) · share_a · tz_na · xco_na  
> Route: `api/v1/integration/road-routes` · BFF proxy · **cấm** `api/v1/rmms/*` · **cấm** ERP.*

| Field | Value |
|-------|-------|
| feature | `road-route` |
| packKind | `master` (Kind B flat + Modal) |
| status | `confirmed` |
| design_confirm | approve |
| domain_map | **Integration** |
| sa_tz_gate | **tz_na** |
| sa_xco_gate | **xco_na** |
| sa_shared_table | **share_a** |
| solution_confirm | **approve** |
| updatedAt | 2026-08-08T18:45:00.000Z |

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` (`/master/road-route`) |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | `Domains/Integration/` |
| Models | `api/domains/integration/LINM.RMMS.Integration.Models/DTOs/` |
| Persistence | `api/shared/RMMS.Service.Persistence/` · table `rmms_road_routes` |
| Migrations | `Schema_RmmsRoadRoutes` · `Seed_RmmsRoadRoutes` |
| BFF | `bff/domains/integration/…` · **proxy only** |
| Seed | `docs/context/seed/road-route-seed.json` (38) |

## Architecture

| Layer | Choice |
|-------|--------|
| Domain prefix | `api/v1/integration` · BFF `web-bff/api/v1/integration` |
| Resource | `/road-routes` |
| Persist | flat `RoadRouteEntity` · `parent_code` · `legacy_aliases` text (JSON array string) — **cấm** ChildrenJson |
| Auth perm | `master.road-routes.read|create|update|delete|approve` |
| Response | ApiResponse / paged (local stub như org-unit) |

## Implement gates

| Gate | Decision |
|------|----------|
| TZ | **tz_na** |
| XCO | **xco_na** (shared Scope) |
| SHARE | **share_a** Type A |

## 2. Field map

| uiField | dtoField | dbColumn |
|---------|----------|----------|
| code | Code | `code` UK |
| name | Name | `name` |
| routeKind | RouteKind | `route_kind` |
| parentCode | ParentCode | `parent_code` |
| notes | Notes | `notes` |
| legacyAliases | LegacyAliases | `legacy_aliases` (JSON text) |
| isActive | IsActive | `is_active` |
| — | SortOrder | `sort_order` |

## 3. API catalog

Base: `api/v1/integration/road-routes`

| id | Method | Path | Purpose |
|----|--------|------|---------|
| API-01 | GET | `/` | List/search paged · `search?` `routeKind?` `page` `pageSize` |
| API-02 | GET | `/search` | **SearchInput** parent + consumer Asset |
| API-03 | GET | `/init-data` | routeKind options |
| API-04 | GET | `/{id}` | Get by Guid |
| API-05 | POST | `/` | Create |
| API-06 | PUT | `/{id}` | Update |
| API-07 | DELETE | `/{id}` | Soft-delete (`IsActive=false`) |

BFF: `web-bff/api/v1/integration/road-routes/**` proxy-only.  
FE BASE: `/integration/road-routes`.

### API-02 SearchInput

| | |
|--|--|
| controlHint | **SearchInput** — **cấm** free Text |
| Request | `search` · `page` · `pageSize` · `excludeCode?` |
| Response | `{ code, name, routeKind, isSelectable }[]` |

## 4. Gaps (chốt)

| ID | Decision |
|----|----------|
| GAP-ROUTE-01 | Segment codes OOS catalog |
| GAP-ROUTE-02 | parentCode optional · seed flat |
| GAP-ROUTE-03 | Noise folders excluded |

## Handoff → TL

Tasks: T-CTX · T-BE · T-SEED · T-BFF · T-PERM · T-UI-LIST · T-UI-FORM · T-QA  
Source BE/UI = run packet paths (Autopilot confirms).

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.08.17 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.08.20 |
| rulesVersion | 2026.08.08.19 |
| generatedAt | 2026-08-08T18:45:00.000Z |
| versionGate | ok |
