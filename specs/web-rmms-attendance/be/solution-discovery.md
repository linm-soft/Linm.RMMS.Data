# SA — Solution — web-rmms-attendance

> Status: **confirmed** · autoApprove ON · task `task_5dd47158` · 2026-09-26T01:40:00.000Z  
> **Cấm** ERP.* · **cấm** invent `/attendance/*` · report/zones/validate · **cấm** Step 4b / migration ở role SA · **cấm** Write MFE/native · **cấm** web-bff client base · **cấm** e2e / start:std · **cấm** fake GPS · **cấm** demoDays.

| | |
|--|--|
| Feature | `web-rmms-attendance` |
| Title | Chấm công |
| Role | `sa` |
| packKind | `list` |
| changeScope | `new_page` |
| formPattern | Mobile hub + RO report/day/log · phone max-width 430 · N/A ERP Modal/Slideout · N/A DES-GRID / LinErpListFilterBar |
| domain | **Patrol** (`patrol`) · resource `attendance-logs` · cite Auth profile · Integration road-route (cite only) |
| mfe | `D:/AI-QLBD/MFE-Source/Linm.Web.RMMS.Mobile` · mfeStdRoute `/web-rmms-attendance` |
| mfeStdUrl | `http://localhost:9301/web-rmms-attendance` |
| productRoute | SCREENS `/field/attendance` · `/report` · `/day/:key` · `/log/:id` |
| nativeRouteCite | Android `#sc-attendance*` · DES-MOB-ATT · DES-MOB-GPS-DENY |
| be | `D:/AI-QLBD/Linm.RMMS.WebService` |
| BFF | `Linm.RMMS.Mobile.Bff` `:5202` · prefix `mobile-bff/api/v1` · `VITE_MOBILE_API_URL` |
| contentHash | `sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` |
| skillVersion | `2026.09.05.03` |
| solution_confirm | **approve** (autoApprove) |
| reviewUrl | `file:///D:/AI-QLBD/Linm.RMMS.Data/specs/web-rmms-attendance/ui/prototype/index.html` |
| peer | `attendance` · native DoD GPS check-in · Face/NFC **DEFER** |

## 1. Domain / ownership

| Item | Decision |
|------|----------|
| DOMAIN-MAP slug | `web-rmms-attendance` → **Patrol** / `patrol` |
| Rationale | Live CRUD surface = `patrol/attendance-logs` only · report/day = **client aggregate** of GET list · no new domain |
| Cite peers | slug `attendance` · SCREENS Field attendance · DES-MOB-ATT |
| API folder | **reuse** Patrol attendance-logs controller · Mobile.Bff catch-all — **no new** controller/entity |
| **Cấm** | invent `/attendance/*` · report/summary/zones/validate API · Face/NFC · supervise/zone · ERP.* · web-bff client · fake GPS · demoDays · iOS/Android edits · desktop Field |

**DOMAIN-MAP row (applied):**

| Feature slug | Domain Pascal | kebab |
|--------------|---------------|-------|
| `web-rmms-attendance` | Patrol | `patrol` · Live `attendance-logs` GET/POST/GET{id} · report/day=client aggregate · MFE `Linm.Web.RMMS.Mobile` `/web-rmms-attendance` · **cấm** invent `/attendance/*` |

## 2. FormMode ↔ API

Hub **không** master Modal. Modes = hub browse · check-in write · RO report/day/log chain.

| Mode / zone | UI | API | Write | Notes |
|-------------|----|-----|-------|-------|
| ATT-00 chrome | page shell | — | — | phone 430 · DES-MOB-ATT |
| ATT-01 heroStatus | Text RO | GET list → today | — | empty «—» |
| ATT-02 gpsMeta | Text RO | geolocation | — | deny → DES-MOB-GPS-DENY |
| ATT-03 btnCheckIn | Button | POST logs | body below | GPS required · deny = disable |
| ATT-04 btnReport | Button/Nav | — | nav report | no API |
| ATT-05 dayRows | ListRow+Badge | GET list aggregate 7d | — | client group by day |
| ATT-06 report | List RO | GET list group day | — | **cấm** invent report API |
| ATT-07 day | List RO | filter dayKey | — | same GET |
| ATT-08 log | Detail RO | GET `…/{id}` | — | fields §B |
| ATT-09 empty | Empty | `[]` | — | live empty · cấm demoDays |
| Auth | staff | `GET auth/profile` | `userName` → POST | guest → login |
| GPS | Action | navigator.geolocation | `lat`/`lng` | **cấm** fake |

### Live endpoints (HARD — from real-data §B)

| Method | BFF path (client) | Downstream | Response bind | Status |
|--------|-------------------|------------|----------------|--------|
| GET | `mobile-bff/api/v1/patrol/attendance-logs` | Patrol list | hero · dayRows · report/day aggregate | **Live** |
| POST | `mobile-bff/api/v1/patrol/attendance-logs` | Patrol create | refresh GET · hero checked-in | **Live** |
| GET | `mobile-bff/api/v1/patrol/attendance-logs/{id}` | Patrol detail | log.* RO | **Live** |
| GET | `mobile-bff/api/v1/auth/profile` | Auth | `userName` for POST | **Live** cite |

- Client base: `http://localhost:5202` + `mobile-bff/api/v1` — **không** gọi `web-bff` từ Mobile MFE.
- **API Mới:** none · **migration:** none · **entity mới:** none · **Step 4b:** skip at SA.
- POST body (write fields §B): `userName` · `route` · `checkInAt` (UTC now) · `kmPoint?` · `lat` · `lng` · `inZone` (P1 default true) · `status` (P1 key «Đúng tuyến») · `note?`.
- Report/day: **client aggregate** only from GET list — **cấm** invent `/attendance/report|summary|zones|validate`.
- Labels: `useFormOptions()` / `attendance.*` · **cấm** hardcode VN.
- Fail: toast · **cấm** `window.alert` · GPS deny = no POST · **cấm** mock SSOT / demoDays.

## 3. BFF vs API

| Layer | Role |
|-------|------|
| Mobile.Bff `:5202` | sole FE entry · proxy `patrol/attendance-logs*` · auth rewrite |
| RMMS.Service.Api | existing Patrol attendance-logs — **no new** Attendance controller |
| web-bff | cite only · **not** Mobile client base |

## 4. Entity / migration

| Item | Decision |
|------|----------|
| Tables | none (reuse Patrol attendance-logs entity) |
| EF migration | **skip** |
| Step 4b | **skip** at SA · Dev only if Live gap (not expected) |
| Local | none beyond geolocation session · no offline queue on this page |

## 5. FE surface (SA contract — Dev implements)

| Zone | Contract |
|------|----------|
| ATT-00…09 · DES-MOB-ATT · DES-MOB-GPS-DENY | phone 430 · Android 1-1 · **cấm** sửa iOS/Android |
| Entry | Field hub · no new tab · no gộp supervise/zone/Face-NFC |
| Route | `mfeStdRoute=/web-rmms-attendance` · product `/field/attendance*` (UNCLEAR-STD-ROUTE Design chốt) |
| DES-GRID / LinErpListFilterBar | **N/A** phone hub |
| Out | Face/NFC DEFER · report API DEFER · desktop Field · native edits · ERP |

## 6. Risks / open

| ID | Status |
|----|--------|
| UNCLEAR-DOMAIN-MAP-ATT | **resolved** — row `web-rmms-attendance` → Patrol |
| UNCLEAR-REPORT-API | **resolved P1** — client aggregate GET list · **cấm** invent · P2 BE report deferred |
| UNCLEAR-STD-ROUTE | **carry Design/Dev** — follow STATUS mfeStdRoute · product `/field/attendance*` |
| UNCLEAR-EMPTY-COPY | **carry Dev/QA** — live `[]` / hero «—» · **cấm** demoDays |
| GAP-BFF-MOBILE | **HARD** — Mobile.Bff only · **cấm** Route trên web-bff |

## 7. Handoff

| Next | Need |
|------|------|
| team_lead | Tasks: ATT hub GPS check-in · history 7d · report/day/log RO · reuse GET/POST/GET{id} · no invent · no Face · phone 430 |
| devSlash | `/agent-dev` |
| qa | GPS deny · empty · POST success · report chain · phone 430 · no ERP · E2E queued `/agent-qa*` |

## Version meta

`skillVersion=2026.09.05.03` · `schemaVersion=1` · `contentHash=sha256:6f74282b807da7f2cc1aa57ac64848cd1d75ff3383c0f432eaad7bea53fff80e` · `rulesVersion=2026.09.25.2` · `confirmedAt=2026-09-26T01:40:00.000Z` · `solution_confirm=approve`
