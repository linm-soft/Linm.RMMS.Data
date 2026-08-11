# Solution discovery — pavement-section

> Status: **confirmed** (`solution_confirm=approve` · autopilot task_94b861f5)

| Field | Value |
|-------|-------|
| feature | `pavement-section` |
| packKind | `list` (Kind B + Full page form) |
| status | `confirmed` |
| design_confirm | approve (autopilot) |
| solution_confirm | approve (autopilot) |
| updatedAt | 2026-08-10T01:14:00.000Z |

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` (`/asset/pavement-section`) |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | `api/src/RMMS.Service.Api/Domains/Asset/` |
| Models / DTO | `api/domains/asset/LINM.RMMS.Asset.Models/DTOs/` |
| Persistence | `api/shared/RMMS.Service.Persistence/` |
| Migrations | `api/shared/RMMS.Service.Migrations/` |
| BFF | `bff/domains/asset/LINM.RMMS.Asset.Bff/` |

**Cấm** `ERP.Service.*` · `Domains/Master` · invent prefix `api/v1/infra`.

## Architecture

| Layer | Choice |
|-------|--------|
| Domain prefix | `api/v1/asset` · BFF `web-bff/api/v1/asset` |
| Resource | `/pavement-sections` |
| Persist | `PavementSectionEntity` → `rmms_pavement_sections` |
| BFF | proxy only |
| Auth perm | `asset.pavement-sections.read\|create\|update\|delete` (stub attr) |
| IdCode | `MD-yyyyMMdd-nnnn` |

### Route decision

Context doc skeleton `/api/v1/infra/pavement-sections` — **lệch DOMAIN-MAP**. SA chốt **`api/v1/asset/pavement-sections`**.

## 2. Field map (ui → dto → db)

| uiField | dtoField | dbColumn |
|---------|----------|----------|
| code | Code | `code` |
| roadName | RoadName | `road_name` → `RoadName` |
| provinceName | ProvinceName | `ProvinceName` |
| kmFrom/kmTo/lengthKm | KmFrom/KmTo/LengthKm | decimal |
| structureType | StructureType | |
| status | Status | |
| manageUnit | ManageUnit | |
| … | flat scalars | **cấm** parent JSON |

## 3. API contract

| id | Method | Path |
|----|--------|------|
| API-01 | GET | `/api/v1/asset/pavement-sections?search=&province=&road=&status=&kmFrom=&kmTo=&page=&pageSize=` |
| API-02 | GET | `/api/v1/asset/pavement-sections/{id}` · **XCO** |
| API-03 | POST | `/api/v1/asset/pavement-sections` |
| API-04 | PUT | `/api/v1/asset/pavement-sections/{id}` |
| API-05 | DELETE | `/api/v1/asset/pavement-sections/{id}` soft |

BFF: `web-bff/api/v1/asset/pavement-sections/**`.

## Implement gates

| Gate | Decision |
|------|----------|
| **TZ** | `tz_na` |
| **XCO** | `xco_get_only` |
| **SHARE** | `share_tenant` |

## Out of pack

Import Excel API · PostGIS Geom · form-init-data lookup master.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.08.17 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-08-10T01:14:00.000Z |
| versionGate | rechecked |
