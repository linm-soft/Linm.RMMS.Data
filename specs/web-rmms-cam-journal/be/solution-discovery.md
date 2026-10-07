# SA — Solution — web-rmms-cam-journal

> Status: **confirmed** · autoApprove ON · task `task_cd103ade` · 2026-10-01T01:20:00.000Z  
> **changeScope=`edit_page`** · packKind=`list` · **cấm** ERP.* · **cấm** invent `CamJournalController` / `cam-journal/*` · **cấm** Step 4b / migration run tại SA · **cấm** Write MFE/native · **cấm** web-bff · **cấm** fake GPS · **cấm** demo-json · **cấm** review PUT (peer C).

| | |
|--|--|
| Feature | `web-rmms-cam-journal` |
| Title | Camera nhật ký tuần đường |
| Role | `sa` |
| packKind | `list` (phone list+form · ≠ desktop Kind B) |
| changeScope | `edit_page` · `editTask=1` |
| formPattern | JL-01 form Pattern B · JL-02 list RO · LeaveConfirmModal · phone ≤430 |
| domain | **Patrol** (`patrol`) · cite FileService · cite Auth/profile · cite peer `web-rmms-role-gate` · bind peer `web-rmms-mobile-b` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| productRoute | `/nhat-ky/:sessionId` · `/nhat-ky/:sessionId/moi` · `/nhat-ky/:sessionId/:lineId` |
| mfeStdUrl | `http://localhost:9301/web-rmms-cam-journal` (**alias only** · **cấm** invent product slug) |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · **cấm ERP.*** |
| BFF | Mobile.Bff `http://localhost:5202` · prefix `mobile-bff/api/v1` · **cấm** web-bff bind |
| contentHash | `sha256:76d6d3e1ec6437552d8e12b1c18c3aa8a0fd16abdcc3ef54b3ebc783d062050e` |
| skillVersion | `2026.09.05.03` |
| schemaVersion | `1` |
| solution_confirm | **approve** (autoApprove) |
| design_confirm | **approve** |
| be_repo_confirm | **approve** |
| ui_repo_confirm | **approve** |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-cam-journal/ui/prototype/index.html` |
| real_view_parity | `v1` |
| demo | **N/A** · **cấm** rescan / demo SSOT |
| deltaCite | `docs/plan/web-rmms-mobile/PLAN-3-VAI.md` § enqueue #3 |
| prior · design | `confirmed` · compact · reviewUrl · task `task_cac06ccb` |
| prior · po | `confirmed` · compact · task `task_f4d8107d` |
| prior · data_analy | `confirmed` · compact · task `task_e44f140b` |

> SA **chốt** FormMode↔API · DOMAIN-MAP slug · BFF vs API · entity/migration=none · roleCaps cite.  
> **Cấm** invent API path/DTO · **cấm** HOW (TL) · **cấm** Write MFE.

## 0. Delta vs baseline (edit_page)

| Keep (Live peer mobile-b) | New / change (this task) |
|---------------------------|--------------------------|
| GET sessions/{id} · journal-lines list/get · POST/PUT journal-lines · files · LOOKUP_STATIC | **Role-gate** trên JL-01/JL-02 · tuần đường write+capture · QL_HAT/TK/NT view-only |
| Pattern B GPS · RouteCapture · Leave dirty | CTA/hide non-tuần-đường · `roleGateBanner` · caps từ profile |
| Paths/DTO journal-lines **không đổi** | **cấm** CamJournal* · **cấm** new route · **cấm** Excel / SLA / Mục IV / Giao việc / review PUT |

## 1. Domain / ownership

| Item | Decision |
|------|----------|
| DOMAIN-MAP slug | `web-rmms-cam-journal` → **Patrol** / `patrol` · bind peer `web-rmms-mobile-b` journal-lines |
| Rationale | Journal lines + sessions = Patrol Live · photos = FileService cite · caps = role-gate (Integration) cite — **không** domain Camera mới |
| API folder | Reuse Patrol journal-lines controllers · Mobile.Bff forward · **cấm** new controller |
| Role caps | Cite `web-rmms-role-gate` · `packageCode` / `roleCaps` từ `GET auth/profile` · QL_HAT = HAT-TRUONG+HAT-PHO · **cấm** suy từ `MANAGER-RMMS` |
| **Cấm** | invent `CamJournalController` · `api/v1/cam-journal` · ERP.* · web-bff từ Mobile MFE · fake GPS |

**DOMAIN-MAP row (apply):**

| Feature slug | Domain | kebab · note |
|--------------|--------|--------------|
| `web-rmms-cam-journal` | Patrol | `patrol` · Live sessions+journal-lines GET/POST/PUT · cite FileService · cite role-gate caps · MFE Mobile product `/nhat-ky/:sessionId` · alias `/web-rmms-cam-journal` · **cấm** invent CamJournalController · bind peer mobile-b |

**UNCLEAR-JL-DOMAIN-ROW → CLOSED** (row trên + DOMAIN-MAP patch).  
**UNCLEAR-JL-ROLE-SOURCE → CLOSED** — deps `web-rmms-role-gate` · profile `packageCode`/`roleCaps` · seed HAT-*→`QL_HAT` · Dev wire caps.

## 2. FormMode ↔ API

| Mode / zone | UI | API | Write | Notes |
|-------------|----|-----|-------|-------|
| JL-02 list load | JournalListPage | `GET …/patrol/sessions/{id}` | — | 404 → notFound |
| JL-02 lineCards | List RO | `GET …/patrol/sessions/{id}/journal-lines` | — | empty «Chưa ghi việc» · QL_HAT/TK/NT OK view |
| JL-02 ctaCreate | Button | nav JL-01 `/moi` | — | **hide** non-tuần-đường |
| JL-01 create | JournalFormPage | — | `POST …/patrol/journal-lines` | `sessionId` from route |
| JL-01 edit | JournalFormPage | `GET …/patrol/journal-lines/{id}` | `PUT …/patrol/journal-lines/{id}` | tuần đường only |
| JL-01 GPS | Banner Pattern B | `navigator.geolocation` | `lat`/`lng`/`accuracyM` | deny → banner **on Lưu** · **cấm** fake · lock=`saving`\|`photoBusy` |
| JL-01 photos | RouteCapture | files init/PUT/commit | `mediaIds` | tuần đường write · others RO |
| JL-01 narrative+meta | TextArea+Select+Input | — | body Live | LOOKUP_STATIC keep |
| JL-01 save | Button | POST/PUT journal-lines | body Live | role tuần đường · BE enforce |
| roleCaps | Hidden / banner | `GET …/auth/profile` (+role-gate enrich) | gate UI | cite packageCode/roleCaps |
| DES-LEAVE | LeaveConfirmModal | — | — | dirty JL-01 write |
| DES-GRID / LinErpListFilterBar | — | — | — | **N/A** phone |

### Live endpoints (KEEP — no path/DTO invent)

| Id | Method | BFF path (client) | Downstream | Status |
|----|--------|-------------------|------------|--------|
| API-01 | GET | `mobile-bff/api/v1/patrol/sessions/{id}` | PatrolSessionsController | **Live** reuse |
| API-02 | GET | `mobile-bff/api/v1/patrol/sessions/{id}/journal-lines` | Patrol journal-lines | **Live** reuse |
| API-03 | GET | `mobile-bff/api/v1/patrol/journal-lines/{id}` | Patrol journal-lines | **Live** reuse |
| API-04 | POST | `mobile-bff/api/v1/patrol/journal-lines` | Create journal-line | **Live** · BE enforce tuần đường |
| API-05 | PUT | `mobile-bff/api/v1/patrol/journal-lines/{id}` | Update journal-line | **Live** · BE enforce · **cấm** review PUT peer C |
| API-06 | POST/PUT | `mobile-bff/api/v1/files/*` | FileService | **Live** cite RouteCapture |
| API-07 | GET | `mobile-bff/api/v1/auth/profile` | Auth + role-gate enrich | **Live** cite caps |

**POST/PUT body (Live KEEP):** `at` · `userName` · `lat` · `lng` · `accuracyM` · `kmText?` · `direction` · `weather` · `kind` · `narrative` · `mediaIds` · `onSiteAction` · `onSiteResult?` · `reportedTo?` · `reportedAt?` · `violationFlag` · `status` · (+ `sessionId` on create).

### Pattern B (HARD)

| Rule | Decision |
|------|----------|
| Lưu button | always enabled trừ `saving`\|`photoBusy` · **cấm** `disabled={!gps}` |
| GPS deny | banner on Lưu click · **cấm** fake lat/lng |
| Role deny | hide CTA + BE reject POST/PUT non-tuần-đường |

## 3. controlHint → API (cite real-data §B)

| uiField | controlHint | catalogKind | GET / source | write |
|---------|-------------|-------------|--------------|-------|
| sessionId | Hidden | — | route param | `sessionId` POST |
| at | DateTimeLocal | — | dto.at | `at` |
| userName | Text RO | auth | profile / dto | `userName` |
| kmText | TextInput | — | dto | `kmText?` |
| direction/weather/kind/status | Select | LOOKUP_STATIC | dto | body |
| narrative | TextArea | — | dto | `narrative` required |
| onSite*/reported*/violationFlag | Checkbox+Select | LOOKUP_STATIC | dto | body |
| lat/lng/accuracyM | GPS | geo | device | POST/PUT · Pattern B |
| mediaIds | RouteCapture | files | files/* | body · write tuần đường |
| save | Button | — | — | POST/PUT |
| lineCards.* | List RO | — | GET journal-lines | — |
| ctaCreate | Button | — | — | hide non-tuần-đường |
| roleCaps / roleGateBanner | Hidden / Banner | auth | profile + role-gate | gate UI |

## 4. Persist / entity / migration

| Entity | Table | Edit migration |
|--------|-------|----------------|
| `PatrolSessionEntity` | `rmms_patrol_sessions` | **none** |
| Journal line (Live peer) | peer mobile-b journal-lines table | **none** |
| Role caps | profile DTO (role-gate) | **none** this feature · cite seed peer |

**parent_json:** **PASS** — `mediaIds` guid list · **cấm** parent `*Json`.  
**Step 4b:** **skip** tại SA · Dev only nếu peer seed role-gate chưa apply.

## 5. Architecture (repo SSOT)

| Layer | Choice |
|-------|--------|
| BackendRoot | `D:/AI-QLBD/Linm.RMMS.WebService` |
| Domain | Patrol / `patrol` · cite Integration/Auth (role-gate) · Files |
| API host | `api/src/RMMS.Service.Api/Domains/Patrol/` · journal-lines Live |
| BFF web (cite) | `web-bff/api/v1/patrol/**` · **MFE không bind** |
| BFF mobile (UI bind) | `mobile-bff/api/v1/patrol/**` · `files/**` · `auth/profile` · **cấm** đổi path Live |
| MFE | `Linm.Web.RMMS.Mobile` · `mobileApiBase()` · pages `WebRmmsMobileB/Journal*Page` · phone 430 |
| Response | Linm.Platform.CommonLib `ApiResponse` |
| Auth | Linm.Platform.Authentication · peer Patrol + roleCaps |
| Out | Giao việc · SLA 24h · Mục IV · Excel · native · invent CamJournal* · new route · review PUT |

## 6. FormType pack

| Item | Value |
|------|-------|
| packKind | `list` |
| formPattern | Form (JL-01 Pattern B) · List (JL-02) · LeaveConfirmModal |
| Grid AC Kind B / DES-GRID / `LinErpListFilterBar` | **N/A/WAIVE** — phone |
| Report AC | **N/A** |
| Leave | dirty JL-01 write → LeaveConfirmModal |
| Tabs / Map | none on JL-01 (pin text + capture) |

## 7. Gates

| Gate | Decision |
|------|----------|
| TZ | n/a |
| XCO | n/a |
| SHARE | share_a peer Patrol sessions/journal-lines · roleCaps from role-gate |
| BE enforce | POST/PUT journal-lines reject non-tuần-đường · FE hide CTA |

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
| team-lead | T-* edit `JournalFormPage` + `JournalListPage` role-gate · keep Live APIs · no new route |
| dev | implement per TL · BE role enforce POST/PUT · Pattern B · leave · caps |
| qa | AC-JL-* · GPS B · leave · no invent route · e2eQa queued `/agent-qa*` |
| review | findings |

**Out of this role:** Write MFE · Step 4b · e2e · yarn build/start:std · start other roles (GAP-PKT-ROLE-01).

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:76d6d3e1ec6437552d8e12b1c18c3aa8a0fd16abdcc3ef54b3ebc783d062050e` · `solution_confirm=approve` · `updatedAt=2026-10-01T01:20:00.000Z` · `changeScope=edit_page` · `taskId=task_cd103ade`
