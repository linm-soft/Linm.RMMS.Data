# SA — Solution — web-rmms-cam-checkin

> Status: **confirmed** · autoApprove ON · task `task_a3aedb65` · 2026-09-30T17:31:04.000Z  
> **changeScope=`edit_page`** · packKind=`list` · **cấm** ERP.* · **cấm** invent `CamCheckInController` / `cam-checkin/*` · **cấm** Step 4b / migration run tại SA · **cấm** Write MFE/native · **cấm** web-bff · **cấm** fake GPS · **cấm** demo-json.

| | |
|--|--|
| Feature | `web-rmms-cam-checkin` |
| Title | Camera check-in tuần đường |
| Role | `sa` |
| packKind | `list` (phone sheet + detail · ≠ desktop Kind B) |
| changeScope | `edit_page` · `editTask=1` |
| formPattern | Sheet CI-01 (Pattern B) · Detail CI-02 timeline · LeaveConfirmModal · phone ≤430 |
| domain | **Patrol** (`patrol`) · cite FileService · cite Auth/profile · cite peer `web-rmms-role-gate` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| productRoute | `/tuan-duong/:id` · `/tuan-duong/:id/diem-tuan` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-checkin` (**alias only** · **cấm** invent product slug) |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| BFF | Mobile.Bff `http://localhost:5202` · prefix `mobile-bff/api/v1` · **cấm** web-bff bind |
| contentHash | `sha256:2ff2873ea06c8d3d8e707c24a142432b3f1e356db42bbb006f594fc6b9f213db` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| solution_confirm | **approve** (autoApprove) |
| design_confirm | **approve** |
| be_repo_confirm | **approve** |
| ui_repo_confirm | **approve** |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-checkin/ui/prototype/index.html` |
| real_view_parity | `v1` |
| demo | **N/A** · **cấm** rescan / demo SSOT |
| deltaCite | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` § enqueue #2 |
| prior · design | `confirmed` · compact · reviewUrl · task `task_8376ddfd` |
| prior · po | `confirmed` · compact · task `task_bbc75698` |
| prior · data_analy | `confirmed` · compact · task `task_cdfedcf9` |

> SA **chốt** FormMode↔API · DOMAIN-MAP slug · BFF vs API · entity/migration=none · roleCaps cite.  
> **Cấm** invent API path/DTO · **cấm** HOW (TL) · **cấm** Write MFE.

## 0. Delta vs baseline (edit_page)

| Keep (Live peer mobile-a / patrol-map) | New / change (this task) |
|----------------------------------------|--------------------------|
| GET sessions/{id} · plan-points · check-in-policy · check-ins GET/POST · files · PUT session (kết ca peer) | **Role-gate** trên CI-01/CI-02 · tuần đường write · QL_HAT view · TK+NT block |
| Pattern B GPS · offline queue peer · RouteCapture | CTA/hide non-tuần-đường · `roleGateBanner` · caps từ profile |
| Paths/DTO check-in **không đổi** | **cấm** CamCheckIn* · **cấm** new route · **cấm** Excel / SLA / Mục IV / Giao việc |

## 1. Domain / ownership

| Item | Decision |
|------|----------|
| DOMAIN-MAP slug | `web-rmms-cam-checkin` → **Patrol** / `patrol` · bind peer `web-rmms-mobile-a` + cite `web-rmms-patrol-map` check-ins |
| Rationale | Check-ins + sessions = Patrol Live · photos = FileService cite · caps = role-gate (Integration) cite — **không** domain Camera mới |
| API folder | Reuse `PatrolSessionsController` / check-ins · Mobile.Bff forward · **cấm** new controller |
| Role caps | Cite `web-rmms-role-gate` · `packageCode` / `roleCaps` từ `GET auth/profile` · **cấm** suy `QL_HAT` từ `MANAGER-RMMS` |
| **Cấm** | invent `CamCheckInController` · `api/v1/cam-checkin` · ERP.* · web-bff từ Mobile MFE · fake GPS |

**DOMAIN-MAP row (apply):**

| Feature slug | Domain | kebab · note |
|--------------|--------|--------------|
| `web-rmms-cam-checkin` | Patrol | `patrol` · Live sessions+plan-points+check-in-policy+check-ins GET/POST · cite FileService · cite role-gate caps · MFE Mobile product `/tuan-duong/:id/diem-tuan` · alias `/web-rmms-cam-checkin` · **cấm** invent CamCheckInController · bind peer mobile-a |

**UNCLEAR-CI-DOMAIN-ROW → CLOSED** (row trên).  
**UNCLEAR-CI-ROLE-SOURCE → CLOSED** — deps `web-rmms-role-gate` · profile `packageCode`/`roleCaps` · seed HAT-*→`QL_HAT`.

## 2. FormMode ↔ API

| Mode / zone | UI | API | Write | Notes |
|-------------|----|-----|-------|-------|
| CI-01 sheet load | CheckInSheet | `GET …/patrol/sessions/{id}` | — | 404 → notFound |
| CI-01 plan | Text RO | `GET …/patrol/sessions/{id}/plan-points` | `planPointLabel` | empty OK |
| CI-01 policy | Banner+dist RO | `GET …/patrol/check-in-policy` | client haversine | default 50m on catch |
| CI-01 GPS | Banner Pattern B | `navigator.geolocation` | `lat`/`lng`/`accuracyM` | deny → banner **on Lưu** · **cấm** fake · disabled=saving only |
| CI-01 chainage* | Input optional | handoff/seed | `chainageKm?`/`chainageLabel?` | keep Live DTO |
| CI-01 content | TextArea | — | `content?` | optional |
| CI-01 photos | RouteCapture | files init/PUT/commit | `photoLocalIds`/`photoPins` | tuần đường write · QL_HAT RO |
| CI-01 save | Button | `POST …/patrol/sessions/{id}/check-ins` | body Live | role tuần đường only · offline queue keep |
| CI-02 detail | PatrolDetailPage | `GET …/patrol/sessions/{id}` | — | badge / status |
| CI-02 timeline | List RO | `GET …/patrol/sessions/{id}/check-ins` | — | QL_HAT OK view |
| CI-02 ctaCheckIn | Button | nav CI-01 | — | **hide** non-tuần-đường |
| CI-02 endSession | Button | `PUT …/patrol/sessions/{id}` | peer close | **hide** non-tuần-đường · peer D |
| roleCaps | Hidden / banner | `GET …/auth/profile` (+role-gate enrich) | gate UI | cite packageCode/roleCaps |
| DES-LEAVE | LeaveConfirmModal | — | — | dirty CI-01 |
| DES-GRID / LinErpListFilterBar | — | — | — | **N/A** phone |

### Live endpoints (KEEP — no path/DTO invent)

| Id | Method | BFF path (client) | Downstream | Status |
|----|--------|-------------------|------------|--------|
| API-01 | GET | `mobile-bff/api/v1/patrol/sessions/{id}` | PatrolSessionsController | **Live** reuse |
| API-02 | GET | `mobile-bff/api/v1/patrol/sessions/{id}/plan-points` | Patrol | **Live** reuse |
| API-03 | GET | `mobile-bff/api/v1/patrol/check-in-policy` | Patrol | **Live** reuse |
| API-04 | GET | `mobile-bff/api/v1/patrol/sessions/{id}/check-ins` | Patrol check-ins | **Live** reuse |
| API-05 | POST | `mobile-bff/api/v1/patrol/sessions/{id}/check-ins` | CreatePatrolCheckInRequest | **Live** · BE enforce tuần đường |
| API-06 | PUT | `mobile-bff/api/v1/patrol/sessions/{id}` | session close peer | **Live** cite |
| API-07 | POST/PUT | `mobile-bff/api/v1/files/*` | FileService | **Live** cite RouteCapture |
| API-08 | GET | `mobile-bff/api/v1/auth/profile` | Auth + role-gate enrich | **Live** cite caps |

**POST body (Live KEEP):** `planPointLabel` · `route` · `lat` · `lng` · `accuracyM` · `distanceToPlanM` · `matchOk` · `content?` · `photoLocalIds` · `photoPins` · `tapNx/Ny?` · `objectLat/Lng?` · `chainageKm?` · `chainageLabel?`.

### Pattern B (HARD)

| Rule | Decision |
|------|----------|
| Lưu button | always enabled trừ `saving` · **cấm** `disabled={!gps}` |
| GPS deny | banner on Lưu click · **cấm** fake lat/lng |
| Policy mismatch | banner Live · client haversine vs check-in-policy |

## 3. controlHint → API (cite real-data §B)

| uiField | controlHint | catalogKind | GET / source | write |
|---------|-------------|-------------|--------------|-------|
| session.id | Hidden | — | route param | — |
| planPointLabel | Text RO | — | plan-points | `planPointLabel` |
| chainageKm/Label | Input | — | handoff | optional POST |
| route | Text RO / capture | road-routes cite | session + capture | `route` required |
| lat/lng/accuracyM | GPS | geo | device | POST · Pattern B |
| distanceToPlanM / matchOk | Text RO + Banner | policy | client + policy GET | body |
| content | TextArea | — | — | `content?` |
| photoLocalIds / photoPins | RouteCapture | files | files/* | body · write tuần đường |
| save | Button | — | — | POST check-ins |
| timeline.* | List RO | — | GET check-ins | — |
| ctaCheckIn / endSession | Button | — | — | hide non-tuần-đường |
| roleCaps / roleGateBanner | Hidden / Banner | auth | profile + role-gate | gate UI |

## 4. Persist / entity / migration

| Entity | Table | Edit migration |
|--------|-------|----------------|
| `PatrolSessionEntity` | `rmms_patrol_sessions` | **none** |
| `PatrolCheckInEntity` | `rmms_patrol_check_ins` | **none** |
| Role caps | profile DTO (role-gate) | **none** this feature · cite seed peer |

**parent_json:** **PASS** — MediaIds CSV guid · Note opaque peer KEEP · **cấm** parent `*Json`.  
**Step 4b:** **skip** tại SA · Dev only nếu peer seed role-gate chưa apply.

## 5. Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| Domain | Patrol / `patrol` · cite Integration/Auth (role-gate) · Files |
| API host | `api/src/RMMS.Service.Api/Domains/Patrol/` |
| BFF web (cite) | `web-bff/api/v1/patrol/**` · **MFE không bind** |
| BFF mobile (UI bind) | `mobile-bff/api/v1/patrol/**` · `files/**` · `auth/profile` · **cấm** đổi path Live |
| MFE | `Linm.Web.RMMS.Mobile` · `mobileApiBase()` · phone 430 |
| Response | Linm.Platform.CommonLib `ApiResponse` |
| Auth | Linm.Platform.Authentication · peer Patrol + roleCaps |
| Out | Giao việc · SLA 24h · Mục IV · Excel · native · invent CamCheckIn* · new route |

## 6. FormType pack

| Item | Value |
|------|-------|
| packKind | `list` |
| formPattern | Sheet (CI-01 Pattern B) · Detail (CI-02) · LeaveConfirmModal |
| Grid AC Kind B / DES-GRID / `LinErpListFilterBar` | **N/A/WAIVE** — phone |
| Report AC | **N/A** |
| Leave | dirty CI-01 → LeaveConfirmModal |
| Tabs / Map | none on this feature (map = peer patrol-map) |

## 7. Gates

| Gate | Decision |
|------|----------|
| TZ | n/a (no dueAt on CI) |
| XCO | n/a |
| SHARE | share_a peer Patrol sessions/check-ins · roleCaps from role-gate |
| BE enforce | POST check-in reject non-tuần-đường · FE hide CTA |

## 8. SSOT / anti-duplicate

| Concern | Rule |
|---------|------|
| UI | `@linm-soft-org/linm-web-common-components` + mobile kit · no local Lin* clones |
| HTTP | `mobileApiBase()` only · **cấm** web-bff |
| Files | FileService guid only |
| Role | cite `web-rmms-role-gate` · **cấm** hardcode MANAGER→write |
| Persist | no-parent-json-field |

## 9. Handoff

| Next | Packet |
|------|--------|
| team-lead | T-* edit `CheckInSheet` + `PatrolDetailPage` role-gate · keep Live APIs · no new route |
| dev | implement per TL · BE role enforce POST · Pattern B · leave |
| qa | AC role · GPS B · leave · no invent route · e2eQa queued `/agent-qa*` |
| review | findings |

**Out of this role:** Write MFE · Step 4b · e2e · yarn build/start:std · start other roles (GAP-PKT-ROLE-01).

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:2ff2873ea06c8d3d8e707c24a142432b3f1e356db42bbb006f594fc6b9f213db` · `solution_confirm=approve` · `updatedAt=2026-09-30T17:31:04.000Z` · `changeScope=edit_page` · `taskId=task_a3aedb65`
