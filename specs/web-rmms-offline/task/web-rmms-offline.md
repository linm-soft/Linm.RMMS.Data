# Team lead — Task — web-rmms-offline

> Status: **confirmed** · autoApprove ON · task `task_0069a0fe` · 2026-09-26T05:30:00.000Z  
> **Cấm** implement code tại role này · **cấm** e2e / yarn build / start:std · Step 4b skip.

| | |
|--|--|
| Feature | `web-rmms-offline` |
| Title | Hàng đợi offline |
| Role | `team_lead` |
| packKind | `list` |
| changeScope | `new_page` |
| formPattern | Mobile full list OFF-00 · phone max-width 430 · N/A ERP Modal/Slideout · N/A DES-GRID / LinErpListFilterBar |
| domain | **Patrol** (`patrol`) · cite **Integration** offline-batch · DOMAIN-MAP row `web-rmms-offline` |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| mfeStdRoute | `/web-rmms-offline` |
| mfeStdUrl | `http://localhost:9301/web-rmms-offline` |
| nativeRouteCite | SCREENS `/offline` · alias `/field/offline` · Android `#sc-patrol-offline` · `DES-MOB-PAT-OFFLINE` |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` · Mobile.Bff `:5202` `mobile-bff/api/v1` |
| demo | **N/A** |
| contentHash | `sha256:01ede8e7ff03f06a19e291b345d60faa95a7af42a43bae00efb799458a643cd1` |
| skillVersion | `2026.09.05.03` |
| route_confirm | **approve** (PO/SA chốt · STATUS URL · new_page STD) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-offline/ui/prototype/index.html` |
| prior | data_analy · po · design · sa = **confirmed** |

## 0. changeScope / gates

| Gate | Result |
|------|--------|
| control-hint | `specs/_data-analy/features/web-rmms-offline-control-hint.md` **exists** |
| real-data | `specs/_data-analy/features/web-rmms-offline-real-data.md` **exists** · §A+§B PASS |
| changeScope | `new_page` · full pipeline (không data-analy-only) |
| DES-GRID / LinErpListFilterBar | **N/A** phone list · segment = local filter |
| Step 4b / migration / API Mới / entity | **skip** · none at SA |
| ERP.* / web-bff | **cấm** |
| invent `GET …/queue` | **cấm** |
| Incident P1 | filter-only · **cấm** clear incident khi sync check-in |
| GPS list | stored lat/lng only · **cấm** re-geolocate |

## 1. Scope (DoD)

| In | Out |
|----|-----|
| OFF-00 list local IndexedDB/store · phone 430 | Me tabs: me · me-profile · me-settings · feedback · cam-view |
| Segment Check-in / Sự cố (local filter) | journal / kết ca / tồn tại / tần suất (`web-rmms-mobile-b…e`) |
| Sync: Live POST check-ins · clear **only** 2xx | invent queue GET · clear-all · clear on fail |
| Optional receipt POST offline-batch sau OK | treat offline-batch as apply DB |
| GPS: dùng lat/lng đã lưu lúc enqueue | re-geolocate để bịa payload |
| labels `useFormOptions()` / `offline.*` | hardcode VN trên form |
| route `/web-rmms-offline` (+ alias `/offline` `/field/offline` nếu shell) | native iOS/Android edits · demo SSOT HTML |
| UI 1-1 Android `#sc-patrol-offline` · DES-MOB-PAT-OFFLINE | Field doors BDTX/Khu clone hub |

## 2. Screens / zones

| Zone | Control | Bind / behavior |
|------|---------|-----------------|
| OFF-00 | page chrome | phone 430 · DES-MOB-PAT-OFFLINE |
| NAV | TopBar back + title + syncBtn | back → Home/parent · title `offline.*` · sync = replay |
| SEG | Segment Check-in / Incident | local filter `kind` · **cấm** server filter |
| BANNER | Banner/status | online/offline · pending count |
| CARD | List card title/location/status | local queue items · Badge status |
| empty | EmptyChrome | dashed + hint khi 0 item (per segment) |
| toast | Toast | sync N OK · fail giữ item · **cấm** `window.alert` |

## 3. Live API (HARD)

| Action | Method · Client path | Bind |
|--------|----------------------|------|
| List queue | **local store only** | Appear load · **cấm** GET queue |
| Replay check-in | `POST mobile-bff/api/v1/patrol/sessions/{sessionId}/check-ins` | body `CreatePatrolCheckInRequest` · 2xx → remove item |
| Receipt (optional) | `POST mobile-bff/api/v1/integration/sync/offline-batch` | sau ≥1 OK · `RecordCount`=OK count · Partner·DeviceId·BatchId·Note |
| Incident P2 | `POST mobile-bff/api/v1/incident/incidents` | **deferred** · P1 = filter UI only |

**Body check-in:** PlanPointLabel · Route · Lat · Lng · AccuracyM · DistanceToPlanM · MatchOk · Content · PhotoLocalIds

- Base: `VITE_MOBILE_API_URL=http://localhost:5202/mobile-bff/api/v1`
- Auth: Bearer + company headers (shell interceptor)
- Perm: `patrol.sessions.update` (replay) · incident create = P2
- Partial fail: giữ item lỗi · continue remaining · **cấm** clear-all
- Offline / network: toast · **không** clear

## 4. Task board (T-*)

| ID | Title | Owner | Deps | AC (trace) | Status |
|----|-------|-------|------|------------|--------|
| T-01 | Route + shell OFF-00/NAV · mfeStdRoute `/web-rmms-offline` · phone 430 · REMOVED me*/feedback/cam-view · Android 1-1 chrome | `/agent-dev` | — | PO chrome · design OFF-00/NAV · SA §route · route_confirm | pending |
| T-02 | Local store load · CARD list · SEG filter · BANNER · empty · **cấm** GET queue · align key peer `linm.offline.queue.v1` (UNCLEAR-STORE-KEY Dev) | `/agent-dev` | T-01 | real-data local · design CARD/SEG/BANNER · SA list=local | pending |
| T-03 | SyncBtn replay Live POST check-ins · payload CreatePatrolCheckInRequest · GPS stored only · clear **only** 2xx · partial keep fail · mutex | `/agent-dev` | T-02 | PO DoD sync · SA FormMode sync · design syncBtn | pending |
| T-04 | Optional offline-batch receipt sau OK · RecordCount=OK · toast N · **cấm** batch-as-apply · Incident P1 filter-only (no clear on check-in sync) | `/agent-dev` | T-03 | SA receipt · PO Incident P1 · design toast | pending |
| T-05 | labels useFormOptions/`offline.*` · staff auth · fail toast no alert · list-form quality · entry Home tile / Field hub syncBtn wire | `/agent-dev` | T-02,T-03,T-04 | PO labels/auth · list-form gates · context entry | pending |
| T-06 | QA scenarios + E2E queued · local list · sync 2xx clear · fail keep · segment · phone 430 · mfeStdUrl | `/agent-qa` | T-05 | e2eQa ON · scenarios.md | pending |
| T-07 | Review findings vs design/prototype · route_confirm STATUS | `/agent-review` | T-06 | design reviewUrl · STATUS | pending |

### T-BE / T-BFF / Step 4b

| ID | Status | Note |
|----|--------|------|
| T-BE-API | **n/a** | reuse live check-ins · **không** `/new-endpoint` |
| T-BE-MIG | **n/a** | **không** migration |
| T-BFF | **n/a** | Mobile.Bff proxy live · **cấm** invent queue GET · **cấm** web-bff |

### Dev assign (agent-dev-assign)

| Field | Value |
|-------|-------|
| feature | `web-rmms-offline` |
| packKind | `list` |
| slash | `/agent-dev` |
| mfe cwd | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` |
| implement artifact | `specs/web-rmms-offline/implement/web-rmms-offline.md` |
| BE align | skip until Dev · Step 4b none expected |
| cấm | ERP.* · invent queue GET · e2e ở Dev (QA owns) · re-geolocate · clear-all · native edits · Me tabs |

## 5. route_confirm

| Item | Value |
|------|-------|
| mfeStdRoute | `/web-rmms-offline` |
| mfeStdUrl | `http://localhost:9301/web-rmms-offline` |
| native cite | `/offline` · `/field/offline` · `#sc-patrol-offline` |
| decision | **approve** · PO/SA chốt · new_page · ghi STATUS |
| shell alias | `/offline` · `/field/offline` nếu shell map SCREENS |
| entry | Home tile Lưu trữ · Field hub syncBtn · peer Me row (shell) — **không** làm tab Me trong feature |

## 6. Risks / carry

| ID | Status | Dev note |
|----|--------|----------|
| UNCLEAR-INCIDENT-REPLAY | open P1 | filter-only · P2 POST incident deferred · **cấm** clear incident on check-in sync |
| UNCLEAR-STORE-KEY | open → Dev | align IndexedDB schema/key với peer `linm.offline.queue.v1` · payload sessionId+CreatePatrolCheckInRequest |
| DOMAIN-MAP-OFFLINE | resolved SA | Patrol + Integration cite |
| GAP-DA-OFF-BFF-01 | HARD | Mobile.Bff only |

## 7. Handoff

| Next | Need |
|------|------|
| `/agent-dev` | T-01…T-05 · implement MD · Mobile.Bff Live only · local store |
| `/agent-qa*` | T-06 · E2E ON · **cấm** start:std ở team_lead |
| `/agent-review` | T-07 |

## Version meta

`skillVersion=2026.09.05.03` · `contentHash=sha256:01ede8e7ff03f06a19e291b345d60faa95a7af42a43bae00efb799458a643cd1` · `route_confirm=approve` · `writtenAt=2026-09-26T05:30:00.000Z` · `taskId=task_0069a0fe`
