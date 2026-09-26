# SA — solution-discovery — web-rmms-mobile-a

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-a` |
| this role | `sa` · `/agent-sa` |
| status | `confirmed` (autoApprove=ON · agent self-confirm) |
| changeScope | `new_page` |
| packKind | `list` (phone Field hub ≠ desktop Kind B grid) |
| domain | **Patrol** (+ Integration · Auth · Files) · DOMAIN-MAP slug peer `patrol` · recommend add row `web-rmms-mobile-a` → Patrol |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| be_repo_confirm | `approve` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · `mfeStdRoute=/web-rmms-mobile-a` · `mfeStdUrl=http://localhost:9301/web-rmms-mobile-a` |
| ui_repo_confirm | `approve` |
| solution_confirm | `approve` (autoApprove=ON · `task_2698628e`) |
| prior · design | `confirmed` · compact + `ui/design.md` · reviewUrl prototype |
| prior · po | `confirmed` · compact + `po/requirement.md` |
| prior · data_analy | `confirmed` · hash `sha256:c5b21efdd411635233b56b13ee0b1a318c182c0a488f10d8290481a3dbbd3c2e` |
| contentHash | `sha256:c5b21efdd411635233b56b13ee0b1a318c182c0a488f10d8290481a3dbbd3c2e` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| updatedAt | `2026-09-25T07:15:00.000Z` |
| demo | **N/A** · **cấm** rescan / demo-json SSOT |
| wave | **A Live-only** · out: TD-04/05/06 · TK-02…07 · journal-lines · findings |

> SA **chốt** FormMode↔API · Note-encode · plan-point empty · BFF vs API · gates TZ/XCO/SHARE.  
> **Cấm** invent API · **cấm** ERP.* · **cấm** fake GPS · **cấm** parent `*Json` inventory · **cấm** HOW (TL).

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| Domain | Patrol / `patrol` · cite Integration (`road-routes`) · Auth · Files |
| API host | `api/src/RMMS.Service.Api/Domains/Patrol/` · Models `api/domains/patrol/…/DTOs/` |
| Entity / table | `PatrolSessionEntity` → `rmms_patrol_sessions` · `PatrolCheckInEntity` → `rmms_patrol_check_ins` |
| BFF web (cite peer) | `web-bff/api/v1/patrol/**` · proxy |
| BFF mobile (UI bind) | `mobile-bff/api/v1/patrol/**` · cùng `{resource}` · **cấm** đổi path Live |
| MFE | `Linm.Web.RMMS.Mobile` · phone max-width 430 |
| Response | Linm.Platform.CommonLib `ApiResponse` / paged |
| Auth perm | Linm.Platform.Authentication · peer Patrol session/check-in codes (KEEP) |
| Persist | scalar columns + MediaIds CSV guid · **cấm** parent `*Json` blob · Note = opaque encode string (see § Note-encode) |
| Out of A | journal-lines · findings · pause/handover columns · Schema D Note→columns |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` + mobile kit | no local Lin* clones · labels `useFormOptions()` |
| HTTP | apiClient SSOT | re-export only · prefix mobile-bff |
| BE | Linm.Platform.CommonLib | ApiResponse |
| Auth | Linm.Platform.Authentication + RequirePermission | peer Patrol |
| Files | FileService BFF `files/*` | guid only · **cấm** full URL persist |
| Catalog | Integration `road-routes/search` | SearchInput · share_a |
| Persist | no-parent-json-field | MediaIds CSV · Note opaque text |

## FormType pack (list · phone hub)

| Item | Value |
|------|-------|
| packKind | `list` |
| formPattern | Full (TD-00/01/02/07 · TK-00/01) · Sheet (TD-03) · LeaveConfirmModal |
| Grid AC Kind B / DES-GRID / `LinErpListFilterBar` | **N/A** — phone hub cards · **không** desktop filter bar |
| Report AC | **N/A** |
| List query keys (hub/history) | `status` · `route` · `page` · `pageSize` · client filter `PatrolType` (`Tuần đường` \| `Tuần kiểm`) |
| filterItems | **cấm** |
| Leave | dirty forms → LeaveConfirmModal (Design DES-LEAVE) |
| Tabs | `none` (1 surface per route) |
| Map | none wave A |

## FormMode ↔ API

| Screen / FormMode | Method · Path | Purpose |
|-------------------|---------------|---------|
| TD-00 / TK-00 hub · active | `GET …/patrol/sessions?status=Đang tuần&page=1&pageSize=50` | ca đang tuần · filter `PatrolType` client |
| TD-01 session detail | `GET …/patrol/sessions/{id}` | chip / badge CheckInCount |
| TD-02 Create (Tuần đường) | `POST …/patrol/sessions` | open · `PatrolType=Tuần đường` · `Status=Đang tuần` |
| TK-01 Create (Tuần kiểm) | `POST …/patrol/sessions` | open · `PatrolType=Tuần kiểm` · `Status=Đang tuần` |
| TD-03 Sheet check-in | `POST …/patrol/sessions/{id}/check-ins` | GPS HARD deny→block save |
| TD-03 plan label | `GET …/patrol/sessions/{id}/plan-points` | empty OK · **cấm** auto MatchOk |
| TD-07 history list | `GET …/patrol/sessions?route&page&pageSize` | filter `Tuần đường` client |
| TD-07 history CI | `GET …/patrol/sessions/{id}/check-ins` | cards CI |
| route SearchInput | `GET …/integration/road-routes/search` | master · **cấm** free-text khi có hit |
| userName RO | `GET …/auth/profile` | `UserName` / `AssigneeCode` |
| photo / media | `POST files/init` → `PUT files/{id}/object` → `POST files/commit` | guid → `MediaIds` / `PhotoLocalIds` |
| direction / inspectMode | LOOKUP_STATIC | `useFormOptions()` keys · **không** invent `patrol/init-data` wave A |

**Duplicate open:** đã có ca `Đang tuần` cùng user+tuyến+loại → **không** POST thứ hai · navigate TD-01 (IMPLEMENT).

## § Note-encode (UNLOCK — SA chốt)

| | |
|--|--|
| Decision | Opaque `Note` string · token `key=value` · join `; ` · đến Schema D (cột riêng) |
| TD-02 | `chieu={chieu-di\|chieu-ve\|hai-chieu}` · optional `startLat={lat};startLng={lng}` nếu GPS fix lúc mở ca |
| TK-01 | `kmFrom={n}; kmTo={n}; mode={dinh-ky\|dot-xuat}` · nếu `dot-xuat`: `reason={text}` · optional startLat/startLng |
| Parse | FE/BE đọc token trim · unknown token giữ nguyên · **cấm** JSON object trong Note |
| Cấm | nhồi journal/findings vào Note · fake lat/lng khi deny · đổi Live path |
| Schema D | migrate tokens → columns · **không** đổi semantic giá trị |

**UNCLEAR-NOTE-ENCODE → CLOSED** (format trên).  
**UNCLEAR-PLAN-POINT → CLOSED** (PO): empty plan-points OK · `PlanPointLabel` trống · `MatchOk` **không** ép `true` · server 422 hiển thị toast.

## controlHint → API (cite real-data §B)

| uiField | controlHint | catalogKind | GET / source | write |
|---------|-------------|-------------|--------------|-------|
| route | SearchInput | road-route | `GET integration/road-routes/search` | `Route` / `RouteCode` |
| direction | Dropdown | LOOKUP_STATIC | `useFormOptions` `chieu-*` | encode Note `chieu=` |
| userName | Text RO | — | `GET auth/profile` | `UserName` |
| plannedDate | Date | — | — | `PlannedDate` |
| kmFrom/kmTo | Number | — | — | encode Note |
| inspectMode | Dropdown | LOOKUP_STATIC | `useFormOptions` dinh-ky/dot-xuat | encode Note `mode=` |
| inspectReason | Text | — | — | encode Note `reason=` |
| planPointLabel | Text | — | `GET …/plan-points` | `PlanPointLabel` |
| lat/lng/accuracyM | GPS | geo | `navigator.geolocation` | `Lat`/`Lng`/`AccuracyM` |
| content | Text | — | — | `Content` |
| photoLocalIds | FileMulti | files | files/* | guid[] |
| historyCards | List | — | `GET sessions` | — |

## Persist / entity / migration

| Entity | Table | Wave A migration |
|--------|-------|------------------|
| `PatrolSessionEntity` | `rmms_patrol_sessions` | **none** — Live columns đủ · MediaIds CSV KEEP peer |
| `PatrolCheckInEntity` | `rmms_patrol_check_ins` | **none** |
| Schema D (out) | Note→columns · journal · findings | **không** trong A |

**parent_json:** **PASS** — không inventory `*LinesJson` · Note = scalar text encode · MediaIds = CSV guid (peer FILE-01).

## API catalog

### API-01: GET /api/v1/patrol/sessions

| | |
|--|--|
| Purpose | Hub active + lịch sử cards |
| Permission | peer Patrol list |
| Tenant | X-Company-Id |
| Request | query: `status?` · `route?` · `page` · `pageSize` |
| Response | paged `PatrolSessionDto` |
| Errors | 401 · empty list OK |
| Form surfaces | TD-00 · TK-00 · TD-07 |
| Field map | list → hub cards · client `PatrolType` |
| Context | `docs/context/features/web-rmms-mobile-a.md` · peer `patrol.md` |
| Demo | **N/A** |
| data-import | N/A (transaction) |
| Migration | none |

### API-02: GET /api/v1/patrol/sessions/{id}

| | |
|--|--|
| Purpose | Chi tiết ca (TD-01) |
| Permission | peer Patrol get |
| Tenant | XCO get_only |
| Request | path id |
| Response | `PatrolSessionDto` (+ MediaIds) |
| Errors | 404 · 403 XCO |
| Form surfaces | TD-01 View |
| Field map | real-data §B session.* |
| Context / Demo / DI | CTX feature · N/A · N/A |
| Migration | none |

### API-03: POST /api/v1/patrol/sessions

| | |
|--|--|
| Purpose | Mở ca TD-02 / TK-01 |
| Permission | peer Patrol create |
| Tenant | X-Company-Id |
| Request body | `UserName` · `Route` · `PatrolType` · `Status=Đang tuần` · `PlannedDate` · `StartedAt` UTC · `CheckInCount=0` · `CoveragePercent=0` · `OfflineQueued` · `Note` (encode) · `MediaIds?` |
| Response | created session + id |
| Errors | 409 duplicate open · 422 lookup Route · 422 validate |
| Form surfaces | TD-02 Create · TK-01 Create |
| Field map | §B Create session Live body + Note-encode |
| Context | IMPLEMENT-SCREENS TD-02 / TK-01 |
| Demo / DI | N/A |
| Migration | none |

### API-04: GET /api/v1/patrol/sessions/{id}/plan-points

| | |
|--|--|
| Purpose | gợi ý điểm KH cho check-in |
| Permission | peer |
| Request | path id |
| Response | list · **empty OK** |
| Form surfaces | TD-03 |
| Note | **cấm** fake coords / auto MatchOk |
| Migration | none |

### API-05: POST /api/v1/patrol/sessions/{id}/check-ins

| | |
|--|--|
| Purpose | Check-in sheet TD-03 |
| Permission | peer create check-in |
| Request body | `PlanPointLabel?` · `Route` · `Lat` · `Lng` · `AccuracyM` · `DistanceToPlanM` · `MatchOk` · `Content` · `PhotoLocalIds`/`AttachmentIds` |
| Response | created check-in |
| Errors | 422 GPS missing · MatchOk policy · 404 session |
| Form surfaces | TD-03 Create |
| HARD | GPS deny → FE **block** save · **cấm** fake lat/lng |
| Migration | none |

### API-06: GET /api/v1/patrol/sessions/{id}/check-ins

| | |
|--|--|
| Purpose | CI list cho history / detail |
| Form surfaces | TD-07 · TD-01 |
| Migration | none |

### API-07: GET /api/v1/integration/road-routes/search

| | |
|--|--|
| Purpose | SearchInput tuyến |
| catalogKind | road-route · SHARE Type A (Integration) |
| Seed | shared-catalogs road-route · DOMAIN-MAP |
| Cấm | free-text bypass khi master có hit |

### API-08: GET /api/v1/auth/profile

| | |
|--|--|
| Purpose | Text RO người tuần |
| Cấm | invent user API trong Patrol |

### API-09: files init / object / commit

| | |
|--|--|
| Purpose | FileMulti ảnh ca / CI |
| Path | `files/init` · `files/{id}/object` · `files/commit` |
| Persist | guid only trên session/CI |

## BFF vs API

| Concern | Decision |
|---------|----------|
| Ownership | API Patrol owns domain · BFF **proxy only** |
| Web cite | `web-bff/api/v1/patrol/**` |
| Mobile UI | `mobile-bff/api/v1/patrol/**` · cùng resource |
| Integration / Auth / Files | existing BFF prefixes · **cấm** nest under patrol |
| Cấm | MFE gọi API host trực tiếp bypass BFF (theo repo SSOT) |

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **tz_required** | API-03 `PlannedDate` · `StartedAt` UTC · FE local display | `/review-timezone-implement` | store UTC · DateOnly PlannedDate · form 2dt |
| XCO | **xco_get_only** | API-02 GET/{id} · nested plan-points/check-ins theo session | `/implement-view-cross-company` | IgnoreQueryFilters + AllowedCompanyIds · 403 |
| SHARE | **tenant_keep** | `PatrolSessionEntity` · `PatrolCheckInEntity` | `/implement-shared-table` | tenant filter giữ |
| lookup_share | **share_a** | road-route Integration | `/implement-shared-table` | KEEP peer |

AskQuestion (autoApprove=ON · self-confirm):  
`sa_tz_gate=tz_required` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-25T07:15:00.000Z`

## data-import

| | |
|--|--|
| Default unit | RMMS CUC 2 / Chi cục QLĐB II.1 / QL.1 |
| Wave A | **N/A** — transaction Live · catalog road-route đã seed |
| Sample row | N/A |

## Gaps (cite · keep)

| id | Note |
|----|------|
| GAP-DA-MOB-A-NOTE-01 | Note-encode **CLOSED** bởi § Note-encode · Schema D columns later |
| GAP-DA-MOB-A-PLAN-01 | empty plan-points · no fake match — **CLOSED** PO+SA |
| GAP-DA-MOB-A-JOURNAL-01 | journal/findings đợt B/C · **cấm** stub |
| GAP-SA-MOB-A-DMAP-01 | recommend DOMAIN-MAP row `web-rmms-mobile-a` → Patrol (docs only) |

## Handoff → team-lead

| Field | Value |
|-------|-------|
| feature / packKind | `web-rmms-mobile-a` / `list` |
| phase_from / phase_to | sa → team-lead |
| STATUS | confirmed |
| Context / Demo / DI | CTX feature · N/A · N/A |
| controlHint / UNCLEAR | real-data §B · UNCLEAR none (Note+Plan closed) |
| Screens / Pattern / devSlash | TD-00…03/07 · TK-00/01 · Full+Sheet · `/agent-dev` |
| peerStdUrl / reviewUrl | `http://localhost:9301/web-rmms-mobile-a` · prototype file URL |
| APIs / FormMode↔API | API-01…09 · table trên |
| entity / migration | Live entities · migration **none** wave A |
| TZ / XCO / SHARE | tz_required · xco_get_only · tenant_keep (+ road-route share_a) |
| BFF vs API | mobile-bff proxy · API Patrol owns |
| Open questions | **none** |
| Next | `/agent-team-lead` · roleOnly stop (GAP-PKT-ROLE-01) |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:c5b21efdd411635233b56b13ee0b1a318c182c0a488f10d8290481a3dbbd3c2e` · `solution_confirm=approve` · `updatedAt=2026-09-25T07:15:00.000Z`
