# SA — Solution — patrol-home (mobile hub · Tuần đường · edit_page)

| Field | Value |
|-------|-------|
| feature | `patrol-home` |
| title | [Mobile] Tuần đường — mở/kết ca live |
| this role | `sa` · `/agent-sa-mobile` |
| status | `confirmed` |
| solution_confirm | **approve** (`autoApprove=ON` · `task_57e24d09`) |
| changeScope | `edit_page` |
| packKind | **`hub`** (PO + Design re-confirm) |
| stack | `native_dual` |
| Feature Kind | **hub** `#sc-patrol-home` · FormMode=**none** · **cấm** Kind A–G web / Lin* grid |
| domain | Patrol sessions GET + **POST open** + **PUT end** · **cấm** `PatrolHomeController` / hub aggregate |
| BackendRoot | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| ios | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.iOS` |
| android | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Android` |
| bff | `/Users/mac/LINM-ORG/AI-QLBD/Linm.RMMS.Mobile.Bff` · prefix `mobile-bff/api/v1` |
| prior · design | **confirmed** · `task_77ea403c` · emptyActive · btn-open-session · design-compact |
| prior · po | **confirmed** · `task_d032b4d9` · po-compact |
| prior · data_analy | **confirmed** · `task_62615c08` · contentHash `sha256:b5efb555e6c8195ccd93f60d983b57d6b0aa476a919b7f11700157c58241ae0a` · bffContentHash `sha256:128461fdf9135cf8c168a1b05e92586465d1ef34c117b39bea7d2464a06f55c0` |
| autoApprove | **ON** |
| e2eQa | ON queued QA · **cấm** e2e/start:std ở SA |
| versionGate | `rechecked` |
| taskId | `task_57e24d09` |
| confirmedBy | agent autoApprove · `task_57e24d09` |
| updatedAt | `2026-09-12T15:07:09.000Z` |
| thisAction | **Delta** wire POST mở ca · PUT kết ca · hero **server-only** (cấm sample fallback) · keep GET list + offline badge local |

**Cấm:** invent `GET patrol-home` · clone controller BFF · app `:5101` · gộp sibling / check-in sheet (`GAP-MOB-ACT-01/02`) · hardcode notify `3` · ERP.* · `mfeStdUrl` · native alert · demo bind hero/today (QL.1·Km468+200 / Nguyễn Văn A / 07:20).

Standards: api-endpoint · bff-api-structure · company-field · no-parent-json-field · sa-implement-gates · ios networking · android api-client · offline-sync.

---

## Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `Linm.RMMS.WebService` · `be_repo_confirm` |
| Domain | `PatrolSessionsController` — **không** RMMS `patrol-home` controller |
| API | `GET/POST/PUT api/v1/patrol/sessions` (+ `{id}`) |
| BFF | `MobileApiProxyController` catch-all → `ApiBase` |
| App | iOS `PatrolRepositoryImpl` · Android `ApiService` · base `{BffBase}/mobile-bff/api/v1` |
| Active | Client filter «Đang tuần» / `IsActive` từ GET list |
| Empty | **no active** → `emptyActive` + `btn-open-session` · fields=`—` · **cấm** `PatrolHomeCopy.demoActive` sample |
| Offline badge | Local `FetchOfflineQueueCountUseCase` · sibling `patrol-offline` · **cấm** GET queue |
| Persist BE | **không** bảng mới · **không** `/database-migration` · **không** `/new-endpoint` |
| Out of pack | GPS pin live · map · attendance segment · inbox GET · 6 sibling · DELETE session |

### Route decision

| | Choice |
|--|--------|
| Slug | `patrol-home` → hub · 1 màn `#sc-patrol-home` (+ detail kết ca) |
| App prefix | `mobile-bff/api/v1` |
| Paths | `GET/POST patrol/sessions` · `PUT/GET patrol/sessions/{id}` |
| Downstream | `GetList` · `Create` · `Update` · `GetById` |
| Step 4b | **N/A** — POST/PUT Live · **cấm** `/new-endpoint` |
| Rationale | Analy/PO/Design Delta · reuse Patrol sessions · **cấm** invent hub aggregate |

---

## SSOT / anti-duplicate

| Concern | Package / rule | Note |
|---------|----------------|------|
| BFF HTTP | `MobileApiProxyController` | **cấm** `PatrolHomeController` |
| BE HTTP | `PatrolSessionsController` | live GET/POST/PUT/DELETE |
| DTO | `PatrolSessionDto` · Create/Update request | decode `items` / `data.items` |
| Fields | `Id`·`Code`·`UserName`·`Route`·`PatrolType`·`CheckInCount`·`CoveragePercent`·`Status`·`StartedAt`·`IsActive` | hero/KPI/today |
| HTTP app | `PatrolRepositoryImpl` / `PatrolRepository` | **cấm** URLSession/OkHttp in View |
| Mapper | `PatrolDtoMapper.active(from:)` | filter active · empty → UI empty |
| Kit | LinmTopBar · LargeTitle · Segment · HeroCard · Progress · PrimaryButton · KpiStrip · SectionLabel · ListRow · NetSignal · Toast · TabBar | kit_missing **N/A** |
| Offline count | `FetchOfflineQueueCountUseCase` | badge **ẩn khi 0** |

---

## BFF / API contract (edit_page · audit 2026-09-12)

| Action | App path | BFF | Downstream | Live |
|--------|----------|-----|------------|------|
| List hôm nay + active | `GET patrol/sessions` | proxy | `GetList` | **PASS** |
| Mở ca (`btn-open-session`) | `POST patrol/sessions` | proxy | `Create` | **PASS** · wire native |
| Kết ca (`btnEndSession` detail) | `PUT patrol/sessions/{id}` | proxy | `Update` | **PASS** · wire native |
| Detail drill | `GET patrol/sessions/{id}` | proxy | `GetById` | live |
| Offline badge | — | — | local queue | **N/A** |
| Sibling / notify | — | — | toast only | **pending_confirm** |

### Query params (list)

`search` · `status` · `route` · `page` (1) · `pageSize` (50)

### Response / request shape

- List: `ApiResponse<PatrolSessionPagedResult>` → `PatrolSessionDto[]`
- Create body: `CreatePatrolSessionRequest` — UserName · Route · PatrolType · Status · PlannedDate · StartedAt? · CheckInCount · CoveragePercent · OfflineQueued · Note? · MediaIds? · org optional
- Update body: `UpdatePatrolSessionRequest` — same + `IsActive?` (end → inactive / status Xong)

### Permissions

| Permission | Scope | Pack này |
|------------|-------|----------|
| `patrol.sessions.read` | GET list/detail | **reuse** |
| `patrol.sessions.create` | POST open | **reuse** · wire |
| `patrol.sessions.update` | PUT end | **reuse** · wire |

**Cấm** invent permission slug · **cấm** thêm `[RequirePermission]` trên BFF.

---

## API catalog (FormMode↔API)

Hub FormMode=**none** — surface binding only.

### API-01: GET /api/v1/patrol/sessions

| | |
|--|--|
| Purpose | List ca hôm nay + derive active hero/KPI |
| Permission | `patrol.sessions.read` |
| Tenant | X-Company-Id · Bearer |
| Request | query `search`·`status`·`route`·`page`·`pageSize` |
| Response | `PatrolSessionDto[]` in paged result |
| Errors | 401 · 403 · network → toast + empty/`—` · **cấm** demo sample |
| Form surfaces | hub `#sc-patrol-home` · todayRows · heroActive when active |
| Field map | see § Form data |
| Context | `docs/context/features/patrol-home.md` · CTX patrol |
| Demo | zone `#sc-patrol-home` · **cấm** bind sample row làm live |
| data-import | N/A |
| Migration | none |

### API-02: POST /api/v1/patrol/sessions

| | |
|--|--|
| Purpose | Mở ca từ `btn-open-session` khi `emptyActive` |
| Permission | `patrol.sessions.create` |
| Tenant | X-Company-Id · Bearer |
| Request | `CreatePatrolSessionRequest` (body) |
| Response | created `PatrolSessionDto` |
| Errors | 422 validation · 409 conflict → toast · giữ emptyActive |
| Form surfaces | hub CTA mở ca |
| Field map | Route/UserName/PatrolType/Status from session defaults / profile |
| GPS | **N/A** mở-ca P1 (PO Device AC) · pin stay toast |
| Offline | fail → toast · **không** enqueue submit hub (`GAP-MOB-ACT-07`) |
| Migration | none · Step 4b **N/A** |

### API-03: PUT /api/v1/patrol/sessions/{id}

| | |
|--|--|
| Purpose | Kết ca từ detail `btnEndSession` (đóng toast-only) |
| Permission | `patrol.sessions.update` |
| Tenant | X-Company-Id · Bearer |
| Request | path `id` + `UpdatePatrolSessionRequest` (`IsActive=false` / Status Xong) |
| Response | updated `PatrolSessionDto` |
| Errors | 404 · 422 → toast · không fake end |
| Form surfaces | detail end CTA (owner sibling surface · wire this pack) |
| Migration | none · Step 4b **N/A** |

### API-04: GET /api/v1/patrol/sessions/{id} (keep)

Detail drill / refresh after PUT — live · P1 optional toast row on hub.

### FormMode↔API (mandatory)

| Surface / control | FormMode | API |
|-------------------|----------|-----|
| `#sc-patrol-home` load | none | API-01 GET |
| `btn-open-session` | none | API-02 POST |
| `btnEndSession` (detail) | none | API-03 PUT |
| todayRows / heroActive / kpiStrip | none | API-01 (derive) |
| emptyActive | none | UI when no active · **no API invent** |

---

## Implement gates (confirm)

| Gate | Decision | Endpoints / surfaces | Note |
|------|----------|----------------------|------|
| TZ | **tz_na** | no form date input · display `StartedAt` only | |
| XCO | **xco_na** | current-user sessions · BE company filter | |
| SHARE | **n/a** | no new RMMS table | |
| Offline | toast + empty/`—` · hub vẫn mở · **cấm** demo hero sample | GET/POST/PUT fail | |
| GPS | N/A mở-ca · pin toast P1 | | |
| Camera | n/a | | |
| Push / inbox | n/a hub · badge 0 ẩn | | |
| Store | PrivacyInfo · Play Data safety **P2** DEFER | GAP-SA-STORE-01 | **cấm** localhost in solution |
| Step 4b | **N/A** | POST/PUT Live | |

AskQuestion (autoApprove=ON): `sa_tz_gate=tz_na` · `sa_xco_gate=xco_na` · `sa_shared_table=share_na` · `solution_confirm=approve` · `2026-09-12T15:07:09.000Z`.

---

## Persist gate (no-parent-json-field)

| | |
|--|--|
| Parent JSON string inventory | **none** |
| Child tables this pack | **n/a** — existing `PatrolSessions` |
| Client store | offline badge local only |
| Migration | **không** Schema_* / Seed_* |
| T-BE-API / T-BE-MIG | **n/a** |

---

## Live vs delta (edit_page)

| Surface | Prior (GET-only) | SA chốt P1 now |
|---------|------------------|----------------|
| GET sessions | wired | **Giữ** |
| POST open | toast / missing | **Wire** `btn-open-session` · GAP-PAT-HOME-SESSION-01 |
| PUT end | toast-only | **Wire** detail `btnEndSession` · GAP-PAT-HOME-SESSION-02 |
| Hero sample fallback | demo SSOT OK | **Cấm** · empty=`—` · GAP-PAT-HOME-HERO-01 |
| emptyActive + CTA | design Delta | show when no active |
| PatrolHomeController | cấm | **cấm** |
| Sibling pending_confirm | toast | **giữ** · cấm auto start |

---

## Form data analysis

| Screen / FormMode | Fields (UI) | Source type | Entity |
|-------------------|-------------|-------------|--------|
| `#sc-patrol-home` hub | nav · segment · hero/empty · open CTA · pin · KPI · today · quick | GET + POST · local offline | existing PatrolSession |
| detail end | btnEndSession | PUT | existing PatrolSession |

### Field map (ui → dto)

| uiField | Label | dtoField | Wire | Notes |
|---------|-------|----------|------|-------|
| heroTitle | route·km | `Route` | GET active | empty=`—` |
| heroMeta code | PAT-* | `Code` | GET | |
| heroMeta user | name | `UserName` | GET | **cấm** Nguyễn Văn A |
| heroProgress | % | `CoveragePercent` | GET | |
| kpi* | 3 KPI | CheckInCount / computed / Coverage | GET | empty=`—` |
| today[] | list | Code·Status·PatrolType·Route·StartedAt | GET | route trống=`—` |
| emptyActive | Chưa có ca | — | UI | when no active |
| btn-open-session | Mở ca | Create body | POST | |
| btnEndSession | Kết ca | Update + id | PUT | detail |
| offlineBadge | N | — | local | ẩn 0 |

---

## Navigation / action (this pack)

| Control | Behavior P1 | Owner |
|---------|-------------|-------|
| Tab Tuần đường | `#sc-patrol-home` | owner |
| btn-open-session | POST → refresh GET · show heroActive | owner |
| btnEndSession | PUT → refresh · emptyActive | detail |
| Nav sync / Lưu trữ | push `patrol-offline` | reuse |
| Bell / segment Chấm công / pin / quick (trừ Lưu trữ) | toast | pending_confirm |
| Today row | toast / drill P2 | |

**Cấm** `UIAlert`/`AlertDialog` · sheet check-in · start sibling.

---

## GAP chốt (SA)

| ID | Decision |
|----|----------|
| GAP-PAT-HOME-SESSION-01 | Wire POST mở ca · **đóng** missing CTA |
| GAP-PAT-HOME-SESSION-02 | Wire PUT kết ca · **đóng** toast-only end |
| GAP-PAT-HOME-HERO-01 | **Cấm** sample fallback · empty=`—` |
| GAP-F-PAT-HOME-01..03 | pin toast · bell toast · offline local (keep) |
| GAP-TAB-01 | segment idx0 owner · idx1 toast |
| GAP-MOB-ACT-01/02/05/06/07 | 1 hub · kit reuse · sibling pending · **cấm** enqueue |
| Step 4b / T-BE-* | **N/A** |
| GAP-QA-A11Y-TAB-FIELD-01 | DEFER non-block |
| PrivacyInfo / store | P2 → `/review-app-submit` |

---

## Client architecture (TL/Dev)

| Layer | iOS | Android |
|-------|-----|---------|
| Feature | `Presentation/Features/PatrolHome/*` | `presentation/feature/patrolhome/*` |
| Use cases | FetchSessions · **CreateSession** · **EndSession** · OfflineQueueCount | same |
| Repo | GET/POST/PUT `patrol/sessions` | same |
| State | active / emptyActive / loading / error toast | same |
| Demo copy | **remove** live bind `demoActive`/`demoToday` sample | same |
| DI | AppContainer | Hilt |

**Cấm** WebView · watermark · invent hub API.

---

## Handoff → TL

| Field | Value |
|-------|-------|
| feature / packKind | `patrol-home` / **`hub`** |
| changeScope | `edit_page` |
| solution_confirm | **approve** |
| FormMode↔API | none↔GET/POST/PUT sessions |
| BFF | GET+POST+PUT `patrol/sessions` · Step 4b **N/A** |
| entity/migration | existing · **none** |
| TZ/XCO/SHARE | tz_na · xco_na · share_na |
| Tasks đề xuất | `T-IOS-PAT-HOME-SESSION` · `T-AND-PAT-HOME-SESSION` · T-BE **n/a** |
| Delta Dev | POST open · PUT end · hero empty · dual parity Design |
| Gaps → Dev | SESSION-01/02 · HERO-01 |
| Next slash | `/agent-tl-mobile` |
| Chain this turn | **không** (roleOnly=`sa`) |
| e2eQa | ON queued QA only |

---

## Version meta (REQUIRED)

| Field | Value |
|-------|-------|
| skillId | agent-sa-mobile |
| skillVersion | 2026.08.19.23 |
| schemaVersion | 1 |
| workflowVersion | 2026.08.31.2 |
| rulesVersion | 2026.08.31.2 |
| generatedAt | 2026-09-12T15:07:09.000Z |
| versionGate | rechecked |
| contentHash | sha256:b5efb555e6c8195ccd93f60d983b57d6b0aa476a919b7f11700157c58241ae0a |
| bffContentHash | sha256:128461fdf9135cf8c168a1b05e92586465d1ef34c117b39bea7d2464a06f55c0 |

---
<!-- Version meta: skillId=agent-sa-mobile skillVersion=2026.08.19.23 schemaVersion=1 workflowVersion=2026.08.31.2 rulesVersion=2026.08.31.2 versionGate=rechecked -->
