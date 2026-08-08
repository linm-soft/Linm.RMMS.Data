# Solution discovery — partner-unit

> Status: **confirmed** (`solution_confirm=approve` · Autopilot run packet)  
> Domain: **Integration** (DOMAIN-MAP) · share_a · tz_na · xco_na  
> Route: `api/v1/integration/partner-units` · BFF proxy · **cấm** `api/v1/rmms/*` · **cấm** ERP.*

| Field | Value |
|-------|-------|
| feature | `partner-unit` |
| packKind | `master` (Kind B flat + Modal) |
| status | `confirmed` |
| design_confirm | approve |
| domain_map | **Integration** |
| sa_tz_gate | **tz_na** |
| sa_xco_gate | **xco_na** |
| sa_shared_table | **share_a** |
| solution_confirm | **approve** |
| updatedAt | 2026-08-08T12:10:00.000Z |

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` (`/master/partner-unit`) |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | `Domains/Integration/` |
| Models | `api/domains/integration/LINM.RMMS.Integration.Models/DTOs/` |
| Persistence | `api/shared/RMMS.Service.Persistence/` · table `rmms_partner_units` |
| Migrations | `Schema_RmmsPartnerUnits` (+ seed 13 in Up) |
| BFF | `bff/domains/integration/…` · **proxy only** |
| Seed | `docs/context/seed/partner-unit-seed.json` (13) |

## Architecture

| Layer | Choice |
|-------|--------|
| Domain prefix | `api/v1/integration` · BFF `web-bff/api/v1/integration` |
| Resource | `/partner-units` |
| Persist | flat `PartnerUnitEntity` · `partner_kind` · `province_code` · `legacy_folder_name` |
| Auth perm | `master.partner-units.read|create|update|delete|approve` |
| Response | ApiResponse / paged (local stub như asset-type) |

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
| partnerKind | PartnerKind | `partner_kind` |
| provinceCode | ProvinceCode | `province_code` |
| legacyFolderName | LegacyFolderName | `legacy_folder_name` |
| isActive | IsActive | `is_active` |
| — | SortOrder | `sort_order` |

## 3. API catalog

Base: `api/v1/integration/partner-units`

| id | Method | Path | Purpose |
|----|--------|------|---------|
| API-01 | GET | `/` | List/search paged · `search?` `partnerKind?` `page` `pageSize` |
| API-02 | GET | `/search` | **SearchInput** consumer |
| API-03 | GET | `/init-data` | partnerKind options |
| API-04 | GET | `/{id}` | Get by Guid |
| API-05 | POST | `/` | Create |
| API-06 | PUT | `/{id}` | Update |
| API-07 | DELETE | `/{id}` | Soft-delete (`IsActive=false`) |

BFF: `web-bff/api/v1/integration/partner-units/**` proxy-only.  
FE BASE: `/integration/partner-units`.

### API-02 SearchInput

| | |
|--|--|
| controlHint | **SearchInput** — **cấm** free Text |
| Request | `search` · `page` · `pageSize` · `excludeCode?` |
| Response | `{ code, name, partnerKind, isSelectable }[]` |

## 4. Gaps (chốt)

| ID | Decision |
|----|----------|
| GAP-PARTNER-01 | Code = slug IdCode `SO-*` / `BOT-*` / `DN-*` |
| GAP-PARTNER-02 | partner ↔ org-unit OOS |

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
| generatedAt | 2026-08-08T12:10:00.000Z |
| versionGate | ok |
