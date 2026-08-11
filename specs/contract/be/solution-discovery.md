# Solution discovery — contract

> Status: **confirmed** (`solution_confirm=approve` · autopilot task_7e4ef9d4)  
> Standards: api-endpoint · bff-api-structure · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates**  
> **Cấm** ERP.WebService · Domains/Master · `api/v1/rmms/*`

| Field | Value |
|-------|-------|
| feature | `contract` |
| packKind | `list` (Kind B+D) |
| status | `confirmed` |
| design_confirm | approve (autopilot) |
| solution_confirm | approve (autopilot) |
| updatedAt | 2026-08-09T14:54:00.000Z |

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Contract` (`/contract`) |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | `api/src/RMMS.Service.Api/Domains/Contract/` |
| Models / DTO | `api/domains/contract/LINM.RMMS.Contract.Models/DTOs/` |
| Persistence | `api/shared/RMMS.Service.Persistence/` |
| Migrations | `api/shared/RMMS.Service.Migrations/` |
| BFF | `bff/domains/contract/LINM.RMMS.Contract.Bff/` |
| Docs | DOMAIN-MAP Contract · `docs/context/features/contract.md` |

## Architecture

| Layer | Choice |
|-------|--------|
| Domain | Contract / `contract` · DOMAIN-MAP |
| API host | `Domains/Contract/` |
| BFF | proxy only = **yes** |
| Response | CommonLib ApiResponse / paged |
| Auth perm | codes `contract.contracts.*` (stub until NuGet) |
| Persist | flat scalars + **child** `ContractPaymentEntity` — **cấm** parent JSON |
| Out of pack | settlement full · inventory CRUD · events |

## Route decision

| | Choice |
|--|--------|
| Domain prefix | `api/v1/contract` · BFF `web-bff/api/v1/contract` |
| Resource | `/contracts` → `api/v1/contract/contracts` |
| FE BASE | `/contract/contracts` |
| Health (keep) | `api/v1/contract/health` |

## Implement gates

| Gate | Decision | Note |
|------|----------|------|
| **TZ** | **n/a** (`tz_na`) | List filter không date; form dates store UTC / display local later |
| **XCO** | **required** (`xco_get_only`) | GET by id |
| **SHARE** | **tenant_keep** | `ContractEntity` theo CompanyCode |

## 2. Form data → entities

| Screen | Fields | Entity |
|--------|--------|--------|
| List filter | search, type, status, page, pageSize | — |
| List grid | code, contractNo, name, type, contractor, amount, kpiScore, status, effectiveTo | `ContractEntity` |
| Form header/meta | design inventory | `ContractEntity` |
| Payment lines | period, amount, paidAt, status, note | `ContractPaymentEntity` (FK ContractId) |

### Field map (ui → dto → db)

| uiField | dtoField | dbColumn | Notes |
|---------|----------|----------|-------|
| code | Code | `code` | IdCode `CTR-yyyyMMdd-nnnn` |
| contractNo | ContractNo | `contract_no` | * |
| name | Name | `name` | * |
| type | Type | `type` | * |
| contractor | Contractor | `contractor` | * |
| amount | Amount | `amount` | decimal(18,2) |
| status | Status | `status` | * |
| signedAt | SignedAt | `signed_at` | DateTime? |
| effectiveFrom | EffectiveFrom | `effective_from` | DateTime? |
| effectiveTo | EffectiveTo | `effective_to` | DateTime? |
| budgetAllocated | BudgetAllocated | `budget_allocated` | decimal? |
| disbursed | Disbursed | `disbursed` | computed from paid lines on write |
| budgetYear | BudgetYear | `budget_year` | int? |
| kpiScore | KpiScore | `kpi_score` | decimal? |
| slaPct | SlaPct | `sla_pct` | decimal? |
| warrantyMonths | WarrantyMonths | `warranty_months` | int? |
| warrantyExpires | WarrantyExpires | `warranty_expires` | DateTime? |
| orgUnit | OrgUnit | `org_unit` | |
| routeSegment | RouteSegment | `route_segment` | |
| workOrderLink | WorkOrderLink | `work_order_link` | |
| note | Note | `note` | |
| payments[] | Payments | `rmms_contract_payments` | child rows |

## 3. API catalog

| id | Method | Path | Perm |
|----|--------|------|------|
| API-01 | GET | `/api/v1/contract/contracts` | read |
| API-02 | GET | `/api/v1/contract/contracts/{id}` | read · XCO |
| API-03 | POST | `/api/v1/contract/contracts` | create |
| API-04 | PUT | `/api/v1/contract/contracts/{id}` | update |
| API-05 | DELETE | `/api/v1/contract/contracts/{id}` | delete (soft) |

BFF: `web-bff/api/v1/contract/contracts/**` proxy only.

## 4. Tables

- `rmms_contracts` — tenant · IsActive soft-delete
- `rmms_contract_payments` — ContractId FK · LineNo · flat scalars

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.08.17 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| generatedAt | 2026-08-09T14:54:00.000Z |
| versionGate | rechecked |
