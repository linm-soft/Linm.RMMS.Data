# Solution discovery — asset-type

> Status: **confirmed** (`solution_confirm=approve` · Autopilot run packet)  
> Domain: **Integration** (DOMAIN-MAP) · share_a · tz_na · xco_na  
> Route: `api/v1/integration/asset-types` · BFF proxy · **cấm** `api/v1/rmms/*` · **cấm** ERP.*

| Field | Value |
|-------|-------|
| feature | `asset-type` |
| packKind | `master` (Kind B flat + Modal) |
| status | `confirmed` |
| design_confirm | approve |
| domain_map | **Integration** |
| sa_tz_gate | **tz_na** |
| sa_xco_gate | **xco_na** |
| sa_shared_table | **share_a** |
| solution_confirm | **approve** |
| updatedAt | 2026-08-08T19:00:00.000Z |

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` (`/master/asset-type`) |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | `Domains/Integration/` |
| Models | `api/domains/integration/LINM.RMMS.Integration.Models/DTOs/` |
| Persistence | `api/shared/RMMS.Service.Persistence/` · table `rmms_asset_types` |
| Migrations | `Schema_RmmsAssetTypes` (+ seed 23 in Up) |
| BFF | `bff/domains/integration/…` · **proxy only** |
| Seed | `docs/context/seed/asset-type-seed.json` (23) |

## Architecture

| Layer | Choice |
|-------|--------|
| Domain prefix | `api/v1/integration` · BFF `web-bff/api/v1/integration` |
| Resource | `/asset-types` |
| Persist | flat `AssetTypeEntity` · `group_code` · `legacy_aliases` text (JSON array string) |
| Auth perm | `master.asset-types.read|create|update|delete|approve` |
| Response | ApiResponse / paged (local stub như road-route) |

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
| groupCode | GroupCode | `group_code` |
| icon | Icon | `icon` (optional) |
| legacyAliases | LegacyAliases | `legacy_aliases` (JSON text) |
| isActive | IsActive | `is_active` |
| — | SortOrder | `sort_order` |

## 3. API catalog

Base: `api/v1/integration/asset-types`

| id | Method | Path | Purpose |
|----|--------|------|---------|
| API-01 | GET | `/` | List/search paged · `search?` `groupCode?` `page` `pageSize` |
| API-02 | GET | `/search` | **SearchInput** consumer Asset |
| API-03 | GET | `/init-data` | groupCode options |
| API-04 | GET | `/alias-map` | map alias → code (import) |
| API-05 | GET | `/{id}` | Get by Guid |
| API-06 | POST | `/` | Create |
| API-07 | PUT | `/{id}` | Update |
| API-08 | DELETE | `/{id}` | Soft-delete (`IsActive=false`) |

BFF: `web-bff/api/v1/integration/asset-types/**` proxy-only.  
FE BASE: `/integration/asset-types`.

### API-02 SearchInput

| | |
|--|--|
| controlHint | **SearchInput** — **cấm** free Text |
| Request | `search` · `page` · `pageSize` · `excludeCode?` |
| Response | `{ code, name, groupCode, isSelectable }[]` |

## 4. Gaps (chốt)

| ID | Decision |
|----|----------|
| GAP-ATYPE-01 | legacyAliases JSON text |
| GAP-ATYPE-02 | QL.* noise exclude seed |
| GAP-ATYPE-03 | Excel fingerprint OOS |

## Handoff → TL

Tasks: T-CTX · T-BE · T-SEED · T-BFF · T-PERM · T-UI-LIST · T-UI-FORM · T-QA  
Source BE/UI = run packet paths (Autopilot confirms).

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.08.17 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.08.21 |
| rulesVersion | 2026.08.08.19 |
| generatedAt | 2026-08-08T19:00:00.000Z |
| versionGate | ok |
