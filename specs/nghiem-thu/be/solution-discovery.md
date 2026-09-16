# Solution discovery — nghiem-thu

> Status: **confirmed** (autoApprove ON · `solution_confirm=approve`)  
> Standards: api-endpoint · bff-api-structure · company-field · database-migration · no-parent-json-field  
> SA: `sa-api-form-data.md` · `sa-repo-solution.md` · `sa-implement-gates.md`  
> Requires: `ui/design.md` **confirmed** · prior compact data_analy/po/design  
> taskId: `task_25cd95bb`

| Field | Value |
|-------|-------|
| feature | `nghiem-thu` |
| title | Công tác nghiệm thu — clone tuần kiểm + 10 mẫu |
| Role | `sa` |
| packKind | `list` |
| featureKind | **B** — Catalog list A–D + Full page form |
| changeScope | `new_page` |
| formPattern | **Full page** · `data-form-cols=5` |
| demo | **N/A** · continue_no_demo |
| contentHash | `sha256:41b14359b00a0bacbd2f5e88ab9ed8f7604f962c4e4e58219bf9c1145b5ef4ea` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.05.03` |
| rulesVersion | `2026.09.05.8` |
| updatedAt | `2026-09-12T09:30:00.000Z` |

## 1. Ownership

| Layer | Repo / module |
|-------|----------------|
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Field` · route `/nghiem-thu` · **ui_repo_confirm=yes** (CONTEXT FieldOps · peer patrol) |
| **BackendRoot** | `D:/AI-QLBD/Linm.RMMS.WebService` · **be_repo_confirm=yes** · **cấm ERP.*** |
| API | `api/src/RMMS.Service.Api/Domains/Patrol/` · resource `nghiem-thu` |
| BFF | `bff/domains/patrol/` · proxy `web-bff/api/v1/patrol/nghiem-thu` |
| DB | Persistence / Migrations under BackendRoot (Postgres) |
| DocsRoot | `D:/AI-QLBD/Linm.RMMS.Data/docs` |
| DataImportRoot | N/A — không Excel import P1 |

### Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` · be_repo_confirm |
| Domain | **Patrol** / `patrol` · DOMAIN-MAP row `nghiem-thu` → Patrol (**GAP-DA-NT-DOMAIN-01 CLOSED**) |
| API host | `api/src/…/Domains/Patrol/` · controllers `NghiemThu*` |
| BFF | `bff/domains/patrol/…` · **proxy only = yes** (no business logic) |
| MFE | `Linm.Web.RMMS.Field` · `/nghiem-thu` · mfeStdUrl `http://localhost:9301/nghiem-thu` |
| Response | Linm.Platform.CommonLib `ApiResponse` / paged |
| Auth perm | Linm.Platform.Authentication · `patrol.nghiem-thu.read` · `patrol.nghiem-thu.write` |
| Persist | no-parent-json-field · header `NghiemThu` + child `NghiemThuMedia` |
| Out of pack | map none · import none · media via FileService · mobile enqueue_later |

### SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` | LinErpListFilterBar · SearchInput · FileMulti · LeaveConfirmModal — **cấm** local Lin* clone |
| HTTP | apiClient SSOT · SETUP-P2-12 | re-export only |
| BE | Linm.Platform.CommonLib | ApiResponse / paged |
| Auth | Linm.Platform.Authentication + RequirePermission | codes above |
| Files | `Linm.Platform.FileService.Bff` · `web-bff/api/v1/files/*` | persist guid · resign — **cấm** invent NT file API |
| Persist | no-parent-json-field | **cấm** `mediaIdsJson` / `*LinesJson` |
| Catalogs | Integration road-route · org-unit | **cấm** invent org/route API trong NT |
| Anti | **cấm** reuse `rmms_patrol_sessions` · **cấm** Maintenance WO complete |

### DOMAIN-MAP / API path (confirm)

| Item | Decision |
|------|----------|
| slug | `nghiem-thu` → **Patrol** / `patrol` |
| API | `api/v1/patrol/nghiem-thu` (**GAP-DA-NT-API-01 CLOSED** — keep proposed) |
| BFF | `web-bff/api/v1/patrol/nghiem-thu` |
| HARD | **cấm ERP.*** · **cấm** `api/v1/nghiem-thu` ngoài Patrol · **cấm** WO |

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **required** | API-01 list `fromDate`/`toDate` · form `inspectedAt` · `updatedAt` | `/review-timezone-implement` | FE 2dt + BE UTC bounds |
| XCO | **required** | API-02 GET/{id} View/Edit/Copy | `/implement-view-cross-company` | IgnoreQueryFilters + AllowedCompanyIds |
| SHARE | **tenant_keep** | Entity `NghiemThu` (+ media child) | `/implement-shared-table` | voucher NT theo đơn vị — không shared master |

AskQuestion (autoApprove ON): `sa_tz_gate=tz_required` · `sa_xco_gate=xco_required` · `sa_shared_table=share_tenant` · `solution_confirm=approve` · `2026-09-12T09:30:00.000Z`

## FormType pack (`list` · Kind B)

| Surface | Pattern | FormMode↔API |
|---------|---------|--------------|
| List A–D | LinErpListFilterBar wrap · 🔍 right · Grid AC | **List** → API-01 GET |
| Create | Full page `/nghiem-thu/new` | **Create** → API-03 POST (+ API-00 init) |
| Edit | Full page `/nghiem-thu/:id` | **Edit** → API-02 GET + API-04 PUT |
| View | Full page readonly | **View** → API-02 GET |
| Copy | Full page prefill | **Copy** → API-02 GET → API-03 POST (new code) |
| Delete | row / toolbar | **Delete** → API-05 DELETE |
| Upload | DES-NT-UPLOAD FileMulti | FileService files/* + mediaIds on PUT/POST |
| Leave | DES-LEAVE LeaveConfirmModal | **cấm** native confirm |

**Filter query keys (list):** `search` · `status` · `route` · `templateType` · `fromDate` · `toDate` — **cấm** `filterItems` HOW.

## 2. Form data analysis

| Screen / FormMode | Fields (UI) | Source type | Entity | data-import / mock |
|-------------------|-------------|-------------|--------|---------------------|
| List filter | search · status · route · templateType · fromDate · toDate | query + LOOKUP_STATIC + master | — | N/A · demo N/A |
| Create/Edit | code · status · templateType · route · zoneOrgCode · vpOrgCode · assigneeCode · inspectedAt · kmFrom · kmTo · fieldInfo · note · mediaIds | transaction + master + files | NghiemThu + NghiemThuMedia | N/A |
| View/Copy | same as form | transaction read | NghiemThu | N/A |
| Init lookups | status · templateType | LOOKUP_STATIC | — | seed labels PO CLOSED |

### controlHint → API shape

| uiField | controlHint | SA API |
|---------|-------------|--------|
| search | SearchTextInput | `?search=` CI index |
| status | SearchInput · LOOKUP_STATIC | API-00 `statuses[]` · `?status=` |
| route | SearchInput · road-route | Integration road-routes/search · write `route` code · 422 |
| templateType | SearchInput · LOOKUP_STATIC | API-00 `templateTypes[]` · mau-01…10 |
| fromDate/toDate | Date | TZ bounds on list |
| code | Text readonly | IdCode `NT-*` auto |
| zoneOrgCode / vpOrgCode | SearchInput · org-unit | Integration org-unit search · 422 |
| assigneeCode | SearchInput · org | org/users search · required · 422 |
| inspectedAt | Date | UTC · required · TZ |
| kmFrom/kmTo | Number | decimal |
| fieldInfo / note | Text | string |
| mediaIds | FileMulti | FileService guid[] ↔ child rows — **cấm** URL persist |
| updatedAt | Date readonly | server |

## 3. API catalog

Base API: `api/v1/patrol/nghiem-thu` · BFF: `web-bff/api/v1/patrol/nghiem-thu` (mirror)

### API-00: GET /api/v1/patrol/nghiem-thu/init-data

| | |
|--|--|
| Purpose | LOOKUP_STATIC status + templateType `{value,label}[]` |
| Permission | `patrol.nghiem-thu.read` |
| Tenant | X-Company-Id |
| Request | — |
| Response | `{ statuses: [{value,label}], templateTypes: [{value,label}] }` — status: `draft`/`in_progress`/`done`/`cancelled` ↔ Nháp/Đang NT/Hoàn thành/Hủy · template: `mau-01`…`mau-10` ↔ Mẫu nghiệm thu 01…10 |
| Errors | 401 · 403 |
| Form surfaces | Create · Edit · List filter bind |
| Field map | status/templateType options |
| gates.tz | n/a |
| gates.xco | n/a |
| gates.shared | tenant_keep |
| Context docs | `docs/context/features/nghiem-thu.md` |
| Demo HTML | **N/A** |
| Demo JSON | **N/A** |
| data-import | **N/A** — labels từ PO CLOSED |
| Sample | `templateTypes[0]={value:"mau-01",label:"Mẫu nghiệm thu 01"}` |
| Migration | Seed_* optional · hoặc const BE |

### API-01: GET /api/v1/patrol/nghiem-thu

| | |
|--|--|
| Purpose | Paged list + filter |
| Permission | `patrol.nghiem-thu.read` |
| Tenant | X-Company-Id · companyCode filter |
| Request | query: `search?` · `status?` · `route?` · `templateType?` · `fromDate?` · `toDate?` · `page` · `pageSize` |
| Response | paged `{ items[], total }` — list cols: code · status · route · templateType · assigneeCode · inspectedAt · updatedAt |
| Errors | 401 · 403 · 422 date |
| Form surfaces | **List** |
| Field map | search→Search · status→Status · route→Route · templateType→TemplateType · fromDate/toDate→InspectedAt bounds |
| gates.tz | **yes** |
| gates.xco | n/a (list tenant filter) |
| gates.shared | tenant_keep |
| Context docs | `docs/context/features/nghiem-thu.md` |
| Demo HTML | **N/A** |
| Demo JSON | **N/A** |
| data-import | **N/A** |
| Sample | `?status=draft&fromDate=2026-09-01&toDate=2026-09-12` |
| Migration | Schema_NghiemThu + index CI Search |

### API-02: GET /api/v1/patrol/nghiem-thu/{id}

| | |
|--|--|
| Purpose | Detail for View/Edit/Copy |
| Permission | `patrol.nghiem-thu.read` |
| Tenant | X-Company-Id · **XCO** AllowedCompanyIds |
| Request | path `id` (guid) |
| Response | full DTO + `mediaIds: string[]` |
| Errors | 404 · 403 XCO · 401 |
| Form surfaces | **View** · **Edit** · **Copy** |
| Field map | all form uiFields → DTO → columns · mediaIds ← NghiemThuMedia.FileId |
| gates.tz | **yes** (inspectedAt/updatedAt) |
| gates.xco | **yes** |
| gates.shared | tenant_keep |
| Context docs | `docs/context/features/nghiem-thu.md` |
| Demo | **N/A** |
| data-import | **N/A** |
| Sample | id guid |
| Migration | Schema_NghiemThu |

### API-03: POST /api/v1/patrol/nghiem-thu

| | |
|--|--|
| Purpose | Create NT |
| Permission | `patrol.nghiem-thu.write` |
| Tenant | X-Company-Id · stamp companyCode |
| Request | body: status · templateType · route · zoneOrgCode · vpOrgCode · assigneeCode · inspectedAt · kmFrom? · kmTo? · fieldInfo · note? · mediaIds?[] — **code auto** |
| Response | created DTO + code `NT-*` |
| Errors | 422 lookup (route/org/assignee/template/status) · 401 · 403 |
| Form surfaces | **Create** · **Copy** (save as new) |
| Field map | ui→dto→db · mediaIds → insert NghiemThuMedia rows |
| gates.tz | **yes** |
| gates.xco | n/a |
| gates.shared | tenant_keep |
| Context docs | `docs/context/features/nghiem-thu.md` |
| Demo | **N/A** |
| data-import | **N/A** |
| Sample | `{ "templateType":"mau-01","status":"draft","assigneeCode":"NV001","inspectedAt":"2026-09-12T00:00:00Z","fieldInfo":"…" }` |
| Migration | Schema_NghiemThu · IdCode |

### API-04: PUT /api/v1/patrol/nghiem-thu/{id}

| | |
|--|--|
| Purpose | Update NT |
| Permission | `patrol.nghiem-thu.write` |
| Tenant | X-Company-Id |
| Request | body same Create (code immutable) · mediaIds replace-set |
| Response | updated DTO |
| Errors | 404 · 422 · 409 concurrency optional · 401 · 403 |
| Form surfaces | **Edit** |
| Field map | same Create · sync media child |
| gates.tz | **yes** |
| gates.xco | n/a (write own tenant) |
| gates.shared | tenant_keep |
| Context / Demo / data-import | N/A |
| Migration | Schema_NghiemThu |

### API-05: DELETE /api/v1/patrol/nghiem-thu/{id}

| | |
|--|--|
| Purpose | Soft-delete / isActive=false |
| Permission | `patrol.nghiem-thu.write` |
| Tenant | X-Company-Id |
| Request | path id |
| Response | 204 / ApiResponse ok |
| Errors | 404 · 403 · 401 |
| Form surfaces | **Delete** |
| Field map | isActive |
| gates.tz | n/a |
| gates.xco | n/a |
| gates.shared | tenant_keep |
| Context / Demo / data-import | N/A |
| Migration | Schema_NghiemThu |

### API-FILE (reuse — not invent)

| | |
|--|--|
| Purpose | Upload / resign media |
| Path | `web-bff/api/v1/files/*` · FileService Bff |
| Form surfaces | DES-NT-UPLOAD · MIME image≤10MB · video≤50MB · max 10 |
| Persist | guid only on NghiemThuMedia · **cấm** full URL |
| Skills | `/init-bff-file` · `/integrate-file-upload-web` |

### External lookups (cite — not NT controllers)

| catalogKind | API | Seed cite |
|-------------|-----|-----------|
| road-route | Integration `…/road-routes/search` | `shared-catalogs/road-route-seed.json` |
| org-unit | Integration org-unit / RmmsOrgFormFields | org master |
| org (assignee) | users/org search SSOT Field | — |

## 4. BFF vs API · tenant

- **Decision:** BFF **proxy only** → API Patrol; MFE calls BFF base `http://localhost:5201/web-bff/api/v1`.
- **Tenant:** mọi NT API yêu cầu `X-Company-Id` · list filter companyCode · GET/{id} **XCO**.
- **Id:** business `code` = IdCode `NT-*` · PK guid.

## 5. Data model / EF

| Entity | Columns (key) | Migration |
|--------|---------------|-----------|
| `NghiemThu` | Id · Code · Status · TemplateType · Route · ZoneOrgCode · VpOrgCode · AssigneeCode · InspectedAt · KmFrom · KmTo · FieldInfo · Note · CompanyCode · IsActive · CreatedAt · UpdatedAt | **Schema_NghiemThu** |
| `NghiemThuMedia` | Id · NghiemThuId · FileId (guid) · SortOrder | **Schema_NghiemThu** (same) |
| Seed | status/template labels (optional Seed_NghiemThuLookup) | Seed_* optional |

### Persist gate (`no-parent-json-field`)

| | |
|--|--|
| Parent JSON string inventory | **none** |
| Child tables | `NghiemThuMedia` |
| API shape | scalars on header · `mediaIds: string[]` (not `mediaIdsJson`) |

**Cấm** reuse `rmms_patrol_sessions` rows · **cấm** parent blob.

## 6. Permissions · multi-tenancy

| Code | Use |
|------|-----|
| `patrol.nghiem-thu.read` | list · get · init-data |
| `patrol.nghiem-thu.write` | create · update · delete |

Default data-import đơn vị: **RMMS CUC 2 / Chi cục QLĐB II.1 / QL.1** (autoApprove — feature Field NT).

## 7. Handoff → Team lead

| Item | Value |
|------|-------|
| FormMode↔API | List→01 · View/Edit/Copy→02 · Create/Copy-save→03 · Edit-save→04 · Delete→05 · Lookups→00 · Files→API-FILE |
| Migration | Schema_NghiemThu **required** · Seed optional |
| Gates | TZ required · XCO required · SHARE tenant_keep |
| DOMAIN-MAP | row `nghiem-thu`→Patrol (patched) |
| devSlash | `/agent-dev` |
| e2eQa | queued `/agent-qa*` only |
| **Cấm TL/Dev** | ERP.* · WO · sessions reuse · invent file API · parent JSON · filterItems HOW |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.05.03 |
| rulesVersion | 2026.09.05.8 |
| generatedAt | 2026-09-12T09:30:00.000Z |
| versionGate | ok |
| solution_confirm | **approve** (autoApprove) |

---
<!-- Version meta: skillVersion=2026.09.05.03 · schemaVersion=1 · workflowVersion=2026.09.05.03 · versionGate=ok · solution_confirm=approve -->
