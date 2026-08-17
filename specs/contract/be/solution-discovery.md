# Solution discovery — contract

> Status: **confirmed** (`solution_confirm=approve` · autopilot `task_3c7f663e` · `/agent-sa`)  
> Standards: api-endpoint · bff-api-structure · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates**  
> **Cấm** ERP.WebService · `ERP.Service.*` · Domains/Master · `api/v1/rmms/*`

| Field | Value |
|-------|-------|
| feature | `contract` |
| this role | `sa` · `/agent-sa` |
| packKind | `list` (Kind **B** catalog A–D + **full-page** form) |
| status | `confirmed` |
| design_confirm | approve (`task_eba480e8`) |
| solution_confirm | **approve** (`autoApprove=ON` · `task_3c7f663e`) |
| changeScope | `edit_page` |
| prior · design | `confirmed` · `ui/design.md` + prototype · `2026-08-16T04:30:00.000Z` |
| prior · po | `confirmed` · `po/requirement.md` |
| prior · data_analy | `confirmed` · `specs/_data-analy/features/contract-control-hint.md` · hash `sha256:0f942023667b8cc7e10d626ce5aa10117700feac901284cecbf6038788284b73` |
| updatedAt | `2026-08-16T04:32:00.000Z` |
| taskId | `task_3c7f663e` |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Contract` · `/contract` |

**SUPERSEDED:** solution 2026-08-09 / Kind B+D Slideout. **Keep** CRUD ownership; **re-lock** Kind B full-page + lookup APIs + schema seed GAP.

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Contract` (`/contract`) |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | `api/src/RMMS.Service.Api/Domains/Contract/` |
| Models / DTO | `api/domains/contract/LINM.RMMS.Contract.Models/DTOs/` |
| Persistence | `api/shared/RMMS.Service.Persistence/` · `ContractEntity` · `ContractPaymentEntity` |
| Migrations | **n/a this pack** (tables exist) |
| BFF | `bff/domains/contract/LINM.RMMS.Contract.Bff/` · `ContractsBffController` |
| UI schema (Integration) | `Domains/Integration` · `CatalogUiSchemaRegistry` · `GET/PUT api/v1/integration/catalogs/{kind}/ui-schema` |
| Docs | DOMAIN-MAP Contract · `docs/context/features/contract.md` |

### Architecture

| Layer | Choice |
|-------|--------|
| Domain | Contract / `contract` · DOMAIN-MAP |
| API host | `Domains/Contract/` |
| BFF | proxy only = **yes** (`Request.QueryString` forward) |
| Response | CommonLib-shaped `ApiResponse<T>` / `ContractPagedResult` |
| Auth perm | codes `contract.contracts.read\|create\|update\|delete` (stub `[RequirePermission]` until NuGet) |
| Persist | flat scalars + **child** `ContractPaymentEntity` — **cấm** parent JSON |
| Out of pack | settlement full · inventory CRUD · events · Excel · dedicated sign/kpi APIs |

## Route decision

| | Choice |
|--|--------|
| Domain prefix | `api/v1/contract` · BFF `web-bff/api/v1/contract` |
| Resource | `/contracts` → `api/v1/contract/contracts` |
| FE BASE | `/contract/contracts` (via BFF) |
| Health (keep) | `api/v1/contract/health` |
| UI schema | `api/v1/integration/catalogs/contracts/ui-schema` (kind kebab `contracts`) |

## Implement gates (SA chốt)

| Gate | Decision | Note |
|------|----------|------|
| **TZ** | **n/a** (`tz_na`) | List filter **không** date P1. Form `signedAt` / `effectiveFrom` / `effectiveTo` / `paidAt` / `warrantyExpires` store **UTC** on write · display local FE. |
| **XCO** | **required** (`xco_get_only`) | `GET …/contracts/{id}` — `IgnoreQueryFilters` + `allowed_company_ids` · 403 nếu không thuộc claim. **Không** XCO trên list/POST/PUT/DELETE. |
| **SHARE** | **tenant_keep** (`share_tenant`) | `ContractEntity.CompanyCode` · `ICompanyContext`. |

## Live verify (this SA role — read BE, no write)

| Check | Result |
|-------|--------|
| API-01 query `contractor` | **PASS** — `ContractsController.GetList([FromQuery] contractor)` → `ContractsService` `x.Contractor == c` |
| Search includes nhà thầu | **PASS** — `Contractor.ToLower().Contains(s)` |
| PageSize | **PASS** — allow 50 / 100 / 200 / 500 (else 50) |
| API-02 XCO | **PASS** — `GetByIdAsync` + `ForbiddenAccessException` → 403 |
| Nested payments | **PASS** — DTO `Payments[]` · table `rmms_contract_payments` · `Disbursed = SumDisbursed` (status `da-chi`) |
| Parent JSON | **PASS** — DTO/entity flat scalars only |
| BFF querystring | **PASS** — `BuildListPath()` = `api/v1/contract/contracts` + `Request.QueryString` (forwards `search`/`type`/`status`/`contractor`/`page`/`pageSize`) |
| CatalogUiSchema kind `contracts` | **FAIL / GAP** — `CatalogUiSchemaRegistry.Supported` **không** có `contracts` · `CatalogUiSchemaSeed.GetRequired` throw `No UI schema seed`. MFE `CATALOG_KIND = 'contracts'` + `useCatalogUiSchema`. **TL/Dev IN P1** — Integration domain (không ERP). |
| `[RequirePermission]` | **TODO** CommonLib — không block P1 CRUD |
| History API | stub empty — keep |

## 2. Form data → entities

| Screen | Fields | Entity |
|--------|--------|--------|
| List filter | search, type, status, **contractor**, page, pageSize | — |
| List grid | code, contractNo, name, type, contractor, amount, kpiScore, status, effectiveTo | `ContractEntity` |
| Form header/meta | Design §3 inventory | `ContractEntity` |
| Payment lines | period, amount, paidAt, status, note | `ContractPaymentEntity` (FK ContractId) |

### Field map (ui → dto → db)

| uiField | dtoField | dbColumn | Notes |
|---------|----------|----------|-------|
| code | Code | `code` | IdCode `CTR-yyyyMMdd-nnnn` server-gen |
| contractNo | ContractNo | `contract_no` | * required |
| name | Name | `name` | * |
| type | Type | `type` | * P1 enum |
| contractor | Contractor | `contractor` | * P1 enum |
| amount | Amount | `amount` | decimal(18,2) * |
| status | Status | `status` | * P1 enum |
| signedAt | SignedAt | `signed_at` | DateTime? UTC |
| effectiveFrom | EffectiveFrom | `effective_from` | DateTime? UTC |
| effectiveTo | EffectiveTo | `effective_to` | DateTime? UTC |
| budgetAllocated | BudgetAllocated | `budget_allocated` | decimal? |
| disbursed | Disbursed | `disbursed` | **computed** from paid lines — **cấm** client overwrite as source of truth |
| budgetYear | BudgetYear | `budget_year` | int? |
| kpiScore | KpiScore | `kpi_score` | decimal? |
| slaPct | SlaPct | `sla_pct` | decimal? |
| warrantyMonths | WarrantyMonths | `warranty_months` | int? |
| warrantyExpires | WarrantyExpires | `warranty_expires` | DateTime? UTC |
| orgUnit | OrgUnit | `org_unit` | P1 enum local |
| routeSegment | RouteSegment | `route_segment` | P1 Text |
| workOrderLink | WorkOrderLink | `work_order_link` | P1 Text |
| note | Note | `note` | |
| payments[] | Payments | `rmms_contract_payments` | child rows · **cấm** JSON trên parent |

## 3. API catalog (CRUD — keep)

| id | Method | Path | Perm | Notes |
|----|--------|------|------|-------|
| API-01 | GET | `/api/v1/contract/contracts` | read | query `search` `type` `status` **`contractor`** `page` `pageSize` |
| API-02 | GET | `/api/v1/contract/contracts/{id}` | read · **XCO** | include payments |
| API-03 | POST | `/api/v1/contract/contracts` | create | nested payments · IdCode server |
| API-04 | PUT | `/api/v1/contract/contracts/{id}` | update | replace payment lines |
| API-05 | DELETE | `/api/v1/contract/contracts/{id}` | delete | soft `IsActive=false` |

BFF: `web-bff/api/v1/contract/contracts/**` proxy only — **không** strip query.

## 4. Lookup APIs (SA chốt — Design SearchInput)

> Data-analy **đề xuất**. Design **chốt control**. SA **chốt API**. Dev **cấm** đoán Text vs SearchInput.

| Lookup | controlHint consumer | API P1 | Decision |
|--------|----------------------|--------|----------|
| type | list filter + form | **none** | in-memory enum 3 (`bao-tri` / `nang-cap` / `khac`) · **cấm** dedicated master |
| status | list + form | **none** | in-memory enum 6 |
| contractor | list filter + form | **none** master · filter via API-01 `?contractor=` | in-memory enum 3 (`nt-01`…`nt-03`) · partner-unit **UNCLEAR P2** |
| orgUnit | form | **none** | in-memory enum 3 hạt · org-unit CUC2 **P2** |
| payments.status | form lines | **none** | in-memory `cho` / `da-chi` / `huy` |
| partner-unit | — | Integration master | **OUT P1** |
| org-unit CUC2 | — | Integration | **OUT P1** |
| road-route | form `routeSegment` stays Text | Integration | **OUT P1** |
| catalog UI schema | Zone F | `GET/PUT /api/v1/integration/catalogs/contracts/ui-schema` | **IN P1** · seed **missing** → **T-BE-SCHEMA-01** |
| kpi / sign / settlement dedicated | — | — | **DEFER** |

**Cấm** native `<select>` catalog. **Cấm** new lookup endpoints P1 besides schema seed.

## 5. Tables

- `rmms_contracts` — tenant · `IsActive` soft-delete · **no schema change this pack**
- `rmms_contract_payments` — `ContractId` FK · `LineNo` · flat scalars

**T-BE-02** = **n/a**.

## 6. Tasks for TL (emit pack)

| id | layer | SA verdict |
|----|-------|------------|
| T-CTX-01 | docs | pending — context still may say Slideout; TL re-lock vs Design full-page |
| T-BE-01 | api | **verified PASS** `?contractor=` — TL keep as verify/no-op unless regression |
| T-BE-02 | migration | **n/a** |
| T-BE-SCHEMA-01 | api Integration | **NEW IN P1** — `CatalogUiSchemaRegistry` + `CatalogUiSchemaSeed` kind **`contracts`** (cols Design Zone C) · **cấm ERP.*** |
| T-BFF-01 | bff | **verified PASS** querystring forward |
| T-PERM-01 | ui+api | pending — codes documented; attribute TODO NuGet |
| T-UI-* | ui | pending TL from Design A–D + full-page + LKP/FIELD/PROD/UX |
| T-QA-* | qa | pending |

## 7. Confirm

`solution_confirm` = **approve** — `autoApprove=ON` · agent tự confirm. Roles sau = **pending** đến lượt. Chain **team-lead**.

Repo: `be_repo_confirm` = `Linm.RMMS.WebService` · `ui_repo_confirm` = `Linm.Web.RMMS.Contract` (board ticks prior — SA **không** auto-tick mới).

**This SA role: no FE/BE source write.** Build n/a. Dev must `yarn build` + `dotnet build` when writing schema seed.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.15.19 |
| schemaVersion | qldb-workflow-skill-v1 |
| workflowVersion | 2026.08.15.19 |
| generatedAt | 2026-08-16T04:32:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new (orchestrator `2026.08.15.19` · data-analy skill `2026.08.08.20` stamped SA 2026.08.15.19) |
| orchestratorSkillVersion | 2026.08.15.19 |
| orchestratorWorkflowVersion | 2026.08.15.19 |
| orchestratorSchemaVersion | qldb-workflow-skill-v1 |
| dataAnalySkillVersion | 2026.08.08.20 |
| poSkillVersion | 2026.08.15.19 |
| designSkillVersion | 2026.08.15.19 |

---
<!-- Version meta: skillVersion=2026.08.15.19 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.15.19 · versionGate=rechecked -->
