# SA — solution-discovery — web-rmms-mobile-b

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-b` |
| this role | `sa` · `/agent-sa` |
| status | `confirmed` (autoApprove=ON · agent self-confirm) |
| changeScope | `edit_page` |
| packKind | `list` (phone Field list/form ≠ desktop Kind B grid) |
| domain | **Patrol** (+ Auth · Files · parent session Live) · DOMAIN-MAP slug peer `patrol` · recommend add row `web-rmms-mobile-b` → Patrol |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| be_repo_confirm | `approve` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · `mfeStdRoute=/web-rmms-mobile-b` · `mfeStdUrl=http://localhost:9301/web-rmms-mobile-b` |
| ui_repo_confirm | `approve` |
| solution_confirm | `approve` (autoApprove=ON · `task_ea115b13`) |
| prior · design | `confirmed` · compact + `ui/design.md` · reviewUrl prototype |
| prior · po | `confirmed` · compact + `po/requirement.md` |
| prior · data_analy | `confirmed` · hash `sha256:58be487c963674c63e2436a6277905c70eb483f673a867c595bbd1babca3e773` |
| contentHash | `sha256:58be487c963674c63e2436a6277905c70eb483f673a867c595bbd1babca3e773` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| updatedAt | `2026-09-25T08:20:00.000Z` |
| demo | **N/A** · **cấm** rescan / demo-json / fake GPS SSOT |
| wave | **B** · TD-04 sổ · TD-05 dòng · API **Mới** journal-lines · out: TD-06 · TK-02…07 · WO/scope đợt D |

> SA **chốt** FormMode↔API · POST path · entity+Schema pair · BFF vs API · gates TZ/XCO/SHARE.  
> **Cấm** invent API · **cấm** ERP.* · **cấm** fake GPS · **cấm** mock journal list · **cấm** gộp check-in DTO · **cấm** HOW (TL).

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| Domain | Patrol / `patrol` · cite Auth · Files · parent `PatrolSession` Live |
| API host | `api/src/RMMS.Service.Api/Domains/Patrol/` · Models `api/domains/patrol/…/DTOs/` |
| Entity / table **Mới** | `PatrolJournalLineEntity` → `rmms_patrol_journal_lines` · pair `Schema_PatrolJournalLine` **trước** form |
| Entity parent Live | `PatrolSessionEntity` → `rmms_patrol_sessions` (FK `sessionId`) |
| BFF web (cite peer) | `web-bff/api/v1/patrol/**` · proxy |
| BFF mobile (UI bind) | `mobile-bff/api/v1/patrol/**` · cùng `{resource}` |
| MFE | `Linm.Web.RMMS.Mobile` · phone max-width 430 |
| Response | Linm.Platform.CommonLib `ApiResponse` / paged |
| Auth perm | Linm.Platform.Authentication · peer Patrol session codes + new journal-line codes |
| Persist | scalar columns · `MediaIds` CSV guid · **cấm** parent `*Json` blob · **cấm** full URL |
| Out of B | TD-06 · TK-02…07 · findings · `scope`/`workOrderId` · `POST maintenance/work-orders` |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` + mobile kit | no local Lin* clones · labels `useFormOptions()` |
| HTTP | apiClient SSOT | re-export only · prefix mobile-bff |
| BE | Linm.Platform.CommonLib | ApiResponse |
| Auth | Linm.Platform.Authentication + RequirePermission | peer Patrol · new journal perms |
| Files | FileService BFF `files/*` | guid only · **cấm** full URL persist |
| Catalog | LOOKUP_STATIC FE keys | weather · kind · status · direction · reportedTo — **không** invent `patrol/init-data` |
| Persist | no-parent-json-field | MediaIds CSV · scalar journal columns |
| Check-in ≠ journal | separate entity/table/API | TD-04 list **không** gồm check-in |

## FormType pack (list · phone)

| Item | Value |
|------|-------|
| packKind | `list` |
| formPattern | Full (TD-04 list · TD-05 create/edit) · LeaveConfirmModal · N/A ERP Modal/Slideout |
| Grid AC Kind B / DES-GRID / `LinErpListFilterBar` | **N/A** — phone cards · **không** desktop filter bar |
| Report AC | **N/A** |
| List query keys | path `sessionId` · optional `page` · `pageSize` |
| filterItems | **cấm** (no DES-GRID) |
| Leave | dirty TD-05 → LeaveConfirmModal (Design DES-LEAVE) |
| Tabs | `none` |
| Map | none wave B · GPS point capture only on TD-05 |

## § Path / Schema (UNLOCK — SA chốt)

### UNCLEAR-JL-PATH → CLOSED

| Surface | Method · Path | Rationale |
|---------|---------------|-----------|
| List sổ TD-04 | `GET …/patrol/sessions/{id}/journal-lines` | nested dưới ca · mirror check-ins list · CTX + real-data §B |
| Create TD-05 | `POST …/patrol/journal-lines` | **top-level** · body bắt buộc `sessionId` · CTX «POST · PUT journal-lines» |
| Get by id | `GET …/patrol/journal-lines/{id}` | top-level detail / hydrate edit |
| Update TD-05 | `PUT …/patrol/journal-lines/{id}` | top-level · same DTO fields |

**Cấm** POST nested `sessions/{id}/journal-lines` (tránh 2 create paths).  
**Cấm** list top-level không filter session (sổ luôn theo ca).

### UNCLEAR-JL-SCHEMA → CLOSED (gate)

| | |
|--|--|
| Decision | Pair **entity + `Schema_PatrolJournalLine` + table `rmms_patrol_journal_lines` trước** wire form TD-05 |
| Entity | `PatrolJournalLineEntity` |
| Schema file | `Schema_PatrolJournalLine` (Domains/Patrol schema pack peer) |
| FK | `SessionId` → `rmms_patrol_sessions.Id` · tenant + soft-delete peer session |
| Soft-delete | KEEP peer Patrol soft-delete pattern |
| Dev | migration + controller **Mới** (Step 4b / team-lead T-*) — **không** mock list khi 404 |

### UNCLEAR-LRS → CLOSED (wave B)

| | |
|--|--|
| Decision | `kmText` = **Text tay** · không gọi Integration LRS wave B |
| Cite | `GAP-TD-LRS-01` / `GAP-DA-MOB-B-LRS-01` · mở lại khi LRS Live |

### UNCLEAR-WEATHER → CLOSED (wave B)

| | |
|--|--|
| Decision | LOOKUP_STATIC 6 keys CTX: `nang` · `mua` · `mu` · `lu` · `bao` · `khac` · label qua `useFormOptions()` |
| Cite | `GAP-TD-WEATHER-01` · **không** invent weather API |

## FormMode ↔ API

| Screen / FormMode | Method · Path | Purpose |
|-------------------|---------------|---------|
| TD-04 list | `GET …/patrol/sessions/{id}/journal-lines` | sổ dòng · empty OK · **cấm** check-in rows |
| TD-05 Create | `POST …/patrol/journal-lines` | tạo dòng · GPS HARD |
| TD-05 Edit hydrate | `GET …/patrol/journal-lines/{id}` | form sửa |
| TD-05 Update | `PUT …/patrol/journal-lines/{id}` | lưu sửa |
| Parent ca | `GET …/patrol/sessions/{id}` | sessionId FK · Note `chieu=` default direction |
| userName RO | `GET …/auth/profile` | display · audit BE |
| mediaIds | `POST files/init` → `PUT files/{id}/object` → `POST files/commit` | guid[] → MediaIds CSV |
| direction / weather / kind / status / reportedTo | LOOKUP_STATIC | `useFormOptions()` · **cấm** hardcode VN |

**Parent no session:** empty hub / toast · **cấm** tạo dòng · redirect peer A TD-01.

## controlHint → API (cite real-data §B)

| uiField | controlHint | catalogKind | GET / source | write |
|---------|-------------|-------------|--------------|-------|
| journalList | List cards | — | `GET sessions/{id}/journal-lines` | — |
| at | DateTime | — | detail | `at` |
| userName | Text RO | — | `GET auth/profile` | display · BE audit |
| lat/lng/accuracyM | GPS | geo | `navigator.geolocation` | `lat`/`lng`/`accuracyM` |
| kmText | Text | — | detail | `kmText` (tay) |
| direction | Dropdown | LOOKUP_STATIC | default ca Note `chieu=` | `direction` |
| weather | Dropdown | LOOKUP_STATIC | useFormOptions 6 keys | `weather` |
| kind | Radio/Dropdown | LOOKUP_STATIC | 9 keys CTX | `kind` |
| narrative | TextArea | — | — | `narrative` **required** |
| mediaIds | FileMulti | files | files/* | `mediaIds[]` guid |
| onSiteAction | Toggle | — | — | `onSiteAction` |
| onSiteResult | Text | — | — | `onSiteResult` |
| reportedTo | Button+enum | LOOKUP_STATIC | — | `reportedTo=tuan-kiem` · **không** tạo TK-03 |
| reportedAt | DateTime | — | — | `reportedAt` |
| violationFlag | Button/flag | — | if `kind=hanh-lang` | `violationFlag` |
| status | Dropdown | LOOKUP_STATIC | 4 keys lifecycle | `status` |
| scope / workOrderId | — | — | — | **OUT B** |

**Create/Update body (DTO chốt):** `sessionId` · `at` · `lat` · `lng` · `accuracyM` · `kmText` · `direction` · `weather` · `kind` · `narrative` · `mediaIds` · `onSiteAction` · `onSiteResult` · `reportedTo` · `reportedAt` · `violationFlag` · `status`.

## Persist / entity / migration

| Entity | Table | Wave B migration |
|--------|-------|------------------|
| `PatrolJournalLineEntity` | `rmms_patrol_journal_lines` | **required** · pair Schema trước form |
| `Schema_PatrolJournalLine` | schema pack | **required** |
| `PatrolSessionEntity` | `rmms_patrol_sessions` | **none** — Live parent FK only |
| Check-in | `rmms_patrol_check_ins` | **none** · **không** reuse cho sổ |

**parent_json:** **PASS** — không `*LinesJson` trên session · journal = bảng con riêng · MediaIds = CSV guid.

**HARD GPS:** FE deny → block save TD-05 · BE 422 nếu thiếu lat/lng trên create/update · **cấm** fake coords.

## API catalog

### API-01: GET /api/v1/patrol/sessions/{id}/journal-lines

| | |
|--|--|
| Purpose | Sổ dòng TD-04 |
| Permission | peer Patrol list + journal read |
| Tenant | X-Company-Id · session tenant |
| Request | path `id` · query `page?` · `pageSize?` |
| Response | list/paged `PatrolJournalLineDto` · **chỉ** journal · **cấm** check-in |
| Errors | 404 session · empty list OK · 404 until schema Live → empty + gap toast (**cấm** mock) |
| Form surfaces | TD-04 List |
| Field map | real-data §B journal.* |
| Context | CTX feature · IMPLEMENT TD-04 |
| Demo / DI | N/A |
| Migration | entity+schema **Mới** |

### API-02: POST /api/v1/patrol/journal-lines

| | |
|--|--|
| Purpose | Tạo dòng TD-05 Create |
| Permission | journal create |
| Tenant | X-Company-Id |
| Request body | DTO chốt (§ controlHint) · `sessionId` required · GPS + `narrative` required |
| Response | created line + id |
| Errors | 404 session · 422 GPS/narrative · 403 XCO |
| Form surfaces | TD-05 Create |
| HARD | GPS deny FE block · **cấm** fake lat/lng |
| Migration | same entity |

### API-03: GET /api/v1/patrol/journal-lines/{id}

| | |
|--|--|
| Purpose | Hydrate TD-05 Edit |
| Permission | journal get |
| Tenant | XCO get_only |
| Request | path id |
| Response | `PatrolJournalLineDto` |
| Errors | 404 · 403 |
| Form surfaces | TD-05 Edit View |
| Migration | same |

### API-04: PUT /api/v1/patrol/journal-lines/{id}

| | |
|--|--|
| Purpose | Sửa dòng TD-05 Update |
| Permission | journal update |
| Request body | same DTO fields (immutable `sessionId`) |
| Errors | 404 · 422 GPS/narrative · 403 |
| Form surfaces | TD-05 Edit |
| Migration | same |

### API-05: GET /api/v1/patrol/sessions/{id}

| | |
|--|--|
| Purpose | Parent ca · default direction từ Note `chieu=` |
| Live | peer wave A |
| Form surfaces | TD-04/05 context |
| Migration | none |

### API-06: GET /api/v1/auth/profile

| | |
|--|--|
| Purpose | Text RO người ghi |
| Cấm | invent user API trong Patrol |

### API-07: files init / object / commit

| | |
|--|--|
| Purpose | FileMulti ảnh hiện trường |
| Path | `files/init` · `files/{id}/object` · `files/commit` |
| Persist | guid only trên journal line MediaIds |

## BFF vs API

| Concern | Decision |
|---------|----------|
| Ownership | API Patrol owns journal-lines · BFF **proxy only** |
| Web cite | `web-bff/api/v1/patrol/**` |
| Mobile UI | `mobile-bff/api/v1/patrol/**` · cùng resource |
| Auth / Files | existing BFF prefixes · **cấm** nest under patrol |
| Cấm | MFE bypass BFF · invent path ngoài § Path |

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **tz_required** | API-02/04 `at` · `reportedAt` UTC · FE local display | `/review-timezone-implement` | store UTC · form 2dt |
| XCO | **xco_get_only** | API-03 GET/{id} · nested list theo session | `/implement-view-cross-company` | IgnoreQueryFilters + AllowedCompanyIds · 403 |
| SHARE | **tenant_keep** | `PatrolJournalLineEntity` | `/implement-shared-table` | tenant filter giữ · FK session cùng tenant |
| lookup_share | **N/A** wave B | LOOKUP_STATIC FE only | — | no Integration catalog mới |

AskQuestion (autoApprove=ON · self-confirm):  
`sa_tz_gate=tz_required` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-25T08:20:00.000Z`

## data-import

| | |
|--|--|
| Default unit | RMMS CUC 2 / Chi cục QLĐB II.1 / QL.1 |
| Wave B | **N/A** — transaction journal · **cấm** seed demo rows |
| Sample row | N/A |

## Gaps (cite · keep)

| id | Note |
|----|------|
| GAP-DA-MOB-B-SCHEMA-01 | Schema pair **CLOSED** gate · Dev phải ship trước form |
| GAP-DA-MOB-B-PATH-01 | Path **CLOSED** § Path |
| GAP-DA-MOB-B-LRS-01 | kmText tay · LRS later |
| GAP-DA-MOB-B-WEATHER-01 | 6 keys LOOKUP_STATIC · no weather API |
| GAP-DA-MOB-B-OUT-D | scope/WO · TD-06 = đợt D · **cấm** stub |
| GAP-SA-MOB-B-DMAP-01 | recommend DOMAIN-MAP row `web-rmms-mobile-b` → Patrol (docs only) |

## Handoff → team-lead

| Field | Value |
|-------|-------|
| feature / packKind | `web-rmms-mobile-b` / `list` |
| phase_from / phase_to | sa → team-lead |
| STATUS | confirmed |
| Context / Demo / DI | CTX feature · N/A · N/A |
| controlHint / UNCLEAR | real-data §B · UNCLEAR **none** (Path·Schema·LRS·Weather closed) |
| Screens / Pattern / devSlash | TD-04 · TD-05 · Full · `/agent-dev` |
| peerStdUrl / reviewUrl | `http://localhost:9301/web-rmms-mobile-b` · prototype file URL |
| APIs / FormMode↔API | API-01…07 · table trên |
| entity / migration | `PatrolJournalLine` + Schema **required** · parent session Live |
| TZ / XCO / SHARE | tz_required · xco_get_only · tenant_keep |
| BFF vs API | mobile-bff proxy · API Patrol owns |
| Open questions | **none** |
| Next | `/agent-team-lead` · roleOnly stop (GAP-PKT-ROLE-01) |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:58be487c963674c63e2436a6277905c70eb483f673a867c595bbd1babca3e773` · `solution_confirm=approve` · `updatedAt=2026-09-25T08:20:00.000Z`
