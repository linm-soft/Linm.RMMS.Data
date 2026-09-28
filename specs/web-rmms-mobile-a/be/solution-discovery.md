# SA — solution-discovery — web-rmms-mobile-a

| Field | Value |
|-------|-------|
| feature | `web-rmms-mobile-a` |
| this role | `sa` · `/agent-sa` |
| status | `confirmed` (autoApprove=ON · agent self-confirm) |
| changeScope | `edit_page` · `editTask=1` |
| packKind | `list` (phone Field hub ≠ desktop Kind B grid) |
| domain | **Patrol** (+ Integration · Auth · Files) · DOMAIN-MAP `web-rmms-mobile-a` → Patrol |
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| be_repo_confirm | `approve` |
| MFE | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · `mfeStdRoute=/web-rmms-mobile-a` · `mfeStdUrl=http://localhost:9301/web-rmms-mobile-a` |
| ui_repo_confirm | `approve` |
| solution_confirm | `approve` (autoApprove=ON · `task_96445b40`) |
| prior · design | `confirmed` · compact · reviewUrl prototype · Pattern B + `--` |
| prior · po | `confirmed` · compact · USER-RESOLVE-A resolve-only |
| prior · data_analy | `confirmed` · hash `sha256:110e845481b0f27091c0f5ca856fef74524bc1634ab8e3785a5d7755730eea45` |
| contentHash | `sha256:110e845481b0f27091c0f5ca856fef74524bc1634ab8e3785a5d7755730eea45` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| updatedAt | `2026-09-27T14:30:00.000Z` |
| demo | **N/A** · **cấm** rescan / demo-json SSOT |
| deltaCite | `docs/plan/web-rmms-mobile/SUBMIT-VALIDATE.md` · slug `web-rmms-mobile-a` |
| wave | **A Live KEEP** · edit delta only · out: TD-04/05/06 · TK-02…07 · journal · findings |

> SA **chốt** FormMode↔API · Note-encode · Pattern B · users Bff · mobileApiBase · BFF vs API · gates TZ/XCO/SHARE.  
> **Cấm** invent API · **cấm** ERP.* · **cấm** fake GPS · **cấm** parent `*Json` · **cấm** HOW (TL) · **cấm** Write MFE.

## § Edit delta (editTask=1) — SA chốt

| id | Decision |
|----|----------|
| DELTA-PATTERN-B | TD-03 `submitCheckIn` **always enabled** trừ `saving` · **cấm** `disabled={!gps}` / `!canSave` · GPS deny → banner **on Lưu click** (client) · API body vẫn yêu cầu Lat/Lng thật · **cấm** fake |
| DELTA-ROUTE-NO-SEED | `GET integration/road-routes/search` · xóa `ROAD_ROUTE_SEED`/`filterSeed`/lọc QL.22 · miss catalog → display `--` · **cấm** free-text bypass khi có hit |
| DELTA-USERS-A | Wave A = **resolve-only** · `GET integration/users?search=&page=&pageSize=` · Mobile.Bff **forward only** (API đã Live) · profile `UserName` đối chiếu catalog · miss → `--` · **cấm** invent tên · picker SearchInput = waves d+ (ngoài A) |
| DELTA-TRANSPORT | MFE bind **chỉ** `mobileApiBase()` / `VITE_MOBILE_API_URL` → Mobile.Bff · **cấm** web-bff · **cấm** gọi API host trực tiếp |
| DELTA-ALIGN | `/align-mobile-to-mfe` · 430px · **cấm** tab/route/icon mới · **cấm** android/ios proto |
| DELTA-MIGRATION | **none** — Live columns đủ · Note opaque KEEP |

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| Domain | Patrol / `patrol` · cite Integration (`road-routes` · `users`) · Auth · Files |
| API host | `api/src/RMMS.Service.Api/Domains/Patrol/` · Models `api/domains/patrol/…/DTOs/` |
| Entity / table | `PatrolSessionEntity` → `rmms_patrol_sessions` · `PatrolCheckInEntity` → `rmms_patrol_check_ins` |
| BFF web (cite peer) | `web-bff/api/v1/patrol/**` · **MFE không bind** |
| BFF mobile (UI bind) | `mobile-bff/api/v1/patrol/**` · `mobile-bff/api/v1/integration/**` · cùng `{resource}` · **cấm** đổi path Live |
| MFE | `Linm.Web.RMMS.Mobile` · phone max-width 430 · `mobileApiBase()` |
| Response | Linm.Platform.CommonLib `ApiResponse` / paged |
| Auth perm | Linm.Platform.Authentication · peer Patrol session/check-in codes (KEEP) |
| Persist | scalar + MediaIds CSV guid · Note = opaque encode · **cấm** parent `*Json` |
| Out of A | journal-lines · findings · pause/handover · Schema D Note→columns · user picker UI |

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| UI | `@linm-soft-org/linm-web-common-components` + mobile kit | no local Lin* clones · labels `useFormOptions()` |
| HTTP | apiClient SSOT · `mobileApiBase()` | **cấm** web-bff prefix trên MFE |
| BE | Linm.Platform.CommonLib | ApiResponse |
| Auth | Linm.Platform.Authentication + RequirePermission | peer Patrol |
| Files | FileService BFF `files/*` | guid only |
| Catalog | Integration `road-routes/search` · `users` | SearchInput / resolve · share_a |
| Persist | no-parent-json-field | MediaIds CSV · Note opaque text |

## FormType pack (list · phone hub)

| Item | Value |
|------|-------|
| packKind | `list` |
| formPattern | Full (TD-00/01/02/07 · TK-00/01) · Sheet (TD-03 Pattern B) · LeaveConfirmModal |
| Grid AC Kind B / DES-GRID / `LinErpListFilterBar` | **N/A/WAIVE** — phone hub cards |
| Report AC | **N/A** |
| List query keys | `status` · `route` · `page` · `pageSize` · client `PatrolType` |
| filterItems | **cấm** |
| Leave | dirty → LeaveConfirmModal (DES-LEAVE) |
| Tabs | `none` |
| Map | none wave A |

## FormMode ↔ API

| Screen / FormMode | Method · Path | Purpose |
|-------------------|---------------|---------|
| TD-00 / TK-00 hub · active | `GET …/patrol/sessions?status=Đang tuần&page=1&pageSize=50` | ca đang tuần · filter `PatrolType` client |
| TD-01 session detail | `GET …/patrol/sessions/{id}` | chip / badge CheckInCount |
| TD-02 Create (Tuần đường) | `POST …/patrol/sessions` | open · `PatrolType=Tuần đường` · `Status=Đang tuần` · Note `chieu=` |
| TK-01 Create (Tuần kiểm) | `POST …/patrol/sessions` | open · `PatrolType=Tuần kiểm` · Note km/mode/reason |
| TD-03 Sheet check-in | `POST …/patrol/sessions/{id}/check-ins` | Pattern B: Lưu always-on · GPS deny banner on-click · **cấm** fake lat/lng |
| TD-03 plan label | `GET …/patrol/sessions/{id}/plan-points` | empty OK · **cấm** auto MatchOk |
| TD-07 history list | `GET …/patrol/sessions?route&page&pageSize` | filter `Tuần đường` client |
| TD-07 history CI | `GET …/patrol/sessions/{id}/check-ins` | cards CI |
| route SearchInput | `GET …/integration/road-routes/search` | no seed · miss → `--` |
| userName RO resolve | `GET …/auth/profile` + `GET …/integration/users` | resolve-only A · miss → `--` |
| photo / media | `POST files/init` → `PUT files/{id}/object` → `POST files/commit` | guid → MediaIds |
| direction / inspectMode | LOOKUP_STATIC | `useFormOptions()` · **không** invent `patrol/init-data` |

**Duplicate open:** đã có ca `Đang tuần` cùng user+tuyến+loại → **không** POST thứ hai · navigate TD-01 (IMPLEMENT).

## § Note-encode (KEEP — SA chốt)

| | |
|--|--|
| Decision | Opaque `Note` string · token `key=value` · join `; ` · đến Schema D |
| TD-02 | `chieu={chieu-di\|chieu-ve\|hai-chieu}` · optional `startLat={lat};startLng={lng}` nếu GPS fix lúc mở ca |
| TK-01 | `kmFrom={n}; kmTo={n}; mode={dinh-ky\|dot-xuat}` · nếu `dot-xuat`: `reason={text}` · optional startLat/startLng |
| Parse | FE/BE đọc token trim · unknown token giữ nguyên · **cấm** JSON object trong Note |
| Cấm | nhồi journal/findings vào Note · fake lat/lng khi deny · đổi Live path |
| Schema D | migrate tokens → columns · **không** đổi semantic |

**UNCLEAR-NOTE-ENCODE → CLOSED** (format trên).  
**UNCLEAR-PLAN-POINT → CLOSED** (PO): empty plan-points OK · `PlanPointLabel` trống · `MatchOk` **không** ép `true`.  
**UNCLEAR-USER-RESOLVE-A → CLOSED** (PO): resolve-only A.

## controlHint → API (cite real-data §B)

| uiField | controlHint | catalogKind | GET / source | write |
|---------|-------------|-------------|--------------|-------|
| route | SearchInput | road-route | `GET integration/road-routes/search` | `Route` / `RouteCode` · miss `--` |
| direction | Dropdown | LOOKUP_STATIC | `useFormOptions` `chieu-*` | Note `chieu=` |
| userName | Text RO+resolve | users | `GET auth/profile` + `GET integration/users` | `UserName` · miss `--` |
| plannedDate | Date | — | — | `PlannedDate` |
| kmFrom/kmTo | Number | — | — | Note |
| inspectMode | Dropdown | LOOKUP_STATIC | `useFormOptions` | Note `mode=` |
| inspectReason | Text | — | — | Note `reason=` |
| planPointLabel | Text | — | `GET …/plan-points` | `PlanPointLabel` |
| lat/lng/accuracyM | GPS | geo | `navigator.geolocation` | `Lat`/`Lng`/`AccuracyM` |
| submitCheckIn | Button | — | — | Pattern B · disable only saving |
| content | Text | — | — | `Content` |
| photoLocalIds | FileMulti | files | files/* | guid[] |
| historyCards | List | — | `GET sessions` | — |

## Persist / entity / migration

| Entity | Table | Edit migration |
|--------|-------|----------------|
| `PatrolSessionEntity` | `rmms_patrol_sessions` | **none** |
| `PatrolCheckInEntity` | `rmms_patrol_check_ins` | **none** |
| Schema D (out) | Note→columns · journal · findings | **không** trong edit A |

**parent_json:** **PASS** — Note = scalar text encode · MediaIds = CSV guid.

## API catalog

### API-01: GET /api/v1/patrol/sessions
Hub active + lịch sử · query `status?`·`route?`·`page`·`pageSize` · TD-00/TK-00/TD-07 · migration none.

### API-02: GET /api/v1/patrol/sessions/{id}
Chi tiết ca TD-01 · XCO get_only · 404/403 · migration none.

### API-03: POST /api/v1/patrol/sessions
Mở ca TD-02/TK-01 · body Live + `Note` encode · 409 duplicate · 422 Route · migration none.

### API-04: GET /api/v1/patrol/sessions/{id}/plan-points
TD-03 · empty OK · **cấm** fake / auto MatchOk · migration none.

### API-05: POST /api/v1/patrol/sessions/{id}/check-ins
TD-03 Pattern B · body GPS thật · FE banner on deny · **cấm** fake lat/lng · migration none.

### API-06: GET /api/v1/patrol/sessions/{id}/check-ins
TD-07 · TD-01 · migration none.

### API-07: GET /api/v1/integration/road-routes/search
SearchInput tuyến · no seed · miss → `--` · share_a · **cấm** invent endpoint.

### API-08: GET /api/v1/auth/profile
Text RO người tuần · **cấm** invent user API trong Patrol.

### API-09: files init / object / commit
FileMulti · guid only trên session/CI.

### API-10: GET /api/v1/integration/users
| | |
|--|--|
| Purpose | Kết ca người nhận · catalog Username/FullName/Code |
| Path Live | `GET api/v1/integration/users?search=&page=&pageSize=` |
| BFF | Mobile.Bff forward |
| UI | SearchInput kết ca · **không** dùng cho mở ca |
| Migration | none |

### API-11: GET /api/v1/patrol/actors
| | |
|--|--|
| Purpose | Danh mục user/emp được mở ca / mở đợt |
| Path | `GET api/v1/patrol/actors?search=` |
| Scope | `IPatrolDataScope` — admin cả công ty · trưởng VP cả khối · tổ trưởng + nhân viên trùng km · nhân viên chỉ mình |
| Default | dòng `isCaller=true` = nhân viên đang đăng nhập |
| UI | TD-02 · TK-01 SearchInput · `userName`=username · `assigneeCode`=mã emp |
| BFF | Mobile.Bff proxy `patrol/**` |
| Migration | none |

## BFF vs API

| Concern | Decision |
|---------|----------|
| Ownership | API Patrol/Integration owns · BFF **proxy only** |
| Mobile UI bind | `mobile-bff/api/v1/patrol/**` · `mobile-bff/api/v1/integration/**` · `mobileApiBase()` |
| Web cite | `web-bff/api/v1/patrol/**` · **cấm** MFE bind |
| Users forward | Mobile.Bff add proxy `integration/users` · **cấm** invent path |
| Cấm | MFE → API host trực tiếp · ERP.* · web-bff trên Mobile MFE |

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Skill | Note |
|------|----------|----------------------|-------|------|
| TZ | **tz_required** | API-03 `PlannedDate` · `StartedAt` UTC | `/review-timezone-implement` | store UTC · form 2dt |
| XCO | **xco_get_only** | API-02 GET/{id} · nested | `/implement-view-cross-company` | 403 XCO |
| SHARE | **tenant_keep** | session · check-in entities | `/implement-shared-table` | tenant filter giữ |
| lookup_share | **share_a** | road-route · users Integration | `/implement-shared-table` | KEEP peer |

AskQuestion (autoApprove=ON · self-confirm):  
`sa_tz_gate=tz_required` · `sa_xco_gate=xco_get_only` · `sa_shared_table=share_tenant` · `2026-09-27T14:30:00.000Z`

## data-import

| | |
|--|--|
| Wave A / edit | **N/A** — transaction Live · catalogs Integration |
| Sample row | N/A |

## Gaps (cite · keep)

| id | Note |
|----|------|
| GAP-DA-MOB-A-NOTE-01 | Note-encode **CLOSED** · Schema D later |
| GAP-DA-MOB-A-PLAN-01 | empty plan-points — **CLOSED** |
| GAP-DA-MOB-A-JOURNAL-01 | journal/findings B/C · **cấm** stub |
| GAP-SA-MOB-A-DMAP-01 | DOMAIN-MAP row **CLOSED** (exists → Patrol) |
| GAP-SA-MOB-A-USERS-01 | Bff forward users · resolve-only A — **CLOSED** SA |
| GAP-SA-MOB-A-SEED-01 | no ROAD_ROUTE_SEED — **CLOSED** SA |
| GAP-SA-MOB-A-PATTERN-B-01 | Pattern B TD-03 — **CLOSED** SA |

## Handoff → team-lead

| Field | Value |
|-------|-------|
| feature / packKind | `web-rmms-mobile-a` / `list` |
| phase_from / phase_to | sa → team-lead |
| STATUS | confirmed |
| changeScope | edit_page · editTask=1 |
| Context / Demo / DI | CTX feature · N/A · N/A |
| controlHint / UNCLEAR | real-data §B · UNCLEAR **none** (Note+Plan+Users closed) |
| Screens / Pattern / devSlash | TD-00…03/07 · TK-00/01 · Full+Sheet Pattern B · `/agent-dev` |
| peerStdUrl / reviewUrl | `http://localhost:9301/web-rmms-mobile-a` · prototype file URL |
| APIs / FormMode↔API | API-01…10 · table trên |
| entity / migration | Live · migration **none** |
| TZ / XCO / SHARE | tz_required · xco_get_only · tenant_keep (+ share_a) |
| BFF vs API | mobile-bff proxy · users forward · API owns |
| Edit T-* (TL mint) | Pattern B CheckInSheet · no-seed lookups · users resolve Bff · mobileApiBase-only |
| Open questions | **none** |
| Next | `/agent-team-lead` · roleOnly stop (GAP-PKT-ROLE-01) |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:110e845481b0f27091c0f5ca856fef74524bc1634ab8e3785a5d7755730eea45` · `solution_confirm=approve` · `updatedAt=2026-09-27T14:30:00.000Z` · `taskId=task_96445b40`
