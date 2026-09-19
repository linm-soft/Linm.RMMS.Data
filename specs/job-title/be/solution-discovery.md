# Solution discovery — job-title

> Status: **confirmed** (`solution_confirm=approve` · Autopilot ON · roleOnly=sa · task `task_eb28f575`)  
> Domain: **Integration** (DOMAIN-MAP) · share_a · tz_na · xco_get_only  
> Route: `api/v1/integration/job-titles` · BFF proxy · **cấm** `api/v1/rmms/*` · **cấm** ERP.* · **cấm** `open-api`

| Field | Value |
|-------|-------|
| feature | `job-title` |
| packKind | `master` (Kind B catalog · Slideout) |
| changeScope | `new_page` |
| status | `confirmed` |
| design_confirm | approve |
| domain_map | **Integration** · slug `job-title` · resource `job-titles` (GAP-JOB-DM-01 → update row stub) |
| be_repo_confirm | `D:/AI-QLBD/Linm.RMMS.WebService` |
| ui_repo_confirm | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` |
| sa_tz_gate | **tz_na** |
| sa_xco_gate | **xco_get_only** |
| sa_shared_table | **share_a** |
| solution_confirm | **approve** |
| contentHash | `sha256:fdd8fabdbf6bf58d33835fa5d4d1da37922f18062175288d9316f9ced76071ab` |
| updatedAt | `2026-09-19T02:35:00.000Z` |

## 1. Ownership

| Layer | Repo / module |
|-------|---------------|
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` · route `/mas/chuc-vu` · mfeStdUrl `http://localhost:9318/mas/chuc-vu` |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| API domain | `Domains/Integration/` · `JobTitlesController` |
| Models | `api/domains/integration/…/DTOs/` · `JobTitleDto` / create-update |
| Persistence | `api/shared/RMMS.Service.Persistence/` · entity `JobTitleEntity` · table `rmms_job_titles` |
| Migrations | `Schema_RmmsJobTitles` + seed Up from `job-title-seed.json` (~19) — **GAP-JOB-05** |
| BFF | `bff/domains/integration/…` · **proxy only** · `web-bff/api/v1/integration/job-titles/**` |
| Seed SSOT | `D:/AI-QLBD/Linm.RMMS.Data/docs/context/seed/job-title-seed.json` |
| Context | `docs/context/features/job-title.md` |
| Demo | **N/A** (`master-catalog-no-demo`) |
| data-import | seed JSON primary · Excel `data-import/cuc-01/ds-nhan-su-rmms/Danh sách nhân sự số hóa 10.9.2026.xlsx` → `legacyAliases` only |

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` · be_repo_confirm |
| Domain | Integration / `integration` · DOMAIN-MAP |
| API host | `api/src/…/Domains/Integration/` · prefix `api/v1/integration` |
| Resource | `/job-titles` |
| BFF | `bff/domains/integration/…` · proxy only = **yes** |
| MFE | Master · ui_repo_confirm · `/mas/chuc-vu` |
| Response | Linm.Platform.CommonLib `ApiResponse` / paged |
| Auth perm | Linm.Platform.Authentication · `master.job-titles.read\|create\|update\|delete` |
| Persist | flat `JobTitleEntity` · **no** parent `*Json` inventory · `legacy_aliases` scalar text (pipe/`\|` or JSON string[]) |
| Code | business `code` IdCode · **cấm** Guid làm mã · create: `IIdCodeService.GenerateAsync` hoặc nhập chuẩn · lock edit |
| Out of pack | map · media · Auth package CRUD · consumer staff/ProfileTab (peer users/Auth) |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | CatalogListShell · LinErpListFilterBar · Slideout · LeaveConfirmModal · **cấm** local Lin* clone |
| HTTP | apiClient SSOT · SETUP-P2-12 | FE BASE `/integration/job-titles` |
| BE | Linm.Platform.CommonLib | ApiResponse |
| Auth | Linm.Platform.Authentication + RequirePermission | codes trên |
| Persist | no-parent-json-field | không `*LinesJson` / blob inventory |
| Shared | ISharedMasterCatalogEntity | Scope Shared · share_a |

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **n/a** | không date / fromDate-toDate trên list+form | /review-timezone-implement | Autopilot `sa_tz_gate=tz_na` |
| XCO | **get_only** | API-04 GET `/{id}` View | /implement-view-cross-company | AllowedCompanyIds · shared Scope |
| SHARE | **A** | Entity `JobTitleEntity` | /implement-shared-table | Master catalog shared |

AskQuestion (Autopilot autoApprove): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_a` · `2026-09-19T02:35:00.000Z`

## FormType pack

| | |
|--|--|
| packKind | `master` |
| formPattern | List **Full page** · Form **Slideout** (`data-form-cols=2`) |
| Screens | S-LIST DES-GRID-A…D · F · H · S-FORM DES-GRID-Z · DES-LEAVE |
| filter | `LinErpListFilterBar` · keys `search` · `titleGroup` · 🔍 mép phải · **cấm** nút Tìm · **cấm** `filterItems` |
| leave | LeaveConfirmModal |
| tabs | none |
| report/export/chart | n/a |
| devSlash | `/agent-dev` |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/job-title/ui/prototype/job-title-list-prototype.html` |
| peerStdUrl | `file:///D:/AI-Rules/Linm.Development.Rules/common/skill/agent-design/example/shared-grid-example.html` |

### FormMode ↔ API

| FormMode / surface | API | Notes |
|--------------------|-----|-------|
| List search / filter | API-01 GET `/` | `search` · `titleGroup` · page · pageSize |
| Create | API-05 POST `/` (+ API-03 init) | code GenerateAsync hoặc nhập · titleGroup→packageHint default |
| Edit | API-04 GET `/{id}` → API-06 PUT `/{id}` | code **lock** |
| View | API-04 GET `/{id}` | readonly Slideout |
| Dropdown titleGroup / packageHint | API-03 GET `/init-data` | **cấm** static enum FE-only |
| Consumer SearchInput `jobTitleCode` | API-02 GET `/search` | staff + ProfileTab (peer) |
| Soft-delete / deactivate | API-07 DELETE `/{id}` | `IsActive=false` |

## Form / screen → data inventory

| Screen / FormMode | Fields (UI) | Source type | Persist entity | Notes |
|-------------------|-------------|-------------|----------------|-------|
| List filter | search · titleGroup | query | — | LinErpListFilterBar |
| Create/Edit/View | code · name · titleGroup · packageHint · legacyAliases · isActive | body / detail | JobTitleEntity | Slideout |
| Consumer staff/Profile | jobTitleCode | SearchInput master | AppUser / Auth Position | peer · không form catalog |

## Field map

| uiField | dtoField | dbColumn | controlHint |
|---------|----------|----------|-------------|
| search | Search | — (query) | SearchTextInput |
| titleGroup | TitleGroup | `title_group` | Dropdown · LEAD/TECH/PATROL |
| code | Code | `code` UK | Text code · cấm Guid |
| name | Name | `name` | Text |
| packageHint | PackageHint | `package_hint` | Dropdown/derived · LEAD→MANAGER-RMMS · TECH/PATROL→RMMS-TDTK |
| legacyAliases | LegacyAliases | `legacy_aliases` | Text/tags · Excel aliases |
| isActive | IsActive | `is_active` | Switch |
| — | SortOrder | `sort_order` | optional |
| jobTitleCode (consumer) | JobTitleCode | AppUser.`job_title_code` | SearchInput · peer |

## 3. API catalog

Base API: `api/v1/integration/job-titles`  
BFF: `web-bff/api/v1/integration/job-titles/**` · proxy-only  
FE BASE: `/integration/job-titles`

| id | Method | Path | Purpose |
|----|--------|------|---------|
| API-01 | GET | `/` | List/search paged |
| API-02 | GET | `/search` | SearchInput consumer |
| API-03 | GET | `/init-data` | titleGroups + packageHints |
| API-04 | GET | `/{id}` | Detail View/Edit |
| API-05 | POST | `/` | Create |
| API-06 | PUT | `/{id}` | Update |
| API-07 | DELETE | `/{id}` | Soft-delete |

### API-01: GET /api/v1/integration/job-titles

| | |
|--|--|
| Purpose | List/filter paged danh mục chức vụ |
| Permission | `master.job-titles.read` |
| Tenant | X-Company-Id · shared catalog Scope |
| Request | query: `search?` · `titleGroup?` · `page` · `pageSize` · `isActive?` |
| Response | paged `{ id, code, name, titleGroup, packageHint, legacyAliases, isActive, sortOrder }` |
| Errors | 401 · 403 |
| Form surfaces | S-LIST filter |
| Field map | search→Search · titleGroup→TitleGroup |
| Context | `docs/context/features/job-title.md` |
| Demo | N/A |
| data-import | `docs/context/seed/job-title-seed.json` |
| Sample row | `HAT-TRUONG` / Hạt trưởng / LEAD / MANAGER-RMMS |
| Migration | Schema_RmmsJobTitles |
| gates | tz=n/a · xco=n/a · shared=inherit A |

### API-02: GET /api/v1/integration/job-titles/search

| | |
|--|--|
| Purpose | SearchInput lookup cho consumer `jobTitleCode` |
| Permission | `master.job-titles.read` |
| Request | `search` · `page` · `pageSize` · `excludeCode?` · `titleGroup?` |
| Response | `{ code, name, titleGroup, packageHint, isSelectable }[]` |
| controlHint | **SearchInput** catalogKind `job-title` — **cấm** free Text |
| Form surfaces | peer staff · ProfileTab |
| Context / seed | same as API-01 |
| gates | tz=n/a · xco=n/a · shared=inherit A |

### API-03: GET /api/v1/integration/job-titles/init-data

| | |
|--|--|
| Purpose | Dropdown options titleGroup + packageHint |
| Permission | `master.job-titles.read` |
| Response | `{ titleGroups: [{value,label}], packageHints: [{value,label}], titleGroupPackageMap: { LEAD: MANAGER-RMMS, TECH: RMMS-TDTK, PATROL: RMMS-TDTK } }` |
| controlHint | Dropdown / LOOKUP_STATIC — **cấm** FE-only enum |
| Form surfaces | filter + form C/E |
| gates | tz=n/a · xco=n/a · shared=inherit A |

### API-04: GET /api/v1/integration/job-titles/{id}

| | |
|--|--|
| Purpose | Detail cho View / Edit |
| Permission | `master.job-titles.read` |
| Request | path Guid `id` |
| Response | full DTO |
| Errors | 404 · 403 |
| Form surfaces | View · Edit load |
| gates | tz=n/a · **xco=yes** · shared=inherit A |
| Migration | none |

### API-05: POST /api/v1/integration/job-titles

| | |
|--|--|
| Purpose | Create |
| Permission | `master.job-titles.create` |
| Request | body: `code?` · `name*` · `titleGroup*` · `packageHint*` · `legacyAliases?` · `isActive?` |
| Response | created DTO |
| Errors | 409 code · 422 validation |
| Form surfaces | Create |
| Field map | ui→dto→db như bảng Field map |
| Notes | GenerateAsync nếu thiếu code · packageHint default từ titleGroup map |
| gates | tz=n/a · xco=n/a · shared=inherit A |
| Migration | Schema_RmmsJobTitles |

### API-06: PUT /api/v1/integration/job-titles/{id}

| | |
|--|--|
| Purpose | Update |
| Permission | `master.job-titles.update` |
| Request | body: `name*` · `titleGroup*` · `packageHint*` · `legacyAliases?` · `isActive` — **không** đổi `code` |
| Response | updated DTO |
| Errors | 404 · 422 · 409 |
| Form surfaces | Edit |
| gates | tz=n/a · xco=n/a · shared=inherit A |

### API-07: DELETE /api/v1/integration/job-titles/{id}

| | |
|--|--|
| Purpose | Soft-delete (`IsActive=false`) |
| Permission | `master.job-titles.delete` |
| Errors | 404 · 409 nếu đang được reference (consumer) |
| Form surfaces | row menu Xóa |
| gates | tz=n/a · xco=n/a · shared=inherit A |

## Persist / entity

| | |
|--|--|
| Entity | `JobTitleEntity` : `ISharedMasterCatalogEntity` |
| Table | `rmms_job_titles` |
| UK | `code` |
| Columns | `id` Guid · `code` · `name` · `title_group` · `package_hint` · `legacy_aliases` · `is_active` · `sort_order` · audit/tenant shared cols |
| Child tables | **none** (không parent JSON lines) |
| Migration | `Schema_RmmsJobTitles` · Seed_* từ seed JSON |

## Gaps (chốt SA)

| ID | Decision |
|----|----------|
| GAP-JOB-DM-01 | DOMAIN-MAP đã có stub `job-title` → Integration · Dev/TL cập nhật note LKP→CRUD share_a |
| GAP-JOB-BE-01 | Greenfield controller + entity + Schema_* + GenerateAsync |
| GAP-JOB-05 | Seed JSON → DB trong migration/CatalogHandler — **cấm** demoItems FE |
| GAP-JOB-MFE-01 | Dev Master Kind B `/mas/chuc-vu` |
| GAP-JOB-02/06 | Consumer SearchInput — peer users/Auth (không block catalog CRUD) |
| GAP-JOB-01/03/04 | Alias seed / Auth packages / menu — ngoài core API; note TL |

## Handoff → TL

| Field | Value |
|-------|-------|
| formType / packKind | master · Slideout · Kind B |
| FormMode↔API | C→API-05 · E→API-04+06 · V→API-04 · List→API-01 · init→API-03 · search→API-02 |
| APIs | API-01…07 |
| TZ/XCO/SHARE | tz_na · xco_get_only · share_a |
| entity/migration | JobTitleEntity · Schema_RmmsJobTitles · seed ~19 |
| BFF | proxy only |
| perm | `master.job-titles.*` |
| Open questions | none |
| Next | `/agent-team-lead` · T-* (DEFER) · `T-UI-FILTER-01` · route_confirm |

Suggested task ids (TL chốt HOW): T-CTX · T-BE · T-SEED · T-BFF · T-PERM · T-DM · T-UI-LIST · T-UI-FORM · T-UI-FILTER-01 · T-QA

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | `agent-sa` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.01` |
| rulesVersion | `2026.09.19.2` |
| contentHash | `sha256:fdd8fabdbf6bf58d33835fa5d4d1da37922f18062175288d9316f9ced76071ab` |
| generatedAt | `2026-09-19T02:35:00.000Z` |
| taskId | `task_eb28f575` |
| versionGate | `ok` |
