# Solution discovery — integration (Open API và tích hợp)

> Status: **confirmed** (`solution_confirm=approve` · autopilot `task_13deb688` · `/agent-sa`)  
> Standards: api-endpoint · bff-api-structure · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates**  
> **Cấm** ERP.WebService · `ERP.Service.*` · Domains/Master · `api/v1/rmms/*`

| Field | Value |
|-------|-------|
| feature | `integration` |
| this role | `sa` · `/agent-sa` |
| packKind | `list` (Kind **G** hub + Kind **B** catalogs A–D + Zone F schema + **full-page** Import/Job/Partner) |
| status | `confirmed` |
| design_confirm | approve (`task_2581b59b`) |
| solution_confirm | **approve** (`autoApprove=ON` · `task_13deb688`) |
| changeScope | `edit_page` |
| prior · design | `confirmed` · `ui/design.md` + `ui/prototype/integration-hub-prototype.html` |
| prior · po | `confirmed` · `po/requirement.md` |
| prior · data_analy | `confirmed` · `specs/_data-analy/features/integration-control-hint.md` · hash `sha256:integration-delta-schema-fullpage-20260816` |
| updatedAt | `2026-08-16T06:05:00.000+07:00` |
| taskId | `task_13deb688` |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Integration` · `/integration` |
| domain | **Integration** |

**SUPERSEDED:** solution 2026-08-09 (`skillVersion` 2026.08.09.02). **Keep** hub CRUD + tables + 3 catalogKind seeds; **re-lock** Design 2026-08-16: **full-page** forms (cấm Slideout/Resource) · lookup **static FE** · schema editor FULL 3 kinds · View=`<dl>`.

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Integration` (`/integration` · `/integration/import` · `/integration/jobs/:id` · `/integration/partners/:id`) |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | `api/src/RMMS.Service.Api/Domains/Integration/` · `SyncJobsController` · `PartnerAdaptersController` · `IntegrationEndpointsController` · `IntegrationHealthController` · `CatalogUiSchemaController` |
| Models / DTO | `api/domains/integration/LINM.RMMS.Integration.Models/DTOs/IntegrationHubDtos.cs` |
| Persistence | `SyncJobEntity` → `rmms_sync_jobs` · `PartnerAdapterEntity` → `rmms_partner_adapters` |
| Migrations | **n/a this pack** — `20260809162831_Schema_RmmsIntegrationHub` exists |
| BFF | `SyncJobsBffController` · `PartnerAdaptersBffController` · `IntegrationHubBffController` · `IntegrationBffController` (health) · `CatalogUiSchemaBffController` |
| UI schema | `CatalogUiSchemaRegistry` kinds `integration-sync-jobs` · `integration-partners` · `integration-endpoints` · `GET/PUT api/v1/integration/catalogs/{kind}/ui-schema` |
| Docs | DOMAIN-MAP `integration` → Integration · `docs/context/features/integration.md` |

### Architecture

| Layer | Choice |
|-------|--------|
| Domain | Integration / `integration` · DOMAIN-MAP |
| API host | `Domains/Integration/` |
| BFF | proxy only = **yes** (`Request.QueryString` forward on list + schema GET) |
| Response | `ApiResponse<SyncJobPagedResult>` / `ApiResponse<SyncJobDto>` / `ApiResponse<PartnerAdapterPagedResult>` / `ApiResponse<IReadOnlyList<IntegrationEndpointDto>>` · health = `IntegrationHealthResponse` (không wrap `ApiResponse` — keep live) |
| Auth perm | `integration.sync-jobs.read\|create\|update\|delete\|retry` · `integration.partners.read\|toggle` · `integration.endpoints.read` · `integration.assets.import` · `integration.sync.offline-batch` — `[RequirePermission]` **TODO** CommonLib (debt P1 · FE gate ON · BE stub OK) |
| Persist | flat scalars — `LogJson` = **string column** max 8000 (không parent JSON blob / không nested entity) |
| Out of pack | inbound webhook runtime P2 · public citizen API · full Swagger host · CUC2 master · **feedback** / **citizen** / partner-unit master · ERP.* |

## Route decision

| | Choice |
|--|--------|
| Domain prefix | `api/v1/integration` · BFF `web-bff/api/v1/integration` |
| FE BASE | `/integration/*` via BFF |
| Hub UI | `/integration` |
| Form UI | `/integration/import` · `/integration/import/:id` · `/integration/jobs/new` · `/integration/jobs/:id` · `/integration/partners/:id` |
| UI schema | `api/v1/integration/catalogs/{integration-sync-jobs\|integration-partners\|integration-endpoints}/ui-schema` |

## Implement gates (SA chốt)

| Gate | Decision | Note |
|------|----------|------|
| **TZ** | **n/a** (`tz_na`) | Store `StartedAt` / `FinishedAt` / `CreatedAt` / `UpdatedAt` **UTC** (`ToUniversalTime` / `DateTime.UtcNow`). Display local FE. |
| **XCO** | **required** (`xco_get_only`) | `GET …/sync-jobs/{id}` — `IgnoreQueryFilters` + claim `allowed_company_ids` · 403 `SyncJobForbiddenException`. **Không** XCO trên list/POST/PUT/DELETE/retry. Partner GetById = tenant filter only (404) — **không** XCO P1. |
| **SHARE** | **tenant_keep** (`share_tenant`) | `SyncJobEntity.CompanyCode` · `PartnerAdapterEntity.CompanyCode` · `ICompanyContext`. Unique `(CompanyCode, Code)` trên jobs. |

## Live verify (this SA role — read BE, no write)

| Check | Result |
|-------|--------|
| API-03 list jobs | **PASS** — query `search` · `syncType` · `status` · `page` · `pageSize` |
| Job search fields | **PASS** — Code · Partner · SyncType · Status · FileName · Note |
| PageSize jobs/partners | **PASS** — allow 50 / 100 / 200 / 500 (else 50) |
| API-04 XCO | **PASS** — `GetByIdAsync` + 403 |
| IdCode | **PASS** — server `SYNC-yyyyMMdd-nnnn` · Create **không** nhận Code từ client |
| Soft delete job | **PASS** — `IsActive=false` |
| Retry | **PASS** — `POST …/sync-jobs/{id}/retry` mock → `done` |
| Partners list | **PASS** — `search` · page · pageSize · Name/SystemType/Auth/Health/Phase |
| Partner toggle | **PASS** — `POST …/partners/{id}/toggle` |
| Endpoints catalog | **PASS** — in-memory P1 list · **không** query `search`/`phase`/`page` (FE filter P1) |
| Import / offline-batch | **PASS** — tạo `SyncJob` mock |
| Parent JSON | **PASS** — DTO/entity flat; `LogJson` varchar column only |
| BFF querystring | **PASS** — SyncJobs + Partners `BuildListPath()`; schema GET forwards qs |
| CatalogUiSchema 3 kinds | **PASS** — Registry + `CatalogUiSchemaSeed.IntegrationSyncJobs/Partners/Endpoints` |
| `[RequirePermission]` | **TODO** CommonLib — không block P1 |
| Enum lookup APIs | **none** — static FE (SA chốt) |
| New migration | **n/a** |
| Import FileName BE required | **GAP-SA-IMPORT-01** — Design `fileName` * · BE `CreateImportAsync` **không** 422 khi thiếu file — **FE required P1** · không block pipeline · TL optional T-BE |

## 2. Form data → entity

| Screen | Fields | Entity |
|--------|--------|--------|
| List Endpoints | method, path, description, phase, auth, status | static `IntegrationEndpointDto` (không table) |
| List Sync | code, syncType, partner, status, recordCount, startedAt, finishedAt, error | `SyncJobEntity` |
| List Partners | name, systemType, auth, health, phase, enabled | `PartnerAdapterEntity` |
| Form Import / Job | Design §3 | `SyncJobEntity` |
| Form Partner | Design §3 View | `PartnerAdapterEntity` |

### Field map jobs (ui → dto → db)

| uiField | dtoField | dbColumn / property | Notes |
|---------|----------|---------------------|-------|
| code | Code | `Code` varchar(64) | IdCode server-gen `SYNC-YYYYMMDD-NNNN` · all modes readonly |
| syncType | SyncType | `SyncType` varchar(32) | `import` / `offline-batch` / `webhook` |
| partner | Partner | `Partner` varchar(128) | * |
| status | Status | `Status` varchar(32) | `draft` / `running` / `done` / `failed` · SearchInput form |
| recordCount | RecordCount | `RecordCount` int | |
| startedAt | StartedAt | `StartedAt` timestamptz | UTC |
| finishedAt | FinishedAt | `FinishedAt` timestamptz | UTC |
| error | Error | `Error` varchar(2000) | |
| logText | LogJson | `LogJson` varchar(8000) | display FE parse string[] · **không** parent blob |
| assetType | AssetType | `AssetType` varchar(64) | Import · static FE |
| region | Region | `Region` varchar(64) | Import · static FE |
| route | Route | `Route` varchar(64) | Import · static FE |
| section | Section | `Section` varchar(128) | |
| fileName | FileName | `FileName` varchar(256) | * FE |
| note | Note | `Note` varchar(2000) | |

### Field map partners

| uiField | dtoField | dbColumn | Notes |
|---------|----------|----------|-------|
| name | Name | `Name` varchar(128) | |
| systemType | SystemType | `SystemType` varchar(64) | |
| auth | Auth | `Auth` varchar(64) | |
| health | Health | `Health` varchar(16) | `ok` / `warn` / `bad` |
| enabled | Enabled | `Enabled` bool | toggle API |
| phase | Phase | `Phase` varchar(8) | live seed `P1`/`P2`/`P3` — FE enum `p1` map uppercase khi so sánh |

**Cấm** parent JSON string trên field/DTO (trừ `LogJson` scalar).

## 3. API catalog (keep · no new endpoints this pack)

| id | Method | Path | Perm | Notes |
|----|--------|------|------|-------|
| API-01 | GET | `/api/v1/integration/health` | — | adapter summary |
| API-02 | GET | `/api/v1/integration/endpoints` | read | static catalog · **FE** filter `epSearch`/`epPhase` |
| API-03 | GET | `/api/v1/integration/sync-jobs` | read | `search` `syncType` `status` `page` `pageSize` |
| API-04 | GET | `/api/v1/integration/sync-jobs/{id}` | read · **XCO** | hydrate View/Edit |
| API-05 | POST | `/api/v1/integration/sync-jobs` | create | `CreateSyncJobRequest` · no Code |
| API-06 | PUT | `/api/v1/integration/sync-jobs/{id}` | update | `UpdateSyncJobRequest` |
| API-07 | DELETE | `/api/v1/integration/sync-jobs/{id}` | delete | soft |
| API-08 | POST | `/api/v1/integration/sync-jobs/{id}/retry` | retry | |
| API-09 | GET | `/api/v1/integration/partners` | read | `search` `page` `pageSize` |
| API-10 | GET | `/api/v1/integration/partners/{id}` | read | View form |
| API-11 | POST | `/api/v1/integration/partners/{id}/toggle` | toggle | |
| API-12 | POST | `/api/v1/integration/assets/import` | import | → SyncJob `import` |
| API-13 | POST | `/api/v1/integration/sync/offline-batch` | offline-batch | → SyncJob |
| API-14 | GET/PUT | `/api/v1/integration/catalogs/{kind}/ui-schema` | — | 3 kinds IN P1 |

BFF: `web-bff/api/v1/integration/**` proxy only — **không** strip query · **không** business logic.

Webhook `POST /webhooks/{partner}` = **OUT P1**.

## 4. Lookup APIs (SA chốt — Design SearchInput)

> Data-analy **đề xuất**. Design **chốt control**. SA **chốt API**. Dev **cấm** đoán Text vs SearchInput. **Cấm** native `<select>`.

| Lookup | controlHint consumer | API P1 | Decision |
|--------|----------------------|--------|----------|
| integration-phase | Zone B Endpoints | **none** | static FE: `` Tất cả · `p1` · `p2` · `p3` · map catalog `P1` |
| integration-sync-type | Zone B Sync | **none** | static FE · filter API-03 `?syncType=` |
| integration-job-status | Zone B + form Job | **none** | static FE · filter API-03 `?status=` |
| integration-asset-type | Import form | **none** | static FE |
| integration-region | Import form | **none** | static FE |
| integration-route | Import form | **none** | static FE |
| 3 catalogKind schema | Zone F | **existing** GET/PUT catalogs ui-schema | **IN P1** · seed **đã có** · **cấm** clone schema BFF · **cấm** `configHint` |
| CUC2 / Excel master | — | — | **OUT** |

Seed `Fields[].Control` = `SELECT` / `DATE` là **metadata schema editor** — **không** = native Select trên UI. Production filter/form = `SearchInput` static.

## 5. Tables

- `rmms_sync_jobs` — tenant · `IsActive` · unique `(CompanyCode, Code)` · index `(CompanyCode, StartedAt)`
- `rmms_partner_adapters` — tenant · `IsActive`
- **T-BE-02** = **n/a**

## 6. Tasks for TL (emit pack)

| id | layer | SA verdict |
|----|-------|------------|
| T-CTX-01 | docs | pending — re-lock context vs Design full-page (CTX còn Kind D slideout) |
| T-BE-01 | api | **verified PASS** hub CRUD — TL keep verify/no-op unless regression |
| T-BE-02 | migration | **n/a** |
| T-BE-SCHEMA-01 | api Integration | **verified PASS** 3 kinds — no new seed unless column GAP |
| T-BFF-01 | bff | **verified PASS** querystring forward |
| T-PERM-01 | ui+api | pending — codes documented; attribute TODO NuGet |
| T-UI-LIST-01 | ui | pending TL — A–D · 1× LinPageLayout · LinCatalogDataGrid · LinCatalogListPagination · `LinCatalogUiSchemaEditorModal` 3 kinds · **cấm** leftover `const columns` |
| T-UI-FORM-01 | ui | pending — **full-page** Import/Job/Partner · View=`<dl>` · **cấm** Slideout/Resource |
| T-UI-LKP-01 | ui | pending — SearchInput static 6 enums |
| T-UI-FIELD-01 | ui | pending — Design §3 map |
| T-UI-PROD-01 | ui | pending |
| T-UI-UX-01 | ui | pending |
| T-UI-ACT-01 | ui | pending — Import/Thêm job Zone B · row Retry/Toggle · LeaveConfirmModal |
| T-UI-LEAVE-01 | ui | pending — dirty leave-confirm |
| T-QA-* | qa | pending |

## 7. Confirm

`solution_confirm` = **approve** — `autoApprove=ON` (`task_13deb688`) · agent tự confirm. Roles sau = **pending** đến lượt. Chain **team-lead**.

Repo: `be_repo_confirm` = `Linm.RMMS.WebService` · `ui_repo_confirm` = `Linm.Web.RMMS.Integration` (board ticks prior — SA **không** auto-tick mới).

**This SA role: no FE/BE source write.** Verify MFE `yarn build` PASS (gate packet). Dev must `yarn build` + `dotnet build` nếu đụng API/schema.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.15.19 |
| schemaVersion | qldb-workflow-skill-v1 |
| workflowVersion | 2026.08.15.19 |
| rulesVersion | 2026.08.16.02 |
| generatedAt | 2026-08-16T06:05:00.000+07:00 |
| versionGate | rechecked |
| version_mismatch_action | recheck_new (STATUS) |
| orchestratorSkillVersion | 2026.08.15.19 |
| orchestratorWorkflowVersion | 2026.08.15.19 |
| orchestratorSchemaVersion | qldb-workflow-skill-v1 |
| dataAnalySkillVersion | 2026.08.15.5 |
| poSkillVersion | 2026.08.15.17 |
| designSkillVersion | 2026.08.15.19 |
| contentHashPriorDataAnaly | sha256:integration-delta-schema-fullpage-20260816 |
| taskId | `task_13deb688` |

---
<!-- Version meta: skillVersion=2026.08.15.19 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.15.19 · rulesVersion=2026.08.16.02 · versionGate=rechecked -->
