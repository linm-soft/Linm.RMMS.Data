# SA — solution-discovery — incident (edit_page · BFF-init + FileService)

| Field | Value |
|-------|-------|
| feature | `incident` |
| this role | `sa` · `/agent-sa` |
| status | `confirmed` (autoApprove=ON · agent self-confirm) |
| changeScope | `edit_page` |
| packKind | `list` |
| runMode | `full_pipeline` · `qa_fail_rollback` · gap=`bff_init` + `media_upload` |
| Feature Kind | **B** catalog A–D+F + **Kind D Slideout** Z1–Z3 + **DES-FORM-Z2-MEDIA** |
| domain | **Incident** |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` · route **`/su-co`** · **route_keep** (reject packet `/incident`) |
| solution_confirm | **approve** (`autoApprove=ON` · `task_343230dc`) |
| prior · design | `confirmed` · compact `handoff/design-compact.md` · `task_e0587959` · DES-FORM-Z2-MEDIA |
| prior · po | `confirmed` · compact `handoff/po-compact.md` · `task_900ecdd8` |
| prior · data_analy | `confirmed` · compact `handoff/data_analy-compact.md` · contentHash `sha256:927979e9a8dc3f1491792cc2a87a5e42e0af21842278e65aefcb359f45e021ad` |
| prior · sa | `T-SA-01` `task_d95d36f3` **KEEP** CRUD/FormMode/API-08/LKP — **cấm** re-open |
| be_repo_confirm | **approve** (packet) |
| ui_repo_confirm | **approve** (packet) |
| autoApprove | **ON** |
| e2eQa | **ON** — queued `/agent-qa*` · **cấm** e2e / `yarn start:std` ở role SA |
| versionGate | `rechecked` (`version_mismatch_action=recheck_new`) |
| taskId | `task_343230dc` |
| updatedAt | `2026-09-07T01:48:00.000Z` |

> SA **chốt** GAP-QA-BFF-INIT-01 + GAP-INC-MEDIA-01 (+ HARD). Design **chốt** DES-FORM-Z2-MEDIA. **Cấm** Dev invent FilesController / API path / ERP.*.  
> **Cấm** Write MFE/native · re-scan demo · Step 4b / migration / e2e ở role SA.  
> **Cấm** re-CRUD FormType CLOSED · rewrite list A–D.

**SUPERSEDED pack:** `task_d95d36f3` crud_formtype — **KEEP** API-01…08 · LKP-01 · FormMode · `rmms_incidents` flat · gates tz/xco/share. **This pack NEW:** BFF init live **200** + FileService media.

---

## § Delta P1 (T-SA-02 · ONLY these for TL/Dev)

| ID | Live (cite 2026-09-07) | Required | Layer | Dev slash |
|----|------------------------|----------|-------|-----------|
| **GAP-QA-BFF-INIT-01** | API `GET …/incidents/init-data` **200** · BFF same path **404** · source `IncidentsBffController.GetInitData` **đã có** · FE FALLBACK | BFF live **200** proxy → API-08 · **cấm** invent path · rebuild/redeploy `RMMS.Service.Bff` · verify `AddApplicationPart(Incident.Bff)` · route `web-bff/api/v1/incident/incidents/init-data` | BFF host | `/agent-dev` (bff fix) |
| **GAP-INC-MEDIA-01** | Form **không** upload · BFF host **chưa** `AddLinmFileServiceBff` · entity **không** media col | FileUpload DES-FORM-Z2-MEDIA · `web-bff/api/v1/files/*` · NuGet `Linm.Platform.FileService.Bff` · host `bff/src/RMMS.Service.Bff` · persist **`mediaIds`** | BFF + API DTO/entity + FE | `/init-bff-file` + `/integrate-file-upload-web` + `/agent-dev` |
| **GAP-INC-MEDIA-HARD** | — | **Cấm** `/implement-file-service` · copy `FilesController` · persist **presigned URL** · lane **web** only · **cấm ERP.*** | SA/Dev lock | — |

**Out / KEEP closed:** GAP-SA-INC-Q01 · INIT API · LKP · VAL · ROUTE/TYPE/HIST/FOOTER · FormType CRUD · ORG/RPT/MAP DEFER.

### Root cause — BFF init 404

| Check | Result |
|-------|--------|
| Controller action | **PASS source** — `[HttpGet("init-data")]` trên `IncidentsBffController` |
| ApplicationPart | Program registers `IncidentBffController` assembly → same asm as `IncidentsBffController` |
| API downstream | **PASS** T-BE-INIT-01 **200** |
| Likely live gap | Docker/process BFF **stale image** hoặc gateway 404 trước host · Dev verify rebuild + health + swagger BFF có `init-data` |
| FE | Keep FALLBACK until BFF 200 · then consume init-data |

**Cấm** thêm route alias / duplicate controller · **cấm** đổi API path.

### FileService integrate (LOCKED)

| Concern | Decision |
|---------|----------|
| Package | NuGet **`Linm.Platform.FileService.Bff`** trên `RMMS.Service.Bff` |
| Register | `AddLinmFileServiceBff` (+ controllers) — peer `AddLinmTaskServiceBff` / MapService |
| Routes | **`web-bff/api/v1/files/*`** only |
| FE bind | FileUpload · DES-FORM-Z2-MEDIA · `data-zone=upload` · optional P1 |
| Wire DTO | **`mediaIds`**: `List<string>?` FileService guids · max **10** · replace-all on create/update · null/empty = clear |
| UI synonyms | analy `fileIds` / `attachmentKeys` → **same** as `mediaIds` (Patrol peer) |
| Persist | `IncidentEntity.MediaIds` `varchar(2000)` CSV · **flat** · **cấm** parent JSON blob · **cấm** store presigned URL |
| Migration | **NEW** `Schema_RmmsIncidents_MediaIds` — Dev Step 4b **sau** SA · **không** chạy ở role SA |
| View | gallery resign via FileService (presigned **read** only · **cấm** persist URL) |
| List grid | **cấm** cột media |
| Dirty | add/remove file → LeaveConfirmModal |
| Fail | toast · **cấm** alert/confirm |
| Peer cite | Patrol `MediaIds` CSV · `PatrolSessionService` Serialize/Parse |

### FormMode ↔ media (delta)

| FormMode | mediaIds |
|----------|----------|
| create / create(copy) | POST body `mediaIds?` after upload files/* |
| edit | PUT replace-all `mediaIds?` |
| view | GET dto `mediaIds` → FileUpload readOnly / gallery resign |
| list / delete / assign / close | **n/a** media |

### API DTO delta (KEEP paths API-01…08)

| Surface | Change |
|---------|--------|
| `IncidentDto` | + `MediaIds` `List<string>?` |
| `CreateIncidentRequest` / `UpdateIncidentRequest` | + `MediaIds` replace-all |
| List DTO | **omit** media col UI · may omit wire P1 |
| init-data API-08 | **no change** · BFF proxy only |
| Files | **not** Incident controller — platform `files/*` |

AskQuestion (autoApprove=ON): `solution_confirm=approve` · `sa_files_gate=file_service_bff_reuse` · `sa_media_persist=mediaIds_csv` · `sa_bff_init=rebuild_verify` · `2026-09-07T01:48:00.000Z`.

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
| BFF | `IncidentsBffController` proxy · + **FileService.Bff** on `RMMS.Service.Bff` · proxy only = **yes** |
| Files | `web-bff/api/v1/files/*` · NuGet `Linm.Platform.FileService.Bff` · **cấm** invent controller |
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
| Files BFF | **`web-bff/api/v1/files/*`** |
| FE BASE | `/incident/incidents` (relative `VITE_API_URL`) |
| UI route | **`/su-co`** · route_keep |
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
| files upload / resign | * | `web-bff/api/v1/files/*` | FileService.Bff · **không** Incident path |
| mediaIds (form) | — | create/update/get body | `List<string>?` max 10 · CSV persist |

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
| **mediaFiles** | **FileUpload** | upload `files/*` → write **`mediaIds`** CSV · **GAP-INC-MEDIA-01** |
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
| Columns P1 | prior scalars + **`MediaIds` varchar(2000)** CSV (**NEW** this pack) |
| Child tables | **n/a** P1 |
| parent JSON | **cấm** |
| DEFER columns | `DurationMin` · `DefectItem` · `SourceKind` · damage lines — **cấm** pretend |
| T-BE-MIG | **`Schema_RmmsIncidents_MediaIds`** — Dev Step 4b (not SA) |
| T-BE-API | mediaIds DTO serialize · **cấm** re-CRUD paths |

---

## BFF

| Action | BFF | Downstream |
|--------|-----|------------|
| List | `GET web-bff/…/incidents` + QS | API-01 |
| CRUD/assign/close | existing | API-02…07 |
| Init-data | **`GET …/incidents/init-data`** source **có** · live fix **GAP-QA-BFF-INIT-01** | API-08 |
| Road-route | Integration BFF (đã có) | LKP-01 |
| Files | **`web-bff/api/v1/files/*`** FileService.Bff | platform FileService · **GAP-INC-MEDIA-01** |

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
| mediaFiles | MediaIds | MediaIds | FileService guids CSV · max 10 |

---

## Live verify (this SA role — read BE · **no write** · **no build**)

| Check | Result |
|-------|--------|
| DOMAIN-MAP Incident | **PASS** — `api/v1/incident` · BFF `web-bff/api/v1/incident` |
| API-01…08 · list Q01 · VAL | **PASS** prior (STATUS T-BE-*) |
| Entity flat | **PASS** — no parent JSON · **GAP** MediaIds col |
| BFF `GetInitData` source | **PASS** — action exists |
| BFF init-data **live** | **GAP-QA-BFF-INIT-01** — 404 vs API 200 |
| FileService.Bff on host | **GAP-INC-MEDIA-01** — Program **chưa** AddLinmFileServiceBff |
| Patrol MediaIds peer | **PASS** cite pattern |
| Step 4b / migration run | **N/A** — role SA |
| yarn build / e2e / start:std | **cấm** role SA |

---

## Handoff → TL (`/agent-team-lead`)

| Field | Value |
|-------|-------|
| packKind | `list` |
| API ids | API-01…08 **KEEP** · files = platform · DTO +`mediaIds` |
| FormMode↔API | § FormType pack + media delta |
| gaps P1 **ONLY** | **GAP-QA-BFF-INIT-01** · **GAP-INC-MEDIA-01** · **GAP-INC-MEDIA-HARD** |
| CLOSED / cấm re-open | FormType CRUD · list A–D rewrite · re-CRUD · Q-INC-* |
| DEFER | ORG-01 · RPT-SRC-INC-* · MAP-01 |
| gates | tz_na · xco_get_only · share_tenant · file_service_bff_reuse |
| mfeStdRoute | `/su-co` |
| mfeStdUrl | `http://localhost:9304/su-co` |
| perm | `incident.incidents.*` |
| devSlash | `/agent-dev` · `/init-bff-file` · `/integrate-file-upload-web` |
| next | TL → Dev → QA → Review = **pending** · chain ON |
| e2e | queued `/agent-qa*` only |
| blockedReason | — |

**Cấm TL:** re-CRUD · invent ERP/FilesController · HOW vượt solution · run e2e ở TL.

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.24.01 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.25.02 |
| rulesVersion | 2026.08.28.4 |
| generatedAt | 2026-09-07T01:48:00.000Z |
| versionGate | rechecked |
| contentHashPriorDataAnaly | sha256:927979e9a8dc3f1491792cc2a87a5e42e0af21842278e65aefcb359f45e021ad |
| orchestratorSkillVersion | 2026.08.25.02 |
| orchestratorWorkflowVersion | 2026.08.25.02 |
| dataAnalySkillVersion | 2026.08.25.01 |
| poSkillVersion | 2026.08.25.02 |
| designSkillVersion | 2026.08.25.02 |
| taskId | `task_343230dc` |

---
<!-- Version meta: skillId=agent-sa skillVersion=2026.08.24.01 schemaVersion=1 workflowVersion=2026.08.25.02 rulesVersion=2026.08.28.4 versionGate=rechecked contentHashPriorDataAnaly=sha256:927979e9a8dc3f1491792cc2a87a5e42e0af21842278e65aefcb359f45e021ad taskId=task_343230dc -->
