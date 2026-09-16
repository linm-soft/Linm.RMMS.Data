# Solution discovery — feedback (Góp ý phần mềm)

> Status: **confirmed** (`solution_confirm=approve` · autopilot `task_064242e5` · `/agent-sa`)  
> Standards: api-endpoint · bff-api-structure · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates**  
> **Cấm** ERP.WebService · `ERP.Service.*` · Domains/Master · `api/v1/rmms/*`

| Field | Value |
|-------|-------|
| feature | `feedback` |
| this role | `sa` · `/agent-sa` |
| packKind | `list` (Kind **B** catalog A–D + Zone F schema + **full-page** form) |
| status | `confirmed` |
| design_confirm | approve (`task_de49ebf9`) |
| solution_confirm | **approve** (`autoApprove=ON` · `task_064242e5`) |
| changeScope | `edit_page` |
| prior · design | `confirmed` · `ui/design.md` + prototype · `2026-08-16T05:15:00.000Z` |
| prior · po | `confirmed` · `po/requirement.md` · GAP-PO-FB-01..13 |
| prior · data_analy | `confirmed` · `specs/_data-analy/features/feedback-control-hint.md` · hash `sha256:feedback-delta-fullpage-schema-20260816` |
| updatedAt | `2026-08-16T05:20:00.000Z` |
| taskId | `task_064242e5` |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Integration` · `/integration/feedback` |
| domain | **Integration** |

**SUPERSEDED:** solution 2026-08-09 (skill `2026.08.08.17`). **Keep** CRUD + table + schema seed ownership; **re-lock** Kind B **full-page** (cấm Slideout) + lookup **static FE** + CatalogUiSchema `app-feedbacks`.

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Integration` (`/integration/feedback` · form `/new` · `/:id`) |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | `api/src/RMMS.Service.Api/Domains/Integration/` · `AppFeedbacksController` · `AppFeedbackService` |
| Models / DTO | `api/domains/integration/LINM.RMMS.Integration.Models/DTOs/AppFeedbackDtos.cs` |
| Persistence | `api/shared/RMMS.Service.Persistence/Entities/AppFeedbackEntity.cs` · table `rmms_app_feedbacks` |
| Migrations | **n/a this pack** — `20260809160018_Schema_RmmsAppFeedbacks` exists |
| BFF | `bff/domains/integration/LINM.RMMS.Integration.Bff/Controllers/AppFeedbacksBffController.cs` |
| UI schema | `CatalogUiSchemaRegistry.AppFeedbacks` = `app-feedbacks` · `GET/PUT api/v1/integration/catalogs/{kind}/ui-schema` |
| Docs | DOMAIN-MAP `feedback` → Integration · `docs/context/features/feedback.md` |

### Architecture

| Layer | Choice |
|-------|--------|
| Domain | Integration / `integration` · DOMAIN-MAP |
| API host | `Domains/Integration/` |
| BFF | proxy only = **yes** (`Request.QueryString` forward) |
| Response | `ApiResponse<AppFeedbackPagedResult>` / `ApiResponse<AppFeedbackDto>` |
| Auth perm | `integration.feedbacks.read\|create\|update\|delete` — `[RequirePermission]` **TODO** CommonLib (debt P1 · FE gate ON · BE stub OK) |
| Persist | flat scalars on `AppFeedbackEntity` — **cấm** parent JSON blob |
| Out of pack | email/notify (GAP-PO-FB-09 P2) · media attach (GAP-PO-FB-10 P2) · chrome demo / localStorage-only · CUC2 master · **citizen** |

## Route decision

| | Choice |
|--|--------|
| Domain prefix | `api/v1/integration` · BFF `web-bff/api/v1/integration` |
| Resource | `/feedbacks` → **`api/v1/integration/feedbacks`** |
| FE BASE | `/integration/feedbacks` (via BFF) |
| List UI | `/integration/feedback` |
| Form UI | `/integration/feedback/new` · `/integration/feedback/:id` |
| UI schema | `api/v1/integration/catalogs/app-feedbacks/ui-schema` |

## Implement gates (SA chốt)

| Gate | Decision | Note |
|------|----------|------|
| **TZ** | **n/a** (`tz_na`) | Store `SubmittedAt` / `CreatedAt` / `UpdatedAt` **UTC** on write (`ToUniversalTime` / `DateTime.UtcNow`). Display local FE (`DateTime` control). List filter **không** date P1. |
| **XCO** | **required** (`xco_get_only`) | `GET …/feedbacks/{id}` — `IgnoreQueryFilters` + claim `allowed_company_ids` · 403 `AppFeedbackForbiddenException`. **Không** XCO trên list/POST/PUT/DELETE. |
| **SHARE** | **tenant_keep** (`share_tenant`) | `AppFeedbackEntity.CompanyCode` · `ICompanyContext`. Unique `(CompanyCode, Code)`. |

## Live verify (this SA role — read BE, no write)

| Check | Result |
|-------|--------|
| API-01 list query | **PASS** — `search` · `status` · `page` · `pageSize` |
| Search fields | **PASS** — Code · SenderName · Role · Category · Status · Body (`ToLower().Contains`) |
| PageSize | **PASS** — allow 50 / 100 / 200 / 500 (else 50) |
| API-02 XCO | **PASS** — `GetByIdAsync` + 403 |
| IdCode | **PASS** — server `FB-yyyyMMdd-nnnn` · Create **không** nhận Code từ client |
| Body required | **PASS** — `ArgumentException` → 422 |
| Soft delete | **PASS** — `IsActive=false` |
| Parent JSON | **PASS** — DTO/entity flat scalars only |
| BFF querystring | **PASS** — `BuildListPath()` forwards `Request.QueryString` |
| CatalogUiSchema `app-feedbacks` | **PASS** — `CatalogUiSchemaRegistry.AppFeedbacks` + `CatalogUiSchemaSeed.AppFeedbacks()` list keys `code,senderName,role,category,body,submittedAt,status` |
| `[RequirePermission]` | **TODO** CommonLib — không block P1 CRUD |
| History API | stub FE — keep |
| Enum lookup APIs | **none** — static FE (SA chốt) |
| New migration | **n/a** |

## 2. Form data → entity

| Screen | Fields | Entity |
|--------|--------|--------|
| List filter | search, status, page, pageSize | — |
| List grid | code, senderName, role, category, body (preview), submittedAt, status | `AppFeedbackEntity` |
| Form Z2 | Design §3 inventory | `AppFeedbackEntity` |

### Field map (ui → dto → db)

| uiField | dtoField | dbColumn / property | Notes |
|---------|----------|---------------------|-------|
| code | Code | `Code` varchar(64) | IdCode server-gen `FB-YYYYMMDD-NNNN` · all modes readonly · copy = mã mới (POST) |
| senderName | SenderName | `SenderName` varchar(128) | * required · **lock live 128** (không widen 256 this pack) |
| role | Role | `Role` varchar(64) | * enum static `tuan-duong` / `quan-ly` / `tuan-kiem` |
| submittedAt | SubmittedAt | `SubmittedAt` timestamptz | * UTC store |
| category | Category | `Category` varchar(64) | * enum `loi` / `de-xuat` / `ux` / `khac` |
| body | Body | `Body` varchar(4000) | * textarea |
| status | Status | `Status` varchar(32) | * `draft` / `sent` · list filter trống = tất cả |
| userId | UserId | `UserId` varchar(128)? | optional · không hiện Zone B |

**Cấm** parent JSON string trên field/DTO.

## 3. API catalog (CRUD — keep · no new endpoints)

| id | Method | Path | Perm | Notes |
|----|--------|------|------|-------|
| API-01 | GET | `/api/v1/integration/feedbacks` | read | query `search` `status` `page` `pageSize` |
| API-02 | GET | `/api/v1/integration/feedbacks/{id}` | read · **XCO** | hydrate View/Edit |
| API-03 | POST | `/api/v1/integration/feedbacks` | create | `CreateAppFeedbackRequest` · no Code |
| API-04 | PUT | `/api/v1/integration/feedbacks/{id}` | update | `UpdateAppFeedbackRequest` |
| API-05 | DELETE | `/api/v1/integration/feedbacks/{id}` | delete | soft `IsActive=false` |

BFF: `web-bff/api/v1/integration/feedbacks/**` proxy only — **không** strip query · **không** business logic.

## 4. Lookup APIs (SA chốt — Design SearchInput)

> Data-analy **đề xuất**. Design **chốt control**. SA **chốt API**. Dev **cấm** đoán Text vs SearchInput. **Cấm** native `<select>`.

| Lookup | controlHint consumer | API P1 | Decision |
|--------|----------------------|--------|----------|
| feedback-status | Zone B filter + form | **none** | static FE: `` Tất cả (list only) · `draft` Nháp · `sent` Đã gửi · filter via API-01 `?status=` |
| feedback-role | form | **none** | static FE 3 values |
| feedback-category | form | **none** | static FE 4 values |
| app-feedbacks schema | Zone F | **existing** `GET/PUT /api/v1/integration/catalogs/app-feedbacks/ui-schema` | **IN P1** · seed **đã có** · **cấm** clone CatalogUiSchema BFF · **cấm** `configHint` |
| CUC2 / Excel master | — | — | **OUT** — không invent |

Seed `Fields[].Control` = `SELECT` / `DATE` / `TEXTAREA` là **metadata schema editor** — **không** = native Select trên UI. Form/list filter production = `SearchInput` static.

P2 (không block TL): `Lookup.SearchFieldKeys` hiện `code,senderName,body` — list search BE đã gồm role/category; có thể align keys nếu Dev đụng seed.

## 5. Tables

- `rmms_app_feedbacks` — tenant · `IsActive` soft-delete · unique `(CompanyCode, Code)` · index `(CompanyCode, SubmittedAt)`
- **T-BE-02** = **n/a** (migration đã apply)

## 6. Tasks for TL (emit pack)

| id | layer | SA verdict |
|----|-------|------------|
| T-CTX-01 | docs | pending — re-lock context vs Design full-page nếu còn copy slideout |
| T-BE-01 | api | **verified PASS** CRUD — TL keep verify/no-op unless regression |
| T-BE-02 | migration | **n/a** |
| T-BE-SCHEMA-01 | api Integration | **verified PASS** kind `app-feedbacks` — no new seed unless column GAP |
| T-BFF-01 | bff | **verified PASS** querystring forward |
| T-PERM-01 | ui+api | pending — codes documented; attribute TODO NuGet (debt P1) |
| T-UI-LIST-01 | ui | pending TL — A–D · 1× LinPageLayout · LinCatalogDataGrid · LinCatalogListPagination · schema editor FULL |
| T-UI-FORM-01 | ui | pending TL — **full-page** `FeedbackFormPage` · View=`<dl>` · **cấm** Slideout/Resource |
| T-UI-LKP-01 | ui | pending — SearchInput static enums |
| T-UI-FIELD-01 | ui | pending — Design §3 map |
| T-UI-PROD-01 | ui | pending |
| T-UI-UX-01 | ui | pending |
| T-UI-ACT-01 | ui | pending — toolbar/row Delete · Lin confirm |
| T-QA-* | qa | pending |

## 7. Confirm

`solution_confirm` = **approve** — `autoApprove=ON` · agent tự confirm. Roles sau = **pending** đến lượt. Chain **team-lead**.

Repo: `be_repo_confirm` = `Linm.RMMS.WebService` · `ui_repo_confirm` = `Linm.Web.RMMS.Integration` (board ticks prior — SA **không** auto-tick mới).

**This SA role: no FE/BE source write.** Verify MFE `yarn build` PASS (gate packet). Dev must `yarn build` + `dotnet build` nếu đụng API/schema.

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.15.5 |
| schemaVersion | qldb-workflow-skill-v1 |
| workflowVersion | 2026.08.15.5 |
| rulesVersion | 2026.08.15.8 |
| generatedAt | 2026-08-16T05:20:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new (STATUS) |
| orchestratorSkillVersion | 2026.08.15.5 |
| orchestratorWorkflowVersion | 2026.08.15.5 |
| orchestratorSchemaVersion | qldb-workflow-skill-v1 |
| dataAnalySkillVersion | 2026.08.15.5 |
| poSkillVersion | 2026.08.15.5 |
| designSkillVersion | 2026.08.15.5 |
| contentHashPriorDataAnaly | sha256:feedback-delta-fullpage-schema-20260816 |
| taskId | `task_064242e5` |

---
<!-- Version meta: skillVersion=2026.08.15.5 · schemaVersion=qldb-workflow-skill-v1 · workflowVersion=2026.08.15.5 · rulesVersion=2026.08.15.8 · versionGate=rechecked -->
