# Solution discovery — inventory

> Status: **confirmed** (`solution_confirm=approve` · autopilot task_27ba5c23)  
> Standards: api-endpoint · bff-api-structure · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates**  
> **Cấm** ERP.WebService · Domains/Master · `api/v1/rmms/*`

| Field | Value |
|-------|-------|
| feature | `inventory` |
| packKind | `list` (Kind B+D) |
| status | `confirmed` |
| design_confirm | approve (autopilot) |
| solution_confirm | approve (autopilot) |
| updatedAt | 2026-08-09T16:54:00.000Z |

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Contract` (`/contract/inventory`) |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | `api/src/RMMS.Service.Api/Domains/Contract/` |
| Models / DTO | `api/domains/contract/LINM.RMMS.Contract.Models/DTOs/` |
| Persistence | `api/shared/RMMS.Service.Persistence/` |
| Migrations | `api/shared/RMMS.Service.Migrations/` |
| BFF | `bff/domains/contract/LINM.RMMS.Contract.Bff/` |
| Docs | DOMAIN-MAP Contract · `docs/context/features/inventory.md` |

## Architecture

| Layer | Choice |
|-------|--------|
| Domain | Contract / `contract` · DOMAIN-MAP (`inventory` → Contract) |
| API host | `Domains/Contract/` |
| BFF | proxy only = **yes** |
| Response | CommonLib ApiResponse / paged |
| Auth perm | codes `contract.inventory.*` (stub until NuGet) |
| Persist | flat scalars + **child** `InventoryMoveEntity` — **cấm** parent JSON |
| Out of pack | Timescale GPS · Asset sync · events · Excel |

## Route decision

| | Choice |
|--|--------|
| Domain prefix | `api/v1/contract` · BFF `web-bff/api/v1/contract` |
| Resource | `/inventory-items` → `api/v1/contract/inventory-items` |
| FE BASE | `/contract/inventory-items` |
| KPI | `GET .../inventory-items/kpi` |
| Health (keep) | `api/v1/contract/health` |

## Implement gates

| Gate | Decision | Note |
|------|----------|------|
| **TZ** | **n/a** (`tz_na`) | Dates store UTC |
| **XCO** | **required** (`xco_get_only`) | GET by id |
| **SHARE** | **tenant_keep** | `InventoryItemEntity` theo CompanyCode |

## 2. Form data → entities

| Screen | Fields | Entity |
|--------|--------|--------|
| List filter | search, category, status, warehouse, page, pageSize | — |
| List grid | code, name, category, warehouse, qty, value, status, gps, wo | `InventoryItemEntity` |
| Form header/meta | design inventory | `InventoryItemEntity` |
| Move lines | kind, qty, movedAt, woRef, note | `InventoryMoveEntity` (FK ItemId) |

### Field map (ui → dto → db)

| uiField | dtoField | dbColumn | Notes |
|---------|----------|----------|-------|
| code | Code | `code` | IdCode `INV-yyyyMMdd-nnnn` |
| name | Name | `name` | * |
| category | Category | `category` | * |
| group | Group | `group` | |
| unit | Unit | `unit` | * |
| qtyOnHand | QtyOnHand | `qty_on_hand` | decimal |
| minQty | MinQty | `min_qty` | decimal |
| unitPrice | UnitPrice | `unit_price` | decimal |
| warehouse | Warehouse | `warehouse` | * |
| status | Status | `status` | * |
| moves[] | Moves | `rmms_inventory_moves` | child rows |

## 3. API catalog

| id | Method | Path | Perm |
|----|--------|------|------|
| API-01 | GET | `/api/v1/contract/inventory-items` | read |
| API-02 | GET | `/api/v1/contract/inventory-items/{id}` | read · XCO |
| API-03 | POST | `/api/v1/contract/inventory-items` | create |
| API-04 | PUT | `/api/v1/contract/inventory-items/{id}` | update |
| API-05 | DELETE | `/api/v1/contract/inventory-items/{id}` | delete |
| API-06 | GET | `/api/v1/contract/inventory-items/kpi` | read |

## 4. Tables

| Table | Notes |
|-------|-------|
| `rmms_inventory_items` | tenant · soft-delete IsActive |
| `rmms_inventory_moves` | FK ItemId cascade |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.08.17 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.02 |
| generatedAt | 2026-08-09T16:54:00.000Z |
| versionGate | rechecked |
