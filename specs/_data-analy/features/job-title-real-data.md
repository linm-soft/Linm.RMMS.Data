# Real-data bind — job-title (Danh mục chức vụ)

| | |
|---|---|
| feature | `job-title` |
| packKind | `master` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_6ff91e27` |
| prefix | **target** `web-bff/api/v1/integration` → API `api/v1/integration` |
| resource | `job-titles` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `open-api` · **cấm** `api/v1/rmms/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` |
| mfeStdUrl | `http://localhost:9318/mas/chuc-vu` |
| mfeStdRoute | `/mas/chuc-vu` |
| map | `none` |
| demo | **N/A** (`master-catalog-no-demo.md`) |
| contentHash | `sha256:fb713e8bb66de8f7594300f9bc3772b2e3afdd17ecfa0e9f2098536073bd38db` |
| headerFingerprint | `sha256:fields:code,name,titleGroup,packageHint,legacyAliases,isActive` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.18.01` |
| rulesVersion | `2026.09.18.1` |
| analyzedAt | `2026-09-18T15:43:11.411Z` |

## § Delta Current vs New (`new_page` · `task_6ff91e27`)

| ID | Current | New |
|----|---------|-----|
| Artifacts | draft stubs | §A–§F filled · status **done** |
| API / entity | **0** JobTitle* | CTX path `integration/job-titles` · SA entity + Schema_* · GenerateAsync |
| MFE | **0** `/mas/chuc-vu` | Kind B list+Slideout · Design confirm |
| DOMAIN-MAP | **0** slug | GAP-JOB-DM-01 → SA |
| Seed | `job-title-seed.json` ~19 | import DB rồi GET BFF — **cấm** in-app demoItems |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/job-title.md` | — | version mismatch → gate |
| `context` | `docs/context/features/master.md` | — | hub peer |
| `context` | `docs/context/20-ORG-STRUCTURE-DRVN.md` (AppUser.JobTitle) | — | consumer free-text → GAP-JOB-02 |
| `import` | `docs/context/seed/job-title-seed.json` | empty grid | seed job / EnsureFromSeed |
| `import` | `data-import/cuc-01/ds-nhan-su-rmms/Danh sách nhân sự số hóa 10.9.2026.xlsx` | — | cột «Chức danh/nhiệm vụ» aliases |
| `api` | **target** `JobTitlesController` `api/v1/integration/job-titles` | empty grid | toast · **cấm** alert · **GAP-JOB-BE-01** chưa file |
| `api` · BFF | **target** proxy `web-bff/api/v1/integration/job-titles` | — | same resource |
| `entity` | **target** JobTitle entity · Schema_* pair nếu mới | — | SA chốt tên bảng |
| `domain` | `docs/DOMAIN-MAP.md` Integration | **GAP-JOB-DM-01** | thiếu slug `job-title` |
| `mfe` | **target** Master `/mas/chuc-vu` | — | **GAP-JOB-MFE-01** |

## §B — Bind field (HARD)

| uiField | Label | controlHint | catalogKind | GET | write field | sameMfe |
|---------|-------|-------------|-------------|-----|-------------|---------|
| search | Tìm | SearchTextInput | — | `GET …/job-titles?search=` | — | gap |
| titleGroup (filter) | Nhóm | Dropdown | job-title-group | `?titleGroup=` · init-data | — | gap |
| code | Mã | Text code | — | detail / by-code | `code` (create; GenerateAsync) | gap |
| name | Tên | Text | — | detail | `name` | gap |
| titleGroup | Nhóm | Dropdown | job-title-group | init-data | `titleGroup` | gap |
| packageHint | Package gợi ý | Dropdown / derived | — | init-data / derived từ titleGroup | `packageHint` | gap |
| legacyAliases | Alias | Text/tags | — | detail | `legacyAliases` | gap |
| isActive | Hiệu lực | Switch | — | detail | `isActive` | gap |
| jobTitleCode (consumer) | Chức vụ | SearchInput | **job-title** | `GET …/job-titles/search` | AppUser field | peer AppUser |

**Prefix map (target CTX):**

| Operation | Path |
|-----------|------|
| List | `GET /web-bff/api/v1/integration/job-titles?search=&titleGroup=` |
| Search | `GET /web-bff/api/v1/integration/job-titles/search` |
| Init | `GET /web-bff/api/v1/integration/job-titles/init-data` |
| Detail | `GET /web-bff/api/v1/integration/job-titles/{id}` |
| Create | `POST /web-bff/api/v1/integration/job-titles` |
| Update | `PUT /web-bff/api/v1/integration/job-titles/{id}` |
| Delete | `DELETE /web-bff/api/v1/integration/job-titles/{id}` |

`sameMfe=gap` = page chưa ship — sau Dev PASS đổi `yes`.

## §C — Catalog

| catalogKind | search/list API | seed/import cite | Cấm |
|-------------|-----------------|------------------|------|
| **job-title** | `GET …/job-titles/search` | `job-title-seed.json` + Excel cuc-01 aliases | Dropdown cứng demo · invent mã |
| job-title-group | `GET …/init-data` → titleGroups | LEAD · TECH · PATROL | invent nhóm ngoài CTX |
| packageHint map | derived | LEAD→MANAGER-RMMS · TECH/PATROL→RMMS-TDTK | invent package Cục/VP |

## §D — Map

`map: none`

## §E — Progress

`progress: none` (catalog master · isActive only)

## §F — Handoff

| Role | Dùng packet |
|------|-------------|
| PO | DoD «màn mở = seed/DB thật» · DEM skip · GAP-JOB-02/04 |
| Design | control-map khớp §B · prototype Kind B Slideout · reviewUrl |
| SA | entity + Schema_* · DOMAIN-MAP row · giữ path Integration · GenerateAsync · **cấm** ERP.* |
| Dev | Master Kind B + SearchInput consumer · **cấm** đổi hint không AskQuestion |

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.18.01` |
| rulesVersion | `2026.09.18.1` |
| contentHash | `sha256:fb713e8bb66de8f7594300f9bc3772b2e3afdd17ecfa0e9f2098536073bd38db` |
| analyzedAt | `2026-09-18T15:43:11.411Z` |
| taskId | `task_6ff91e27` |
| status | `done` |
