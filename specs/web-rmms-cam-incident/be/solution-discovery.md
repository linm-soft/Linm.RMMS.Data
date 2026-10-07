# SA — Solution — web-rmms-cam-incident

> Status: **confirmed** · autoApprove ON · task `task_d0623a44` · 2026-10-01T01:52:00.000Z  
> **changeScope=`edit_page`** · packKind=`list` · **cấm** ERP.* · **cấm** invent `CamIncidentController` / `cam-incident/*` · **cấm** Step 4b / migration run tại SA · **cấm** Write MFE/native · **cấm** web-bff · **cấm** fake GPS · **cấm** demo-json · **cấm** SLA 24h / Mục IV / Excel / native.

| | |
|--|--|
| Feature | `web-rmms-cam-incident` |
| Title | Camera sự cố theo vai |
| Role | `sa` |
| packKind | `list` (phone list/form/sheet · ≠ desktop Kind B) |
| changeScope | `edit_page` · `editTask=1` |
| formPattern | INC-CAP sheet · INC-N create · INC-D detail · INC-L list · Pattern B GPS · LeaveConfirm · phone ≤430 |
| domain | **Incident** (`incident`) · cite Patrol (sessions) · Integration (asset-types) · FileService · Auth/profile · peer `web-rmms-role-gate` · peer `web-rmms-incident` · peer `web-rmms-giao-viec-ql-hat` (CTA only) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| productRoute | `/van-de` · `/van-de/moi` · `/van-de/:id` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-incident` (**alias only** · **cấm** invent product slug) |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| BFF | Mobile.Bff `http://localhost:5202` · prefix `mobile-bff/api/v1` · **cấm** web-bff bind |
| contentHash | `sha256:e515f74ca821b652154473ac30eaec7bb13c8921acf6725b739dc4eb1744b8d1` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| solution_confirm | **approve** (autoApprove) |
| design_confirm | **approve** |
| be_repo_confirm | **approve** |
| ui_repo_confirm | **approve** |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-incident/ui/prototype/index.html` |
| real_view_parity | `v1` |
| demo | **N/A** · **cấm** rescan / demo SSOT |
| deltaCite | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` § enqueue #4 |
| prior · design | `confirmed` · compact · reviewUrl · task `task_3b488130` |
| prior · po | `confirmed` · compact · task `task_70ba48cb` |
| prior · data_analy | `confirmed` · compact · task `task_770ceabe` |

> SA **chốt** FormMode↔API · DOMAIN-MAP slug · BFF vs API · entity/migration=none · roleCaps · list scope · close vs assign.  
> **Cấm** invent API path/DTO · **cấm** HOW (TL) · **cấm** Write MFE.

## 0. Delta vs baseline (edit_page)

| Keep (Live peer `web-rmms-incident`) | New / change (this task) |
|--------------------------------------|--------------------------|
| GET/POST incidents · GET{id} · close · sessions · asset-types · files · detect opt | **Role-gate** INC-CAP/N/D/L · tuần đường write · QL_HAT assign CTA · TK+NT RO |
| Pattern B GPS · RouteCapture · CreateIncidentRequest | FAB/create hide non-tuần-đường · assignCta QL_HAT only → `paths.workFor` |
| Paths/DTO core **không đổi** | **ẩn close** QL_HAT/TK/NT · tuần đường giữ close |
| Mobile.Bff `:5202` | list scope by role (DEC-LIST-01) · **cấm** CamIncident* · **cấm** new route |

## 1. Domain / ownership

| Item | Decision |
|------|----------|
| DOMAIN-MAP slug | `web-rmms-cam-incident` → **Incident** / `incident` · **bind peer** `web-rmms-incident` |
| Rationale | Camera-by-role = edit role-gate + CTA trên Live Incident · **không** domain Camera mới · **không** API mới |
| API folder | Reuse `IncidentsController` · Patrol sessions · Integration asset-types · FileService · Auth/profile — Mobile.Bff forward |
| Role caps | Cite `web-rmms-role-gate` · `packageCode` / `roleCaps` từ `GET auth/profile` · **cấm** suy `QL_HAT` từ `MANAGER-RMMS` |
| Assign form | Peer `web-rmms-giao-viec-ql-hat` — slug này **chỉ** CTA + list/detail scope |
| **Cấm** | invent `CamIncidentController` · `api/v1/cam-incident` · ERP.* · web-bff từ Mobile MFE · fake GPS |

**DOMAIN-MAP row (apply):**

| Feature slug | Domain | kebab · note |
|--------------|--------|--------------|
| `web-rmms-cam-incident` | Incident | `incident` · Live incidents GET/POST/GET{id}/close + sessions + asset-types + uploads/files · cite role-gate caps · cite peer `web-rmms-incident` · MFE Mobile product `/van-de*` · alias `/web-rmms-cam-incident` · **cấm** invent CamIncidentController · bind peer incident |

**UNCLEAR-INC-DOMAIN-ROW → CLOSED** (row trên).  
**UNCLEAR-INC-ROLE-SOURCE → CLOSED** — deps `web-rmms-role-gate` · profile `packageCode`/`roleCaps` · seed HAT-TRUONG/HAT-PHO→`QL_HAT`.

## 2. FormMode ↔ API

| Mode / zone | UI | API | Write | Notes |
|-------------|----|-----|-------|-------|
| INC-L cards | List | `GET …/incident/incidents` | — | DEC-LIST-01 scope · empty «Chưa có sự cố» |
| INC-L fabCreate | FAB | nav `/van-de/moi` | — | **hide** non-tuần-đường |
| INC-L assignCta | Button | nav `paths.workFor` | — | **QL_HAT only** · peer form |
| INC-N / INC-CAP photos | RouteCapture | files init/PUT/commit | `mediaIds` | tuần đường write · detail view |
| INC-N / INC-CAP gps | Banner Pattern B | `navigator.geolocation` | `HasGps` | deny → banner on Create/Lưu · **cấm** fake · disabled=`creating`/`saving` only |
| INC-N title/type/sev | Input+Select | LOOKUP_STATIC / dto | `Title`·`IncidentType`·severity | title required |
| INC-N sessionStamp | Text RO | `GET …/patrol/sessions` | `RouteName` | empty → banner |
| INC-N asset opt | Select | `GET …/integration/asset-types` | AssetLabel | empty pick OK peer |
| INC-N / INC-CAP create | Button | `POST …/incident/incidents` | CreateIncidentRequest Live | role tuần đường · BE/FE enforce |
| INC-D * | RO fields | `GET …/incident/incidents/{id}` | — | reporter · status badge |
| INC-D assignCta | Button | nav workFor | — | **QL_HAT only** |
| INC-D close | Button+Note | `POST …/{id}/close` | Note opt | **ẩn** QL_HAT/TK/NT · tuần đường keep (DEC-CLOSE-01) |
| roleCaps | Hidden / banner | `GET …/auth/profile` (+role-gate) | gate UI | cite packageCode/roleCaps |
| DES-LEAVE | LeaveConfirmModal | — | — | dirty INC-CAP/N |
| DES-GRID / LinErpListFilterBar | — | — | — | **N/A** phone |

### DEC-LIST-01 — List scope (HARD · CLOSED UNCLEAR-INC-LIST-FILTER)

| Role | List scope | Mechanism |
|------|------------|-----------|
| tuần đường (`roleCaps.tuanDuong` · `!qlHat`) | sự cố **mình** | GET Live **không** có `reporter` query · **cấm invent** query param this task · **client filter** sau GET: `reporterName` ≈ profile `fullName`/`userName` (case-insensitive trim) · BE `_scope`/access filter **KEEP** |
| QL_HAT (`roleCaps.qlHat` / `packageCode=QL_HAT`) | **mọi** sự cố (trong access BE) | **không** client filter by reporter |
| TK / NT | RO xem (access BE) · **không** create/assign/close | không filter self · hide FAB/assign/close |

Live GET query KEEP: `search` · `status` · `severity` · `routeName` · `incidentType` · page/pageSize.  
Optional later (TL note, **không** block): BE hard-enforce reporter/role trên GetList — **out of invent Cam\*** · chỉ enhance IncidentsController nếu Dev chứng minh access.ToFilter thiếu.

### DEC-CLOSE-01 — Close vs Assign (HARD · CLOSED UNCLEAR-INC-CLOSE-VS-ASSIGN)

| Rule | Decision |
|------|----------|
| QL_HAT / TK / NT | **ẩn** UI close (PO+Design) · ưu tiên **Giao việc** (QL_HAT) |
| tuần đường | **giữ** close peer (Note opt) khi status open |
| BE close API | **KEEP** Live · **không** invent deny endpoint this task · FE gate đủ DoR |
| Assign | nav peer only · **cấm** invent assign DTO trên slug này |

### Live endpoints (KEEP — no path/DTO invent)

| Id | Method | BFF path (client) | Downstream | Status |
|----|--------|-------------------|------------|--------|
| API-01 | GET | `mobile-bff/api/v1/incident/incidents` | IncidentsController | **Live** · DEC-LIST-01 |
| API-02 | POST | `mobile-bff/api/v1/incident/incidents` | CreateIncidentRequest | **Live** · tuần đường |
| API-03 | GET | `mobile-bff/api/v1/incident/incidents/{id}` | Incident | **Live** |
| API-04 | POST | `mobile-bff/api/v1/incident/incidents/{id}/close` | CloseIncidentRequest | **Live** · DEC-CLOSE-01 UI |
| API-05 | GET | `mobile-bff/api/v1/patrol/sessions` | Patrol | **Live** |
| API-06 | GET | `mobile-bff/api/v1/integration/asset-types` | Integration | **Live** |
| API-07 | POST/PUT | `mobile-bff/api/v1/files/*` | FileService | **Live** cite RouteCapture |
| API-08 | GET | `mobile-bff/api/v1/auth/profile` | Auth + role-gate enrich | **Live** cite caps |

**POST body (Live KEEP):** `Title` · `RouteName` · `IncidentType` · `Status` · `RequestedAt` · `HasGps` · media/desc/severity per peer incident.  
**Cấm** invent cam-incident DTO · `SlaHours=24` · Mục IV money · Lat on Create beyond HasGps peer.

### Pattern B (HARD)

| Rule | Decision |
|------|----------|
| Create/Lưu disabled | **chỉ** `creating` / `saving` · **cấm** disable vì GPS thiếu trước submit |
| GPS deny | banner **on** Create/Lưu · **không** POST · **cấm** fake coords |
| leaveConfirm | dirty INC-CAP / INC-N |

### BFF vs API

| Layer | Decision |
|-------|----------|
| Mobile MFE client | `:5202` + `mobile-bff/api/v1/{resource}` |
| Downstream | `api/v1/incident|patrol|integration|files|auth` |
| **Cấm** | `web-bff/*` từ Mobile MFE · ERP.* |

## 3. Entity / migration

| Item | Decision |
|------|----------|
| entity mới | **none** |
| migration | **none** · Step 4b **skip** SA |
| DTO change | **none** core · roleCaps từ profile peer · list client filter only |

## 4. Role matrix (cite PO · implement FE+BE soft)

| Cap | Create/Capture | FAB | List | Assign CTA | Close |
|-----|----------------|-----|------|------------|-------|
| tuần đường | ✓ | ✓ | own (DEC-LIST-01) | ✗ | ✓ peer |
| QL_HAT | ✗ | ✗ | all | ✓ → workFor | **ẩn** |
| TK | ✗ | ✗ | RO | ✗ | **ẩn** |
| NT | ✗ | ✗ | RO | ✗ | **ẩn** |

`QL_HAT` = `packageCode==QL_HAT` / `roleCaps.qlHat` · **cấm** `MANAGER-RMMS`.

## 5. Gaps closed / handoff

| id | Status |
|----|--------|
| UNCLEAR-INC-DOMAIN-ROW | **CLOSED** · DOMAIN-MAP row + bind peer incident |
| UNCLEAR-INC-ROLE-SOURCE | **CLOSED** · deps role-gate caps |
| UNCLEAR-INC-LIST-FILTER | **CLOSED** · DEC-LIST-01 client filter · no invent reporter query |
| UNCLEAR-INC-CLOSE-VS-ASSIGN | **CLOSED** · DEC-CLOSE-01 FE hide QL_HAT/TK/NT |
| GAP-DA-INC-ASSIGN-CTA | handoff TL/Dev — add CTA QL_HAT |
| GAP-DA-INC-ROLE | handoff TL/Dev — roleCaps on Incident* |
| GAP-DA-INC-PEER-GIAO | cite peer · **không** implement form giao trên slug |

### Handoff team_lead (ids only · **cấm** HOW)

- T-*: edit `IncidentCaptureSheet` · `IncidentCreatePage` · `IncidentDetailPage` · `IncidentListPage` — role-gate + assign CTA + close hide + DEC-LIST-01
- deps: `web-rmms-role-gate` profile caps
- peer nav: `paths.workFor` → giao-viec-ql-hat
- **cấm** new route · CamIncident* · web-bff · ERP.* · fake GPS
- next slash: `/agent-team-lead` · roleOnly stop (**GAP-PKT-ROLE-01**) · e2eQa queued `/agent-qa*`

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:e515f74ca821b652154473ac30eaec7bb13c8921acf6725b739dc4eb1744b8d1` · `solution_confirm=approve` · `changeScope=edit_page` · `writtenAt=2026-10-01T01:52:00.000Z` · `taskId=task_d0623a44`
