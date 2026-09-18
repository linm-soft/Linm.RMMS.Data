# SA — solution-discovery · users

| Field | Value |
|-------|-------|
| feature | `users` |
| changeScope | `edit_page` |
| packKind | `list` |
| Feature Kind | **B** — catalog A–D + tree + **full-page** form · **cấm** Slideout |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_9e90aa92`) |
| design_confirm | **approve** (prior Design · `task_141a68a1`) |
| domain | **Integration** (DOMAIN-MAP slug `users`) |
| backend | `D:/AI-QLBD/Linm.RMMS.WebService` · **`api/v1/integration/users`** + LKP **`job-titles`** |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Integration` · `/integration/users` |
| prior | data_analy `confirmed` · PO `confirmed` · Design `confirmed` · contentHash `sha256:8bd9897e1ab2483fdb96e9a37492d87c38c7e709c2e3df118c7b884f5d4bb257` |
| priorSa | `task_810854fa` KEEP (CRUD · `?route=` · validate Routes/Org/Managed) |
| updatedAt | `2026-09-18T16:17:00.000Z` |
| taskId | `task_9e90aa92` |
| title | Users — chức vụ lookup (job-title) |

**Cấm:** `ERP.Service.*` · `ERP.WebService` · `Domains/Master` · `api/v1/rmms/*` · open-api · parent JSON · invent package Cục/VP · invent domain ngoài Integration · master CRUD job-title trong pack này.

Standards: api-endpoint · bff-api-structure · company-field · database-migration · api-permission-gate · repo-path-guard · **no-parent-json-field** · **ssot-no-duplicate** · **sa-implement-gates** (TZ · XCO · SHARE).

---

## 1. Ownership

| Layer | Path |
|-------|------|
| API | `Domains/Integration/` · `AppUsersController` |
| Service | `AppUserService` · `IAppUserService` |
| Models | `LINM.RMMS.Integration.Models/DTOs/AppUserDtos.cs` |
| Persistence | `rmms_users` · `AppUserEntity` · tenant `CompanyCode` |
| Migrations | `RMMS.Service.Migrations/` — Schema_RmmsUsers **DONE** + **DELTA** cột `job_title_code` |
| BFF | `AppUsersBffController` + **DELTA** proxy LKP `job-titles` (khi master live / stub) |
| MFE | `Linm.Web.RMMS.Integration` · UsersList/Form |
| LKP peer | `api/v1/integration/job-titles` · soft **GAP-JOB-05** stub OK |

### Route decision (DOMAIN-MAP)

| | Choice |
|--|--------|
| Slug | `users` → **Integration** |
| API | `api/v1/integration/users` |
| BFF | `web-bff/api/v1/integration/users` |
| LKP | `api/v1/integration/job-titles` (+ `/search`) · BFF same · **cấm** ERP / `rmms/*` |
| Rationale | Live users đúng DOMAIN-MAP; job-title = peer Integration catalog (master pack) |

---

## 2. Implement gates (chốt)

| Gate | Decision | Note |
|------|----------|------|
| sa_tz_gate | **tz_na** | Không DATE range filter job-title |
| sa_xco_gate | **xco_na** | GET/{id} cùng tenant — không cross-company P1 |
| sa_shared_table | **tenant_a** (`tenant_keep`) | `AppUserEntity` : `TenantEntity` · filter `CompanyCode` |
| job-title catalog | **share_a** (reuse master) | **không** duplicate schema job-title trên users |
| Org / road-route | **Reuse** prior SA | KEEP |
| Auth / ProfileTab | GAP-F-USR-01 / GAP-JOB-06 | **boundary** · P1 **không block** staff list/form |

---

## 3. Live vs delta (audit 2026-09-18)

| Surface | Live BE | SA chốt P1 |
|---------|---------|------------|
| CRUD · init-data · change-password · assign-routes · managed-users | **DONE** (prior) | **KEEP** |
| `GET ?route=` · validate RoutesCsv / OrgCode / ManagedUserIdsCsv | **DONE** (prior) | **KEEP** |
| Free-text `JobTitle` string on entity/DTO | **DONE** | **KEEP cột** · **đổi semantics** = denormalize catalog `name` |
| `JobTitleCode` / `job_title_code` | **MISSING** | **DELTA** persist code · FK logical → job-titles |
| List DTO expose `jobTitleCode` (+ resolved name) | **MISSING** | **DELTA** |
| `GET …/users?jobTitleCode=` | **MISSING** | **DELTA** Zone B filter exact code |
| Validate `jobTitleCode` ∈ catalog active | **MISSING** | **DELTA** 422 khi LKP live; stub skip soft |
| LKP `job-titles` list/search | **GAP-JOB-05 soft** | Stub OK · contract chốt dưới |
| BFF QS forward `jobTitleCode` | list BFF raw QS | **không** endpoint BFF users mới |
| ProfileTab / Auth Position | free text | **out of pack P1** · boundary GAP-JOB-06 |

---

## 4. Form data analysis (REQUIRED)

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| List Zone B | KEEP + **`jobTitleCode`** SearchInput `catalogKind=job-title` | query | — |
| List Zone C | KEEP + cột **Chức vụ** = name(`jobTitleCode`) · **≠** roleCode | tenant + LKP | `AppUserEntity` |
| Create / Edit / Copy | KEEP + **`jobTitleCode`** SearchInput peer `orgCode` | tenant + LKP | `AppUserEntity` |
| View | same · **`<dl>`** Chức vụ = name | tenant | `AppUserEntity` |
| Password / Assign routes / Managed | KEEP | command | prior |
| Profile / switch | SearchInput catalog | Auth boundary | **P1 skip** · GAP-JOB-06 |

### Field map — delta (ui → dto → db)

| uiField | Label VN | dtoField | dbColumn | Notes |
|---------|----------|----------|----------|-------|
| jobTitleCode | Chức vụ | JobTitleCode | `job_title_code` | string code · **cấm** Guid · MaxLength 64 · SearchInput LKP |
| jobTitle (display) | Chức vụ (name) | JobTitle | `job_title` | **denormalize** = catalog `name` at write · grid/View fallback |
| roleCode | Vai trò | RoleCode | `role_code` | **KEEP** · **≠** chức vụ |

**Persist write rule:** client gửi `jobTitleCode` → BE resolve name từ LKP (hoặc stub seed) → set `JobTitle` = name · **cấm** nhận free-text JobTitle thay code trên form P1.  
**Cấm** parent JSON / `*Json` blob.

### FormMode ↔ API

| FormMode | HTTP | Path | Body / QS notes |
|----------|------|------|-----------------|
| List | GET | `/users?…&jobTitleCode=` | + filter exact code · page=1 khi đổi filter |
| Create / Copy | POST | `/users` | body + `jobTitleCode` · server denorm `JobTitle` |
| Edit | PUT | `/users/{id}` | body + `jobTitleCode` |
| View / load | GET | `/users/{id}` | response `jobTitleCode` + `jobTitle` |
| LKP typeahead | GET | `/job-titles/search?search=` | SearchInput Zone B + form |
| LKP page | GET | `/job-titles?search=&titleGroup=` | optional |

---

## 5. Enum / catalog SSOT

**roleCode / status** — KEEP prior SA (live init-data values).

**jobTitleCode** — seed SSOT `docs/context/seed/job-title-seed.json` (19):

`TRUONG-VP` · `PHO-TRUONG-VP` · `DOI-TRUONG` · `DOI-PHO` · `PHU-TRACH-DOI` · `HAT-TRUONG` · `HAT-PHO` · `GIAM-DOC` · `PHO-GIAM-DOC` · `TRUONG-PHONG` · `PHO-PHONG` · `TO-TRUONG` · `TRUONG-CA` · `CHUYEN-VIEN` · `KY-SU` · `CAN-BO-KT` · `TUAN-DUONG` · `TUAN-KIEM` · `NHAN-VIEN`

Sample resolve: `HAT-TRUONG`→Hạt trưởng · `CHUYEN-VIEN`→Chuyên viên · `TUAN-DUONG`→Tuần đường.

`packageHint` trên seed = **gợi ý** · **cấm** invent package Cục/VP trong users.

---

## 6. API catalog (delta)

Base users: `api/v1/integration/users` · BFF `web-bff/api/v1/integration/users`.  
Permission KEEP: `integration.users.read|create|update|delete`.  
Tenant: `X-Company-Id` → `CompanyCode`.  
Errors: 401 · 403 · 404 · 422 `{ success:false, message }`.

### DELTA API-01: GET /users — filter `jobTitleCode`

| | |
|--|--|
| Status | **DELTA** |
| Request | KEEP + **`jobTitleCode?`** exact match entity code |
| Response | `AppUserDto` + **`jobTitleCode`** · `jobTitle` (name) |
| Filter đổi | FE page=1 |

### DELTA API-04/05: POST/PUT body

| | |
|--|--|
| Status | **DELTA** |
| Body | KEEP + **`jobTitleCode?`** |
| Write | resolve name → `JobTitle` · empty code → clear JobTitle (nullable semantics: empty string OK live) |
| 422 | code không ∈ catalog active **khi LKP live**; stub: accept seed set / skip soft |

### Lookup — job-titles (peer · soft GAP-JOB-05)

| Lookup | API | Consumer | BE |
|--------|-----|----------|-----|
| job-title SearchInput | `GET /api/v1/integration/job-titles/search` | Zone B · form | **stub OK** until master |
| job-title list | `GET /api/v1/integration/job-titles?search=&titleGroup=` | optional | stub OK |
| BFF | `web-bff/api/v1/integration/job-titles` | same | proxy-only |

**Cấm** invent `/users/job-titles` riêng · **cấm** open-api · **cấm** `api/v1/rmms/*`.

Lookups KEEP: org-units tree/search · road-routes/search · users list (managed).

---

## 7. Schema — `rmms_users` delta

| Change | Detail |
|--------|--------|
| ADD | `job_title_code` `nvarchar(64)` nullable/empty · logical FK code |
| KEEP | `job_title` denormalized name |
| Migration | **T-BE-JOB-01** · Schema delta (không bảng mới) |
| Index P1 | optional `(CompanyCode, JobTitleCode, IsActive)` — **không bắt buộc** volume thấp |

**GAP-JOB-02:** migrate free-text JobTitle → code via `legacyAliases` — **out of pack** / peer import; P1 UI+persist code đủ.

---

## 8. Validate rules (Dev T-BE-JOB-01)

1. `jobTitleCode`: trim · empty = clear · **cấm** Guid.
2. Khi LKP live: code phải ∈ job-titles active → else **422**.
3. Soft GAP-JOB-05: stub SearchInput + accept seed codes · **không** block staff ship.
4. On write: `JobTitle` = catalog `name` (seed hoặc LKP) · **không** tin client free-text name thay code.
5. List filter `jobTitleCode`: exact CI trim.
6. **Cấm** JSON object cho chức vụ.

---

## 9. Out of pack

- Master CRUD job-title page (peer pack)
- Auth service tách (GAP-F-USR-01)
- ProfileTab / switch Position wire (GAP-JOB-06) — **boundary** ghi TL note
- Bulk migrate legacy JobTitle strings (GAP-JOB-02) trừ khi import peer chạy
- Excel import alias map — peer job-title / cuc-01

---

## 10. Handoff → TL

Emit / update tasks:

| Task | Scope |
|------|-------|
| T-BE-JOB-01 | Migration `job_title_code` · DTO · POST/PUT denorm · GET list/detail · `?jobTitleCode=` · validate soft/stub |
| T-BFF-JOB-01 | Forward QS `jobTitleCode` · proxy LKP job-titles khi có |
| T-UI-JOB-01 | Zone B SearchInput · col Chức vụ · form SearchInput · View `<dl>` · **cấm** Text |
| T-UI-LKP-JOB | wire `job-titles` search (stub OK) |
| KEEP | prior T-BE/T-UI DONE không reopen trừ regression |

| Field | Value |
|-------|-------|
| Kind | B KEEP + delta job-title |
| API delta | `jobTitleCode` persist · list filter · LKP contract |
| Entity | `AppUser` · ADD `JobTitleCode` · SHARE=`tenant_keep` |
| UI cấm | Text JobTitle · invent package · Slideout |
| Next | team-lead **pending** đến lượt (chain ON · e2eQa queued QA) |

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.08.08.21 |
| schemaVersion | 2 |
| workflowVersion | 2026.08.09.02 |
| rulesVersion | 2026.08.09.3 |
| generatedAt | 2026-09-18T16:17:00.000Z |
| versionGate | rechecked |
| version_mismatch_action | recheck_new (STATUS) |
| orchestratorSkillVersion | 2026.08.08.21 |
| orchestratorWorkflowVersion | 2026.08.09.02 |
| orchestratorRulesVersion | 2026.08.09.3 |
| dataAnalySkillVersion | 2026.08.08.20 |
| dataAnalyContentHash | sha256:8bd9897e1ab2483fdb96e9a37492d87c38c7e709c2e3df118c7b884f5d4bb257 |
| poSkillVersion | 2026.08.08.30 |
| designSkillVersion | 2026.08.08.31 |
| priorSaSkillVersion | 2026.08.08.21 (KEEP route/CRUD · regen delta job-title) |

---
<!-- Version meta: skillVersion=2026.08.08.21 · schemaVersion=2 · workflowVersion=2026.08.09.02 · rulesVersion=2026.08.09.3 · versionGate=rechecked -->
