# SA — Solution — web-rmms-offline

> Status: **confirmed** · autoApprove ON · task `task_a1f562f8` · 2026-09-26T00:45:00.000Z  
> **Cấm** ERP.* · **cấm** invent `GET …/queue` / OfflineQueueController · **cấm** Step 4b / migration ở role SA · **cấm** Write MFE/native · **cấm** web-bff client base · **cấm** e2e / start:std.

| | |
|--|--|
| Feature | `web-rmms-offline` |
| Title | Hàng đợi offline |
| Role | `sa` |
| packKind | `list` |
| changeScope | `new_page` |
| formPattern | Mobile full list OFF-00 · phone max-width 430 · N/A ERP Modal/Slideout · N/A DES-GRID / LinErpListFilterBar |
| domain | **Patrol** (`patrol`) · cite **Integration** (offline-batch receipt) · Incident P2 cite |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · route `/web-rmms-offline` |
| mfeStdUrl | `http://localhost:9301/web-rmms-offline` |
| nativeRouteCite | SCREENS `/offline` · Android `#sc-patrol-offline` · DES-MOB-PAT-OFFLINE |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| BFF | `Linm.RMMS.Mobile.Bff` `:5202` · prefix `mobile-bff/api/v1` · `VITE_MOBILE_API_URL` |
| contentHash | `sha256:01ede8e7ff03f06a19e291b345d60faa95a7af42a43bae00efb799458a643cd1` |
| skillVersion | `2026.09.05.03` |
| solution_confirm | **approve** (autoApprove) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-offline/ui/prototype/index.html` |
| peer | `patrol-offline` · native DoD replay check-ins |

## 1. Domain / ownership

| Item | Decision |
|------|----------|
| DOMAIN-MAP slug | `web-rmms-offline` → **Patrol** / `patrol` · cite Integration |
| Rationale | Primary apply = Live `POST patrol/sessions/{id}/check-ins` · optional receipt = Integration `offline-batch` · queue = **client-local** — không domain Offline mới |
| Cite peers | `patrol-offline` (native) · DES-MOB-PAT-OFFLINE · file attach ids peer check-in |
| API folder | **reuse** `PatrolSessionsController.CreateCheckIn` + `IntegrationEndpointsController.OfflineBatch` · Mobile.Bff catch-all — **no new** controller/entity |
| **Cấm** | invent queue GET / OfflineQueueController · Route mobile-bff trên web-bff · ERP.* · clear local trước 2xx · re-geolocate fake · Me tabs · journal/kết ca/tồn tại/tần suất · iOS/Android edits |

**DOMAIN-MAP row (applied):**

| Feature slug | Domain Pascal | kebab |
|--------------|---------------|-------|
| `web-rmms-offline` | Patrol | `patrol` · Live check-ins replay + cite Integration offline-batch · local queue · MFE `Linm.Web.RMMS.Mobile` `/web-rmms-offline` · **cấm** invent OfflineQueueController |

## 2. FormMode ↔ API

List **không** master Modal. Modes = local browse/filter · sync replay Live · optional receipt.

| Mode / zone | UI | API | Write | Notes |
|-------------|----|-----|-------|-------|
| OFF-00 chrome | page shell | — | — | phone 430 · DES-MOB-PAT-OFFLINE |
| NAV | top bar | — | back peer | bỏ Me tabs |
| BANNER | Banner | — | — | pending count local |
| SEG | Segment checkIn/Incident | — | local filter | P1 incident = filter-only |
| CARD list | Text/Badge | **local IndexedDB** | — | **cấm** GET queue |
| empty | EmptyChrome | local | — | zero pending |
| syncBtn | Button | `POST …/check-ins` | CreatePatrolCheckInRequest | clear item **only** 2xx |
| receipt | (auto) | `POST …/offline-batch` | RecordCount=OK count | after OK only · optional |
| GPS | Hidden | stored lat/lng | body Lat/Lng | **cấm** new fix |
| incident P2 | — | `POST …/incident/incidents` | deferred | **cấm** clear incident on check-in sync |
| Auth | staff | JWT shell | guest → login | perm `patrol.sessions.update` |

### Live endpoints (HARD — from real-data §B)

| Method | BFF path (client) | Downstream | Response bind | Status |
|--------|-------------------|------------|----------------|--------|
| — | — | local store | queue.list · cards · segment | **local only** |
| POST | `mobile-bff/api/v1/patrol/sessions/{sessionId}/check-ins` | Patrol CreateCheckIn | remove item on 2xx | **Live** |
| POST | `mobile-bff/api/v1/integration/sync/offline-batch` | Integration OfflineBatch | toast RecordCount | **Live** stub receipt |
| POST | `mobile-bff/api/v1/incident/incidents` | Incident | P2 only | **deferred** |

- Client base: `http://localhost:5202` + `mobile-bff/api/v1` — **không** gọi `web-bff` từ Mobile MFE.
- **API Mới:** none · **migration:** none · **entity mới:** none · **Step 4b:** skip at SA.
- Body check-in: `PlanPointLabel` · `Route` · `Lat` · `Lng` · `AccuracyM` · `DistanceToPlanM` · `MatchOk` · `Content` · `PhotoLocalIds`/`AttachmentIds`.
- Body receipt: `Partner` · `DeviceId` · `BatchId` · `RecordCount` · `Note`.
- Labels: `useFormOptions()` / `offline.*` · **cấm** hardcode VN.
- Fail: partial keep failed items · toast · **cấm** `window.alert` · **cấm** clear-all · **cấm** mock SSOT.

## 3. BFF vs API

| Layer | Role |
|-------|------|
| Mobile.Bff `:5202` | sole FE entry · proxy `patrol/*` · `integration/sync/offline-batch` · auth rewrite |
| RMMS.Service.Api | existing PatrolSessions CreateCheckIn + Integration OfflineBatch — **no new** Offline controller |
| web-bff | cite only · **not** Mobile client base |

## 4. Entity / migration

| Item | Decision |
|------|----------|
| Tables | none (reuse PatrolCheckIns · SyncJob stub) |
| EF migration | **skip** |
| Step 4b | **skip** at SA · Dev only if Live gap (not expected) |
| Local store | IndexedDB / web store · align peer payload · key cite `linm.offline.queue.v1` (Dev) |

## 5. FE surface (SA contract — Dev implements)

| Zone | Contract |
|------|----------|
| OFF-00 · NAV · SEG · BANNER · CARD · empty · toast | phone 430 · Android 1-1 · **cấm** sửa iOS/Android |
| REMOVED | Me tabs · journal/kết ca/tồn tại/tần suất · Field hub extras |
| GPS | stored only · no browser re-fix on sync |
| DES-GRID / LinErpListFilterBar | **N/A** phone list |
| Route | `mfeStdRoute=/web-rmms-offline` |

## 6. Risks / open

| ID | Status |
|----|--------|
| UNCLEAR-INCIDENT-REPLAY | **carry** — P1 filter-only · P2 POST incident · **cấm** clear incident khi sync check-in |
| UNCLEAR-STORE-KEY | **cite Dev** — web IndexedDB schema align peer payload fields · key peer `linm.offline.queue.v1` |
| GAP-DA-OFF-BFF-01 | **HARD** — Mobile.Bff only · **cấm** Route trên web-bff |
| DOMAIN-MAP-OFFLINE | **resolved** — row `web-rmms-offline` → Patrol |

## 7. Handoff

| Next | Need |
|------|------|
| team_lead | Tasks: OFF-00 local list · segment · sync replay check-ins · clear 2xx only · optional offline-batch · store schema · no Me · no invent GET |
| devSlash | `/agent-dev` |
| qa | empty · sync fail/partial keep · no clear-all · no web-bff · GPS stored · E2E queued `/agent-qa*` |

## Version meta

`skillVersion=2026.09.05.03` · `contentHash=sha256:01ede8e7ff03f06a19e291b345d60faa95a7af42a43bae00efb799458a643cd1` · `solution_confirm=approve` · `writtenAt=2026-09-26T00:45:00.000Z`
