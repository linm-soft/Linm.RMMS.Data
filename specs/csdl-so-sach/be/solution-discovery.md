# Solution discovery — csdl-so-sach

> Status: **confirmed** (`solution_confirm=approve` · autopilot task_de8226e1)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates**  
> Requires: `ui/design.md` **confirmed** · prototype + reviewUrl

| Field | Value |
|-------|-------|
| feature | `csdl-so-sach` |
| packKind | `list` (Kind G hub + B catalog + D Slideout) |
| status | `confirmed` |
| design_confirm | approve (autopilot) |
| solution_confirm | approve (autopilot) |
| updatedAt | 2026-08-09T15:24:00.000Z |

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Asset` (`/asset/csdl-so-sach`) |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | `api/src/RMMS.Service.Api/Domains/Asset/` |
| Models / DTO | `api/domains/asset/LINM.RMMS.Asset.Models/DTOs/` |
| Persistence | `api/shared/RMMS.Service.Persistence/` |
| Migrations | `api/shared/RMMS.Service.Migrations/` |
| BFF | `bff/domains/asset/LINM.RMMS.Asset.Bff/` |
| Docs | DOMAIN-MAP · `csdl-so-sach` → **Asset** |

**Cấm** `ERP.Service.*` · `Domains/Master` · invent prefix `api/v1/infra` ngoài DOMAIN-MAP.

## Architecture

| Layer | Choice |
|-------|--------|
| Domain prefix | `api/v1/asset` · BFF `web-bff/api/v1/asset` |
| Resource | `/csdl-records` → `api/v1/asset/csdl-records` |
| Catalog summary | `GET …/csdl-records/catalog` (hub KPI + counts) |
| Persist | `CsdlCatalogRecordEntity` polymorphic by `Resource` + child `CsdlBookEntryEntity` |
| BFF | proxy only |
| Response | ApiResponse / paged (local stub → CommonLib) |
| Auth perm | `asset.csdl-records.read\|create\|update\|delete` (stub attr) |

### Route decision

Context doc skeleton dùng `/api/v1/infra/*` — **lệch DOMAIN-MAP**. SA chốt **`api/v1/asset/csdl-records`** (+ query `resource=`) để đúng Asset domain. FE BASE: `/asset/csdl-records`.

## 2. Form data analysis

| Screen | Fields | Entity |
|--------|--------|--------|
| Hub | tab · KPI · resource cards | aggregate counts |
| List filter | search · province · status · resource* · page · pageSize | — |
| List grid | code · roadName · province · km · status · manageUnit · detailPrimary | `CsdlCatalogRecordEntity` |
| Form | fields design §3 · entries[] for book | record + `CsdlBookEntryEntity` |

### Field map (ui → dto → db)

| uiField | dtoField | dbColumn |
|---------|----------|----------|
| resource | Resource | `resource` |
| code | Code | `code` |
| roadName | RoadName | `road_name` |
| province | Province | `province` |
| kmFrom | KmFrom | `km_from` (decimal) |
| kmTo | KmTo | `km_to` |
| side | Side | `side` |
| status | Status | `status` |
| manageUnit | ManageUnit | `manage_unit` |
| ownerUnit | OwnerUnit | `owner_unit` |
| detailPrimary | DetailPrimary | `detail_primary` |
| detailSpec | DetailSpec | `detail_spec` |
| detailExtra | DetailExtra | `detail_extra` |
| notes | Notes | `notes` |
| bookNo | BookNo | `book_no` |
| contractor | Contractor | `contractor` |
| entries[].lineNo | LineNo | child `line_no` |
| entries[].col1/2/3 | Col1/2/3 | child flat |
| entries[].note | Note | child `note` |

**Cấm** parent `EntriesJson` / `DetailJson`.

## 3. API contract

| id | Method | Path | Notes |
|----|--------|------|-------|
| API-00 | GET | `/api/v1/asset/csdl-records/catalog` | hub counts |
| API-01 | GET | `/api/v1/asset/csdl-records?resource=&search=&province=&status=&page=&pageSize=` | list |
| API-02 | GET | `/api/v1/asset/csdl-records/{id}` | get + entries · **XCO** |
| API-03 | POST | `/api/v1/asset/csdl-records` | create · IdCode by prefix |
| API-04 | PUT | `/api/v1/asset/csdl-records/{id}` | update + replace entries |
| API-05 | DELETE | `/api/v1/asset/csdl-records/{id}` | soft IsActive=false |

BFF: `web-bff/api/v1/asset/csdl-records/**`.

### IdCode prefixes

MD·BR·TN·CV·RN·HC·AT·MK·KE·LE·LT·CX · sổ SO — format `{PREFIX}-yyyyMMdd-nnnn`.

## Implement gates

| Gate | Decision | Note |
|------|----------|------|
| **TZ** | `tz_na` | không date filter P1 |
| **XCO** | `xco_get_only` | API-02 |
| **SHARE** | `share_tenant` | tenant `CompanyCode` |

## Out of pack

Import Excel API · PostGIS Geom · report Excel 12 sheet · Biểu 7 multi-entity facade.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.08.17 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-08-09T15:24:00.000Z |
| versionGate | rechecked |
