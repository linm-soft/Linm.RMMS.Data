# SA — solution-discovery — incident (edit_page · crud_formtype delta)

| Field | Value |
|-------|-------|
| feature | `incident` |
| this role | `sa` · `/agent-sa` |
| status | `confirmed` (autoApprove=ON · agent self-confirm) |
| changeScope | `edit_page` |
| packKind | `list` |
| runMode | `fix_gaps` · gap=`crud_formtype` |
| Feature Kind | **B** catalog A–D+F + **Kind D Slideout** Z1–Z3 |
| domain | **Incident** |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` · route **`/su-co`** |
| solution_confirm | **approve** (`autoApprove=ON` · `task_d95d36f3`) |
| prior · design | `confirmed` · `ui/design.md` + prototype · `task_c4cdbe48` |
| prior · po | `confirmed` · `po/requirement.md` · `task_4fa6ad08` |
| prior · data_analy | `confirmed` · `specs/_data-analy/features/incident-control-hint.md` · `incident-real-data.md` · contentHash `sha256:adf95ccc3f97b05abb02eb1332959aa4525025c55d876bac9ce18f1a4b003577` |
| be_repo_confirm | **approve** (packet) |
| ui_repo_confirm | **approve** (packet) |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở role SA |
| versionGate | `rechecked` (`version_mismatch_action=recheck_new` · supersede skill `2026.08.08.17`) |
| taskId | `task_d95d36f3` |
| updatedAt | `2026-08-29T09:47:32.595Z` |

> SA **chốt** lookup/init-data + list query delta + FormMode↔API. Design **chốt** control-map. **Cấm** Dev đoán Text vs SearchInput / invent API.  
> **Cấm** `ERP.Service.*` · `Domains/Master` · `api/v1/rmms/*` · invent `api/v1/su-co/*` fork (UI `/su-co` ≠ API segment).  
> **≠** citizen-incidents · **cấm** Write MFE/native ở role SA · **cấm** re-scan demo · **cấm** Step 4b / migration run.

**SUPERSEDED:** solution `2026-08-09` (skill `2026.08.08.17`). **Keep** CRUD API-01…07 + table `rmms_incidents` + BFF proxy; **re-lock** delta P1 ROUTE/TYPE/init-data + FormType pack.

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` · `be_repo_confirm=approve` |
| Domain | **Incident** / `incident` · DOMAIN-MAP |
| API host | `api/src/RMMS.Service.Api/Domains/Incident/` |
| Models | `api/domains/incident/LINM.RMMS.Incident.Models/DTOs/IncidentDtos.cs` |
| Entity | `api/shared/RMMS.Service.Persistence/Entities/IncidentEntity.cs` · table **`rmms_incidents`** |
| Migration | **n/a this pack** — `Schema_RmmsIncidents` **đã có** · **cấm** add `DurationMin`/`DefectItem`/`sourceKind` P1 |
| BFF | `bff/domains/incident/LINM.RMMS.Incident.Bff/Controllers/IncidentsBffController.cs` · proxy only = **yes** |
| MFE | `Linm.Web.RMMS.Field` · `/su-co` · `ui_repo_confirm=approve` |
| Response | `ApiResponse<T>` / `IncidentPagedResult` / `IncidentDto` |
| Auth perm | `incident.incidents.read\|create\|update\|delete` — `[RequirePermission]` stub OK P1 · FE gate ON |
| Persist | flat scalars only — **cấm** parent JSON blob / `*LinesJson` |
| Lookup share | road-route = Integration Type A (**share_a**) — **read-only** từ Incident FE/API |
| Out of pack | Kind F map · org-unit filter · comments · DurationMin/child thiệt hại · DefectItem/sourceKind · ERP.* |

### Paths (LOCKED — no new domain)

| Layer | Path |
|-------|------|
| API prefix | **`api/v1/incident/incidents`** |
| BFF prefix | **`web-bff/api/v1/incident/incidents`** |
| FE BASE | `/incident/incidents` (relative `VITE_API_URL`) |
| UI route | **`/su-co`** |
| Lookup road-route | **`api/v1/integration/road-routes/search`** · BFF `web-bff/api/v1/integration/road-routes/search` · FE `/integration/road-routes/search` |
| UI schema | catalogKind **`incidents`** · `CatalogUiSchemaRegistry.Incidents` · Integration catalogs ui-schema |
| Giao việc | Platform Task BFF `POST /tasks` · `domainSource=incident` · cite `specs/rmms-task-integrate` — **cấm** embed TasksController vào RMMS.WebService |

**Cấm** tạo folder domain mới · **cấm** clone road-routes vào Incident domain.

### SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | LinErpListFilterBar · LinCatalog* · LeaveConfirmModal · **cấm** local Lin* clones |
| HTTP | `apiClient` SSOT | re-export only |
| BE | CommonLib `ApiResponse` pattern (Incident Models) | |
| Auth | Authentication + RequirePermission (stub debt) | codes trên |
| Persist | `no-parent-json-field` | flat `IncidentEntity` |
| Master route | Integration `RoadRoutesController` | **cấm** duplicate search API |

---

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **n/a** (`tz_na`) | `requestedAt` form · CreatedAt/UpdatedAt | `/review-timezone-implement` | Store **UTC** (`ToUniversalTime` / `DateTime.UtcNow`) · FE datetime-local display · **không** list `fromDate`/`toDate` P1 |
| XCO | **get_only** (`xco_get_only`) | API-02 `GET …/{id}` | `/implement-view-cross-company` | `IgnoreQueryFilters` + claim `allowed_company_ids` · 403 `IncidentForbiddenException` · **không** XCO list/POST/PUT/DELETE |
| SHARE | **tenant_keep** (`share_tenant`) | `IncidentEntity` : `TenantEntity` | `/implement-shared-table` | filter `CompanyCode` · unique `(CompanyCode, Code)` |
| lookup_share | **share_a** (read) | LKP-01 road-route | — | Integration Type A · Incident **không** own master |
| parent_json | **cấm** | — | `no-parent-json-field` | no damage lines JSON |

AskQuestion (autoApprove=ON): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `solution_confirm=approve` · `2026-08-29T09:47:32.595Z`.

---

## Live vs delta (this pack)

CRUD API-01…07 + BFF proxy + `rmms_incidents` **đã implement**. Pack `edit_page` **không** rewrite entity schema. SA chốt **GAP** Dev/BE phải đụng:

| ID | Live today (cite 2026-08-29) | Required this pack | Layer |
|----|------------------------------|--------------------|-------|
| GAP-SA-INC-Q01 | `GET` query `search` · `status` · `severity` · `page` · `pageSize` only | + **`routeName`** (exact code trim) · + **`incidentType`** (exact) | API `GetList` + service + BFF QS passthrough + FE `incidentEndpoint.getList` |
| GAP-SA-INC-INIT | **không** `GET …/init-data` · FE `INCIDENT_TYPES` **4** mã | **API-08** init-data · seed **6** loại Design §5.3 | API + BFF + FE consume · fallback FE const nếu fail |
| GAP-SA-INC-LKP | Form/list `routeName` = **Text** free | SearchInput → **LKP-01** · persist **code** (vd `QL.1`) | FE + Integration read |
| GAP-SA-INC-VAL | Create/Update trim `RouteName` · no catalog check · no type allow-list | `RouteName` có giá trị → ∈ `rmms_road_routes.Code` **IsActive** · 422 unknown · `IncidentType` ∈ 6 · `Status` ∈ 3 · 422 else | `IncidentRecordService` → `DbSet<RoadRouteEntity>` **read** |
| GAP-INC-HIST-01 | History `window.alert` stub | `LinCatalogHistoryModal` · **cấm** alert · **không** API history mới P1 (stub timeline OK) | FE only |
| GAP-INC-FOOTER-01 | Slideout top Quay lại/Hủy/Lưu | footer-only actions (`slideout-form-layout`) | FE only |
| GAP-INC-TYPE-01 | FE 4 types | Dropdown 6 từ init-data | FE + API-08 |
| GAP-INC-ROUTE-01 | Text free | SearchInput road-route | FE + LKP-01 + VAL |
| GAP-INC-ORG-01 | — | org-unit tree | **DEFER P2** |
| GAP-RPT-SRC-INC-* | no DurationMin/DefectItem/child | — | **DEFER** report |
| GAP-INC-MAP-01 | — | Kind F | **DEFER** |
| FormType CRUD | live CLOSED | **giữ** path/DTO | **CLOSED** — **cấm** re-open rewrite |

**Không** migration schema mới (cột `RouteName` varchar đủ filter exact). Index optional P2 `(CompanyCode, RouteName)` — **out**.

---

## FormType pack (`packKind=list`)

| Surface | Pattern | FormMode↔API |
|---------|---------|--------------|
| S-LIST | Kind B A–D · `LinErpListFilterBar` · `LinCatalogDataGrid` · `LinCatalogListPagination` 50/100/200/500 · config FULL `incidents` | API-01 list |
| S-FORM-CREATE | Kind D Slideout · footer Hủy/Lưu | **create** → API-03 POST |
| S-FORM-EDIT | Slideout · footer Hủy/Lưu | **edit** → API-02 GET + API-04 PUT |
| S-FORM-VIEW | Slideout · readOnly · Đóng/Sửa/Sao chép | **view** → API-02 GET |
| S-FORM-COPY | Slideout · clear id · new code | **create(copy)** → API-02 GET + API-03 POST |
| S-ACT-DELETE | Confirm modal | API-05 DELETE |
| S-ACT-ASSIGN / Giao việc | Modal · Platform Task | API-06 assign **và/hoặc** Task `POST /tasks` (cite integrate) |
| S-ACT-CLOSE | Confirm modal | API-07 close |
| S-HIST | `LinCatalogHistoryModal` | **n/a** API P1 (stub) |
| S-MOD-CONFIG | `LinCatalogUiSchemaEditorModal` | Integration catalogs ui-schema `incidents` |
| S-MOD-LEAVE | `LeaveConfirmModal` | — |
| S-SKIP-MAP | Kind F | **out** |

**devSlash:** `/agent-dev` · **cấm** `/agent-dev-oms-map` · `/agent-dev-ai-detect` · `/agent-dev-camera-connect`.

### List filter query keys (HARD · `LinErpListFilterBar`)

| Query key | Control (Design) | Notes |
|-----------|------------------|-------|
| `search` | SearchTextInput | mã · tiêu đề · đoạn · DET — **must work** |
| `status` | Dropdown LOOKUP_STATIC | `new` · `in_progress` · `closed` · trống=Tất cả |
| `severity` | Dropdown LOOKUP_STATIC | `low` · `medium` · `high` · `critical` |
| `routeName` | SearchInput **road-route** | **GAP-SA-INC-Q01** · exact code |
| `incidentType` | Dropdown LOOKUP_STATIC | **GAP-SA-INC-Q01** · exact · 6 mã |
| `page` / `pageSize` | pager | 50/100/200/500 |

Filter đổi → **page=1**. **Cấm** `filterItems` / invent orgTree P1.

### FormMode ↔ API (REQUIRED)

| FormMode / action | Method | Path | Body / notes |
|-------------------|--------|------|--------------|
| list | GET | `/api/v1/incident/incidents` | query keys trên |
| view / edit hydrate / copy source | GET | `/api/v1/incident/incidents/{id}` | XCO get_only |
| create / create(copy) | POST | `/api/v1/incident/incidents` | CreateIncidentRequest · **không** Code client · IdCode `VD-yyyyMMdd-nnnn` |
| edit save | PUT | `/api/v1/incident/incidents/{id}` | UpdateIncidentRequest |
| delete | DELETE | `/api/v1/incident/incidents/{id}` | soft `IsActive=false` |
| assign | POST | `/api/v1/incident/incidents/{id}/assign` | `assigneeName` · `note?` · may set `in_progress` |
| close | POST | `/api/v1/incident/incidents/{id}/close` | `note?` · status=`closed` |
| init-data | GET | `/api/v1/incident/incidents/init-data` | **API-08 NEW** |
| route lookup | GET | `/api/v1/integration/road-routes/search` | LKP-01 |
| giao việc task | POST | Platform Task BFF `/tasks` | cite `rmms-task-integrate` · **không** Incident path |

---

## controlHint → API shape (Design §5 + real-data §B)

| uiField | controlHint | SA API / persist |
|---------|-------------|------------------|
| search | SearchTextInput | `?search=` |
| status / severity / incidentType (filter+form) | Dropdown LOOKUP_STATIC | init-data arrays · write scalar |
| routeName | **SearchInput** road-route | LKP-01 search · write `routeName` = **Code** |
| code | Text readonly | IdCode server |
| title · reporterName · assigneeName · assetLabel · km* · weather · detectionId · description | Text / multiline | scalar DTO |
| requestedAt | Date datetime-local | UTC store · ISO write |
| causesCongestion · hasGps | Dropdown bool | scalar bool |
| handleDirection · readStatus · reportStatus | Dropdown | init-data |
| durationMin · defectItem · sourceKind | — | **DEFER** — **cấm** invent columns |

---

## API catalog

### API-01 — List (DELTA query)

| | |
|--|--|
| Method / Path | `GET /api/v1/incident/incidents` |
| Purpose | Paged catalog Sự cố / Vấn đề |
| Permission | `incident.incidents.read` |
| Tenant | `X-Company-Id` · `CompanyCode` filter |
| Request | query: `search?` · `status?` · `severity?` · **`routeName?`** · **`incidentType?`** · `page` · `pageSize` (50/100/200/500) |
| Response | `ApiResponse<IncidentPagedResult>` |
| Errors | empty → totalCount=0 |
| Form surfaces | S-LIST |
| Field map | list columns ← `IncidentDto` scalars |
| gates.tz | n/a |
| gates.xco | n/a |
| Context | `docs/context/features/incident.md` |
| Demo | zone ref `incident-demo.html` / `incident.html` — **không** SSOT data |
| data-import | N/A (no Excel) |
| Migration | none |
| Live cite | `IncidentsController.GetList` · **thiếu** routeName/incidentType params → Dev add |

### API-02 — GetById

| | |
|--|--|
| Method / Path | `GET /api/v1/incident/incidents/{id}` |
| Purpose | View/Edit/Copy hydrate |
| Permission | `incident.incidents.read` |
| Response | `ApiResponse<IncidentDto>` |
| Errors | 404 · 403 XCO |
| gates.xco | **yes** |
| Live | **PASS** |

### API-03 — Create

| | |
|--|--|
| Method / Path | `POST /api/v1/incident/incidents` |
| Purpose | Create · IdCode `VD-yyyyMMdd-nnnn` |
| Permission | `incident.incidents.create` |
| Body | `CreateIncidentRequest` (no Code) — required: `title` · `routeName` · `incidentType` · `status` · `requestedAt` |
| Errors | 422 validation / unknown route / bad type |
| Form surfaces | create · create(copy) |
| Live | **PASS** path · **DELTA** VAL route + type allow-list |

### API-04 — Update

| | |
|--|--|
| Method / Path | `PUT /api/v1/incident/incidents/{id}` |
| Permission | `incident.incidents.update` |
| Body | `UpdateIncidentRequest` |
| Errors | 404 · 422 |
| Live | **PASS** path · **DELTA** VAL |

### API-05 — Soft delete

| | |
|--|--|
| Method / Path | `DELETE /api/v1/incident/incidents/{id}` |
| Permission | `incident.incidents.delete` |
| Effect | `IsActive=false` |
| Live | **PASS** |

### API-06 — Assign

| | |
|--|--|
| Method / Path | `POST /api/v1/incident/incidents/{id}/assign` |
| Body | `AssignIncidentRequest` (`assigneeName` · `note?`) |
| Effect | set AssigneeName · status new→in_progress |
| Live | **PASS** |

### API-07 — Close

| | |
|--|--|
| Method / Path | `POST /api/v1/incident/incidents/{id}/close` |
| Body | `CloseIncidentRequest` (`note?`) |
| Effect | status=`closed` |
| Live | **PASS** |

### API-08 — Init-data (**NEW**)

| | |
|--|--|
| Method / Path | `GET /api/v1/incident/incidents/init-data` |
| Purpose | LOOKUP_STATIC seed cho Dropdown filter/form |
| Permission | `incident.incidents.read` |
| Response | `ApiResponse<IncidentInitDataDto>` |
| DTO shape | `{ statuses: {value,label}[] · severities[] · incidentTypes[] · handleDirections[] · readStatuses[] · reportStatuses[] }` |
| Seed (Design §5.3) | **types(6):** `o-ga` · `sat-taluy` · `bien-bao` · `ngap-ung` · `un-tac` · `khac` · statuses(3) · severities(4) · handleDirection(4) · readStatus(2) · reportStatus(3) |
| BFF | `GET web-bff/api/v1/incident/incidents/init-data` → forward |
| FE | consume + fallback const nếu fail |
| Migration | **none** (in-memory / service const seed) |
| Context / Demo | Design §5.3 · control-hint init-data đề xuất |
| data-import | N/A |

### LKP-01 — Road-route search (reuse · **không** clone)

| | |
|--|--|
| Method / Path | `GET /api/v1/integration/road-routes/search` |
| Purpose | SearchInput `routeName` filter + form |
| Permission | `master.road-routes.read` (stub OK) |
| Query | `search` · `page` · `pageSize` · `excludeCode?` |
| Persist value | **Code** (vd `QL.1`) vào `IncidentEntity.RouteName` |
| BFF | `web-bff/api/v1/integration/road-routes/search` |
| FE | `/integration/road-routes/search` (peer attendance lookups) |
| share | Type A **share_a** |
| Live | **PASS** — `RoadRoutesController.Search` |
| Cấm | free-text khi master READY · invent Incident-local route API |

---

## Entity / persist gate

| | |
|--|--|
| Entity | `IncidentEntity` : `TenantEntity` |
| Table | `rmms_incidents` |
| Columns P1 | Code · Title · RouteName · IncidentType · Status · Severity · ReporterName · HandleDirection · ReadStatus · ReportStatus · AssetLabel · KmStart · KmEnd · Weather · RequestedAt · DetectionId · Description · CausesCongestion · HasGps · AssigneeName · IsActive · CompanyCode · CreatedAt · UpdatedAt |
| Child tables | **n/a** P1 |
| parent JSON | **cấm** |
| DEFER columns | `DurationMin` · `DefectItem` · `SourceKind` · damage lines — **cấm** pretend · **cấm** migration this pack |
| T-BE-MIG | **n/a** |
| T-BE-API | delta Q01 · INIT · VAL only |

---

## BFF

| Action | BFF | Downstream |
|--------|-----|------------|
| List | `GET web-bff/…/incidents` + QS | API-01 (QS passthrough **đã có** — thêm keys BE) |
| CRUD/assign/close | existing | API-02…07 |
| Init-data | **`GET …/incidents/init-data` NEW** | API-08 |
| Road-route | Integration BFF (đã có) | LKP-01 |

Keep health `IncidentBffController`. Proxy-only — **cấm** business logic trên BFF.

---

## Field map (uiField → dto → db)

| uiField | dtoField | dbColumn | Wire |
|---------|----------|----------|------|
| code | Code | Code | IdCode auto |
| title | Title | Title | C/E |
| routeName | RouteName | RouteName | SearchInput → Code |
| incidentType | IncidentType | IncidentType | Dropdown 6 |
| status | Status | Status | Dropdown 3 |
| severity | Severity | Severity | Dropdown |
| requestedAt | RequestedAt | RequestedAt | Date · UTC |
| reporterName | ReporterName | ReporterName | Text |
| assigneeName | AssigneeName | AssigneeName | Text / assign |
| handleDirection | HandleDirection | HandleDirection | Dropdown |
| readStatus | ReadStatus | ReadStatus | Dropdown |
| reportStatus | ReportStatus | ReportStatus | Dropdown |
| assetLabel | AssetLabel | AssetLabel | Text |
| kmStart / kmEnd | KmStart / KmEnd | KmStart / KmEnd | Text |
| weather | Weather | Weather | Text |
| detectionId | DetectionId | DetectionId | Text |
| description | Description | Description | multiline |
| causesCongestion | CausesCongestion | CausesCongestion | bool |
| hasGps | HasGps | HasGps | bool |

---

## Live verify (this SA role — read BE · **no write** · **no build**)

| Check | Result |
|-------|--------|
| DOMAIN-MAP Incident | **PASS** — `api/v1/incident` · BFF `web-bff/api/v1/incident` |
| API-01…07 controller | **PASS** — `IncidentsController` live |
| List query keys today | **GAP** — thiếu `routeName` · `incidentType` |
| PageSize 50/100/200/500 | **PASS** |
| XCO GetById | **PASS** — claim + 403 |
| Entity flat | **PASS** — no parent JSON |
| BFF proxy | **PASS** — QS forward |
| Road-routes search | **PASS** — Integration live |
| init-data incidents | **GAP** — chưa có |
| FE INCIDENT_TYPES | **GAP** — 4 mã (thiếu `ngap-ung` · `un-tac`) |
| Step 4b / migration run | **N/A** — role SA · schema exists |
| yarn build / e2e / start:std | **cấm** role SA |

---

## Handoff → TL (`/agent-team-lead`)

| Field | Value |
|-------|-------|
| packKind | `list` |
| API ids | API-01 (delta Q01) · API-02…07 (giữ) · **API-08 NEW** · **LKP-01** reuse |
| FormMode↔API | § FormType pack |
| gaps P1 | GAP-SA-INC-Q01 · INIT · LKP · VAL · GAP-INC-ROUTE-01 · TYPE-01 · HIST-01 · FOOTER-01 |
| DEFER | ORG-01 · RPT-SRC-INC-* · MAP-01 · comments |
| gates | tz_na · xco_get_only · share_tenant |
| mfeStdRoute | `/su-co` |
| mfeStdUrl | `http://localhost:9304/su-co` |
| perm | `incident.incidents.*` |
| devSlash | `/agent-dev` |
| next | TL → Dev → QA → Review = **pending** đến lượt · chain ON |
| e2e | queued `/agent-qa*` only |
| blockedReason | — |

**Cấm TL:** re-CRUD FormType CLOSED · invent ERP path · HOW detail vượt solution · Step 4b không cần.

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.24.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.02 |
| rulesVersion | 2026.08.28.4 |
| generatedAt | 2026-08-29T09:47:32.595Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:adf95ccc3f97b05abb02eb1332959aa4525025c55d876bac9ce18f1a4b003577 |
| orchestratorSkillVersion | 2026.08.25.02 |
| orchestratorWorkflowVersion | 2026.08.25.02 |
| dataAnalySkillVersion | 2026.08.25.01 |
| poSkillVersion | 2026.08.25.02 |
| designSkillVersion | 2026.08.25.02 |
| taskId | `task_d95d36f3` |

---
<!-- Version meta: skillId=agent-sa skillVersion=2026.08.24.01 schemaVersion=1 workflowVersion=2026.08.25.02 rulesVersion=2026.08.28.4 versionGate=rechecked contentHashPriorDataAnaly=sha256:adf95ccc3f97b05abb02eb1332959aa4525025c55d876bac9ce18f1a4b003577 taskId=task_d95d36f3 -->
