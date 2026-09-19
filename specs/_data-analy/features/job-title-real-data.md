# Real-data bind — job-title (Danh mục chức vụ)

| | |
|---|---|
| feature | `job-title` |
| packKind | `master` |
| changeScope | `new_page` |
| status | `done` |
| taskId | `task_fe86d194` |
| priorTask | `task_6ff91e27` |
| prefix | **target** `web-bff/api/v1/integration` → API `api/v1/integration` |
| resource | `job-titles` |
| beRepo | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** · **cấm** `open-api` · **cấm** `api/v1/rmms/*` |
| uiRepo | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Master` |
| mfeStdUrl | `http://localhost:9318/mas/chuc-vu` |
| mfeStdRoute | `/mas/chuc-vu` |
| map | `none` |
| demo | **N/A** (`master-catalog-no-demo.md`) |
| contentHash | `sha256:fdd8fabdbf6bf58d33835fa5d4d1da37922f18062175288d9316f9ced76071ab` |
| headerFingerprint | `sha256:fields:code,name,titleGroup,packageHint,legacyAliases,isActive` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.01` |
| rulesVersion | `2026.09.19.2` |
| analyzedAt | `2026-09-18T18:45:00.000Z` |

## § Delta Current vs New (`new_page` · `task_fe86d194`)

| ID | Current | New |
|----|---------|-----|
| Artifacts | prior done · hash cũ | Refresh CTX+seed · §5b consumer · status **done** |
| API / entity | **0** JobTitle* | CTX path `integration/job-titles` · SA entity + Schema_* · GenerateAsync |
| MFE | **0** `/mas/chuc-vu` | Kind B list+Slideout · Design confirm |
| DOMAIN-MAP | **0** slug | GAP-JOB-DM-01 → SA |
| Seed | `job-title-seed.json` ~19 | import DB rồi GET BFF — **cấm** in-app demoItems (**GAP-JOB-05**) |
| Consumer | free-text JobTitle/Position | SearchInput `jobTitleCode` · staff + ProfileTab (**GAP-JOB-02/06**) |

## §A — Nguồn

| sourceKind | sourceCite | empty | error |
|------------|------------|-------|-------|
| `context` | `docs/context/features/job-title.md` | — | version mismatch → gate |
| `context` | `docs/context/features/master.md` | — | hub peer |
| `context` | `docs/context/features/users.md` | — | consumer staff SearchInput |
| `context` | `docs/context/20-ORG-STRUCTURE-DRVN.md` (AppUser.JobTitle) | — | free-text → GAP-JOB-02 |
| `import` | `docs/context/seed/job-title-seed.json` | empty grid | seed job / EnsureFromSeed · **GAP-JOB-05** |
| `import` | `data-import/cuc-01/ds-nhan-su-rmms/Danh sách nhân sự số hóa 10.9.2026.xlsx` | — | cột «Chức danh/nhiệm vụ» aliases |
| `api` | **target** `JobTitlesController` `api/v1/integration/job-titles` | empty grid | toast · **cấm** alert · **GAP-JOB-BE-01** |
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
| jobTitleCode (staff) | Chức vụ | SearchInput | **job-title** | `GET …/job-titles/search` | AppUser.`jobTitleCode` | peer gap |
| jobTitleCode (ProfileTab) | Chức vụ | SearchInput / readonly | **job-title** | search / resolve name | Auth Position denorm | peer gap |

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
| PO | DoD «màn mở = seed/DB thật» · DEM skip · GAP-JOB-02/04/05/06 · cite §5b |
| Design | control-map khớp §B · prototype Kind B Slideout · reviewUrl · **cấm** demo HTML |
| SA | entity + Schema_* · DOMAIN-MAP row · giữ path Integration · GenerateAsync · **cấm** ERP.* |
| Dev | Master Kind B + consumer SearchInput · **cấm** đổi hint không AskQuestion |

## Version meta

| | |
|--|--|
| skillId | `agent-data-analy` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `2` |
| workflowVersion | `2026.09.19.01` |
| rulesVersion | `2026.09.19.2` |
| contentHash | `sha256:fdd8fabdbf6bf58d33835fa5d4d1da37922f18062175288d9316f9ced76071ab` |
| analyzedAt | `2026-09-18T18:45:00.000Z` |
| taskId | `task_fe86d194` |
| status | `done` |
