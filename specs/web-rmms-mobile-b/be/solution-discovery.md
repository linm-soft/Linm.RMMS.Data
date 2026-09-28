# SA — solution-discovery — web-rmms-mobile-b

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-b` |
| this role | `sa` · `/agent-sa` |
| status | `confirmed` (autoApprove=ON · agent self-confirm) |
| changeScope | `edit_page` · editTask=`1` · **§ Delta** overlay prior wave B |
| packKind | `list` (phone Field list/form ≠ desktop Kind B grid) |
| domain | **Patrol** (+ Auth · Files · parent session Live) · DOMAIN-MAP `patrol` · recommend row `web-rmms-mobile-b` → Patrol |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| be_repo_confirm | `approve` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · `mfeStdRoute=/web-rmms-mobile-b` · `mfeStdUrl=http://localhost:9301/web-rmms-mobile-b` |
| ui_repo_confirm | `approve` |
| solution_confirm | `approve` (autoApprove=ON · `task_a242e718`) |
| prior · design | `confirmed` · compact + `ui/design.md` · reviewUrl prototype |
| prior · po | `confirmed` · compact + `po/requirement.md` |
| prior · data_analy | `confirmed` · hash `sha256:fe3ccad04e66ee08b65a65aead0fbef9f46328e5c2a3b828b3bee12969bbf72e` |
| contentHash | `sha256:fe3ccad04e66ee08b65a65aead0fbef9f46328e5c2a3b828b3bee12969bbf72e` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| workflowVersion | `2026.09.19.02` |
| updatedAt | `2026-09-27T07:15:00.000Z` |
| demo | **N/A** · **cấm** rescan / demo-json / fake GPS SSOT |
| wave | **B** KEEP TD-04/05 · Live journal-lines · out: TD-06 · TK-02…07 · WO/scope đợt D |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · slug B |

> SA **chốt** FormMode↔API · entity/migration flags · BFF vs API · gates TZ/XCO/SHARE · **§ Delta** (Pattern B · capture · mobileApiBase · align).  
> **Cấm** invent API · **cấm** ERP.* · **cấm** fake GPS · **cấm** HOW (TL) · **cấm** Write MFE/native.

## § Delta (edit_page) — SA scope

| Gap / task | Layer | SA decision |
|------------|-------|-------------|
| T-DELTA-PATTERN-B-01 | FE only | Lưu luôn bật trừ saving/hydrating · GPS/narrative banner+inline on-click · **cấm** `disabled=!canSave` · **cấm** `alert.warning` · **no** API/DTO change |
| T-DELTA-CAPTURE-01 | FE only | `mediaIds` FileMulti → `capture=environment` · **cấm** fork package · path files/* KEEP · UNCLEAR-CAPTURE-PROP → Dev |
| T-DELTA-BFF-01 | Transport | UI bind **`mobileApiBase()` / `VITE_MOBILE_API_URL` only** · **cấm** `web-bff` · users forward nếu thiếu · `road-routes/search` KEEP · API Patrol owns journal-lines |
| T-DELTA-ALIGN-01 | FE only | `/align-mobile-to-mfe` · 430px · **no** new tab/route/icon · **no** android/ios proto |
| Prior T-BE-* | BE | Schema/CRUD/init/perm **done** · **migration = none new** this delta |

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| Domain | Patrol / `patrol` · cite Auth · Files · parent `PatrolSession` Live |
| API host | `api/src/RMMS.Service.Api/Domains/Patrol/` · Models `api/domains/patrol/…/DTOs/` |
| Entity / table | `PatrolJournalLineEntity` → `rmms_patrol_journal_lines` · **Live** (T-BE-SCHEMA-01 done) |
| Entity parent Live | `PatrolSessionEntity` → `rmms_patrol_sessions` (FK `sessionId`) |
| BFF / transport (UI) | **`mobileApiBase()` only** · proxy → `mobile-bff/api/v1/patrol/**` · **cấm web-bff** (delta) |
| MFE | `Linm.Web.RMMS.Mobile` · phone max-width 430 |
| Response | Linm.Platform.CommonLib `ApiResponse` / paged |
| Auth perm | Linm.Platform.Authentication · Patrol session + journal-line codes (T-PERM-01 done) |
| Persist | scalar columns · `MediaIds` CSV guid · **cấm** parent `*Json` · **cấm** full URL |
| Out of B | TD-06 · TK-02…07 · findings · `scope`/`workOrderId` · `POST maintenance/work-orders` |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` + mobile kit | no local Lin* clones · labels `useFormOptions()` |
| HTTP | apiClient SSOT · **mobileApiBase** | re-export only · **cấm** web-bff |
| BE | Linm.Platform.CommonLib | ApiResponse |
| Auth | Linm.Platform.Authentication + RequirePermission | peer Patrol · journal perms Live |
| Files | FileService `files/*` | guid only · capture FE |
| Catalog | LOOKUP_STATIC FE keys | weather · kind · status · direction · reportedTo — **không** invent `patrol/init-data` |
| Persist | no-parent-json-field | MediaIds CSV · scalar journal columns |
| Check-in ≠ journal | separate entity/table/API | TD-04 list **không** gồm check-in |

## FormType pack (list · phone)

| Item | Value |
|------|-------|
| packKind | `list` |
| formPattern | Full (TD-04 list · TD-05 create/edit) · LeaveConfirmModal · N/A ERP Modal/Slideout |
| Grid AC Kind B / DES-GRID / `LinErpListFilterBar` | **N/A** — phone cards · **không** desktop filter bar · **cấm** `filterItems` |
| Report AC | **N/A** · no Excel |
| List query keys | path `sessionId` · optional `page` · `pageSize` |
| Leave | dirty TD-05 → LeaveConfirmModal (DES-LEAVE) |
| Tabs | `none` |
| Pattern B | banner zone TD-05 · validationAttempted · Lưu gate FE |
| Map | none wave B · GPS point capture only on TD-05 |

## § Path / Schema (CLOSED — KEEP)

| Surface | Method · Path |
|---------|---------------|
| List sổ TD-04 | `GET …/patrol/sessions/{id}/journal-lines` |
| Create TD-05 | `POST …/patrol/journal-lines` · body `sessionId` |
| Get by id | `GET …/patrol/journal-lines/{id}` |
| Update TD-05 | `PUT …/patrol/journal-lines/{id}` |

**Cấm** POST nested create · **cấm** list top-level không session.  
Schema pair **done** · LRS `kmText` tay KEEP · weather 6 LOOKUP_STATIC keys KEEP.

## FormMode ↔ API

| Screen / FormMode | Method · Path | Purpose |
|-------------------|---------------|---------|
| TD-04 list | `GET …/patrol/sessions/{id}/journal-lines` | sổ dòng · empty OK · **cấm** check-in |
| TD-05 Create | `POST …/patrol/journal-lines` | tạo · GPS HARD |
| TD-05 Edit hydrate | `GET …/patrol/journal-lines/{id}` | form sửa |
| TD-05 Update | `PUT …/patrol/journal-lines/{id}` | lưu sửa |
| Parent ca | `GET …/patrol/sessions/{id}` | FK · Note `chieu=` default direction |
| userName RO | `GET …/auth/profile` | display · audit BE |
| mediaIds | `POST files/init` → `PUT files/{id}/object` → `POST files/commit` | guid[] → MediaIds CSV · **capture=environment** FE |
| direction / weather / kind / status / reportedTo | LOOKUP_STATIC | `useFormOptions()` · **cấm** hardcode VN |
| Pattern B validate | FE only | banner+inline · **no** new endpoint |

**Parent no session:** empty hub / toast · **cấm** tạo dòng · redirect peer A TD-01.

## controlHint → API (cite real-data §B · compact)

| uiField | controlHint | catalogKind | GET / source | write |
|---------|-------------|-------------|--------------|-------|
| journalList | List cards | — | `GET sessions/{id}/journal-lines` | — |
| at | DateTime | — | detail | `at` UTC |
| userName | Text RO | — | `GET auth/profile` | display |
| lat/lng/accuracyM | GPS | geo | `navigator.geolocation` | `lat`/`lng`/`accuracyM` · banner on fail |
| kmText | Text | — | detail | `kmText` tay |
| direction | Dropdown | LOOKUP_STATIC | ca Note `chieu=` | `direction` |
| weather | Dropdown | LOOKUP_STATIC | 6 keys | `weather` |
| kind | Radio/Dropdown | LOOKUP_STATIC | 9 keys | `kind` |
| narrative | TextArea | — | — | `narrative` **required** · banner on empty |
| mediaIds | FileMulti | files | files/* | `mediaIds[]` · capture=env |
| onSiteAction / onSiteResult | Toggle+Text | — | — | scalars |
| reportedTo / reportedAt | Button+DateTime | LOOKUP_STATIC | — | `reportedTo`/`reportedAt` · no TK-03 |
| violationFlag | Button | — | if `kind=hanh-lang` | `violationFlag` |
| status | Dropdown | LOOKUP_STATIC | 4 keys | `status` |
| validationBanner | Banner | — | FE string[] | — |
| save | Button | — | — | disable **only** saving/hydrating |
| scope / workOrderId | — | — | — | **OUT B** |

**DTO body KEEP:** `sessionId` · `at` · `lat` · `lng` · `accuracyM` · `kmText` · `direction` · `weather` · `kind` · `narrative` · `mediaIds` · `onSiteAction` · `onSiteResult` · `reportedTo` · `reportedAt` · `violationFlag` · `status`.

## Persist / entity / migration

| Entity | Table | This delta |
|--------|-------|------------|
| `PatrolJournalLineEntity` | `rmms_patrol_journal_lines` | **done** · **none new** |
| `Schema_PatrolJournalLine` | schema pack | **done** |
| `PatrolSessionEntity` | `rmms_patrol_sessions` | **none** — Live parent FK |
| Check-in | `rmms_patrol_check_ins` | **none** · **không** reuse |

**parent_json:** **PASS** — không `*LinesJson` · MediaIds = CSV guid.  
**HARD GPS:** FE deny → block save · BE 422 thiếu lat/lng · **cấm** fake coords.

## API catalog

### API-01: GET /api/v1/patrol/sessions/{id}/journal-lines

| | |
|--|--|
| Purpose | Sổ dòng TD-04 |
| Permission | peer Patrol list + journal read |
| Tenant | X-Company-Id · session tenant |
| Request | path `id` · query `page?` · `pageSize?` |
| Response | list/paged `PatrolJournalLineDto` · **chỉ** journal |
| Errors | 404 session · empty OK |
| Form surfaces | TD-04 List |
| Field map | real-data §B journal.* |
| **gates.tz** | n/a (no date filter query) |
| **gates.xco** | n/a (nested under session) |
| **gates.shared** | tenant_keep |
| Context | CTX feature · TD-04 |
| Demo / DI | N/A |
| Migration | **none** (Live) |

### API-02: POST /api/v1/patrol/journal-lines

| | |
|--|--|
| Purpose | Tạo dòng TD-05 Create |
| Permission | journal create |
| Tenant | X-Company-Id |
| Request body | DTO chốt · `sessionId` · GPS + `narrative` required |
| Response | created line + id |
| Errors | 404 session · 422 GPS/narrative · 403 |
| Form surfaces | TD-05 Create |
| **gates.tz** | yes — `at` · `reportedAt` UTC |
| **gates.xco** | n/a (write) |
| **gates.shared** | tenant_keep |
| HARD | GPS deny FE block · **cấm** fake lat/lng |
| Migration | **none** |

### API-03: GET /api/v1/patrol/journal-lines/{id}

| | |
|--|--|
| Purpose | Hydrate TD-05 Edit |
| Permission | journal get |
| Tenant | XCO get_only |
| Request | path id |
| Response | `PatrolJournalLineDto` |
| Errors | 404 · 403 |
| Form surfaces | TD-05 Edit |
| **gates.tz** | yes — display `at`/`reportedAt` |
| **gates.xco** | yes |
| **gates.shared** | tenant_keep |
| Migration | **none** |

### API-04: PUT /api/v1/patrol/journal-lines/{id}

| | |
|--|--|
| Purpose | Sửa dòng TD-05 Update |
| Permission | journal update |
| Request body | same DTO · immutable `sessionId` |
| Errors | 404 · 422 GPS/narrative · 403 |
| Form surfaces | TD-05 Edit |
| **gates.tz** | yes |
| **gates.xco** | n/a (write) |
| **gates.shared** | tenant_keep |
| Migration | **none** |

### API-05: GET /api/v1/patrol/sessions/{id}

| | |
|--|--|
| Purpose | Parent ca · default direction từ Note `chieu=` |
| Live | peer wave A |
| Form surfaces | TD-04/05 context |
| **gates.xco** | get_only peer |
| Migration | none |

### API-06: GET /api/v1/auth/profile

| | |
|--|--|
| Purpose | Text RO người ghi |
| Transport | mobileApiBase · users forward nếu thiếu (T-DELTA-BFF-01) |
| Cấm | invent user API trong Patrol |

### API-07: files init / object / commit

| | |
|--|--|
| Purpose | FileMulti ảnh hiện trường |
| Path | `files/init` · `files/{id}/object` · `files/commit` |
| Persist | guid only · MediaIds CSV |
| FE delta | `capture=environment` |

## BFF vs API

| Concern | Decision |
|---------|----------|
| Ownership | API Patrol owns journal-lines · BFF **proxy only** |
| Mobile UI bind | **`mobileApiBase()` / `VITE_MOBILE_API_URL` only** · resource `api/v1/patrol/**` |
| Web-bff | **cấm** bind từ MFE mobile-b (delta T-DELTA-BFF-01) |
| Auth / Files | existing prefixes · users forward nếu thiếu · **cấm** nest under patrol |
| Cấm | invent path ngoài § Path · ERP.* |

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **tz_required** | API-02/03/04 `at` · `reportedAt` UTC · FE local display | `/review-timezone-implement` | store UTC · form 2dt |
| XCO | **xco_get_only** | API-03 GET/{id} · API-05 session | `/implement-view-cross-company` | IgnoreQueryFilters + AllowedCompanyIds · 403 |
| SHARE | **tenant_keep** | `PatrolJournalLineEntity` | `/implement-shared-table` | tenant filter giữ · FK session cùng tenant |
| lookup_share | **N/A** wave B | LOOKUP_STATIC FE only | — | no Integration catalog mới |

AskQuestion (autoApprove=ON · self-confirm):  
`sa_tz_gate=tz_required` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `solution_confirm=approve` · `2026-09-27T07:15:00.000Z`

## data-import

| | |
|--|--|
| Default unit | RMMS CUC 2 / Chi cục QLĐB II.1 / QL.1 |
| Wave B / delta | **N/A** — transaction journal · **cấm** seed demo |
| Sample row | N/A |

## Gaps (cite · keep)

| id | Note |
|----|------|
| GAP-DA-MOB-B-SCHEMA-01 | Schema **done** prior |
| GAP-DA-MOB-B-PATH-01 | Path CLOSED KEEP |
| GAP-DA-MOB-B-LRS-01 / UNCLEAR-LRS | kmText tay KEEP |
| GAP-DA-MOB-B-WEATHER-01 | 6 keys LOOKUP_STATIC |
| GAP-DA-MOB-B-OUT-D | scope/WO · TD-06 = đợt D |
| GAP-SA-MOB-B-DMAP-01 | DOMAIN-MAP row recommend (docs) |
| UNCLEAR-CAPTURE-PROP | Dev — prop vs local input |
| UNCLEAR-BANNER-KEYS | Dev — prefer useFormOptions/existing keys |
| T-DELTA-* | Pattern B · capture · BFF · align — TL/Dev |

## Handoff → team-lead

| Field | Value |
|-------|-------|
| feature / packKind | `web-rmms-mobile-b` / `list` |
| phase_from / phase_to | sa → team-lead |
| STATUS | confirmed |
| Context / Demo / DI | CTX feature · N/A · N/A |
| controlHint / UNCLEAR | real-data §B · CAPTURE-PROP · BANNER-KEYS · LRS KEEP |
| Screens / Pattern / devSlash | TD-04 · TD-05 · Full · Pattern B · `/agent-dev` |
| peerStdUrl / reviewUrl | `http://localhost:9301/web-rmms-mobile-b` · prototype file URL |
| APIs / FormMode↔API | API-01…07 · table trên · **no new endpoint** |
| entity / migration | Live · **none new** |
| TZ / XCO / SHARE | tz_required · xco_get_only · tenant_keep |
| BFF vs API | mobileApiBase only · API Patrol owns · cấm web-bff |
| Delta tasks | T-DELTA-PATTERN-B-01 · CAPTURE-01 · BFF-01 · ALIGN-01 |
| Open questions | UNCLEAR → Dev (STATUS) |
| Next | `/agent-team-lead` · roleOnly stop (GAP-PKT-ROLE-01) |

## Version meta

| Field | Value |
|-------|-------|
| skillId | agent-sa |
| skillVersion | 2026.09.05.03 |
| schemaVersion | 1 |
| workflowVersion | 2026.09.19.02 |
| rulesVersion | 2026.09.19.7 |
| contentHash | sha256:fe3ccad04e66ee08b65a65aead0fbef9f46328e5c2a3b828b3bee12969bbf72e |
| generatedAt | 2026-09-27T07:15:00.000Z |
| versionGate | ok |
| solution_confirm | approve |
| taskId | task_a242e718 |
